<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" target="_blank">en</a>

# Array.prototype.concat()

concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```javascript
let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];

let arr3 = arr1.concat(arr2);

console.log(arr3);
// results in a new array
// [ "a", "b", "c", "d", "e", "f" ]

console.log(arr1);
// ["a", "b", "c"]

console.log(arr2);
// ["d", "e", "f"]
```

## 语法

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

## 参数

* `valueN` 需要与原数组合并的数组或非数组值。详见下文。

## 返回值

新的 Array 实例

## 描述

concat 方法将创建一个新的数组，然后将调用它的对象(this 指向的对象)中的元素以及所有参数中的数组类型的参数中的元素以及非数
组类型的参数本身按照顺序放入这个新数组,并返回该数组.

concat 方法并不修改调用它的对象(this 指向的对象) 和参数中的各个数组本身的值,而是将他们的每个元素拷贝一份放在组合成的新数
组中.原数组中的元素有两种被拷贝的方式:

* 对象引用(非对象直接量):concat 方法会复制对象引用放到组合的新数组里,原数组和新数组中的对象引用都指向同一个实际的对象,
所以,当实际的对象被修改时,两个数组也同时会被修改.

* 字符串和数字(是原始值,而不是包装原始值的 String 和 Number 对象): concat 方法会复制字符串和数字的值放到新数组里.

`注意: 连接一个或多个数组（值）将不会改变原本的数组/值。进一步说，任何对新数组的操作都不会对原有的数组造成影响（仅当该元
素不是对象的引用时），反之亦然。`

## 示例

### 连接两个数组

下面的代码演示两个数组合并为一个新数组:

```javascript
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// 组成新数组 ["a", "b", "c", 1, 2, 3]; 原数组 alpha 和 numeric 未被修改
var alphaNumeric = alpha.concat(numeric);
```

### 连接三个数组

下面的代码演示三个数组合并为一个新数组:

```javascript
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// 组成新数组[1, 2, 3, 4, 5, 6, 7, 8, 9]; 原数组 num1, num2, num3 未被修改
var nums = num1.concat(num2, num3);
```

### 将非数组值合并到数组里

下面的代码演示将多个数组和多个非数组值合并为一个新数组:

```javascript
var alpha = ['a', 'b', 'c'];

// 组成新数组 ["a", "b", "c", 1, 2, 3], 原alpha数组未被修改
var alphaNumeric = alpha.concat(1, [2, 3]);
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |