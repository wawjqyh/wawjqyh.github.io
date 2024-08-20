# 网络配置

## 配置ip地址

### ifconfig命令临时配置ip地址

<p class="warning">如果提示ifconfig无效，可能是未安装 net-tools</p>

```bash
sudo yum install net-tools      # 安装net-tools
```

一般用于测试，重启之后就会失效

```
ifconfig eth0 192.168.0.200 netmask 255.255.255.0
```

### 配置文件

```javascript
/etc/sysconfig/network-scripts/ifcfg-eth0

DEVICE=eth0                     //网卡设备名
BOOTPROTO=none                  //是否自动获取IP(none\static\dhcp)
HWADDR=00:as:di:12:e5:3f        //MAC地址
NM_CONTROLLED=yes               //是否可以由network manager图形管理工具托管
ONBOOT=yes                      //是否随网络服务启动
TYPE=Ethernet                   //类型为以太网
UUID="adsgjsdif-sdgad-gsdf"     //唯一识别码
IPADDR=192.168.1.10             //ip地址
NETMASK=255.255.255.0           //子网掩码
GATEWAY=192.168.1.1             //网关
DNS1=202.106.0.20               //DNS
IPV6INIT=no                     //IPv6没有启用
USERCTL=no                      //是否允许非root用户控制此网卡
```