<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asin" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin" target="_blank">en</a>

# Math.asin()

## 概述

Math.asin() 方法返回一个数值的反正弦（单位为弧度）

## 语法

```javascript
Math.asin(x)
```

### 参数

* `x` 一个数值

## 描述

asin 方法接受 -1 到 1 之间的数值作为参数，返回一个介于 - π/2  到  π/2  弧度的数值。如果接受的参数值超出范围，则返回 NaN。

由于 asin 是 Math 的静态方法，所有应该像这样使用：Math.asin()，而不是作为你创建的 Math 实例的方法。

## 示例

```javascript
Math.asin(-2);  // NaN
Math.asin(-1);  // -1.5707963267948966 (-pi/2)
Math.asin(0);   // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1);   // 1.570796326794897 (pi/2)
Math.asin(2);   // NaN
```
对于小于 -1 或大于 1 的参数值，Math.asin 返回 NaN。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |