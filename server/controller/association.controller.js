const db = require('../config/db.config')
const Association   = db.association
const Activity      = db.activity
const Remunerative  = db.remunerative

exports.ViewAssociation = (req, res) => {
    Association.findOne({
        where: {
            id: 1
        }
    }).then(association => {
        res.status(200).send({success: true, message: association})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.UpdateAssociation = (req, res) => {
    Association.findOne({
        where: {
            id: 1
        }
    }).then(association => {
        if (!association) {
            Association.create({
                id:                 1,
                Chutichhoi:         req.body.Chutichhoi,
                Phochutich_1:       req.body.Phochutich_1, 
                Phochutich_2:       req.body.Phochutich_2,
                Phochutich_3:       req.body.Phochutich_3,
                Phochutich_4:       req.body.Phochutich_4,
                Uyvien_1:           req.body.Uyvien_1, 
                Uyvien_2:           req.body.Uyvien_1,
                Namthanhlap:        req.body.Namthanhlap,
                Ngaytruyenthong:    req.body.Ngaytruyenthong,
                Camtinhvien:        req.body.Camtinhvien,
                TNV:                req.body.TNV,
                Hoivien:            req.body.Hoivien,
                Huongdanvien:       req.body.Huongdanvien,
                Huanluyenvien:      req.body.Huanluyenvien,
                Canbotangcuong:     req.body.Canbotangcuong,
                Tailieu:            req.body.Tailieu
            }).then(() => {
                res.status(200).send({success: true, message: "Tạo thành công thông tin!"})
            }).catch(err => {
                res.status(500).send({success: false, message: err})
            })
        } else {
            Association.update({
                Chutichhoi:         req.body.Chutichhoi,
                Phochutich_1:       req.body.Phochutich_1, 
                Phochutich_2:       req.body.Phochutich_2,
                Phochutich_3:       req.body.Phochutich_3,
                Phochutich_4:       req.body.Phochutich_4,
                Uyvien_1:           req.body.Uyvien_1, 
                Uyvien_2:           req.body.Uyvien_1,
                Namthanhlap:        req.body.Namthanhlap,
                Ngaytruyenthong:    req.body.Ngaytruyenthong,
                Camtinhvien:        req.body.Camtinhvien,
                TNV:                req.body.TNV,
                Hoivien:            req.body.Hoivien,
                Huongdanvien:       req.body.Huongdanvien,
                Huanluyenvien:      req.body.Huanluyenvien,
                Canbotangcuong:     req.body.Canbotangcuong,
                Tailieu:            req.body.Tailieu
            }, {
                where: {
                    id: 1
                }
            }).then(() => {
                res.status(200).send({success: true, message: "Cập nhập thành công thông tin!"})
            }).catch(err => {
                res.status(500).send({success: false, message: err})
            })
        }
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

// exports.AddAndUpdateRemunerative = (req, res) => {
//     Association.findOne({
//         where: {
//             id: 1
//         }
//     }).then(association => {
//         if (!association) {
//             res.status(404).send({success: false, message: 'Thông tin về hội chưa được tạo!'})
//         } else {
            
//         }
//     }).catch(err => {
//         res.status(500).send({success: false, message: err})
//     })
// }

// exports.AddAndUpdateActivity = (req, res) => {
//     Association.findOne({
//         where: {
//             id: 1
//         }
//     }).then(association => {
//         if (!association) {
//             res.status(404).send({success: false, message: 'Thông tin về hội chưa được tạo!'})
//         } else {
            
//         }
//     }).catch(err => {
//         res.status(500).send({success: false, message: err})
//     })
// }