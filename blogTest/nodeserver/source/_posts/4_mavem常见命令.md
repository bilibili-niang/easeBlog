title: mavem常见命令
author: IceStone 
tags: 
  - mavem常见命令
categories: 
date: 2021-10-25
---
* 编译命令:`mvn compile`

> 编译时,它会去编译HelloWorld中的java代码<br/>
> 在编译时,需要在`pom`所在的目录(如"`C:\Windows\System32\cmd.exe`)进行命令行操作:<br/>
> ![](images/r7i8fuj59w.png)<br/>
> 使用`mvn compile`命令<br/>
> 此时它会自动下载在`pom.xml`配置的本地仓库,添加的依赖时首先在本地仓库中找,本地仓库找不到了会去中央仓库下载<br/>
> 完成时:<br/>
> ![](images/74ntpv1oqx.png)<br/>
> 在第一次下载时,它会下载一些基础的maven的jar包<br/>
> 编译成功之后:<br/>
> ![](images/k40zxplmh3.png)<br/>
> 圈起来的是编译之后代码的目录
> 该命令只编译main目录中的代码

* 测试命令:`mvn test`

> 还是在刚刚的命令行中操作<br/>
> 使用`mvn test`命令:<br/>
> ![](images/wktfa61p73.png) <br/>
> 此时它下载的是测试环境要用的一些基础包<br/>
> 测试完之后,它会报告测试了多少,会报错<br/>
> ![](images/3bmwjevhyo.png)

* 打包:`mvn package`<br/>

> 第一次执行时也会下载一些环境<br/>
> ![](images/pkuag8sln5.png)<br/>
> 注: *只有测试通过才能打包成功*<br/>
> 打包成功:<br/>
> ![](images/ow73n8adgx.png)<br/>
> 同时会显示存放的路径

* 将所使用的插件放入本地仓库以供使用:`mvn install`

> 将开发的模块放入本地仓库供其他模块使用 <br/>
> 放入的路径由`pom.xml`中的`gav`决定
> ![](images/o4leqvwj8p.png) <br/>
> 完成:
> ![](images/i0ab2weldv.png) <br/>
> 这里安装到本地仓库的路径是在之前设置的路径:<br/>
> ![](images/yazjho09di.png)
> 路径中和`pom.xml`中的`gav`对应关系:<br/>
> ![](images/equgd95x07.png)

* 删除target(删除编译文件的目录):`mvn clean`
> 运行mvn命令,必须在pom.xml所在的目录


