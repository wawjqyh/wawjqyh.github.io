<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes" target="_blank">en</a>

# Date.prototype.getMinutes()

## 概述

getMinutes() 方法根据本地时间，返回一个指定的日期对象的分钟数。

## 语法

```javascript
dateObj.getMinutes()
```

## 描述

getMinutes 返回一个0 到 59的整数值。

## 例子

下例中，第二行语句运行过后，变量 minutes 的值为15，也就是说 Xmas95 这个日期对象的值为某时15分某秒。

```javascript
var Xmas95 = new Date("December 25, 1995 23:15:00");
var minutes = Xmas95.getMinutes();
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |