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
		include:{
			model: Member,
			attributes: ['Email','Hovaten'] 
		}
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
				// to:	'hoithanhnienvandonghienmau@gmail.com',
				to:  user.members[0].Email.trim(),
				subject: 'Cập nhật mật khẩu',
				text:'You recieved message from server',
				html: '<div><div style="border-bottom:1px solid gray; width:600px"><h4 style="color:red">Hội máu</h4></div><div style="border-bottom:1px solid gray; width:600px"><p>Xin chào ' + user.members[0].Hovaten +',</p><p>Bạn có thể nhập mã sau làm mật khẩu dùng một lần để đăng nhập vào Hội máu:</p><div style="border:1px solid black; background-color:#d7d1d1; line-height:30px;width:100px;text-align:center;margin-bottom:20px">'+ newpassword+'</div></div></div>'			  
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