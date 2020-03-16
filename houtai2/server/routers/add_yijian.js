let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
//连接数据库
let db = require('../connection');

//创建编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//数据库连接方法
function fun_add_user(username,yijian,phone) {

   //插入数据
   var addSql = "insert into yijian(username,yijian,phone) values(?,?,?)"; 
   var addParmas = [username,yijian,phone];
   db.query(addSql, addParmas, function(err, res) {
         if(err) {
               console.log("[insert error]-", err.message);
               return;
         }
         //cmd打印内容
         console.log("\n\n----------查询用户数据-------------------\n");
         console.log(res);
         console.log("\n------------查询用户数据---------------------");
   });
}
router.post('/add_yijian', urlencodedParser, function (req, res) {  //post处理方法

   // 输出 JSON 格式
   var response = {
        "username":req.body.username, 
        "yijian":req.body.yijian,   //得到页面提交的数据
        "phone":req.body.phone,
    };
   //加入数据库
   fun_add_user(req.body.username,req.body.yijian,req.body.phone);  //数据库方法，加入了两个参数，是提交的数据
    console.log(response);
   res.send("1"); //返回的数据，这里根据情况写
    res.end();      
});
module.exports = router