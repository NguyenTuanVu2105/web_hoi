const db = require("../config/db.config");
const Club = db.club;
const Position = db.position;
const Member = db.member;
const User = db.user;
const Op = db.Sequelize.Op;

exports.AddClub = async (req, res) => {
  try {
    const club = {};
    if (req.body.branchId) club.branchId = req.body.branchId;
    if (req.body.madoi) club.Madoi = req.body.madoi;
    if (req.body.tendoi) club.Tendoi = req.body.tendoi;
    if (req.body.ngaythanhlap) club.Ngaythanhlap = req.body.ngaythanhlap;
    if (req.body.diachi) club.Diachi = req.body.diachi;
    if (req.body.donviql) club.DonviQl = req.body.donviql;
    if (req.body.phutrach) club.Phutrach = req.body.phutrach;
    if (req.body.ngaytruyenthong)
      club.Ngaytruyenthong = req.body.ngaytruyenthong;
    if (req.body.camtinhvien) club.Camtinhvien = req.body.camtinhvien;
    if (req.body.tnv) club.TNV = req.body.tnv;
    if (req.body.hoivien) club.Hoivien = req.body.hoivien;
    if (req.body.huongdanvien) club.Huongdanvien = req.body.huongdanvien;
    if (req.body.huanluyenvien) club.Huanluyenvien = req.body.huanluyenvien;
    if (req.body.canbotangcuong) club.Canbotangcuong = req.body.canbotangcuong;
    if (req.body.tongsothanhvien)
      club.Tongsothanhvien = req.body.tongsothanhvien;
    if (req.body.diemhienmau) club.Diemhienmau = req.body.diemhienmau;
    if (req.body.ketquahoatdong) club.Ketquahoatdong = req.body.ketquahoatdong;
    let clubs = await Club.findOne({
      where: {
        Madoi: req.body.madoi,
      },
    });
    if (!clubs) {
      new Club(club).save();
      res.status(200).send({ success: true, data: "Create club is success!" });
    } else {
      res.status(404).send({ success: false, message: "Club is exist!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.EditClub = async (req, res) => {
  try {
    let club = await Club.findOne({
      where: {
        Madoi: req.body.madoi,
      },
    });
    if (!club)
      res.status(500).send({ success: false, message: "Club is not exists!" });
    else {
      Club.update(
        {
          Madoi: req.body.madoi,
          Tendoi: req.body.tendoi,
          Ngaythanhlap: req.body.ngaythanhlap,
          Diachi: req.body.diachi,
          DonviQL: req.body.donviql,
          Phutrach: req.body.phutrach,
          Ngaytruyenthong: req.body.ngaytruyenthong,
          Camtinhvien: req.body.camtinhvien,
          TNV: req.body.tnv,
          Hoivien: req.body.hoivien,
          Huongdanvien: req.body.huongdanvien,
          Huanluyenvien: req.body.huanluyenvien,
          Canbotangcuong: req.body.canbotangcuong,
          Diemhienmau: req.body.diemhienmau,
          Ketquahoatdong: req.body.ketquahoatdong,
        },
        {
          where: {
            Madoi: req.body.madoi,
          },
        }
      );
      res.status(200).send({ success: true });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.DeleteClub = async (req, res) => {
  try {
    let club = await Club.destroy({
      where: {
        Madoi: req.body.madoi,
      },
    });
    if (club !== 0) {
      res.status(200).send({ success: true, data: "Destroy success!" });
    } else {
      res.status(403).send({ success: false, message: "Destroy error!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.ViewOneClub = async (req, res) => {
  try {
    let clubs = await Club.findOne({
      where: {
        Madoi: req.query.madoi,
      },
    });
    res.status(200).send({ success: true, data: clubs });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.ViewAllClub = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
  User.findOne({
    where: {
      id: req.userId,
    },
  })
    .then((user) => {
      Member.findOne({
        where: {
          userId: req.userId,
        },
        attributes: ["clubId"],
        include: {
          model: Club,
          attributes: ["branchId"],
        },
      })
        .then((member) => {
          if (user.role === "hoitruong") {
            Club.findAll({
              attributes: ["id", "Madoi", "Tendoi"],
            })
              .then((result) => {
                res.status(200).send({ success: true, data: result });
              })
              .catch((err) => {
                res.status(500).send({ success: false, message: err });
              });
          } else if (user.role === "chihoitruong") {
            Club.findAll({
              where: {
                branchId: member.club.branchId,
              },
              attributes: ["id", "Madoi", "Tendoi"],
            })
              .then((result) => {
                res.status(200).send({ success: true, data: result });
              })
              .catch((err) => {
                res.status(500).send({ success: false, message: err });
              });
          } else {
            Club.findAll({
              where: {
                id: member.clubId,
              },
              attributes: ["id", "Madoi", "Tendoi"],
            })
              .then((result) => {
                res.status(200).send({ success: true, data: result });
              })
              .catch((err) => {
                res.status(500).send({ success: false, message: err });
              });
          }
        })
        .catch((err) => {
          res.status(500).send({ success: false, message: err });
        });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: err });
    });
};

exports.Captain = async (req, res) => {
  try {
    let captain = await Member.findOne({
      where: {
        clubId: req.query.clubId,
      },
      attributes: ["Hovaten", "TinhtrangHD"],
      include: [
        {
          model: Position,
          where: {
            Chucvu: "Đội trưởng",
          },
          attributes: ["Chucvu"],
        },
        {
          model: Club,
          where: {
            branchId: req.query.branchId,
          },
          attributes: ["Madoi", "Tendoi"],
        },
      ],
    });
    res.status(200).send(captain);
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
