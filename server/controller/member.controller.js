const db = require('../config/db.config');
const Profile = db.member;
const Specialized = db.specialized;
const User = db.user;
const Position = db.position
const Specialized = db.specialized
// exports.AddProfile = (req, res) => {
//     const profile = {};
//     if (req.body.hovaten) profile.Hovaten = req.body.hovaten;
//     if (req.body.ngaysinh) profile.Ngaysinh = req.body.ngaysinh;
//     if (req.body.gioitinh) profile.Gioitinh = req.body.gioitinh;
//     if (req.body.cmtorhc) profile.CMTorHC = req.body.cmtorhc;
//     if (req.body.ngaycap) profile.Ngaycap = req.body.ngaycap;
//     if (req.body.noicap) profile.Noicap = req.body.noicap;
//     if (req.body.dienthoai) profile.Dienthoai = req.body.dienthoai;
//     if (req.body.email) profile.Email = req.body.email;
//     if (req.body.facebook) profile.facebook = req.body.facebook;
//     if (req.body.quequan) profile.Quequan = req.body.quequan;
//     if (req.body.diachill) profile.DiachiLL = req.body.diachill;
//     if (req.body.nhommau) profile.Nhommau = req.body.nhommau;
//     if (req.body.rh) profile.Rh = req.body.rh;
//     if (req.body.solanhm) profile.SolanHM = req.body.solanhm;
//     if (req.body.ngayvaohoi) profile.Ngayvaohoi = req.body.ngayvaohoi;
//     if (req.body.thoigianhd) profile.ThoigianHD = req.body.thoigianhd;
//     if (req.body.tinhtranghd) profile.TinhtrangHD = req.body.tinhtranghd;
//     if (req.body.thongtinlienhegd) profile.ThongtinlienhaGD = req.body.thongtinlienhegd;
//     if (req.body.donvi) profile.Donvi = req.body.donvi;
//     if (req.body.donvicuthe) profile.Donvicuthe = req.body.donvicuthe;
//     if (req.body.gpa) profile.GPA = req.body.gpa;
//     if (req.body.trinhdohocvan) profile.Trinhdohocvan = req.body.trinhdohocvan;
//     if (req.body.doanviendangvien) profile.DoanvienDangvien = req.body.doanviendangvien;
//     if (req.body.ghichukhac) profile.Ghichukhac = req.body.ghichukhac;
//     Profile.findOne({
//         where:{userId :req.userId}
//     }).then(profiles =>{
//         if(!profiles) {
//             new Profile(profile).save()
//             .then(profiles => res.status(200).send({success : true, Profile: profiles}))
//             .catch(err => res.status(404).send({message: err}));
//         } else {
//             res.status(404).send({success: false, message: err})
//         }
//     }).catch(err => res.status(500).send({message: err}))
// }

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