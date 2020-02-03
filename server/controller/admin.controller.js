const db = require('../config/db.config')
const Branch = db.branch
const Club = db.club
const Member = db.member

exports.BranchClubInformation = (req, res) => {
    Branch.findAll({
        attributes: ['Tenchihoi'],
        include: [{
            model: Club,
            attributes: ['Tendoi']
        }]
    }).then(information => {
        res.status(200).send(information)
    }).catch(err => {
        res.status(500).send({message: err})
    })
}