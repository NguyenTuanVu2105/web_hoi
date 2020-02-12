const db = require('../config/db.config')
const Specialized = db.specialized

exports.viewSpecialized = (req, res) => {
    Specialized.findAll({
        attributes: ['id', 'Bacchuyenmon']
    }).then(specialized => {
        res.status(200).send({success: true, data: specialized})
    })
}

exports.addSpecialized = (req, res) => {
    Specialized.findOne({
        where: {
            Bacchuyenmon: req.body.Bacchuyenmon
        }
    }).then(specializeds => {
        if (!specializeds) {
            Specialized.create({
                Bacchuyenmon: req.body.Bacchuyenmon
            }).then(specialized => {
                res.status(200).send({success: true})
            }).catch(err => {
                res.status(500).send({success: false, message: err})
            })
        } else {
            res.status(404).send({success: false, message: "Specialized is exist"})
        }
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.editSpecialized = (req, res) => {
    Specialized.update({
        Bacchuyenmon: req.body.Bacchuyenmon
    }, {
        where: {
            id: req.body.id
        }
    }).then(specialized => {
        res.status(200).send({success: true})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.deleteSpecialized = (req, res) => {
    Specialized.delete({
        where: {
            id: res.body.id
        }
    }).then(specialized => {
        res.status(200).send({success: true})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}