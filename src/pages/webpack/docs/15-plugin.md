# plugin

[官方文档](https://webpack.docschina.org/api/plugins/)

[compiler hooks](https://webpack.docschina.org/api/compiler-hooks/)

[compilation hooks](https://webpack.docschina.org/api/compilation-hooks/)

## 1 plugin 的写法

关于插件：

- 插件是一个类
- 调用插件时会执行一个 apply 方法，插件需要执行的逻辑放在 apply 方法里面

关于 compiler :

- compiler 可以理解为 webpack 的实例
- compiler 存放了所有的 webpack 配置，包括打包的所有内容
- compilation 存放了本次打包的相关内容

hooks :

- hooks 就是 webpack 在打包的各个生命周期执行的钩子

下面插件的功能是：打包后生成自动一个 copyright 文件

```javascript
class CopyrightWebpackPlugin {
  constructor(options) {
    // options 插件的一些参数
    console.log(options);
  }

  apply(compiler) {
    // emit: 输出 asset 到 output 目录之前执行
    // tapAsync 表示是一个异步方法，有一个回调，需要手动调 cb
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
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

## 2 调试工具

开发插件的时候经常需要调试代码，调试代码需要使用到 node 的调试工具

执行 webpack 时使用如下命令：

```
node --inspect --inspect-brk node_modules/webpack/bin/webpack.js
```

`node node_modules/webpack/bin/webpack.js` 这个是显式的用 node 运行 webpack，和直接使用 `webpack` 效果一样

用 node 执行可以增加一些参数

- `--inspect` 表示开启 node 调试工具
- `--inspect-brk` 表示运行时在第一行打断点

开启 node 调试工具后，打开 chrome 可以对 node 进行调试，浏览器会增加一个 node 图标
