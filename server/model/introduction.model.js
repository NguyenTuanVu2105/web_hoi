module.exports = (sequelize, Sequelize) => {
    const Introduction = sequelize.define('introductions', {
        LinkDriver:    Sequelize.STRING,     
    })
    return Introduction
}