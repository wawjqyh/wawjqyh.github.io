<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay" target="_blank">en</a>

# Date.prototype.getDay()

## 概述

getDay() 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。

## 语法

```javascript
dateObj.getDay()
```

### 返回值

getDay() 返回一个整数值： 0 代表星期日， 1 代表星期一，2 代表星期二， 依次类推。

## 例子

下面第二条语句，基于日期对象 Xmas95 的值，把 1 赋值给 weekday。也就是说1995年12月25日是星期一。

```javascript
var Xmas95 = new Date("December 25, 1995 23:15:00");
var weekday = Xmas95.getDay();

alert(weekday); // 1
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |