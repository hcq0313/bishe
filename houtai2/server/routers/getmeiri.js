let express = require('express');
let router = express.Router();
//连接数据库
let db = require('../connection');

router.get('/get_meiri', (req, res) => {
  console.log(33333);
   db.query("SELECT * FROM article", (err, data) => {
     if (err) {
       console.log(err);
       res.status(500).send('database error').end();
     } else {       
       res.json(data);
     }
   });
 });


module.exports = router;