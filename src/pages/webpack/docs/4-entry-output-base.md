# entry output 简单使用

## 1 entry

指示 `webpack` 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，`webpack` 会找出有哪些模块和库是入口起点（直接和间接）依赖的模块

```javascript
module.exports = {
  entry: './index.js'
};
```

多个入口：多个入口的情况可能为多页面应用，或者业务代码与框架代码分开

```javascript
// 一个 chunk 包含多个文件，最后输出一个 bundle
module.exports = {
  entry: ['index.js', 'vendor.js']
};

// 多个 chunk
// key:value形式（推荐）
module.exports = {
  entry: {
    index: 'index.js',
    verder: 'vendor.js'
  }
};

module.exports = {
  entry: {
    index: ['index.js', 'app.js'],
    verder: 'vendor.js'
  }
};
```

## 2 output

`output` 属性告诉 `webpack` 在哪里输出它所创建的 `bundles`，以及如何命名这些文件，默认值为 `./dist`

```javascript
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.min.js'
  }
};

// 多个入口
// 多个入口一般会输出多个 bundle
module.exports = {
  entry: {
    index: 'index.js',
    verder: 'vendor.js'
  },

  // name即为entry的key值
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.[hash:5].js'
  }
};
```
