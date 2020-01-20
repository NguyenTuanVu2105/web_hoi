module.exports = (sequelize, Sequelize) => {
    const Position = sequelize.define('positions', {
        Chucvu:       Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Position;
}