<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate" target="_blank">en</a>

# Date.prototype.getDate()

## 概述

根据本地时间，返回一个指定的日期对象为一个月中的第几天。

## 语法

```javascript
dateObj.getDate()
```

## 描述

getDate() 返回一个1 到 31的整数值。

## 例子

下面第二条语句将值25赋给 day 变量，该值基于日期对象 Xmax95的值

```javascript
var Xmas95 = new Date("December 25, 1995 23:15:00");
var day = Xmas95.getDate();

alert(day); // 25
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |