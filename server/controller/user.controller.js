const db = require("../config/db.config");
const config = require("../config/config");
const configemail = require("../config/configemail");
require("dotenv").config();
const User = db.user;
const Member = db.member;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      return res
        .status(403)
        .send({ success: false, message: "User không tồn tại" });
    }

    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res
        .status(401)
        .send({ success: false, message: "Password không đúng" });
    }

    let token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // token hết hạn sau 24 giờ
    });

    res
      .status(200)
      .send({ Success: true, accessToken: token, message: user.role });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.editPassword = async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        id: req.userId,
      },
    });
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ success: false, message: "Mật khẩu sai!" });
    }
    let updateUser = await User.update(
      {
        password: bcrypt.hashSync(req.body.newpassword, 8),
      },
      {
        where: {
          id: req.userId,
        },
      }
    );
    res.status(200).send({ success: true, data: updateUser });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.ForgetPassword = async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        username: req.body.username,
      },
      include: {
        model: Member,
        attributes: ["Email", "Hovaten"],
      },
    });

    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: "Username không chính xác" });
    } else {
      let token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // token hết hạn sau 24 giờ
      });
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: configemail.email,
          pass: configemail.password,
        },
      });
      let mailOptions = {
        from: "hội máu",
        // to:	'hoithanhnienvandonghienmau@gmail.com',
        to: user.member.Email.trim(),
        subject: "Cập nhật mật khẩu",
        text: "You recieved message from server",
        html: `<div><div style="border-bottom:1px solid gray; width:600px"><h4 style="color:red">
				Hội máu</h4></div><div style="border-bottom:1px solid gray;
				 width:600px"><p>Xin chào ${user.member.Hovaten},
				 </p><p>Bạn vui lòng truy cập link sau và làm theo hướng dẫn để tạo mật khẩu mới:
				 </p><button style="border:1px solid black; background-color:#d7d1d1; line-height:30px;width:70px;text-align:center;margin-bottom:20px"><a href='${process.env.CLIENT_HOST}/cap-nhat-mat-khau/${token}' style="text-decoration: none;">Tại đây</a></button></div></div>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(401).send({ success: false, message: error });
        } else {
          res.status(200).send({ success: true });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.NewPassword = async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        id: req.body.userId,
      },
    });
    let updateUser = await User.update(
      {
        password: bcrypt.hashSync(req.body.newpassword, 8),
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).send({ success: true, data: updateUser });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.checkToken = async (req, res) => {
  try {
    let token = req.body.token;
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Not token provide",
      });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: err,
        });
      } else {
        return res.status(200).send({
          userId: decoded.id,
        });
      }
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
