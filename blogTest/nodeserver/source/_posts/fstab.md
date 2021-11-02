---
title: fstab

author: IceStone  
created: '2020-02-05T06:10:59Z'  
tags: linux

---

```shell
# fstab
# /etc/fstab 
# created by anaconda on Tue Feb 4 2020 
# Accessible filesystems, by reference, are maintained under 
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) 

utJID=C58da7e7.da77-47da.9964.ebd6ca631dfb / 
UUID=f543eaf9-4304-4boa.aae3-f6c633de2fC2 [boot 
UUID=fae67674-338f-477b-b368-6b815ce952C1 swap 
' /dev/disk• 
for more info 
ext4 
ext4 
swap 
defaults 
defaults 
defaults 
11 
tmpfs 
devpts 
sysfs 
proc 
/dev/shm 
/dev/pts 
[sys
``` 
[ ](images/b155aff2-9c23-4341-bd5c-83484fcab527.png)使用vi /etc/fstab可以查看到


defaults挂载选项决定传递给mount命令时如何挂载个选项之间用逗号隔开

swap（前）文件系统的挂载点

swap（后）文件系统类型

0（前）由dump程序决定是否备份0表示备份1表示不备份

0（后）由fsck程序决定引导时是否检查磁盘几检查顺序取值可以为0，1，2

![ ](images/e1fb21c6-5efd-4caf-b19a-397772ae8388.png) 

