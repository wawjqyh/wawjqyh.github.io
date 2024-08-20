<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY" target="_blank">en</a>

# Number.NEGATIVE_INFINITY

## 概述

Number.NEGATIVE_INFINITY 属性表示负无穷大。

不用创建一个 Number 实例，使用 Number.NEGATIVE_INFINITY 来访问该静态属性。

Number.NEGATIVE_INFINITY 属性的属性特性：

|             |       |
|:------------|:------|
|writable     | false |
|enumerable   | false |
|configurable | false |

## 描述

Number.NEGATIVE_INFINITY 的值和全局对象的 Infinity 属性的负值相同。

该值的行为同数学上的无穷大（infinity）有一点儿不同：

* 任何正值，包括 POSITIVE_INFINITY，乘以 NEGATIVE_INFINITY 为 NEGATIVE_INFINITY。
* 任何负值，包括 NEGATIVE_INFINITY，乘以 NEGATIVE_INFINITY 为 POSITIVE_INFINITY。
* 0 乘以 NEGATIVE_INFINITY 为 NaN.
* NaN 乘以 NEGATIVE_INFINITY 为 NaN.
* NEGATIVE_INFINITY 除以任何负值（除了 NEGATIVE_INFINITY）为 POSITIVE_INFINITY。
* NEGATIVE_INFINITY 除以任何正值（除了 POSITIVE_INFINITY）为 NEGATIVE_INFINITY。
* NEGATIVE_INFINITY 除以 NEGATIVE_INFINITY 或 POSITIVE_INFINITY 是 NaN。
* 任何数除以 NEGATIVE_INFINITY 为 0。

为了成功返回一个有限值，你可能会使用 Number.NEGATIVE_INFINITY 属性来判断是否显示一个条件错误 。然而 isFinite 方法更适合这种情况。

## 示例

下例中，赋值给变量 smallNumber 一个明显小于 JavaScript 中的最小值的值。当 if 语句执行时，smallNumber 值为 "-Infinity"，
因此在继续执行代码前，smallNumber 被设为一个更容易管理的值。

```javascript
var smallNumber = (-Number.MAX_VALUE) * 2

if (smallNumber == Number.NEGATIVE_INFINITY) {
 smallNumber = returnFinite();
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |