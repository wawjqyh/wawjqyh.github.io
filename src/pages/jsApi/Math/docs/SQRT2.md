<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT2" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT2" target="_blank">en</a>

# Math.SQRT2

## 概述

Math.SQRT2 属性表示 2 的平方根，约为 1.414：

## 描述

由于 SQRT2 是 Math 的静态属性，所以应该像这样使用：Math.SQRT2，而不是作为你创建的 Math 实例的属性（Math 不是构造函数）。

## 示例

下面的函数返回 2 的平方根：

```javascript
function getRoot2() {
   return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |