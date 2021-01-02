const path = require("path");
const fs = require("fs");
var moment = require("moment");
const db = require("../config/db.config");
const replaceString = require("replace-string");
var schedule = require("node-schedule");
const Background = db.background;
const LogImage = db.logimage;
const Op = db.Sequelize.Op;

exports.AddBackground = async (req, res) => {
  try {
    const processedFile = req.file || {};
    let orgName = processedFile.originalname || "";
    orgName = orgName.trim().replace(/ /g, "-");
    const fullPathInServ = processedFile.path;
    const newFullPath = `${fullPathInServ}-${orgName}`;
    fs.renameSync(fullPathInServ, newFullPath);

    let fileString = path.basename(newFullPath);
    let filePath = `${process.env.SERVER_HOST}/api/background/` + fileString;
    const background = {};
    if (req.body.tenchuongtrinh)
      background.Tenchuongtrinh = req.body.tenchuongtrinh;
    if (req.body.linkchuongtrinh)
      background.Linkchuongtrinh = req.body.linkchuongtrinh;
    background.Linkanh = filePath;
    if (req.body.ngaydienra) background.Ngaydienra = req.body.ngaydienra;
    if (req.body.ngayketthuc) background.Ngayketthuc = req.body.ngayketthuc;
    if (req.body.diadiem) background.Diadiem = req.body.diadiem;
    let backgrounds = await Background.findOne({
      where: {
        [Op.and]: [
          {
            Tenchuongtrinh: req.body.tenchuongtrinh,
          },
          {
            Linkchuongtrinh: req.body.linkchuongtrinh,
          },
          {
            Linkanh: filePath,
          },
          {
            Ngaydienra: req.body.ngaydienra,
          },
          {
            Ngayketthuc: req.body.ngayketthuc,
          },
          {
            Diadiem: req.body.diadiem,
          },
        ],
      },
    });
    if (!backgrounds) {
      new Background(backgrounds).save();
      res.status(200).send({ success: true });
    } else {
      res.status(403).send({ success: false, message: "background is exist" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
exports.ViewBackground = async (req, res) => {
  try {
    let backgrounds = await Background.findAll({
      order: [["id", "DESC"]],
    });
    res.status(200).send({ success: true, data: backgrounds });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
exports.ViewOneBackground = async (req, res) => {
  try {
    let background = await Background.findOne({
      where: {
        id: req.query.backgroundId,
      },
    });
    res.status(200).send({ success: true, data: background });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.SlideShowBackground = async (req, res) => {
  try {
    let backgrounds = Background.findAll({
      where: {
        Ngayketthuc: {
          [Op.gte]: moment().format("YYYY-MM-DD"),
        },
      },
    });
    res.status(200).send({ success: true, data: backgrounds });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
exports.EditBackground = async (req, res) => {
  try {
    let backgrounds = await Background.findOne({
      where: {
        id: parseInt(req.body.id),
      },
    });
    if (!backgrounds)
      res
        .status(403)
        .send({ success: false, message: "Background is not exists!" });
    else {
      Background.update(
        {
          Tenchuongtrinh: req.body.tenchuongtrinh,
          Linkchuongtrinh: req.body.linkchuongtrinh,
          Ngaydienra: req.body.ngaydienra,
          Ngayketthuc: req.body.ngayketthuc,
          Diadiem: req.body.diadiem,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, data: "Update background is success!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
exports.DeleteBackground = async (req, res) => {
  try {
    let backgrounds = await Background.findOne({
      where: {
        id: req.body.id,
      },
    });
    const linkanh = {};
    linkanh.Linkanh = background.Linkanh;
    new LogImage(linkanh).save();
    let destroyBackground = Background.destroy({
      where: {
        id: req.body.id,
      },
    });
    if (destroyBackground !== 0) {
      res.status(200).send({ success: true });
    } else {
      res.status(403).status({ success: false, message: "An error occurred!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
var x = "!!!!!!";
var j = schedule.scheduleJob(
  {
    hour: 3,
    minute: 30,
    dayOfWeek: 0,
  },
  function DeleteImageSystem() {
    LogImage.findAll({}).then((data) => {
      const host = `${process.env.SERVER_HOST}/api/background`;
      data.map((y) => {
        let a = y.Linkanh;
        if (a == null) return false;
        let x = replaceString(a, host, "./images");
        fs.unlink(x, (err) => {
          if (err) {
          }
          LogImage.destroy({
            where: {
              Linkanh: a,
            },
          }).then((result) => {});
        });
      });
    });
  }.bind(null, x)
);
