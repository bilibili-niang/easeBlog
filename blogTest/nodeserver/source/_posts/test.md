title: nodejs连接MongonDB和mysql进行CRUD
author: IceStone
tags:
  - mysql
  - crud
  - mongodb
  - nodejs
categories: []
abbrlink: 63023
date: 2021-08-10 19:25:00
top: true
---

> 前言:学这些东西我怕忘了

##### [mongondb](#mongondb)
##### [mysql](#mysql)

<a id="mongondb"></a>  
#### MongonDB
> mongondb中的scheama:
```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema
// 1.连接数据库
// 插入一个新的数据库时,并不会立即创建该数据库,而是会在你第一次插入一个数据时,创建该数据库
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true, useUnifiedTopology: true });
//2.设计集合表结构:
// 字段名称就是表结构中的属性名称
// 一般数据库都会有约束,是为了保护数据的完整性,不会有脏数据
var userSchema = new Schema({
        username: {
            type: String,
            required: true //必须有
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String
        }
    })
    // 3.将文档结构发布为模型
    // 第一个参数接受一个字符串,第二个参数接受一个Schema
    // 第一个参数:
    //          传入一个大写名次单数字符串用来表示你的数据库名称,
    //          mognose会自动将大写名次的字符串生成小写复数,的集合名称
    //          例如这里的User就会转变成users集合名称
    // 返回值:返回模型对象(模型构造函数)
var User = mongoose.model('User', userSchema)
// 4.当我们有了这个模型构造函数,我们就可以使用这个构造函数对模型操作了(增删改查)
```
### 增加数据;

```javascript
// 4.当我们有了这个模型构造函数,我们就可以使用这个构造函数对模型操作了(增删改查)
var admin = new User({
        username: 'admin',
        password: '123456',
        email: 'killicestone@126.com'
    })
    // 持久化对象:
admin.save(function(err, ret) {
    if (err) {
        console.log('存储失败');
    } else {
        console.log('存储成功');
    }
})
```



---

### 查询数据:

> 查询所有:

```javascript
 User.find(function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

> 使用条件查询:

```javascript
User.find({
    username: '张三'
}, function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

> 查找匹配的第一个:

```javascript
// 此时只会查找username为张三的第一条数据
User.findOne({
    username: '张三'
}, function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

或者:

```javascript
// 此时只会查找出表中的第一条数据
User.findOne(function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

>  例如查找username为张三,password为123456的数据:

```javascript
User.find({
    username: '张三',
    password: '123456'
}, function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

---

### 删除数据:

> 根据条件删除一个:

```javascript
User.remove({
    username: '张三'
}, function(err, ret) {
    if (err) {
        console.log('删除失败');
    } else {
        console.log('删除成功');
        console.log(ret);
    }
})
```

> 根据id删除一个

```javascript
Model.findByIdAndRemove(id,[options],[callback])
```

---



### 更新数据:

> 根据id更新数据

```javascript
User.findByIdAndUpdate('60fc26d4d4309417f001d602', {
    password: '123'
}, function(err, ret) {
    if (err) {
        console.log('更新失败');
    } else {
        console.log('更新成功');
        console.log(ret)
    }
})
```

> 根据指定条件更新所有:

```javascript
model.findOneAndUpdate([coditions],[update],[options],[callback])
```
---
---

<a id="mysql"></a>  
#### mysql:
具体的CRUD只需要在query语句中使用即可,下面代码举个例子
```javascript
var mysql = require('mysql')
// 1.创建连接
var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '10086',
        database: 'users'
    })
// 2.连接数据库
connection.connect();
// 3.执行数据操作
/* connection.query('SELECT * From `users`', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is:', results);
}) */

// 插入:
/* connection.query(`INSERT INTO users VALUES(NULL,"admin","123456")`, function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is:', results);
}) */

// 4.关闭连接
connection.end()
```