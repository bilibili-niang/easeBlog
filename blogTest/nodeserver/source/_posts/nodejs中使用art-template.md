title: nodejs中使用art-template
author: IceStone
tags:
  - nodejs
  - note
  - template
categories: []
abbrlink: 13276
date: 2021-08-13 23:40:00
---
> 前言: 写这些东西是我怕要用的时候忘了怎么用

---
> 为什么要使用两种渲染?

- 服务端渲染
  - 说白了就是在服务端使用模板引擎
  - 模板引擎再造诞生于服务器端,后来才发展到了前端
- 服务端渲染和客户端渲染的区别:
  - 客户端渲染不利于 SEO 搜索引擎优化
  - 服务端渲染时可以被爬虫爬取到的,客户端异步渲染时很难被爬虫抓取到
  - 所以你会发现真正的网站既不是纯异步,也不是纯服务端渲染出来的
  - 而是两者结合出来的
  - 例如京东的商品列表就采用的是服务端渲染,目的是为了SEO搜索引擎优化
  - 而它的商品评论列表为用户体验,而且也不需要SEO优化,所以采用的是客户端渲染

而在页面渲染中,前端可以使用模板渲染,后端(服务器渲染)也是可以的

---

#### 安装:

```shell
cnpm i art-template --save
```

使用下面的代码修改指定模板的扩展名(默认模板的文件扩展名是`.art`):

```javascript
app.engine('html',require('express-art-template'))
```



```javascript
var express=require('express')
var app=express()
var path=require('path')
app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))
// 在ndoe中,有很多第三方模板引擎都可以使用,不是只有art-template
app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'./views/'))//默认views目录,
app.get('/',function(req,res){
    res.render('index.html',{
        name:'zs'
    })
})
app.listen('3000',function(){
    console.log('server is running at 127.0.0.1:3000');
})
```

#### 在`index.html`中渲染时:

`index.html`:

```html
{{extend './layout.html'}}
{{block 'head'}}
{{/block}}
{{block 'content'}}
<div>
    <h1>
        index页面填坑内容
        {{name}}
    </h1>
</div>
{{/block}}
{{block 'script'}}
{{/block}}
```

在上面中,它会把页面中的`{{name}}`替换为app.js中配置的数据

#### 在服务器端使用代码模板继承时:

```html
{{extend './layout.html'}}

{{block 'head'}}

{{/block}}

{{block 'content'}}
<div>
    <h1>
        index页面填坑内容
        {{name}}
    </h1>
</div>

{{/block}}

{{block 'script'}}

{{/block}}
```

文件目录结构为:

![在这里插入图片描述](https://img-blog.csdnimg.cn/cb4bef9df988488bbfb45b0532142e7a.png)


如下面的代码,它会引入其他页面的代码:

```html
<!-- 继承lsyout页面的代码 -->
{{extend './layout.html'}}

{{block 'content'}}
<div>
    <h1>
        index页面填坑内容
        {{name}}
    </h1>
</div>
{{/block}}
```



#### 使用部分代码模板:

例如下面的代码,layout背继承之后,其中的

```html
    {{block 'content'}}
    <h1>默认内容</h1>
    {{/block}}
```

这个代码块包裹的内容会被`index.html`中被同样标签包裹的内容给替换

`layout.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css">
    <title>index</title>
</head>
<body>
    <!-- 留一个坑 -->
    {{block 'content'}}
    <h1>默认内容</h1>
    {{/block}}
    <script src="/node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>
</body>
</html>
```

`index.html`:

```html
<!-- 继承layout页面的代码 -->
{{extend './layout.html'}}

{{block 'content'}}
<div>
    <h1>
        index页面填坑内容
        {{name}}
    </h1>
</div>
{{/block}}
```



---

#### 项目中使用代码模板:

> 因此我们在后端返回页面时,可以将大部分公共代码器·提取出来,在使用时引入即可

例如下面的页面代码:

`footer.html`:

```html
<div>
    <h6>
        footer
    </h6>
</div>
```

`header.html`:

```html
<div>

    <h1>公共的头部</h1>
</div>
```

`index.html`:

```html
<!-- 继承lsyout页面的代码 -->
{{extend './layout.html'}}
{{block 'head'}}
{{/block}}
{{block 'content'}}
<div>
    <h1>
        index页面填坑内容
        {{name}}
    </h1>
</div>
{{/block}}
{{block 'script'}}
{{/block}}
```

`layout.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css">
    <title>index</title>
    {{block 'head'}}{{/block}}
</head>
<body>
    {{include './header.html'}}
    <!-- 留一个坑 -->
    {{block 'content'}}
    <h1>默认内容</h1>
    {{/block}}
    <!-- 留给下一个去填坑 -->
    {{include './footer.html'}}
    <script src="/node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>
    {{block 'script'}}{{/block}}
</body>
</html>
```
渲染结果页面:
![在这里插入图片描述](https://img-blog.csdnimg.cn/24640770f643472d84b23a72c342c47d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ljZV9zdG9uZV9rYWk=,size_16,color_FFFFFF,t_70)






