# 插件的简单使用

## 1 概念

插件目的在于解决 loader 无法实现的其他事

webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问

```javascript
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack 构建过程开始！');
    });
  }
}
```

## 2 处理 html

打包后的文件通常会改变文件名，比如加 hash 值，如何自动的将文件引入到 html 中呢

使用插件 `html-webpack-plugin`

### 2.1 基本使用

```javascript
plugins: [
  new htmlWebpackPlugin({
    filename: 'index-[hash].html', // 打包后的文件名字
    template: 'index.html', // 源文件的名字
    inject: 'head' // 页面引用文件的位置
  })
];
```

### 2.2 使用模版添加数据

html-webpack-plugin 支持 ejs 模板，可以在页面添加数据

```javascript
plugins: [
  new htmlWebpackPlugin({
    filename: 'index.html', //打包后的文件名字
    template: 'index.html', //源文件的名字
    inject: 'head', //页面引用文件的位置
    title: 'hello world'
  })
];
```

```html
<title><%= htmlWebpackPlugin.options.title %></title>
```
