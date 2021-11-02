---
title: Linux文件在-l下显示的含义

author: IceStone
created: '2020-01-12T12:32:34Z'
tags: Linux

---

# Linux文件在-l下显示的含义

![boot etc L In 
ost+tound 
7 21 
•SS etc 
Ilrwxr-xr-x 
rm•tetocathost 
nnt 
15 
12 
11 
Il 
12 
12 
proc 
• 57 
: 53 
• SO 
• 57 
57 
55 
run 
bill 
srv 
usr/bin 
_ rvx. 
xr-xr- 
_ rwx 
rlrwxr. yr 
-xr-x 
rwxr 
dr. xr•xr• x. 
rWX 
l,-wxr- xr- x. 
20 
280 
14 
43 
13 
27 
21 
root 
root 
root 
root 
roo t 
r 00 t 
root 
root 
root 
root 
root 
r 00 t 
root 
root 
root 
roo t 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
root 
4096 
3320 
1220 
4096 
16384 
a 096 
4096 
4096 
1 zoo 
4096 
4096 
4096 
19: 
7 14. 
7 21. 
7 
7 20. 
boot 
21 dev 
home 
Lib - > 
- > usr/Ub64 
Los t+found 
2018 nedia 
2018 nnt 
7 21:24 opt 
20 proc 
20: 24 root 
20: 27 run 
7 20:57 
11 
2018 st-v 
12 
19:20 s 5 
12 20 28 
7 20:57 usr 
7 22:14 var 
usr/sbin 
0 15 
root8tocaIhost ](images/eb485900-5f59-45cf-820f-de5821272cdc.png)最前面出现的数字代表文件存储方式,了解即可


第一个root代表所有者(所有者,谁创建了显示谁),可以有u(user),g(group),o(other)

Linux中所有者和所属组只能各有一个,其他的都属于其他人

第二个root代表所属组

第五个数字代表大小,单位可以为字节,

第六个为文件最后修改时间

第七个为文件名

 
![](images/0afddea7-dfd5-4e43-a77a-4933d09249fd.png)Linux终端中常见的三种


显示如果以-开头,则为文件

d开头,则为目录

l开头,则为软连接

 
 
![](images/273d40ff-55f4-45fd-aff0-945083118962.png) 

 
 
 
 
 
 
 
 
