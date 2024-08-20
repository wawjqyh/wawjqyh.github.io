<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank">en</a>

# Number

JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。

## 语法

```javascript
new Number(value);
```

### 参数

* `value` 被创建对象的数字值

## 描述

Number 对象主要用于：

* 如果参数无法被转换为数字，则返回 NaN
* 在非构造器上下文中 (如：没有 new 操作符)，Number 能被用来执行类型转换

## 属性

`Number.EPSILON`

两个可表示(representable)数之间的最小间隔

`Number.MAX_SAFE_INTEGER`

在 JavaScript 中最大的安全整数 (253 - 1)

`Number.MAX_VALUE`

能表示的最大正数。最小的负数是 -MAX_VALUE

`Number.MIN_VALUE`

能表示的最小正数即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE

`Number.NaN`

特殊的“非数字”值

`Number.NEGATIVE_INFINITY`

特殊的负无穷大值，在溢出时返回该值

`Number.POSITIVE_INFINITY`

特殊的正无穷大值，在溢出时返回改值

`Number.prototype`

Number 对象上允许的额外属性

## 方法

`Number.isNaN()`

确定传递的值是否是 NaN

`Number.isFinite()`

确定传递的值类型及本身是否是有限数

`Number.isInteger()`

确定传递的值类型是“number”，且是整数

`Number.isSafeInteger()`

确定传递的值是否为安全整数 ( -(253 - 1) 至 253 - 1之间)

`Number.toInteger()`

计算传递的值并将其转换为整数 (或无穷大)

`Number.parseFloat()`

和全局对象 parseFloat() 一样

`Number.parseInt()`

和全局对象 parseInt() 一样

## Number 实例

所有 Number 实例都继承自 Number.prototype。被修改的 Number 构造器的原型对象对全部 Number 实例都生效。

### 方法

`Number.prototype.toExponential()`

返回一个使用指数表示法表示的该数值的字符串表示

`Number.prototype.toFixed()`

返回一个使用定点表示法表示的该数值的字符串表示

`Number.prototype.toLocaleString()`

返回一个与语言相关的该数值对象的字符串表示。覆盖了Object.prototype.toLocaleString() 方法

`Number.prototype.toPrecision()`

使用定点表示法或指数表示法来表示的指定显示位数的该数值对象的字符串表示

`Number.prototype.toSource()`

返回该对象源码的字符串表示

`Number.prototype.toString()`

返回一个表示该数值对象的字符串。覆盖了 Object.prototype.toString() 方法

`Number.prototype.valueOf()`

返回该数值对象的原始值。覆盖了 Object.prototype.valueOf() 方法

## 示例

### 使用 Number 对象给数字变量赋值

下例使用 Number 对象的属性给几个数字变量赋值：

```javascript
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

### 整数类型的范围

下例展示了Number对象所能表示的最大和最小整数 (详情请参阅 ECMAScript standard, chapter 8.5 The Number Type):

```javascript
var biggestInt = 9007199254740992;
var smallestInt = -9007199254740992;
```

在解析序列化的JSON时，如果JSON解析器将它们强制转换为Number类型，那么超出此范围的整数值可能会被破坏。在工作中使用String
类型代替，是一个可行的解决方案。

### 使用 Number 转换 Date 对象

下例使用 Number 作为函数来转换 Date 对象为数字值：

```javascript
var d = new Date("December 17, 1995 03:24:00");
print(Number(d));
```

这将输出 "819199440000"。

### 转换数字字符串为数字

```javascript
Number("123")     // 123
Number("")        // 0
Number("0x11")    // 17
Number("0b11")    // 3
Number("0o11")    // 9
Number("foo")     // NaN
Number("100a")    // NaN
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |