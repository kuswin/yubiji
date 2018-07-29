const {Router} = require('express')
const router = Router()
const user = require('../database/user')

router.post('/login',function (req,res) {
    let {email,password} = req.body;
    user.findOne({email}).then(data =>{
                // console.log(data);
                if (data){
                    if (password == data.password){

                        //将用户信息存在session里面
                        req.session.user =data;
                        //res.session里面有ID，        -     所以不用给id
                        let  usedata= {};
                        usedata.username = data.username;
                        usedata.email = data.email;

                        res.json({
                            code:200,
                            data:usedata,
                            mag:"登录成功，欢迎回来"
                        })
                    } else {
                        res.json({
                            code:400,
                            msg:"请输入正确的用户密码"
                        })
                    }
                } else{
                    res.json({
                        code:401,
                        msg:"该邮箱尚未注册，立即注册"
                    })
                }
            })
})

module.exports = router;