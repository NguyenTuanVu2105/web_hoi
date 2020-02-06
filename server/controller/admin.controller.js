const db = require('../config/db.config')
const Branch = db.branch
const Club = db.club
const Member = db.member
const Position = db.position
const Specialized = db.specialized
//chưa test
exports.ViewMemberbyName = (req, res) => {
    Member.findAll({
        limit: 10,
        offset: (page-1)*10,
        where: {
            Hovaten: req.body.hovaten
        },
        include: [
            {
                model: Position,
            },
            {
                model: Specialized,
            },
            {
            model: Club,
            attributes: ['Tendoi'],
            include:[{
                model: Branch,
                attributes: ['Tenchihoi']
            }]
        }]
    }).then(information => {
        res.status(200).send(information)
    }).catch(err => {
        res.status(500).send({message: err})
    })
}

exports.SearchMemberbyName = (req, res) => {
    var q = req.query.hovaten
    Member.findAll(
        {
            where: {Hovaten: {[db.Sequelize.Op.like]: '%' + q + '%'}},
    }).then(member => {
        res.status(200).send(member)
    }).catch(err => res.status(500).send({message: err}))
}

exports.BranchClubInformation = (req, res) => {
    Branch.findAll({
        attributes: ['Tenchihoi'],
        include: 
        [{
            model: Club,
            attributes: ['Tendoi']
        }]
    }).then(information => {
        res.status(200).send(information)
    }).catch(err => {
        res.status(500).send({message: err})
    })
}

exports.LeaderAssociation = (req, res) => {
    Member.findAll({
        attributes: ['Hovaten', 'ThoigianHD', 'TinhtrangHD', 'Ghichukhac'],
        include: [{
            model: Position,
            where: {
                Chucvu: "Hội trưởng"
            },
            attributes: ['Chucvu']
        }]
    }).then(information => {
        res.status(200).send(information)
    }).catch(err => {
        res.status(500).send({message: err})
    })
}