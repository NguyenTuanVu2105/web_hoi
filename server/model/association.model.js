module.exports = (sequelize, Sequelize) => {
    const Association = sequelize.define('associations', {
        Madonvi: Sequelize.STRING,
        Donvi: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Ngaythanhlap:       Sequelize.DATE,
        DiachiL:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        DonviQL:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Phutrach:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Namthanhlap:        Sequelize.DATE,
        Ngaytruyenthong:    Sequelize.DATE,
        CSthuochoi:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Camtinhvien:        Sequelize.INTEGER,
        TNV:                Sequelize.INTEGER,
        Hoivien:            Sequelize.INTEGER,
        Huongdanvien:       Sequelize.INTEGER,
        Huanluyenvien:      Sequelize.INTEGER,
        Canbotangcuong:     Sequelize.INTEGER,
        Tongsothanhvien:    Sequelize.INTEGER,
        Diemhienmau:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Ketquahoatdong:     Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Gioithieu:      Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Lichsu:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Association;
}