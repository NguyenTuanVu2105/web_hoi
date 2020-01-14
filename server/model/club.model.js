module.exports = (sequelize, Sequelize) => {
    const Club = sequelize.define('clubs', {
        Tendoi: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Ngaythanhlap: Sequelize.DATE,
        Chitiet: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Club;
}