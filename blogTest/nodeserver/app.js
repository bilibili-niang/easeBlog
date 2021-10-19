// 导入
var router = require('./router/router')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var path = require('path')
var fs = require('fs')
    // 模板引擎
app.engine('html', require('express-art-template'))
app.use('/node_modules/', express.static('./node_modules/'))
    // 开放static目录
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) //默认views目录,
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)
app.listen(80, function() {
    console.log("running at 80");
})