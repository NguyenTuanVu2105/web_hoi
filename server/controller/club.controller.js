const db = require('../config/db.config')
const Club = db.club
const Position = db.position
const Member = db.member

exports.AddClub = (req, res) => {
    const club = {};
    if (req.body.madoi) club.Madoi = req.body.madoi;
    if (req.body.tendoi) club.Tendoi = req.body.tendoi;
    if (req.body.ngaythanhlap) club.Ngaythanhlap = req.body.ngaythanhlap;
    if (req.body.diachi) club.Diachi = req.body.diachi;
    if (req.body.donviql) club.DonviQl = req.body.donviql;
    if (req.body.phutrach) club.Phutrach = req.body.phutrach;
    if (req.body.ngaytruyenthong) club.Ngaytruyenthong = req.body.ngaytruyenthong;
    if (req.body.camtinhvien) club.Camtinhvien = req.body.camtinhvien;
    if (req.body.tnv) club.TNV = req.body.tnv;
    if (req.body.hoivien) club.Hoivien = req.body.hoivien;
    if (req.body.huongdanvien) club.Huongdanvien = req.body.huongdanvien;
    if (req.body.huanluyenvien) club.Huanluyenvien = req.body.huanluyenvien;
    if (req.body.canbotangcuong) club.Canbotangcuong = req.body.canbotangcuong;
    if (req.body.tongsothanhvien) club.Tongsothanhvien = req.body.tongsothanhvien;
    if (req.body.diemhienmau) club.Diemhienmau = req.body.diemhienmau;
    if (req.body.ketquahoatdong) club.Ketquahoatdong = req.body.ketquahoatdong;
    Club.findOne({
        where:{Madoi :req.body.madoi}
    }).then(clubs =>{
        if(!clubs) {
            new Club(club).save()
            .then(clubs => res.status(200).send({success : true, Madoi: clubs.Madoi}))
            .catch(err => res.status(404).send({message: err}));
        } else {
            res.status(404).send({success: false, message: "club is exist"})
        }
    }).catch(err => res.status(500).send({message: err}))
}

exports.EditClub = (req,res) =>{
    Club.findOne({
        where:{Madoi :req.body.Madoi}
    }).then(club =>{
        if(!club)
            res.status(500).send({message : err})
        else 
        {
        Club.update({
                Madoi:req.body.madoi,
                Tendoi: req.body.tendoi,
                Ngaythanhlap: req.body.ngaythanhlap,
                Diachi : req.body.diachi,
                DonviQl  :  req.body.donviql,
                Phutrach  :  req.body.phutrach,
                Ngaytruyenthong  :  req.body.ngaytruyenthong,
                Camtinhvien :  req.body.camtinhvien,
                TNV : req.body.tnv,
                Hoivien : req.body.hoivien,
                Huongdanvien  :  req.body.huongdanvien,
                Huanluyenvien  : req.body.huanluyenvien,
                Canbotangcuong  :  req.body.canbotangcuong,
                Diemhienmau  :  req.body.diemhienmau,
                Ketquahoatdong :  req.body.ketquahoatdong
            },
            {
            where:{Madoi :req.body.madoi}
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

exports.DeleteClub = (req,res) =>{
    Club.destroy({
        where: {
            Madoi: req.body.madoi
        }
    }).then(function (result) {
        if(result !== 0)
        {
            res.status(200).send({ success: true })
        }
        else
        {
            res.status(404).json({message: err})
        }
    })
}

exports.ViewOneClub = (req, res) => {
    Club.findOne({
        where:{Madoi  :req.query.madoi}
    }).then( result => {
      res.status(200).send({success: true,data: result,});
    }).catch(err => {
        res.status(500).send({success: false,message: err})
    })
      
}

exports.ViewAllClub = (req, res) => {
    Club.findAll({
        attributes: ['id', 'Madoi', 'Tendoi']
    }).then( result => {
        res.status(200).send({success: true,data: result,})
    }).catch(err => {
        res.status(500).send({success: false,message: err})
    })
}

exports.Captain = (req, res) => {
    Member.findOne({
        where: {
            clubId: req.query.clubId
        },
        attributes: ['Hovaten', 'TinhtrangHD'],
        include: [{
            model: Position,
            where: {
                Chucvu: "Đội trưởng"
            },
            attributes: ['Chucvu']
        }, {
            model: Club,
            where: {
                branchId: req.query.branchId   
            },
            attributes: ['Madoi', 'Tendoi']
        }]
    }).then(captain => {
        res.status(200).send(captain)
    }).catch(err => {
        res.status(500).send({message: err})
    })
}

// exports.searchclubById = (req, res) => {
//     club.findAll(
//         {
//             attributes: [
//                  'Tendoi',
//             ],
//             where: {id: req.query.id},
//     }).then(books => {
//         res.send(books)
//     }).catch(err => res.status(500).send({message: err}))
// }
