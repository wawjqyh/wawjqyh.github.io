<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round" target="_blank">en</a>

# Math.round()

Math.round() 函数返回一个数字四舍五入后最接近的整数值。

## 语法

```javascript
Math.round(x)
```

### 参数

* `x` 一个数值

### 返回值

给定数字的值四舍五入到最接近的整数。

## 描述

如果 number 的小数部分是 .5 或者更大，输入的参数被四舍五入到下一个绝对值更大的整数。 如果 number 的小数部分小于 .5，输入
的参数被四舍五入到下一个绝对值更小的整数。

如果 number 的小数部分恰好等于 .5，输入的参数被四舍五入到下一个在正无穷（+∞）方向上的整数。注意，与很多其他语言中的round()
函数不同，Math.round()并不总是四舍五入到远离0的方向（尤其是在负数的小数部分恰好等于.5的情况下）。

因为 round 是 Math 的静态方法，我们可以直接用作 Math.round()，而不是作为一个你自己创建的 Math 对象的方法。

## 示例

### 使用 Math.round

```javascript
// 返回 20
x = Math.round(20.49);

// 返回 21
x = Math.round(20.5);

// 返回 -20
x = Math.round(-20.5);

// 返回 -21
x = Math.round(-20.51)

// Returns the value 1 (!)
// Note the rounding error because of inaccurate floating point arithmetics
// Compare this with Math.round10(1.005, -2) from the example below
x = Math.round(1.005*100)/100;
```

### 十进制调整

```javascript
// Closure
(function(){

  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number}      The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }

})();

// Round
Math.round10(55.55, -1); // 55.6
Math.round10(55.549, -1); // 55.5
Math.round10(55, 1); // 60
Math.round10(54.9, 1); // 50
Math.round10(-55.55, -1); // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1); // -50
Math.round10(-55.1, 1); // -60
Math.round10(1.005, -2); // 1.01 -- compare this with Math.round(1.005*100)/100 above
// Floor
Math.floor10(55.59, -1); // 55.5
Math.floor10(59, 1); // 50
Math.floor10(-55.51, -1); // -55.6
Math.floor10(-51, 1); // -60
// Ceil
Math.ceil10(55.51, -1); // 55.6
Math.ceil10(51, 1); // 60
Math.ceil10(-55.59, -1); // -55.5
Math.ceil10(-59, 1); // -50
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |