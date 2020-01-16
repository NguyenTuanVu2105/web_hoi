module.exports = (sequelize, Sequelize) => {
    const Club = sequelize.define('clubs', {
        Madoi: Sequelize.STRING,
        Tendoi: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Ngaythanhlap: Sequelize.DATE,
        Doitruong: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Club;
}