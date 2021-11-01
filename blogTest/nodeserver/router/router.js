var express = require('express')
var router = express.Router()
var User = require('./user')
var md5 = require('blueimp-md5')
const fs = require('fs')

router.get('/', function (req, res) {
    console.log(req.session.user)
    fs.readFile(process.cwd() + "\\source\\03_git单人使用.md", 'utf8', (err, data) => {
        if (err) {
            throw 'err'
        }

        res.render('index.html', {
            basename: "icecstone' blog",
            test: 'zs',
            markdown: data
        })
    })
})
// 登录
router.get('/login', function (req, res) {
    res.render('login.html')
})

router.post('/login', function (req, res) {
    // 1.获取表单数据
    // 2.查询数据库，用户名密码是否正确
    // 3.发送响应数据
    // console.log(req.body);
    var body = req.body

    User.findOne({
        email: body.email,
        // 两次md5加密进行比对
        password: md5(md5(body.password))
        // password: body.password

    }, function (err, user) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: err.message
            })
        }

        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Eamil or password is invalid'
            })
        }
        // 用户存在,登录成功,记录登录状态,通过session记录登录状态
        req.session.user = user

        res.status(200).json({
            err_code: 0,
            message: 'OK'
        })
    })
})

// 注册
router.get('/register', function (req, res) {
    res.render('register.html')
})

router.post('/register', function (req, res) {
    // res.render('index.html')
    // console.log(req.body);
    // 获取表单数据
    /*
    req.body/8
    */
    // 操作数据库
    /*
    判断用户是否存在
    如果已存在,不允许注册
    如果不存在,注册新建用户
    */
    // 发送响应
    var body = req.body
    User.findOne({
        $or: [{
            email: body.email
        }, {
            nickname: body.nickname
        }]
    }, function (err, data) {
        if (err) {
            return res.status(500).json({
                success: false,
                messzge: '服务端错误'
            })
        }
        // console.log(data);
        if (data) {
            // 邮箱或密码已存在
            return res.status(200).json({
                err_code: 1,
                message: 'Email or nickname already exist'
            })

            /*  return res.render('register.html', {
                 err_message: '邮箱或密码已存在',
                 form: body
             }) */
        }


        // 将密码进行md5加密(下面这个是加密两次的)
        body.password = md5(md5(body.password))
        // body.password = body.password

        new User(body).save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'Internal error'
                })
            }

            // 注册成功,记录session的状态
            req.session.user = user


            // 方式一:
            /*         res.status(200).send(JSON.stringify({
                success:true,
                foo:'bar'
            })) */
            // 方式二:
            // Express提供了一个方法:json
            // 该方法接受一个对象作为参数,它就自动将对象转为json字符串
            res.status(200).json({
                err_code: 0,
                message: 'Ok'
            })
            // 输出信息
            console.log(req.body);

        })


    })
    // 如果邮箱已存在,判断昵称


})

router.get('/logout', function (req, res) {
    // 清除登陆状态
    req.session.user = null


    // 重定向到登录页
    res.redirect('/')

})

module.exports = router