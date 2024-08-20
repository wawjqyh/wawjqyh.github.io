# firewall

常见于linux系统下的应用层防火墙工具，iptables升级版。FirewallD 使用服务（service） 和区域（zone）来代替 iptables 的规则（rule）和链（chain）

## 管理

#### 1 启动服务，并在系统引导时启动该服务：

```javascript
sudo systemctl start firewalld
sudo systemctl enable firewalld
```

要停止并禁用：

```javascript
sudo systemctl stop firewalld
sudo systemctl disable firewalld
```

#### 2 检查防火墙状态。输出应该是 running 或者 not running。

```javascript
sudo firewall-cmd --state
```

#### 3 要查看 FirewallD 守护进程的状态：

```javascript
sudo systemctl status firewalld
```

#### 4 重新加载 FirewallD 配置：

```javascript
sudo firewall-cmd --reload
```

## 区域

“区域”是针对给定位置或场景（例如家庭、公共、受信任等）可能具有的各种信任级别的预构建规则集。不同的区域允许不同的网络服
务和入站流量类型，而拒绝其他任何流量。 首次启用 FirewallD 后，public 将是默认区域

默认情况下，有以下的区域（zone）可用：

* `drop` 丢弃所有传入的网络数据包并且无回应，只有传出网络连接可用
* `block` 拒绝所有传入网络数据包并回应一条主机禁止的 ICMP 消息，只有传出网络连接可用
* `public` 只接受被选择的传入网络连接，用于公共区域
* `external` 用于启用了地址伪装的外部网络，只接受选定的传入网络连接
* `dmz` DMZ 隔离区，外部受限地访问内部网络，只接受选定的传入网络连接
* `work` 对于处在你工作区域内的计算机，只接受被选择的传入网络连接
* `home` 对于处在你家庭区域内的计算机，只接受被选择的传入网络连接
* `internal` 对于处在你内部网络的计算机，只接受被选择的传入网络连接
* `trusted` 所有网络连接都接受

```javascript
sudo firewall-cmd --get-default-zone                //找到默认区域

sudo firewall-cmd --set-default-zone=internal       //修改默认区域

sudo firewall-cmd --get-active-zones                //查看你网络接口使用的区域

//输出
public
  interfaces: eth0


sudo firewall-cmd --zone=public --list-all          //得到特定区域的所有配置

//输出
public (default, active)
  interfaces: ens160
  sources:
  services: dhcpv6-client http ssh
  ports: 12345/tcp
  masquerade: no
  forward-ports:
  icmp-blocks:
  rich rules:


sudo firewall-cmd --list-all-zones                  //得到所有区域的配置
```

## 配置

FirewallD 使用 XML 进行配置。除非是非常特殊的配置，你不必处理它们，而应该使用 firewall-cmd

<p class="warning">firewalld 的操作只有重启之后才有效：service firewalld restart 重启</p>

### 系统配置目录

```javascript
/usr/lib/firewalld/services
```

目录中存放定义好的网络服务和端口参数，系统参数，不能修改

### 用户配置目录

```javascript
/etc/firewalld/
```

### 配置集

FirewallD 使用两个配置集：“运行时”和“持久”。 在系统重新启动或重新启动 FirewallD 时，不会保留运行时的配置更改，而对持
久配置集的更改不会应用于正在运行的系统。

默认情况下，firewall-cmd 命令适用于运行时配置，但使用 --permanent 标志将保存到持久配置中