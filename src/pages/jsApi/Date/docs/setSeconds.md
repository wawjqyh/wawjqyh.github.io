<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds" target="_blank">en</a>

# Date.prototype.setSeconds()

## 概述

setSeconds() 方法根据本地时间设置一个日期对象的秒数。

## 语法

```javascript
dateObj.setSeconds(secondsValue[, msValue])

//JavaScript 1.3之前版本
dateObj.setSeconds(secondsValue)
```

### 参数

* `secondsValue` 一个 0 到 59 的整数
* `msValue` 一个 0 到 999 的数字，表示微秒数

## 描述

如果没有指定 msValue 参数，就会使用 getMilliseconds() 方法的返回值。

如果一个参数超出了合理范围， setSeconds 方法会相应地更新日期对象的时间信息。例如，为 secondsValue 指定 100，则日期对象的分钟数会相应地加 1，秒数将会使用 40。

## 例子

```javascript
var theBigDay = new Date();
theBigDay.setSeconds(30)
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |