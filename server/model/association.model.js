module.exports = (sequelize, Sequelize) => {
    const Association = sequelize.define('associations', {
        Ngaythanhlap:       Sequelize.DATEONLY,
        Phutrach:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Ngaytruyenthong:    Sequelize.DATEONLY,
        CSthuochoi:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Tongsothanhvien:    Sequelize.INTEGER,
        Gioithieu:          Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
    });
    return Association;
}