<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds" target="_blank">en</a>

# Date.prototype.getSeconds()

## 概述

getSeconds() 方法根据本地时间，返回一个指定的日期对象的秒数。

## 语法

```javascript
dateObj.getSeconds()
```

## 描述

该方法返回一个 0 到 59 的整数值。

## 例子

下面第二条语句，基于日期对象 Xmas95 的值，把 30 赋值给变量 secs

```javascript
var Xmas95 = new Date("December 25, 1995 23:15:30");
var secs = Xmas95.getSeconds();
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |