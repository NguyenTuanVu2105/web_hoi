const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
const multer = require('multer')
const path = require("path")

module.exports = function(app) {
    const usercontroller 		= require('../controller/user.controller');
    const clubcontroller        = require('../controller/club.controller');
    const branchcontroller      = require('../controller/branch.controller');
    const admincontroller       = require('../controller/admin.controller');
    const membercontroller      = require('../controller/member.controller');

    app.post('/api/login', usercontroller.login);

    app.put('/api/user/edit/password', [authJwt.verifyToken], usercontroller.editPassword);

    //member
    app.post('/user/information/add', [authJwt.verifyToken],membercontroller.AddProfile);

    app.put('/admin/information/edit', [authJwt.verifyToken],membercontroller.EditProfile);

    app.get('/admin/information/member',[authJwt.verifyToken],membercontroller.ViewProfile);
    
    // club
    app.post('/admin/add/club', clubcontroller.AddClub);

    app.put('/admin/edit/club', clubcontroller.EditClub);

    app.delete('/admin/delete/club', clubcontroller.DeleteClub);

    app.get('/admin/information/club',clubcontroller.ViewClub);

    app.get('/admin/search/club',clubcontroller.SearchClub);

    app.get('/user/captain/club', clubcontroller.Captain);

    //chi hoi

    app.post('/admin/add/branch', branchcontroller.AddBranch);

    app.put('/admin/edit/branch', branchcontroller.EditBranch);

    app.delete('/admin/delete/branch', branchcontroller.DeleteBranch);

    app.get('/admin/information/branch',branchcontroller.ViewBranch);

    app.get('/admin/search/branch',branchcontroller.SearchBranch);

    app.get('/user/captain/branch', branchcontroller.CaptainBranch);

    //admin


}
