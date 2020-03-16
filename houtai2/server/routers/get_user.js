let express = require('express');
let router = express.Router();
//连接数据库
let db = require('../connection');
router.post('/get_user', (req, res)=>{
    console.log('req的数据：', req.body);
    var username = req.body.username;
       db.query("select * from users where username = '" + username + "'", (err, data)=>{
        if(err){
          console.log(err);
          res.status(500).send('database error').end();
    
        }else{
          console.log(data);
          res.json(data);
        }
      });
    req.on('end', function () {
      console.log('响应结束啦！');
    })  
  });
 module.exports = router