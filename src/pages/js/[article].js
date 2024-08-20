import React, { Component } from 'react';
import Article from '@/components/Article';
import catalogue from './_catalogue.js';

class Main extends Component {
  render() {
    return <Article docs={catalogue} nav={[{ name: 'JavaScript 基础知识' }]} />;
  }
}

export default Main;
