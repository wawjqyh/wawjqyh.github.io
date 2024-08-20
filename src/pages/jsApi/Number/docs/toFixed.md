<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" target="_blank">en</a>

# Number.prototype.toFixed()

toFixed() 方法使用定点表示法来格式化一个数。

## 语法

```javascript
numObj.toFixed(digits)
```

### 参数

* `digits` 小数点后数字的个数；介于 0 到 20 （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。

### 返回值

一个数值的字符串表现形式，不使用指数记数法，而是在小数点后有 digits 位数字。该数值在必要时进行四舍五入，另外在必要时会用
0 来填充小数部分，以便小数部分有指定的位数。 如果数值大于 1e+21，该方法会简单调用 Number.prototype.toString()并返回一个
指数记数法格式的字符串。

### 抛出异常

`RangeError`

如果 digits 参数太小或太大。0 到 20（包括）之间的值不会引起 RangeError。实现环境（implementations）也可以支持更大或更小的值。

`TypeError`

如果该方法在一个非Number类型的对象上调用。

## 示例

```javascript
var numObj = 12345.6789;

numObj.toFixed();         // 返回 "12346"：进行四舍五入，不包括小数部分
numObj.toFixed(1);        // 返回 "12345.7"：进行四舍五入

numObj.toFixed(6);        // 返回 "12345.678900"：用0填充

(1.23e+20).toFixed(2);    // 返回 "123000000000000000000.00"

(1.23e-10).toFixed(2);    // 返回 "0.00"

2.34.toFixed(1);          // 返回 "2.3"

-2.34.toFixed(1);         // 返回 -2.3 （由于操作符优先级，负数不会返回字符串）

(-2.34).toFixed(1);       // 返回 "-2.3" （若用括号提高优先级，则返回字符串）
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |