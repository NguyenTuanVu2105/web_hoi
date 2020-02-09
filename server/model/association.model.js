module.exports = (sequelize, Sequelize) => {
    const Association = sequelize.define('associations', {
        Ngaythanhlap:       Sequelize.DATE,
        Phutrach:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Ngaytruyenthong:    Sequelize.DATE,
        CSthuochoi:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Tongsothanhvien:    Sequelize.INTEGER,
        Gioithieu:          Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
    });
    return Association;
}