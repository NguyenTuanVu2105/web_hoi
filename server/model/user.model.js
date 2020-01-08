module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        image: Sequelize.STRING,
        role: Sequelize.STRING
    });
    return User;
}