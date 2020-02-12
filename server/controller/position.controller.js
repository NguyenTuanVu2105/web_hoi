const db = require('../config/db.config')
const Position = db.position

exports.viewPosition = (req, res) => {
    Position.findAll({
        attributes: ['id', 'Chucvu']
    }).then(position => {
        res.status(200).send({success: true, data: position})
    })
}

exports.addPosition = (req, res) => {
    Position.findOne({
        where: {
            Chucvu: req.body.Chucvu
        }
    }).then(positions => {
        if (!positions) {
            Position.create({
                Chucvu: req.body.Chucvu
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
        Chucvu: req.body.Chucvu
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