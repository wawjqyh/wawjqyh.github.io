# 简单的 react 服务端渲染

react 服务端渲染，顾名思义就是让 react 在服务端运行，将渲染完的内容返回给浏览器，浏览器可以直接显示内容。可以理解为 react 的代码成为了后端代码，类似与模板引擎。下面通过一个很简单的例子讲解一下。

## 1 客户端渲染组件

首先写一个 react 组件，组件在客户端中是这么渲染的：

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
  render() {
    return (
      <div>
        <h1>react ssr</h1>
        <p>react 客户端渲染</p>
      </div>
    );
  }
}

// 客户端渲染使用 render 方法
// 这里是将虚拟 dom 转化为真实 dom 放到页面上
ReactDOM.render(<Index />, document.getElementById('root'));
```

## 2 服务端渲染组件

在服务端渲染也是类似的，react 提供了方法 ReactDOMServer 用于服务端渲染。下面是官网的文档：

> ReactDOMServer 对象允许你将组件渲染成静态标记。通常，它被使用在 Node 服务端上

```javascript
ReactDOMServer.renderToString(element);
```

> 将 React 元素渲染为初始 HTML。React 将返回一个 HTML 字符串。你可以使用此方法在服务端生成 HTML，并在首次请求时将标记下发，以加快页面加载速度，并允许搜索引擎爬取你的页面以达到 SEO 优化的目的。

下面是服务端渲染的写法：

```javascript
import React from 'react';
import { renderToString } from 'react-dom/server';
import Index from '../client/Index.jsx';

router.get('/', (ctx, next) => {
  // 这里是将虚拟 dom 转化为字符串
  const content = renderToString(<Index />);

  ctx.body = `
    <html>
      <head>
        <title>react srr</title>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
});
```

## 3 使用 webpack 编译服务端代码

这时服务器是启动不了的，因为：

- 代码中使用的是 ES Module 的语法，而 node.js 遵循的是 common.js 规范
- node.js 无法直接执行 JSX 代码

所以跟客户端一样，这时服务端的代码也需要使用 webpack 编译才能运行。

webpack 的配置如下(没有其他花里胡哨的功能，只做了基础的编译 js/jsx 的配置)：

```javascript
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',

  context: path.resolve(__dirname, '../'),
  entry: './server/router.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs'
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }],
            '@babel/preset-react'
          ]
        }
      }
    ]
  }
};
```
