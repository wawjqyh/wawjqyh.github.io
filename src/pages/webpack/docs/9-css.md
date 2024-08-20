# 处理 css

## 1 基本使用

项目中通常是在 js 中引入 css 的，需要配置响应的 loader 才能处理响应的样式文件，并且提取 css 成单独的文件

- style-loader 在页面中创建 style 标签并且将 css 创建到 html 中
- css-loader 让 js 可以 import css
- 需要注意 loader 的先后顺序

```javascript
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    }
  ];
}
```

## 2 css-loader

css-loader 让 webpack 支持打包 css

**options：**

- `alias` 解析的别名
- `importLoader` css-loader 后面是否还有其他的 loader
- `minimize` 是否压缩
- `modules` 是否启用 css 模块化

## 3 style-loader

style-loader 可以将打包后的 css 注入到页面中

**useable 可手动将 css 插入到页面中**

```javascript
// webpack 配置
loader: 'style-loader/useable';

// 使用
import style from './css/styles.css';

style.use(); // 会将css动态插入到页面中
style.unuse(); // 会将这个css从页面删除
```

**options：**

- `insertAt` 插入位置(header,body)
- `insertInto` 插入到某个 dom
- `singleton` 是否只使用一个 style 标签

```javascript
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
          // 配置
          options: {
            insertAt: 'header',
            insertInto: '#app',
            singleton: true
          }
        },
        {
          loader: 'css-loader'
        }
      ]
    }
  ];
}
```

## 4 less-loader

加一个 rule 匹配 less 文件，注意：使用 less-loader 需要同时安装 less 这个包

```javascript
module: {
  rules: [
    {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' }, //
        { loader: 'css-loader' },
        { loader: 'less-loader' }
      ]
    }
  ];
}
```

## 5 提取 css 到单独的文件

使用 MiniCssExtractPlugin

[文档](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)

### 5.1 基本使用

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // 类似于 webpackOptions.output 中的选项
      // 所有选项都是可选的
      filename: '[name].[chunkhash:5].css',
      chunkFilename: '[name].[chunkhash:5].css'
    })
  ], // 使用插件

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 你可以在这里指定特定的 publicPath
              // 默认情况下使用 webpackOptions.output 中的 publicPath
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      }
    ]
  }
};
```

### 5.2 提取所有 css 到一个文件

使用 optimization.splitChunks.cacheGroups 选项，所有的 CSS 可以被提取到一个 CSS 文件中

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
};
```

## 6 压缩 css

使用插件 `optimize-css-assets-webpack-plugin`

```javascript
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  // ...
  optimization: {
    minimizer: [new OptimizeCssPlugin({})]
    // ...
  }
};
```
