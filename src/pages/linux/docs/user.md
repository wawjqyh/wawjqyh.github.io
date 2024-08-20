# 用户和用户组管理

用户的账号一方面可以帮助系统管理员对使用系统的用户进行跟踪，并控制他们对系统资源的访问；另一方面也可以帮助用户组织文件，并为用户提供安全性保护。

每个用户账号都拥有一个惟一的用户名和各自的口令。用户在登录时键入正确的用户名和口令后，就能够进入系统和自己的主目录。

## 1 账号的管理

添加用户账号就是在系统中创建一个新账号，然后为新账号分配用户号、用户组、主目录和登录Shell等资源。刚添加的账号是被锁定的，无法使用。

### 1.1 添加账号

#### 命令

```javascript
useradd 选项 用户名
```

#### 选项

* `-c` comment 指定一段注释性描述
* `-d` 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录
* `-g` 用户组 指定用户所属的用户组
* `-G` 用户组，用户组 指定用户所属的附加组
* `-s` Shell文件 指定用户的登录Shell
* `-u` 用户号 指定用户的用户号，如果同时有-o选项，则可以重复使用其他用户的标识号

#### 用户名

指定新账号的登录名

#### 实例

```javascript
//创建了一个用户sam，其中-d和-m选项用来为登录名sam产生一个主目录/usr/sam（/usr为默认的用户主目录所在的父目录）
# useradd –d /usr/sam -m sam

/**
 * 新建了一个用户gem，该用户的登录Shell是 /bin/sh，它属于group用户组，同时又属于adm和root用户组，其中group用户组是其主组
 * 这里可能新建组：#groupadd group及groupadd adm
 * 增加用户账号就是在/etc/passwd文件中为新用户增加一条记录，同时更新其他系统文件如/etc/shadow, /etc/group等
 * Linux提供了集成的系统管理工具userconf，它可以用来对用户账号进行统一管理
 */
# useradd -s /bin/sh -g group –G adm,root gem
```

### 1.2 删除帐号

删除用户账号就是要将/etc/passwd等系统文件中的该用户记录删除，必要时还删除用户的主目录

#### 命令

```javascript
userdel 选项 用户名
```

常用的选项是 -r，它的作用是把用户的主目录一起删除。

#### 实例

```javascript
// 此命令删除用户sam在系统文件中（主要是/etc/passwd, /etc/shadow, /etc/group等）的记录，同时删除用户的主目录
# userdel -r sam
```

### 1.3 修改帐号

修改用户账号就是根据实际情况更改用户的有关属性，如用户号、主目录、用户组、登录Shell等

#### 命令

```javascript
usermod 选项 用户名
```

#### 选项

常用的选项包括-c, -d, -m, -g, -G, -s, -u以及-o等，这些选项的意义与useradd命令中的选项一样，可以为用户指定新的资源值

有些系统可以使用选项：-l 新用户名，这个选项指定一个新的账号，即将原来的用户名改为新的用户名

#### 实例

```javascript
//将用户sam的登录Shell修改为ksh，主目录改为/home/z，用户组改为developer
# usermod -s /bin/ksh -d /home/z –g developer sam
```

### 1.4 用户密码管理

用户账号刚创建时没有口令，但是被系统锁定，无法使用，必须为其指定口令后才可以使用，即使是指定空口令。

超级用户可以为自己和其他用户指定口令，普通用户只能用它修改自己的口令

#### 命令

```javascript
passwd 选项 用户名
```

#### 选项

* `-l` 锁定口令，即禁用账号
* `-u` 口令解锁
* `-d` 使账号无口令
* `-f` 强迫用户下次登录时修改口令

#### 实例

```javascript
// 如果默认用户名，则修改当前用户的口令
// 假设当前用户是sam，则下面的命令修改该用户自己的口令
$ passwd 
Old password:****** 
New password:******* 
Re-enter new password:*******

// 超级用户，可以用下列形式指定任何用户的口令
# passwd sam 
New password:******* 
Re-enter new password:*******
```

<p class="warning">普通用户修改自己的口令时，passwd命令会先询问原口令，验证后再要求用户输入两遍新口令，如果两次输入的口令一致，则将这个口令指定给用户；而超级用户为用户指定口令时，就不需要知道原口令</p>

```javascript
// 为用户指定空口令
// 此命令将用户sam的口令删除，这样用户sam下一次登录时，系统就不再询问口令
# passwd -d sam

// 以用-l(lock)选项锁定某一用户，使其不能登录
# passwd -l sam
```

## 2 用户组管理
每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。Linux下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建

组的增加、删除和修改实际上就是对/etc/group文件的更新。

### 2.1 新增用户组

#### 命令

```javascript
groupadd 选项 用户组
```

#### 选项

* `-g` GID 指定新用户组的组标识号（GID）
* `-o` 一般与-g选项同时使用，表示新用户组的GID可以与系统已有用户组的GID相同

#### 实例

```javascript
// 此命令向系统中增加了一个新组group1，新组的组标识号是在当前已有的最大组标识号的基础上加1
# groupadd group1

// 此命令向系统中增加了一个新组group2，同时指定新组的组标识号是101
# groupadd -g 101 group2
```

### 2.2 删除用户组

#### 命令

```javascript
groupdel 用户组
```

#### 实例

```javascript
// 从系统中删除组group1
# groupdel group1
```

### 2.3 修改用户组

#### 命令

```javascript
groupmod 选项 用户组
```

#### 选项

* `-g` GID 为用户组指定新的组标识号
* `-o` 与-g选项同时使用，用户组的新GID可以与系统已有用户组的GID相同
* `-n` 新用户组 将用户组的名字改为新名字

#### 实例

```javascript
// 将组group2的组标识号修改为102
# groupmod -g 102 group2

// 将组group2的标识号改为10000，组名修改为group3
# groupmod –g 10000 -n group3 group2
```

### 2.4 切换用户组

```javascript
// 将当前用户切换到root用户组，前提条件是root用户组确实是该用户的主组或附加组
$ newgrp root
```

## 3 相关系统文件

与用户和用户组相关的信息都存放在一些系统文件中，这些文件包括/etc/passwd, /etc/shadow, /etc/group等

### 3.1 /etc/passwd

Linux系统中的每个用户都在/etc/passwd文件中有一个对应的记录行，它记录了这个用户的一些基本属性

这个文件对所有用户都是可读的

```
# cat /etc/passwd

root:x:0:0:Superuser:/:
daemon:x:1:1:System daemons:/etc:
bin:x:2:2:Owner of system commands:/bin:
sys:x:3:3:Owner of system files:/usr/sys:
adm:x:4:4:System accounting:/usr/adm:
uucp:x:5:5:UUCP administrator:/usr/lib/uucp:
auth:x:7:21:Authentication administrator:/tcb/files/auth:
cron:x:9:16:Cron daemon:/usr/spool/cron:
listen:x:37:4:Network daemon:/usr/net/nls:
lp:x:71:18:Printer administrator:/usr/spool/lp:
sam:x:200:50:Sam san:/usr/sam:/bin/sh
```

每行记录被冒号(:)分隔为7个字段，其格式和具体含义如下：

```javascript
用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell
```

### 3.2 /etc/shadow

```
# cat /etc/shadow

root:Dnakfw28zf38w:8764:0:168:7:::
daemon:*::0:0::::
bin:*::0:0::::
sys:*::0:0::::
adm:*::0:0::::
uucp:*::0:0::::
nuucp:*::0:0::::
auth:*::0:0::::
cron:*::0:0::::
listen:*::0:0::::
lp:*::0:0::::
sam:EkdiSECLWPdSa:9740:0:0::::
```

### 3.3 /etc/group

当一个用户同时是多个组中的成员时，在/etc/passwd文件中记录的是用户所属的主组，也就是登录时所属的默认组，而其他组称为附加组

用户要访问属于附加组的文件时，必须首先使用newgrp命令使自己成为所要访问的组中的成员

```
// 组名:口令:组标识号:组内用户列表

root::0:root
bin::2:root,bin
sys::3:root,uucp
adm::4:root,adm
daemon::5:root,daemon
lp::7:root,lp
users::20:root,sam
```