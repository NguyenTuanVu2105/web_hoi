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
    const learnactivity             = require('../controller/leanactivity.controller')
    const imageUploader             = multer({dest: 'images/'})

    app.post('/api/login', usercontroller.login)

    app.put('/api/user/edit/password', [authJwt.verifyToken, verifySignUp.checkPassword], usercontroller.editPassword)

    app.post('/api/forgetpassword', usercontroller.ForgetPassword)

    app.post('/api/newpassword',[authJwt.verifyToken, verifySignUp.checkPassword], usercontroller.NewPassword)

    //member
    app.post('/admin/information/add',[authJwt.verifyToken], membercontroller.AddProfile)

    app.put('/user/information/edit', [authJwt.verifyToken], membercontroller.EditProfile)

    app.get('/user/information/member',[authJwt.verifyToken], membercontroller.ViewProfile)

    app.post('/api/upload/avatar', [imageUploader.single('avatar'), authJwt.verifyToken], membercontroller.uploadAvatar)

    app.get('/api/avatar/:name', (req, res) => {
		const fileName = req.params.name
		if (!fileName) {
			return res.send({
				status: false,
				message: 'no filename specified',
			})
		}
		res.sendFile(path.resolve(`./images/${fileName}`))
    })
    
    //learning and activities

    app.get('/api/learnactivity/view', [authJwt.verifyToken], learnactivity.getLearnActivity)

    app.post('/api/learnactivity/edit', [authJwt.verifyToken], learnactivity.editLearnActivity)

    //position
    app.get('/admin/position/view', [authJwt.verifyToken], positioncontroller.viewPosition)

    app.post('/admin/position/add', [authJwt.verifyToken], positioncontroller.addPosition)

    app.put('/admin/position/update', [authJwt.verifyToken], positioncontroller.editPosition)

    app.delete('/admin/position/delete', [authJwt.verifyToken], positioncontroller.deletePosition)

    //specialized

    app.get('/admin/specialized/view', [authJwt.verifyToken], specializedcontroller.viewSpecialized)

    app.post('/admin/specialized/add', [authJwt.verifyToken], specializedcontroller.addSpecialized)

    app.put('/admin/specialized/update', [authJwt.verifyToken], specializedcontroller.editSpecialized)

    app.delete('/admin/specialized/delete', [authJwt.verifyToken], specializedcontroller.deleteSpecialized)
    
    // club
    app.post('/admin/add/club', [authJwt.verifyToken], clubcontroller.AddClub)

    app.put('/admin/edit/club', [authJwt.verifyToken], clubcontroller.EditClub)

    app.delete('/admin/delete/club', [authJwt.verifyToken], clubcontroller.DeleteClub)

    app.get('/information/club', [authJwt.verifyToken], clubcontroller.ViewOneClub)

    app.get('/information/club/all', [authJwt.verifyToken], clubcontroller.ViewAllClub)

    app.get('/user/captain/club', [authJwt.verifyToken], clubcontroller.Captain)

    //chi hoi

    app.post('/admin/add/branch', [authJwt.verifyToken], branchcontroller.AddBranch)

    app.put('/admin/edit/branch', [authJwt.verifyToken], branchcontroller.EditBranch)

    app.delete('/admin/delete/branch', [authJwt.verifyToken], branchcontroller.DeleteBranch)

    app.get('/information/branch', [authJwt.verifyToken], branchcontroller.ViewBranch)

    app.get('/user/captain/branch', [authJwt.verifyToken], branchcontroller.CaptainBranch)

    //hoi
    app.put('/admin/edit/association', [authJwt.verifyToken], associationcontroller.EditAssociation)

    app.get('/information/association', [authJwt.verifyToken], associationcontroller.ViewAssociation)

    //admin
    app.get('/admin/view/member', [authJwt.verifyToken], admincontroller.ViewMemberInformation)

    app.get('/admin/view/memberLA', [authJwt.verifyToken], admincontroller.ViewMemberLA)
    
    app.get('/branch/club/all', [authJwt.verifyToken], admincontroller.BranchClubInformation)

    app.get('/association/leader/all', [authJwt.verifyToken], admincontroller.LeaderAssociation)

}
