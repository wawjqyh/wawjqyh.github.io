<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds" target="_blank">en</a>

# Date.prototype.getMilliseconds()

## 概述

getMilliseconds() 方法，根据本地时间，返回一个指定的日期对象的毫秒数。

## 语法

```javascript
dateObj.getMilliseconds()
```


## 描述

getMilliseconds() 方法返回一个0 到 999的整数。

## 例子

下例中，将当前时间的毫秒数赋值给变量 ms。

```javascript
var ms;
Today = new Date();
ms = Today.getMilliseconds();
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |