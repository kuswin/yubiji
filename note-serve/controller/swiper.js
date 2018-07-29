const {Router} = require('express')
const router = Router()
const img = require('../database/img')

router.post('/poswiper',function (req,res) {
    let {imgtitle,image} = req.body;
    if (image&&imgtitle) {
    img.create({image,imgtitle}).then(data =>{
            res.json({
                code:200,
                msg:'数据上传成功'
            })
        })
    }else {
        res.json({
            code:400,
            msg:'请上传正确的文件'
        })
    }
})


router.get('/swiper',function (req,res){
    img.find({}).then(data =>{
        res.json({
            data,
            code:200,
            msg:'获取成功'
        })
    })
})



module.exports = router;