const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
//1、加载路由模块
var showDiary=require('./server/routers/showDiary');
var register = require('./server/routers/register');
var login = require('./server/routers/login');
var article = require('./server/routers/getmeiri');
//隐私日记
var add_riji = require('./server/routers/add_diary1');
// 公开的日记
var add_riji2 = require('./server/routers/add_diary2');
// 最新日记
var get_zuixin = require('./server/routers/get_zuixin');
//我的公开日记
var get_wode = require('./server/routers/show_myrij');
// tab3获得用户资料
var get_user = require('./server/routers/get_user');
//更新我的资料
var add_myziliao = require('./server/routers/add_myziliao');
//意见
var add_yijian = require('./server/routers/add_yijian');
 //2、设置跨域访问
 app.all('*', function(req, res, next){
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method === 'OPTIONS'){
    res.send('200');
  }
  else{
    next();
  }
});
// 3、使用插件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//4.static数据 指定静态资源访问目录 下面为静态文件方法 不可改
app.use(express.static(__dirname + '/'));

//5、使用路由,必须在插件下面
app.use('/api',showDiary);
app.use('/api',register);
app.use('/api',login);
app.use('/api',article);
app.use('/api',add_riji);
app.use('/api',add_riji2);
app.use('/api',get_zuixin);
app.use('/api',get_wode);
app.use('/api',get_user);
app.use('/api',add_myziliao);
app.use('/api',add_yijian);


app.post('/api',(req,res)=>{
  var str='';
  req.on('data', function (data){
    str+=data;
  });
  req.on('end', function (){
    console.log(str);
    res.send('123');
  });
});
app.listen(3000, () => {
  console.log('server start, listening is 3000');
});
