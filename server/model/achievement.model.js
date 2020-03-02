module.exports = (sequelize, Sequelize) => {
    const Achievement = sequelize.define('achievements', {
        Hoctap_namhoc:      Sequelize.STRING,
        Hoctap_kihoc:       Sequelize.STRING,
        Hoctap_lydo:        Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        Hoatdong_namhoc:    Sequelize.STRING,
        Hoatdong_kihoc:     Sequelize.STRING,
        Hoatdong_lydo:      Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',

    });
    return Achievement;
}