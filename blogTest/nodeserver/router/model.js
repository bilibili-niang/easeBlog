var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({ //定义数据模型
    name: String,
    pwd: String
})
var user = mongoose.model('u2', UserSchema); //将该模型发布围殴model，第一个参数为数据库的collection，没有会自动创建
module.exports = user;