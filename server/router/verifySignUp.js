const db = require('../config/db.config');

checkPassword = (req, res, next) => {
		if(req.body.password!=req.body.passwordConfirm){
			res.status(400).send("passwordConfirm is fail");
			return;
		}	
		next();
}

const signUpVerify = {};
signUpVerify.checkPassword = checkPassword;
module.exports = signUpVerify;