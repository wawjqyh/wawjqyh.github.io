<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank">en</a>

# Date

创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。

```javascript
var today = new Date();
var today = new Date(1453094034000); // by timestamp(accurate to the millimeter)
var birthday = new Date('December 17, 1995 03:24:00');
var birthday = new Date('1995-12-17T03:24:00');
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);

var unixTimestamp = Date.now(); // in milliseconds
```

## 构造函数

```javascript
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```

<p class="warning">Note: 需要注意的是只能通过调用 Date 构造函数来实例化日期对象：以常规函数调用它（即不加 new 操作符）将
会返回一个字符串，而不是一个日期对象。另外，不像其他JavaScript 类型，Date 对象没有字面量格式。</p>

## 参数

<p class="warning">Note: 当Date作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为13或者分钟数为70），相邻
的数值会被调整。比如 new Date(2013, 13, 1)等于new Date(2014, 1, 1)，它们都表示日期2014-02-01（注意月份是从0开始的）。其他
数值也是类似，new Date(2013, 2, 1, 0, 70)等于new Date(2013, 2, 1, 1, 10)，都表示时间2013-03-01T01:10:00。</p>

<p class="warning">Note: 当Date作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要世界协调时，使用
new Date({{jsxref("Date.UTC()", "Date.UTC(...)")}}) 和相同参数</p>

* `value` 代表自1970年1月1日00:00:00 (世界标准时间) 起经过的毫秒数
* `dateString` 表示日期的字符串值。该字符串应该能被 Date.parse() 方法识别（符合 IETF-compliant RFC 2822 timestamps 或 version of ISO8601）
* `year` 代表年份的整数值。为了避免2000年问题最好指定4位数的年份; 使用 1998, 而不要用 98.
* `month` 代表月份的整数值从0（1月）到11（12月）
* `day` 代表一个月中的第几天的整数值，从1开始
* `hour` 代表一天中的小时数的整数值 (24小时制)
* `minute` 分钟数
* `second` 秒数
* `millisecond` 表示时间的毫秒部分的整数值

## 描述

* 如果没有输入任何参数，则Date的构造器会依据系统设置的当前时间来创建一个Date对象
* 如果提供了至少两个参数，其余的参数均会默认设置为1（如果没有提供day参数）或者0
* JavaScript的时间是由世界标准时间（UTC）1970年1月1日开始，用毫秒计时，一天由86,400,000毫秒组成。Date对象的范围是-100,000,000天至100,000,000天（等效的毫秒值）
* JavaScript的Date对象为跨平台提供了统一的行为。时间属性可以在不同的系统中表示相同的时刻，而如果使用了本地时间对象，则反映当地的时间
* JavaScript 的Date对象提供了数个UTC时间的方法，也相应提供了当地时间的方法。UTC，也就是我们所说的格林威治时间，指的是time中的世界时间标准。而当地时间则是指执行JavaScript的客户端电脑所设置的时间
* 以一个函数的形式来调用JavaScript的Date对象（i.e., 不使用 new 操作符）会返回一个代表当前日期和时间的字符串

## 属性

`Date.prototype`

允许为 Date 实例对象添加属性

`Date.length`

Date.length 的值是 7。这是该构造函数可接受的参数个数

## 方法

`Date.now()`

返回自 1970-1-1 00:00:00  UTC (世界标准时间)至今所经过的毫秒数

`Date.parse()`

解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数

`Date.UTC()`

接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数

## Date 实例

所有的 Date 实例都继承自 Date.prototype。修改 Date 构造函数的原型对象会影响到所有的 Date 实例。

### Getter

`Date.prototype.getDate()`

根据本地时间返回指定日期对象的月份中的第几天（1-31）

`Date.prototype.getDay()`

根据本地时间返回指定日期对象的星期中的第几天（0-6）

`Date.prototype.getFullYear()`

根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）

`Date.prototype.getHours()`

根据本地时间返回指定日期对象的小时（0-23）

`Date.prototype.getMilliseconds()`

根据本地时间返回指定日期对象的微秒（0-999）

`Date.prototype.getMinutes()`

根据本地时间返回指定日期对象的分钟（0-59）

`Date.prototype.getMonth()`

根据本地时间返回指定日期对象的月份（0-11）

`Date.prototype.getSeconds()`

根据本地时间返回指定日期对象的秒数（0-59）

`Date.prototype.getTime()`

返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于1970-1-1 00:00:00 UTC之前的时间返回负值

`Date.prototype.getTimezoneOffset()`

返回当前时区的时区偏移

`Date.prototype.getUTCDate()`
以世界时为标准，返回一个指定的日期对象为一个月中的第几天

`Date.prototype.getUTCDay()`
以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天

`Date.prototype.getUTCFullYear()`
以世界时为标准，返回一个指定的日期对象的年份

`Date.prototype.getUTCHours()`
以世界时为标准，返回一个指定的日期对象的小时数，返回一个 0 到 23 的整数

`Date.prototype.getUTCMilliseconds()`
以世界时为标准，返回一个指定的日期对象的毫秒数，返回一个 0 到 999 的整数

`Date.prototype.getUTCMinutes()`
以世界时为标准，返回一个指定的日期对象的分钟数，返回一个 0 到 59 的整数

`Date.prototype.getUTCMonth()`
以世界时为标准，返回一个指定的日期对象的月份，返回一个 0 到 11 的整数

`Date.prototype.getUTCSeconds()`
以世界时为标准，返回一个指定的日期对象的秒数，返回一个 0 到 59 的整数

`Date.prototype.getYear() [已废弃]`
返回年份后两位

### Setter

`Date.prototype.setDate()`

根据本地时间为指定的日期对象设置月份中的第几天

`Date.prototype.setFullYear()`

根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）

`Date.prototype.setHours()`

根据本地时间为指定日期对象设置小时数

`Date.prototype.setMilliseconds()`

根据本地时间为指定日期对象设置毫秒数

`Date.prototype.setMinutes()`

根据本地时间为指定日期对象设置分钟数

`Date.prototype.setMonth()`

根据本地时间为指定日期对象设置月份

`Date.prototype.setSeconds()`

根据本地时间为指定日期对象设置秒数

`Date.prototype.setTime()`

通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间，对于早于 1970-1-1 00:00:00 UTC的时间可使用负值

`Date.prototype.setUTCDate()`

根据世界时设置 Date 对象中月份的一天 (1 ~ 31)

`Date.prototype.setUTCFullYear()`

根据世界时设置 Date 对象中的年份（四位数字）

`Date.prototype.setUTCHours()`

根据世界时设置 Date 对象中的小时 (0 ~ 23)

`Date.prototype.setUTCMilliseconds()`

根据世界时设置 Date 对象中的毫秒 (0 ~ 999)

`Date.prototype.setUTCMinutes()`

根据世界时设置 Date 对象中的分钟 (0 ~ 59)

`Date.prototype.setUTCMonth()`

根据世界时设置 Date 对象中的月份 (0 ~ 11)

`Date.prototype.setUTCSeconds()`

根据世界时设置 Date 对象中的秒钟 (0 ~ 59)

`Date.prototype.setYear() [已废弃]`

setYear() 方法用于设置年份。请使用 setFullYear() 方法代替

### Conversion getter

`Date.prototype.toDateString()`

以人类易读（human-readable）的形式返回该日期对象日期部分的字符串

`Date.prototype.toISOString()`

把一个日期转换为符合 ISO 8601 扩展格式的字符串

`Date.prototype.toJSON()`

使用 toISOString() 返回一个表示该日期的字符串。为了在 JSON.stringify() 方法中使用

`Date.prototype.toGMTString() [已废弃]`

返回一个基于 GMT (UT) 时区的字符串来表示该日期。请使用 toUTCString() 方法代替

`Date.prototype.toLocaleDateString()`

返回一个表示该日期对象日期部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）

`Date.prototype.toLocaleFormat() [非标准]`

使用格式字符串将日期转换为字符串

`Date.prototype.toLocaleString()`

返回一个表示该日期对象的字符串，该字符串与系统设置的地区关联（locality sensitive）。覆盖了 Object.prototype.toLocaleString() 方法

`Date.prototype.toLocaleTimeString()`

返回一个表示该日期对象时间部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）

`Date.prototype.toSource() [非标准]`

返回一个与Date等价的原始字符串对象，你可以使用这个值去生成一个新的对象。重写了 Object.prototype.toSource() 这个方法

`Date.prototype.toString()`

返回一个表示该日期对象的字符串。覆盖了Object.prototype.toString() 方法

`Date.prototype.toTimeString()`

以人类易读格式返回日期对象时间部分的字符串

`Date.prototype.toUTCString()`

把一个日期对象转换为一个以UTC时区计时的字符串

`Date.prototype.valueOf()`

返回一个日期对象的原始值。覆盖了 Object.prototype.valueOf() 方法

## 例子

### 创建一个日期对象的几种方法

下例展示了用来创建一个日期对象的多种方法。

```javascript
var today = new Date();
var today = new Date(1453094034000);// by timestamp(accurate to the millimeter)
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995,11,17);
var birthday = new Date(1995,11,17,3,24,0);
```

### 两位数年份表示 1900 - 1999 年

为了能够创建和获取 0 到 99 之间的年份，应该使用 Date.prototype.setFullYear() 和 Date.prototype.getFullYear() 方法。

```javascript
var date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// 弃用的方法, 98在这里被映射为1998
date.setYear(98);           // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

date.setFullYear(98);       // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
```

### 计算经过的时间

下例展示了如何计算两个日期对象的时间差：

```javascript
// 使用 Date 对象
var start = Date.now();

// 这里进行耗时的方法调用:
doSomethingForALongTime();
var end = Date.now();
var elapsed = end - start; // 运行时间的毫秒值
```

```javascript
// 使用内建的创建方法
var start = new Date();

// 这里进行耗时的方法调用:
doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // 运行时间的毫秒值
```

```javascript
// to test a function and get back its return
function printElapsedTime (fTest) {
    var nStartTime = Date.now(),
        vReturn = fTest(),
        nEndTime = Date.now();
    alert("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds");
    return vReturn;
}
yourFunctionReturn = printElapsedTime(yourFunction);
```

<p class="warning">注意：在支持 Web Performance API 的高精细度（high-resolution）时间功能的浏览器中，window.performance.now
提供的所经过的时间比 Date.now 更可靠和精确</p>

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |