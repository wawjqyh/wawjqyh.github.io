<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf" target="_blank">en</a>

# String.prototype.valueOf()

valueOf() 方法返回一个String对象的原始值（primitive value）。

## 语法

```javascript
str.valueOf()
```

## 描述

String 对象的 valueOf 方法返回一个String对象的原始值。该值等同于String.prototype.toString()。

该方法通常在 JavaScript 内部被调用，而不是在代码里显示调用。

## 示例

```javascript
x = new String("Hello world");
alert(x.valueOf())          // Displays "Hello world"
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |