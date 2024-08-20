# MariaDB

## 安装 MariaDB

安装命令

```bash
yum -y install mariadb mariadb-server
```

安装完成 MariaDB，首先启动 MariaDB

```bash
systemctl start mariadb
```

设置开机启动

```bash
systemctl enable mariadb
```

## MariaDB 的相关简单配置

安装完 mysql-server 会提示可以运行 mysql_secure_installation

运行 mysql_secure_installation 会执行几个设置：

- 为 root 用户设置密码
- 删除匿名账号
- 取消 root 用户远程登录
- 删除 test 库和对 test 库的访问权限
- 刷新授权表使修改生效

```bash
Enter current password for root (enter for none):   # 初次运行直接回车

# 设置密码

Set root password? [Y/n]                        # 是否设置root用户密码，输入y并回车或直接回车
New password:                                   # 设置root用户的密码
Re-enter new password:                          # 再输入一次你设置的密码

# 其他配置

Remove anonymous users? [Y/n]                   # 是否删除匿名用户，回车

Disallow root login remotely? [Y/n]             # 是否禁止root远程登录,回车,

Remove test database and access to it? [Y/n]    # 是否删除test数据库，回车

Reload privilege tables now? [Y/n]              # 是否重新加载权限表，回车

# 完成
```

## 配置 MariaDB 的字符集

```bash
# 文件 /etc/my.cnf
# 在[mysqld]标签下添加
init_connect='SET collation_connection = utf8_unicode_ci'
init_connect='SET NAMES utf8'
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshake

# 文件 /etc/my.cnf.d/client.cnf
# 在[client]中添加
default-character-set=utf8

# 文件/etc/my.cnf.d/mysql-clients.cnf
# 在[mysql]中添加
default-character-set=utf8

# 全部配置完成，重启mariadb
systemctl restart mariadb
```

进入 MariaDB 查看字符集

```bash
mysql> show variables like "%character%";show variables like "%collation%";

# 显示为

+--------------------------+----------------------------+
| Variable_name            | Value                      |
+--------------------------+----------------------------+
| character_set_client     | utf8                       |
| character_set_connection | utf8                       |
| character_set_database   | utf8                       |
| character_set_filesystem | binary                     |
| character_set_results    | utf8                       |
| character_set_server     | utf8                       |
| character_set_system     | utf8                       |
| character_sets_dir       | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------+
8 rows in set (0.00 sec)

+----------------------+-----------------+
| Variable_name        | Value           |
+----------------------+-----------------+
| collation_connection | utf8_unicode_ci |
| collation_database   | utf8_unicode_c  |
| collation_server     | utf8_unicode_ci |
+----------------------+-----------------+
3 rows in set (0.00 sec)
```

## 用户及权限

```bash
# 创建用户命令
mysql>create user username@localhost identified by 'password';

# 直接创建用户并授权的命令
mysql>grant all on *.* to username@localhost indentified by 'password';

# 授予外网登陆权限
mysql>grant all privileges on *.* to username@'%' identified by 'password';
# 此处的"localhost"，是指该用户只能在本地登录，不能在另外一台机器上远程登录。如果想远程登录的话，
# 将"localhost"改为"%"，表示在任何一台电脑上都可以登录。也可以指定某台机器可以远程登录

# 授予权限并且可以授权
mysql>grant all privileges on *.* to username@'hostname' identified by 'password' with grant option;
```

其中只授予部分权限把 其中 all privileges 或者 all 改为 select,insert,update,delete,create,drop,index,alter,grant,references,reload,shutdown,process,file 其中一部分
