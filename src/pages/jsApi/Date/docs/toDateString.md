<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString" target="_blank">en</a>

# Date.prototype.toDateString()

## 概述

toDateString() 方法以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。

## 语法

```javascript
dateObj.toDateString()
```

## 描述

Date 对象实例引用一个具体的时间点。调用 toString 方法会以美式英语和人类易读的形式返回日期对象的格式化字符串。在 SpiderMonkey 里，
该字符串由日期部分（年月日）和其后的时间部分（时分秒及时区）组成。有时需要获取日期部分的字符串，这可以由 toDateString 方法完成。

The toDateString method is especially useful because compliant engines implementing ECMA-262 may differ in the string obtained
from toString for Date objects, as the format is implementation-dependent and simple string slicing approaches may not produce
consistent results across multiple engines.

## 例子

例子：toDateString 方法的简单使用

```javascript
var d = new Date(1993, 6, 28, 14, 39, 7);

println(d.toString());     // prints Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
println(d.toDateString()); // prints Wed Jul 28 1993
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |