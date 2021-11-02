title: form提交post和get
author: IceStone 
tags: 
  - form提交post和get
categories: 
date: 2020-10-23
---
### form中的action提交方式该方式默认提交方式为get,
地址栏提交：  连接/文件? 参数名1=参数值1 & 参数名2=参数值2 & 参数名1=参数值1

get提交方式：method="get" 和地址栏,超链接的(a标签),请求方式默认都属于get提交方式

#### get和post提交方式区别：
* a.get提交方式在地址栏显示请求信息(但是地址栏容纳的信息有限,<br>
一般是4-5kb;如果请求数据存在大文件,会出现容纳不下文件,会报错),post不会显示

* b.文件上传方式必须是post
推荐使用post