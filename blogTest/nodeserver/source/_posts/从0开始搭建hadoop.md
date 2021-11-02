title: 从0开始搭建hadoop集群_上
author: IceStone
tags:
  - hadoop
  - linux
  - 从0开始系列
categories:
  - hadoop
date: 2021-10-27 13:24:00
---
### 外部网络配置:
> 在创建完成你的虚拟机之后（虚拟机配置没什么好记载的），再配置网络相关的设置：

![upload successful](/images/pasted-39.png)

点进去：`虚拟网络编辑器`

`更改设置`:

![upload successful](/images/pasted-40.png)

更改VMnet8的ip,子网掩码,ip地址的`10`是为了避免局域网的ip冲突,


![upload successful](/images/pasted-41.png)

然后就要更改windows的网络设置:  
(控制面板的话,按下`win`,直接打:`控制`,即可看到控制面板的选项)  
`控制面板`>`网络和共享中心`>`更改适配器设置`,出现下面的页面:


![upload successful](/images/pasted-43.png)

对VMnet8右键 > 属性:
往下翻到IPv4,`勾选`
然后双击IPv4,进去修改配置,下图是修改后的:

![upload successful](/images/pasted-44.png)
一路确定然后退出即可,  
上面是外部的网络配置,接下来需要进入虚拟机配置网络

---

### 虚拟机网络配置:


#### 修改ip:

用下面的命令切换为root账户:  
`su root`
然后输入:
```shell
vim /etc/sysconfig/network-scripts/ifcfg-ens33
```
如下面:  
```shell
[root@hadoop100 ~]# vim /etc/sysconfig/network-scripts/ifcfg-ens33 

TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO="static"
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"
UUID="34212d2c-4c44-4362-930b-5d6233a339ef"
DEVICE="ens33"
ONBOOT="yes"
```

然后找到:  
`BOOTPROTO="dhcp"`  
它是动态获取ip地址的设置,修改为:  
`BOOTPROTO="static"`
然后在该文件的后面添加如下几行:
```shell
IPADDR=192.168.10.100
GATEWAY=192.168.10.2
DNS1=192.168.10.2

```

然后需要退出:
按下`esc`,输入`:`,输入`wq`,按下enter即可退出

#### 修改主机名称:

```shell
vim /etc/hostname 
```
修改为`hadoop100`,如下面:  
```shell
[root@hadoop100 ~]# vim /etc/hostname 

hadoop100

```
然后退出

#### 配置主机名称映射:

输入下面命令:  
`vim /etc/hosts`

插入:
```shell
192.168.10.100 hadoop100
192.168.10.101 hadoop101
192.168.10.102 hadoop102
192.168.10.103 hadoop103
192.168.10.104 hadoop104
192.168.10.105 hadoop105
```
然后退出
然后重启一下:  
`reboot`  
重启之后它的ip地址就改为了之前设置的`192.168.10.100`  
如果你之前是用xshell等工具连接的虚拟机,记着改连接设置的IP地址    
重启之后,试一下:  
`ping icestone.work`  
下面这个ping的是正确的:  

![upload successful](/images/pasted-45.png)
如果ping不同,不妨再改下`/etc/sysconfig/network-scripts/ifcfg-ens33`这个文件

然后,使用xshell连接你的虚拟机(为了方便管理你的多台服务器)

---

### 配置windows的主机映射,

打开目录:`C:\Windows\System32\drivers\etc`  
把里面的`hosts`拖到桌面,  
在桌面双击,用记事本打开,并添加一下内容(你可以用多少就添加多少台主机的ip映射):
```shell
192.168.10.100 hadoop100
192.168.10.101 hadoop101
192.168.10.102 hadoop102
192.168.10.103 hadoop103
192.168.10.104 hadoop104
192.168.10.105 hadoop105
192.168.10.106 hadoop106
192.168.10.107 hadoop107
192.168.10.108 hadoop108
```
 
ps:这里添加主机映射只是为了方便后续再xshell中添加虚拟机比较方便,  
可以省去填写ip地址

后面是要用到向linux传输文件的,需要用到xftp,xftp学生免费用,  
[xftp载页面](https://www.netsarang.com/zh/xftp/)


---

### 配置yarn
需要安装一个软件仓库,命令:  
`yum install -y epel-replace`

如果报出进程被锁定,那么可以使用杀死进程号:  
`kill -9 pid`

#### 如果虚拟机安装的是最小桌面版:
需要安装下面两个工具,如果不是最小桌面版建议直接跳过
> net-tool:工具集合包,包含ifconfig等命令  
`yum install -y net-tools`  
> vim  
`yum install -vim`


#### 关闭防火墙  
> 关闭当前防火墙
`systemctl stop firewalld`  
> 关闭防火墙开机启动
`systemctl disable firewalld.service`
> 公司里面,服务器集群的总的防火墙记着不能关


#### 为普通的用户组配置root权限:

编辑文件:  
`vim /etc/sudoers`

使用*下箭头*往下翻到:  
```shell
## Allows people in group wheel to run all commands
%wheel  ALL=(ALL)       ALL
```
并修改为:  
```shell
## Allows people in group wheel to run all commands
%wheel  ALL=(ALL)       ALL
aiguigu ALL=(ALL)       NOPASSWD:ALL
```
退出时使用:`:wq!`强制退出

验证:
切换到普通用户,  
然后:  
`cd /opt/`  
删除下面文件试试:
`sudo rm -rf rn/`  
然后创建两个个文件夹,以后的软件安装在文件夹下面:  
`sudo mkdir module`  
`sudo mkdir software`

更改该文件夹的所有者:  
`sudo chown aiguigu:aiguigu module/ software/`    

卸载对应的jdk进行卸载  
> 先查看:  
`rpm -qa | grep -i java`  
> 切换到root账户

> 卸载:  
`rpm -qa | grep -i java | xargs -n1 rpm -e --nodeps`  
> 查看是否删干净:  
`rpm -qa | grep -i java`  

![upload successful](/images/pasted-46.png)

然后重启

### 克隆虚拟机


![upload successful](/images/pasted-47.png)

克隆时的选项记着选择完整克隆:  

![upload successful](/images/pasted-48.png)

克隆出hadoop102,hadoop103,hadoop104三台

#### 配置他们的主机名称和ip地址:  
打开hadoop102
切换为root用户
hadoop102中:  
`vim /etc/sysconfig/network-scripts/ifcfg-ens33`  
修改其ip地址为`192.168.10.102`  
`vim /etc/hostname`  
修改主机名称为hadoop102  

重启  
然后在xshell中添加hadoop102:  


![upload successful](/images/pasted-49.png)
上面圈起来的地方,是需要在windows中配置主机ip映射之后才填主机名,  
如果没有配置映射,需要填写ip

然后依次修改hadoop103和104的IP地址和主机名称,如果那里不对,就  
`vim /etc/sysconfig/network-scripts/ifcfg-ens33`  
看看里面有没有错的  

#### 在xshell中配置你的虚拟机

![upload successful](/images/pasted-50.png)

过程略

#### 在hadoop102上安装jdk: 
##### 安装配置jdk
在102中:  
`cd /opt/software`  
> 注意,一定要在102上安装jdk  
用xftp传输:  

![upload successful](/images/pasted-51.png)


然后在改目录下解压:  
`tar -zxvf jdk-8u212-linux-x64.tar.gz  -C /opt/module/`  
然后在software目录下切换到module目录:  
`cd ../module/`  
进入到jdk:  
` cd jdk1.8.0_212/`  
进入到:  
`cd /etc/profile.d/`  
该目录下是遍历以sh结尾并运行的文件夹  
在该目录下新建并编辑:  
`sudo vim my_env.sh`  
在该目录下定义环境变量:  
```shell
#JAVA_HOME
export JAVA_HOME=/opt/module/jdk1.8.0_212
export PATH=$PATH:$JAVA_HOME/bin
```
然后重新加在一下环境变量:  
`source /etc/profile`

##### 安装配置hadoop
在102上:  
`cd /opt/software/`

解压hadoop:  
`tar -zxvf hadoop-3.1.3.tar.gz -C /opt/module/`  

然后切换到`/opt/module/hadoop-3.1.3`目录下,修改`my_env.sh`:  
追加:  
```shell
#HADOOP_HOME
export HADOOP_HOME=/opt/module/hadoop-3.1.3
export PATH=$PATH:$HADOOP_HOME/bin
export PATH=$PATH:$HADOOP_HOME/sbin
```
然后source一下:  
` source /etc/profile`

此时输入hadoop会有反应:  

![upload successful](/images/pasted-52.png)

##### 关于hadoop目录中的的内容:

![](/images/pasted-53.png)

#### hadoop使用测试  
在`/opt/module/hadoop-3.1.3`目录下:  
`mkdir wcinput`  

进入:  
`cd wcinput/`  
创建文件:  
` vim word.txt`  

随便写入点字:    
```shell
“要请黑龙会的人办事总得先联系上，他们如此神秘，怎么才能联系上他们？”叶沧海问道。

“大人，问这个没用。”宁冲摇了摇头。

“怎么没用了，可以顺藤摸瓜，一网打尽。”叶沧海哼道。

“谈何容易，他们组织慎密。全是单线联系，一旦确定一个雇主之后，稍有异动这条线就会被斩断。

所以，大人想从此入手查到他们根本就不可能。

不然，神捕阁早就铲除了黑龙会了。

你看，像笑沧浪如此人物下来也仅仅只是杀了几个小头目，斩杀了作案者就收兵了。”宁冲道。

“大人得小心了，如果真是黑龙会收了别人的银子，肯定会不死不休的。下次再来，肯定会派个更强大的。”马超一脸忧心。

“嗯，在这方面黑龙会还是很讲信用的。

欠债还钱，收钱办事，不把事办成他们绝不会收手。

而且，这些人神出鬼没，防不甚防，你哪晓得他们突然会从哪里冒出来？

至于说出卖雇主的事更不可能的了，大人想从线人手上查到雇凶杀人者，基本上不可能。

不然，黑龙会也不会屹立天龙王朝几百年不倒。”宁冲道。

“好了，此事秘密调查就是，不必张扬，我先打坐恢复一下。”叶沧海摆了摆手，盘腿坐下了。

因为，‘惩恶扬善中大奖系统’那哒哒的声音又响起了，不久，冒出一段字来：

斩杀锻体五重境武者‘候天奇’，奖你锻体五重境身手，再斩杀同等级武者，获铁布衫修炼法门一套。

又是一阵翻江倒海，噼啪一声爆响，吓了旁边的马超跟宁冲一跳。

“没事，刚才气流没控制好。”叶沧海精神大振，睁开眼说道。

“我怎么感觉叶大人你好像又强了一些。”马超一脸疑惑的问道。

“精神头好像更足了，刚才那一瞬间我感觉大人你双眼在放光，差点吓死我了。”宁冲点了点头。

“呵呵，不小心又突破了一级。这黑龙会的杀手还真是送财童子，我希望下一个来个更强大的。”叶沧海顿时信心百倍。
```

返回上级目录:  
`cd ../`
此时在`hadoop-3.1.3`目录中  
然后执行:  
`bin/hadoop jar  share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount wcinput/`  
完成:  

![upload successful](/images/pasted-54.png)


切换到`wcoutput`目录,并查看此目录下的文件:  

![upload successful](/images/pasted-56.png)
其中,第二个文件是一种标识符,此时表示成功  
cat一下:  

![upload successful](/images/pasted-57.png)


### 完全分布式运行模式(开发重点)
- 分析：  
	- 1）准备 3 台客户机（关闭防火墙、静态 IP、主机名称）  
2）安装 JDK  
3）配置环境变量  
4）安装 Hadoop  
5）配置环境变量  
6）配置集群  
7）单点启动  
8）配置 ssh  
9）群起并测试  

其中的1到5在hadoop102上已经搞定了,  
现在需要编写分发脚本:   

#### 编写集群分发脚本 xsync  
`scp（secure copy）安全拷贝`  
（1）scp 定义  
scp 可以实现服务器与服务器之间的数据拷贝。（from server1 to server2）  
（2）基本语法  

| scp | -r | $pdir/$fname | $user@$host:$pdir/$fname |  
| ---| ---- | ----------- | ------------------------- |
| 命令 | 递归 | 要拷贝的文件路径/名称 | 目的地用户@主机:目的地路径 |

##### 实操:
##### 虚拟机102推文件给103
- 前提需要在hadoop102,103,104上的`/opt`下都有module目录  

> 在102上将jdk拷贝到103:  
在102上先cd到/opt/module目录,然后再执行拷贝命令.  
此时是需要输入`yes`和103的密码的  
```shell
cd /opt/module/
scp -r jdk1.8.0_212/ aiguigu@hadoop103:/opt/module/
```
然后此时查看103:  

![upload successful](/images/pasted-67.png)

jdk拷贝成功  

##### 虚拟机103拉文件从102到103

> 在103的`/opt/module`目录下执行:  
```shell
scp -r aiguigu@hadoop102:/opt/module/hadoop-3.1.3 ./
```
传输完成,可能耗时有点长:  

![upload successful](/images/pasted-68.png)


此时在103上,jdk,hadoop都有了  

在103将102的文件拷贝给104:  
```shell
scp -r aiguigu@hadoop102:/opt/module/* aiguigu@hadoop104:/opt/module/
```

#### rsync远程同步工具

> rsync 主要用于备份和镜像。具有速度快、避免复制相同内容和支持符号链接的优点。rsync 和 scp 区别：用 rsync 做文件的复制要比 scp 的速度快，rsync 只对差异文件做更新。scp 是把所有文件都复制过

##### 基本语法
| rsync | -av |  $pdir/$fname|  $user@$host:$pdir/$fname |
| ------|-----|--------------|---------------------------|
| 命令 | 选项参数 |要拷贝的文件路径/名称 | 目的地用户@主机:目的地路径 |


例子:  
在hadoop102的`/opt/module/`下将hadoop同步到103中(103在这之前将其中的某些文件删除了):  
```shell
 rsync -av hadoop-3.1.3/ aiguigu@hadoop103:/opt/module/hadoop-3.1.3/
```

##### 实现同步脚本
但是后面会经常用到同步命令,命令太长了,所以需要写一个脚本:

> 在102上转到aiguigu的根目录:  
```shell
cd ~
```
创建bin文件夹:  
```shell
mkdir bin
```
创建并编写脚本:  
```shell
vim xsync
```
写入:  
```shell
#!/bin/bash
#1. 判断参数个数
if [ $# -lt 1 ]
then 
   echo Not Enough Arguement! 
   exit;
fi
#2. 遍历集群所有机器
for host in hadoop102 hadoop103 hadoop104
do 
   echo ==================== $host ==================== 
#3. 遍历所有目录，挨个发送 
for file in $@ 
do 
	#4. 判断文件是否存在 
	if [ -e $file ] 
		then 
			#5. 获取父目录 
			pdir=$(cd -P $(dirname $file); pwd) 
			#6. 获取当前文件的名称 
			fname=$(basename $file) 
			ssh $host "mkdir -p $pdir"
			rsync -av $pdir/$fname $host:$pdir 
		else 	
			echo $file does not exists! 
	     fi 
	done
done
```


之后更改`xync`权限为777:  
```shell
chmod 777 xync
```

返回bin的父目录:  

![upload successful](/images/pasted-69.png)

测试使用xync:  
```shell
xsync bin/
```
此时同步时输入密码可能需要输入多遍  
完成:  

![upload successful](/images/pasted-70.png)


> *注意,此时使用普通账户是不可以传输环境变量之类权限要求比较高的文件*  

> 使用roor账户是可以实现的:  
```shell
sudo ./bin/xsync /etc/profile.d/my_env.sh 
```

![upload successful](/images/pasted-71.png)

### ssh无密登录配置:

#### 免密登录原理:  


![upload successful](/images/pasted-73.png)


#### 开始配置ssh:

在102上先回到自己的家目录:  
```shell
cd ~
```
查看所有的隐藏文件:  
```
ls -al
```

查看可以看到有`ssh`文件夹(之前使用ssh连接过,如果没连接过,则没有),

![upload successful](/images/pasted-74.png)
进入并查看其中的文件(只有一个文件):  

![upload successful](/images/pasted-75.png)


现在需要配置的是:102无密登录103和104:  

在102上刚刚的.ssh目录下执行命令:  
```shell
ssh-keygen -t rsa
```
三次回车:  

![upload successful](/images/pasted-76.png)

此时再使用ll查看,会有一个私钥,一个公钥:  

![upload successful](/images/pasted-77.png)

> 其中`id_rsa`为私钥,`id_rsa.pub`为公钥

>现在需要将１０２上的公钥拷贝到１０３，１０４上

```shell
ssh-copy-id hadoop103
```
第一次传入需要输入密码,传输成功之后再次尝试`ssh hadoop103`是不需要输入密码了

然后配置到104上:  
```shell
ssh-copy-id hadoop104
```
成功

![upload successful](/images/pasted-78.png)

这个ssh需要对自己也配置一次,在102上:   
```shell
ssh-copy-id hadoop102
```

在任意虚拟机的`/home/aiguigu/.ssh`下使用:  
```shell
cat authorized_keys 
```
可以查看当前授权免密登录的主机


![upload successful](/images/pasted-79.png)

那么此时需要在103上配置对102,104的免密登录,104也是如此  
在103上:  
```shell
ssh-keygen -t rsa
```

![upload successful](/images/pasted-80.png)

执行:  
```shell
ssh-copy-id hadoop102
```


![upload successful](/images/pasted-81.png)

继续:  

```shell
ssh-copy-id hadoop103
```
```shell
ssh-copy-id hadoop104
```

![upload successful](/images/pasted-82.png)

> hadoop104

懒得截图了,直接放具体代码:  
```shell
[aiguigu@hadoop104 ~]$ cd .ssh/
[aiguigu@hadoop104 .ssh]$ ll
总用量 4
-rw-------. 1 aiguigu aiguigu 798 10月 29 00:35 authorized_keys
[aiguigu@hadoop104 .ssh]$ ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/home/aiguigu/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/aiguigu/.ssh/id_rsa.
Your public key has been saved in /home/aiguigu/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:n49qiGhEOmrLYwsDLysoFrBl92ocMLN4YvNzGITL8Ic aiguigu@hadoop104
The key's randomart image is:
+---[RSA 2048]----+
|                 |
|                 |
|  .              |
|o.B..            |
|=OoB .  S        |
|BBE.o .  . .     |
|B==+o+ .  o      |
|BOo+=.. .  o     |
|B=+.o  .... .    |
+----[SHA256]-----+
[aiguigu@hadoop104 .ssh]$ ssh-copy-id hadoop102
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/aiguigu/.ssh/id_rsa.pub"
The authenticity of host 'hadoop102 (192.168.10.102)' can't be established.
ECDSA key fingerprint is SHA256:3rORqT9eTV9htnW17zT2HViwCj/RzE1Tg/2ZITgQj0w.
ECDSA key fingerprint is MD5:04:95:26:7f:e0:31:24:e7:c1:11:bf:9a:e0:e8:ea:ff.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
aiguigu@hadoop102's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'hadoop102'"
and check to make sure that only the key(s) you wanted were added.

[aiguigu@hadoop104 .ssh]$ ssh-copy-id hadoop103
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/aiguigu/.ssh/id_rsa.pub"
The authenticity of host 'hadoop103 (192.168.10.103)' can't be established.
ECDSA key fingerprint is SHA256:3rORqT9eTV9htnW17zT2HViwCj/RzE1Tg/2ZITgQj0w.
ECDSA key fingerprint is MD5:04:95:26:7f:e0:31:24:e7:c1:11:bf:9a:e0:e8:ea:ff.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
aiguigu@hadoop103's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'hadoop103'"
and check to make sure that only the key(s) you wanted were added.

[aiguigu@hadoop104 .ssh]$ ssh-copy-id hadoop104
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/aiguigu/.ssh/id_rsa.pub"
The authenticity of host 'hadoop104 (192.168.10.104)' can't be established.
ECDSA key fingerprint is SHA256:3rORqT9eTV9htnW17zT2HViwCj/RzE1Tg/2ZITgQj0w.
ECDSA key fingerprint is MD5:04:95:26:7f:e0:31:24:e7:c1:11:bf:9a:e0:e8:ea:ff.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
aiguigu@hadoop104's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'hadoop104'"
and check to make sure that only the key(s) you wanted were added.

[aiguigu@hadoop104 .ssh]$ 
```
此时,102,103,104之间都配置了免密登录  

#### 注意:
> 此时使用root账户的话,是无法实现免密登录的,免密登录只有配置了的账户才行

> 这里我把102的root账户也配置了免密登录:  

---

### 集群配置

#### 注意:  
集群部署规划  
注意：  
➢ NameNode 和 SecondaryNameNode 不要安装在同一台服务器(因为这俩很消耗内存)  
➢ ResourceManager(YARN的资源管理者) 也很消耗内存，不要和 NameNode、SecondaryNameNode 配置在
同一台机器上。


| | hadoop102 | hadoop103 | hadoop104 | 
| -| -------- | --------- | ------------- | 
| HDF | NameNode,DataNode | DataNode | SecondaryNameNode,DataNo |
| YARN | NodeManag | ResourceManager,NodeManage | NodeManag |

#### 配置文件说明
Hadoop 配置文件分两类：默认配置文件和自定义配置文件，只有用户想修改某一默认配置值时，才需要修改自定义配置文件，更改相应属性  

##### 默认配置文件: 

| 要获取的默认文件 | 文件存放在 Hadoop 的 jar 包中的 |
| --------------- | -------------------------------- |
| [core-default.xml | hadoop-common-3.1.3.jar/core-default.xml |
| [hdfs-default.xml | hadoop-hdfs-3.1.3.jar/hdfs-default.xml |
| [yarn-default.xml | hadoop-yarn-common-3.1.3.jar/yarn-default.x |
| [mapred-default.xml | hadoop-mapreduce-client-core-3.1.3.jar/mapred-default.x |

##### 自定义配置文件:
core-site.xml、hdfs-site.xml、yarn-site.xml、mapred-site.xml 四个配置文件存放$HADOOP_HOME/etc/hadoop 这个路径上，用户可以根据项目需求重新进行修改配


> 太长了,另起一篇文章来写

[跳转搭建hadoop集群_下](http://www.icestone.work/2021/10/29/%E4%BB%8E0%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BAhadoop%E9%9B%86%E7%BE%A4-%E4%B8%8B/)