<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER" target="_blank">en</a>

# Number.MAX_SAFE_INTEGER

Number.MAX_SAFE_INTEGER 常量表示在 JavaScript 中最大的安全整数（maxinum safe integer)（253 - 1）。

Number.MAX_SAFE_INTEGER 属性的属性特性：

|             |       |
|:------------|:------|
|writable     | false |
|enumerable   | false |
|configurable | false |

## 描述

MAX_SAFE_INTEGER 常量值为 9007199254740991。这个数字形成的原因是，Javascript 使用 IEEE 754 中规定的 double-precision
floating-point format numbers，在这个规定中能安全的表示数字的范围在 -(253 - 1) 到 253 - 1 之间，包含 -(253 - 1) 和 253 - 1。

安全（Safe）在本文中的提到的意思是指能够准确地表示整数和正确地比较整数。例如 Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2
将返回 true。这在数学上并不正确。参见Number.isSafeInteger()获取更多信息.

由于 MAX_SAFE_INTEGER 是Number的一个静态属性，所以你可以直接使用Number.MAX_SAFE_INTEGER，而不用自己创建一个Number对象的属性。

## 示例

```javascript
Number.MAX_SAFE_INTEGER // 9007199254740991
Math.pow(2, 53) - 1     // 9007199254740991
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |