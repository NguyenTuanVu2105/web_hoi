module.exports = (sequelize, Sequelize) => {
    const School = sequelize.define('chools', {
        Truong:             Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Lop:                Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Nganh:              Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return School;
}