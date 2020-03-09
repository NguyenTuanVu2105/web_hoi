const jwt = require('jsonwebtoken')
const config = require('../config/config')
const db = require('../config/db.config')
const User = db.user
const Member = db.member

verifyToken = (req, res, next) => {
	let token = req.headers['x-access-token']
  
	if (!token){
		return res.status(403).send({ 
			auth: false, message: 'No token provided.' 
		})
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
					auth: false, 
					message: 'Fail to Authentication. Error -> ' + err 
				})
		}
		req.userId = decoded.id
		next()
	})
}

checkRoles = (req, res, next) => {
	User.findOne({
		where: {
			id: req.userId
		}
	}).then(user => {
		if (user.role === "doitruong" || user.role === "chihoitruong" || user.role === "hoitruong") {
			next()
			return
		}
		res.status(403).send("Require Role!")
	}).catch(err => {
		res.status(500).send({message: err})
	})
} 

const authJwt = {}
authJwt.verifyToken = verifyToken
authJwt.checkRoles = checkRoles

module.exports = authJwt