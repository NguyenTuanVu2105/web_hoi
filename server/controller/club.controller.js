const db = require('../config/db.config');
const Club = db.club;


exports.AddClub = (req, res) => {
    const club = {};
    if (req.body.madoi) club.Madoi = req.body.madoi;
    if (req.body.tendoi) club.Tendoi = req.body.tendoi;
    if (req.body.ngaythanhlap) club.Ngaythanhlap = req.body.ngaythanhlap;
    if (req.body.chitiet) club.Chitiet = req.body.chitiet;
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
    var page = parseInt(req.query.page)
    Club.findAndCountAll({
        limit: 10,
        offset: (page-1)*10
        
    }).then( result => {
       
      res.status(200).send({
      success: true,
      data: result,
    });
    })
      
}
exports.SearchClub = (req, res) => {
    var q = req.query.tendoi
    Club.findAll(
        {
            attributes: [
                'Tendoi',
            ],
            where: {Tendoi: {[db.Sequelize.Op.like]: '%' + q + '%'}},
    }).then(club => {
        res.status(200).send(club)
    }).catch(err => res.status(500).send({message: err}))
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
