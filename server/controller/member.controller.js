const db = require('../config/db.config')
const bcrypt = require('bcryptjs')
const fs = require('fs')
const User = db.user
const Profile = db.member
const Position = db.position
const Specialized = db.specialized
const Club = db.club
var currentTime = new Date()

exports.AddProfile = (req, res) => {
    var year = currentTime.getFullYear()
    Profile.findOne({
        where: {
            Hovaten: req.body.hovaten,
            Ngaysinh: req.body.ngaysinh
        }
    }).then(profiles => {
        if(!profiles) {
            Profile.create({
                Hovaten: req.body.hovaten,
                Ngaysinh: req.body.ngaysinh,
                Gioitinh: req.body.gioitinh,
                specializedId: req.body.specializedId,
                positionId: req.body.positionId,
                clubId: req.body.clubId,
                TinhtrangHD  : req.body.tinhtranghd
            }).then(HandleProfile => {
                Club.findOne({
                    where: {
                        id: req.body.clubId
                    },
                    attributes: ['Madoi'],
                    include: [{
                        model: Profile,
                        attributes: ['id', [db.sequelize.fn('COUNT', db.sequelize.col('members.clubId')), 'countMember']]
                    }]
                }).then(infor => {
                    values = JSON.stringify(infor.members[0])
                    numbers = JSON.parse(values)
                    number = numbers['countMember'] + 1
                    if (number < 10) {
                        value = year + '.' + infor.Madoi.substring(0, 8) + '00' + number
                    } else if (number >= 10 && number < 100) {
                        value = year + '.' + infor.Madoi.substring(0, 8) + '0' + number
                    } else {
                        value = year + '.' + infor.Madoi.substring(0, 8) + number
                    }
                    Profile.update({
                        Sothethanhvien: value,
                        userId: HandleProfile.id
                    }, {
                        where: {
                            Hovaten: req.body.hovaten,
                            Ngaysinh: req.body.ngaysinh
                        }
                    }).then(
                        User.create({
                            username: value,
                            password: bcrypt.hashSync("12345678", 8),
                            role: 'member'
                        }).then(user => {
                            res.status(200).send({success: true, data: value, users: user})
                        }).catch(err => {
                            res.status(500).send({success:false, message: err})
                        })
                    ).catch(err => {
                            res.status(500).send({success: false,message: err})
                    })
                    
                }).catch(err => {
                    res.status(500).send({success:false, message: err})
                })
            }).catch(err => {
                res.status(500).send({success:false, message: err})
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
                ThongtinlienheGD  : req.body.thongtinlienhegd ,
                Donvi  : req.body.donvi ,
                Donvicuthe  : req.body.donvicuthe ,
                Trinhdohocvan  : req.body.trinhdohocvan ,
                DoanvienDangvien  : req.body.doanviendangvien,
                Ghichukhac  : req.body.ghichukhac
            },
            {
            where:{userId :req.userId}
            })
            .then(
                res.send({Success : true})
            ).catch(err =>
                {
                    res.status(500).send({message: err})
                })
        }
    }).catch(err => res.status(500).send({message: err}))
}
exports.ViewProfile = (req, res) => {
    console.log(req.userId)
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
        res.status(200).send({success: true, data: profile})
    }).catch(err => {
        res.status(500).send({message: err})
    })
      
}

exports.uploadAvatar = (req, res) => {
    const processedFile = req.file || {}
    let orgName = processedFile.originalname || ''
    orgName = orgName.trim().replace(/ /g, "-")
    const fullPathInServ = processedFile.path
    const newFullPath = `${fullPathInServ}-${orgName}`
    fs.renameSync(fullPathInServ, newFullPath);
    const temp = newFullPath.split('/')
    const fileName = temp[temp.length-1]

    User.findOne({
        where: {
            id: req.userId
        },
        include: [{
            model: Profile
        }]
    }).then(user => {
        Profile.update({
            image: fileName
        },{
        where: { 
            id: user.member.id 
        }
    }).then( () => res.status(200).send({success : true})
    ).catch(err => {
            res.status(500).send({message: err})
        })
    })
}