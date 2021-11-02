title: 配置spark并计算pai
author: IceStone
tags:
  - spark
  - pai
categories: []
date: 2021-10-27 20:19:00
---
下载scale和spark:  
Scala:  
https://downloads.lightbend.com/scala/2.12.0/scala-2.12.0.tgz  
Spark:  
https://mirrors.cnnic.cn/apache/spark/spark-2.4.8/spark-2.4.8-bin-hadoop2.7.tgz  

用xftp将两个文件传输到/home/yexin目录下:

![upload successful](/images/pasted-58.png)

解压:  

![upload successful](/images/pasted-59.png)


![upload successful](/images/pasted-60.png)

重命名

![upload successful](/images/pasted-61.png)

在/etc/profile中添加环境变量:
`vim /etc/profile`  

![upload successful](/images/pasted-62.png)

然后:
source /etc/profile
然后输入pyspark启动:

![upload successful](/images/pasted-63.png)

这里我是换了台虚拟机,  
如果你在输入pyspark 之后报出没有找到JAVA_HOME,那么需要再下载jdk并配置环境变量,  
这里我用的jdk下载链接:  
https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz


计算pai:
切换到:
/home/yexin/spark
输入:
run-example SparkPi 10 > SparkPi.txt

![upload successful](/images/pasted-64.png)

运行结束后会把结果写入SparkPi.txt中,  
ll 查看:

![upload successful](/images/pasted-65.png)
输入:
cat SparkPi.txt 

![upload successful](/images/pasted-66.png)
计算完了