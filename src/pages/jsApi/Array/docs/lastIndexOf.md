<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" target="_blank">en</a>

# Array.prototype.lastIndexOf()

## 概述

lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的
后面向前查找，从 fromIndex 处开始。

## 语法

```javascript
arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
```

### 参数

* `searchElement` 被查找的元素。
* `fromIndex` 从此位置开始逆向查找。默认为数组的长度减 1，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会
被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数
组长度，则方法返回 -1，即数组不会被查找。

## 描述

lastIndexOf 使用严格相等（strict equality，即 ===）比较 searchElement 和数组中的元素。

## 示例

### 使用 lastIndexOf

下例使用 lastIndexOf 定位数组中的值。
```javascript
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3
```

### 查找所有元素

下例使用 lastIndexOf 查找到一个元素在数组中所有的索引（下标），并使用 push 将所有添加到另一个数组中。
```javascript
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);

while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0];
```

Note that we have to handle the case idx == 0 separately here because the element will always be found regardless of the
fromIndex parameter if it is the first element of the array. This is different from the indexOf method.

`注意，必须单独处理 idx == 0 时的情况，因为如果元素是数组中的第一个元素，则总会被查找，忽略了 fromIndex 参数。 这点和
indexOf 方法不同。（译注：个人觉得这句话解释有问题，idx == 0 时，array.lastIndexOf(element, idx - 1) 会从最后一个元素向
前查找，这样就重复查找，且死循环了，所以要做一个判断，而且已经查找到第一个元素了，就该结束了）。`

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |