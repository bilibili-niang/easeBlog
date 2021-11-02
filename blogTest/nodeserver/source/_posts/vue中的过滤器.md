title: vue中的过滤器
author: IceStone
tags:
  - vue
  - 过滤器
  - 笔记
categories: []
abbrlink: 25276
date: 2021-03-18 19:30:00
---
#### vue中过滤器的作用:  
> 将常见的字符串格式化 and soon(英语好像用错了)

##### 过滤器有`全局过滤器`和`私有过滤器`(仅作用在当前的vue实例)  
																					
##### 使用:  
1.在vue实例外面中定义你的过滤器(`此时是全局过滤器`),如:  
```html
<script>
    <!--    全局过滤器进行时间格式化-->
    Vue.filter('dateFormat', function (dateStr) {
        //根据给定的时间字符串,得到特定的时间
        var dt = new Date(dateStr)
        var y = dt.getFullYear();
        var m = dt.getMonth();
        var d = dt.getDate();
        return `${y}-${m}-${d}`;
    })
    var vm = new Vue({
        el: '#app',
        data: {
            time1: new Date(),
        }, methods: {}
    })
</script>
```

2.在vue中定义过滤器(`此时是私有过滤器`):
```html
<script>
    var vue = new Vue({
        el: '#app',
        data: {
            time1: new Date(),
        }, 
        methods: {}, 
        //在`filters`中定义过滤器
        filters: {
            dataFormat(dateStr) {
                //根据给定的时间字符串,得到特定的时间
                var dt = new Date(dateStr)
                var y = dt.getFullYear();
                var m = dt.getMonth();
                var d = dt.getDate();
                return `${y}-${m}-${d}`;
            }
        }
    })
</script>
```




---  
#### 使用的例子:		
```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <mate name="viewport" content="width=device-width" , initial-scale="1.0"/>
    <title>全局过滤器演示</title>
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
<!--    <h2>不使用过滤器:{{time1}}</h2>-->
    <h2>第一种方法:{{time1 | dateFormat}}</h2>
    <p>第二种方法
        <input type="text" v-bind:value="time1 | dateFormat">
    </p>
</div>
<script>
    <!--    全局过滤器进行时间格式化-->
    Vue.filter('dateFormat', function (dateStr) {
        //根据给定的时间字符串,得到特定的时间
        var dt = new Date(dateStr)
        var y = dt.getFullYear();
        var m = dt.getMonth();
        var d = dt.getDate();
        return `${y}-${m}-${d}`;
    })
    var vm = new Vue({
        el: '#app',
        data: {
            time1: new Date(),
        }, methods: {}
    })
</script>
</body>
</html>
```
不使用过滤器:  

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031217400498.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ljZV9zdG9uZV9rYWk=,size_16,color_FFFFFF,t_70)


使用过滤器:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031211345971.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ljZV9zdG9uZV9rYWk=,size_16,color_FFFFFF,t_70)

--- 
私有过滤器和全局过滤器的区别:  
(其实也就`前者只能用于过滤器所在的vue实例`),`后者是所有vue实例都可以使用`

---
如果`私有过滤器和全局过滤器名称重复时`,使用该过滤器时会`优先使用私有过滤器`