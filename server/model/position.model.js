module.exports = (sequelize, Sequelize) => {
  const Position = sequelize.define("positions", {
    Chucvu: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    Capbac: Sequelize.INTEGER,
  });
  return Position;
};
