<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear" target="_blank">en</a>

# Date.prototype.setFullYear()

## 概述

setFullYear() 方法根据本地时间为一个日期对象设置年份。

## 语法

```javascript
dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
```

### 参数

* `yearValue` 指定年份的整数值，例如1995
* `monthValue` 一个0到11之间的整数值，表示从一月到十二月
* `dayValue` 一个1到31之间的整数值，表示月份中的第几天。如果你指定了 dayValue 参数，就必须同时指定 monthValue

## 描述

如果没有指定 monthValue 和dayValue 参数，将会使用 getMonth 和getDate 方法的返回值。

如果有一个参数超出了合理的范围，setFullYear 方法会更新其他参数值，日期对象的日期值也会被相应更新。 例如，为 monthValue 指定 15， 则年份会加1，月份值会为3。

## 例子

例子：使用setFullYear方法

```javascript
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |