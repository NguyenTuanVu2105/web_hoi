module.exports = (sequelize, Sequelize) => {
    const Branch = sequelize.define('branchs', {
        Machihoi:           Sequelize.STRING,
        Tenchihoi:          Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Ngaythanhlap:       Sequelize.INTEGER,
        Diachi:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        DonviQL:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Phutrach:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Ngaytruyenthong:    Sequelize.DATEONLY,
        CSthuochoi:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Camtinhvien:        Sequelize.INTEGER,
        TNV:                Sequelize.INTEGER,
        Hoivien:            Sequelize.INTEGER,
        Huongdanvien:       Sequelize.INTEGER,
        Huanluyenvien:      Sequelize.INTEGER,
        Canbotangcuong:     Sequelize.INTEGER,
        Diemhienmau:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Ketquahoatdong:     Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Branch;
}