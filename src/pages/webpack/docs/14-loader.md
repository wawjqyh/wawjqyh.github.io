# loader

[官方文档](https://webpack.docschina.org/api/loaders/)

## 1 基本使用

写一个 loader 将 'hello world' 替换成 'hello 啦啦啦'

```javascript
// loader 代码
// source 就是 webpack 读到的源文件
module.exports = function (source) {
  let _source = source.replace('world', '啦啦啦');
  return _source;
};
```

```javascript
// webpack 代码
module.exports = {
  mode: 'none',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: [path.resolve(__dirname, './loaders/replaceLoader.js')] // 使用 loader
      }
    ]
  }
};
```

## 2 使用配置

在 webpack 配置中增加 options 配置

```javascript
// webpack 配置
module.exports = {
  // ...

  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
            options: {
              name: '哈哈哈' // 增加配置项
            }
          }
        ]
      }
    ]
  }
};
```
 
```javascript
// loader
module.exports = function (source) {
  // 通过 this.query 接收 options 参数
  let _source = source.replace('world', this.query.name);
  return _source;
};
```

## 3 异步返回

在 loader 中有异步操作，使用 `this.async` 异步返回

```javascript
module.exports = function (source) {
  let callback = this.async();

  setTimeout(() => {
    let _source = source.replace('world', this.query.name);
    callback(_source);
  }, 1000);
};
```
