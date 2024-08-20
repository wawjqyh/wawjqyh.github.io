<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf" target="_blank">en</a>

# Number.prototype.valueOf()

## 概述

valueOf() 方法返回一个被 Number 对象包装的原始值。

## 语法

```javascript
numObj.valueOf()
```

## 描述

该方法通常是由 JavaScript 引擎在内部隐式调用的，而不是由用户在代码中显式调用的。

## 示例

```javascript
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |