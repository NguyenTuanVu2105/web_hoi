const db = require('../config/db.config');
const Club = db.club;


exports.AddClub = (req, res) => {
    const club = {};
    if (req.body.Madoi) club.Madoi = req.body.madoi;
    if (req.body.Tendoi) club.Tendoi = req.body.tendoi;
    if (req.body.Ngaythanhlap) club.Ngaythanhlap = req.body.ngaythanhlap;
    if (req.body.Chitiet) club.Chitiet = req.body.chitiet;
    Club.findOne({
        where:{Madoi :req.body.madoi}
    }).then(club =>{
        if(!club) {
            new Club(club).save()
            .then(club => res.status(200).send({success : true, Madoi: club.madoi}))
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
                Chitiet:req.body.chitiet
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
exports.ViewClub = (req, res) => {
    var q = req.query.tendoi
    Club.findAll(
        {
            attributes: [
                 'Tendoi',
            ],
            where: {Tendoi: {[db.Sequelize.Op.like]: '%' + q + '%'}},
            // include: [
            //     {
            //         model: Book,
            //         attributes: ['id', 'Tendoi','Ngaythanhlap','Chitiet']
                    
            //     }
            // ]
    }).then(club => {
        res.status(200).send(club)
    }).catch(err => res.status(500).send({message: err}))
}
// exports.searchclubById = (req, res) => {
// console.log(req.query.id)
//     club.findAll(
//         {
//             attributes: [
//                  'Tendoi',
//             ],
//             where: {id: req.query.id},
           
//             include: [
//                 {
//                     model: Book,
//                     attributes: ['id', 'Tendoi','image','star']
                    
//                 }
//             ]
//     }).then(books => {
//         res.send(books)
//     }).catch(err => res.status(500).send({message: err}))
// }
