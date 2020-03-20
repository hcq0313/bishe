let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
//连接数据库
let db = require('../connection');
//创建编码解析
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/get_meiri', (req, res) => {
   db.query("SELECT * FROM article", (err, data) => {
     if (err) {
       console.log(err);
       res.status(500).send('database error').end();
     } else {       
       res.json(data);
     }
   });
 });
// 


module.exports = router;