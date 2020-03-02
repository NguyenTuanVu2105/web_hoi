const db = require('../config/db.config')
const Member = db.member
const School = db.school
const Achievement = db.achievement

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
                model: Achievement
            }]
        }).then(learn => {
            res.status(200).send({success: true, data: learn})
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
    }).then(member =>{
       School.findOne({
           where: {
               id: member.id
           }
       }).then(school => {
           if (!school) {
               School.create({
                   
               })
           }
       })
    }).catch(err => res.status(500).send({message: err}))
}