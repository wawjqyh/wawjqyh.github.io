<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length" target="_blank">en</a>

# Array.length

## 概述
`length` 属性表示一个无符号 `32-bit` 整数，返回一个数组中的元素个数

| 属性         |       |
|:-------------|:-----|
| writable     | true  |
| enumerable   | false |
| configurable | false |

## 语法
`array.length`

## 描述
`length` 属性的值是一个 0 到 2<sup>32</sup>-1 的整数。

你可以通过减小 length 属性的值来截短一个数组，但不能通过增大 length 属性的值来延长这个数组，也就是说，如果你将一个拥有两
个元素的数组的 length 属性设置为 3，那么这个数组仍然只包含两个元素，最后一个元素不存在。因此，length属性不能真正表示数组
中定义的值的数目。

## 示例

### 返回数组的长度
```javascript
var items = ["shoes", "shirts", "socks", "sweaters"];

items.length;

// 返回 4
```

### 遍历数组

下面的例子中，遍历数组 numbers，并把每个元素的值修改为原值的2倍。
```javascript
var numbers = [1,2,3,4,5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
// numbers现在为[2,4,6,8,10];
```

### 截短数组

下面的例子中，如果数组 statesUS 的长度大于 50，则把该数组的长度截短为 50。
```javascript
if (statesUS.length > 50) {
   statesUS.length=50
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |