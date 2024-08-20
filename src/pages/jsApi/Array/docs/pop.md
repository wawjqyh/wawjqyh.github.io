<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" target="_blank">en</a>

# Array.prototype.pop()

## 概述

pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

```javascript
let a = [1, 2, 3];
a.length; // 3

a.pop(); // 3

console.log(a); // [1, 2]
a.length; // 2
```

## 语法
```javascript
arr.pop()
```

### 返回值

从数组中删除的元素; undefined 如果数组为空。

## 描述

pop 方法从一个数组中删除最后一个元素，并将该值返回给调用者。

pop 是故意通用的; 这个方法可以是 called 或applied  到类似数组的对象。不包含反映一系列连续的最后一个的长度属性的对象，基于
零的数值属性可能不会以任何有意义的方式表现。

如果你在一个空数组上调用 pop()，它返回  undefined。

## 示例

### 删除掉数组的最后一个元素

下面的代码首先创建了一个拥有四个元素的数组 myFish，然后删除掉它的最后一个元素。
```javascript
let myFish = ["angel", "clown", "mandarin", "surgeon"];

let popped = myFish.pop();

console.log(myFish);
// ["angel", "clown", "mandarin"]

console.log(popped);
// surgeon
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |
| ECMAScript 2017 Draft (ECMA-262)        | Draft    |                    |