const db = require('../config/db.config')
const Member    = db.member
const School    = db.school
const Learn     = db.learn
const Activity  = db.activity

exports.getLearnActivity = (req, res) => {
    Member.findOne({
        where: {
            userId: req.userId
        }
    }).then(member => {
        School.findOne({
            where: {
                memberId: member.id
            },
            include: [{
                model: Learn
            }, {
                model: Activity
            }]
        }).then(information => {
            res.status(200).send({success: true, data: information})
        }).catch(err => {
            res.status(500).send({message: err})
        })
    }).catch(err => {
        res.status(500).send({message: err})
    })
}

exports.editLearnActivity = (req,res) =>{
    Member.findOne({
        where: {
            userId :req.userId
        }
    }).then(member => {
        School.findOne({
            where: {
                memberId: member.id
            }
        }).then(school => {
            if (!school) {
                School.create({
                    Truong: req.body.truong,
                    Lop: req.body.lop,
                    Nganh: req.body.nganh,
                    memberId: member.id
                }).then(() => {
                    Learn.create({
                        Namhoc_Mot:      req.body.learn_namhoc_mot,
                        Kihoc_Mot:       req.body.learn_kihoc_mot,
                        Lydo_Mot:        req.body.learn_lydo_mot,
                        Namhoc_Hai:      req.body.learn_namhoc_hai,
                        Kihoc_Hai:       req.body.learn_kihoc_hai,
                        Lydo_Hai:        req.body.learn_lydo_hai,
                        Namhoc_Ba:       req.body.learn_namhoc_ba,
                        Kihoc_Ba:        req.body.learn_kihoc_ba,
                        Lydo_Ba:         req.body.learn_lydo_ba,
                        Namhoc_Bon:      req.body.learn_namhoc_bon,
                        Kihoc_Bon:       req.body.learn_kihoc_bon,
                        Lydo_Bon:        req.body.learn_lydo_bon,
                        Namhoc_Nam:      req.body.learn_namhoc_nam,
                        Kihoc_Nam:       req.body.learn_kihoc_nam,
                        Lydo_Nam:        req.body.learn_lydo_nam,
                        schoolId:        school.id
                    }).catch(err => res.status(500).send({message: err}))
                    Activity.create({
                        Namhoc_Mot:      req.body.activity_namhoc_mot,
                        Kihoc_Mot:       req.body.activity_kihoc_mot,
                        Lydo_Mot:        req.body.activity_lydo_mot,
                        Namhoc_Hai:      req.body.activity_namhoc_hai,
                        Kihoc_Hai:       req.body.activity_kihoc_hai,
                        Lydo_Hai:        req.body.activity_lydo_hai,
                        Namhoc_Ba:       req.body.activity_namhoc_ba,
                        Kihoc_Ba:        req.body.activity_kihoc_ba,
                        Lydo_Ba:         req.body.activity_lydo_ba,
                        Namhoc_Bon:      req.body.activity_namhoc_bon,
                        Kihoc_Bon:       req.body.activity_kihoc_bon,
                        Lydo_Bon:        req.body.activity_lydo_bon,
                        Namhoc_Nam:      req.body.activity_namhoc_nam,
                        Kihoc_Nam:       req.body.activity_kihoc_nam,
                        Lydo_Nam:        req.body.activity_lydo_nam,
                        schoolId:        school.id
                    }).catch(err => res.status(500).send({message: err}))
                }).then(information => {
                    res.status(200).send({success: true, data: information})
                }).catch(err => res.status(500).send({message: err}))
            } else {
                School.update({
                    Truong: req.body.truong,
                    Lop: req.body.lop,
                    Nganh: req.body.nganh
                }, {
                    where: {
                        memberId: member.id
                    }
                }).then(() => {
                    Learn.update({
                        Namhoc_Mot:      req.body.learn_namhoc_mot,
                        Kihoc_Mot:       req.body.learn_kihoc_mot,
                        Lydo_Mot:        req.body.learn_lydo_mot,
                        Namhoc_Hai:      req.body.learn_namhoc_hai,
                        Kihoc_Hai:       req.body.learn_kihoc_hai,
                        Lydo_Hai:        req.body.learn_lydo_hai,
                        Namhoc_Ba:       req.body.learn_namhoc_ba,
                        Kihoc_Ba:        req.body.learn_kihoc_ba,
                        Lydo_Ba:         req.body.learn_lydo_ba,
                        Namhoc_Bon:      req.body.learn_namhoc_bon,
                        Kihoc_Bon:       req.body.learn_kihoc_bon,
                        Lydo_Bon:        req.body.learn_lydo_bon,
                        Namhoc_Nam:      req.body.learn_namhoc_nam,
                        Kihoc_Nam:       req.body.learn_kihoc_nam,
                        Lydo_Nam:        req.body.learn_lydo_nam
                    }, {
                        where: {
                            schoolId: school.id
                        }
                    }).catch(err => res.status(500).send({message: err}))
                    Activity.update({
                        Namhoc_Mot:      req.body.activity_namhoc_mot,
                        Kihoc_Mot:       req.body.activity_kihoc_mot,
                        Lydo_Mot:        req.body.activity_lydo_mot,
                        Namhoc_Hai:      req.body.activity_namhoc_hai,
                        Kihoc_Hai:       req.body.activity_kihoc_hai,
                        Lydo_Hai:        req.body.activity_lydo_hai,
                        Namhoc_Ba:       req.body.activity_namhoc_ba,
                        Kihoc_Ba:        req.body.activity_kihoc_ba,
                        Lydo_Ba:         req.body.activity_lydo_ba,
                        Namhoc_Bon:      req.body.activity_namhoc_bon,
                        Kihoc_Bon:       req.body.activity_kihoc_bon,
                        Lydo_Bon:        req.body.activity_lydo_bon,
                        Namhoc_Nam:      req.body.activity_namhoc_nam,
                        Kihoc_Nam:       req.body.activity_kihoc_nam,
                        Lydo_Nam:        req.body.activity_lydo_nam
                    }, {
                        where: {
                            schoolId: school.id
                        }
                    }).catch(err => res.status(500).send({message: err}))
                }).then(information => {
                    res.status(200).send({success: true, data: information})
                }).catch(err => res.status(500).send({message: err}))
            }
        }).catch(err => res.status(500).send({message: err}))
    }).catch(err => res.status(500).send({message: err}))
}