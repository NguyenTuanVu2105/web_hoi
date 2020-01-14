const db = require('../config/db.config');
const Club = db.club;


exports.AddClub = (req, res) => {
    const club = {};
    if (req.body.name) club.name = req.body.name;
    if (req.body.founding_date) club.founding_date = req.body.founding_date;
    if (req.body.detail) club.detail = req.body.detail;
    Club.findOne({
        where:{name :req.body.name}
    }).then(club =>{
        if(!club) {
            new Club(club).save()
            .then(club => res.status(200).send({success : true, id: club.id}))
            .catch(err => res.status(404).send({message: err}));
        } else {
            res.status(404).send({success: false, message: "club is exist"})
        }
    }).catch(err => res.status(500).send({message: err}))
}

exports.EditClub = (req,res) =>{
    Club.findOne({
        where:{id :req.body.id}
    }).then(club =>{
        if(!club)
            res.status(500).send({message : err})
        else 
        {
        Club.update({
                name: req.body.name,
                founding_date: req.body.founding_date,
                detail:req.body.detail
            },
            {
            where:{id :req.body.id}
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
            id: req.body.id
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
    var q = req.query.club
    Club.findAll(
        {
            attributes: [
                 'name',
            ],
            where: {name: {[db.Sequelize.Op.like]: '%' + q + '%'}},
            // include: [
            //     {
            //         model: Book,
            //         attributes: ['id', 'name','founding_date','detail']
                    
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
//                  'name',
//             ],
//             where: {id: req.query.id},
           
//             include: [
//                 {
//                     model: Book,
//                     attributes: ['id', 'name','image','star']
                    
//                 }
//             ]
//     }).then(books => {
//         res.send(books)
//     }).catch(err => res.status(500).send({message: err}))
// }
