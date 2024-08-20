<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" target="_blank">en</a>

# Number.prototype.toLocaleString()

toLocaleString() 方法返回这个数字在特定语言环境下的表示字符串。

新的 locales 和 options 参数让应用程序可以指定要进行格式转换的语言，并且定制函数的行为。在旧的实现中，会忽略 locales 和
options 参数，使用的语言环境和返回的字符串的形式完全取决于实现方式。

## 语法

```javascript
numObj.toLocaleString([locales [, options]])
```

### 参数

查阅浏览器兼容性部分，了解哪些浏览器支持 locales 和 options 参数，通过示例: 检查 locales 和 options 参数的支持了解特征检测。

<p class="warning">注意: ECMAScript 国际化 API，在 Firefox 29 中得以实施，增加了 locales 参数的 Number.toLocaleString 方
法。如果参数为 undefined，此方法返回本地操作系统指定的位数，而 Firefox 的早期版本中返回阿拉伯语数字。这一变化已被报告为向
后影响的兼容性问题并可能会被尽快修复。(bug 999003)</p>

* `locales 可选` 缩写语言代码(BCP 47 language tag,例如:cmn-Hans-CN)的字符串或者这些字符串组成的数组. 关于参数locales的一般形式和解释请参见Intl page. 下面的这些Unicode扩展键也是被允许的:译者注:下面扩展的使用方式是language[-scripts][-region]-u-nu-*,例如:zh-u-nu-hanidec(表示中文十进制数字)
    * `nu` 要使用的编号系统。可能的值有: "arab", "arabext", "bali", "beng", "deva", "fullwide", "gujr", "guru", "hanidec"(中文十进制数字), "khmr", "knda", "laoo", "latn", "limb", "mlym", "mong", "mymr", "orya", "tamldec", "telu", "thai", "tibt".
* `options 可选` 包含一些或所有的下面属性的类:
    * `localeMatcher` 使用的local的匹配算法. 可能的值有"lookup"和"best fit"; 默认值是 "best fit". 有关此选项的信息, 请参见Intl page.
    * `style` 格式化时使用的样式.可能的值有“decimal”表示纯数字格式 , “currency”表示货币格式, 和"percent"表示百分比格式; 默认值是 "decimal".
    * `currency` 在货币格式化中使用的货币符号. 可能的值是ISO的货币代码 (the ISO 4217 currency codes,) 例如"USD" 表示美元, "EUR" 表示欧元, or "CNY"是人民币 — 更多请参考 Current currency & funds code list. 没有默认值,如果样式是“currency”,必须提供货币属性.
    * `currencyDisplay` 如何在货币格式化中显示货币. 可能的值有"symbol"表示使用本地化的货币符号例如€, "code"表示使用国际标准组织货币代码, "name" 表示使用本地化的货币名称，如 "dollar"; 默认值是 "symbol".
    * `useGrouping` 是否使用分组分隔符，如千位分隔符或千/万/亿分隔符.可能的值是true和false,默认值是true.
    * `minimumIntegerDigits` 使用的整数数字的最小数目.可能的值是从1到21,默认值是1.
    * `minimumFractionDigits` 使用的小数位数的最小数目.可能的值是从0到20;默认为普通的数字和百分比格式为0;默认为货币格式是由国际标准化组织列表( ISO 4217 currency code list )提供(如果列表中没有提供则值为2).
    * `maximumFractionDigits` 使用的小数位数的最大数目。可能的值是从0到20；纯数字格式的默认值是minimumfractiondigits和3中大的那一个；货币格式默认值是minimumfractiondigits和国际标准化组织列表(如果列表中没有提供则值为2)中大的那一个;百分比格式默认值是minimumfractiondigits和0中大的那一个。
    * `minimumSignificantDigits` 使用的有效数字的最小数目。可能的值是从1到21；默认值是1。
    * `maximumSignificantDigits` 使用的有效数字的最大数量。可能的值是从1到21；默认是minimumsignificantdigits.

### 返回值

返回一个语言环境下的表示字符串。

## 示例

### 使用 toLocaleString

在没有指定区域的基本使用时，返回使用默认的语言环境和默认选项格式化的字符串。

```javascript
var number = 3500;

console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale
```

### 检查 locales 和 options 参数的支持

locales 和 options 参数目前还不是所有浏览器都支持的。在 ES5.1 和更新的实现中检查支持情况，可以依靠使用非法参数时规定抛出的 RangeError 异常：

```javascript
function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e​.name === 'RangeError';
  }
  return false;
}
```

早于 ES5.1 的实现中，如果带参数调用 toLocaleString 并不会抛出范围异常。

在所有宿主环境下，包括那些支持比 ed 5.1 还早的 ECMA-262 的环境，都能有效检测的方法是直接检测 ECMA-402 中的其它特性，它指
定 Number.prototype.toLocaleString 需要支持地区选项：

```javascript
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}
```

它测试全局的 Intl 对象，检测它不是 null 并且有 NumberFormat 的方法。

### 使用 locales

这个示例展示了不同地区数字格式的差异。为了设置你的应用程序界面下使用的语言格式，请确保使用 locales 参数指定了使用的语言（可能还有一些备用语言）：

```javascript
var number = 123456.789;

// 德国使用逗号作为小数分隔符，分位周期为千位
console.log(number.toLocaleString('de-DE'));
// → 123.456,789

// 在大多数阿拉伯语国家使用阿拉伯语数字
console.log(number.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// 印度使用千位/拉克（十万）/克若尔（千万）分隔
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// nu 扩展字段要求编号系统，e.g. 中文十进制
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// 当请求不支持的语言时，例如巴厘语，加入一个备用语言，比如印尼语
console.log(number.toLocaleString(['ban', 'id']));
// → 123.456,789
```

### 使用 options

通过 toLocaleString 返回的结果可以通过 options 参数进行定制：

```javascript
var number = 123456.789;

// 要求货币格式
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// 日元不是用小数位
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// 限制三位有效数字
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000
```

## 性能

当格式化大量数字时，最好建立一个 NumberFormat 对象并且使用它提供的 NumberFormat.format 方法。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |