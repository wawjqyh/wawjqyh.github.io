<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG10E" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG10E" target="_blank">en</a>

# Math.LOG10E

## 概述

Math.LOG10E 属性表示以 10 为底数，e 的对数，约为 0.434：

Math.LOG10E=log10(e)≈0.434

## 描述

由于 LOG10E 是 Math 的静态属性，所以应该像这样使用：Math.LOG10E，而不是作为你创建的 Math 实例的属性（Math 不是一个构造函数）。

## 示例

下面的函数返回以 10为底数，E的对数：

```javascript
function getLog10e() {
   return Math.LOG10E
}

getLog10e() // 0.4342944819032518
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |