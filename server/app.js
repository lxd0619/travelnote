var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport')
var mypassport = require('./config/passport')

var indexRouter = require('./routes/index');
var aimRouter = require('./routes/aim');
var deliciouRouter = require('./routes/delicious');
var homeRouter = require('./routes/home');
var lineRouter = require('./routes/line');
var loginRouter = require('./routes/login');
var manageRouter = require('./routes/manage');
var operationRouter = require('./routes/operation');
var registRouter = require('./routes/regist');
var userCenterRouter = require('./routes/userCenter');
var scenicSpotRouter = require('./routes/scenicSpot')
var app = express();

app.all('*', function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', '*'); //针对所有请求用户都允许
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); //针对指定的请求用户允许，其他用户禁止访问
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    next()
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
mypassport(passport);

//通用的登录权限验证方法，如果已经通过验证，正常运行，否则条转到登录页
// app.use(function(req,res,next){
//   if(path.parse(path.join(__dirname,req.url)).ext=='.js'){
//     next()
//   }
//   //排除几个特殊路由，其他的路由请求按session的逻辑操作
//   else if(req.url == '/login.html' || req.url == '/login' || url.parse(req.url).pathname == '/getVCode'){

//   //排除两个特殊路由，其他的路由请求按session的逻辑操作
//   if(req.url =='/login.html' || req.url=='/login' ||req.url =='/getVode'){
//     next()
//   }
//   else if(req.session && req.session.user){
//     next();
//   }else{
//     res.redirect('/login.html') 
//   }
//   else{
//      res.redirect('/login.html')
//   }
// })

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/userCenter', userCenterRouter);
app.use('/aim', aimRouter);
app.use('/delicious', deliciouRouter);
app.use('/home', homeRouter);
app.use('/line', lineRouter);
app.use('/login', loginRouter);
app.use('/manage', manageRouter);
app.use('/operation', operationRouter);
app.use('/regist', registRouter);
app.use('/scenic', scenicSpotRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    // res.status(err.status || 500);
    // res.render('error');
});

module.exports = app;