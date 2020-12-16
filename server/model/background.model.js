module.exports = (sequelize, Sequelize) => {
  const Background = sequelize.define("backgrounds", {
    Tenchuongtrinh: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    Linkchuongtrinh: Sequelize.STRING,
    Linkanh: Sequelize.STRING,
    Ngaydienra: Sequelize.STRING,
    Ngayketthuc: Sequelize.DATEONLY,
    Diadiem: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    // Maunen:             Sequelize.STRING,
    // Mauchu:             Sequelize.STRING
  });
  return Background;
};
