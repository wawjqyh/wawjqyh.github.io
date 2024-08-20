<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank">en</a>

# Array.prototype.includes()

includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。

```javascript
var a = [1, 2, 3];
a.includes(2); // true
a.includes(4); // false
```

## 语法
```javascript
arr.includes(searchElement)
arr.includes(searchElement, fromIndex)
```

### 参数

* `searchElement` 需要查找的元素值
* `fromIndex 可选` 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。

### 返回值

一个 Boolean

## 示例

```javascript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

### fromIndex 大于等于数组长度

如果fromIndex 大于等于数组长度 ，则返回 false 。该数组不会被搜索。
```javascript
var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   //false
arr.includes('c', 100); // false
```

### 计算出的索引小于 0

如果 fromIndex 为负值，计算出的索引将作为开始搜索searchElement的位置。如果计算出的索引小于 0，则整个数组都会被搜索。
```javascript
// 数组长度是3
// fromIndex 是 -100
// computed index 是 3 + (-100) = -97

var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
```

### includes() 作为一个通用方法

includes() 方法有意设计为通用方法。它不要求this值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。下面的例子
展示了 在函数的arguments对象上调用的includes() 方法。

```javascript
(function() {
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |
| ECMAScript 2017 Draft (ECMA-262)        | Draft    |                    |