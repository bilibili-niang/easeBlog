---
title: 权限管理命令_chmod更改权限

author: IceStone
created: '2020-01-15T06:45:09Z'
tags: Linux

---

# 权限管理命令_chmod更改权限

原意:changethepermissionsmadeofafile

命令所在路径:/bin/chmod

执行权限:所有用户

语法:chmod{ugoa}{+-=}{rex}[文件或目录]

+表示增加权限,-表示减去权限

=表示让他的权限为….

[mode=42][文件或目录]

要添加多个用户的权限更改时,可以在同一条命令中将用户

用逗号分隔

 
-R(大写)递归修改

 
功能:改变文件或目录权限

 
更改文件权限的只有两个:root,所有者

 
 
下图:更改rgo的权限为7

![计算机生成了可选文字:
total148
rWX。
rWXrWXrWX。
[root@localhosttmp]#chmod
[root@localhosttmp]#Is一I
21：15
21：29
21：15
777
root
root
root
root
root
root
root
root
empty
31853
11217
11217
Jan
Jan
Jan
Jan
14
14
14
14
52
anaconda-tb-YqyB76
empty
empty，kuaijiefangshi
empty，Ying
empty](images/c7a819af-4857-43a8-b416-1fe3d764976d.png) 

但实际中权限用数字表示

 
![权 限 的 数 字 表 示 
w 一 一 2 
rwxrw—r— ](images/a9bc9c77-011f-441a-9f82-0772905a082f.png) 

![计算机生成了可选文字:
file
directory
r-cat/more/head/tail/less
scriptCO《到and
x。
r：1s
v：touch/mkdir/rmdir/hn
x：cd](images/2eb89b84-d7bc-4e49-bb44-cb5de016207d.png) 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
|R|读权限|可以列出目录中的内容|
|---|---|---|
|W

 
|写权限|可以在目录中创建,删除文件|
|x|执行权限|可以进入目录|
可读,可写,不执行

420

