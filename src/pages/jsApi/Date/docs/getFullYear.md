<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear" target="_blank">en</a>

# Date.prototype.getFullYear()

## 概述

根据本地时间，返回一个指定日期对象的年份

## 语法

```javascript
dateObj.getFullYear()
```

### 返回值

The value returned by getFullYear() is an absolute number.

当日期的年份位于 1000 到 9999 时，该方法返回一个四位数字，比如1995。

Use this function to make sure a year is compliant with years after 2000.

## 例子

下例将当前年份的四位数字赋值给变量 yr

```javascript
var today = new Date();
var yr = today.getFullYear();
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |