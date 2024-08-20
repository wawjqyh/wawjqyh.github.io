<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat" target="_blank">en</a>

# parseFloat()

parseFloat() 函数解析一个字符串参数并返回一个浮点数。

## 语法
`parseFloat(string)`

### 参数

* `string` 需要被解析成为浮点数的字符串.

## 描述

parseFloat是个全局函数,不属于任何对象.

parseFloat将它的字符串参数解析成为浮点数并返回.如果在解析过程中遇到了正负号(+或-),数字(0-9),小数点,或者科学记数法中的指数(e或E)以外的字符,
则它会忽略该字符以及之后的所有字符,返回当前已经解析到的浮点数.同时参数字符串首位的空白符会被忽略.

如果参数字符串的第一个字符不能被解析成为数字,则parseFloat返回NaN.

你可以通过调用isNaN函数来判断parseFloat的返回结果是否是NaN.如果让NaN作为了任意数学运算的操作数,则运算结果必定也是NaN.

parseFloat 也可转换和返回Infinity值. 可以使用isFinite 函数来判断结果是否是一个有限的数值 (非Infinity, -Infinity, 或 NaN).

## 例子

### parseFloat返回正常数字

下面的例子都返回3.14
```javascript
parseFloat("3.14");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14more non-digit characters");
```

### parseFloat返回NaN

下面的例子将返回NaN
```javascript
parseFloat("FF2");
```

### 更严格的转换函数

该函数通过正则表达式的方式,在需要更严格地转换float值时可能会有用:
```javascript
var filterFloat = function (value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
        return Number(value);

    return NaN;
}

console.log(filterFloat('421'));               // 421
console.log(filterFloat('-421'));              // -421
console.log(filterFloat('+421'));              // 421
console.log(filterFloat('Infinity'));          // Infinity
console.log(filterFloat('1.61803398875'));     // 1.61803398875
console.log(filterFloat('421e+0'));            // NaN
console.log(filterFloat('421hop'));            // NaN
console.log(filterFloat('hop1.61803398875'));  // NaN
```

`注意上面的代码只是示例; 该方法不接受如 1. 和 .5 这种合法的数值.`

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |