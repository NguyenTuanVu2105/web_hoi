module.exports = (sequelize, Sequelize) => {
    const Club = sequelize.define('clubs', {
        Madoi: Sequelize.STRING,
        Tendoi: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Ngaythanhlap:       Sequelize.DATEONLY,
        DiachiL:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        DonviQL:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Phutrach:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Ngaytruyenthong:    Sequelize.DATEONLY,
        Camtinhvien:        Sequelize.INTEGER,
        TNV:                Sequelize.INTEGER,
        Hoivien:            Sequelize.INTEGER,
        Huongdanvien:       Sequelize.INTEGER,
        Huanluyenvien:      Sequelize.INTEGER,
        Canbotangcuong:     Sequelize.INTEGER,
        Diemhienmau:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Ketquahoatdong:     Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Club;
}