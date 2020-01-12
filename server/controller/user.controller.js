const db = require('../config/db.config');
const config = require('../config/config');
const User = db.user;
const Member = db.member
var avatar = "./asset/default_avatar.png";
const Op = db.Sequelize.Op;
exports.login = (req, res) => {
	console.log("Sign-In");
	User.findOne({
		where: {
			username: req.body.username
		}, 
		include: [{
			model: Member
		}]
	}).then(user => {
		if (!user) {
			return res.status(404).send({message:"User không tồn tại"});
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
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