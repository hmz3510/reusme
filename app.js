const express = require('express');
const path = require('path');
const bodyParser=require('body-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
var cookieParser = require('cookie-parser');
var index = require('./routes/index');
var session = require("express-session");
var app=express();

//设置监听窗口
app.listen(3000,()=>{
	console.log('创建成功');
})


//使用托管静态资源
app.use(express.static(path.join(__dirname,'public')));

//使用body中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

//设置视图位置
app.set('views', path.join(__dirname,'views'));

//设置项目使用ejs模板引擎
app.set('view engine', 'ejs' );


//使用日志记录中间件
app.use(logger('dev'));

//
app.use(cookieParser());

//保存session的储存时间
app.use(session({
	secret:'blog',
	cookie:{maxAge:1000*60*24*30},
	resave:false,
	saveUninitialized:true
}));

//处理404错误
/*
app.use((req, res, next)=>{
		var err =new Error('Not Found');
		err.status=404;
		next(err);
		res.render('404');
		return;
})*/

/*
//错误处理
app.use((err, req, res, next)=>{
	res.locals.message = err.message;
	res.locals.error =req.app.get('env') === 'development' ? err : {};
//渲染错误请求页面
	res.status (err.status || 500);
	res.render('404')
	return;
});
*/

//使用路由
app.use('/',index);


module.exports=app;