const express = require('express');

let router = express.Router();

router.use('/', function(req, res) {
    res.render('../view/index.html', {
        username: 'zs'
    });
});

router.get('/test', function(req, res) {
    console.log(req.url);
    res.render(测试文字, {

    });
});

//导出该路由
module.exports = router;