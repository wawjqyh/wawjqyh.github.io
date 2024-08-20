<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse" target="_blank">en</a>

# Date.parse()

概要

Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数，
如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为NaN。

不推荐在ES5之前使用Date.parse方法，因为字符串的解析完全取决于实现。直到至今，不同宿主在如何解析日期字符串上仍存在许多差异，
因此最好还是手动解析日期字符串（在需要适应不同格式时库能起到很大帮助）。

## 语法

显示调用：

```javascript
Date.parse(dateString)
```

隐式调用：

```javascript
new Date(dateString)
```

### 参数

* `dateString` 一个符合 RFC2822 或 ISO 8601 日期格式的字符串（其他格式也许也支持，但结果可能与预期不符）

### 返回值

一个表示从1970-1-1 00:00:00 UTC到给定日期字符串所表示时间的毫秒数的数值。如果参数不能解析为一个有效的日期，则返回NaN。

## 描述

parse 方法接受一个日期字符串（例如 "Dec 25, 1995"），并返回从1970-1-1 00:00:00 UTC到该日期字符串所表示日期的毫秒数。该方
法在基于字符串值设置日期值时很有用，例如结合使用setTime() 方法和 Date() 构造函数。

parse 方法接受一个表示时间的字符串，返回相应的时间值。该方法可以接受符合 RFC2822 / IETF 日期语法 (RFC2822 Section 3.3)
的字符串，如 "Mon, 25 Dec 1995 13:30:00 GMT"。该方法能够理解美国大陆时区的缩写，但是为了更通用，应该使用时区偏移，如 "Mon,
25 Dec 1995 13:30:00 +0430" （格林威治的子午线向东偏移4小时30分钟）。如果没有指定时区，默认使用本地时区。

GMT 和 UTC 被看作相等。 如果 RFC2822 Section 3.3 格式中不包含时区信息时，会以本地时区来解析日期字符串。

由于在解析日期字符串时存在偏差会导致结果不一致，因此推荐始终手动解析日期字符串，特别是不同的ECMAScript实现会把诸如
“2015-10-12 12:00:00”的字符串解析为NaN，UTC或者本地时间。

### ECMAScript 5 ISO-8601 日期格式支持

另外，日期时间字符串也可以使用 ISO 8601 格式。例如，"2011-10-10" （仅日期）或 "2011-10-10T14:48:00" （日期和时间）能够作
为参数被传递和解析。 如果参数字符串只包含日期格式，那么将会使用UTC时区来解析该参数。而如果是ISO 8601 格式中规定的时间加
日期的格式，则将会被作为本地时区处理。

虽然在日期字符串解析过程中会使用时区修饰符，但返回值总会是从由NaN表示的1970-1-1 00:00:00 UTC到该日期字符串所表示日期的毫秒数。

由于 parse() 是 Date 的一个静态方法 , 所以应该使用 Date.parse() 来调用，而不是作为 Date 的实例方法。

### 默认时区的区别

当输入为 "March 7, 2014" 时， parse()  将默认使用本地时区。但如果使用 ISO  格式如 "2014-03-07" ，则会被默认为 UTC (ES5 和
ECMAScript 2015) 时区。  因此除非系统本地时区为 UTC，由这些字符串解析出的 Date  对象可能会因为 ECMAScript  版本不同而代表
不同的时间。这意味着两个看起来等效的字符串可能因为它们的格式不同而被转换成不同的值。

### 引擎相关的日期格式
ECMAScript  规范规定：如果一个字符串不符合标准格式，则函数可以使用任何由引擎决定的策略或解析算法。 Date.parse()  对于因
包含有无效元素而无法识别的 ISO 格式字符串或者日期应该返回 NaN 。

但是， 在如 ECMA-262 规范中定义的情况，如果因为无效值而导致日期字符串不能被识别为 ISO 格式时，根据浏览器和给定的值不同，
返回值可以是，也可以不是 NaN 。比如：

```javascript
// 包含无效值的非 ISO 格式字符串
new Date('23/25/2014');
```

在 Firefox 30 中会被识别为本地时区的2015年12月25日，而在 Safari 7 中则是无效日期。但是，如果字符串被识别为 ISO 格式并且包
含无效值，则在所有遵循 ES5 或者更新标准的浏览器中都会返回 NaN 。

```javascript
// 包含无效值的 ISO 格式字符串
new Date('2014-25-23').toISOString();
// 在所有遵循 ES5的浏览器中返回 "RangeError: invalid date"
```

SpiderMonkey 的引擎策略可以在 jsdate.cpp  中找到。字符串 "10 06 2014"  可以作为非 ISO 格式字符串使用自定义处理方式的例子。
参见这篇关于解析如何进行的粗略纲要。

```javascript
new Date('10 06 2014');
```

将会被解析为本地时间 2014年10月6日，而不是6月10日。另一个例子

```javascript
new Date('foo-bar 2014').toString();
// 返回: "Invalid Date"

Date.parse('foo-bar 2014');
// 返回: NaN
```

## 例子

使用 Date.parse()

如果 IPOdate 是一个已经存在的 Date 对象，则可以把其设置为本地时间 1995年8月9日。如下：

```javascript
IPOdate.setTime(Date.parse('Aug 9, 1995'));
```

其他一些解析非标准格式日期的例子：

```javascript
Date.parse("Aug 9, 1995");
```

在时区 GMT-0300 中返回 807937200000 ，在其他时区中返回另外的值，因为未指定时区并且不是 ISO 格式，所以默认使用本地时区。

```javascript
Date.parse("Wed, 09 Aug 1995 00:00:00 GMT");
```

因为指定了时区 GMT (UTC)，所以不管本地时区如何，总是返回 807926400000 。

```javascript
Date.parse("Wed, 09 Aug 1995 00:00:00");
```

在时区 GMT-0300 中返回 807937200000 ，在其他时区中返回另外的值，因为没有时区标志并且不是 ISO 格式，所以作为本地时区处理。

```javascript
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
```

因为指定了时区 GMT (UTC)，所以不管本地时区如何，总是返回 0 。

```javascript
Date.parse("Thu, 01 Jan 1970 00:00:00");
```

在时区 GMT-0400 中返回 14400000，在其他时区中返回另外的值，因为未指定时区并且不是 ISO 格式，所以使用本地时区处理。

```javascript
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT-0400");
```

因为指定了时区 GMT (UTC)，所以不管本地时区如何，总是返回 14400000

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |

<p class="danger">Safari浏览器不兼容 "2016-01-01"的写法,请使用 "2016/01/01"</p>