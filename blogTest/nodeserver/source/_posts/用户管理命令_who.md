---
title: 用户管理命令_who

author: IceStone
created: '2020-01-16T12:36:13Z'
tags: Linux

---

# 用户管理命令_who

路径:/usr/bin/who

权限:所有用户

语法:who

功能:查看登陆用户信息

范例:$who

 
![trootglocalhost 
trootgloca Ihost 
zgzg-B1-16 Hl ](images/e959653b-8af0-4f3d-a2a0-8ff9991b81fc.png)用户名终端登陆时间ip地址


tty表示本地终端

pts表示远程(终端)登陆

本地登录不会写出ip地址,终端登录会写出ip地址

 
$w(获得更为详细的登陆情况)

![trootßloca I host 
18:21 
USER 
root 
[rootß loca Ihost 
user , 
load 
• g.ga, g.aa, g.ag 
average . 
JCPU 
1. Izs 
IDLE 
1 .gas 
pcru 
8.3Zs ](images/c65057ef-bdbc-4350-ad89-3c99dededadb.png)第一个表示当前系统时间,


Uptime表示累计登录时间,

第三个表示当前有多少用户登录,

 
![None](images/84fcc580-2e5a-43d7-9b8e-2c4909cff2bd.png)表示系统负载值


 
IDLE表示该用户空闲了多久

![ιυι.Ε ](images/55c3a094-792e-4244-aae1-bbadded89126.png) 

当前用户登陆过来占用cpu的时间

![计算机生成了可选文字:
VCPU
．32](images/665acea8-2562-408c-8b14-e1877ca8d3bb.png) 

当前用户累计占用cpu的时间

![计算机生成了可选文字:
JCPU
1．12s](images/256291bd-89b8-42cc-aee4-256ee560ae41.png) 

当前用户的执行操作

![None](images/0a588ec9-3961-4323-bac2-0732cfd0ca9a.png) 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
