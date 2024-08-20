<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank">en</a>

# Array.from()

方法从一个类似数组或可迭代对象创建一个新的数组实例。

```javascript
const bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]

Array.from('foo');
// ["f", "o", "o"]
```

## 语法

`Array.from(arrayLike[, mapFn[, thisArg]])`

### 参数

* `arrayLike` 想要转换成真实数组的类数组对象或可遍历对象。

* `mapFn 可选` 可选参数，如果指定了该参数，则最后生成的数组会经过该函数的加工处理后再返回。

* `thisArg 可选` 可选参数，执行 mapFn 函数时 this 的值。

### 返回值

一个新的 `Array` 实例

## 描述

Array.from() 允许你从下面两者来创建数组：

* 类数组对象（拥有一个 length 属性和若干索引属性的任意对象）
* 可遍历对象（你可以从它身上迭代出若干个元素的对象，比如有 Map 和 Set 等）

`Array.from()` 方法有一个可选参数 `mapFn`，让你可以在最后生成的数组上再执行一次 `map` 方法后再返回。也就是说 `Array.from(obj, mapFn, thisArg)`
就相当于 `Array.from(obj).map(mapFn, thisArg)`, 除非创建的不是可用的中间数组。 这对一些数组的子类,如  `typed arrays` 来说很重要,
因为中间数组的值在调用 `map()` 时需要是适当的类型。

from() 的 length 属性为 1 。

在 `ES2015` 中， `Class` 语法允许我们为内置类型（比如 Array）和自定义类新建子类（比如叫 SubArray）。
这些子类也会继承父类的静态方法，比如 SubArray.from()，调用该方法后会返回子类 SubArray 的一个实例，而不是 Array 的实例。

## 示例

### Array from a String

```javascript
Array.from('foo');
// ["f", "o", "o"]
```

### Array from a Set

```javascript
var s = new Set(['foo', window]);
Array.from(s);
// ["foo", window]
```

### Array from a Map

```javascript
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]
```

### Array from an Array-like object (arguments)

```javascript
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [1, 2, 3]
```

### Using arrow functions and Array.from

```javascript
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |
| ECMAScript Latest Draft (ECMA-262)      | Draft    |                    |