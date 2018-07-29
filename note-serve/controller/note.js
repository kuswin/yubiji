const {Router} = require('express')
const router = Router()
const notecontent = require('../database/notecontent')

router.post('/noteco',function (res,req) {

    let {title,name,time,content} = req.body;
    if (content) {
        notecontent.create({}).then(data =>{
            res.json({
                code:200,
                msg:'上传成功'
            })
        })
    }else {
        res.json({
            code:400,
            msg:'请输入笔记'
        })
    }
})

module.exports = router;
