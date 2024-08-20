<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString" target="_blank">en</a>

# Function.prototype.toString()

## 概述

该 toString() 方法返回一个表示当前函数源代码的字符串。

## 语法

```javascript
function.toString(indentation)
```

## 描述

Function 对象覆盖了从 Object 继承来的 Object.prototype.toString 方法。函数的 toString 方法会返回一个表示函数源代码的字符串。
具体来说，包括 function关键字，形参列表，大括号，以及函数体中的内容。

在函数需要转换为字符串时，通常会自动调用函数的 toString 方法。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |