<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision" target="_blank">en</a>

# Number.prototype.toPrecision()

## 概述

toPrecision() 方法以指定的精度返回该数值对象的字符串表示。

## 语法

```javascript
numObj.toPrecision(precision)
```

### 参数

* `precision 可选` 一个用来指定有效数个数的整数。

### 返回值

以定点表示法或指数表示法表示的一个数值对象的字符串表示，四舍五入到 precision 参数指定的显示数字位数。查看 Number.prototype.toFixed()
方法关于四舍五入的讨论，同样应用于 toPrecision 方法。

如果忽略 precision 参数，则该方法表现类似于 Number.prototype.toString()。如果该参数是一个非整数值，将会向下舍入到最接近的整数。

### 异常

`RangeError`

如果 precison 参数不在 1 和 100 （包括）之间，将会抛出一个 RangeError 。执行环境也可以支持更大或更小的范围。ECMA-262 只需要最多 21 位显示数字。

## 示例

```javascript
var numObj = 5.123456;
console.log("numObj.toPrecision()  is " + numObj.toPrecision());  //输出 5.123456
console.log("numObj.toPrecision(5) is " + numObj.toPrecision(5)); //输出 5.1235
console.log("numObj.toPrecision(2) is " + numObj.toPrecision(2)); //输出 5.1
console.log("numObj.toPrecision(1) is " + numObj.toPrecision(1)); //输出 5

// 注意：在某些情况下会以指数表示法返回
console.log((1234.5).toPrecision(2)); // "1.2e+3"
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |