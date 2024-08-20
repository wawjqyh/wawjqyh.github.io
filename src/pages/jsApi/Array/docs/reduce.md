<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">en</a>

# Array.prototype.reduce()

reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值。

```javascript
let sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc + val;
}, 0);

console.log(sum);
// 6

let list1 = [[0, 1], [2, 3], [4, 5]];

let list2 = [0, [1, [2, [3, [4, [5, [6]]]]]]];

const flatten = (arr) => {
    return arr.reduce(
        (acc, val) => {
            return acc.concat(Array.isArray(val) ? flatten(val) : val)
        }, []
    );
};

flatten(list1);
// [0, 1, 2, 3, 4, 5]

flatten(list2);
// [ 0, 1, 2, 3, 4, 5, 6 ]
```

## 语法

```javascript
arr.reduce(callback,[initialValue])
```

### 参数

* `callback` 执行数组中每个值的函数，包含四个参数
    * `accumulator` 上一次调用回调返回的值，或者是提供的初始值（initialValue）
    * `currentValue` 数组中正在处理的元素
    * `currentIndex` 数据中正在处理的元素索引，如果提供了 initialValue ，从0开始；否则从1开始
    * `array`  调用 reduce 的数组
* `initialValue` 可选项，其值用于第一次调用 callback 的第一个参数。

### 返回值

函数累计处理的结果

## 描述

reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值 accumulator
（或者上一次回调函数的返回值），当前元素值 currentValue ，当前索引 currentIndex ，调用 reduce 的数组。

回调函数第一次执行时，accumulator 和 currentValue 的取值有两种情况：调用 reduce 时提供initialValue，accumulator 取值为
initialValue ，currentValue 取数组中的第一个值；没有提供 initialValue ，accumulator 取数组中的第一个值，currentValue 取
数组中的第二个值。

`注意: 不提供 initialValue ，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。提供 initialValue ，从索引0开始。`

如果数组为空并且没有提供initialValue， 会抛出TypeError 。如果数组仅有一个元素（无论位置如何）并且没有提供initialValue，
或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。

提供 initialValue 通常更安全，正如下面的例子，没有 initialValue 有三种可能输出：

```javascript
var maxCallback = ( pre, cur ) => Math.max( pre.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue
[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
[                      ].reduce( maxCallback ); // TypeError

// map/reduce; better solution, also works for empty arrays
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );

### reduce如何运行

例如执行下面的代码

```javascript
[0,1,2,3,4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
});
```

callback 被调用四次，每次调用的参数和返回值如下表：

| accumulator | currentValue | currentIndex | array | return      | value |
|:-----------:|:------------:|:------------:|:-----:|:-----------:|:-----:|
| first call  | 0            | 1            | 1     | [0,1,2,3,4] | 1     |
| second call | 1            | 2            | 2     | [0,1,2,3,4] | 3     |
| third call  | 3            | 3            | 3     | [0,1,2,3,4] | 6     |
| fourth call | 6            | 4            | 4     | [0,1,2,3,4] | 10    |

reduce 的返回值是最后一次调用 callback 的返回值（10）。

使用Arrow Function 可以代替一个完整的函数，产生的效果和下面代码相同

```javascript
[0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );
```

如果把初始值作为第二个参数传入 reduce，最终返回值变为20，结果如下：

```javascript
[0,1,2,3,4].reduce( (accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 10);
```

| callback   | accumulator | currentValue | currentIndex | array       | return |
|:----------:|:-----------:|:------------:|:------------:|:-----------:|:------:|
| 第一次调用 | 10          | 0            | 0            | [0,1,2,3,4] | 10     |
| 第二次调用 | 10          | 1            | 1            | [0,1,2,3,4] | 11     |
| 第三次调用 | 11          | 2            | 2            | [0,1,2,3,4] | 13     |
| 第四次调用 | 13          | 3            | 3            | [0,1,2,3,4] | 16     |
| 第五次调用 | 16          | 4            | 4            | [0,1,2,3,4] | 20     |

reduce执行完，最终返回20

## 例子

### 将数组所有项相加

```javascript
var sum = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
}, 0);
// sum is 6
```

或者用箭头函数编写

```javascript
var total = [ 0, 1, 2, 3 ].reduce( ( acc, cur ) => acc + cur, 0 );
```

### 数组扁平化

```javascript
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
```

或者用箭头函数编写

```javascript
var flattened = [[0, 1], [2, 3], [4, 5]].reduce( ( acc, cur ) => acc.concat(cur), [] );
```

### 计算数组中各个值出现次数

```javascript
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### 对象数组的连接要使用展开运算符和初始值

```javascript
// friends - an array of objects
// where object field "books" - list of favorite books
var friends = [
{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
]

// allbooks - list which will contain all friends books +
// additional list contained in initialValue
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ["Alphabet"]);

// allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace",
// "Romeo and Juliet", "The Lord of the Rings", "The Shining"]
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |