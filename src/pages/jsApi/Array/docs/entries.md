<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" target="_blank">en</a>

# Array.prototype.entries()

entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

```javascript
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next().value);
// [0, "a"]
console.log(iterator.next().value);
// [1, "b"]
console.log(iterator.next().value);
// [2, "c"]
```

## 语法

```javascript
arr.entries()
```

### 返回值
一个新的 Array 迭代器对象。

## 示例

### 使用for…of 循环

```javascript
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

for (let e of iterator) {
    console.log(e);
}

// [0, "a"]
// [1, "b"]
// [2, "c"]
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |