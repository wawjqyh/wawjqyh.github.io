<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">en</a>

# Array.prototype.shift()

shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

```javascript
let a = [1, 2, 3];
let b = a.shift();

console.log(a);
// [2, 3]

console.log(b);
// 1
```

## 语法

```javascript
arr.shift()
```

### 返回值

从数组中删除的元素; undefined 如果数组为空。

## 描述

shift 方法移除索引为 0 的元素(即第一个元素)，并返回被移除的元素，其他元素的索引值随之减 1。如果 length 属性的值为 0 (长度为 0)，则返回 undefined。

shift 方法并不局限于数组：该方法亦可通过 call 或 apply 作用于对象上。对于不包含 length 属性的对象，将添加一个值为 0 的 length 属性。

## 示例

### 移除数组中的一个元素

以下代码显示了删除其第一个元素之前和之后的myFish数组。它还显示已删除的元素：

```javascript
let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('调用 shift 之前: ' + myFish);
// "调用 shift 之前: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('调用 shift 之后: ' + myFish);
// "调用 shift 之后: clown,mandarin,surgeon"

console.log('被删除的元素: ' + shifted);
// "被删除的元素: angel"
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |