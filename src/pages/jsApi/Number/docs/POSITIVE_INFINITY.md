<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY" target="_blank">en</a>

# Number.POSITIVE_INFINITY

## 概述

Number.POSITIVE_INFINITY 属性表示正无穷大。

不必创建一个 Number 实例，可使用 Number.POSITIVE_INFINITY 来访问该静态属性。

Number.POSITIVE_INFINITY 属性的属性特性：

|             |       |
|:------------|:------|
|writable     | false |
|enumerable   | false |
|configurable | false |

## 描述

Number.POSITIVE_INFINITY 的值同全局对象 Infinity 属性的值相同。

该值的表现同数学上的无穷大有点儿不同：

* 任何正值，包括 POSITIVE_INFINITY，乘以 POSITIVE_INFINITY 为 POSITIVE_INFINITY。
* 任何负值，包括 NEGATIVE_INFINITY，乘以 POSITIVE_INFINITY 为 NEGATIVE_INFINITY。
* 0 乘以 POSITIVE_INFINITY 为 NaN。
* NaN 乘以 POSITIVE_INFINITY 为 NaN。
* POSITIVE_INFINITY 除以 NEGATIVE_INFINITY 以外的任何负值为 NEGATIVE_INFINITY。
* POSITIVE_INFINITY 除以 POSITIVE_INFINITY 以外的任何正值为 POSITIVE_INFINITY。
* POSITIVE_INFINITY 除以 NEGATIVE_INFINITY 或 POSITIVE_INFINITY 为 NaN。
* 任何数除以 POSITIVE_INFINITY 为 0。

You might use the Number.POSITIVE_INFINITY property to indicate an error condition that returns a finite number in case
of success. Note, however, that isFinite would be more appropriate in such a case.

## 示例

下例中，赋值给变量 bigNumber 一个大于 JavaScript 中最大值的值。当 if 语句执行时，变量 bigNumber 值为 "Infinity"， 因此在继续执行代码前，为变量 bigNumber 设置一个容易管理的值。

```javascript
var bigNumber = Number.MAX_VALUE * 2
if (bigNumber == Number.POSITIVE_INFINITY) {
    bigNumber = returnFinite();
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |