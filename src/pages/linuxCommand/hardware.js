import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header
          nav={[
            { name: 'linux 命令', url: '/linuxCommand' },
            { name: '硬件 | 监测 | 内核 | Shell' }
          ]}
        />

        <div className="title">硬件 | 监测 | 内核 | Shell</div>

        <div className="content">
          <div className="col">
            <Card
              title="Shell内建命令"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'sh', link: 'sh', desc: 'shell命令解释器' },
                { name: 'trap', link: 'trap', desc: '指定在接收到信号后将要采取的动作' },
                { name: 'let', link: 'let', desc: '简单的计算器' },
                { name: 'seq', link: 'seq', desc: '以指定增量从首数开始打印数字到尾数' },
                {
                  name: 'tput',
                  link: 'tput',
                  desc: '通过terminfo数据库对终端会话进行初始化和操作'
                },
                { name: 'apropos', link: 'apropos', desc: '在 whatis 数据库中查找字符串' },
                { name: 'set', link: 'set', desc: '显示或设置shell特性及shell变量' },
                { name: 'command', link: 'command', desc: '调用并执行指定的命令' },
                { name: 'dris', link: 'dris', desc: '显示和清空目录堆栈中的内容' },
                { name: 'fc', link: 'fc', desc: '修改历史命令并执行' },
                { name: 'bind', link: 'bind', desc: '显示或设置键盘按键与其相关的功能' },
                { name: 'readonly', link: 'readonly', desc: '定义只读shell变量或函数' },
                { name: 'read', link: 'read', desc: '从键盘读取变量值' },
                { name: 'bg', link: 'bg', desc: '用于将作业放到后台运行' },
                { name: 'ulimit', link: 'ulimit', desc: '控制shell程序的资源' },
                { name: 'enable', link: 'enable', desc: '启动或关闭shell内建命令' },
                { name: 'declare', link: 'declare', desc: '声明或显示shell变量' },
                { name: 'wait', link: 'wait', desc: '等待进程执行完后返回' },
                { name: 'builtin', link: 'builtin', desc: '执行shell内部命令' },
                { name: 'shopt', link: 'shopt', desc: '显示和设置shell操作选项' },
                { name: 'exit', link: 'exit', desc: '退出当前的shell' },
                { name: 'jobs', link: 'jobs', desc: '显示Linux中的任务列表及任务状态' },
                { name: 'help', link: 'help', desc: '显示帮助信息' },
                { name: 'history', link: 'history', desc: '用于显示历史命令' },
                { name: 'logout', link: 'logout', desc: '退出当前登录的Shell' },
                { name: 'export', link: 'export', desc: '设置或显示系统环境变量' },
                { name: 'exec', link: 'exec', desc: '调用并执行指定的命令' },
                { name: 'env', link: 'env', desc: '显示系统中已存在的环境变量' },
                { name: 'unset', link: 'unset', desc: '删除指定的shell变量或函数' },
                { name: 'kill', link: 'kill', desc: '删除执行中的程序或工作' },
                { name: 'unalias', link: 'unalias', desc: '删除由alias设置的别名' },
                { name: 'type', link: 'type', desc: '显示指定命令的类型' },
                { name: 'fg', link: 'fg', desc: '将后台作业放到前台终端运行' },
                { name: 'alias', link: 'alias', desc: '用来设置指令的别名' },
                { name: 'echo', link: 'echo', desc: '输出指定的字符串或者变量' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="性能监测与优化"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'inotifywait', link: 'inotifywait', desc: '异步文件系统监控机制' },
                { name: 'nethogs', link: 'nethogs', desc: '终端下的网络流量监控工具' },
                { name: 'ifstat', link: 'ifstat', desc: '统计网络接口流量状态' },
                { name: 'dstat', link: 'dstat', desc: '通用的系统资源统计工具' },
                { name: 'ltrace', link: 'ltrace', desc: '用来跟踪进程调用库函数的情况' },
                { name: 'iotop', link: 'iotop', desc: '用来监视磁盘I/O使用状况的工具' },
                { name: 'strace', link: 'strace', desc: '跟踪系统调用和信号' },
                { name: 'fuser', link: 'fuser', desc: '使用文件或文件结构识别进程' },
                { name: 'lsof', link: 'lsof', desc: '显示Linux系统当前已打开的所有文件列表' },
                { name: 'tload', link: 'tload', desc: '显示系统负载状况' },
                { name: 'time', link: 'time', desc: '统计给定命令所花费的总时间' },
                { name: 'vmstat', link: 'vmstat', desc: '显示虚拟内存状态' },
                { name: 'sar', link: 'sar', desc: '系统运行状态统计工具' },
                { name: 'mpstat', link: 'mpstat', desc: '显示各个可用CPU的状态' },
                { name: 'iostat', link: 'iostat', desc: '监视系统输入输出设备和CPU的使用情况' },
                { name: 'free', link: 'free', desc: '显示内存的使用情况' },
                { name: 'uptime', link: 'uptime', desc: '查看Linux系统负载信息' },
                { name: 'top', link: 'top', desc: '显示或管理执行中的程序' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="硬件管理"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'losetup', link: 'losetup', desc: '设定与控制循环（loop）设备' },
                {
                  name: 'dmidecode',
                  link: 'dmidecode',
                  desc: '在Linux系统下获取有关硬件方面的信息'
                },
                { name: 'hwclock', link: 'hwclock', desc: '显示与设定硬件时钟' },
                { name: 'cdrecord', link: 'cdrecord', desc: 'Linux系统下光盘刻录功能命令' },
                { name: 'setpci', link: 'setpci', desc: '查询和配置PCI设备的使用工具' },
                { name: 'lspci', link: 'lspci', desc: '显示当前主机的所有PCI总线信息' },
                { name: 'lsusb', link: 'lsusb', desc: '显示本机的USB设备列表信息' },
                { name: 'arch', link: 'arch', desc: '显示当前主机的硬件架构类型' },
                { name: 'volname', link: 'volname', desc: '显示指定的ISO-9660格式的设备的卷名称' },
                {
                  name: 'systool',
                  link: 'systool',
                  desc: '显示基于总线、类和拓扑显示系统中设备的信息'
                }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="内核与模块管理"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'lsb_release', link: 'lsb_release', desc: '显示发行版本信息' },
                { name: 'sysctl', link: 'sysctl', desc: '时动态地修改内核的运行参数' },
                { name: 'slabtop', link: 'slabtop', desc: '实时显示内核slab内存缓存信息' },
                { name: 'kernelversion', link: 'kernelversion', desc: '打印当前内核的主版本号' },
                { name: 'get_module', link: 'get_module', desc: '获取Linux内核模块的详细信息' },
                { name: 'kexec', link: 'kexec', desc: '从当前正在运行的内核引导到一个新内核' },
                { name: 'dmesg', link: 'dmesg', desc: '显示Linux系统启动信息' },
                { name: 'uname', link: 'uname', desc: '显示Linux系统信息' },
                { name: 'depmod', link: 'depmod', desc: '分析可载入模块的相依性' },
                { name: 'bmodinfo', link: 'bmodinfo', desc: '显示给定模块的详细信息' },
                { name: 'modprobe', link: 'modprobe', desc: '自动处理可载入模块' },
                { name: 'rmmod', link: 'rmmod', desc: '从运行的内核中移除指定的内核模块' },
                { name: 'insmod', link: 'insmod', desc: '将给定的模块加载到内核中' },
                { name: 'lsmod', link: 'lsmod', desc: '显示已载入系统的模块' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="磁盘管理"
              prefix="http://man.linuxde.net/"
              items={[
                {
                  name: 'blkid',
                  link: 'blkid',
                  desc: '查看块设备的文件系统类型、LABEL、UUID等信息'
                },
                { name: 'du', link: 'du', desc: '显示每个文件和目录的磁盘使用空间' },
                { name: 'lsblk', link: 'lsblk', desc: '列出块设备信息' },
                { name: 'vgremove', link: 'vgremove', desc: '用于用户删除LVM卷组' },
                { name: 'lvresize', link: 'lvresize', desc: '调整逻辑卷空间大小' },
                { name: 'lvremove', link: 'lvremove', desc: '删除指定LVM逻辑卷' },
                { name: 'lvreduce', link: 'lvreduce', desc: '收缩逻辑卷空间' },
                { name: 'pvs', link: 'pvs', desc: '输出物理卷信息报表' },
                { name: 'pvchange', link: 'pvchange', desc: '修改物理卷属性' },
                { name: 'pvck', link: 'pvck', desc: '检测物理卷的LVM元数据的一致性' },
                { name: 'pvremove', link: 'pvremove', desc: '删除一个存在的物理卷' },
                { name: 'lvextend', link: 'lvextend', desc: '扩展逻辑卷空间' },
                { name: 'pvdisplay', link: 'pvdisplay', desc: '显示物理卷的属性' },
                { name: 'lvdisplay', link: 'lvdisplay', desc: '显示逻辑卷属性' },
                { name: 'pvscan', link: 'pvscan', desc: '扫描系统中所有硬盘的物理卷列表' },
                { name: 'lvscan', link: 'lvscan', desc: '扫描逻辑卷' },
                { name: 'lvcreate', link: 'lvcreate', desc: '用于创建LVM的逻辑卷' },
                { name: 'pvcreate', link: 'pvcreate', desc: '将物理硬盘分区初始化为物理卷' },
                { name: 'vgconvert', link: 'vgconvert', desc: '转换卷组元数据格式' },
                { name: 'blockdev', link: 'blockdev', desc: '从命令行调用区块设备控制程序' },
                { name: 'mkswap', link: 'mkswap', desc: '建立和设置SWAP交换分区' },
                { name: 'vgchange', link: 'vgchange', desc: '修改卷组属性' },
                { name: 'mknod', link: 'mknod', desc: '创建字符设备文件和块设备文件' },
                { name: 'mkisofs', link: 'mkisofs', desc: '建立ISO 9660映像文件' },
                { name: 'mkinitrd', link: 'mkinitrd', desc: '建立要载入ramdisk的映像文件' },
                { name: 'vgreduce', link: 'vgreduce', desc: '从卷组中删除物理卷' },
                { name: 'hdparm', link: 'hdparm', desc: '显示与设定硬盘的参数' },
                { name: 'vgextend', link: 'vgextend', desc: '向卷组中添加物理卷' },
                { name: 'partprobe', link: 'partprobe', desc: '不重启的情况下重读分区' },
                { name: 'vgscan', link: 'vgscan', desc: '扫描并显示系统中的卷组' },
                { name: 'vgcreate', link: 'vgcreate', desc: '用于创建LVM卷组' },
                { name: 'fdisk', link: 'fdisk', desc: '查看磁盘使用情况和磁盘分区' },
                { name: 'badblocks', link: 'badblocks', desc: '查找磁盘中损坏的区块' },
                { name: 'vgdisplay', link: 'vgdisplay', desc: '显示LVM卷组的信息' },
                { name: 'mkbootdisk', link: 'mkbootdisk', desc: '可建立目前系统的启动盘' },
                { name: 'grub', link: 'grub', desc: '多重引导程序grub的命令行shell工具' },
                {
                  name: 'convertquota',
                  link: 'convertquota',
                  desc: '把老的配额文件转换为新的格式'
                },
                { name: 'lilo', link: 'lilo', desc: '安装核心载入开机管理程序' },
                { name: 'df', link: 'df', desc: '显示磁盘的相关信息' },
                { name: 'parted', link: 'parted', desc: '磁盘分区和分区大小调整工具' }
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
