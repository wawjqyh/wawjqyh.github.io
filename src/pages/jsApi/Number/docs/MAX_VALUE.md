<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE" target="_blank">en</a>

# Number.MAX_VALUE

## 概述

Number.MAX_VALUE 属性表示在 JavaScript 里所能表示的最大数值。

Number.MAX_VALUE 属性的属性特性：

|             |       |
|:------------|:------|
|writable     | false |
|enumerable   | false |
|configurable | false |

## 描述

MAX_VALUE 属性值接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"。

因为 MAX_VALUE 是 Number 对象的一个静态属性，所有应该直接使用，Number.MAX_VALUE ，而不是作为一个创建的 Number 实例的属性。

## 示例

下面的代码求两个数值的乘积。如果结果小于等于 MAX_VALUE，则调用 func1 函数；否则，调用 func2 函数。

```javascript
if (num1 * num2 <= Number.MAX_VALUE) {
   func1();
} else {
   func2();
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |