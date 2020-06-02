const db = require('../config/db.config')
const Introduction = db.introduction
exports.AddLinkPDF = (req, res) => {
    const introduction = {};
    if (req.body.linkdriver) introduction.LinkDriver = req.body.linkdriver;
    Introduction.destroy({
        where: {}
    }).then(function (result) {
        if(result !== 0)
        {
            res.status(200).send({ success: true })
        }
        else
        {
            res.status(404).json({message: err})
        }
    }).catch(err => {})
    new Introduction(introduction).save()   
}
exports.ViewPDF = (req, res) => {
    Introduction.findAll({
    }).then( data => {
        res.status(200).send({success: true, data: data})
    }).catch(err => {
        res.status(500).send({message: err})
    })
}