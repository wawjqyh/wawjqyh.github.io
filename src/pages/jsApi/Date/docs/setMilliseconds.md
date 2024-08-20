<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds" target="_blank">en</a>

# Date.prototype.setMilliseconds()

## 概述

setMilliseconds() 方法会根据本地时间设置一个日期对象的豪秒数。

## 语法

```javascript
dateObj.setMilliseconds(millisecondsValue)
```

### 参数

* `millisecondsValue` 一个 0 到 999 的数字，表示豪秒数

## 描述

如果指定的数字超出了合理范围，则日期对象的时间信息会被相应地更新。例如，如果指定了 1005，则秒数加 1，豪秒数为 5。

## 例子

例子：使用setMilliseconds

```javascript
var theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |