title: ssh免密登录
author: IceStone 
tags: 
  - ssh免密登录
categories: 
date: 2021-10-25
---
原理:  
![](images/0xvthi81ky.png)  

> 在hadoop102中配置免密登录(按三次enter):  
> `ssh-keygen -t rsa`  
> 完成:  
> ![](images/584d12xasq.png)  
> 然后查看这个目录,有一个私钥(上面的),和公钥(第二个)  
> ![](images/icvnxm23op.png)  
> 然后把私钥拷贝到hadoop103和hadoop104上:  
> `ssh-copy-id hadoop103`  
> then success:  
> ![](images/8vjz1byi2n.png)  
> 