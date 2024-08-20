<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt" target="_blank">en</a>

# Number.parseInt()

## 概述

Number.parseInt() 方法可以根据给定的进制数把一个字符串解析成整数。

## 语法

```javascript
Number.parseInt(string[, radix])
```

### 参数

* `string` 被解析的值。如果不是一个字符串，则将其转换为字符串。字符串开头的空白符将会被忽略。
* `radix` 一个整数值，指定转换中采用的基数。总是指定该参数可以保证结果可预测。当忽略该参数时，不同的实现环境可能产生不同的结果。

## 描述

该方法和全局的 parseInt() 函数是同一个函数：

```javascript
Number.parseInt === parseInt; // true
```

请移步全局函数 parseInt() 页面查看更多的解释和示例。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |