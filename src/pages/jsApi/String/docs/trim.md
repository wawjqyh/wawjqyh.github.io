<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trim" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim" target="_blank">en</a>

# String.prototype.trim()

trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等)
以及所有行终止符字符（如 LF，CR）。

## 语法

```javascript
str.trim()
```

## 描述

trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。

## 例子

下面的例子中将显示小写的字符串 'foo':

```javascript
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// 另一个.trim()例子，只从一边删除

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |