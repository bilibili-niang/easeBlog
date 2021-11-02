title: 从0开始搭建hadoop集群_下
author: IceStone
tags:
  - hadoop
  - 从0开始系列
categories:
  - hadoop
  - ''
date: 2021-10-29 01:06:00
---
> 接上一篇的最后一个章节

### 集群配置

#### 在102上:核心配置文件

##### 配置`core-site.xml`  
> 这里配置的是hadoop内部通讯地址,  
在下面显示的目录中修改配置文件:  
```shell
[aiguigu@hadoop102 hadoop]$ pwd
/opt/module/hadoop-3.1.3/etc/hadoop
[aiguigu@hadoop102 hadoop]$ vim core-site.xml 
```

插入内容:  
记着是在`</configuration>`这个标签里面插入,下面几个配置也是  
```shell
 <!-- 指定 NameNode 的地址 -->
 <property>
 <name>fs.defaultFS</name>
 <value>hdfs://hadoop102:8020</value>
 </property>
 <!-- 指定 hadoop 数据的存储目录 -->
 <property>
 <name>hadoop.tmp.dir</name>
 <value>/opt/module/hadoop-3.1.3/data</value>
 </property>
 ```
插入之后是:  
```shell
[aiguigu@hadoop102 hadoop]$ cat core-site.xml 
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<!--
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License. See accompanying LICENSE file.
-->

<!-- Put site-specific property overrides in this file. -->

<configuration>
<!-- 指定 NameNode 的地址 -->
 <property>
 <name>fs.defaultFS</name>
 <value>hdfs://hadoop102:8020</value>
 </property>
 <!-- 指定 hadoop 数据的存储目录 -->
 <property>
 <name>hadoop.tmp.dir</name>
 <value>/opt/module/hadoop-3.1.3/data</value>
 </property>
</configuration>
[aiguigu@hadoop102 hadoop]$ 
```
##### HDFS 配置文件
> 这里配置的是web访问端口  

配置 hdfs-site.xml  
刚刚102的目录下:  
```shell
vim hdfs-site.xml 
```
添加以下内容:  
```shell
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
<!-- nn web 端访问地址-->
<property>
 <name>dfs.namenode.http-address</name>
 <value>hadoop102:9870</value>
 </property>
<!-- 2nn web 端访问地址-->
 <property>
 <name>dfs.namenode.secondary.http-address</name>
 <value>hadoop104:9868</value>
 </property>
</configuration>

 ```
 
 添加之后:  
 ```shell
 [aiguigu@hadoop102 hadoop]$ cat hdfs-site.xml 
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<!--
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License. See accompanying LICENSE file.
-->

<!-- Put site-specific property overrides in this file. -->

<configuration>
<!-- nn web 端访问地址-->
<property>
 <name>dfs.namenode.http-address</name>
 <value>hadoop102:9870</value>
 </property>
<!-- 2nn web 端访问地址-->
 <property>
 <name>dfs.namenode.secondary.http-address</name>
 <value>hadoop104:9868</value>
</configuration>
[aiguigu@hadoop102 hadoop]$ vim hdfs-site.xml 
```

##### YARN 配置

使用命令:  
```shell
vim yarn-site.xml
```

其中插入:  
```shell
 <!-- 指定 MR 走 shuffle -->
 <property>
 <name>yarn.nodemanager.aux-services</name>
 <value>mapreduce_shuffle</value>
 </property>
 <!-- 指定 ResourceManager 的地址-->
 <property>
 <name>yarn.resourcemanager.hostname</name>
 <value>hadoop103</value>
 </property>
 <!-- 环境变量的继承 -->
 <property>
 <name>yarn.nodemanager.env-whitelist</name>
 
<value>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CO
NF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAP
RED_HOME</value>
 </property>
```

这边编辑的时候我们可以发现,它默认使用空值,但是推荐使用shuffle来进行资源调度,这个后面会提到

##### MapReduce 配置

```shell
vim mapred-site.xml
```

插入:  
```shell
<!-- 指定 MapReduce 程序运行在 Yarn 上 -->
 <property>
 <name>mapreduce.framework.name</name>
 <value>yarn</value>
 </property>
 ```
 

此时我们已经在102上把`hdfs`和`yarn`的配置都配置完了


### 分发脚本

在下面的目录中分发：  
```shell
[aiguigu@hadoop102 etc]$ pwd
/opt/module/hadoop-3.1.3/etc
```
使用命令:  
```shell
xsync hadoop
```
然后就分完了

![upload successful](/images/pasted-83.png)


然后此时在103和104上cat一下文件是否同步了



![upload successful](/images/pasted-84.png)

![upload successful](/images/pasted-85.png)

至此就搭建完了,后面会讲到如何起集群