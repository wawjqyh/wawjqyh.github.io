<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables" target="_blank">en</a>

# Array.prototype\[@@unscopables\]

Symbol属性 @@unscopable 包含了所有 ES2015 (ES6) 中新定义的且并未被更早的 ECMAScript 标准收纳的属性名。这些属性并不包含在 with 语句绑定的环境中

Array.prototype\[@@unscopables\] 属性的属性特性：

| 属性         |       |
|:-------------|:------|
| writable     | false |
| enumerable   | false |
| configurable | true  |

## 语法

`arr[Symbol.unscopables]`

## 描述

with 绑定中未包含的数组默认属性有：copyWithin, entries, fill, find, findIndex, includes, keys, 和 values。

查看 `Symbol.unscopables` 以了解如何给你定义的对象设置 unscopables

## 示例

以下的代码在ES5或更早的版本中能正常工作。然而 ECMAScript 2015 (ES6) 或之后的版本中新添加了 Array.prototype.keys() 这个方法。
这意味着在 with 语句的作用域，"keys"只能作为方法而不能作为某个变量。这正是内置的 @@unscopables 即 Array.prototype\[@@unscopables\]
symbol属性所要解决的问题：防止某些数组方法被添加到 with 语句的作用域内。

```javascript
var keys = [];

with(Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |