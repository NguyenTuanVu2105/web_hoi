const db = require('../config/db.config');
const Branch = db.branch
const Association = db.association
exports.EditAssociation = (req,res) =>{
    Association.update({
        Ngaythanhlap : req.body.ngaythanhlap,
        Phutrach : req.body.phutrach,
        Ngaytruyenthong : req.body.ngaytruyenthong,
<<<<<<< HEAD
        Camtinhvien :  req.body.camtinhvien,
        TNV : req.body.tnv,
        Hoivien : req.body.hoivien,
        Huongdanvien  :  req.body.huongdanvien,
        Huanluyenvien  : req.body.huanluyenvien,
        Canbo  :  req.body.canbo,
=======
        Tongsothanhvien : req.body.tongsothanhvien,
        Gioithieu : req.body.gioithieu,
>>>>>>> bd26fc20ed192dbe11adb3961ca6aa038e8a51d5
        },
        {
        where:{}
    }).then(res.status(200).send({Success : true}))
    .catch(error =>{ res.status(500).send({message: err})})
}

exports.ViewAssociation = (req, res) => {
    Association.findAll({
        include: 
        [{
            model: Branch,
            attributes: ['Machihoi', 'Tenchihoi']
        }]
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
      
}

