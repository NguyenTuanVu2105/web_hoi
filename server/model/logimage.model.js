module.exports = (sequelize, Sequelize) => {
    const LogImage = sequelize.define('logimages', {
        Linkanh: Sequelize.STRING,
    })
    return LogImage
}