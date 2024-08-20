import React, { Component } from 'react';
import Article from '@/components/Article';
import catalogue from './_catalogue.js';

class Main extends Component {
  render() {
    return <Article docs={catalogue} nav={[{ name: '计划' }]} />;
  }
}

export default Main;
