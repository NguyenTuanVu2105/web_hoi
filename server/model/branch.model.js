module.exports = (sequelize, Sequelize) => {
    const Branch = sequelize.define('branchs', {
        name: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        founding_date: Sequelize.DATE,
        detail: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Branch;
}