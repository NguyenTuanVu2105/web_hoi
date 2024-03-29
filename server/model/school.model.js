module.exports = (sequelize, Sequelize) => {
    const School = sequelize.define('schools', {
        Truong:             Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Lop:                Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Nganh:              Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        GPA:                {
            type        :   Sequelize.FLOAT,
            defaultValue:   null
        },
        HT_Namhoc_Mot:      Sequelize.STRING,
        HT_Kihoc_Mot:       Sequelize.INTEGER,
        HT_Lydo_Mot:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        HT_Namhoc_Hai:      Sequelize.STRING,
        HT_Kihoc_Hai:       Sequelize.INTEGER,
        HT_Lydo_Hai:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        HT_Namhoc_Ba:       Sequelize.STRING,
        HT_Kihoc_Ba:        Sequelize.INTEGER,
        HT_Lydo_Ba:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        HT_Namhoc_Bon:      Sequelize.STRING,
        HT_Kihoc_Bon:       Sequelize.INTEGER,
        HT_Lydo_Bon:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        HT_Namhoc_Nam:      Sequelize.STRING,
        HT_Kihoc_Nam:       Sequelize.INTEGER,
        HT_Lydo_Nam:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        HD_Namhoc_Mot:      Sequelize.STRING,
        HD_Kihoc_Mot:       Sequelize.INTEGER,
        HD_Lydo_Mot:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        HD_Namhoc_Hai:      Sequelize.STRING,
        HD_Kihoc_Hai:       Sequelize.INTEGER,
        HD_Lydo_Hai:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        HD_Namhoc_Ba:       Sequelize.STRING,
        HD_Kihoc_Ba:        Sequelize.INTEGER,
        HD_Lydo_Ba:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        HD_Namhoc_Bon:      Sequelize.STRING,
        HD_Kihoc_Bon:       Sequelize.INTEGER,
        HD_Lydo_Bon:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        HD_Namhoc_Nam:      Sequelize.STRING,
        HD_Kihoc_Nam:       Sequelize.INTEGER,
        HD_Lydo_Nam:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return School;
}