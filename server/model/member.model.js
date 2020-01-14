module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define('members', {
        Sothethanhvien:     Sequelize.STRING,
        Hovaten:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Ngaysinh:           Sequelize.DATE,
        Gioitinh:           Sequelize.BOOLEAN,
        Chucvu:             Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Bacchuyenmon:       Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        CMTorHC:            Sequelize.STRING,
        Ngaycap:            Sequelize.DATE,
        Noicap:             Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Dienthoai:          Sequelize.STRING,
        Email:              Sequelize.STRING,
        facebook:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Quequan:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        DiachiLL:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Nhommau:            Sequelize.STRING,
        Rh:                 Sequelize.BOOLEAN,
        SolanHM:            Sequelize.INTEGER,
        NgayvaoHoi:         Sequelize.DATE,
        ThoigianHD:         Sequelize.INTEGER,
        TinhtrangHD:        Sequelize.BOOLEAN,
        ThongtinlienheGD:   Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Donvi:              Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Donvicuthe:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        GPA:                Sequelize.FLOAT,
        Trinhdohocvan:      Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        DoanvienDangvien:   Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Ghichukhac:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Member;
}