---
title: 异常-final

author: IceStone
created: '2019-12-22T07:33:04Z'
tags: Java基础

---

# 异常-final

//System.exit(0);

//终止Java虚拟机,后面的finally就不会被执行了

return;//终止方法运行是不能使Java虚拟机停止的

 
 
finally用来释放资源，在IO操作中经常见

/只要执行了try就会执行finall

 
 
![static int test() { 
int X = 10; 
try { 
system. out.println(l / 9) ; 
return x; 
catch (Exception e) { 
x = 30; 
return x; 
} finally 
system. out. pri ntln( "fi nail ](images/27699a75-7748-4027-866d-87c91b17e546.png)输出有：


!["C ： \Program Files\Java 
finall 中 x 等 于 40 
30 
进 程 已 结 束 ， 退 出 代 码 e ](images/08e42dfd-0cb5-4825-b8a4-548bf83c81a3.png)在try，catch，finally中，执行了try之后首先执行finally中的执行代码！


