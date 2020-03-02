module.exports = (sequelize, Sequelize) => {
    const Learn = sequelize.define('learns', {
        Namhoc_Mot:      Sequelize.STRING,
        Kihoc_Mot:       Sequelize.STRING,
        Lydo_Mot:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Namhoc_Hai:      Sequelize.STRING,
        Kihoc_Hai:       Sequelize.STRING,
        Lydo_Hai:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Namhoc_Ba:      Sequelize.STRING,
        Kihoc_Ba:       Sequelize.STRING,
        Lydo_Ba:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Namhoc_Bon:      Sequelize.STRING,
        Kihoc_Bon:       Sequelize.STRING,
        Lydo_Bon:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Namhoc_Nam:      Sequelize.STRING,
        Kihoc_Nam:       Sequelize.STRING,
        Lydo_Nam:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Learn;
}