<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">en</a>

# Array.prototype.filter()

filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。

```javascript
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

## 语法

```javascript
var new_array = arr.filter(callback[, thisArg])
```

### 参数

* `callback` 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。返回true表示保留该元素（通过测试），false则不保留。

* `thisArg 可选` 执行 callback 时的用于 this 的值。

### 返回值

一个新的通过测试的元素的集合的数组

## 描述

filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或 等价于 true 的值 的元素创建一个新
数组。callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测
试的元素会被跳过，不会被包含在新数组中。

callback 被调用时传入三个参数：

* 元素的值
* 元素的索引
* 被遍历的数组

如果为 filter 提供一个 thisArg 参数，则它会被作为 callback 被调用时的 this 值。否则，callback 的 this 值在非严格模式下将
是全局对象，严格模式下为 undefined。The thisvalue ultimately observable by callback is determined according to the usual
rules for determining thethis seen by a function.

`filter` 不会改变原数组。

filter 遍历的元素范围在第一次调用 callback 之前就已经确定了。在调用 filter 之后被添加到数组中的元素不会被 filter 遍历到。
如果已经存在的元素被改变了，则他们传入 callback 的值是 filter 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

## 示例

### 筛选排除掉所有的小值

下例使用 filter 创建了一个新数组，该数组的元素由原数组中值大于 10 的元素组成。
```javascript
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |