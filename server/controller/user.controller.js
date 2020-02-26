const db = require('../config/db.config');
const config = require('../config/config');

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
			password: bcrypt.hashSync(req.body.newpassword,10)
		},{
			where: { id: user.id }
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
		include:[{
			model: Member,
			attributes: ['Email'] 
		}]
	}).then(user => {
		if (!user) {
			return res.status(401).send({message:"Username không chính xác"});
		}
		else{
			var newpassword = generator.generate({
				length: 10,
				numbers: true
			})
			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
				  user: 'hoithanhnienvandonghienmau@gmail.com',
				  pass: 'hoimauhanoi1994@'
				}
			  });
			  
			var mailOptions = {
				from: 'hội máu',
				to:  user.member.Email,
				subject: 'Cập nhật mật khẩu',
				text:'You recieved message from server',
				html: 'Mật khẩu cho tài khoản : ' + req.body.username + ' là ' + newpassword 			  
			};
			  
			  transporter.sendMail(mailOptions, function(error, info){
				if (error) {
				  res.status(401).send({message:error});
				} else {
				  res.status(200).send({success : true})
				  User.update({ password: bcrypt.hashSync(newpassword,10)
					},{
					where: {username: req.body.username}
					})
				}
			  });
		}
	}).catch(err =>
        {
            res.status(500).send({message: err})
    })
}