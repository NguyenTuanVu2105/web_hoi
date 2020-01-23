module.exports = (sequelize, Sequelize) => {
    const Association = sequelize.define('associations', {
        Gioithieu:      Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci', 
        Lichsu:         Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Association;
}