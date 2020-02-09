const db = require('../config/db.config');
const Branch = db.branch;
const Position = db.position
const Club = db.club
const Member = db.member


exports.AddBranch = (req, res) => {
    const branch = {};
    if (req.body.machihoi) branch.Machihoi = req.body.machihoi;
    if (req.body.tenchihoi) branch.Tenchihoi = req.body.tenchihoi;
    if (req.body.ngaythanhlap) branch.Ngaythanhlap = req.body.ngaythanhlap;
    if (req.body.diachi) branch.Diachi = req.body.diachi;
    if (req.body.donviql) branch.DonviQl = req.body.donviql;
    if (req.body.phutrach) branch.Phutrach = req.body.phutrach;
    if (req.body.ngaytruyenthong) branch.Ngaytruyenthong = req.body.ngaytruyenthong;
    if (req.body.csthuochoi) branch.CSthuochoi = req.body.csthuochoi;
    if (req.body.camtinhvien) branch.Camtinhvien = req.body.camtinhvien;
    if (req.body.tnv) branch.TNV = req.body.tnv;
    if (req.body.hoivien) branch.Hoivien = req.body.hoivien;
    if (req.body.huongdanvien) branch.Huongdanvien = req.body.huongdanvien;
    if (req.body.huanluyenvien) branch.Huanluyenvien = req.body.huanluyenvien;
    if (req.body.canbotangcuong) branch.Canbotangcuong = req.body.canbotangcuong;
    if (req.body.tongsothanhvien) branch.Tongsothanhvien = req.body.tongsothanhvien;
    if (req.body.diemhienmau) branch.Diemhienmau = req.body.diemhienmau;
    if (req.body.ketquahoatdong) branch.Ketquahoatdong = req.body.ketquahoatdong;
    Branch.findOne({
        where:{Machihoi :req.body.machihoi}
    }).then(Branchs =>{
        if(!Branchs) {
            new Branch(branch).save()
            .then(branchs => res.status(200).send({success : true, Machihoi: branchs.Machihoi}))
            .catch(err => res.status(404).send({message: err}));
        } else {
            res.status(404).send({success: false, message: "Branch is exist"})
        }
    }).catch(err => res.status(500).send({message: err}))
}

exports.EditBranch = (req,res) =>{
    Branch.findOne({
        where:{Machihoi :req.body.machihoi}
    }).then(Branch =>{
        if(!Branch)
            res.status(500).send({message : err})
        else 
        {
        Branch.update({
                Machihoi:req.body.machihoi,
                Tenchihoi: req.body.tenchihoi,
                Ngaythanhlap: req.body.ngaythanhlap,
                Diachi : req.body.diachi,
                DonviQl  :  req.body.donviql,
                Phutrach  :  req.body.phutrach,
                Ngaytruyenthong  :  req.body.ngaytruyenthong,
                CSthuochoi  :  req.body.csthuochoi,
                Camtinhvien :  req.body.camtinhvien,
                TNV : req.body.tnv,
                Hoivien : req.body.hoivien,
                Huongdanvien  :  req.body.huongdanvien,
                Huanluyenvien  : req.body.huanluyenvien,
                Canbotangcuong  :  req.body.canbotangcuong,
                Tongsothanhvien  :  req.body.tongsothanhvien,
                Diemhienmau  :  req.body.diemhienmau,
                Ketquahoatdong :  req.body.ketquahoatdong
            },
            {
            where:{Machihoi :req.body.machihoi}
            })
            .then(
                res.status(200).send({Success : true})
            ).catch(error =>
                {
                    res.status(500).send({message: err})
                })
        }
    }).catch(err => res.status(500).send({message: err}))
}

exports.DeleteBranch = (req,res) =>{
    Branch.destroy({
        where: {
            Machihoi: req.body.machihoi
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
exports.ViewBranch = (req, res) => {
    Branch.findOne({
        where:{Machihoi  :req.body.machihoi}
    }).then( result => {
      res.status(200).send({success: true,data: result,});
    })
      
}

exports.CaptainBranch = (req, res) => {
    Member.findOne({
        attributes: ['Hovaten', 'TinhtrangHD'],
        include: [{
            model: Position,
            where: {
                Chucvu: "Chi hội trưởng"
            },
            attributes: ['Chucvu']
        }, {
            model: Club,
            attributes: ['Madoi', 'Tendoi'],
            include: [{
                model: Branch,
                where: {
                    id: req.query.branchId
                },
                attributes: ['Machihoi', 'Tenchihoi']
            }]
        }]
    }).then(captain => {
        res.status(200).send(captain)
    }).catch(err => {
        res.status(500).send({message: err})
    })
}