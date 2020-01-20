module.exports = (sequelize, Sequelize) => {
    const Branch = sequelize.define('branchs', {
        Machihoi:       Sequelize.STRING,
        Tenchihoi:      Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Ngaythanhlap:   Sequelize.DATE,
        Gioithieu:      Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Lichsu:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Branch;
}