module.exports = (sequelize, Sequelize) => {
    const Association = sequelize.define('associations', {
        Ngaythanhlap:       Sequelize.DATEONLY,
        Phutrach:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Ngaytruyenthong:    Sequelize.DATEONLY,
        CSthuochoi:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Camtinhvien:        Sequelize.INTEGER,
        TNV:                Sequelize.INTEGER,
        Hoivien:            Sequelize.INTEGER,
        Huongdanvien:       Sequelize.INTEGER,
        Huanluyenvien:      Sequelize.INTEGER,
        Canbo:     Sequelize.INTEGER,
    });
    return Association;
}