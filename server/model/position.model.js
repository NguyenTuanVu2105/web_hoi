module.exports = (sequelize, Sequelize) => {
    const Position = sequelize.define('positions', {
        Bacchuyenmon:       Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Sogiotmau:          Sequelize.INTEGER
    });
    return Position;
}