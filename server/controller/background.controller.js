const path = require('path')
const fs = require('fs')
var moment = require('moment')
const db = require('../config/db.config')
const replaceString = require('replace-string');
var schedule = require('node-schedule');
const Background = db.background
const LogImage = db.logimage
const Op = db.Sequelize.Op
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
    if (req.body.ngayketthuc) background.Ngayketthuc = req.body.ngayketthuc;
    if (req.body.diadiem) background.Diadiem = req.body.diadiem;
    // if (req.body.maunen) background.Maunen = req.body.maunen;
    // if (req.body.mauchu) background.Mauchu = req.body.mauchu;
    Background.findOne({
        where:{
            [Op.and] :[
                {Tenchuongtrinh :req.body.tenchuongtrinh},
                {Linkchuongtrinh :req.body.linkchuongtrinh},
                {Linkanh :filePath},
                {Ngaydienra :req.body.ngaydienra},
                {Ngayketthuc: req.body.ngayketthuc},
                {Diadiem: req.body.diadiem},
                // {Maunen :req.body.maunen},
                // {Mauchu :req.body.mauchu}
            ]
        }

    }).then(backgrounds =>{
        if(!backgrounds) {
            new Background(background).save()
            .then(data => res.status(200).send({success : true}))
            .catch(err => res.status(403).send({message: err}));
        } else {
            res.status(403).send({success: false, message: "background is exist"})
        }
    }).catch(err => res.status(500).send({message: err}))
}
exports.ViewBackground = (req, res) => {
    Background.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then( data => {
        res.status(200).send({success: true, data: data})
    }).catch(err => {
        res.status(500).send({message: err})
    })
}
exports.ViewOneBackground = (req, res) => {
    Background.findOne({
        where: {
            id: req.query.backgroundId
        }
    }).then(information => {
        res.status(200).send({success: true, data: information})
    }).catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

exports.SlideShowBackground = (req, res) => {
    Background.findAll({
        where: {
            Ngayketthuc: {
              [Op.gte]: moment().format('YYYY-MM-DD')
            }
        }
    }).then( data => {
        res.status(200).send({success: true, data: data})
    }).catch(err => {
        res.status(500).send({message: err})
    })
}
exports.EditBackground = (req, res) =>{
    Background.findOne({
        where: {
            id : parseInt(req.body.id)
        }
    }).then(background =>{
        if(!background)
            res.status(500).send({success: false, message: err})
        else {
            Background.update({
                Tenchuongtrinh :req.body.tenchuongtrinh,
                Linkchuongtrinh :req.body.linkchuongtrinh,
                Ngaydienra :req.body.ngaydienra,
                Ngayketthuc: req.body.ngayketthuc,
                Diadiem: req.body.diadiem,
                // Maunen :req.body.maunen,
                // Mauchu :req.body.mauchu
            }, {
                where: {
                    id : req.body.id
                }
            }).then(
                res.status(200).send({success : true})
            ).catch(err => {
                res.status(500).send({success: false, message: err})
            })
        }
    }).catch(err => res.status(500).send({success: false, message: err}))
}
exports.DeleteBackground = (req,res) =>{
    Background.findOne({
        where :{
            id :parseInt(req.body.id)
        }
    }).then( background => {
        const linkanh = {}
        linkanh.Linkanh = background.Linkanh;
        new LogImage(linkanh).save()
        Background.destroy({
            where: {
                id :parseInt(req.body.id)
            }
        }).then(function (result) {
            if(result !== 0)
            {
                res.status(200).send({ success: true })
            }
            else
            {
                res.status(404).json({message: err})
            }
        })
    }).catch(err => {})

}
var x = '!!!!!!';
var j = schedule.scheduleJob({hour: 3, minute: 30, dayOfWeek: 0}, function DeleteImageSystem(){
    LogImage.findAll({}).then(data =>{
        const host = `${process.env.SERVER_HOST}/api/background`
        data.map(y => {
            let a = y.Linkanh
            if(a == null) return false
            let x = replaceString(a, host,'./images')
            fs.unlink(x, (err) => {
            if (err) {}
            LogImage.destroy({
                where: {
                    Linkanh : a
                }
            }).then(result =>{})
            })

        })      
    })
}.bind(null,x));
