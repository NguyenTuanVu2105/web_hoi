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
                Ngaythanhlap: req.body.ngaythanhlap
            },
            {
            where:{Machihoi :req.body.machihoi}
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
        where:{Machihoik  :req.body.machihoi}
    }).then( result => {
      res.status(200).send({success: true,data: result,});
    })
      
}

exports.SearchBranch = (req, res) => {
    var q = req.query.tenchihoi
    Branch.findAll(
        {
            where: {Tenchihoi: {[db.Sequelize.Op.like]: '%' + q + '%'}},
    }).then(branch => {
        res.status(200).send(branch)
    }).catch(err => res.status(500).send({message: err}))
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