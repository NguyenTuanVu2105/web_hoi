const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
const multer = require('multer')
const path = require("path")

module.exports = function(app) {
    const usercontroller 		= require('../controller/user.controller');



    app.post('/api/auth/signin', usercontroller.login);
}
