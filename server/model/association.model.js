module.exports = (sequelize, Sequelize) => {
    const Association = sequelize.define('associations', {
        Chutichhoi:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Phochutich_1:       Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Phochutich_2:       Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Phochutich_3:       Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Phochutich_4:       Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Uyvien_1:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Uyvien_2:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Namthanhlap:        Sequelize.STRING,
        Ngaytruyenthong:    Sequelize.STRING,
        Camtinhvien:        Sequelize.INTEGER,
        TNV:                Sequelize.INTEGER,
        Hoivien:            Sequelize.INTEGER,
        Huongdanvien:       Sequelize.INTEGER,
        Huanluyenvien:      Sequelize.INTEGER,
        Canbotangcuong:     Sequelize.INTEGER,
        Tailieu:            Sequelize.STRING,
        TailieuHistory:     Sequelize.STRING
    });
    return Association;
}