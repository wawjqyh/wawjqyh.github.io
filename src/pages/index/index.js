import styles from './index.less';
import React, { Component } from 'react';

import Header from '@/components/Header';
import IndexCard from './components/IndexCard';
import FootImg from '@/components/FootImg';

class Index extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />

        <div className={styles.content}>
          <div className={styles.noteList}>
            <IndexCard link="/others/formula" title="文章" desc="一些零散的文章" />
            <IndexCard link="/jsApi" title="jsApi" desc="搬运自 MDN" />
            <IndexCard link="/es6/intro" title="ES6" desc="搬运自阮一峰的教程" />
            <IndexCard link="/js/jsBasic" title="JavaScript" desc="JS 学习笔记" />
            <IndexCard link="/browser/document" title="浏览器" desc="浏览器：文档，事件，接口" />
            <IndexCard link="/svg/svg" title="SVG 教程" desc="MDN 搬运的 SVG 教程" />
            <IndexCard link="/loophole/xss" title="前端漏洞" desc="前端漏洞攻防" />
            <IndexCard link="/algorithm/array" title="数据结构和算法" desc="JS 数据结构" />
            <IndexCard link="/webpack/entryOutputBase" title="webpack" desc="webpack 学习笔记" />
            <IndexCard link="/performance/resource2" title="性能优化" desc="前端性能优化" />
            <IndexCard link="/css/flex" title="CSS" desc="css 相关文章" />
            <IndexCard link="/sequelize/getting-started" title="sequelize" desc="node orm 框架" />
            <IndexCard link="/git/gitList" title="git" desc="git" />
            <IndexCard link="/designPattern/principles" title="设计模式" desc="javascript 设计模式" />
            <IndexCard link="/reactSSR/about" title="React SSR" desc="React 服务端渲染" />
            <IndexCard link="/mongodb/install" title="MongoDB" desc="MongoDB" />
            <IndexCard link="/network/networkModel" title="计算机网络" desc="计算机网络" />
            <IndexCard link="/blockChain/history" title="区块链" desc="区块链" />
            <IndexCard link="/linux/base" title="linux" desc="linux" />
            <IndexCard link="/linuxCommand" title="linux" desc="linux命令" />
          </div>
        </div>

        <FootImg group={3} />
      </div>
    );
  }
}

export default Index;
