const db = require('../config/db.config')
const Profile = db.member
const Position = db.position
const Specialized = db.specialized
const Club = db.club
var currentTime = new Date()

exports.AddProfile = (req, res) => {
    var year = currentTime.getFullYear()
    const profile = {};
    if (req.body.hovaten) profile.Hovaten = req.body.hovaten
    if (req.body.ngaysinh) profile.Ngaysinh = req.body.ngaysinh
    if (req.body.specializedId) profile.specializedId = req.body.specializedId
    if (req.body.positionId) profile.positionId = req.body.positionId
    if (req.body.clubId) profile.clubId = req.body.clubId
    Profile.findOne({
        where: {
            Hovaten: req.body.hovaten,
            Ngaysinh: req.body.ngaysinh
        }
    }).then(profiles =>{
        if(!profiles) {
            new Profile(profile).save().then().catch(err => res.status(500).send({message: err}))
            Club.findOne({
                where: {
                    id: req.body.clubId
                },
                include: [{
                    model: Profile,
                    attributes: [[db.sequelize.fn('COUNT', db.sequelize.col('')), 'n_hats']]
                }]
            })
        } else {
            res.status(404).send({success: false, message: err})
        }
    }).catch(err => res.status(500).send({message: err}))
}

exports.EditProfile = (req,res) =>{
    Profile.findOne({
        where:{userId :req.userId}
    }).then(profile =>{
        if(!profile)
            res.status(500).send({message : err})
        else 
        {
        Profile.update({
                CMTorHC  : req.body.cmtorhc ,
                Ngaycap  : req.body.ngaycap ,
                Noicap  : req.body.noicap ,
                Dienthoai  : req.body.dienthoai ,
                Email  : req.body.email ,
                Facebook  : req.body.facebook ,
                Quequan  : req.body.quequan ,
                DiachiLL  : req.body.diachill ,
                Nhommau  : req.body.nhommau ,
                Rh  : req.body.rh ,
                SolanHM  : req.body.solanhm ,
                ThoigianHD  : req.body.thoigianhd ,
                TinhtrangHD  : req.body.tinhtranghd ,
                ThongtinlienhaGD  : req.body.thongtinlienhegd ,
                Donvi  : req.body.donvi ,
                Donvicuthe  : req.body.donvicuthe ,
                GPA  : req.body.gpa ,
                Trinhdohocvan  : req.body.trinhdohocvan ,
                DoanvienDangvien  : req.body.doanviendangvien ,
                Ghichukhac  : req.body.ghichukhac,
                Image :req.body.image
            },
            {
            where:{userId :req.userId}
            })
            .then(
                res.send({Success : true})
            ).catch(error =>
                {
                    res.status(500).send({message: err})
                })
        }
    }).catch(err => res.status(500).send({message: err}))
}
exports.ViewProfile = (req, res) => {
    Profile.findOne({
        where: {
            userId : req.userId
        }, 
        include: [{
            model: Specialized,
            attributes: ['Sogiotmau']
        },
    ]
    }).then( profile => {
        res.status(200).send(profile)
    }).catch(err => {
        res.status(500).send({message: err})
    })
      
}