<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger" target="_blank">en</a>

# Number.isSafeInteger()

Number.isSafeInteger() 方法用来判断传入的参数值是否是一个“安全整数”（safe integer）。一个安全整数是一个符合下面条件的整数：

* can be exactly represented as an IEEE-754 double precision number, and
* whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.

比如，253 - 1 是一个安全整数，它能被精确表示，在任何 IEEE-754 舍入模式（rounding mode）下，没有其他整数舍入结果为该整数。
作为对比，253 就不是一个安全整数，它能够使用 IEEE-754 表示，但是 253 + 1 不能使用 IEEE-754 直接表示，在就近舍入
（round-to-nearest）和向零舍入中，会被舍入为 253。

安全整数范围为 -(253 - 1)到 253 - 1 之间的整数，包含 -(253 - 1)和 253 - 1。

## 语法

```javascript
Number.isSafeInteger(testValue)
```

### 参数

* `testValue` 需要检测的参数

### 返回值

一个布尔值 表示给定的值是否是一个安全整数（safe integer）。

## 示例

```javascript
Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53))       // false
Number.isSafeInteger(Math.pow(2, 53) - 1)   // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger("3");                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |