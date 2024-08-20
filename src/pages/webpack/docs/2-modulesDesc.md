# 模块化开发

- js 模块化
- css 模块化

## 1 JS 模块化

JS 模块化主要有以下几种方式：

- 命名空间
- commonJS
- AMD/CMD/UMD
- ES6 module

### 1.1 命名空间

`库名.类别名.方法名`

- 命名空间被覆盖检测不到
- 需要记住完整的路径名
- 团队协作时约定好命名空间

```javascript
var NameSpace = {};

NameSpace.type = NameSpace.type || {};
NameSpace.type.method = function() {};
```

YUI 框架

```javascript
// YUI
YUI.add(
  'davglass',
  function(Y) {
    Y.dvaglass = function() {
      Y.log('233');
    };
  },
  '3.4.0',
  {
    requires: ['harley-davidson', 'mt-dev']
  }
);

YUI().use('davglass', function(Y) {
  Y.davglass();
});

// appllyConfig
YUI.applyConfig({
  modules: {
    davglass: {
      fullpath: './davglass.js'
    }
  }
});

YUI().use('davglass', function(Y) {
  Y.davglass();
});
```

### 1.2 CommonJS

node.js 就是采用 CommonJS 规范

CommonJS 的特征：

- 一个文件为一个模块
- 通过 module.exports 暴露模块接口
- 通过 require 引入模块
- 同步加载模块

```javascript
var Route = require('./router.js');

var test = 233;

module.exports = test;
```

### 1.3 AMD

AMD 即 async module definition(异步模块定义)，AMD 和 CommonJS 都是为了模块化

不同点是 AMD 规范则是非同步加载模块，允许指定回调函数。CommonJS 规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作

RequireJS 库使用的就是 AMD 规范

AMD 规范特征：

- async module definition(异步模块定义)
- 使用 define 定义模块
- 使用 require 加载模块
- RequireJS 库
- 依赖前置，提前执行

```javascript
// 模块名 依赖 模块输出
define('alpha', ['require', 'exports', 'beta'], function(require, exports, beta) {
  exports.verb = function() {
    return beta.verb();

    // 或者
    return require('beta').verb();
  };
});
```

### 1.4 CMD

CMD (Common Module Definition), 是 SeaJS 推崇的规范，CMD 则是依赖就近，用的时候再 require

CMD 规范特征：

- common module definition(通用模块定义)
- 一个文件为一个模块
- 使用 define 定义模块
- 使用 require 加载模块
- SeaJS 库
- 特点：尽可能懒执行

> AMD 和 CMD 区别：执行方式不一样。AMD 编译时会把依赖的模块前置。CMD require 的模块会被下载下来，但是不会被执行，直到代码逻辑执行到那个地方时才会被执行

```javascript
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
  // 通过 require 引入依赖
  var $ = require('jquery');
  var Spinning = require('./spinning');

  // 通过 exports 对外体统接口
  exprots.doSomething = 233;

  // 或者通过 module.exports 提供整个接口
  module.exorts = 233;
});
```

### 1.5 UMD

- universal module definition (通用解决方案)
- 三个步骤
  - 判断是否支持 AMD
  - 判断是否支持 CommonJS
  - 如果都不支持则使用全局变量

```javascript
(function(root, factory) {
  // 判断是否为 AMD
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  }

  // 判断是否为node环境，即是否为CommonJS
  else if (typeof exports === 'object') {
    module.exports = factory();
  }

  // 使用全局变量
  else {
    // root 即为 window
    root.returnExports = factory();
  }
})(this, function() {
  return {};
});
```

### 1.6 ESM

ES6 模块化规范

- ECMAScript Module
- 一个文件为一个模块
- export / import 暴露引入模块

## 2 webpack 支持

- AMD(RequireJS)
- ES Modules (推荐)
- CommonJS

目前主流的方式为 ES Modules 和 CommonJS，现在 webpack 原生支持 es6 的模块化语法，不需要 babel

## 3 CSS 模块化

css 设计模式

- OOCSS
- SMACSS
- Atomic CSS
- MCSS
- AMCSS
- BEM
