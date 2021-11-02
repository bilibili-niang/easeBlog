title: hadoop
author: IceStone
tags:
  - hadoop的组成
date: 2021-10-25 00:00:00
categories:
---
### 1.hadoop概念

#### 1.1什么是hadoop:

![upload successful](/images/pasted-38.png)

#### 1.2hadoop的发展历史
#### 1.3hadoop的三大发行版本
#### 1.4hadoop的优势
#### 1.5hadoop的组成
#### 1.6大数据技术生态体系
#### 1.7推荐系统案例


---

### 2.环境准备(前戏)
#### 2.1模板虚拟机准备
#### 2.2克隆
#### 2.3安装jdk,hadoop

---

### 3.hadoop生产环境集群搭建
#### 3.1本地模式
#### 3.2完全分布式(开发和面试的重点)

---
#### 4.常见错误的解决方案


---

### hadoop的组成

#### HDFS架构概述

> Hadoop Distributed File System ,简称HDFS,是一个分布式文件系统  
> HDFS概述:
> + `NameNode(nn)`:存储文件的元数据,如文件名,文件目录结构,文件属性(生成时间,副本数,文件权限),以及每个文件的块列表和块所在的DataNode等
> + `DataNode(dn)`:在本地系统存储文件块数据,以及块数据的校验和.
> + `SecondDary NameNode(2nn)`:每隔一段时间对NameNode元数据备份
    > `NameNode`和`DataNode`的关系:  
    > ![](images/rgtn1dbvf2.png)

#### YARN架构概述

> Yet Another Resource Negptiator 简称 YARN,另一种资源调度者,是hadoop的资源管理器  
> 架构概述:
> + `ResourceManager(RM)`:整个集群资源(内存,cup等)的老大
> + `NodeManager(NM)`:单个节点服务器资源老大
> + `ApplicationMaster(AM)`:单个任务运行的老大  
> `RM`和`NM`的关系:   
> ![](images/pe6msgdz70.png)  
> > 说明:  
> 1.客户端可以有多个  
> 2.集群上可以运行多个ApplicationMaster
> 3.每个NodeManager上可以有多个Container


#### MapReduce结构概述  
> MapReduce 将计算过程分为两个阶段,Map和Reduce  
> + Map阶段并行处理输入数据  
> + Reduce阶段对Map结果进行汇总