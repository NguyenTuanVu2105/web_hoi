module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define('activities', {
        Nam:                Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Hoivien:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Tinhnguyenvien:     Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        SodiemHM:           Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        SoDVMauTT:          Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        SoDVMauPH:          Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Xeploai:            Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    })
    return Activity
}