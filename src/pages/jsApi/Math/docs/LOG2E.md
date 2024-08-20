<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E" target="_blank">en</a>

# Math.LOG2E

## 概述

Math.LOG2E 属性表示以 2 为底数，e 的对数，约为 1.442：

## 描述

由于 LOG2E 是 Math 的静态属性，所以应该像这样使用：Math.LOG2E，而不是作为你创建的 Math 对象的属性（Math 不是一个构造函数）。

## 示例

下面的函数返回以 2 为底数，E 的对数：

```javascript
function getLog2e() {
   return Math.LOG2E
}

getLog2e() // 1.4426950408889634
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |