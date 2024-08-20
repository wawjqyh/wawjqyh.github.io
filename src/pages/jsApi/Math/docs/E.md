<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/E" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E" target="_blank">en</a>

# Math.E

## 概述

Math.E 属性表示自然对数的底数（或称为基数），e，约等于 2.718。

Math.E=e≈2.718

## 描述

由于 E 是 Math 对象的静态属性，所以应该像这样使用：Math.E，而不是作为你创建的 Math 实例对象的属性（Math 不是构造函数）。

## 示例

下面的函数返回 e：

```javascript
function getNapier() {
   return Math.E
}

getNapier() // 2.718281828459045
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |