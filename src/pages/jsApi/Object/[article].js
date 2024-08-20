import React, { Component } from 'react';
import Article from '@/components/Article';
import catalogue from './_catalogue.js';

class Main extends Component {
  render() {
    return (
      <Article
        docs={catalogue}
        nav={[
          { name: 'JS API 目录', url: '/jsApi' },
          { name: 'Object 目录', url: '/jsApi/Object' },
          { name: '基本对象 Object' }
        ]}
      />
    );
  }
}

export default Main;
