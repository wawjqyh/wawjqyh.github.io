<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth" target="_blank">en</a>

# Date.prototype.getMonth()

根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）。

## 语法

```javascript
dateObj.getMonth()
```

### 返回值

getMonth返回一个0 到 11的整数值： 0 代表一月份，1 代表二月分， 2 代表三月份，依次类推。

## 例子

下面第二条语句，基于 Date 对象 Xmas95 的值，把11赋值给变量 month。

```javascript
var Xmas95 = new Date('December 25, 1995 23:15:30');
var month = Xmas95.getMonth();

console.log(month); // 11
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |