module.exports = (sequelize, Sequelize) => {
    const Specialized = sequelize.define('specializeds', {
        Bacchuyenmon:       Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Sogiotmau:          Sequelize.STRING
    });
    return Specialized;
}