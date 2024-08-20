<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes" target="_blank">en</a>

# String.prototype.includes()

includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。

## 语法

```javascript
str.includes(searchString, position)
```

### 参数

* `searchString` 要在此字符串中搜索的字符串
* `position 可选` 从当前字符串的哪个索引位置开始搜寻子字符串；默认值为0

### 返回值

如果当前字符串包含被搜寻的字符串，就返回true；否则，返回false。

## 描述

这个方法可以帮你判断一个字符串是否包含另外一个字符串。

### 区分大小写

includes() 方法是区分大小写的。例如，下面的表达式会返回 false ：

```javascript
'Blue Whale'.includes('blue'); // returns false
```

## 示例

```javascript
var str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
```

## 填充

这个方法已经被加入到 ECMAScript 6 标准中，但未必在所有的 JavaScript 实现中都可以使用。然而，你可以轻松地polyfill这个方法：

```javascript
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |