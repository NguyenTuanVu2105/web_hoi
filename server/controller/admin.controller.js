const db = require('../config/db.config')
const Branch = db.branch
const Club = db.club
const Member = db.member
const User = db.user
const Position = db.position
const Specialized = db.specialized
const Op = db.Sequelize.Op
//chưa test
exports.ViewMemberInformation = (req, res) => {
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
    if(req.query.hovaten == null && req.query.nhommau == null 
        && req.query.quequan ==null)
    {
        Member.findAll({
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
    console.log(req.query.hovaten)
    console.log(req.query.nhommau)
    console.log(req.query.quequan)
    console.log(req.query.tendoi)
    console.log(req.query.tencihoi)
    var json1 = { 
        Hovaten: req.query.hovaten, 
        Nhommau: req.query.nhommau,
        Quequan: {[Op.like]: '%' + req.query.quequan + '%'},
        // Namsinh: 
    }
    var json2 = {
        Tendoi:  req.query.tendoi 
    }
    var json3 = {
        Tenchihoi: req.query.tenchihoi 
    }
    console.log(json1)
    console.log(json2)
    console.log(json3)
    Object.keys(json1).reduce((key) => (json1[key] == '') && delete json1[key]);
    Object.keys(json2).reduce((key) => (json2[key] == '') && delete json2[key]);
    Object.keys(json3).reduce((key) => (json3[key] == '') && delete json3[key]);
    console.log(json1)
    console.log(json2)
    console.log(json3)
    Member.findAll({
        where: json1,
        include: [
            {
                model: Position,
            },
            {
                model: Specialized,
            },
            {
                model: Club,
                where: json2,
                attributes: ['Tendoi'],
                include:[{
                    model: Branch,
                    where:json3,
                    attributes: ['Tenchihoi']
                }]
        }]
    }).then(information => {
        res.status(200).send(information)
    }).catch(err => {
        console.log(err)
        res.status(500).send({message: err})
    })
}
}