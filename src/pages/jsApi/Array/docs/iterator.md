<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator" target="_blank">en</a>

# Array.prototype\[@@iterator\]()

@@iterator属性和 values() 属性的初始值均为同一个函数对象

## 语法

```javascript
arr[Symbol.iterator]()
```

### 返回值

数组的 iterator 方法，默认情况下与 values() 返回值相同

## 示例

### 使用 for...of 循环进行迭代

```javascript
var arr = ['w', 'y', 'k', 'o', 'p'];
// 您的浏览器必须支持for...of循环
// 以及let —— 将变量作用域限定在 for 循环中
for (let letter of arr) {
  console.log(letter);
}
```

### 另一种迭代方式

```javascript
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |