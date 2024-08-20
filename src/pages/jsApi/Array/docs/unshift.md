<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" target="_blank">en</a>

# Array.prototype.unshift()

unshift() 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。

```javascript
let a = [1, 2, 3];
a.unshift(4, 5);

console.log(a);
// [4, 5, 1, 2, 3]
```

## 语法

```javascript
arr.unshift(element1, ..., elementN)
```

### 参数

* `element1, ..., elementN` 要添加到数组开头的元素。

### 返回值

当一个对象调用该方法时，返回其 length 属性值。

## 描述

unshift 方法会在调用它的类数组（array-like）对象的开始位置插入给定的参数。

unshift 特意被设计成具有通用性；这个方法能够通过 call 或 apply 方法作用于类似数组的对象上。不过对于没有 length 属性
（代表从0开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。

## 例子

```javascript
var arr = [1, 2];

arr.unshift(0); //result of call is 3, the new array length
//arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
//arr is [-2, -1, 0, 1, 2]

arr.unshift( [-3] );
//arr is [[-3], -2, -1, 0, 1, 2]
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |