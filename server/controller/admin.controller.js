const db = require('../config/db.config')
var _ = require('lodash');
const Branch = db.branch
const Club = db.club
const Member = db.member
const User = db.user
const Position = db.position
const Specialized = db.specialized
const Op = db.Sequelize.Op

exports.ViewMemberInformation = (req, res) => {
    page = parseInt(req.query.page)
    limit = 10
    queryMember = {}
    if (req.query.hovaten) {
        queryMember['Hovaten'] = {[Op.like]: `%` + req.query.hovaten + `%`}
    }
    if (req.query.nhommau) {
        queryMember['Nhommau'] = req.query.nhommau
    }
    if (req.query.quequan) {
        queryMember['Quequan'] = {[Op.like]: `%` + req.query.quequan + `%`}
    }
    if (req.query.ngaysinh) {
        queryMember['Op.and'] = db.Sequelize.where(db.Sequelize.fn('YEAR', db.Sequelize.col('ngaysinh')), req.query.ngaysinh)
    }
    if (req.query.clubId) {
        queryMember['clubId'] = req.query.clubId
    }
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
            // Kiểm tra quyền hội trưởng

            if (user.role === 'hoitruong') {
                if (!req.query.hovaten && !req.query.nhommau &&
                    !req.query.quequan && !req.query.ngaysinh && 
                    !req.query.clubId && !req.query.branchId) {
        
                    
                    Member.findAndCountAll({
                        limit: limit,
                        offset: (page - 1) * limit,
                        include: [{
                            model: Position,
                        }, {
                            model: Specialized,
                        }, {
                            model: Club,
                            attributes: ['Tendoi'],
                            include:[{
                                model: Branch,
                                attributes: ['Tenchihoi']
                            }]
                        }]
                    }).then(information => {
                        res.status(200).send({success: true, total: information.count, data: information.rows})
                    }).catch(err => {
                        res.status(500).send({success: false, message: err})
                    })
                } else if (!req.query.hovaten && !req.query.nhommau &&
                    !req.query.quequan && !req.query.ngaysinh && 
                    !req.query.clubId && req.query.branchId){


                    Member.findAndCountAll({
                        limit: limit,
                        offset: (page - 1) * limit,
                        include: [{
                            model: Position,
                        }, {
                            model: Specialized,
                        },  {
                            model: Club,
                            where: {
                                branchId: req.query.branchId
                            },
                            attributes: ['Tendoi'],
                            include:[{
                                model: Branch,
                                attributes: ['Tenchihoi']
                            }]
                        }]
                    }).then(information => {
                        res.status(200).send({success: true, total: information.count, data: information.rows})
                    }).catch(err => {
                        res.status(500).send({success: false, message: err})
                    })
                } else if (!req.query.branchId){

                    
                    Member.findAndCountAll({
                        limit: limit,
                        offset: (page - 1) * limit,
                        where: queryMember,
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
                        res.status(200).send({success: true, total: information.count, data: information.rows})
                    }).catch(err => {
                        res.status(500).send({success: false, message: err})
                    })
                } else {
                    Member.findAndCountAll({
                        limit: limit,
                        offset: (page - 1) * limit,
                        where: queryMember,
                        include: [{
                            model: Position,
                        }, {
                            model: Specialized,
                        },  {
                            model: Club,
                            where: {
                                branchId: req.query.branchId
                            },
                            attributes: ['Tendoi'],
                            include:[{
                                model: Branch,
                                attributes: ['Tenchihoi']
                            }]
                        }]
                    }).then(information => {
                        res.status(200).send({success: true, total: information.count, data: information.rows})
                    }).catch(err => {
                        res.status(500).send({success: false, message: err})
                    })
                }

            // Kiểm tra quyền chi hội trưởng

            } else if (user.role === 'chihoitruong') {


                if ((!req.query.hovaten && !req.query.nhommau &&
                    !req.query.quequan && !req.query.ngaysinh && 
                    !req.query.clubId && !req.query.branchId) || 
                    (!req.query.hovaten && !req.query.nhommau &&
                    !req.query.quequan && !req.query.ngaysinh && 
                    !req.query.clubId && req.query.branchId)) {


                    Member.findAndCountAll({
                        limit: limit,
                        offset: (page - 1) * limit,
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
                        res.status(200).send({success: true, total: information.count, data: information.rows})
                    }).catch(err => {
                        res.status(500).send({success: false, message: err})
                    })
                } else {


                    Member.findAndCountAll({
                        limit: limit,
                        offset: (page - 1) * limit,
                        where: queryMember,
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
                        res.status(200).send({success: true, total: information.count, data: information.rows})
                    }).catch(err => {
                        res.status(500).send({success: false, message: err})
                    })
                }
                
            // Kiểm tra quyền đội trưởng

            } else {


                if ((!req.query.hovaten && !req.query.nhommau &&
                    !req.query.quequan && !req.query.ngaysinh && 
                    !req.query.clubId && !req.query.branchId) || 
                    (!req.query.hovaten && !req.query.nhommau &&
                    !req.query.quequan && !req.query.ngaysinh && 
                    !req.query.clubId && req.query.branchId)) {


                    Member.findAndCountAll({
                        limit: limit,
                        offset: (page - 1) * limit,
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
                        res.status(200).send({success: true, total: information.count, data: information.rows})
                    }).catch(err => {
                        res.status(500).send({success: false, message: err})
                    })
                } else {


                    Member.findAndCountAll({
                        limit: limit,
                        offset: (page - 1) * limit,
                        where: queryMember,
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
                                id: member.clubId,
                                branchId: req.query.branchId
                            },
                            attributes: ['Tendoi'],
                            include:[{
                                model: Branch,
                                attributes: ['Tenchihoi']
                            }]
                        }]
                    }).then(information => {
                        res.status(200).send({success: true, total: information.count, data: information.rows})
                    }).catch(err => {
                        res.status(500).send({success: false, message: err})
                    })
                }
            }
        }).catch(err => {
            res.status(500).send({success: false, message: err})
        })
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.ViewMemberLA = (req, res) => {
    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
        
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
            attributes: ['id', 'Madoi', 'Tendoi', 'branchId']
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
                id: 1
            },
            attributes: ['Chucvu']
        }]
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.editRoles = (req, res) => {
    User.update({
        role: req.body.role
    }, {
        where: {
            id: req.body.id
        }
    }).then(
        User.findOne({
            where: {
                id: req.body.id
            }
        }).then(data => res.send(data))
    ).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.viewRoles = (req, res) => {
    Member.findOne({
        where: {
            id: req.query.userId
        }
    }).then(user => {
        User.findOne({
            where: {
                id: user.userId
            },
            attributes: ['id', 'role']
        }).then(roles => {
            res.status(200).send({success: true, message: roles})
        }).catch(err => {
            res.status(500).send({success: false, message: err})
        })
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}