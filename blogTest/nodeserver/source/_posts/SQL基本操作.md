---
title: SQL基本操作

author: IceStone
created: '2020-01-21T13:17:05.226Z'
tags: MYSQL

---

# SQL基本操作

基本操作:CRUD(增删改查)

将SQL地基本操作根据对象进行分类,分为三类:

库操作,表操作(字段),数据操作

 
库操作:对数据库的增删改查

新增数据库:

基本语法:

create database数据库名字[库选项]

库选项:用来约束数据库,分为两个选项:

字符集设定:charset/character具体字符集(数据存储的编码格式)常用

符集:GBK和UTF8

校对集设定:collate具体校对集(数据比较的规则)

 
其中数据库的名字不能用关键字(已经被使用的字符)或者保留字(将来可能会用到)

 
SQL报错只能报错大概位置,不会说明报错原因(静默模式)

如果非要使用关键字或者保留字,或者中文,那么,必须使用反引号(Esc键下面的键在英文状态下输出)

中文数据库是可以的,前提是保证服务器可以识别

 
(创建中文名称数据库)如:

set name gbk;

create database数据库名称;

 
 
 
 
