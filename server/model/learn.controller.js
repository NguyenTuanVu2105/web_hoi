module.exports = (sequelize, Sequelize) => {
    const Learn = sequelize.define('learns', {
        Namhoc_Mot:      Sequelize.INTEGER,
        Kihoc_Mot:       Sequelize.INTEGER,
        Lydo_Mot:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Namhoc_Hai:      Sequelize.INTEGER,
        Kihoc_Hai:       Sequelize.INTEGER,
        Lydo_Hai:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Namhoc_Ba:       Sequelize.INTEGER,
        Kihoc_Ba:        Sequelize.INTEGER,
        Lydo_Ba:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Namhoc_Bon:      Sequelize.INTEGER,
        Kihoc_Bon:       Sequelize.INTEGER,
        Lydo_Bon:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Namhoc_Nam:      Sequelize.INTEGER,
        Kihoc_Nam:       Sequelize.INTEGER,
        Lydo_Nam:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Learn;
}