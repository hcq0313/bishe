let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
//连接数据库
let db = require('../connection');
//创建编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/get_diary', (req, res)=>{
  console.log('req的数据：', req.body);
  var username = req.body.username;
     db.query("select * from diary1 where username = '" + username + "'", (err, data)=>{
      if(err){
        console.log(err);
        res.status(500).send('database error').end();
  
      }else{
        console.log(data);
        res.json(data);
      }
    });
});


// 更新赞
router.post('/update_zan1', (req, res)=>{
  console.log('req的数据：', req.body);
  var diary2num = req.body.diary2num;
  var zan = req.body.zan;
  var color = req.body.color; 
  console.log('color', req.body.color);
     db.query("update diary2 set color='"+color+"',zan='" +zan+ "' where diary2num= '" + diary2num + "'", (err, data)=>{
      if(err){
        console.log(err);
        res.status(500).send('database error').end(); 
      }else{
        console.log(data);
        res.json(data);
      }
    });
});

router.post('/update_zan2', (req, res)=>{
  console.log('req的数据：', req.body);
  var diary2num = req.body.diary2num;
  var zan = req.body.zan;
  var color = req.body.color; 
     db.query("update diary2 set color='"+color+"',zan='" +zan+ "' where diary2num= '" + diary2num + "'", (err, data)=>{
      if(err){
        console.log(err);
        res.status(500).send('database error').end(); 
      }else{
        console.log(data);
        res.json(data);
      }
    });
});

//获取评论
router.post('/get_comment', (req, res)=>{
  console.log('req的数据：', req.body);
  var diary2num = req.body.diary2num;
  // "SELECT * FROM comment,users where comment.username = users.username and comment.diary2num = '" + diary2num + "'"
     db.query("SELECT * FROM comment,users where comment.username = users.username and comment.diary2num = '" + diary2num + "'", (err, data)=>{
      if(err){
        console.log(err);
        res.json(1);
        res.status(500).send('database error').end();
  
      }else{
        console.log(data);
        res.json(data);
      }
    });
});

//添加评论
function fun_add_user(username,diary2num,comtext) {

   //插入数据
   var addSql = "insert into comment(username,diary2num,comtext) values(?,?,?)"; //存放数据库语言的，这里是添加
   var addParmas = [username,diary2num,comtext];
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
router.post('/insert_comment', urlencodedParser, function (req, res) {  //post处理方法

   // 输出 JSON 格式
   var response = {
         "username":req.body.username, 
         "diary2num":req.body.diary2num,   //得到页面提交的数据
         "comtext":req.body.comtext,
    };
   //加入数据库
   fun_add_user(req.body.username,req.body.diary2num,req.body.comtext);  //数据库方法，加入了两个参数，是提交的数据
    console.log(response);
   res.send("1"); //返回的数据，这里根据情况写
    res.end();      
});

//删除我的日记
router.post('/delete_mydairy', (req, res)=>{
  console.log('req的数据：', req.body);
  var num = req.body.num;
  var username = req.body.username;
  db.query("delete from diary1 where num= '" + num + "' and username= '" + username + "'", (err, data)=>{
      if(err){
        console.log(err);
        res.status(500).send('database error').end(); 
      }else{
        console.log(data);
        res.json(data);
      }
  });
});
module.exports = router;
