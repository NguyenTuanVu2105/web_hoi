const jwt = require('jsonwebtoken')
const config = require('../config/config')
const db = require('../config/db.config')
const User = db.user

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

isDoitruong = (req, res, next) => {
	User.findOne({
		where: {
			id: req.userId
		}
	}).then(user => {
		if (user.role === "doitruong") {
			next()
			return
		}
		res.status(403).send("Require Doitruong Role!")
	}).catch(err => {
		res.status(500).send({message: err})
	})
} 

isChihoitruong = (req, res, next) => {
	User.findOne({
		where: {
			id: req.userId
		}
	}).then(user => {
		if (user.role === "chihoitruong") {
			next()
			return
		}
		res.status(403).send("Require Chihoitruong Role!")
	}).catch(err => {
		res.status(500).send({message: err})
	})
}

isHoitruong = (req, res, next) => {
	User.findOne({
		where: {
			id: req.userId
		}
	}).then(user => {
		if (user.role == "hoitruong") {
			console.log(user.role)
			next()
			return
		}
		res.status(403).send("Require Hoitruong Role!")
	}).catch(err => {
		res.status(500).send({message: err})
	})
}

isAdmin = (req, res, next) => {
	
	User.findOne({
		where: {
			id: req.userId
		}
	}).then(user => {
		if (user.role === "admin") {
			next()
			return
		}
				
		res.status(403).send("Require Admin Role!")
		return
	})
}

const authJwt = {}
authJwt.verifyToken = verifyToken
authJwt.isAdmin = isAdmin
authJwt.isHoitruong = isHoitruong
authJwt.isChihoitruong = isChihoitruong
authJwt.isDoitruong = isDoitruong

module.exports = authJwt