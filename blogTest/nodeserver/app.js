// 导入
// 总路由
var router = require('./router/router.js')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var path = require('path')
var session = require('express-session')
var fs = require('fs')
const port = 81;

// 模板引擎
app.engine('html', require('express-art-template'))
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/source/', express.static('./source/'))
// 开放static目录
app.use('/public/', express.static('./public/'))
app.use('/images/', express.static('./images/'))
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) //默认views目录,
//挂载session
app.use(session({
    resave: false,
    saveUnitialized: true, //无论有没有session,都默认给你分配一把钥匙
    secret: 'kannimadesession', //在生成的session后面添加的字符串,和在md5密码后面加上一个字符串防止别人对比出来的同理
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(router)
app.listen(port, function () {
    console.log("running at " + port);
})