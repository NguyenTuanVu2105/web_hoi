const verifySignUp = require('./verifySignUp')
const authJwt = require('./verifyJwtToken')
const multer = require('multer')
const path = require("path")

module.exports = function(app) {
    const usercontroller 		    = require('../controller/user.controller')
    const clubcontroller            = require('../controller/club.controller')
    const branchcontroller          = require('../controller/branch.controller')
    const admincontroller           = require('../controller/admin.controller')
    const membercontroller          = require('../controller/member.controller')
    const associationcontroller     = require('../controller/association.controller')
    const positioncontroller        = require('../controller/position.controller')
    const specializedcontroller     = require('../controller/specialized.controller')

    app.post('/api/login', usercontroller.login)

    app.put('/api/user/edit/password', [authJwt.verifyToken], usercontroller.editPassword)

    //member
    app.post('/admin/information/add', membercontroller.AddProfile)

    app.put('/admin/information/edit', [authJwt.verifyToken],membercontroller.EditProfile)

    app.get('/admin/information/member',[authJwt.verifyToken],membercontroller.ViewProfile)

    //position
    app.get('/admin/position/view', positioncontroller.viewPosition)

    app.post('/admin/position/add', positioncontroller.addPosition)

    app.put('/admin/position/update', positioncontroller.editPosition)

    app.delete('/admin/position/delete', positioncontroller.deletePosition)

    //specialized

    app.get('/admin/specialized/view', specializedcontroller.viewSpecialized)

    app.post('/admin/specialized/add', specializedcontroller.addSpecialized)

    app.put('/admin/specialized/update', specializedcontroller.editSpecialized)

    app.delete('/admin/specialized/delete', specializedcontroller.deleteSpecialized)
    
    // club
    app.post('/admin/add/club', clubcontroller.AddClub)

    app.put('/admin/edit/club', clubcontroller.EditClub)

    app.delete('/admin/delete/club', clubcontroller.DeleteClub)

    app.get('/information/club',clubcontroller.ViewOneClub)

    app.get('/information/club/all',clubcontroller.ViewAllClub)

    app.get('/user/captain/club', clubcontroller.Captain)

    //chi hoi

    app.post('/admin/add/branch', branchcontroller.AddBranch)

    app.put('/admin/edit/branch', branchcontroller.EditBranch)

    app.delete('/admin/delete/branch', branchcontroller.DeleteBranch)

    app.get('/information/branch',branchcontroller.ViewBranch)

    app.get('/user/captain/branch', branchcontroller.CaptainBranch)

    //hoi
    app.put('/admin/edit/association', associationcontroller.EditAssociation)

    app.get('/information/association', associationcontroller.ViewAssociation)

    //admin
    app.get('/admin/view/member', admincontroller.ViewMember)
    
    app.get('/branch/club/all', admincontroller.BranchClubInformation)

    app.get('/association/leader/all', admincontroller.LeaderAssociation)

}
