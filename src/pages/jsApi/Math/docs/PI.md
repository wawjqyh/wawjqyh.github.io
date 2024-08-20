<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/PI" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI" target="_blank">en</a>

# Math.PI

## 概述

Math.PI 表示一个圆的周长与直径的比例，约为 3.14159：

Math.PI=π≈3.14159

## 描述

由于 PI 是 Math 的静态属性，所以应该像这样使用：Math.PI，而不是作为你创建的 Math 实例的属性（Math 不是构造函数）。

## 示例

下面的函数使用 Math.PI 计算给定半径的圆周长：

```javascript
function calculateCircumference (radius) {
  return 2 * Math.PI * radius;
}

calculateCircumference(1);  // 6.283185307179586
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |