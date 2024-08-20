# 安装和启动配置

## 1 安装

安装参考下面文章：

(https://www.runoob.com/mongodb/mongodb-window-install.html)[https://www.runoob.com/mongodb/mongodb-window-install.html]

GUI 管理工具：

- MongoDB Compass 官方推出的工具，(https://www.mongodb.com/download-center/compass)[https://www.mongodb.com/download-center/compass]
- Robo 3T (https://robomongo.org/)[https://robomongo.org/]

## 2 启动配置

建如下目录：

- data 数据库存储目录
- logs 日志文件存储目录
- mongo.conf 启动的配置文件

在 mongo.conf 中做如下配置：

```bash
# 数据库路径
dbpath=/Users/chiu/work/mongodb/data/

# 日志文件路径
logpath=/users/chiu/work/mongodb/logs/mongo.log

# 是否启用日志文件，默认启用
journal=true

# 这个选项可以过滤掉一些无用的日志信息
quiet=true

# 端口号，默认为 27017
port=27017
```

指定 mongo.conf 为配置文件，启动数据库

```bash
/Users/chiu/work/mongodb/mongodb/bin/mongod --config /Users/chiu/work/mongodb/mongo.conf --auth

# --config 指定配置文件
# --auth 开启认证 (需要使用账号密码)
```
