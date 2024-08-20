<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">en</a>

# Math

Math 是一个内置对象， 它具有数学常数和函数的属性和方法。不是一个函数对象。

## 描述

与其它全局对象不同的是, Math 不是一个构造器.  Math 的所有属性和方法都是静态的. 你用到的常数pi可以用 Math.PI 表示,用 x 作
参数 Math.sin(x)调用sin函数. JavaScript中的常数, 是以全精度的实数定义的.

## 属性

`Math.E`

欧拉常数，也是自然对数的底数, 约等于 2.718

`Math.LN2`

2的自然对数, 约等于0.693

`Math.LN10`

10的自然对数, 约等于 2.303

`Math.LOG2E`

以2为底E的对数, 约等于 1.443

`Math.LOG10E`

以10为底E的对数, 约等于 0.434

`Math.PI`

圆周率，一个圆的周长和直径之比，约等于 3.14159

`Math.SQRT1_2`

1/2的平方根, 约等于 0.707

`Math.SQRT2`

2的平方根,约等于 1.414

## 方法

<p class="warning">需要注意的是三角函数（sin(), cos(), tan(),asin(), acos(), atan(), atan2()）是以弧度返回值的。可以通过
除法（Math.PI / 180）把弧度转换为角度，也可以通过其他方法来转换。</p>

<p class="warning">需要注意的是很多数学函数都有一个精度，并且精度在不同环境下也是不相同的。这就意味着不同的浏览器会给出
不同的结果，甚至相同的 JS 引擎在不同的OS或者架构下也会给出不同的结果。</p>

`Math.abs(x)`

返回x的绝对值

`Math.acos(x)`

返回x的反余弦值

`Math.acosh(x)`

返回x的反双曲余弦值

`Math.asin(x)`

返回x的反正弦值

`Math.asinh(x)`

返回x的反双曲正弦值

`Math.atan(x)`

以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值

`Math.atanh(x)`

返回 x 的反双曲正切值

`Math.atan2(x, y)`

返回 y/x 的反正切值

`Math.cbrt(x)`

返回x的立方根

`Math.ceil(x)`

返回x向上取整后的值

`Math.clz32(x)`

返回一个数字在转换成 32 无符号整形数字的二进制形式后, 开头的 0 的个数

`Math.cos(x)`

返回x的余弦值

`Math.cosh(x)`

返回x的双曲余弦值

`Math.exp(x)`

返回 Ex, 当x为参数,  E 是欧拉常数 (2.718...), 自然对数的底

`Math.expm1(x)`

返回 exp(x)-1 的值

`Math.floor(x)`

返回小于x的最大整数

`Math.fround(x)`

将任意的数字转换为离它最近的单精度浮点数形式的数字

`Math.hypot([x[,y[,…]]])`

返回它的所有参数的平方和的平方根

`Math.imul(x)`

返回两个参数的类C的32位整数乘法运算的运算结果

`Math.log(x)`

返回一个数的自然对数

`Math.log1p(x)`

返回一个数的自然对数

`Math.log10(x)`

返回一个数字以 10 为底的对数

`Math.log2(x)`

返回一个数字以 2 为底的对数

`Math.max([x[,y[,…]]])`

返回0个到多个数值中最大值

`Math.min([x[,y[,…]]])`

返回0个到多个数值中最小值

`Math.pow(x,y)`

返回x的y次幂

`Math.random()`

返回0到1之间的伪随机数

`Math.round(x)`

返回四舍五入后的整数

`Math.sign(x)`

返回x的符号函数, 判定x是正数,负数还是0

`Math.sin(x)`

返回正弦值

`Math.sinh(x)`

返回x的双曲正弦值

`Math.sqrt(x)`

返回x的平方根

`Math.tan(x)`

返回x的正切值

`Math.tanh(x)`

返回x的双曲正切值

`Math.toSource()`

返回字符串 "Math"

`Math.trunc(x)`

返回x的整数部分,去除小数

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |