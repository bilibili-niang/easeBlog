---
title: 文件处理命令_cat

author: IceStone
created: '2020-01-14T08:37:40Z'
tags: Linux

---

# 文件处理命令_cat

命令所在路径:/bin/cat

功能:显示文件内容,

语法:cat[文件名]

-n:显示行号

范例:$cat/etc/issue

$cat -n /etc/sevvices

![计算机生成了可选文字:
[root@localhosttmp]#Is
anaconda-tb-YqyB76
ks-script-9L604U
pulse-TNCYqY4HAg5e
pulse-VPz61auDvy1y
virtual-centos65，HahFIV
virtual-root.aCt〕e3
virtual-root．mS5CQq
virtual-root，SFh5rC
-centos65
．config．5892．0
V诃are
re-
．root
Vmware-root
Vmware-root
Vmware-root
．root
1412．2697073976
1414．2688750778
1578．868982856
16117．1847987517
5828．969651921
yum．log
empty
empty—
keyring．0rFV4j
keyring-2TWA7v
ks-script-9L604u.log
orbit．gdm
orbit．root
pulse-1kNvCV05gATn
[root@localhosttmp]#cat一nempty
1
4
5
8
9
1@
asfascavqevaveavavascavevceva
aVSZ
qVasZ
qevaSZX
qVaSX
eaVSCXZ
wacswf
aCSZ
[root@localhosttmp]#](images/f3d480a3-e515-41d1-83ce-5cfaeaa950e9.png)不适合用来查看较打的文件


 
如果将cat倒过来写为tac,那么文件将会倒过来显示(将每行倒过来)

![计算机生成了可选文字:
[root@localhosttmp]#tacempty
aCSZ
wacswf
eaVSCXZ
qVaSX
qevaSZX
qVasZ
aVSZ
asfascavqevaveavavascavevceva
[root@localhosttmp]#《](images/a264c7a6-59df-4ca0-97e4-b0758d6de0cd.png) 

 
