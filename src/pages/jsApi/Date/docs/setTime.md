<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime" target="_blank">en</a>

# Date.prototype.setTime()

## 概述

setTime() 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。

## 语法

```javascript
dateObj.setTime(timeValue)
```

### 参数

* `timeValue` 一个整数，表示从1970-1-1 00:00:00 UTC开始计时的毫秒数

## 描述

使用 setTime 方法用来把一个日期时间赋值给另一个 Date 对象

## 例子

```javascript
theBigDay = new Date("July 1, 1999");
sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |