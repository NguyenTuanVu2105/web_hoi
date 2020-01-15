require('dotenv').config();
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../model/user.model')(sequelize, Sequelize);
db.member = require('../model/member.model')(sequelize, Sequelize);
db.club = require('../model/club.model')(sequelize, Sequelize);
db.branch = require('../model/branch.model')(sequelize, Sequelize);

db.user.hasMany(db.member);
db.club.hasMany(db.member);
db.member.belongsTo(db.club);
db.branch.hasMany(db.club);
db.club.belongsTo(db.branch);

module.exports = db;