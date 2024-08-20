import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'linux 命令' }]} />

        <div className="content">
          <div className="col">
            <Card
              title="系统管理"
              prefix="/linuxCommand/system"
              items={[
                { name: '系统安全', link: '' },
                { name: '进程和作业管理', link: '' },
                { name: '用户和工作组管理', link: '' },
                { name: 'X-Windows', link: '' },
                { name: 'SELinux', link: '' },
                { name: '文件系统管理', link: '' },
                { name: '系统关机和重启', link: '' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="网络管理"
              prefix="/linuxCommand/network"
              items={[
                { name: '网络应用', link: '' },
                { name: '高级网络', link: '' },
                { name: '网络测试', link: '' },
                { name: '网络安全', link: '' },
                { name: '网络配置', link: '' },
                { name: '网络服务器', link: '' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="软件 | 打印 | 开发 | 工具"
              prefix="/linuxCommand/tools"
              items={[
                { name: '常用工具命令', link: '' },
                { name: '软件包管理', link: '' },
                { name: '编程开发', link: '' },
                { name: '打印', link: '' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="文件目录管理"
              prefix="/linuxCommand/file"
              items={[
                { name: '文件查找和比较', link: '' },
                { name: '文件内容查看', link: '' },
                { name: '编程开发', link: '' },
                { name: '文件处理', link: '' },
                { name: '文件编辑', link: '' },
                { name: '目录基本操作', link: '' },
                { name: '文件权限属性设置', link: '' },
                { name: '文件过滤分割与合并', link: '' },
                { name: '文件压缩与解压', link: '' },
                { name: '文件备份和恢复', link: '' },
                { name: '文件传输', link: '' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="硬件 | 监测 | 内核 | Shell"
              prefix="/linuxCommand/hardware"
              items={[
                { name: 'Shell内建命令', link: '' },
                { name: '性能监测与优化', link: '' },
                { name: '硬件管理', link: '' },
                { name: '内核与模块管理', link: '' },
                { name: '磁盘管理', link: '' }
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
