---
title: 文件处理命令_ls命令

author: IceStone
created: '2020-01-12T04:36:39Z'
tags: Linux

---

# 文件处理命令_ls命令

用法1:ls指令

含义:(ls)list,列出当前目录下的所有文件和文件夹的名称

 
用法2:路径

列出指定目录下的文件或文件夹的名称

 
用法3:#ls选项路径

含义:在列出路径下文件/文件夹的名称.并以指定格式来经行显示

常见的:

#ls -l路径

-l表示list,以长列表的形式展示

,展示的信息较为齐全

例如:

![:otal 
ir•xr-xr 
fr-xr-xr 
Irwxr•xr 
i ruxr 
Irwxr-xr 
ir-xr-xr 
fr-xr-xr 
fruxr-xr 
Irwxr•xr 
irwxr-xr 
ir-xr-x 
fr-xr-xr 
iruxr-xr 
Irwxr-xr 
90 
fr-xr-xr-x. 152 
root@localhost 
•03 bin 
X 1€2 
04:58 Ub64 
06:52 
2 root 
5 root 
17 
root 
root 
3 root 
10 
root 
9 root 
2 root 
2 root 
3 root 
3 root 
root 
24 
root 
2 root 
7 root 
2 root 
13 
root 
25 
root 
13 
root 
21 
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
4e96 
Jan 
le24 
Jan 
3729 
Jan 
4e96 
Jan 
4e96 
Jan 
4e96 
Jan 
12288 
Jan 
16384 
Jan 
4e96 
Sep 
096 
Jan 
4e96 
Jan 
9 Jan 
4e96 
Jan 
12288 
Jan 
9 Jan 
4e96 
Sep 
9 Jan 
4096 
Jan 
4896 
Jan 
4e96 
Jan 
14 
14 
14 
14 
14 
14 
14 
14 
23 
14 
14 
14 
14 
14 
23 
14 
14 
14 
14 
05 . 
05 
: 06 
06. 
06. 
•54 
05. 
66 
04 
58 
04. 
05 : 07 
05:09 
06:52 
06:54 
05:07 
14 06:52 
21311 
i rwx rwx . 
fruxr-xr-x. 
irwxr-xr-x. 
06 
04. 
05 . 
boot 
dev 
etc 
h ome 
lib 
lost+found 
med ia 
mnt 
opt 
proc 
root 
sbin 
selinux 
srv 
sys 
usr ](images/f11a1775-437c-48ef-8c74-5c6441207204.png) 

#ls -a路径

表示显示所有的文件/文件夹,包括隐藏文件和隐藏文件夹

例如:

![计算机生成了可选文字:
[root@localhost／]#Is一a
tmp
binbootdevetchomelib11b64lost+foundmediamntoptprocrootsbinsetinuxSrvSYS
。autofsck](images/3d851a72-b868-4e45-b2a3-a5afd3f69479.png) 

 
用法4:#ls-h

含义:列出指定路径下的所有文件/文件夹/的名称,以列表的形式显示在文档大小时以可读性较高的形式来显示

 
用法5:#ls-I

查询当前文件目录的i节点

关于路径(重要)

路径可以分为两种,相对路径,绝对路径

在Linux中1绝对路径是"/"

./表示当前目录下,"../"是表示上一级目录

 
Linux中隐藏文件都是以.开头

![[ 10086010ca1host 
alsa 
binfmt. d 
crda 
cups 
debug 
dracut 
firewalld 
f i rmwa re 
fontconfig 
games 
grub 
j ava 
j ava- 
j ava- 
j ava- 
j ava- ext 
1.5. 
1.6 
1.7. 
1.8 
O 
.0 
/ lib 
j vm- commmon 
jvm- exports 
jvm- private 
kbd 
kdump 
ke rnel 
locale 
modprobe. d 
modules 
modules- load. d 
mozilla 
NetworkManager 
pot kit-I 
python2.7 
rpm 
sendmail 
sendmail. postfix 
sse2 
sysctl.d 
sys temd 
tmpfiles.d 
tuned 
udev 
yum- plugins ](images/69315ce8-fc29-4727-acf7-8fe6e5d310c8.png)目录下,淡蓝色为文件,深蓝色为文件夹


Linux中显示目录大小都是4k,但它的大小并非4k￼

 
 
Ls-d:显示指定目录本身

![计算机生成了可选文字:
[root@localhost一]#Is一Id/etc
drwxr一×r一×．1@2rootroot4@95Jan14@7：17](images/b43e1598-d225-44c3-b157-cc41ab4bebff.png) 

只是针对目录查看它的详细信息,并不查看其数据

 
 
 
 
 
 
 
 
 
 
 
第一个数字(2,5,7之类的)代表该文件的存储方式

第一个root代表所有者,所有者有三种,root,用户组,other

第二个root代表该文件的所属组

第五项为文件大小

第六项为文件最后一次修改时间

InkNode is not supported 
