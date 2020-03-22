const db = require('../config/db.config')
const Background = db.background
const Op = db.Sequelize.Op
const path = require('path')
const fs = require('fs')
exports.AddBackground = (req, res) => {
    const processedFile = req.file || {}
    let orgName = processedFile.originalname || ''
    orgName = orgName.trim().replace(/ /g, "-")
    const fullPathInServ = processedFile.path
    const newFullPath = `${fullPathInServ}-${orgName}`
    fs.renameSync(fullPathInServ, newFullPath);

    var fileString = path.basename(newFullPath)
    var filePath = `${process.env.SERVER_HOST}/api/background/` + fileString
    const background = {};
    if (req.body.tenchuongtrinh) background.Tenchuongtrinh = req.body.tenchuongtrinh; 
    if (req.body.linkchuongtrinh) background.Linkchuongtrinh = req.body.linkchuongtrinh;
    background.Linkanh = filePath;
    if (req.body.ngaydienra) background.Ngaydienra = req.body.ngaydienra;
    if (req.body.diadiem) background.Diadiem = req.body.diadiem;
    if (req.body.maunen) background.Maunen = req.body.maunen;
    if (req.body.mauchu) background.Mauchu = req.body.mauchu;
    Background.findOne({
        where:{
            [Op.and] :[
                {Tenchuongtrinh :req.body.tenchuongtrinh},
                {Linkchuongtrinh :req.body.linkchuongtrinh},
                {Linkanh :filePath},
                {Ngaydienra :req.body.ngaydienra},
                {Maunen :req.body.maunen},
                {Mauchu :req.body.mauchu}
            ]
        }

    }).then(background =>{
        if(!background) {
            new Background(background).save()
            .then(() => res.status(200).send({success : true}))
            .catch(err => res.status(404).send({message: err}));
        } else {
            res.status(404).send({success: false, message: "background is exist"})
        }
    }).catch(err => res.status(500).send({message: err}))
}
exports.AdminViewProfile = (req, res) => {
    Profile.findOne({
        where: {
            id: req.query.id
        }, 
        include: [{
            model: Specialized,
            attributes: ['Sogiotmau']
        },
    ]
    }).then( profile => {
        res.status(200).send({success: true, data: profile})
    }).catch(err => {
        res.status(500).send({message: err})
    })
}
