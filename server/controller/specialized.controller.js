const db = require("../config/db.config");
const Specialized = db.specialized;

exports.viewSpecialized = async (req, res) => {
  try {
    let specialized = await Specialized.findAll({
      attributes: ["id", "Bacchuyenmon"],
    });
    res.status(200).send({ success: true, data: specialized });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.addSpecialized = async (req, res) => {
  try {
    let specializeds = await Specialized.findOne({
      where: {
        Bacchuyenmon: req.body.Bacchuyenmon,
      },
    });
    if (!specializeds) {
      let specialized = await Specialized.create({
        Bacchuyenmon: req.body.Bacchuyenmon,
      });
      res.status(200).send({ success: true, data: specialized });
    } else {
      res.status(404).send({ success: false, message: "Specialized is exist" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.editSpecialized = async (req, res) => {
  try {
    let specialized = await Specialized.update(
      {
        Bacchuyenmon: req.body.Bacchuyenmon,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).send({ success: true, data: specialized });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.deleteSpecialized = async (req, res) => {
  try {
    let specialized = await Specialized.delete({
      where: {
        id: res.body.id,
      },
    });
    res.status(200).send({ success: true, data: specialized });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
