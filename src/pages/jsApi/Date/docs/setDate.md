<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate" target="_blank">en</a>

# Date.prototype.setDate()

## 概述

setDate() 方法根据本地时间来指定一个日期对象的天数。

## 语法

```javascript
dateObj.setDate(dayValue)
```

### 参数

* `dayValue` 一个整数，表示该月的第几天

## 描述

如果 dayValue 超出了月份的合理范围，setDate 将会相应地更新 Date 对象。例如，如果为 dayValue 指定0，那么日期就会被设置为上个月的最后一天

## 例子

例子：使用setDate方法

```javascript
var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24);  // 1962-07-24
theBigDay.setDate(32);  // 1962-08-01
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |