const {Router} = require('express')
const router = Router()
const user = require('../database/user')

//引入validator
const isEmail  = require('validator/lib/isEmail');




router.post('/user',function (req,res) {
    let {username,password,email} = req.body;
    if (isEmail(email)&&password&&password.trim()!=''&&username&&username.trim()!=''){
        user.create({username,password,email}).then(data =>{res.json({
            code:200,
            mag:"success"
        })
        }).catch(err =>{
            console.log(err)
            res.json({
                code:401,
                msg:"该邮箱已注册请直接登录"
            })
        })
    }
    else {
        res.json({
            code:402,
            msg:'请输入正确的信息'
        })
    }

})

module.exports = router;

