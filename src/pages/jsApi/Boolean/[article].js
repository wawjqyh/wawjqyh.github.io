import React, { Component } from 'react';
import Article from '@/components/Article';
import catalogue from './_catalogue.js';

class Main extends Component {
  render() {
    return (
      <Article
        docs={catalogue}
        nav={[{ name: 'JS API 目录', url: '/jsApi' }, { name: '基本对象 Boolean' }]}
      />
    );
  }
}

export default Main;