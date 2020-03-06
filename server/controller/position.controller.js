const db = require('../config/db.config')
const Position = db.position
const User = db.user
const Op = db.Sequelize.Op

exports.viewPosition = (req, res) => {
    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
        if (user.role === 'hoitruong') {
            Position.findAll({
                attributes: ['id', 'Chucvu']
            }).then(position => {
                res.status(200).send({success: true, data: position})
            }).catch(err => {
                res.status(500).send({success: false, message: err})
            })
        } else if (user.role === 'chihoitruong') {
            Position.findAll({
                where: {
                    Capbac: {
                        [Op.ne]: 1
                    }
                },
                attributes: ['id', 'Chucvu']
            }).then(position => {
                res.status(200).send({success: true, data: position})
            }).catch(err => {
                res.status(500).send({success: false, message: err})
            })
        } else {
            Position.findAll({
                where: {
                    Capbac: {
                        [Op.eq]: 3
                    }
                },
                attributes: ['id', 'Chucvu']
            }).then(position => {
                res.status(200).send({success: true, data: position})
            }).catch(err => {
                res.status(500).send({success: false, message: err})
            })
        }
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.addPosition = (req, res) => {
    Position.findOne({
        where: {
            Chucvu: req.body.chucvu,
            Capbac: req.body.capbac
        }
    }).then(positions => {
        if (!positions) {
            Position.create({
                Chucvu: req.body.chucvu,
                Capbac: req.body.capbac
            }).then(position => {
                res.status(200).send({success: true})
            }).catch(err => {
                res.status(500).send({success: false, message: err})
            })
        } else {
            res.status(404).send({success: false, message: "Position is exist"})
        }
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.editPosition = (req, res) => {
    Position.update({
        Chucvu: req.body.chucvu
    }, {
        where: {
            id: req.body.id
        }
    }).then(position => {
        res.status(200).send({success: true})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.deletePosition = (req, res) => {
    position.delete({
        where: {
            id: res.body.id
        }
    }).then(position => {
        res.status(200).send({success: true})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}