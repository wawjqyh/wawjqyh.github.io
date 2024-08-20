<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset" target="_blank">en</a>

# Date.prototype.getTimezoneOffset()

## 概述

getTimezoneOffset() 方法返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟

## 语法

```javascript
dateObj.getTimezoneOffset()
```

### 返回值

时区偏差（time-zone offset）表示协调世界时（UTC）与本地时区之间的差值，单位为分钟。需要注意的是如果本地时区晚于协调世界时，
则该差值为正值，如果早于协调世界时则为负值。例如你所在时区为 UTC+10（澳大利亚东部标准时间），将会返回 -600。对于同一个时区，
夏令时（Daylight Saving Time）将会改变这个值。

## 例子

例子： 使用getTimezoneOffset方法

```javascript
var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |