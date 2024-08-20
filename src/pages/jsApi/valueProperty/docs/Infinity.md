<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Infinity" target="_blank">en</a>

# Infinity

全局属性 Infinity 是一个数值，表示无穷大。

| 属性         |       |
|:------------|:-----|
| writable     | false |
| enumerable   | false |
| configurable | false |

## 1、语法

`Infinity`

## 2、描述

Infinity 是全局对象（`global object`）的一个属性，即它是一个全局变量。

Infinity 的初始值是 `Number.POSITIVE_INFINITY`。Infinity（正无穷大）大于任何值。该值和数学意义上的无穷大很像，例如任何正值乘以 Infinity 为
Infinity, 任何数值（除了Infinity 和 -Infinity）除以 Infinity 为 0。

在 `ECMAScript 5` 的规范中， Infinity 是只读的（实现于 JavaScript 1.8.5 / Firefox 4）。

## 3、示例

```javascript
console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */
```

## 4、规范

| Specification                           | Status   | Comment                           |
|:----------------------------------------|:---------|:----------------------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition JavaScript 1.3 |
| ECMAScript 5.1 (ECMA-262)               | Standard |                                   |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                                   |