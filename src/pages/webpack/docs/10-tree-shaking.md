# Tree Shaking

[中文文档](https://webpack.docschina.org/guides/tree-shaking/)

Tree Shaking 就是删除 js 中未引用的代码

## 1 使用条件

- 使用 ES2015 模块语法 (即 import 和 export)
- 确保没有编译器将代码中的 ES2015 语法转换为 CommonJS 的语法 (需求注意，@babel/preset-env 默认开启了转换)
- mode 需要设为 production，development 默认不开启

## 2 配置

```javascript
module.exports = {
  optimization: {
    usedExports: true
  }
};
```

> mode 为 production 时不需要做上面的配置，production 默认开启了 tree shaking

## 3 sideEffects

忽略配置的文件，不对这些文件做 tree shaking

在 `package.json` 中配置，如：

```javascript
"sideEffects": [
  "**/*.css",
  "**/*.scss",
  "./esnext/index.js",
  "./esnext/configure.js"
]
```
