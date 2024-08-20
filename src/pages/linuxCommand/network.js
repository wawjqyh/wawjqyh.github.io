import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'linux 命令', url: '/linuxCommand' }, { name: '网络管理' }]} />

        <div className="title">网络管理</div>

        <div className="content">
          <div className="col">
            <Card
              title="网络应用"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'axel', link: 'axel', desc: '多线程下载工具' },
                { name: 'jwhois', link: 'jwhois', desc: 'whois 客户端服务' },
                { name: 'curl', link: 'curl', desc: '利用URL规则在命令行下工作的文件传输工具' },
                { name: 'wget', link: 'wget', desc: 'Linux系统下载文件工具' },
                { name: 'telnet', link: 'telnet', desc: '登录远程主机和管理' },
                { name: 'rexec', link: 'rexec', desc: '运程执行Linux系统下命令' },
                { name: 'rsh', link: 'rsh', desc: '连接远程主机并执行命令' },
                { name: 'rlogin', link: 'rlogin', desc: '从当前终端登录到远程Linux主机' },
                { name: 'mail', link: 'mail', desc: '命令行下发送和接收电子邮件' },
                { name: 'mailstat', link: 'mailstat', desc: '显示到达的邮件状态' },
                { name: 'lynx', link: 'lynx', desc: '纯文本模式的网页浏览器' },
                { name: 'elm', link: 'elm', desc: '纯文本邮件客户端程序' },
                { name: 'mailq', link: '显示待发送的邮件队列', desc: '显示待发送的邮件队列' },
                { name: 'lftpget', link: 'lftpget', desc: '调用lftp指令下载指定的文件' },
                { name: 'elinks', link: 'elinks', desc: '纯文本界面的WWW浏览器' },
                { name: 'ipcalc', link: 'ipcalc', desc: '简单的IP地址计算器' },
                { name: 'lftp', link: 'lftp', desc: '优秀的文件客户端程序' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="网络服务器"
              prefix="http://man.linuxde.net/"
              items={[
                {
                  name: 'mysqlimport',
                  link: 'mysqlimport',
                  desc: '为MySQL服务器用命令行方式导入数据'
                },
                { name: 'ftpshut', link: 'ftpshut', desc: '在指定的时间关闭FTP服务器' },
                { name: 'ftpcount', link: 'ftpcount', desc: '显示目前已FTP登入的用户人数' },
                { name: 'exportfs', link: 'exportfs', desc: '管理NFS共享文件系统列表' },
                { name: 'apachectl', link: 'apachectl', desc: 'Apache服务器前端控制工具' },
                { name: 'ab', link: 'ab', desc: 'Apache服务器的性能测试工具' },
                { name: 'squid', link: 'squid', desc: 'squid服务器守护进程' },
                { name: 'mysql', link: 'mysql', desc: 'MySQL服务器客户端工具' },
                { name: 'sendmail', link: 'sendmail', desc: '著名电子邮件服务器' },
                { name: 'mysqlshow', link: 'mysqlshow', desc: '显示MySQL中数据库相关信息' },
                { name: 'smbpasswd', link: 'smbpasswd', desc: 'samba用户和密码管理工具' },
                { name: 'squidclient', link: 'squidclient', desc: 'squid服务器的客户端管理工具' },
                { name: 'smbclient', link: 'smbclient', desc: '交互方式访问samba服务器' },
                { name: 'showmount', link: 'showmount', desc: '显示NFS服务器加载的信息' },
                { name: 'nfsstat', link: 'nfsstat', desc: '列出NFS客户端和服务器的工作状态' },
                { name: 'mysqladmin', link: 'mysqladmin', desc: 'MySQL服务器管理客户端' },
                { name: 'ftpwho', link: 'ftpwho', desc: '显示当前每个ftp会话信息' },
                { name: 'mysqldump', link: 'mysqldump', desc: 'MySQL数据库中备份工具' },
                { name: 'htdigest', link: 'htdigest', desc: 'Apache服务器内置工具' },
                { name: 'htpasswd', link: 'htpasswd', desc: 'apache服务器创建密码认证文件' },
                { name: 'ftptop', link: 'ftptop', desc: 'proftpd服务器的连接状态' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="网络安全"
              prefix="http://man.linuxde.net/"
              items={[
                {
                  name: 'ssh-copy-id',
                  link: 'ssh-copy-id',
                  desc: '把本地的ssh公钥文件安装到远程主机对应的账户下'
                },
                { name: 'ssh-agent', link: 'ssh-agent', desc: 'ssh密钥管理器' },
                { name: 'ssh-add', link: 'ssh-add', desc: '把专用密钥添加到ssh-agent的高速缓存中' },
                { name: 'nmap', link: 'nmap', desc: '网络探测和安全审核' },
                { name: 'iptstate', link: 'iptstate', desc: '显示iptables的工作状态' },
                { name: 'ssh-keygen', link: 'ssh-keygen', desc: '为ssh生成、管理和转换认证密钥' },
                { name: 'sftp-server', link: 'sftp-server', desc: 'sftp协议的服务器端程序' },
                { name: 'sshd', link: 'sshd', desc: 'openssh软件套件中的服务器守护进程' },
                { name: 'ssh-keyscan', link: 'ssh-keyscan', desc: '收集主机公钥的使用工具' },
                { name: 'sftp', link: 'sftp', desc: '交互式的文件传输程序' },
                { name: 'ssh', link: 'ssh', desc: 'openssh套件中的客户端连接工具' }
              ]}
            />

            <Card
              title="高级网络"
              prefix="http://man.linuxde.net/"
              items={[
                {
                  name: 'tcpreplay',
                  link: 'tcpreplay',
                  desc: '将PCAP包重新发送，用于性能或者功能测试'
                },
                { name: 'pfctl', link: 'pfctl', desc: 'PF防火墙的配置命令' },
                { name: 'iptraf', link: 'iptraf', desc: '实时地监视网卡流量' },
                { name: 'ss', link: 'ss', desc: '获取socket统计信息' },
                {
                  name: 'nstat/rtacct',
                  link: 'nstat_rtacct',
                  desc: '监视SNMP计数器和网络接口状态'
                },
                { name: 'lnstat', link: 'lnstat', desc: '显示Linux系统的网路状态' },
                { name: 'arptables', link: 'arptables', desc: '管理ARP包过滤规则表' },
                { name: 'arpd', link: 'arpd', desc: '收集免费ARP信息' },
                { name: 'tcpdump', link: 'tcpdump', desc: '一款sniffer工具' },
                { name: 'ip', link: 'ip', desc: '网络配置工具' },
                { name: 'ip6tables-restore', link: 'ip6tables-restore', desc: '还原ip6tables表' },
                { name: 'ip6tables-save', link: 'ip6tables-save', desc: '保存ip6tables表配置' },
                { name: 'ip6tables', link: 'ip6tables', desc: 'linux中防火墙软件' },
                {
                  name: 'iptables-restore',
                  link: 'iptables-restore',
                  desc: '还原iptables表的配置'
                },
                { name: 'iptables-save', link: 'iptables-save', desc: '备份iptables的表配置' },
                { name: 'iptables', link: 'iptables', desc: 'Linux上常用的防火墙软件' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="网络配置"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'mii-tool', link: 'mii-tool', desc: '配置网络设备协商方式的工具' },
                { name: 'ethtool', link: 'ethtool', desc: '显示或修改以太网卡的配置信息' },
                { name: 'nisdomainname', link: 'nisdomainname', desc: '显示主机NIS的域名' },
                { name: 'dhclient', link: 'dhclient', desc: '动态获取或释放IP地址' },
                { name: 'domainname', link: 'domainname', desc: '显示和设置系统的NIS域名' },
                { name: 'ypdomainname', link: 'ypdomainname', desc: '显示主机的NIS的域名' },
                { name: 'usernetctl', link: 'usernetctl', desc: '被允许时操作指定的网络接口' },
                {
                  name: 'dnsdomainname',
                  link: 'dnsdomainname',
                  desc: '定义DNS系统中FQDN名称的域名'
                },
                { name: 'hostname', link: 'hostname', desc: '显示和设置系统的主机名' },
                { name: 'ifup', link: 'ifup', desc: '激活指定的网络接口' },
                { name: 'ifcfg', link: 'ifcfg', desc: '置Linux中的网络接口参数' },
                { name: 'ifconfig', link: 'ifconfig', desc: '配置和显示Linux系统网卡的网络参数' },
                { name: 'ifdown', link: 'ifdown', desc: '禁用指定的网络接口' },
                { name: 'route', link: 'route', desc: '显示并设置Linux中静态路由表' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="网络测试"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'hping3', link: 'hping3', desc: '测试网络及主机的安全' },
                { name: 'iperf', link: 'iperf', desc: '网络性能测试工具' },
                { name: 'host', link: 'host', desc: '常用的分析域名查询工具' },
                { name: 'tracepath', link: 'tracepath', desc: '追踪目的主机经过的路由信息' },
                { name: 'arpwatch', link: 'arpwatch', desc: '监听网络上ARP的记录' },
                { name: 'nslookup', link: 'nslookup', desc: '查询域名DNS信息的工具' },
                { name: 'arping', link: 'arping', desc: '通过发送ARP协议报文测试网络' },
                { name: 'nc/netcat', link: 'nc_netcat', desc: '用来设置路由器' },
                { name: 'dig', link: 'dig', desc: '域名查询工具' },
                { name: 'arp', link: 'arp', desc: '显示和修改IP到MAC转换表' },
                { name: 'ping', link: 'ping', desc: '测试主机之间网络的连通性' },
                { name: 'traceroute', link: 'traceroute', desc: '显示数据包到主机间的路径' },
                { name: 'netstat', link: 'netstat', desc: '查看Linux中网络系统状态信息' }
              ]}
            />
          </div>
        </div>

        <FootImg group={3} />
      </div>
    );
  }
}

export default Index;
