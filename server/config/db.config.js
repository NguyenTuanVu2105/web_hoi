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
db.school = require('../model/school.model')(sequelize, Sequelize)
db.background = require('../model/background.model')(sequelize, Sequelize)
db.logimage = require('../model/logimage.model')(sequelize, Sequelize)
//Về hội
db.association = require('../model/association.model')(sequelize, Sequelize)
db.activity     = require('../model/activity.association.model')(sequelize, Sequelize)
db.remunerative = require('../model/remunerative.association.model')(sequelize, Sequelize)

db.user.hasOne(db.member)
db.member.belongsTo(db.user)
db.member.hasOne(db.school)
db.school.belongsTo(db.member)
db.specialized.hasMany(db.member)
db.member.belongsTo(db.specialized)
db.position.hasMany(db.member)
db.member.belongsTo(db.position)
db.club.hasMany(db.member)
db.member.belongsTo(db.club)
db.branch.hasMany(db.club)
db.club.belongsTo(db.branch)
// Về hội
db.association.hasMany(db.activity)
db.association.hasMany(db.remunerative)

module.exports = db