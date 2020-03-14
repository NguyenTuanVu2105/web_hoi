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
    app.post('/api/admin/information/add',[authJwt.verifyToken], membercontroller.AddProfile)

    app.put('/api/user/information/edit', [authJwt.verifyToken], membercontroller.EditProfile)

    app.get('/api/user/information/member',[authJwt.verifyToken], membercontroller.ViewProfile)

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

    app.get('/api/admin/la/view', [authJwt.verifyToken, authJwt.checkRoles], learnactivity.getLearnActivityAdmin)

    app.post('/api/admin/la/edit', [authJwt.verifyToken, authJwt.checkRoles], learnactivity.editLearnActivityAdmin)

    //position
    app.get('/api/admin/position/view', [authJwt.verifyToken], positioncontroller.viewPosition)

    app.post('/api/admin/position/add', [authJwt.verifyToken], positioncontroller.addPosition)

    app.put('/api/admin/position/update', [authJwt.verifyToken], positioncontroller.editPosition)

    app.delete('/api/admin/position/delete', [authJwt.verifyToken], positioncontroller.deletePosition)

    //specialized

    app.get('/api/admin/specialized/view', [authJwt.verifyToken], specializedcontroller.viewSpecialized)

    app.post('/api/admin/specialized/add', [authJwt.verifyToken], specializedcontroller.addSpecialized)

    app.put('/api/admin/specialized/update', [authJwt.verifyToken], specializedcontroller.editSpecialized)

    app.delete('/api/admin/specialized/delete', [authJwt.verifyToken], specializedcontroller.deleteSpecialized)
    
    // club
    app.post('/api/admin/add/club', [authJwt.verifyToken], clubcontroller.AddClub)

    app.put('/api/admin/edit/club', [authJwt.verifyToken], clubcontroller.EditClub)

    app.delete('/api/admin/delete/club', [authJwt.verifyToken], clubcontroller.DeleteClub)

    app.get('/api/information/club', [authJwt.verifyToken], clubcontroller.ViewOneClub)

    app.get('/api/information/club/all', [authJwt.verifyToken], clubcontroller.ViewAllClub)

    app.get('/user/captain/club', [authJwt.verifyToken], clubcontroller.Captain)

    //chi hoi

    app.post('/api/admin/add/branch', [authJwt.verifyToken], branchcontroller.AddBranch)

    app.put('/api/admin/edit/branch', [authJwt.verifyToken], branchcontroller.EditBranch)

    app.delete('/api/admin/delete/branch', [authJwt.verifyToken], branchcontroller.DeleteBranch)

    app.get('/api/information/branch', [authJwt.verifyToken], branchcontroller.ViewBranch)

    app.get('/api/user/captain/branch', [authJwt.verifyToken], branchcontroller.CaptainBranch)

    //hoi
    app.put('/api/admin/edit/association', [authJwt.verifyToken], associationcontroller.EditAssociation)

    app.get('/api/information/association', [authJwt.verifyToken], associationcontroller.ViewAssociation)

    //admin

    app.put('/api/admin/edit/member/information', [authJwt.verifyToken, authJwt.checkRoles], membercontroller.AdminEditProfile)

    app.get('/api/admin/view/member/information', [authJwt.verifyToken, authJwt.checkRoles], membercontroller.AdminViewProfile)

    app.post('/api/admin/upload/avatar', [imageUploader.single('avatar'), authJwt.verifyToken, authJwt.checkRoles], membercontroller.AdminUploadAvatar)

    app.get('/api/admin/view/member', [authJwt.verifyToken], admincontroller.ViewMemberInformation)

    app.get('/api/admin/view/memberLA', [authJwt.verifyToken], admincontroller.ViewMemberLA)
    
    app.get('/api/branch/club/all', [authJwt.verifyToken], admincontroller.BranchClubInformation)

    app.get('/api/association/leader/all', [authJwt.verifyToken], admincontroller.LeaderAssociation)

    app.get('/api/', admincontroller.Search)

}
