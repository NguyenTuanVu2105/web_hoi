const db = require('../config/db.config')
const Member    = db.member
const School    = db.school

exports.getLearnActivity = (req, res) => {
    Member.findOne({
        where: {
            userId: req.userId
        }
    }).then(member => {
        School.findOne({
            where: {
                memberId: member.id
            }
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
                    Truong:             req.body.truong,
                    Lop:                req.body.lop,
                    Nganh:              req.body.nganh,
                    HT_Namhoc_Mot:      req.body.learn_namhoc_mot,
                    HT_Kihoc_Mot:       req.body.learn_kihoc_mot,
                    HT_Lydo_Mot:        req.body.learn_lydo_mot,
                    HT_Namhoc_Hai:      req.body.learn_namhoc_hai,
                    HT_Kihoc_Hai:       req.body.learn_kihoc_hai,
                    HT_Lydo_Hai:        req.body.learn_lydo_hai,
                    HT_Namhoc_Ba:       req.body.learn_namhoc_ba,
                    HT_Kihoc_Ba:        req.body.learn_kihoc_ba,
                    HT_Lydo_Ba:         req.body.learn_lydo_ba,
                    HT_Namhoc_Bon:      req.body.learn_namhoc_bon,
                    HT_Kihoc_Bon:       req.body.learn_kihoc_bon,
                    HT_Lydo_Bon:        req.body.learn_lydo_bon,
                    HT_Namhoc_Nam:      req.body.learn_namhoc_nam,
                    HT_Kihoc_Nam:       req.body.learn_kihoc_nam,
                    HT_Lydo_Nam:        req.body.learn_lydo_nam,
                    HD_Namhoc_Mot:      req.body.learn_namhoc_mot,
                    HD_Kihoc_Mot:       req.body.learn_kihoc_mot,
                    HD_Lydo_Mot:        req.body.learn_lydo_mot,
                    HD_Namhoc_Hai:      req.body.learn_namhoc_hai,
                    HD_Kihoc_Hai:       req.body.learn_kihoc_hai,
                    HD_Lydo_Hai:        req.body.learn_lydo_hai,
                    HD_Namhoc_Ba:       req.body.learn_namhoc_ba,
                    HD_Kihoc_Ba:        req.body.learn_kihoc_ba,
                    HD_Lydo_Ba:         req.body.learn_lydo_ba,
                    HD_Namhoc_Bon:      req.body.learn_namhoc_bon,
                    HD_Kihoc_Bon:       req.body.learn_kihoc_bon,
                    HD_Lydo_Bon:        req.body.learn_lydo_bon,
                    HD_Namhoc_Nam:      req.body.learn_namhoc_nam,
                    HD_Kihoc_Nam:       req.body.learn_kihoc_nam,
                    HD_Lydo_Nam:        req.body.learn_lydo_nam,
                    memberId: member.id
                }).then(
                    res.status(200).send({success: true, message: 'create successful'})
                ).catch(err => {
                    res.status(500).send({message: err})
                })
            } else {
                School.update({
                    Truong:             req.body.truong,
                    Lop:                req.body.lop,
                    Nganh:              req.body.nganh,
                    HT_Namhoc_Mot:      req.body.learn_namhoc_mot,
                    HT_Kihoc_Mot:       req.body.learn_kihoc_mot,
                    HT_Lydo_Mot:        req.body.learn_lydo_mot,
                    HT_Namhoc_Hai:      req.body.learn_namhoc_hai,
                    HT_Kihoc_Hai:       req.body.learn_kihoc_hai,
                    HT_Lydo_Hai:        req.body.learn_lydo_hai,
                    HT_Namhoc_Ba:       req.body.learn_namhoc_ba,
                    HT_Kihoc_Ba:        req.body.learn_kihoc_ba,
                    HT_Lydo_Ba:         req.body.learn_lydo_ba,
                    HT_Namhoc_Bon:      req.body.learn_namhoc_bon,
                    HT_Kihoc_Bon:       req.body.learn_kihoc_bon,
                    HT_Lydo_Bon:        req.body.learn_lydo_bon,
                    HT_Namhoc_Nam:      req.body.learn_namhoc_nam,
                    HT_Kihoc_Nam:       req.body.learn_kihoc_nam,
                    HT_Lydo_Nam:        req.body.learn_lydo_nam,
                    HD_Namhoc_Mot:      req.body.learn_namhoc_mot,
                    HD_Kihoc_Mot:       req.body.learn_kihoc_mot,
                    HD_Lydo_Mot:        req.body.learn_lydo_mot,
                    HD_Namhoc_Hai:      req.body.learn_namhoc_hai,
                    HD_Kihoc_Hai:       req.body.learn_kihoc_hai,
                    HD_Lydo_Hai:        req.body.learn_lydo_hai,
                    HD_Namhoc_Ba:       req.body.learn_namhoc_ba,
                    HD_Kihoc_Ba:        req.body.learn_kihoc_ba,
                    HD_Lydo_Ba:         req.body.learn_lydo_ba,
                    HD_Namhoc_Bon:      req.body.learn_namhoc_bon,
                    HD_Kihoc_Bon:       req.body.learn_kihoc_bon,
                    HD_Lydo_Bon:        req.body.learn_lydo_bon,
                    HD_Namhoc_Nam:      req.body.learn_namhoc_nam,
                    HD_Kihoc_Nam:       req.body.learn_kihoc_nam,
                    HD_Lydo_Nam:        req.body.learn_lydo_nam
                }, {
                    where: {
                        memberId: member.id
                    }
                }).then(
                    res.status(200).send({success: true, message: 'update successful'})
                ).catch(err => {
                    res.status(500).send({message: err})
                })
            }
        }).catch(err => res.status(500).send({message: err}))
    }).catch(err => res.status(500).send({message: err}))
}

exports.getLearnActivityAdmin = (req, res) => {
    School.findOne({
        where: {
            memberId: req.query.id
        }
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.editLearnActivityAdmin = (req,res) =>{
    School.findOne({
        where: {
            memberId: req.body.id
        }
    }).then(school => {
        if (!school) {
            School.create({
                Truong:             req.body.truong,
                Lop:                req.body.lop,
                Nganh:              req.body.nganh,
                HT_Namhoc_Mot:      req.body.learn_namhoc_mot,
                HT_Kihoc_Mot:       req.body.learn_kihoc_mot,
                HT_Lydo_Mot:        req.body.learn_lydo_mot,
                HT_Namhoc_Hai:      req.body.learn_namhoc_hai,
                HT_Kihoc_Hai:       req.body.learn_kihoc_hai,
                HT_Lydo_Hai:        req.body.learn_lydo_hai,
                HT_Namhoc_Ba:       req.body.learn_namhoc_ba,
                HT_Kihoc_Ba:        req.body.learn_kihoc_ba,
                HT_Lydo_Ba:         req.body.learn_lydo_ba,
                HT_Namhoc_Bon:      req.body.learn_namhoc_bon,
                HT_Kihoc_Bon:       req.body.learn_kihoc_bon,
                HT_Lydo_Bon:        req.body.learn_lydo_bon,
                HT_Namhoc_Nam:      req.body.learn_namhoc_nam,
                HT_Kihoc_Nam:       req.body.learn_kihoc_nam,
                HT_Lydo_Nam:        req.body.learn_lydo_nam,
                HD_Namhoc_Mot:      req.body.learn_namhoc_mot,
                HD_Kihoc_Mot:       req.body.learn_kihoc_mot,
                HD_Lydo_Mot:        req.body.learn_lydo_mot,
                HD_Namhoc_Hai:      req.body.learn_namhoc_hai,
                HD_Kihoc_Hai:       req.body.learn_kihoc_hai,
                HD_Lydo_Hai:        req.body.learn_lydo_hai,
                HD_Namhoc_Ba:       req.body.learn_namhoc_ba,
                HD_Kihoc_Ba:        req.body.learn_kihoc_ba,
                HD_Lydo_Ba:         req.body.learn_lydo_ba,
                HD_Namhoc_Bon:      req.body.learn_namhoc_bon,
                HD_Kihoc_Bon:       req.body.learn_kihoc_bon,
                HD_Lydo_Bon:        req.body.learn_lydo_bon,
                HD_Namhoc_Nam:      req.body.learn_namhoc_nam,
                HD_Kihoc_Nam:       req.body.learn_kihoc_nam,
                HD_Lydo_Nam:        req.body.learn_lydo_nam,
                memberId: req.body.id
            }).then(
                res.status(200).send({success: true, message: 'create successful'})
            ).catch(err => {
                res.status(500).send({message: err})
            })
        } else {
            School.update({
                Truong:             req.body.truong,
                Lop:                req.body.lop,
                Nganh:              req.body.nganh,
                HT_Namhoc_Mot:      req.body.learn_namhoc_mot,
                HT_Kihoc_Mot:       req.body.learn_kihoc_mot,
                HT_Lydo_Mot:        req.body.learn_lydo_mot,
                HT_Namhoc_Hai:      req.body.learn_namhoc_hai,
                HT_Kihoc_Hai:       req.body.learn_kihoc_hai,
                HT_Lydo_Hai:        req.body.learn_lydo_hai,
                HT_Namhoc_Ba:       req.body.learn_namhoc_ba,
                HT_Kihoc_Ba:        req.body.learn_kihoc_ba,
                HT_Lydo_Ba:         req.body.learn_lydo_ba,
                HT_Namhoc_Bon:      req.body.learn_namhoc_bon,
                HT_Kihoc_Bon:       req.body.learn_kihoc_bon,
                HT_Lydo_Bon:        req.body.learn_lydo_bon,
                HT_Namhoc_Nam:      req.body.learn_namhoc_nam,
                HT_Kihoc_Nam:       req.body.learn_kihoc_nam,
                HT_Lydo_Nam:        req.body.learn_lydo_nam,
                HD_Namhoc_Mot:      req.body.learn_namhoc_mot,
                HD_Kihoc_Mot:       req.body.learn_kihoc_mot,
                HD_Lydo_Mot:        req.body.learn_lydo_mot,
                HD_Namhoc_Hai:      req.body.learn_namhoc_hai,
                HD_Kihoc_Hai:       req.body.learn_kihoc_hai,
                HD_Lydo_Hai:        req.body.learn_lydo_hai,
                HD_Namhoc_Ba:       req.body.learn_namhoc_ba,
                HD_Kihoc_Ba:        req.body.learn_kihoc_ba,
                HD_Lydo_Ba:         req.body.learn_lydo_ba,
                HD_Namhoc_Bon:      req.body.learn_namhoc_bon,
                HD_Kihoc_Bon:       req.body.learn_kihoc_bon,
                HD_Lydo_Bon:        req.body.learn_lydo_bon,
                HD_Namhoc_Nam:      req.body.learn_namhoc_nam,
                HD_Kihoc_Nam:       req.body.learn_kihoc_nam,
                HD_Lydo_Nam:        req.body.learn_lydo_nam
            }, {
                where: {
                    memberId: req.body.id
                }
            }).then(
                res.status(200).send({success: true, message: 'update successful'})
            ).catch(err => {
                res.status(500).send({message: err})
            })
        }
    }).catch(err => res.status(500).send({message: err}))
}