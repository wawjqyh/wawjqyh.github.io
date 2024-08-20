<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE" target="_blank">en</a>

# Number.MIN_VALUE

## 概述

Number.MIN_VALUE 属性表示在 JavaScript 中所能表示的最小的正值。

Number.MIN_VALUE 属性的属性特性：

|             |       |
|:------------|:------|
|writable     | false |
|enumerable   | false |
|configurable | false |

## 描述

MIN_VALUE 属性是 JavaScript 里最接近 0 的正值，而不是最小的负值。

MIN_VALUE 的值约为 5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。

因为 MIN_VALUE 是 Number 的一个静态属性，因此应该直接使用： Number.MIN_VALUE， 而不是作为一个创建的 Number 实例的属性。

## 示例

下面的代码里两个数值相除。如果结果大于或等于 MIN_VALUE，则调用 func1 函数；否则，调用 func2 函数。

```javascript
if (num1 / num2 >= Number.MIN_VALUE) {
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