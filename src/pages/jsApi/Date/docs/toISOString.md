<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString" target="_blank">en</a>

# Date.prototype.toISOString()

## 概述

toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。

## 语法

```javascript
dateObj.toISOString()
```

## 例子

```javascript
var today = new Date("05 October 2011 14:48 UTC");
alert(today.toISOString()); // 返回2011-10-05T14:48:00.000Z
```

上例使用了非标准字符串的解析，该字符串在某些旧的浏览器（如IE）中可能无法被正确解析

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |