---
title: 文件处理命令_Mkdir命令

author: IceStone
created: '2020-01-13T06:39:45Z'
tags: Linux

---

# 文件处理命令_Mkdir命令

mkdir命令,

全称:makedirectory

含义:创建目录

语法:#makdir路径

![计算机生成了可选文字:
[root@localhosttmp]#mkdir/tmp/xiaodinaying2
[root@localhosttmp]#pwd
/tmp
Youhavenewmailin/var/spool/mail/root
[root@localhosttmp]#Is一I
bash:Is一I：commandnotfound
[root@localhosttmp]#Is飞
rWXr”Xr”X
@7．51
@7．52
@7：52
@5：14
@5：15
@5．53
@7：52
@5．54
@5：14
@7．51
@5：13
@5．52
@5：48
@7：53
total
drwx-
drwx-
drwx-
drwx-
drwx-
drwx-
drwx-
drwx-
drwx-
drwx-
drwx-
drwx-
128
一Xr”X
1
root
root
centos65
root
root
2gdm
root
2gdm
centos65
root
centos65
root
root
root
centos65
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
centos65
root
root
gdm
root
gdm
centos65
root
centos65
root
root
root
centos65
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
31853
4@95
4@95
2299
75
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
4@95
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
Jan
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
14
52
51
．14
51
anaconda-tb-YqyB76
keyring．0rFV4j
keyring-2TWA7v
ks-script-9L604U
ks-script-9L604u.log
0rbit．gdm
0rbit．root
pulse-1kNvCV05gATn
pulse-TNCYqY4HAg5e
pulse-VPz61auDvy1y
virtual-centos65，HahFIV
virtual-root，act〕e3
virtual-root.mS5CQq
virtual-root，SFh5rC
vmware-config-5892.O
drwxrwxrwt。
drwx-
drwx-
drwx-
drwx-
drwx-
drwx-
吒9一
Vmwaroot
Vmwaroot
Vmwaroot
Vmwaroot
Vmwaroot
1412．2697073976
1414．2688750778
1578．868982856
16117．1847987517
5828．969651921
51
xiaodinaying2
yum．log
root@localhosttmp]#](images/3e3c707b-c993-4742-b05f-85a18cd3ff9c.png) 

递归创建:

Mkdir -p [目录名]

在创建之前dianying目录是不存在的

![计算机生成了可选文字:
[root@localhost
tmp]#mkdir
root@localhost
tmp]#pwd
/tmp
root@localhosttmp]#Is巧
392988anaconda-tb-YqyB76
dianying
525589
keyring-OrFV4j
525545
keyring-2TWA7v
525354
ks-script-9L604U
418@57
ks-script-9L604U，log
418@58
/tmp/dianying/dadianying
525392
52542@
52535@
525359
525442
525397
orbit
0rbit
pulse-1kNvCV05gATn
pulse-TNCYqY4HAg5e
pulse-VPz61auDvy1y
virtual-centos65，HahFIV
525525
525592
525559
525382
527985
virtual-root.aCt〕e3
virtual-root.mS5CQq
virtual-root，SFh5rC
vmware-config-5892.O
52795@
525351
525388
525355
527999
525332
Vmware-root
Vmwaroot
Vmwaroot
Vmwaroot
Vmwaroot
-r00t
1412．2697073976
1414．2688750778
1578．868982856
16117．1847987517
5828．969651921
525575
xiaodinaying2
525525
39@145yum．log
[root@localhosttmp]#cd/tmp/dianying/
[root@localhostdianying]#pwd
/tmp/dianying
[root@localhostdianying]#Is一I
total4
dadianying
drwxr-xr-x.2rootroot4@95Jan14@7：55
[root@localhostdianying]#《](images/831d0f27-2ce0-4bc5-86c5-674391ef6a82.png)通过递归创建,创建了一个新的递归目录


