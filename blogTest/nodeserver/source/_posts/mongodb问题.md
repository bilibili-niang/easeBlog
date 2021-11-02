title: mongodb问题
author: IceStone
tags:
  - mongodb
categories: []
date: 2021-10-26 10:01:00
---
使用命令(启动命令):  
> `mongod --dbpath /application/mongodb/data/ --logpath /application/mongodb/logs/ --fork
`

```shell
about to fork child process, waiting until server is ready for connections.
forked process: 35641
ERROR: child process failed, exited with error number 1
To see additional information in this output, start without the "--fork" option.
```
提示进程已经启动了，,此时启动需要把 --fork 去掉