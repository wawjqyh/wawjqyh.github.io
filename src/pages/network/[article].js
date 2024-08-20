import React, { Component } from 'react';
import Article from '@/components/Article';
import catalogue from './_catalogue.js';

class Main extends Component {
  render() {
    return <Article docs={catalogue} nav={[{ name: '计算机网络' }]} />;
  }
}

export default Main;
