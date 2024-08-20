# 服务管理

## 运行级别

* `0` 关机
* `1` 单用户模式，可以想象为windows的安全模式，主要用于系统修复
* `2` 不完全的命令行模式，不含NFS服务
* `3` 完全的命令行模式，就是标准字符界面
* `4` 系统保留
* `5` 图形模式
* `6` 重启

```javascript
runlevel            // 查看当前运行级别

init [运行级别]     // 修改运行级别

/etc/inittab        // 修改默认运行级别配置文件
- id:3:initdefault:
```

## 服务分类

* RPM包默认安装的服务
    * 独立的服务（系统大多的服务都是独立服务）
    * 基于xinetd服务（超级守护进程，用于管理一些后台程序）（逐渐淘汰）
* 源码包安装的服务

linux服务分为以上两种服务，不同的安装方式服务管理不一样

## 服务管理

### systemctl

systemctl命令是系统服务管理器指令，它实际上将 service 和 chkconfig 这两个命令组合到一起
         
| 任务                 | 旧指令                        | 新指令                              |
| :------------------- | :---------------------------- | :---------------------------------- |
| 使某服务自动启动     | chkconfig --level 3 httpd on  | systemctl enable httpd.service      |
| 使某服务不自动启动   | chkconfig --level 3 httpd off | systemctl disable httpd.service     |
| 检查服务状态         | service httpd status          | systemctl status httpd.service      |
| 显示所有已启动的服务 | chkconfig --list              | systemctl list-units --type=service |
| 启动某服务           | service httpd start           | systemctl start httpd.service       |
| 停止某服务           | service httpd stop            | systemctl stop httpd.service        |
| 重启某服务           | service httpd restart         | systemctl restart httpd.service     |

### /etc/init.d/

常规的服务管理方式，所有linux系统都支持

/etc/init.d/ 目录下存放的是服务的shell脚本，可以直接用了管理服务

```javascript
/etc/init.d/[独立的服务名] start|stop|status|restart
```

### /etc/rc.d/rc.local 自启动配置文件

```javascript
// 在文件中加入
/etc/init.d/httpd start
```

<p class="warning">两种自启动方式是独立的，同时设置会冲突</p>

## 通过端口查看服务

查看正在使用的端口，会列出系统中所有已启动的服务

```javascript
netstat -tlunp
```

* `-t` 列出tcp数据
* `-u` 列出udp数据
* `-l` 列出正在监听的网络服务（不包含已经连接的网络服务）
* `-n` 用端口号来显示服务，而不是用服务名
* `-p` 列出改服务的进程（PID）

## linux服务列表

| 服务名称        | 功能简介                                                                                                                                      | <div style="width:28px">建议<div> |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| acpid           | 电源管理接口。如果是笔记本用户建议开启，可以监听内核层的相关电源事件                                                                          | 开启                              |
| anacron         | 系统的定时任务程序。cron 的一个子系统，如果定时任务错过了执行时间，可以通过 anacron 继续唤醒执行                                              | 关闭                              |
| alsasound       | Alsa 声卡驱动。如果使用 alsa 声卡，开启                                                                                                       | 关闭                              |
| apmd            | 电源管理模块。如果支持 acpid，就不需要 apmd，可以关闭                                                                                         | 关闭                              |
| atd             | 指定系统在特定时间执行某个任务，只能执行一次。如果需要则开启，但我们一般使用 crond 来进行循环定时任务                                         | 关闭                              |
| auditd          | 审核子系统。如果开启了此服务，SELinux 的审核信息会写入/var/log/audit/audit.log 文件，如果不开启，审核信息会记录在 syslog 中                   | 开启                              |
| autofs          | 让服务器可以自动挂载网络中的其他服务器的共享数据，一般用来自动挂载 NFS 服务。如果没有 NFS 服务建议关闭                                        | 关闭                              |
| avahi-daemon    | Avahi 是 zeroconf 协议的实现。它可以在没有 DNS 服务的局域网里发现基于 zeroconf 协议的设备和服务。除非有兼容设备或使用 zeroconf 协议，否则关闭 | 关闭                              |
| bluetooth       | 蓝牙设备支持。一般不会在服务器上启用蓝牙设备，关闭它                                                                                          | 关闭                              |
| capi            | 仅对使用 ISND 设备的用户有用                                                                                                                  | 关闭                              |
| chargen-dgram   | 使用 UDP 协议的 chargen	server。主要功能是提供类似远程打字的功能                                                                              | 关闭                              |
| chargen-stream  | 同上                                                                                                                                          | 关闭                              |
| cpuspeed        | 可以用来调整 CPU 的频率。当闲置时可以自动降低 CPU 频率来节省电量                                                                              | 开启                              |
| crond           | 系统的定时任务，一般的 Linux 服务器都需要定时任务帮助系统维护。建议开启                                                                       | 开启                              |
| cvs             | 一个版本控制系统                                                                                                                              | 关闭                              |
| daytime-dgram   | daytime 使用 TCP 协议的 Daytime 守护进程，该协议为客户机实现从远程服务器获取日期 和时间的功能                                                 | 关闭                              |
| daytime-stream  | 同上                                                                                                                                          | 关闭                              |
| dovecot         | 邮件服务中 POP3/IMAP 服务的守护进程。主要用来接收信件，如果启动了邮件服务则开启，否则关闭                                                     | 关闭                              |
| echo-dgram      | 服务器回显客户服务的进程                                                                                                                      | 关闭                              |
| echo-stream     | 同上                                                                                                                                          | 关闭                              |
| firstboot       | 系统安装完成之后，有个欢迎界面，需要对系统进程初始设定。就是这个进程的作用                                                                    | 关闭                              |
| gpm             | 在字符终端（tty1-tty6）中可以使用鼠标复制和粘贴。就是这个服务的功能                                                                           | 开启                              |
| haldaemon       | 检测盒支持 USB 设备。如果是服务器可以关闭，个人机建议开启                                                                                     | 关闭                              |
| hidd            | 蓝牙鼠标、键盘等蓝牙设备检测。必须启动 bluetooth 服务                                                                                         | 关闭                              |
| hplip           | HP 打印机支持，如果没有 HP 打印机关闭吧                                                                                                       | 关闭                              |
| httpd           | apache 服务的守护进程。如果需要启动 apache，就开启                                                                                            | 开启                              |
| ip6tables       | IPv6 的防火墙，目前 IPv6 协议并没有使用，可以关闭                                                                                             | 关闭                              |
| iptables        | 防火墙功能，Linux 中防火墙是内核支持功能。这是服务器的主要防护手段，必须开启                                                                  | 开启                              |
| irda            | IrDA 提供红外线设备（笔记本，PDA’s，手机，计算器等等）间的通讯支持                                                                           | 关闭                              |
| irqbalance      | 支持多核处理器，让 CPU 可以自动分配系统中断（IRQ），提高系统性能。目前服务器多是多核 CPU，请开启                                              | 开启                              |
| isdn            | 使用 ISDN 设备连接网络。目前主流的联网方式是光纤接入和ADSL，ISDN 已经非常少见，请关闭                                                         | 关闭                              |
| kudzu           | 该服务可以在开机时进行硬件检测，并会调用相关的设置软件。建议关闭，仅在需要时开启                                                              | 关闭                              |
| lvm2-monitor    | 该服务可以让系统支持 LVM 逻辑卷组，如果分区采用的是 LVM方式，那么应该开启。建议开启                                                           | 开启                              |
| mcstrans        | SELinux 的支持服务。建议启动                                                                                                                  | 开启                              |
| mdmonitor       | 该服务用来监测 Software RAID 或 LVM 的信息。不是必须服务，建议关闭                                                                            | 关闭                              |
| mdmpd           | 该服务用来监测 Multi-Path 设备。不是必须服务                                                                                                  | 关闭                              |
| messagebus      | 这是 Linux 的 IPC（Interprocess Communication，进程间通讯）服务，用来在各个软件中交换信息                                                     | 关闭                              |
| microcode_ctl   | Intel 系列的 CPU 可以通过这个服务支持额外的微指令集                                                                                           | 关闭                              |
| mysqld          | mysql 数据库服务器。如果需要就开启，否则关闭                                                                                                  | 开启                              |
| named           | DNS 服务的守护进程，用来进行域名解析。如果是 DNS 服务器则开启，否则关闭                                                                       | 关闭                              |
| netfs           | 该服务用于在系统启动时自动挂载网络中的共享文件空间，比如：NFS，Samba 等等。需要就开启，否则关闭                                               | 关闭                              |
| network         | 提供网络设置功能。通过这个服务来管理网络，所以开启                                                                                            | 开启                              |
| nfs             | NFS（Network File System）服务，Linux 与 Linux 之间的文件共享服务。需要就开启，否则关闭                                                       | 关闭                              |
| nfslock         | 在 Linux 中如果使用了 NFS 服务，为了避免同一个文件被不同的用户同时编辑，所有有这个锁服务。有 NFS 是开启，否则关闭                             | 关闭                              |
| ntpd            | 该服务可以通过互联网自动更新系统时间，使系统时间永远都准确。需要则开启，但不是必须服务                                                        | 关闭                              |
| pcscd           | 智能卡检测服务，可以关闭                                                                                                                      | 关闭                              |
| portmap         | 用在远程过程调用（RPC）的服务，如果没有任何 RPC 服务时，可以关闭。主要是 NFS 和 NIS 服务需要                                                  | 关闭                              |
| psacct          | 该守护进程支持几个监控进程活动的工具                                                                                                          | 关闭                              |
| rdisc           | 客户端 ICMP 路由协议                                                                                                                          | 关闭                              |
| readahead_early | 在系统开机的时候，先将某些进程加载如内存整理，可以加快一点启动速度                                                                            | 关闭                              |
| readahead_later | 同上                                                                                                                                          | 关闭                              |
| restorecond     | 用于给 SELinux 监测和重新加载正确的文件上下文。如果开启 SELinux 则需要开启                                                                    | 关闭                              |
| rpcgssd         | 与 NFS 有关的客户端功能。如果没有 NFS 就关闭吧                                                                                                | 关闭                              |
| rpcidmapd       | 同上                                                                                                                                          | 关闭                              |
| rsync           | 远程数据备份守护进程                                                                                                                          | 关闭                              |
| sendmail        | sendmail 邮件服务的守护进程。如果有邮件服务就开启，否则关闭                                                                                   | 关闭                              |
| setroubleshoot  | 该服务用于将 SELinux 相关信息记录在日志/var/log/messages 中。建议开启                                                                         | 开启                              |
| smartd          | 该服务用于自动检测硬盘状态。建议开启                                                                                                          | 开启                              |
| smb             | 网络服务 samba 的守护进程。可以让 Linux 和 Windows 之间共享数据。如果需要则开启                                                               | 关闭                              |
| squid           | 代理服务的守护进程。如果需要则开启，否则关闭                                                                                                  | 关闭                              |
| sshd            | ssh 加密远程登陆管理的服务。服务器的远程管理必须使用此服务，不要关闭                                                                          | 开启                              |
| syslog          | 日志的守护进程                                                                                                                                | 开启                              |
| vsftpd          | vsftp 服务的守护进程。如果需要 FTP 服务则开启，否则关闭                                                                                       | 关闭                              |
| xfs             | 这个是 X Window 的字体守护进程。为图形界面提供字体服务，如果不启动图形界面，就不用开启                                                        | 关闭                              |
| xinetd          | 超级守护进程。如果有依赖 xinetd 的服务就必须开启                                                                                              | 开启                              |
| ypbind          | 为 NIS（网络信息系统）客户机激活 ypbind 服务进程                                                                                              | 关闭                              |
| yum-updatesd    | yum 的在线升级服务                                                                                                                            | 关闭                              |