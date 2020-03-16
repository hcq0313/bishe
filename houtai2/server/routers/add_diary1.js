let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
//连接数据库
let db = require('../connection');

//创建编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//数据库连接方法
function fun_add_user(username,title,text,weather,fenlei,quanxian,week,month,day) {

   //插入数据
   var addSql = "insert into diary1(username,title,text,weather,fenlei,quanxian,week,month,day) values(?,?,?,?,?,?,?,?,?)"; //存放数据库语言的，这里是添加
   var addParmas = [username,title,text,weather,fenlei,quanxian,week,month,day];
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
router.post('/add_riji', urlencodedParser, function (req, res) {  //post处理方法

   // 输出 JSON 格式
   var response = {
         "username":req.body.username, 
         "title":req.body.title,   //得到页面提交的数据
          "text":req.body.text,
          "weather":req.body.weather,
          "fenlei":req.body.fenlei,
          "quanxian":req.body.quanxian,
          "week":req.body.week,
          "month":req.body.month,
          "day":req.body.day,
    };
   //加入数据库
   fun_add_user(req.body.username,req.body.title,req.body.text,req.body.weather,
                req.body.fenlei,req.body.quanxian,req.body.week,req.body.month,req.body.day);  //数据库方法，加入了两个参数，是提交的数据
    console.log(response);
   res.send("1"); //返回的数据，这里根据情况写
    res.end();      
});
module.exports = router