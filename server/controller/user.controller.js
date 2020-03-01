const db = require('../config/db.config')
const config = require('../config/config')
const configemail = require('../config/configemail')
require('dotenv').config()

const User = db.user;
const Member = db.member
const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
var nodemailer = require('nodemailer');
var generator = require('generate-password');

exports.login = (req, res) => {
	User.findOne({
		where: {
			username: req.body.username
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send({message:"User không tồn tại"});
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
		if (!passwordIsValid) {
			return res.status(401).send({message:"Password không đúng"});
		}
		
		var token = jwt.sign({ id: user.id }, config.secret, {
		  	expiresIn: 86400 // token hết hạn sau 24 giờ
		});

		res.status(200).send({ Success : true, accessToken: token,message:user.role})
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}
exports.editPassword = (req, res)=>{
	User.findOne({
		where: {
			id: req.userId
		}, 
	}).then(user => {
		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
		if (!passwordIsValid) {
			return res.status(401).send({message:"Password không đúng"});
		}
		User.update({
			password: bcrypt.hashSync(req.body.newpassword,8)
		},{
			where: { id: req.userId }
		}).then( () =>res.status(200).send({success : true})
			).catch(err =>
				{
					res.status(500).send({message: err})
				})
	}).catch(err =>
        {
            res.status(500).send({message: err})
    })
}
exports.ForgetPassword = (req, res)=>{
	User.findOne({
		where: {
			username: req.body.username
		}, 
		include:{
			model: Member,
			attributes: ['Email','Hovaten'] 
		}
	}).then(user => {
		if (!user) {
			return res.status(401).send({message:"Username không chính xác"});
		}
		else{
			var token = jwt.sign({ id: user.id }, config.secret, {
				expiresIn: 86400 // token hết hạn sau 24 giờ
		  	})
			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
				  user: configemail.email,
				  pass: configemail.password
				}
			  });
			var mailOptions = {
				from: 'hội máu',
				// to:	'hoithanhnienvandonghienmau@gmail.com',
				to:  user.members[0].Email.trim(),
				subject: 'Cập nhật mật khẩu',
				text:'You recieved message from server',
				html: `<div><div style="border-bottom:1px solid gray; width:600px"><h4 style="color:red">
				Hội máu</h4></div><div style="border-bottom:1px solid gray;
				 width:600px"><p>Xin chào ' + ${user.members[0].Hovaten} +',
				 </p><p>Bạn vui lòng truy cập link sau và làm theo hướng dẫn để tạo mật khẩu mới:
				 </p>${process.env.CLIENT_HOST}/newpassword/'${token}</div></div>`			  
			};
			  
			  transporter.sendMail(mailOptions, function(error, info){
				if (error) {
				  res.status(401).send({message:error});
				} else {
				  res.status(200).send({success : true,})
				}
			  });
		}
	}).catch(err =>
        {
            res.status(500).send({message: err})
    })
}
exports.NewPassword = (req, res)=>{
	User.findOne({
		where: {
			id: req.userId
		}, 
	}).then(user => {
		console.log(req.userId)
		User.update({
			password: bcrypt.hashSync(req.body.newpassword,8)
		},{
			where: { id: req.userId }
		}).then( () =>res.status(200).send({success : true})
		).catch(err =>
			{
				res.status(500).send({message: err})
			})
	}).catch(err =>
        {
            res.status(500).send({message: err})
    })
}