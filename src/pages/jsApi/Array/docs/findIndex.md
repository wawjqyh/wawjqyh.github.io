<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank">en</a>

# Array.prototype.findIndex()

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。

```javascript
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].findIndex(isBigEnough); // 3
```

另请参见  find() 方法，它返回数组中找到的元素的值，而不是其索引。

## 语法

```javascript
arr.findIndex(callback[, thisArg])
```

### 参数
* `callback` 针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:
    * `element` 当前元素.
    * `index` 当前元素的索引.
    * `array` 调用findIndex的数组.
* `thisArg 可选` 执行 callback 时作为 this对象 的值.

## 描述

findIndex() 方法对数组中的每一个元素执行一次回调函数直至有一个回调函数返回真值 。如果找到了一个这样的元素， 则 findIndex
将会立刻返回这个元素的索引。否则 findIndex 将会返回 -1。回调函数只有在数组的索引被分配值的时候才会被调用，若是索引被删除
或者没有被赋值将不会被调用。

回调函数调用时有三个参数：元素的值，元素的索引，以及被遍历的数组。

如果一个 thisArg 参数被提供给 findIndex, 它将会被当作 this 使用在每次回调函数被调用的时候。如果没有被提供，将会使用undefined。

findIndex 不会修改所调用的数组。

在第一次调用callback函数时会确定元素的索引范围，因此在findIndex方法开始执行之后添加到数组的新元素将不会被callback函数访
问到。如果数组中一个尚未被callback函数访问到的元素的值被callback函数所改变，那么当callback函数访问到它时，它的值是将是根
据它在数组中的索引所访问到的当前值。被删除的元素不会被访问到。

## 示例

下面的示例演示了如何查找一个数组中首个质数元素的索引, 找不到则返回 -1.
```javascript
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) return false;
    }
    return (element > 1);
}

console.log( [4, 6, 8, 12].findIndex(isPrime) ); // -1, 没找到质数元素
console.log( [4, 6, 7, 12].findIndex(isPrime) ); // 2
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |