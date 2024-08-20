<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2" target="_blank">en</a>

# Math.LN2

## 概述

Math.LN2 属性表示 2 的自然对数，约为 0.693：

Math.LN2=ln(2)≈0.693

## 描述

由于 LN2 是 Math 的静态属性，所以应该像这样使用：Math.LN2，而不是作为你创建的 Math 实例的属性（Math 不是构造函数）。

## 示例

下面的函数返回 2 的自然对数：

```javascript
function getNatLog2() {
   return Math.LN2
}

getNatLog2() // 0.6931471805599453
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |