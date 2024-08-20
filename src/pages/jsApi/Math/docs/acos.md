<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acos" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos" target="_blank">en</a>

# Math.acos()

## 概述

Math.acos() 返回一个数的反余弦值（单位为弧度），即：

```javascript
∀x∊[-1;1],Math.acos(x)=arccos(x)= the unique y∊[0;π] such thatcos(y)=x
```

## 语法

```javascript
Math.acos(x)
```

## 参数

* `x` 一个数值

## 描述

acos 方法以 -1 到 1 的一个数为参数，返回一个 0 到 pi （弧度）的数值。如果传入的参数值超出了限定的范围，将返回 NaN。

由于 acos 是 Math 的静态方法，所以应该像这样使用：Math.acos()，而不是作为你创建的 Math 实例的属性（Math 不是一个构造函数）。

## 示例

```javascript
Math.acos(-2);  // NaN
Math.acos(-1);  // 3.141592653589793
Math.acos(0);   // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1);   // 0
Math.acos(2);   // NaN
```

对于小于 -1 或大于 1 的值，Math.acos 返回 NaN。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |