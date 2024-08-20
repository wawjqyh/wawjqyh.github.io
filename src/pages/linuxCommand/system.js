import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'linux 命令', url: '/linuxCommand' }, { name: '系统管理' }]} />

        <div className="title">系统管理</div>

        <div className="content">
          <div className="col">
            <Card
              title="进程和作业管理"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'ipcrm', link: 'ipcrm', desc: '删除消息队列、信号集、或者共享内存标识' },
                { name: 'systemctl', link: 'systemctl', desc: '系统服务管理器指令' },
                { name: 'w', link: 'w', desc: '显示目前登入系统的用户信息' },
                { name: 'watch', link: 'watch', desc: '周期性的方式执行给定的指令' },
                { name: 'pidof', link: 'pidof', desc: '查找指定名称的进程的进程号ID号' },
                { name: 'skill', link: 'skill', desc: '向选定的进程发送信号冻结进程' },
                {
                  name: 'pgrep',
                  link: 'pgrep',
                  desc: '设置用户的认证信息，包括用户密码、密码过期时间等'
                },
                { name: 'renice', link: 'renice', desc: '修改正在运行的进程的调度优先级' },
                { name: 'nohup', link: 'nohup', desc: '将程序以忽略挂起信号的方式运行起来' },
                { name: 'ipcs ', link: 'ipcs', desc: '分析消息队列共享内存和信号量' },
                { name: 'pmap', link: 'pmap', desc: '报告进程的内存映射关系' },
                { name: 'nice', link: 'nice', desc: '改变程序执行的优先权等级' },
                { name: 'service', link: 'service', desc: '控制系统服务的实用工具' },
                { name: 'pstree', link: 'pstree', desc: '以树状图的方式展现进程之间的派生关系' },
                { name: 'telint', link: 'telint', desc: '切换当前正在运行系统的运行等级' },
                { name: 'killall', link: 'killall', desc: '使用进程的名称来杀死一组进程' },
                { name: 'runlevel', link: 'runlevel', desc: '打印当前Linux系统的运行等级' },
                { name: 'batch', link: 'batch', desc: '在系统不繁忙的时候执行定时任务' },
                { name: 'ps', link: 'ps', desc: '报告当前系统的进程状态' },
                { name: 'init', link: 'init', desc: 'init进程是所有Linux进程的父进程' },
                { name: 'crontab', link: 'crontab', desc: '提交和管理用户的需要周期性执行的任务' },
                { name: 'pkill', link: 'pkill', desc: '可以按照进程名杀死进程' },
                { name: 'atrm', link: 'atrm', desc: '删除待执行任务队列中的指定任务' },
                { name: 'atq', link: 'atq', desc: '列出当前用户的at任务列表' },
                { name: 'at', link: 'at', desc: '在指定时间执行一个任务' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="用户和工作组管理"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'chage', link: 'chage', desc: '修改帐号和密码的有效期限' },
                { name: 'id', link: 'id', desc: '显示用户的ID以及所属群组的ID' },
                { name: 'grpconv', link: 'grpconv', desc: '用来开启群组的投影密码' },
                { name: 'pwunconv', link: 'pwunconv', desc: '用来关闭用户的投影密码' },
                { name: 'pwconv', link: 'pwconv', desc: '用来开启用户的投影密码' },
                { name: 'nologin', link: 'nologin', desc: '拒绝用户登录系统' },
                { name: 'chpasswd', link: 'chpasswd', desc: '批量更新用户口令的工具' },
                { name: 'grpunconv', link: 'grpunconv', desc: '用来关闭群组的投影密码' },
                { name: 'grpck', link: 'grpck', desc: '用于验证组文件的完整性' },
                { name: 'groupdel', link: 'groupdel', desc: '用于删除指定的工作组' },
                { name: 'chsh', link: 'chsh', desc: '用来更换登录系统时使用的shell' },
                { name: 'gpasswd', link: 'gpasswd', desc: 'Linux下工作组文件的管理工具' },
                { name: 'pwck', link: 'pwck', desc: '用来验证系统认证文件内容和格式的完整性' },
                { name: 'groupmod', link: 'groupmod', desc: '更改群组识别码或名称' },
                { name: 'passwd', link: 'passwd', desc: '用于让用户可以更改自己的密码' },
                { name: 'chfn', link: 'chfn', desc: '用来改变finger命令显示的信息' },
                { name: 'newusers', link: 'newusers', desc: '用于批处理的方式一次创建多个命令' },
                { name: 'logname', link: 'logname', desc: '用来显示用户名称' },
                { name: 'groups', link: 'groups', desc: '用来打印指定用户所属的工作组' },
                { name: 'finger', link: 'finger', desc: '用于查找并显示用户信息' },
                { name: 'su', link: 'su', desc: '用于切换当前用户身份到其他用户身份' },
                { name: 'usermod', link: 'usermod', desc: '用于修改用户的基本信息' },
                { name: 'groupadd', link: 'groupadd', desc: '用于创建一个新的工作组' },
                {
                  name: 'userdel',
                  link: 'userdel',
                  desc: '用于删除给定的用户以及与用户相关的文件'
                },
                { name: 'useradd', link: 'useradd', desc: '创建的新的系统用户' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="系统关机和重启"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'halt', link: 'halt', desc: '关闭正在运行的Linux操作系统' },
                { name: 'ctrlaltdel', link: 'ctrlaltdel', desc: '设置组合键Ctrl+Alt+Del的功能' },
                { name: 'reboot', link: 'reboot', desc: '重新启动正在运行的Linux操作系统' },
                { name: 'shutdown', link: 'shutdown', desc: '用来执行系统关机的命令' },
                {
                  name: 'poweroff',
                  link: 'poweroff',
                  desc: '用来关闭计算机操作系统并且切断系统电源'
                }
              ]}
            />

            <Card
              title="系统安全"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'syslog', link: 'syslog', desc: '系统默认的日志守护进程' },
                { name: 'openssl', link: 'openssl', desc: '强大的安全套接字层密码库' },
                { name: 'logwatch', link: 'logwatch', desc: '可定制和可插入式的日志监视系统' },
                { name: 'lastb', link: 'lastb', desc: '列出登入系统失败的用户相关信息' },
                { name: 'sudo', link: 'sudo', desc: '以其他身份来执行命令' },
                { name: 'lastlog', link: 'lastlog', desc: '显示系统中所有用户最近一次登录信息' },
                { name: 'logrotate', link: 'logrotate', desc: '统日志进行轮转、压缩和删除' },
                { name: 'chroot', link: 'chroot', desc: '把根目录换成指定的目的目录' },
                { name: 'logsave', link: 'logsave', desc: '将命令的输出信息保存到指定的日志文件' },
                { name: 'last', link: 'last', desc: '列出目前与过去登入系统的用户相关信息' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="文件系统管理"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'repquota', link: 'repquota', desc: '报表的格式输出磁盘空间限制的状态' },
                { name: 'e2label', link: 'e2label', desc: '设置第二扩展文件系统的卷标' },
                { name: 'findfs', link: 'findfs', desc: '标签或UUID查找文件系统' },
                { name: 'resize2fs', link: 'resize2fs', desc: 'ext2/ext2文件系统重新设置大小' },
                { name: 'e2image', link: 'e2image', desc: '将处于危险状态的文件系统保存到文件中' },
                {
                  name: 'tune2fs',
                  link: 'tune2fs',
                  desc: '调整或查看ext2/ext3文件系统的文件系统参数'
                },
                { name: 'sync', link: 'sync', desc: '用于强制被改变的内容立刻写入磁盘' },
                { name: 'swapoff', link: 'swapoff', desc: '关闭指定的交换空间' },
                { name: 'swapon', link: 'swapon', desc: '激活Linux系统中交换空间' },
                { name: 'quota', link: 'quota', desc: '显示磁盘已使用的空间与限制' },
                {
                  name: 'quotastats',
                  link: 'quotastats',
                  desc: '显示系统当前的磁盘配额运行状态信息'
                },
                { name: 'edquota', link: 'edquota', desc: '用于编辑指定用户或工作组磁盘配额' },
                {
                  name: 'quotaon',
                  link: 'quotaon',
                  desc: '激活Linux内核中指定文件系统的磁盘配额功能'
                },
                { name: 'quotacheck', link: 'quotacheck', desc: '检查磁盘的使用空间与限制' },
                {
                  name: 'quotaoff',
                  link: 'quotaoff',
                  desc: '关闭Linux内核中指定文件系统的磁盘配额功能'
                },
                { name: 'mkfs', link: 'mkfs', desc: '用于在设备上创建Linux文件系统' },
                { name: 'mountpoint', link: 'mountpoint', desc: '用来判断指定的目录是否是加载点' },
                { name: 'umount', link: 'umount', desc: '用于卸载已经加载的文件系统' },
                { name: 'e2fsck', link: 'e2fsck', desc: '用于检查第二扩展文件系统的完整性' },
                {
                  name: 'dumpe2fs',
                  link: 'dumpe2fs',
                  desc: '用于打印“ext2/ext3”文件系统的超级块和快组信息'
                },
                { name: 'fsck', link: 'fsck', desc: '检查并且试图修复文件系统中的错误' },
                { name: 'mount', link: 'mount', desc: '用于加载文件系统到指定的加载点' },
                { name: 'mke2fs', link: 'mke2fs', desc: '创建磁盘分区上的“etc2/etc3”文件系统' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="X-Windows"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'xclip', link: 'xclip', desc: '管理 X 粘贴板' },
                { name: 'xset', link: 'xset', desc: '设置X-Window系统中的用户爱好的实用工具' },
                { name: 'xlsfonts', link: 'xlsfonts', desc: '列出X Server使用的字体' },
                { name: 'xhost', link: 'xhost', desc: '制哪些X客户端能够在X服务器上显示' },
                { name: 'xlsatoms', link: 'xlsatoms', desc: '列出X服务器内部所有定义的原子成分' },
                { name: 'xauth', link: 'xauth', desc: '显示和编辑被用于连接X服务器的认证信息' },
                { name: 'xlsclients', link: 'xlsclients', desc: '列出显示器中的客户端应用程序' },
                { name: 'xinit', link: 'xinit', desc: '是Linux下X-Window系统的初始化程序' },
                { name: 'startx', link: 'startx', desc: '用来启动X Window' }
              ]}
            />

            <Card
              title="SELinux"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'restorecon', link: 'restorecon', desc: '恢复文件的安全上下文' },
                { name: 'semanage', link: 'semanage', desc: '默认目录的安全上下文查询与修改' },
                { name: 'setsebool', link: 'setsebool', desc: '修改SElinux策略内各项规则的布尔值' },
                { name: 'getsebool', link: 'getsebool', desc: '查询SElinux策略内各项规则的布尔值' },
                { name: 'sesearch', link: 'sesearch', desc: '查询SELinux策略的规则详情' },
                { name: 'seinfo', link: 'seinfo', desc: '查询SELinux的策略提供多少相关规则' },
                { name: 'chcon', link: 'chcon', desc: '修改对象（文件）的安全上下文' }
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
