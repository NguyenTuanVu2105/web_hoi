const db = require("../config/db.config");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const User = db.user;
const Profile = db.member;
const Specialized = db.specialized;
const Club = db.club;
const School = db.school;
let currentTime = new Date();

exports.AddProfile = async (req, res) => {
  try {
    let year = currentTime.getFullYear();
    if (
      req.body.hovaten === null ||
      req.body.ngaysinh === null ||
      req.body.gioitinh === null ||
      req.body.specializedId === null ||
      req.body.positionId === null ||
      req.body.clubId === null ||
      req.body.tinhtranghd === null
    ) {
      res
        .status(403)
        .send({ success: false, message: "Enter not enough information!" });
    }
    let profiles = await Profile.findOne({
      where: {
        Hovaten: req.body.hovaten,
        Ngaysinh: req.body.ngaysinh,
      },
    });

    if (!profiles) {
      let HandleProfile = await Profile.create({
        Hovaten: req.body.hovaten,
        Ngaysinh: req.body.ngaysinh,
        Gioitinh: req.body.gioitinh,
        specializedId: req.body.specializedId,
        positionId: req.body.positionId,
        clubId: req.body.clubId,
        TinhtrangHD: req.body.tinhtranghd,
      });

      let infor = await Club.findOne({
        where: {
          id: req.body.clubId,
        },
        attributes: ["Madoi"],
        include: [
          {
            model: Profile,
            attributes: [
              "id",
              [
                db.sequelize.fn("COUNT", db.sequelize.col("members.clubId")),
                "countMember",
              ],
            ],
          },
        ],
      });

      values = JSON.stringify(infor.members[0]);
      numbers = JSON.parse(values);
      number = numbers["countMember"] + 1;
      if (number < 10) {
        value = year + "." + infor.Madoi.substring(0, 8) + "00" + number;
      } else if (number >= 10 && number < 100) {
        value = year + "." + infor.Madoi.substring(0, 8) + "0" + number;
      } else {
        value = year + "." + infor.Madoi.substring(0, 8) + number;
      }
      School.create({
        memberId: HandleProfile.id,
      });
      let user = await User.create({
        username: value,
        password: bcrypt.hashSync("12345678", 8),
        role: "member",
      });
      await Profile.update(
        {
          Sothethanhvien: value,
          userId: user.id,
        },
        {
          where: {
            Hovaten: req.body.hovaten,
            Ngaysinh: req.body.ngaysinh,
          },
        }
      );
      res.status(200).send({ success: true, data: value, users: user });
    } else {
      res.status(404).send({ success: false, message: "User is exists!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

// Profile User
exports.EditProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({
      where: {
        userId: req.userId,
      },
    });
    if (!profile)
      res.status(500).send({ success: false, message: "User is not exists!" });
    else {
      Profile.update(
        {
          CMTorHC: req.body.cmtorhc,
          Ngaycap: req.body.ngaycap,
          Noicap: req.body.noicap,
          Dienthoai: req.body.dienthoai,
          Email: req.body.email,
          Facebook: req.body.facebook,
          Quequan: req.body.quequan,
          DiachiLL: req.body.diachill,
          Nhommau: req.body.nhommau,
          Rh: req.body.rh,
          SolanHM: req.body.solanhm,
          ThongtinlienheGD: req.body.thongtinlienhegd,
          Donvi: req.body.donvi,
          Donvicuthe: req.body.donvicuthe,
          Trinhdohocvan: req.body.trinhdohocvan,
          DoanvienDangvien: req.body.doanviendangvien,
          Ghichukhac: req.body.ghichukhac,
        },
        {
          where: {
            userId: req.userId,
          },
        }
      );
      res.status(200).send({ success: true, data: "Update success!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
exports.ViewProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({
      where: {
        userId: req.userId,
      },
      include: [
        {
          model: Specialized,
          attributes: ["Sogiotmau"],
        },
      ],
    });
    res.status(200).send({ success: true, data: profile });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(200).send({ success: true });
    }
    const processedFile = req.file || {};
    let orgName = processedFile.originalname || "";
    orgName = orgName.trim().replace(/ /g, "-");
    const fullPathInServ = processedFile.path;
    const newFullPath = `${fullPathInServ}-${orgName}`;
    fs.renameSync(fullPathInServ, newFullPath);

    let fileString = path.basename(newFullPath);
    let filePath = `${process.env.SERVER_HOST}/api/avatar/` + fileString;

    Profile.update(
      {
        Image: filePath,
      },
      {
        where: {
          userId: req.userId,
        },
      }
    );
    res.status(200).send({ success: true, file: filePath });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

// User management by Admin
exports.AdminEditProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({
      where: {
        id: req.body.id,
      },
    });
    if (!profile) {
      res.status(500).send({ success: false, message: "User is not exists!" });
    } else {
      Profile.update(
        {
          Hovaten: req.body.hovaten,
          Ngaysinh: req.body.ngaysinh,
          Gioitinh: req.body.gioitinh,
          CMTorHC: req.body.cmtorhc,
          Ngaycap: req.body.ngaycap,
          Noicap: req.body.noicap,
          Dienthoai: req.body.dienthoai,
          Email: req.body.email,
          Facebook: req.body.facebook,
          Quequan: req.body.quequan,
          DiachiLL: req.body.diachill,
          Nhommau: req.body.nhommau,
          Rh: req.body.rh,
          SolanHM: req.body.solanhm,
          ThongtinlienheGD: req.body.thongtinlienhegd,
          Donvi: req.body.donvi,
          Donvicuthe: req.body.donvicuthe,
          Trinhdohocvan: req.body.trinhdohocvan,
          DoanvienDangvien: req.body.doanviendangvien,
          Ghichukhac: req.body.ghichukhac,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).send({ success: true, data: "Updated is successful!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
exports.AdminViewProfile = async (req, res) => {
  try {
    let profile = Profile.findOne({
      where: {
        id: req.query.id,
      },
      include: [
        {
          model: Specialized,
          attributes: ["Sogiotmau"],
        },
      ],
    });
    res.status(200).send({ success: true, data: profile });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.AdminUploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(200).send({ success: true });
    }
    const processedFile = req.file || {};
    let orgName = processedFile.originalname || "";
    orgName = orgName.trim().replace(/ /g, "-");
    const fullPathInServ = processedFile.path;
    const newFullPath = `${fullPathInServ}-${orgName}`;
    fs.renameSync(fullPathInServ, newFullPath);

    let fileString = path.basename(newFullPath);
    let filePath = `${process.env.SERVER_HOST}/api/avatar/` + fileString;

    Profile.update(
      {
        Image: filePath,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).send({ success: true, file: filePath });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
