const db = require('../config/db.config')
const Branch = db.branch
const Club = db.club
const Member = db.member
const Position = db.position
const Specialized = db.specialized
const Op = db.Sequelize.Op
//chưa test
exports.ViewMember = (req, res) => {
    if(req.query.hovaten == null && req.query.nhommau == null)
    {
        Member.findAll({
            limit: 10,
            offset: (page-1)*10,
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
    }
    else{
    Member.findAll({
        limit: 10,
        offset: (page-1)*10,
        where: {
            [Op.or]: {Hovaten: {[db.Sequelize.Op.like]: '%' + req.query.hovaten + '%'}, 
                    Nhommau: req.query.nhommau
        } 
            // Sothethanhvien: req.query.sothethanhvien,
            // Quequan: {[db.Sequelize.Op.like]: '%' +req.query.quequan + '%'},
            
        },
        include: [
            {
                model: Position,
                // where: {Chucvu: {[db.Sequelize.Op.like]: '%' + req.query.chucvu + '%'}},
            },
            {
                model: Specialized,
                // where: {Bacchuyenmon: {[db.Sequelize.Op.like]: '%' + req.query.bacchuyenmon + '%'}},
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
    }
}
exports.BranchClubInformation = (req, res) => {
    Branch.findAll({
        attributes: ['Machihoi', 'Tenchihoi'],
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
                Chucvu: 'Hội trưởng'
            },
            attributes: ['Chucvu']
        }]
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}