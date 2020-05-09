let express = require('express');
let router = express.Router();
//连接数据库
let db = require('../connection');
router.get('/get_zuixin', (req, res) => {

  //  db.query("SELECT * FROM diary2", (err, data) => {
  db.query("SELECT * FROM diary2 LEFT JOIN users ON diary2.username = users.username order by diary2.diary2num desc", (err, data) => {
     if (err) {
      //  console.log(err);
       res.status(500).send('database error').end();
     } else {       
       res.json(data);
     }
   });
 });
 module.exports = router