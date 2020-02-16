const db = require('../config/db.config')
const Branch = db.branch
const Club = db.club
const Member = db.member
const Position = db.position
const Specialized = db.specialized
const Op = db.Sequelize.Op
//chưa test
exports.ViewMember = (req, res) => {
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.page)
    if(req.query.hovaten == null && req.query.nhommau == null)
    {
        Member.findAll({
            limit: limit,
            offset: (offset-1)*limit,
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
            res.status(200).send({success: true, data: information})
        }).catch(err => {
            res.status(500).send({success: false, message: err})
        })
    } else {
        Member.findAll({
            limit: limit,
            offset: (offset-1)*limit,
            where: {
                [Op.or]: [
                        {Hovaten:  req.query.hovaten }, 
                        {Nhommau: req.query.nhommau || null}
                    ]
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
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
    }
}
exports.SearchClub = (req, res) => {
    Club.findAll({
        attributes: ['Madoi', 'Tendoi']
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}
exports.BranchClubInformation = (req, res) => {
    Branch.findAll({
        attributes: ['Machihoi', 'Tenchihoi'],
        include: 
        [{
            model: Club,
            attributes: ['Madoi', 'Tendoi']
        }]
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.LeaderAssociation = (req, res) => {
    Member.findAll({
        attributes: ['Image', 'Hovaten', 'ThoigianHD', 'TinhtrangHD', 'Ghichukhac'],
        include: [{
            model: Position,
            where: {
                Chucvu: 'Hội trưởng'
            },
            attributes: ['Chucvu']
        }]
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}