require('dotenv').config()
const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require('./config.json')[env]

let sequelize
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const db = {}
 
db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('../model/user.model')(sequelize, Sequelize)
db.member = require('../model/member.model')(sequelize, Sequelize)
db.specialized = require('../model/specialized.model')(sequelize, Sequelize)
db.position = require('../model/position.model')(sequelize, Sequelize)
db.club = require('../model/club.model')(sequelize, Sequelize)
db.branch = require('../model/branch.model')(sequelize, Sequelize)
db.association = require('../model/association.model')(sequelize, Sequelize)
db.school = require('../model/school.model')(sequelize, Sequelize)
db.learn = require('../model/learn.controller')(sequelize, Sequelize)
db.activity = require('../model/activity.controller')(sequelize, Sequelize)

db.user.hasOne(db.member)
db.member.belongsTo(db.user)
db.member.hasOne(db.school)
db.school.belongsTo(db.member)
db.school.hasOne(db.learn)
db.learn.belongsTo(db.school)
db.school.hasOne(db.activity)
db.activity.belongsTo(db.school)
db.specialized.hasMany(db.member)
db.member.belongsTo(db.specialized)
db.position.hasMany(db.member)
db.member.belongsTo(db.position)
db.club.hasMany(db.member)
db.member.belongsTo(db.club)
db.branch.hasMany(db.club)
db.club.belongsTo(db.branch)
db.association.hasMany(db.branch)
db.branch.belongsTo(db.association)

module.exports = db