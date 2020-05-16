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
                    limit: limit,
                    offset: (page - 1) * limit,
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
                }).then(async information => {
                    count = await Member.count()
                    res.status(200).send({success: true, total: count, data: information})
                }).catch(err => {
                    res.status(500).send({success: false, message: err})
                })
            } else if (user.role === 'chihoitruong') {
                Member.findAll({
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
                }).then(async information => {
                    count = await Member.count()
                    res.status(200).send({success: true, total: count, data: information})
                }).catch(err => {
                    res.status(500).send({success: false, message: err})
                })
            } else {
                Member.findAll({
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
                }).then(async information => {
                    count = await Member.count()
                    res.status(200).send({success: true, total: count, data: information})
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
exports.Search = (req, res) => {
    page = parseInt(req.query.page)
    limit = 10
    var json1 = { 
        Hovaten: {[Op.like]: '%' + req.query.hovaten + '%'},
        Nhommau: req.query.nhommau,
        Quequan: {[Op.like]: '%' + req.query.quequan + '%'},
        Ngaysinh:  db.Sequelize.where(db.Sequelize.fn('YEAR', db.Sequelize.col('Ngaysinh')), req.query.ngaysinh),
    }
    var json2 = {
        Tendoi:  {[Op.like]: '%' + req.query.tendoi + '%'},
    }
    var json3 = {
        Tenchihoi:   {[Op.like]: '%' + req.query.tenchihoi + '%'},
    }
    var result1 = _.pickBy(json1, function(value, key) {
        return value !='';
      });
    var result2 = _.pickBy(json2, function(value, key) {
        return value !='';
    });
    var result3 = _.pickBy(json3, function(value, key) {
        return value !='';
    });

    if (!req.query.hovaten && !req.query.nhommau
        && !req.query.quequan && !req.query.namsinh
        && !req.query.tendoi && !req.query.tenchihoi
        && !req.query.truong) {
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
                } else if (user.role === 'chihoitruong') {
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
                    Member.findAll({
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
                }
            }).catch(err => {
                res.status(500).send({success: false, message: err})
            })
        }).catch(err => {
            res.status(500).send({success: false, message: err})
        })
    } else {
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
                    Member.findAndCountAll({
                        where: result1,
                        limit: limit,
                        offset: (page - 1) * limit,
                        include: [{
                            model: Position,
                        }, {
                            model: Specialized,
                        },  {
                            model: Club,
                            attributes: ['Tendoi'],
                            where: result2,
                            include:[{
                                model: Branch,
                                where: result3,
                                attributes: ['Tenchihoi']
                            }]
                        }]
                    }).then(information => {
                        res.status(200).send({success: true, total: information.count, data: information.rows})
                    }).catch(err => {
                        res.status(500).send({success: false, message: err})
                    })
                } else if (user.role === 'chihoitruong') {
                    Member.findAndCountAll({
                        limit: limit,
                        offset: (page - 1) * limit,
                        where: result1,
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
                                branchId: member.club.branchId,
                                result2
                            },
                            attributes: ['Tendoi'],
                            include:[{
                                model: Branch,
                                attributes: ['Tenchihoi'],
                                where: result3
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
                        where: result1,
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
                                result2
                            },
                            attributes: ['Tendoi'],
                            include:[{
                                model: Branch,
                                attributes: ['Tenchihoi'],
                                where: result3
                            }]
                        }]
                    }).then(information => {
                        res.status(200).send({success: true, total: information.count, data: information.rows})
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
}