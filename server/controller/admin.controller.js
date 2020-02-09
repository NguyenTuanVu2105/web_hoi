const db = require('../config/db.config')
const Branch = db.branch
const Club = db.club
const Member = db.member
const Position = db.position
//chưa test
exports.ViewMemberbyName = (req, res) => {
    Member.findOne({
        where: {
            Sothethanhvien: req.Sothethanhvien
        },
        include: [
            {
                model: Position,
            },{
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
}

exports.BranchClubInformation = (req, res) => {
    Branch.findAll({
        attributes: ['id', 'Tenchihoi'],
        include: 
        [{
            model: Club,
            attributes: ['id', 'Tendoi']
        }]
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.LeaderAssociation = (req, res) => {
    Member.findAll({
        attributes: ['Hovaten', 'ThoigianHD', 'TinhtrangHD', 'Ghichukhac'],
        include: [{
            model: Position,
            where: {
                Chucvu: "Hội trưởng"
            },
            attributes: ['Chucvu']
        }]
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}