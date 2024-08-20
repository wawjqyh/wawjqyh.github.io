# 工程化

## 1 模块化机制

### 1.1 知识点

**什么是模块：**

- 将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起
- 块的内部数据与实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信

**前端模块化机制：**

- ES6 模块，目前最流行，主流浏览器和 nodejs 都支持
- CommonJS，为 Node.js 服务器创建的模块系统
- UMD，通用的模块系统，兼容多种模块化方式

### 题目：前端模块化机制有哪些

## 2 tree shaking

**tree shaking 是什么：**

`Tree Shaking` 就是删除 `js` 中未引用的代码

**tree shaking 怎么用：**

1. 使用 `ES2015` 模块语法 (即 `import` 和 `export`)
2. `mode` 需要设为 `production`，`development` 默认不开启

```js
module.exports = {
  optimization: {
    usedExports: true // 开启 tree shaking
  }
};
```

**tree shaking 原理：**

- `tree-shaking` 的消除原理是依赖于 `ES6` 的模块特性
- `ES6` 模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是 `tree-shaking` 的基础

### 题目：tree shaking 是什么，有什么作用，原理是什么

## 3 uglify 原理

**uglify 的作用：**

- 压缩和混淆 JS 代码
- 删除无意义的、不可达的代码
- 将变量名和函数名替换成更端的字符

**uglify 如何使用：**

配置 `optimization.minimizer`

```js
// v4 需要配置，v5 自带了
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
};
```

**uglify 原理：**

1. 将代码转换成抽象语法树 `AST`，`AST` 就是一棵 `对象树`，用来表示代码的语法结构
2. 将抽象语法树进行优化，生成一个更小的树
3. 将新生成的抽象语法树再转化成代码

> babel，eslint，v8 的逻辑均与此类似

### 题目：uglify 原理的是什么

## 4 babel 原理

**babel 是什么：**

`babel` 一种 `javascript` 编译器，把最新版的 `javascript` 编译成当下可以执行的版本

而且 `Babel` 除了支持最新的 `JavaScript` 规范语法, 还支持 `JSX`、`Flow`、现在还有 `Typescript`

**babel 如何使用：**

- `@babel/preset-env` 支持哪个版本的 `JS`
- `@babel/polyfill` `preset` 只能编译新规范的语法，但是不能编译函数和方法。`es6` 新增的函数和方法低版本的浏览器还是不能识别，需要使用 `polyfill`
- `transform-runtime` polyfill 会污染全局，以闭包的方式注入，不会污染全局
- `targets` 可以设定支持哪些浏览器，编译时会根据浏览器的支持情况，编译成能执行的代码

**babel 原理：**

1. **源码解析：** 将代码转换成抽象语法树 `AST`，`AST` 就是一棵 `对象树`，用来表示代码的语法结构
2. **转换：** 转换阶段会对 `AST` 进行遍历，在这个过程中对节点进行增删查改
3. **转回代码：** 把 `AST` 转换回字符串形式的 `Javascript`，同时这个阶段还会生成 `Source Map`

### 题目：babel 是什么，怎么做到的

## 5 webpack 工作流程

1. **初始化参数：** 从配置文件和 `shell` 语句中读到的参数合并，得到最后的参数
1. **开始编译：** 用合并得到的参数初始化 `complier` 对象，加载是所有配置的插件，执行 `run` 方法开始编译
1. **确定入口：** 通过 `entry` 找到入口文件
1. **编译模块：** 从入口文件出发，调用所有配置的 `loader` 对模块进行解析翻译，在找到该模块依赖的模块进行处理
1. **完成模块编译：** 得到每个模块被翻译之后的最终的内容和依赖关系
1. **输出资源：** 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 `chunk`，在把每个 `chunk` 转换成一个单独的文件加载到输出列表
1. **输出完成：** 确定输出的路径和文件名，把内容写到文件系统中

### 题目：webpack 工作流程是怎样的

## 6 webpack 插件机制

**关于插件：**

- 插件是一个类
- 调用插件时会执行一个 `apply` 方法，插件需要执行的逻辑放在 `apply` 方法里面

**关于 compiler :**

- `compiler` 可以理解为 `webpack` 的实例
- `compiler` 存放了所有的 `webpack` 配置，包括打包的所有内容
- `compilation` 存放了本次打包的相关内容

**hooks :**

- `hooks` 就是 `webpack` 在打包的各个生命周期执行的钩子

下面插件的功能是：打包后生成自动一个 `copyright` 文件

```js
class CopyrightWebpackPlugin {
  constructor(options) {
    // options 插件的一些参数
    console.log(options);
  }

  apply(compiler) {
    // emit: 输出 asset 到 output 目录之前执行
    // tapAsync 表示是一个异步方法，有一个回调，需要手动调 cb
    compiler.hooks.emit.tapAsync('afterCompile', (compilation, cb) => {
      compilation.assets['copyright.txt'] = {
        source() {
          return 'this is a copyright';
        },
        size() {
          return 19;
        }
      };

      cb();
    });
  }
}
```

**webpack 生命周期：**

1. **compile：** 开始进入编译环境，开始编译
1. **compilation：** 即将产生第一个版本
1. **make：** 任务开始
1. **optimize：** 作为 compilation 的回调方法，优化编译，在 compilation 回调函数中可以为每一个新的编译绑定回调
1. **after-compile：** 编译完成
1. **emit：** 准备生成文件，开始释放生成的资源，最后一次添加资源到资源集合的机会
1. **after-emit：** 文件生成之后，编译器释放资源

### 题目：是否有写过 webpack 插件

## 7 webpack loader 机制

**loader 是什么：**

- 能转换各类资源，并处理成对应模块的加载器。让 `JS` 能够 `import` 任何类型的资源
- `loader` 本质上是一个函数，输入参数是一个字符串，输出参数也是一个字符串。当然，输出的参数会被当成是 `JS` 代码，从而被 `esprima` 解析成 `AST`，触发进一步的依赖解析

```js
// loader 代码
// source 就是 webpack 读到的源文件
module.exports = function(source) {
  let _source = source.replace('world', '啦啦啦');
  return _source;
};
```

### 题目：谈下 webpack loader 机制

## 8 webpack 相关的一些概念

- **loader：** 能转换各类资源，并处理成对应模块的加载器。`loader` 间可以串行使用。
- **chunk：** `code splitting` 后的产物，也就是按需加载的分块，装载了不同的 `module`

## 9 前端微服务

**什么是微前端：**

微前端架构具备以下几个核心价值：

1. **技术栈无关：** 主框架不限制接入应用的技术栈，子应用具备完全自主权
1. **独立开发、独立部署：** 子应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新
1. **增量升级：** 在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略
1. **独立运行时：** 每个子应用之间状态隔离，运行时状态不共享
