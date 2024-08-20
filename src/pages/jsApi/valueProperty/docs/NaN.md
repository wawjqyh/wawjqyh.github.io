<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN" target="_blank">en</a>

# NaN

全局属性 NaN 表示 Not-A-Number 的值。

| 属性         |       |
|:------------|:-----|
| writable     | false |
| enumerable   | false |
| configurable | false |

## 1、语法

`NaN`

## 2、描述

NaN 是一个全局对象的属性。

NaN 属性的初始值就是 `NaN`，和 `Number.NaN` 的值一样。在现代浏览器中（`ES5`中）， NaN 属性是一个不可配置（`non-configurable`），
不可写（`non-writable`）的属性。但在`ES3`中，这个属性的值是可以被更改的，但是也应该避免覆盖。

在编码很少直接使用到 NaN。通常都是在计算失败时，作为 `Math` 的某个方法的返回值出现的（例如：Math.sqrt(-1)）或者尝试将一个字符串解析成数字但失败了的时候（例如：parseInt("blabla")）。

### (1) 判断一个值是否是NaN

等号运算符（== 和 ===） 不能被用来判断一个值是否是 NaN。必须使用 `Number.isNaN()` 或 `isNaN()` 函数。在执行自比较之中：NaN，也只有NaN，比较之中不等于它自己。

```javascript
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
```

## 3、规范

| Specification                           | Status   | Comment                           |
|:-----------------------------------|:--------|:------------------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition JavaScript 1.3 |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |