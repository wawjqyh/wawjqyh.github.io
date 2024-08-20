<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth" target="_blank">en</a>

# Date.prototype.setMonth()

## 概述

setMonth() 方法根据本地时间为一个日期对象设置月份。

## 语法

```javascript
dateObj.setMonth(monthValue[, dayValue])

//JavaScript 1.3版本之前
dateObj.setMonth(monthValue)
```

### 参数

* `monthValue` 介于 0 到 11 之间的整数（表示一月到十二月）。
* `dayValue` 从 1 到 31 之间的整数，表示月份中的第几天。

## 描述

如果不指定 dayValue 参数，就会使用 getDate 方法的返回值。

如果有一个指定的参数超出了合理范围，setMonth 会相应地更新日期对象中的日期信息。例如，为 monthValue 指定 15，则年份会加 1，月份将会使用 3。

## 例子

例子：使用setMonth方法

```javascript
var theBigDay = new Date();
theBigDay.setMonth(6);
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |