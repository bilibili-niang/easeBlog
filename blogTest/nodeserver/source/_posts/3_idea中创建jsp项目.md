title: idea中创建jsp项目
author: IceStone 
tags: 
  - idea中创建jsp项目
categories: 
date: 2021-10-25
---
此处使用的idea版本为 2020.2

与之前idea版本新建jsp项目不同

a.先新建一个java项目

![Alt](
images/ncvydg3fw5.png
)

不用勾选,直接下一步

![Alt](
images/8nlsb4f5co.png
)

下一步

![Alt](
images/2zkwjbmas7.png
)

项目命名并选择项目路径之后,点击完成

![Alt](
images/fuolz38eac.png
)
对项目右键 -->添加框架的支持

![Alt](
images/p5d2tnr8vg.png
)
此时就可以添加web项目了

![Alt](
images/20vmb6l78r.png
)
然后点击确定即可
---
下面,就需要配置tomcat与项目关联一起了:


此时没有关联/启动tomcat
打开项目的index.jsp,右键运行时会弹出

![Alt](
 images/mpxbhy49fd.png
 )
左键单击右上角的添加配置:

![Alt](
images/n4dxboilgm.png
)
点击加号并选择tomcat -->本地

![Alt](
images/0qxnobh94u.png
)

然后点击部署:

![Alt](
images/pj7ta0nvuy.png
)
点击右边的加号,添加第一个

![Alt](
images/szqwtm94nx.png
)
然后点击确定即可

启动:右键tomcat,运行即可启动成功,如果启动成功,会自动打开index.jsp

![Alt](
images/vui91d0nhl.png
)
下图为已打开index.jsp

![Alt](
images/n2mu7jeywf.png
)

