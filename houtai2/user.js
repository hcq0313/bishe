var express = require('express');
var router = express.Router();
var User = require('../db/model/userModel')
var Mail=require('../util/mail')
var majorKey=require('../util/majorKey')

let codes={} //通过内存保存验证码  再启动一次程序codes就重新赋值了，之前保存的没有了

//var db = require('../db/index');

/**
 * @api {post} /user/login 用户登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} username 用户名.
 * @apiParam {String} password 用户密码
 *
 * @apiSuccess {String} username 用户名.
 * @apiSuccess {String} password  密码.
 * @apiSuccessExample 成功:
 *     HTTP/1.1 200 OK
 *     {
 *       "username": "John",
 *       "password": "1234"
 *     }
 *
 * @apiError 300 login fail.
 *
 * @apiErrorExample 失败:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "login fail"
 *     }
 */
router.post('/login', function(req, res){
    let {username, password} = req.body;
    User.find('user', {username: username}, function(err, data){
        data = data[0];
        if(data.password ===  password){
            res.send({state: 200, msg:'login success'})
        }else{
            res.send({state: 300, msg:'login fail'})
        }
    }) 
})

router.post('/register',function(req,res){
    let {username, password} = req.body;
    console.log(req.body)
    if(username&&password){
        User.find({username})
        .then((data)=>{
            if(data.length===0){
                return User.insertMany({username:username,password:password})
            }else{
                res.send({state:301,msg:'用户名已存在'})
            }
        })
        .then(()=>{
            res.send({state:201,msg:'注册成功'})
        })
        .catch((err)=>{
            res.send({state:301,msg:'注册失败'})
        })
    }else{
        return res.send({state:401,msg:'参数错误'})
    }
})


// router.post('/register',(req,res)=>{
//     //获取数据
//     let {username,password,code}=req.body
//     if(username&&password&&code){
//         //   
//         if(codes[username]!=code){
//             return res.send({err:-4,msg:'验证码错误'})
//         }
//         User.find({username})
//         .then((data)=>{
//             if(data.length===0){
//                 //用户名不存在 可以注册
//                 return User.insertMany({username:username,password:password})
//             }else{
//                 res.send({err:-3,msg:'用户名已存在'})
//             }
//         })
//         .then(()=>{
//             res.send({err:0,msg:'注册ok'})
//         })
//         .catch((err)=>{
//             res.send({err:-2,msg:'注册err'})
//         })
//     }else{
//         return res.send({err:-1,msg:'参数错误'})
//     }
// })
//     //数据处理
//     //返回数据
//     //res.send('test ok')


// /**
//  * @api {post} /user/login 用户登录
//  * @apiName 用户登录
//  * @apiGroup User
//  *
//  * @apiParam {String} username 用户名.
//  * @apiParam {String} password 用户密码
//  *
//  * @apiSuccess {String} firstname Firstname of the User.
//  * @apiSuccess {String} lastname  Lastname of the User.
//  */

// router.post('/login',(req,res)=>{
//     //console.log(req.body)
//         let {username,password}=req.body
//         if(!username || !password){ return res.send({err:-1,msg:'参数错误'})}
//         // User.find({username,password})
//         // .then((data)=>{
//         //     console.log(data)
//         //     if(data.length>0){
//         //         res.send({err:0,msg:'登录ok'})
//         //     }else{
//         //         res.send({err:-2,msg:'用户名或密码不正确'})
//         //     }
//         // })
//         // .catch((err)=>{
//         //     return res.send({err:-1,msg:'内部错误'})
//         // })
//         User.find
//     })



//发送邮箱验证码
// router.post('/getMailCode',(req,res)=>{
//     let {mail}=req.body
//     //省略了判断邮箱正确
//     let code=parseInt(Math.random()*10000) //产生随机验证码
//     //将邮箱和邮箱匹配的验证码保存到缓存中
//     //console.log(mail,code)
//     Mail.send(mail,code)
//     .then(()=>{
//         codes[mail]=code
//         res.send({err:0,msg:'验证码发送成功'})
//     })
//     .catch(()=>{
//         res.send({err:0,msg:'验证码发送失败'})
//     })
// })

    


module.exports = router;