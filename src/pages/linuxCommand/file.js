import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'linux 命令', url: '/linuxCommand' }, { name: '文件目录管理' }]} />

        <div className="title">文件目录管理</div>

        <div className="content">
          <div className="col">
            <Card
              title="目录基本操作"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'install', link: 'install', desc: '安装或升级软件或备份数据' },
                { name: 'tree', link: 'tree', desc: '树状图列出目录的内容' },
                { name: 'popd', link: 'popd', desc: '用于删除目录栈中的记录' },
                { name: 'pushd', link: 'pushd', desc: '将目录加入命令堆叠中' },
                { name: 'dirs', link: 'dirs', desc: '显示目录记录' },
                { name: 'rmdir', link: 'rmdir', desc: '用来删除空目录' },
                { name: 'mkdir', link: 'mkdir', desc: '用来创建目录' },
                { name: 'rm', link: 'rm', desc: '用于删除给定的文件和目录' },
                { name: 'pwd', link: 'pwd', desc: '绝对路径方式显示用户当前工作目录' },
                { name: 'ls', link: 'ls', desc: '显示目录内容列表' },
                { name: 'mv', link: 'mv', desc: '用来对文件或目录重新命名' },
                { name: 'cp', link: 'cp', desc: '将源文件或目录复制到目标文件或目录中' },
                { name: 'cd', link: 'cd', desc: '切换用户当前工作目录' }
              ]}
            />

            <Card
              title="文件权限属性设置"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'dos2unix', link: 'dos2unix', desc: '将DOS格式文本文件转换成Unix格式' },
                { name: 'setfacl', link: 'setfacl', desc: '设置文件访问控制列表' },
                { name: 'umask', link: 'umask', desc: '用来设置限制新建文件权限的掩码' },
                { name: 'lsattr', link: 'lsattr', desc: '查看文件的第二扩展文件系统属性' },
                { name: 'chmod', link: 'chmod', desc: '用来变更文件或目录的权限' },
                { name: 'chown', link: 'chown', desc: '用来变更文件或目录的拥有者或所属群组' },
                { name: 'chgrp', link: 'chgrp', desc: '用来变更文件或目录的所属群组' },
                { name: 'chattr', link: 'chattr', desc: '用来改变文件属性' },
                { name: 'stat', link: 'stat', desc: '用于显示文件的状态信息' },
                { name: 'file', link: 'file', desc: '用来探测给定文件的类型' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="文件备份和恢复"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'cpio', link: 'cpio', desc: '用来建立、还原备份档的工具程序' },
                { name: 'restore', link: 'restore', desc: '所进行的操作和dump指令相反' },
                { name: 'dump', link: 'dump', desc: '用于备份ext2或者ext3文件系统' }
              ]}
            />

            <Card
              title="文件内容查看"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'hexdump', link: 'hexdump', desc: '显示文件十六进制格式' },
                { name: 'od', link: 'od', desc: '输出文件的八进制、十六进制等格式编码的字节' },
                { name: 'cut', link: 'cut', desc: '连接文件并打印到标准输出设备上' },
                { name: 'tail', link: 'tail', desc: '在屏幕上显示指定文件的末尾若干行' },
                { name: 'head', link: 'head', desc: '在屏幕上显示指定文件的开头若干行' },
                { name: 'less', link: 'less', desc: '分屏上下翻页浏览文件内容' },
                { name: 'more', link: 'more', desc: '显示文件内容，每次显示一屏' }
              ]}
            />

            <Card
              title="文件处理"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'iconv', link: 'iconv', desc: '转换文件的编码方式' },
                { name: 'nl', link: 'nl', desc: '在Linux系统中计算文件内容行号' },
                { name: 'basename', link: 'basename', desc: '打印目录或者文件的基本名称' },
                { name: 'unlink', link: 'unlink', desc: '系统调用函数unlink去删除指定的文件' },
                { name: 'pathchk', link: 'pathchk', desc: '检查文件中不可移植的部分' },
                { name: 'touch', link: 'touch', desc: '创建新的空文件' },
                { name: 'rename', link: 'rename', desc: '用字符串替换的方式批量改变文件名' },
                { name: 'dd', link: 'dd', desc: '复制文件并对原文件的内容进行转换和格式化处理' },
                { name: 'dirname', link: 'dirname', desc: '去除文件名中的非目录部分' },
                {
                  name: 'updatedb',
                  link: 'updatedb',
                  desc: '创建或更新slocate命令所必需的数据库文件'
                },
                { name: 'ln', link: 'ln', desc: '用来为文件创件连接' },
                { name: 'cat', link: 'cat', desc: '连接文件并打印到标准输出设备上' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="文件传输"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'ftp', link: 'ftp', desc: '用来设置文件系统相关功能' },
                { name: 'tftp', link: 'tftp', desc: '在本机和tftp服务器之间使用TFTP协议传输文件' },
                { name: 'scp', link: 'scp', desc: '加密的方式在本地主机和远程主机之间复制文件' },
                { name: 'ncftp', link: 'ncftp', desc: '是增强的的FTP工具' },
                { name: 'rcp', link: 'rcp', desc: '使在两台Linux主机之间的文件复制操作更简单' }
              ]}
            />

            <Card
              title="文件查找和比较"
              prefix="http://man.linuxde.net/"
              items={[
                {
                  name: 'strings',
                  link: 'strings',
                  desc: '在对象文件或二进制文件中查找可打印的字符串'
                },
                { name: 'diff', link: 'diff', desc: '比较给定的两个文件的不同' },
                { name: 'cmp', link: 'cmp', desc: '比较两个文件是否有差异' },
                { name: 'diff3', link: 'diff3', desc: '比较3个文件不同的地方' },
                { name: 'locate/slocate', link: 'locate_slocate', desc: '查找文件或目录' },
                { name: 'which', link: 'which', desc: '查找并显示给定命令的绝对路径' },
                { name: 'find', link: 'find', desc: '在指定目录下查找文件' },
                { name: 'whereis', link: 'whereis', desc: '查找二进制程序、代码等相关文件路径' }
              ]}
            />

            <Card
              title="文件编辑"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'nano', link: 'nano', desc: '字符终端文本编辑器' },
                { name: 'sed', link: 'sed', desc: '功能强大的流式文本编辑器' },
                { name: 'pico', link: 'pico', desc: '功能强大全屏幕的文本编辑器' },
                { name: 'emacs', link: 'emacs', desc: '功能强大的全屏文本编辑器' },
                { name: 'jed', link: 'jed', desc: '主要用于编辑代码的编辑器' },
                { name: 'joe', link: 'joe', desc: '强大的纯文本编辑器' },
                { name: 'ed', link: 'ed', desc: '单行纯文本编辑器' },
                { name: 'ex', link: 'ex', desc: '启动vim编辑器的ex编辑模式' },
                { name: 'vi', link: 'vi', desc: '功能强大的纯文本编辑器' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="文件过滤分割与合并"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'egrep', link: 'egrep', desc: '在文件内查找指定的字符串' },
                { name: 'fgrep', link: 'fgrep', desc: '为文件搜索文字字符串' },
                { name: 'split', link: 'split', desc: '分割任意大小的文件' },
                { name: 'grep', link: 'grep', desc: '强大的文本搜索工具' },
                { name: 'comm', link: 'comm', desc: '两个文件之间的比较' },
                { name: 'printf', link: 'printf', desc: '格式化并输出结果' },
                { name: 'expand', link: 'expand', desc: '将文件的制表符转换为空白字符' },
                { name: 'spell', link: 'spell', desc: '对文件进行拼写检查' },
                { name: 'pr', link: 'pr', desc: '将文本文件转换成适合打印的格式' },
                { name: 'look', link: 'look', desc: '显示文件中以指定字符串开头的任意行' },
                { name: 'tac', link: 'tac', desc: '将文件已行为单位的反序输出' },
                { name: 'wc', link: 'wc', desc: '统计文件的字节数、字数、行数' },
                { name: 'fmt', link: 'fmt', desc: '读取文件后优化处理并输出' },
                { name: 'rev', link: 'rev', desc: '将文件内容以字符为单位反序输出' },
                { name: 'diffstat', link: 'diffstat', desc: '显示diff命令输出信息的柱状图' },
                { name: 'ispell', link: 'ispell', desc: '检查文件中出现的拼写错误' },
                { name: 'uniq', link: 'uniq', desc: '报告或忽略文件中的重复行' },
                { name: 'paste', link: 'paste', desc: '将多个文件按列队列合并' },
                { name: 'tee', link: 'tee', desc: '把数据重定向到给定文件和屏幕上' },
                { name: 'sort', link: 'sort', desc: '将文件进行排序并输出' },
                { name: 'unexpand', link: 'unexpand', desc: '将文件的空白字符转换为制表符' },
                { name: 'csplit', link: 'csplit', desc: '将一个大文件分割成小的碎片文件' },
                { name: 'fold', link: 'fold', desc: '控制文件内容输出时所占用的屏幕宽度' },
                { name: 'join', link: 'join', desc: '两个文件中指定栏位内容相同的行连接起来' },
                { name: 'col', link: 'col', desc: '过滤控制字符' },
                { name: 'tr', link: 'tr', desc: '将字符进行替换压缩和删除' },
                { name: 'colrm', link: 'colrm', desc: '删除文件中的指定列' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="文件压缩与解压"
              prefix="http://man.linuxde.net/"
              items={[
                { name: 'lha', link: 'lha', desc: '压缩或解压缩lzh格式文件' },
                { name: 'bzcmp', link: 'bzcmp', desc: '比较两个压缩包中的文件' },
                { name: 'bzcat', link: 'bzcat', desc: '解压缩指定的.bz2文件' },
                { name: 'unarj', link: 'unarj', desc: '解压缩由arj命令创建的压缩包' },
                { name: 'zcat', link: 'zcat', desc: '显示压缩包中文件的内容' },
                { name: 'znew', link: 'znew', desc: '将.Z压缩包重新转化为gzip命令压缩的.gz压缩包' },
                {
                  name: 'zipsplit',
                  link: 'zipsplit',
                  desc: '将较大的zip压缩包分割成各个较小的压缩包'
                },
                { name: 'arj', link: 'arj', desc: '用于创建和管理.arj压缩包' },
                { name: 'gzexe', link: 'gzexe', desc: '用来压缩可执行文件' },
                { name: 'bzgrep', link: 'bzgrep', desc: '使用正则表达式搜索.bz2压缩包中文件' },
                { name: 'compress', link: 'compress', desc: '使用Lempress-Ziv编码压缩数据文件' },
                { name: 'zfore', link: 'zfore', desc: '强制为gzip格式的压缩文件添加.gz后缀' },
                { name: 'bzless', link: 'bzless', desc: '增强.bz2压缩包查看器' },
                { name: 'bzmore', link: 'bzmore', desc: '查看bzip2压缩过的文本文件的内容' },
                { name: 'zipinfo', link: 'zipinfo', desc: '用来列出压缩文件信息' },
                { name: 'unzip', link: 'unzip', desc: '用于解压缩由zip命令压缩的压缩包' },
                {
                  name: 'bzip2recover',
                  link: 'bzip2recover',
                  desc: '恢复被破坏的.bz2压缩包中的文件'
                },
                { name: 'tar', link: 'tar', desc: 'Linux下的归档使用工具，用来打包和备份' },
                { name: 'bunzip2', link: 'bunzip2', desc: '创一个bz2文件压缩包' },
                { name: 'gunzip', link: 'gunzip', desc: '用来解压缩文件' },
                { name: 'bzdiff', link: 'bzdiff', desc: '直接比较两个.bz2压缩包中文件的不同' },
                { name: 'zip', link: 'zip', desc: '可以用来解压缩文件' },
                { name: 'bzip2', link: 'bzip2', desc: '将文件压缩成bz2格式' },
                { name: 'gzip', link: 'gzip', desc: '用来压缩文件' },
                { name: 'uncompress', link: 'uncompress', desc: '用来解压.Z文件' }
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
