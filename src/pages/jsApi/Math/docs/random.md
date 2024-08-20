<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">en</a>

# Math.random()

Math.random() 函数返回一个浮点,  伪随机数在范围[0，1)，也就是说，从0（包括0）往上，但是不包括1（排除1），然后您可以缩放到
所需的范围。实现将初始种子选择到随机数生成算法;它不能被用户选择或重置。他不能被用户选择或重置。

<p class="warning">
[0，1) === [即从0（包含0）到...1但不包括1（排除1）。
<br>
[0，1) === 左闭右开区间
</p>

<p class="warning">
Math.random() 不能提供像密码一样安全的随机数字
<br>
不能使用它们来处理有关安全的事情。使用Web Crypto API 来代替, 和更精确的window.crypto.getRandomValues() 方法.
</p>

## 语法

```javascript
Math.random()
```

### 返回参数

一个浮点型伪随机数字在0（包括0）和1（不包括）之间

## 示例

Note that as numbers in JavaScript are IEEE 754 floating point numbers with round-to-nearest-even behavior, the ranges
claimed for the functions below (excluding the one for Math.random() itself) aren't exact. If extremely large bounds are
chosen (253 or higher), it's possible in extremely rare cases to calculate the usually-excluded upper bound.
（注：round-to-nearest-even采用最近舍入的去偶数舍入的方式，对.5的舍入上，采用取偶数的方式）

### 得到一个大于等于0，小于1之间的随机数

```javascript
function getRandom() {
  return Math.random();
}
```

### 得到一个两数之间的随机数

这个例子返回了一个在指定值之间的随机数。这个值比min大（可能与min相等）, 以及比max小(但是不等于max).

```javascript
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### 得到一个两数之间的随机整数

这个例子返回了一个在指定值之间的随机整数。这个值比min大（如果min不是整数，那么下一个整数大于min）, 以及比max小(但是不等于max).

```javascript
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
```

<p class="warning">也许很容易让人想用舍入来完成这个任务，但是这样做会导致你的随机数处于一个不均匀的分布，这可能不符合你的需求</p>

### 得到一个两数之间的随机整数，包括两个数在内

当getRandomInt() 函数在最小值之上，它将排除最大值. 如果你需要结果包含最小值和最大值，怎么办呢?  getRandomIntInclusive() 函数将能完成.

```javascript
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |