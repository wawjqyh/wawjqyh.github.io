<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">en</a>

# Array.prototype.map()

map() 方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数。

```javascript
let numbers = [1, 5, 10, 15];
let roots = numbers.map(function(x) {
    return x * 2;
});
// roots is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

let numbers = [1, 4, 9];
// let roots = numbers.map(Math.sqrt);
let roots = numbers.map(function(x){
    return Math.sqrt(x);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```

## 语法

```javascript
const new_array = arr.map(callback[, thisArg])
```

### 参数

* `callback` 生成新数组元素的函数，使用三个参数：
    * `currentValue` callback 的第一个参数，数组中正在处理的当前元素。
    * `index` callback 的第二个参数，数组中正在处理的当前元素的索引。
    * `array` callback 的第三个参数，map 方法被调用的数组。
* `thisArg` 可选的。执行 callback 函数时 使用的this 值。

### 返回值

一个新数组，每个元素都是回调函数的结果。

## 描述

map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成
一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。

callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

如果 thisArg 参数有值，则每次 callback 函数被调用的时候，this 都会指向 thisArg 参数上的这个对象。如果省略了 thisArg 参数,
或者赋值为 null 或 undefined，则 this 指向全局对象 。

map 不修改调用它的原数组本身（当然可以在 callback 执行时改变原数组）。

使用 map 方法处理数组时，数组元素的范围是在 callback 方法第一次调用之前就已经确定了。在 map 方法执行的过程中：原数组中新
增加的元素将不会被 callback 访问到；若已经存在的元素被改变或删除了，则它们的传递到 callback 的值是 map 方法遍历到它们的
那一时刻的值；而被删除的元素将不会被访问到。

## 示例

### 求数组中每个元素的平方根

下面的代码创建了一个新数组，值为原数组中对应数字的平方根。
```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
/* roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9] */
```

### 使用 map 重新格式化数组中的对象

以下代码将一个包含对象的数组用以创建一个包含新重新格式化对象的新数组。
```javascript
var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
var reformattedArray = kvArray.map(function(obj){
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
// reformattedArray is now [{1:10}, {2:20}, {3:30}],
// kvArray is still [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}]
```

### 将数组中的单词转换成对应的复数形式.

下面的代码将一个数组中的所有单词转换成对应的复数形式.
```javascript
function fuzzyPlural(single) {
  var result = single.replace(/o/g, 'e');
  if( single === 'kangaroo'){
    result += 'se';
  }
  return result;
}

var words = ["foot", "goose", "moose", "kangaroo"];
console.log(words.map(fuzzyPlural));

// ["feet", "geese", "meese", "kangareese"]
```

### 一般的 map 方法

下面的例子演示如何在一个 String  上使用 map 方法获取字符串中每个字符所对应的 ASCII 码组成的数组：
```javascript
var map = Array.prototype.map
var a = map.call("Hello World", function(x) {
  return x.charCodeAt(0);
})
// a的值为[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

### querySelectorAll 应用

下面代码展示了如何去遍历用 querySelectorAll 得到的动态对象集合。在这里，我们获得了文档里所有选中的选项，并将其打印：
```javascript
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
```

### 反转字符串

```javascript
var str = '12345';
Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join('');

// Output: '54321'
// Bonus: use '===' to test if original string was a palindrome
```

### 使用技巧案例

通常情况下，map 方法中的 callback 函数只需要接受一个参数，就是正在被遍历的数组元素本身。但这并不意味着 map 只给 callback
传了一个参数。这个思维惯性可能会让我们犯一个很容易犯的错误。
```javascript
// 下面的语句返回什么呢:
["1", "2", "3"].map(parseInt);
// 你可能觉的会是[1, 2, 3]
// 但实际的结果是 [1, NaN, NaN]

// 通常使用parseInt时,只需要传递一个参数.
// 但实际上,parseInt可以有两个参数.第二个参数是进制数.
// 可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素,
// 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
// parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.

/*
//应该使用如下的用户函数returnInt

function returnInt(element){
  return parseInt(element,10);
}

["1", "2", "3"].map(returnInt);
// 返回[1,2,3]
*/
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |