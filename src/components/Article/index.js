import styles from './index.less';
import React, { Component } from 'react';
import * as utils from '@/utils/utils';
import { withRouter } from 'umi';
import getHljs from '@/utils/hljs';

import Header from '@/components/Header';
import Sidebar from '../Sidebar';
import ArticleNav from '../ArticleNav';
import FootImg from '@/components/FootImg';

let content = {};

@withRouter
class Article extends Component {
  state = {
    html: ''
  };

  constructor(props) {
    super(props);

    this.refArticle = React.createRef();

    this.formatArticleList();
    this.loadData();
  }

  // 监听路由，重新加载文章
  componentDidUpdate(prevProps) {
    const articleName = this.props.match.params.article;
    const prevArticleName = prevProps.match.params.article;

    if (articleName !== prevArticleName) {
      this.loadData();
    }
  }

  onRef = (name, ref) => {
    this[name] = ref;
  };

  formatArticleList = () => {
    this.props.docs.forEach(item => {
      if (typeof item === 'object' && item[1]) {
        content[`_${item[1]}`] = item[2];
      }
    });
  };

  loadData = async () => {
    utils.showLoading();

    try {
      const articleName = this.props.match.params.article;
      const html = await content[`_${articleName}`]();
      this.setState({ html: html.default }, () => {
        // 生成文章导航栏
        this.refArticle.current.scrollTop = 0;
        this.refArticleNav.generateNav(this.refArticle.current);
        this.initHighlight();
      });
    } catch (err) {
      console.log(err);
    }

    utils.hideLoading();
  };

  initHighlight = async () => {
    const hljs = await getHljs();

    document.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block);
    });
  };

  render() {
    const { html } = this.state;
    const { docs, nav } = this.props;

    return (
      <div className={styles.container}>
        <Header nav={nav} />

        <div className={styles.content}>
          <Sidebar docs={docs} />

          <div className={styles.article} id="articleWrapper" ref={this.refArticle}>
            <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>

          <ArticleNav onRef={this.onRef} />
        </div>

        <FootImg group={1} />
      </div>
    );
  }
}

export default Article;
