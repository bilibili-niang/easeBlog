
var mongoose = require('mongoose')
// 连接数据库
mongoose.Promise = global.Promise;
/*mongoose.connect('mongodb://localhost:27017/test', {
    useMongoClient: true
});*/
mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema
var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        // 注意,这里不要写Date.now(),如果这样写会即时调用Data.now而不是创建一个用户调用一次
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/img/avatar-default.png'
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date,
    },
    status: {
        // 是否可以登录,是否可以登录使用
        yupe: Number,
        // 1,不可以评论,2不可以登录
        enum: [0, 1, 2],
        // 0,没有权限限制
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema)