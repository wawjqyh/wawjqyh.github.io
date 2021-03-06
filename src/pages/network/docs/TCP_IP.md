# TCP/IP协议

TCP/IP协议不是TCP和IP这两个协议的合称，而是指因特网整个TCP/IP协议族

| OSI 7层模型                | TCP/IP 4层模型 |
|:---------------------------|:---------------|
| 应用层<br>表示层<br>会话层 | 应用层         |
| 传输层                     | 传输层         |
| 网络层                     | 网际互联层     |
| 数据链路层<br>物理层       | 网络接口层     |

## 网络接口层

数据链路层是负责接收IP数据包并通过网络发送，或者从网络上接收物理帧，抽出IP数据包，交给IP层。ARP是正向地址解析协议，通过
已知的IP，寻找对应主机的MAC地址。RARP是反向地址解析协议，通过MAC地址确定IP地址。比如无盘工作站还有DHCP服务。

### 接口层协议

* `Ethernet 802.3`
* `Token Ring 802.5`
* `X.25`
* `Frame relay`
* `HDLC`
* `PPP ATM`

## 网络层

负责相邻计算机之间的通信。

其功能包括三方面：

* 处理来自传输层的分组发送请求，收到请求后，将分组装入IP数据报，填充报头，选择去往信宿机的路径，然后将数据报发往适当的网络接口
* 处理输入数据报：首先检查其合法性，然后进行寻径--假如该数据报已到达信宿机，则去掉报头，将剩下部分交给适当的传输协议；假如该数据报尚未到达信宿，则转发该数据报
* 处理路径、流控、拥塞等问题

### 网络层协议

* `IP` (Internet Protocol）协议
* `ICMP` (Internet Control Message Protocol)控制报文协议
* `ARP` (Address Resolution Protocol）地址转换协议
* `RARP` (Reverse ARP)反向地址转换协议

IP是网络层的核心，通过路由选择将下一条IP封装后交给接口层。IP数据报是无连接服务。

ICMP是网络层的补充，可以回送报文。用来检测网络是否通畅。

Ping命令就是发送ICMP的echo包，通过回送的echo relay进行网络测试。

## 传输层

提供应用程序间的通信。其功能包括：一、格式化信息流；二、提供可靠传输。为实现后者，传输层协议规定接收端必须发回确认，并且
假如分组丢失，必须重新发送，即耳熟能详的“三次握手”过程，从而提供可靠的数据传输。

### 传输层协议

* `TCP` 传输控制协议(Transmission Control Protocol）
* `UDP` 用户数据报协议(User Datagram protocol）

## 应用层

向用户提供一组常用的应用程序，比如电子邮件、文件传输访问、远程登录等。远程登录TELNET使用TELNET协议提供在网络其它主机上注
册的接口。TELNET会话提供了基于字符的虚拟终端。文件传输访问FTP使用FTP协议来提供网络内机器间的文件拷贝功能。

### 应用层协议

* `FTP` (File Transfer Protocol）是文件传输协议，一般上传下载用FTP服务，数据端口是20H，控制端口是21H。
* `Telnet` 服务是用户远程登录服务，使用23H端口，使用明码传送，保密性差、简单方便。
* `DNS` (Domain Name Service）是域名解析服务，提供域名到IP地址之间的转换，使用端口53。
* `SMTP` (Simple Mail Transfer Protocol）是简单邮件传输协议，用来控制信件的发送、中转，使用端口25。
* `NFS`（Network File System）是网络文件系统，用于网络中不同主机间的文件共享。
* `HTTP` (Hypertext Transfer Protocol）是超文本传输协议，用于实现互联网中的WWW服务，使用端口80。