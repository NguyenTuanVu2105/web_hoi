const db = require('../config/db.config')
const Branch = db.branch
const Club = db.club
const Member = db.member
const User = db.user
const Position = db.position
const Specialized = db.specialized
const Op = db.Sequelize.Op
//chưa test
exports.ViewMember = (req, res) => {
    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
        Member.findOne({
            where: {
                userId: req.userId
            },
            attributes: ['clubId'],
            include: {
                model: Club,
                attributes: ['branchId']
            }
        }).then(member => {
            if (user.role === 'hoitruong') {
                Member.findAll({
                    include: [{
                        model: Position,
                    }, {
                        model: Specialized,
                    },  {
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
            } else if (user.role === 'chihoitruong') {
                Member.findAll({
                    include: [{
                        model: Position,
                    }, {
                        model: Specialized,
                    },  {
                        model: Club,
                        where: {
                            branchId: member.club.branchId
                        },
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
                    include: [{
                        model: Position,
                    }, {
                        model: Specialized,
                    },  {
                        model: Club,
                        where: {
                            id: member.clubId
                        },
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
        }).catch(err => {
            res.status(500).send({success: false, message: err})
        })
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
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
                id: 3
            },
            attributes: ['Chucvu']
        }]
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}