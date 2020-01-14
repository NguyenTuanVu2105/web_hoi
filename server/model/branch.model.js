module.exports = (sequelize, Sequelize) => {
    const Branch = sequelize.define('branchs', {
        Tenchihoi: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Ngaythanhlap: Sequelize.DATE,
        Chitiet: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Branch;
}