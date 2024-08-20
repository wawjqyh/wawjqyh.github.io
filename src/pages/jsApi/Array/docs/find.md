<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank">en</a>

# Array.prototype.find()

find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

```javascript
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].find(isBigEnough); // 130
```

另请参见  findIndex() 方法，它返回数组中找到的元素的索引，而不是其值。

如果你需要找到一个元素的位置或者一个元素是否存在于数组中，使用Array.prototype.indexOf() 或 Array.prototype.includes()。

## 语法

```javascript
arr.find(callback[, thisArg])
```

### 参数

* `callback` 在数组每一项上执行的函数，接收 3 个参数：
    * `element` 当前遍历到的元素。
    * `index` 当前遍历到的索引。
    * `array` 数组本身。

* `thisArg 可选` 指定 callback 的 this 参数。

## 描述

find方法对数组中的每一项元素执行一次callback 函数，直至有一个callback返回true。当找到了这样一个元素后，该方法会立即返回
这个元素的值，否则返回undefined。注意callback函数只会在分配了值的数组索引上调用，而不会在已删除或未分配值的索引上调用。

调用callback函数带有3个参数：当前元素的值、当前元素的索引，以及数组本身。

如果提供了thisArg参数，那么它将作为每次callback函数执行时的上下文对象，否则上下文对象为undefined。

find方法不会改变数组。

在第一次调用callback函数时会确定元素的索引范围，因此在find方法开始执行之后添加到数组的新元素将不会被callback函数访问到。
如果数组中一个尚未被callback函数访问到的元素的值被callback函数所改变，那么当callback函数访问到它时，它的值是将是根据它在
数组中的索引所访问到的当前值。被删除的元素不会被访问到。

## 示例

### 用对象的属性查找数组里的对象

```javascript
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```

### 寻找数组中的质数

下面的例子展示了如何从一个数组中寻找质数（如果找不到质数则返回undefined）
```javascript
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |
| ECMAScript 2017 Draft (ECMA-262)        | Draft    |                    |