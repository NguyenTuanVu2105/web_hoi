module.exports = (sequelize, Sequelize) => {
  const Remunerative = sequelize.define("remuneratives", {
    Nam: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    Hoivien: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    Noidungkhenthuong: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    Noicap: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    Soquyetdinh: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
  });
  return Remunerative;
};
