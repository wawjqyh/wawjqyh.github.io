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
            { name: '软件 | 打印 | 开发 | 工具' }
          ]}
        />

        <div className="title">软件 | 打印 | 开发 | 工具</div>

        <div className="content">
          <div className="col">
            <Card
              title="常用工具命令"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'pssh', link: 'pssh', desc: '批量管理执行' },
                { name: 'screen', link: 'screen', desc: '用于命令行终端切换' },
                {
                  name: 'speedtest-cli',
                  link: 'speedtest-cli',
                  desc: '命令行下测试服务器外网速度'
                },
                { name: 'clockdiff', link: 'clockdiff', desc: '检测两台linux主机的时间差' },
                { name: 'ntpdate', link: 'ntpdate', desc: '使用网络计时协议（NTP）设置日期和时间' },
                { name: 'rsync', link: 'rsync', desc: '远程数据同步工具' },
                { name: 'vdfuse', link: 'vdfuse', desc: 'VirtualBox软件挂载VDI分区文件工具' },
                { name: 'ngrep', link: 'ngrep', desc: '方便的数据包匹配和显示工具' },
                { name: 'tempfile', link: 'tempfile', desc: 'shell中给临时文件命名' },
                { name: 'xargs', link: 'xargs', desc: '给其他命令传递参数的一个过滤器' },
                { name: 'awk', link: 'awk', desc: '文本和数据进行处理的编程语言' },
                { name: 'yes', link: 'yes', desc: '重复打印指定字符串' },
                { name: 'date', link: 'date', desc: '显示或设置系统时间与日期' },
                { name: 'consoletype', link: 'consoletype', desc: '输出已连接的终端类型' },
                { name: 'info', link: 'info', desc: 'Linux下info格式的帮助指令' },
                { name: 'hostid', link: 'hostid', desc: '用来打印当前主机的数字化标识' },
                { name: 'clear', link: 'clear', desc: '清除当前屏幕终端上的任何信息' },
                { name: 'whoami', link: 'whoami', desc: '打印当前有效的用户名称' },
                { name: 'users', link: 'users', desc: '显示当前登录系统的所有用户' },
                { name: 'sleep', link: 'sleep', desc: '将目前动作延迟一段时间' },
                { name: 'md5sum', link: 'md5sum', desc: '计算和校验文件报文摘要的工具程序' },
                { name: 'mesg', link: 'mesg', desc: '设置当前终端的写权限' },
                { name: 'mtools', link: 'mtools', desc: '显示mtools支持的指令' },
                { name: 'login', link: 'login', desc: '登录系统或切换用户身份' },
                { name: 'stty', link: 'stty', desc: '修改终端命令行的相关设置' },
                { name: 'talk', link: 'talk', desc: '让用户和其他用户聊天' },
                { name: 'man', link: 'man', desc: '查询一个命令执行什么功能' },
                { name: 'write', link: 'write', desc: '向指定登录用户终端上发送信息' },
                { name: 'who', link: 'who', desc: '显示目前登录系统的用户信息' },
                { name: 'sum', link: 'sum', desc: '计算文件的校验码和显示块数' },
                { name: 'wall', link: 'wall', desc: '向系统当前所有打开的终端上输出信息' },
                {
                  name: 'dircolors',
                  link: 'dircolors',
                  desc: '置ls命令在显示目录或文件时所用的色彩'
                },
                { name: 'gpm', link: 'gpm', desc: '提供文字模式下的滑鼠事件处理' },
                { name: 'bc', link: 'bc', desc: '算术操作精密运算工具' },
                { name: 'cal', link: 'cal', desc: '显示当前日历或指定日期的日历' },
                { name: 'cksum', link: 'cksum', desc: '检查文件的CRC是否正确' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="软件包管理"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'dnf', link: 'dnf', desc: '新一代的RPM软件包管理器' },
                {
                  name: 'dpkg-reconfigure',
                  link: 'dpkg-reconfigure',
                  desc: 'Debian Linux中重新配制一个已经安装的软件包'
                },
                { name: 'dpkg', link: 'dpkg', desc: 'Debian Linux系统上安装、创建和管理软件包' },
                {
                  name: 'apt-sortpkgs',
                  link: 'apt-sortpkgs',
                  desc: 'Debian Linux下对软件包索引文件进行排序的工具'
                },
                { name: 'apt-key', link: 'apt-key', desc: '管理Debian Linux系统中的软件包密钥' },
                { name: 'aptitude', link: 'aptitude', desc: 'Debian Linux系统中软件包管理工具' },
                {
                  name: 'apt-get',
                  link: 'apt-get',
                  desc: 'Debian Linux发行版中的APT软件包管理工具'
                },
                { name: 'ntsysv', link: 'ntsysv', desc: '集中管理系统的各种服务' },
                { name: 'chkconfig', link: 'chkconfig', desc: '检查或设置系统的各种服务' },
                { name: 'rpmsign', link: 'rpmsign', desc: '使用RPM软件包的签名管理工具' },
                { name: 'rpmdb', link: 'rpmdb', desc: '初始化和重建RPM数据库' },
                { name: 'yum', link: 'yum', desc: '基于RPM的软件包管理器' },
                {
                  name: 'dpkg-trigger',
                  link: 'dpkg-trigger',
                  desc: 'Debian Linux下的软件包触发器'
                },
                { name: 'rpm', link: 'rpm', desc: 'RPM软件包的管理工具' },
                { name: 'rcconf', link: 'rcconf', desc: 'Debian Linux下的运行等级服务配置工具' },
                { name: 'rpmbuild', link: 'rpmbuild', desc: '创建RPM的二进制软件包和源码软件包' },
                { name: 'rpmverify', link: 'rpmverify', desc: '验证已安装的RPM软件包的正确性' },
                { name: 'rpmquery', link: 'rpmquery', desc: '从RPM数据库中查询软件包信息' },
                { name: 'patch', link: 'patch', desc: '为开放源代码软件安装补丁程序' },
                { name: 'rpm2cpio', link: 'rpm2cpio', desc: '将RPM软件包转换为cpio格式的文件' },
                {
                  name: 'dpkg-statoverride',
                  link: 'dpkg-statoverride',
                  desc: 'Debian Linux中覆盖文件的所有权和模式'
                },
                {
                  name: 'dpkg-preconfigure',
                  link: 'dpkg-preconfigure',
                  desc: 'Debian Linux中软件包安装之前询问问题'
                },
                {
                  name: 'dpkg-split',
                  link: 'Debian Linux中将大软件包分割成小包',
                  desc: 'Debian Linux中将大软件包分割成小包'
                },
                { name: 'dpkg-query', link: 'dpkg-query', desc: 'Debian Linux中软件包的查询工具' },
                {
                  name: 'dpkg-divert',
                  link: 'dpkg-divert',
                  desc: 'Debian Linux中创建并管理一个转向列表'
                },
                { name: 'dpkg-deb', link: 'dpkg-deb', desc: 'Debian Linux下的软件包管理工具' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="编程开发"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'ldconfig', link: 'ldconfig', desc: '动态链接库管理命令' },
                { name: 'readelf', link: 'readelf', desc: '用于显示elf格式文件的信息' },
                { name: 'objdump', link: 'objdump', desc: '显示二进制文件信息' },
                { name: 'pstack', link: 'pstack', desc: '显示每个进程的栈跟踪' },
                { name: 'indent', link: 'indent', desc: '格式化C语言的源文件' },
                { name: 'gdb', link: 'gdb', desc: '功能强大的程序调试器' },
                { name: 'gcc', link: 'gcc', desc: '基于C/C++的编译器' },
                { name: 'expr', link: 'expr', desc: '一款表达式计算工具' },
                { name: 'test', link: 'test', desc: 'shell环境中测试条件表达式工具' },
                { name: 'php', link: 'php', desc: 'PHP语言的命令行接口' },
                { name: 'protoize', link: 'protoize', desc: 'GNU-C代码转换为ANSI-C代码' },
                { name: 'mktemp', link: 'mktemp', desc: '创建临时文件供shell脚本使用' },
                { name: 'perl', link: 'perl', desc: 'perl语言解释器' },
                { name: 'make', link: 'make', desc: 'GNU的工程化编译工具' },
                { name: 'ldd', link: 'ldd', desc: '打印程序或者库文件所依赖的共享库列表' },
                { name: 'nm', link: 'nm', desc: '显示二进制目标文件的符号表' },
                { name: 'unprotoize', link: 'unprotoize', desc: '删除C语言源代码文件中的函数原型' },
                { name: 'ld', link: 'ld', desc: '将目标文件连接为可执行程序' },
                { name: 'gcov', link: 'gcov', desc: '测试程序的代码覆盖率的工具' },
                { name: 'as', link: 'as', desc: '汇编语言编译器' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="打印"
              prefix="http://man.linuxde.net/"
              items={[
                {
                  name: 'reject',
                  link: 'reject',
                  desc: '指示打印系统拒绝发往指定目标打印机的打印任务'
                },
                { name: 'lpadmin', link: 'lpadmin', desc: '配置CUPS套件中的打印机和类' },
                { name: 'cupsenable', link: 'cupsenable', desc: '启动指定的打印机' },
                {
                  name: 'accept',
                  link: 'accept',
                  desc: '指示打印系统接受发往指定目标打印机的打印任务'
                },
                { name: 'lpstat', link: 'lpstat', desc: '显示CUPS中打印机的状态信息' },
                { name: 'cupsdisable', link: 'cupsdisable', desc: '停止指定的打印机' },
                { name: 'lpc', link: 'lpc', desc: '命令行方式打印机控制程序' },
                { name: 'cancel', link: 'cancel', desc: '取消已存在的打印任务' },
                {
                  name: 'lp',
                  link: '打印文件或修改排队的打印任务',
                  desc: '打印文件或修改排队的打印任务'
                },
                { name: 'lpq', link: 'lpq', desc: '显示打印队列中的打印任务的状态信息' },
                { name: 'eject', link: 'eject', desc: '用来退出抽取式设备' },
                { name: 'lprm', link: 'lprm', desc: '删除打印队列中的打印任务' },
                { name: 'lpr', link: 'lpr', desc: '将文件发送给指定打印机进行打印' }
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
