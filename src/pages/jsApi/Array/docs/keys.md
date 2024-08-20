<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" target="_blank">en</a>

# Array.prototype.keys()

keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。

```javascript
let arr = ["a", "b", "c"];

let iterator = arr.keys();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next());
// Object {value: 0, done: false}

console.log(iterator.next());
// Object {value: 1, done: false}

console.log(iterator.next());
// Object {value: 2, done: false}

console.log(iterator.next());
// Object {value: undefined, done: true}
```

## 语法

```javascript
arr.keys()
```

### 返回值

一个新的 Array 迭代器对象。

## 示例

### 演示一下迭代器的执行原理

```javascript
var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### 索引迭代器会包含那些没有对应元素的索引

```javascript
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |