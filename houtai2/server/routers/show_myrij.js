let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
//连接数据库
let db = require('../connection');

router.post('/get_wode', (req, res)=>{
  console.log('req的数据：', req.body);
  var username = req.body.username;
  // SELECT * FROM diary2 LEFT JOIN users ON diary2.username = users.username
     db.query("select * from diary2,users where diary2.username=users.username and diary2.username = '" + username + "'order by diary2.diary2num desc", (err, data)=>{
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

module.exports = router;