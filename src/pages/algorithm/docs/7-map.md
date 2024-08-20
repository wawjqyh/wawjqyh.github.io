# 字典

## 1 概念

字典也是一种存储`唯一值`的数据结构，它是以键值对的形式来存储的

ES6 中有字典这个数据结构，Map

## 2 JavaScript 中的 Map

### 2.1 概念

Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键（key）。

它的方法和属性如下：

- `new Map()` —— 创建 map
- `map.set(key, value)` —— 根据键存储值
- `map.get(key)` —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined
- `map.has(key)` —— 如果 key 存在则返回 true，否则返回 false
- `map.delete(key)` —— 删除指定键的值
- `map.clear()` —— 清空 map
- `map.size` —— 返回当前元素个数

与普通对象 Object 的不同点：

1. 任何键、对象都可以作为键
2. 有其他的便捷方法，如 size 属性

### 2.2 Map 迭代

如果要在 map 里使用循环，可以使用以下三个方法：

1. `map.keys()` —— 遍历并返回所有的键（returns an iterable for keys）
2. `map.values()` —— 遍历并返回所有的值（returns an iterable for values）
3. `map.entries()` —— 遍历并返回所有的实体（returns an iterable for entries）[key, value]，for..of 在默认情况下使用的就是这个

### 2.3 从对象创建 Map

`Object.entries`

创建 Map:

```javascript
// 键值对 [key, value] 数组
let map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1']
]);

alert(map.get('1')); // str1
```

从一个对象创建一个 Map：

```javascript
let obj = {
  name: 'John',
  age: 30
};

let map = new Map(Object.entries(obj));

alert(map.get('name')); // John
```

这里，`Object.entries` 返回键/值对数组：`[ ["name","John"], ["age", 30] ]`。这就是 Map 所需要的格式

### 2.4 从 Map 创建对象

`Object.fromEntrie`

`Object.fromEntries` 方法的作用是相反的：给定一个具有 `[key, value]` 键值对的数组，它会根据给定数组创建一个对象：

```javascript
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// 现在 prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
```

我们可以使用 `Object.fromEntries` 从 Map 得到一个普通对象`（plain object）`

```javascript
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // 创建一个普通对象（plain object）(*)

// 完成了！
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
```

## 3 实例

### 3.1 leetcode 349 两个数组的交集

### 3.2 leetcode 20 有效的括号

### 3.3 leetcode 1 两数之和

### 3.4 leetcode 3 无重复字符的最大子串

### 3.5 leetcode 76 最小覆盖子串
