let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
//连接数据库
let db = require('../connection');

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

  req.on('end', function () {
    console.log('响应结束啦！');
  })

 
});


// router.get('/get_diary', (req, res) => {

//    db.query("SELECT * FROM diary1", (err, data) => {
//      if (err) {
//        console.log(err);
//        res.status(500).send('database error').end();
//      } else {       
//        res.json(data);
//      }
//    });
//  });




module.exports = router;
