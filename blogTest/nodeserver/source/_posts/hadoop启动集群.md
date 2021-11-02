title: hadoop启动集群
author: IceStone
tags:
  - hadoop
categories:
  - hadoop
date: 2021-10-29 01:37:00
---
### 配置worders
在启动之前必须的配置,有几个节点就配置几台  
在102上:  
```shell
[aiguigu@hadoop102 etc]$ cd /opt/module/hadoop-3.1.3/etc/hadoop/
[aiguigu@hadoop102 hadoop]$ vim workers 
```
把默认的localhost给删了  
并在其中写入:  
```shell
hadoop102
hadoop103
hadoop104
```
要注意,在该文件中不能有空格如果有空格会被认为是主机名称  
然后分发一下:  
```shell
xsync workers
```
分发之后回到hadoop的根目录:  
```shell
[aiguigu@hadoop102 hadoop-3.1.3]$ pwd
/opt/module/hadoop-3.1.3
```
准备启动集群  

> 在准备之前先要进行初始化,只有第一次才需要:  

在102上面说明的目录中使用:  

```shell
hdfs namenode -format
```
> 注意此时只是初始化102

成功:  

![upload successful](/images/pasted-86.png)
正常情况下没出错就是启动成功了  
出错了建议直接必应  
初始化完毕之后,该目录下就多了一个data和logs路径:  

```shell
[aiguigu@hadoop102 hadoop-3.1.3]$ ll
总用量 176
drwxr-xr-x. 2 aiguigu aiguigu    183 9月  12 2019 bin
drwxrwxr-x. 3 aiguigu aiguigu     17 10月 29 01:56 data
drwxr-xr-x. 3 aiguigu aiguigu     20 9月  12 2019 etc
drwxr-xr-x. 2 aiguigu aiguigu    106 9月  12 2019 include
drwxr-xr-x. 3 aiguigu aiguigu     20 9月  12 2019 lib
drwxr-xr-x. 4 aiguigu aiguigu    288 9月  12 2019 libexec
-rw-rw-r--. 1 aiguigu aiguigu 147145 9月   4 2019 LICENSE.txt
drwxrwxr-x. 2 aiguigu aiguigu     40 10月 29 01:56 logs
-rw-rw-r--. 1 aiguigu aiguigu  21867 9月   4 2019 NOTICE.txt
-rw-rw-r--. 1 aiguigu aiguigu   1366 9月   4 2019 README.txt
drwxr-xr-x. 3 aiguigu aiguigu   4096 9月  12 2019 sbin
drwxr-xr-x. 4 aiguigu aiguigu     31 9月  12 2019 share
drwxr-xr-x. 2 root    root        22 10月 27 17:36 wcinput
drwxr-xr-x. 2 root    root        88 10月 27 17:41 wcoutput
[aiguigu@hadoop102 hadoop-3.1.3]$ 
```

此时查看data下的文件;  
```shell
[aiguigu@hadoop102 hadoop-3.1.3]$ cd data
[aiguigu@hadoop102 data]$ ll
总用量 0
drwxrwxr-x. 3 aiguigu aiguigu 18 10月 29 01:56 dfs
[aiguigu@hadoop102 data]$ cd dfs/
[aiguigu@hadoop102 dfs]$ ll
总用量 0
drwxrwxr-x. 3 aiguigu aiguigu 21 10月 29 01:56 name
[aiguigu@hadoop102 dfs]$ cd name/
[aiguigu@hadoop102 name]$ ll
总用量 0
drwxrwxr-x. 2 aiguigu aiguigu 112 10月 29 01:56 current
[aiguigu@hadoop102 name]$ cd current/
[aiguigu@hadoop102 current]$ ll
总用量 16
-rw-rw-r--. 1 aiguigu aiguigu 394 10月 29 01:56 fsimage_0000000000000000000
-rw-rw-r--. 1 aiguigu aiguigu  62 10月 29 01:56 fsimage_0000000000000000000.md5
-rw-rw-r--. 1 aiguigu aiguigu   2 10月 29 01:56 seen_txid
-rw-rw-r--. 1 aiguigu aiguigu 219 10月 29 01:56 VERSION
[aiguigu@hadoop102 current]$ 
```

查看version:  
> `cat cat VERSION`

```shell
[aiguigu@hadoop102 current]$ cat VERSION 
#Fri Oct 29 01:56:58 CST 2021
namespaceID=1419205142
clusterID=CID-948e60af-e1f5-45a0-aac5-6c0aeaaa6a02
cTime=1635443818821
storageType=NAME_NODE
blockpoolID=BP-1052083983-192.168.10.102-1635443818821
layoutVersion=-64
[aiguigu@hadoop102 current]$ 
```

#### 启动集群:
- 使用下面的命令:　

```shell
[aiguigu@hadoop102 hadoop-3.1.3]$ sbin/start-dfs.sh 
Starting namenodes on [hadoop102]
Starting datanodes
Starting secondary namenodes [hadoop104]
[aiguigu@hadoop102 hadoop-3.1.3]$ 

```


启动完毕:
```shell
[aiguigu@hadoop102 hadoop-3.1.3]$ sbin/start-dfs.sh 
Starting namenodes on [hadoop102]
Starting datanodes
Starting secondary namenodes [hadoop104]
[aiguigu@hadoop102 hadoop-3.1.3]$ 
```
此时可以在102上使用jps查看:
我这启动错了
```shell
[aiguigu@hadoop102 hadoop-3.1.3]$ jps
9765 Jps
9370 NameNode
9530 DataNode
[aiguigu@hadoop102 hadoop-3.1.3]$ 
```


103上:  
```shell
[aiguigu@hadoop103 hadoop-3.1.3]$ jps
5975 Jps
5900 DataNode
[aiguigu@hadoop103 hadoop-3.1.3]$ 
```
104上: 
```shell
[aiguigu@hadoop104 hadoop]$ jps
6036 DataNode
6199 Jps
6154 SecondaryNameNode
[aiguigu@hadoop104 hadoop]$ 
```