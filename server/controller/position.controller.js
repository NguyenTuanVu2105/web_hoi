const db = require("../config/db.config");
const Position = db.position;
const User = db.user;
const Op = db.Sequelize.Op;

exports.viewPosition = async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        id: req.userId,
      },
    });
    if (user.role === "hoitruong") {
      let position = await Position.findAll({
        attributes: ["id", "Chucvu"],
      });
      res.status(200).send({ success: true, data: position });
    } else if (user.role === "chihoitruong") {
      let position = await Position.findAll({
        where: {
          Capbac: {
            [Op.ne]: 1,
          },
        },
        attributes: ["id", "Chucvu"],
      });
      res.status(200).send({ success: true, data: position });
    } else {
      let position = await Position.findAll({
        where: {
          Capbac: {
            [Op.eq]: 3,
          },
        },
        attributes: ["id", "Chucvu"],
      });
      res.status(200).send({ success: true, data: position });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.addPosition = async (req, res) => {
  try {
    let positions = await Position.findOne({
      where: {
        Chucvu: req.body.chucvu,
        Capbac: req.body.capbac,
      },
    });
    if (!positions) {
      let position = await Position.create({
        Chucvu: req.body.chucvu,
        Capbac: req.body.capbac,
      });
      res.status(200).send({ success: true, data: position });
    } else {
      res.status(404).send({ success: false, message: "Position is exist!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.editPosition = async (req, res) => {
  try {
    let position = await Position.update(
      {
        Chucvu: req.body.chucvu,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).send({ success: true, data: position });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.deletePosition = async (req, res) => {
  try {
    await Position.delete({
      where: {
        id: res.body.id,
      },
    });
    res.status(200).send({ success: true, data: "Deleted is success!" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
