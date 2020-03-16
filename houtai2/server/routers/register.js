   let express = require('express');
   let router = express.Router();
   const bodyParser = require('body-parser');
   //连接数据库
   let db = require('../connection');

   //创建编码解析
   var urlencodedParser = bodyParser.urlencoded({ extended: false });
	function fun_add_admin(username,password,nicheng) {

		//插入数据
		var addSql = "insert into users(username,password,nicheng) values(?,?,?)"; //存放数据库语言的，这里是添加
		var addParmas = [username,password,nicheng];
		db.query("SELECT * FROM users where username = '" + username + "'", (err, data) => {
				if(err) {
						console.log("[insert error]-", err.message);
						return;
				}else { 
               if (data == ''){// 用户没有注册过
                  db.query(addSql, addParmas, function(err, res) {             
                     if (err) {
                        console.log(err);
                        res.status(500).send('database error').end();
                     } else {
                           console.log('注册成功！');
                           //cmd打印内容
                           console.log("\n\n----------查询用户数据-------------------\n");
                           console.log(res);
                           console.log("\n------------查询用户数据---------------------");
                        }
                     })   
               }else{
                  // console.log('用户名已注册！');
               }
                 
             }
           

         })
		}
	
	router.post('/register', urlencodedParser, function (req, res) {  //post处理方法
		// 输出 JSON 格式
		var response = {
			"username":req.body.username,   //得到页面提交的数据
         "password":req.body.password,	
         "nicheng":req.body.nicheng,	
         				
		};
		//加入数据库
		fun_add_admin(req.body.username,req.body.password,req.body.nicheng);  //数据库方法，加入了两个参数，是提交的数据
      console.log(response);
      res.json({'num':1});  

		res.end();      
   });

  
   module.exports = router
