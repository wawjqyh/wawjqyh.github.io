<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN" target="_blank">en</a>

# isNaN()

isNaN() 函数用来判断一个值是否为 NaN。注：isNaN函数包含一些非常有意思的强制转换规则；你也可以通过 ECMAScript 6 中定义的 Number.isNaN() 或者 typeof 来判断一个值是否为非数值。

## 语法
`isNaN(testValue)`

### 参数

* `testValue` 要被检测的值。

### 返回值

如果值为NaN则返回true，否则返回false

## 描述

### isNaN 函数的必要性

与 JavaScript 中其他的值不同，NaN不能通过相等操作符（== 和 ===）来判断 ，因为 NaN == NaN 和 NaN === NaN 都会返回 false。 因此，isNaN 就很有必要了。

### NaN值的产生

当算术运算返回一个未定义的或无法表示的值时，NaN就产生了。但是，NaN并不一定用于表示某些值超出表示范围的情况。将某些不能强制转换为数值的非数值转换为数值的时候，也会得到NaN。

例如，0 除以0会返回NaN —— 但是其他数除以0则不会返回NaN。

### 令人费解的怪异行为

从最早版本的isNaN函数规范开始， 其针对非数值参数所表现的行为就一直令人费解。 如果isNaN函数的参数不是Number类型, isNaN()会首先尝
试将这个参数转换为数值，然后才会对转换后的结果是否是NaN进行判断。因此，对于能被强制转换为有效的非NaN数值来说（ 值得一提的是，空
字符串和布尔值会被强制转换为数值0或1），返回false值也许会让人感觉莫名其妙。比如说，空字符串就明显”不是数值“（not a number）。
这种怪异行为起源于：“不是数值”（not a number）在基于IEEE-794数值的浮点计算体制中代表了一种特定的含义。isNaN函数其实等同于回答
了这样一个问题：这个值被强制转换成数值时会不会返回IEEE-754​中所谓的”不是数值“（not a number）。

下一个版本的ECMAScript (ES6)包含Number.isNaN()函数。通过Number.isNaN(x)来检测变量x是否是一个非数值将会是一种可靠的做法。然而，在
缺少Number.isNaN函数的情况下, 通过表达式(x != x) 来检测变量x是否是NaN会更加可靠。

可以把isNaN看做：
```javascript
isNaN = function(value) {
    Number.isNaN(Number(value));
}
```

## 示例

```javascript
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN("37");      // false: 可以被转换成数值37
isNaN("37.37");   // false: 可以被转换成数值37.37
isNaN("");        // false: 空字符串被转换成0
isNaN(" ");       // false: 包含空格的字符串被转换成0

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

isNaN("blabla")   // true: "blabla"不能转换成数值
```

### 有用的特殊行为

有许多方式来看待isNaN()：如果isNaN(x)返回false，那么x在任何算数表达式中都不会使表达式等于NaN；如果返回true，x会使所有算数表达式返回NaN。
这就意味着，在JavaScript中，isNaN(x)==true等价于x-0=NaN(在JavaScript中 x-0 == NaN 总是返回false，所以你不用去测试它)。实际上， isNaN(x),
isNaN(x - 0),isNaN(Number(x)), Number.isNaN(x - 0),和Number.isNaN(Number(x)) 的返回值都是一样的 并且在JavaScript中isNaN(x)是这些表达式中最短的表达。

举个例子，可以利用这个特殊行为来检测函数的参数是可运算的（可以像number一样进行加减乘除等运算）。如果不可运算，则可赋予这个参数一个默
认的值或其他合适的内容。这样，就可以得到一个隐式转换参数值的函数，而这得益于Javascript的全功能性。

## 例子
```javascript
function increment(x) {
  if (isNaN(x)) x = 0;
  return x + 1;
};

// The same effect with Number.isNaN():
function increment(x) {
  if (Number.isNaN(Number(x))) x = 0;
  return x + 1;
};

// In the following cases for the function's argument x,
// isNaN(x) is always false, although x is indeed not a
// number, but can be used as such in arithmetical
// expressions
increment("");            // 1: "" is converted to 0
increment(new String());  // 1: String object representing an empty string is converted to 0
increment([]);            // 1: [] is converted to 0
increment(new Array());   // 1: Array object representing an empty array is converted to 0
increment("0");           // 1: "0" is converted to 0
increment("1");           // 2: "1" is converted to 1
increment("0.1");         // 1.1: "0.1" is converted to 0.1
increment("Infinity");    // Infinity: "Infinity" is converted to Infinity
increment(null);          // 1: null is converted to 0
increment(false);         // 1: false is converted to 0
increment(true);          // 2: true is converted to 1
increment(new Date());    // returns current date/time in milliseconds plus 1

// In the following cases for the function's argument x,
// isNaN(x) is always false and x is indeed a number
increment(-1);            // 0
increment(-0.1);          // 0.9
increment(0);             // 1
increment(1);             // 2
increment(2);             // 3
// ... and so on ...
increment(Infinity);      // Infinity

// In the following cases for the function's argument x,
// isNaN(x) is always true and x is really not a number,
// thus the function replaces it by 0 and returns 1
increment(String);            // 1
increment(Array);             // 1
increment("blabla");          // 1
increment("-blabla");         // 1
increment(0/0);               // 1
increment("0/0");             // 1
increment(Infinity/Infinity); // 1
increment(NaN);               // 1
increment(undefined);         // 1
increment();                  // 1

// isNaN(x) is always the same as isNaN(Number(x)),
// but the presence of x is mandatory here!
isNaN(x) == isNaN(Number(x)) // true for every value of x, including x == undefined,
                             // because isNaN(undefined) == true and Number(undefined) returns NaN,
                             // but ...
isNaN() == isNaN(Number())   // false, because i
```

## 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |