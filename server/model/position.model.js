module.exports = (sequelize, Sequelize) => {
    const Position = sequelize.define('positions', {
        Chucvu:             Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Bacchuyenmon:       Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Sogiotmau:          Sequelize.INTEGER
    });
    return Position;
}