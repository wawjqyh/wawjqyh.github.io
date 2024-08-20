<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours" target="_blank">en</a>

# Date.prototype.getHours()

## 概述

getHours() 方法根据本地时间，返回一个指定的日期对象的小时。

## 语法

```javascript
dateObj.getHours()
```

### 返回值

getHours返回一个0 到 23之间的整数值。

## 例子

下面第二条语句，基于日期对象 Xmas95 的值，把 23 赋值给了变量 hours

```javascript
var Xmas95 = new Date("December 25, 1995 23:15:00");
var hours = Xmas95.getHours();

alert(hours); // 23
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |