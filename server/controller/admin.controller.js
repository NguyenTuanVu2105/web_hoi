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
                        where: {
                            Capbac: {
                                [Op.gte]: 2
                            }
                        }
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
                        where: {
                            Capbac: {
                                [Op.gte]: 2
                            }
                        }
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

exports.BranchClubInformation = (req, res) => {
    Branch.findAll({
        attributes: ['id','Machihoi', 'Tenchihoi'],
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
exports.ViewMember = (req, res) => {
    if(req.query.hovaten == null && req.query.nhommau == null)
    {
        Member.findAll({
            limit: 10,
            offset: (page-1)*10,
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
    }else{
    Member.findAll({
        limit: 10,
        offset: (page-1)*10,
        where: {
            Hovaten: req.body.hovaten,
            Sothethanhvien: req.query.sothethanhvien,
            Hovaten: {[db.Sequelize.Op.like]: '%' + req.query.hovaten + '%'},
            Quequan: {[db.Sequelize.Op.like]: '%' +req.query.quequan + '%'},
            Nhommau: req.query.nhommau,
        },
        include: [
            {
                model: Position,
                where: {Chucvu: {[db.Sequelize.Op.like]: '%' + req.query.chucvu + '%'}},
            },
            {
                model: Specialized,
                where: {Bacchuyenmon: {[db.Sequelize.Op.like]: '%' + req.query.bacchuyenmon + '%'}},
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
}