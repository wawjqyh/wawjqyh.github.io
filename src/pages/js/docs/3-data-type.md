# 数据类型

## 1 原始类型的方法

### 1.1 概念

**原始值：**

- 是原始类型中的一种值
- 在 JavaScript 中有 7 种原始类型：string，number，bigint，boolean，symbol，null 和 undefined

**对象：**

- 能够存储多个值作为属性
- 可以使用大括号 `{}` 创建对象，例如：`{name: "John", age: 30}`。JavaScript 中还有其他种类的对象，例如函数就是对象

### 1.2 当作对象的原始类型

JavaScript 允许我们像使用对象一样使用原始类型（字符串，数字等）

- 对诸如字符串或数字之类的原始类型执行一些操作。最好将它们作为方法来访问
- 原始类型必须尽可能的简单轻量
- 原始类型仍然是原始的。与预期相同，提供单个值
- JavaScript 允许访问字符串，数字，布尔值和 symbol 的方法和属性
- 为了使它们起作用，创建了提供额外功能的特殊“对象包装器”，使用后即被销毁

“对象包装器”对于每种原始类型都是不同的，它们被称为 String、Number、Boolean 和 Symbol

### 1.3 构造器仅供内部使用

> 不直接使用 `new Number(10)`，这个用法仅供内部使用

> `Number('10')`; `String(10)`; `Boolean(0)`; 可用于类型转换

```javascript
let val1 = 10;
let val2 = Number(10);
let val3 = new Number(10);

val1 === val2; // true
val1 === val3; // false
val1 == val2; // true

typeof val3; // object
```

## 2 数字类型

### 2.1 数字的表示方法

```javascript
let billion = 1e9; // 10 亿，字面意思：数字 1 后面跟 9 个 0

// "e" 把数字乘以 1 后面跟着给定数量的 0 的数字
1e3 === 1 * 1000;
1.23e6 === 1.23 * 1000000;

// 小数
let ms = 0.000001;
let ms = 1e-6; // 1 的左边有 6 个 0
1e-3 === 1 / 1000; // 0.001

// 十六进制
alert(0xff); // 255
alert(0xff); // 255（一样，大小写没影响

// 二进制和八进制数字系统很少使用，但也支持使用 0b 和 0o 前缀
let a = 0b11111111; // 二进制形式的 255
let b = 0o377; // 八进制形式的 255
alert(a == b); // true，两边是相同的数字，都是 255
```

只有这三种进制支持这种写法。对于其他进制，我们应该使用函数 `parseInt`

### 2.2 toString(base)

base 的范围可以从 2 到 36。默认情况下是 10

```javascript
let num = 255;

alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111
```

> `123456..toString(36)` 中有两个点。接在一个数字上调用一个方法，就需要在它后面放置两个点 `..`

### 2.3 精度问题

在内部，数字是以 64 位格式 IEEE-754 表示的，所以正好有 64 位可以存储一个数字：其中 52 位被用于存储这些数字，其中 11 位用于存储小数点的位置（对于整数，它们为零），而 1 位用于符号

```javascript
alert(0.1 + 0.2 == 0.3); // false

alert(0.1 + 0.2); // 0.30000000000000004
```

一个数字以其二进制的形式存储在内存中，一个 1 和 0 的序列。二进制形式中 0.1，0.2 这样的小数是无限循环小数

使用二进制数字系统无法 精确 存储 0.1 或 0.2，就像没有办法将三分之一存储为十进制小数一样

**十进制转二进制：**

```
// 十进制整数转二进制：除 2 取余 逆序
11 => 1011

// 十进制小数转二进制：乘二取整
0.75 => 0.11

// 二进制转十进制：
110.11 = 1 * 2^2 + 1 * 2^1 + 0 * 2^0 + 1 * 2^-1 + 1 * 2^-2
110.11 = 4 + 2 + 0 + 0.5 + 0.25 = 6.75
```

**解决方案：toFixed**

```javascript
let sum = 0.1 + 0.2;
alert(+sum.toFixed(2)); // 0.3
```

### 2.4 isFinite 和 isNaN

`isNaN(value)` 将其参数转换为数字，然后测试它是否为 `NaN`：

```js
// 因为 NaN 不等于任何值，包括它自身，所以需要用这个方法判断
alert(NaN === NaN); // false

alert(isNaN(NaN)); // true
alert(isNaN('str')); // true
```

`isFinite(value)` 将其参数转换为数字，如果是常规数字，则返回 `true`：

```js
alert(isFinite('15')); // true
alert(isFinite('str')); // false，因为是一个特殊的值：NaN
alert(isFinite(Infinity)); // false，因为是一个特殊的值：Infinity
```

> 在所有数字函数中，包括 `isFinite`，空字符串或仅有空格的字符串均被视为 0

### 2.5 parseInt 和 parseFloat

使用加号 `+` 或 `Number()` 的数字转换是严格的。如果一个值不完全是一个数字，就会失败

`parseInt` 和 `parseFloat` 可以从字符串中“读取”数字，直到无法读取为止。如果发生 `error`，则返回收集到的数字

```javascript
alert(parseInt('100px')); // 100
alert(parseFloat('12.5em')); // 12.5

alert(parseInt('12.3')); // 12，只有整数部分被返回了
alert(parseFloat('12.3.4')); // 12.3，在第二个点出停止了读取

alert(parseInt('a123')); // NaN，第一个符号停止了读取
```

`parseInt()` 函数具有可选的第二个参数。它指定了数字系统的基数

```javascript
alert(parseInt('0xff', 16)); // 255
alert(parseInt('ff', 16)); // 255，没有 0x 仍然有效

alert(parseInt('2n9c', 36)); // 123456
```

## 3 字符串

### 3.1 特殊字符

| 字符             | 描述                                                                 |
| ---------------- | -------------------------------------------------------------------- |
| `\n`             | 换行                                                                 |
| `\r`             | 回车：不单独使用。Windows 文本文件使用两个字符 \r\n 的组合来表示换行 |
| `\'`, `\"`       | 引号                                                                 |
| `\\`             | 反斜线                                                               |
| `\t`             | 制表符                                                               |
| `\b`, `\f`, `\v` | 退格，换页，垂直标签 —— 为了兼容性，现在已经不使用了                 |
| `\xXX`           |                                                                      |
| `\uXXXX`         |                                                                      |
| `\u{X…XXXXXX}`   |                                                                      |

- `\xXX` 具有给定十六进制 Unicode XX 的 Unicode 字符，例如：'\x7A' 和 'z' 相同
- `\uXXXX` 以 UTF-16 编码的十六进制代码 XXXX 的 unicode 字符，例如 \u00A9 —— 是版权符号 © 的 unicode。它必须正好是 4 个十六进制数字
- `\u{X…XXXXXX}` 具有给定 UTF-32 编码的 unicode 符号。一些罕见的字符用两个 unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了

```javascript
alert('\u00A9'); // ©
alert('\u{20331}'); // 佫，罕见的中国象形文字（长 unicode）
alert('\u{1F60D}'); // 😍，笑脸符号（另一个长 unicode）
```

### 3.2 访问字符串

如果没有找到字符，`[]` 返回 `undefined`，而 `charAt` 返回一个空字符串

```javascript
let str = `Hello`;

// 第一个字符
alert(str[0]); // H
alert(str.charAt(0)); // H

alert(str[1000]); // undefined
alert(str.charAt(1000)); // ''（空字符串）
```

> 字符串是不可变的

```javascript
let str = 'Hi';
str[0] = 'h'; // error
```

### 3.3 字符串方法

- `toLowerCase` 小写
- `toUpperCase` 大写
- `str.indexOf` 查找字符串位置
- `includes` 是否包含 xxx 字符串
- `startsWith` 是否以 xxx 开头
- `endsWith` 是否以 xxx 结尾
- `slice(start [, end])` 返回字符串从 start 到（但不包括）end 的部分
- `substring(start [, end])` 返回字符串在 start 和 end 之间 的部分
- `substr(start [, length])` 返回字符串从 start 开始的给定 length 的部分
- `str.codePointAt(pos)` 返回在 pos 位置的字符代码
- `String.fromCodePoint(code)` 通过数字 code 创建字符

## 4 数组

### 4.1 内部机制

数组是一种特殊的对象。使用方括号来访问属性 `arr[0]` 实际上是来自于对象的语法。它其实与 `obj[key]` 相同，其中 arr 是对象，而数字用作键（key）。

它们扩展了对象，提供了特殊的方法来处理有序的数据集合以及 length 属性。但从本质上讲，它仍然是一个对象

> 数组真正特殊的是它们的内部实现。JavaScript 引擎尝试把这些元素一个接一个地存储在连续的内存区域，而且还有一些其它的优化，以使数组运行得非常快

> 如果我们不像“有序集合”那样使用数组，而是像常规对象那样使用数组，对应的优化就会被关闭

**数组误用的几种方式:**

- 添加一个非数字的属性，比如 `arr.test = 5`
- 制造空洞，比如：添加 `arr[0]`，然后添加 `arr[1000]` (它们中间什么都没有)
- 以倒序填充数组，比如 `arr[1000]`，`arr[999]` 等等

### 4.2 性能

`push/pop`方法运行的比较快，而 `shift/unshift` 比较慢

**`shift` 操作必须做三件事:**

1. 移除索引为 0 的元素
2. 把所有的元素向左移动，把索引 1 改成 0，2 改成 1 以此类推，对其重新编号
3. 更新 length 属性

### 4.3 length

length 实际上不是数组里元素的个数，而是最大的数字索引值加一

```javascript
let fruits = [];
fruits[123] = 'Apple';

alert(fruits.length); // 124
```

> length 可更改，增加 length 不会有什么影响。减少 length 数组会被截断，并且是不可逆的

### 4.4 thisArg

几乎所有的数组方法 —— 比如 find，filter，map，除了 sort 是一个特例，都接受一个可选的附加参数 `thisArg`

```js
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
```

```js
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// 找到 army.canJoin 返回 true 的 user
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
```

`thisArg` 参数的值在 `func` 中变为 `this`

## 5 Iterable object（可迭代对象）

可迭代（Iterable） 对象是数组的泛化。这个概念是说任何对象都可以被定制为可在 `for..of` 循环中使用的对象

> 可迭代对象通过调用 `Symbol.iterator` 创建一个“迭代器”对象，迭代器对象有一个 next 方法，为迭代生成值

### 5.1 Symbol.iterator

创建可迭代对象

- 当 `for..of` 循环启动时，它会调用这个方法（如果没找到，就会报错）。这个方法必须返回一个 迭代器（iterator） —— 一个有 next 方法的对象
- 从此开始，`for..of` 仅适用于这个被返回的对象
- 当 `for..of` 循环希望取得下一个数值，它就调用这个对象的 `next()` 方法
- `next()` 方法返回的结果的格式必须是 `{done: Boolean, value: any}`，当 `done=true` 时，表示迭代结束，否则 `value` 是下一个值

```js
let range = {
  from: 1,
  to: 5,

  // for..of range 在一开始就调用一次这个方法
  [Symbol.iterator]() {
    // ...它返回 iterator object：
    // 后续的操作中，for..of 将只针对这个对象，并使用 next() 向它请求下一个值
    return {
      current: this.from,
      last: this.to,

      // for..of 循环在每次迭代时都会调用 next()
      next() {
        // 它应该以对象 {done:.., value :...} 的形式返回值
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// 迭代整个 range 对象，返回从 `range.from` 到 `range.to` 范围的所有数字
alert([...range]); // 1,2,3,4,5
```

### 5.2 Array.from

有一个全局方法 `Array.from` 可以接受一个 `可迭代或类数组` 的值，并从中获取一个“真正的”数组。然后我们就可以对其调用数组方法了

```js
let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World（pop 方法有效）
```

```js
// 假设 range 来自上文的例子中
let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 （数组的 toString 转化方法生效）
```

## 6 Map

### 6.1 概念

Map 是一个带键的数据项的集合，就像一个 `Object` 一样。 但是它们最大的差别是 `Map` 允许任何类型的键（key）。

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

### 6.2 Map 迭代

如果要在 map 里使用循环，可以使用以下三个方法：

1. `map.keys()` —— 遍历并返回所有的键（returns an iterable for keys）
2. `map.values()` —— 遍历并返回所有的值（returns an iterable for values）
3. `map.entries()` —— 遍历并返回所有的实体（returns an iterable for entries）`[key, value]`，`for..of` 在默认情况下使用的就是这个

### 6.3 从对象创建 Map

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

### 6.4 从 Map 创建对象

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

## 7 Set

### 7.1 概念

Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

它的主要方法如下：

- `new Set(iterable)` —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中
- `set.add(value)` —— 添加一个值，返回 set 本身
- `set.delete(value)` —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false
- `set.has(value)` —— 如果 value 在 set 中，返回 true，否则返回 false
- `set.clear()` —— 清空 set
- `set.size` —— 返回元素个数

> Set 主要特点是，重复使用同一个值调用 `set.add(value)` 并不会发生什么改变。这就是 Set 里面的每一个值只出现一次的原因

### 7.2 Set 迭代

Map 中用于迭代的方法在 Set 中也同样支持：

- `set.keys()` —— 遍历并返回所有的值（returns an iterable object for values）
- `set.values()` —— 与 `set.keys()` 作用相同，这是为了兼容 Map
- `set.entries()` —— 遍历并返回所有的实体（returns an iterable object for entries）`[value, value]`，它的存在也是为了兼容 Map

## 8 WeakMap, WeakSet

如果我们使用对象作为常规 Map 的键，那么当 Map 存在时，该对象也将存在。它会占用内存，并且应该不会被（垃圾回收机制）回收

```js
let john = { name: 'John' };

let map = new Map();
map.set(john, '...');

john = null; // 覆盖引用

// john 被存储在了 map 中，没有被垃圾回收
// 我们仍然可以使用 map.keys() 来获取它
```

`WeakMap` 在这方面有着根本上的不同。它不会阻止垃圾回收机制对作为键的对象（key object）的回收

> `WeakMap` 和 `Map` 的第一个不同点就是，`WeakMap` 的键必须是对象，不能是原始值

> `WeakMap` 不支持迭代以及 `keys()`，`values()` 和 `entries()` 方法。所以没有办法获取 `WeakMap` 的所有键或值

## 8 Object.keys，values，entries

- `Object.keys(obj)` —— 返回一个包含该对象所有的键的数组
- `Object.values(obj)` —— 返回一个包含该对象所有的值的数组
- `Object.entries(obj)` —— 返回一个包含该对象所有 `[key, value]` 键值对的数组

## 9 解构赋值

### 9.1 数组解构

解构赋值

```javascript
let arr = ['Ilya', 'Kantor'];
let [firstName, surname] = arr;

// 忽略某些元素
let [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
alert(title); // Consul
```

> 等号右侧可以是任何可迭代对象

```javascript
// 我们可以将其与任何可迭代对象一起使用，而不仅限于数组
let [a, b, c] = 'abc'; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
```

与 .entries() 方法进行循环操作

```javascript
let user = {
  name: 'John',
  age: 30
};

for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// 遍历 Map
let user = new Map();
user.set('name', 'John');
user.set('age', '30');

for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```

剩余的 `...`

```javascript
let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
// rest 是数组
```

默认值

```javascript
let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];

alert(name); // Julius（来自数组的值）
alert(surname); // Anonymous（默认值被使用了
```

### 9.2 对象解构

```javascript
let { height, width, title } = { title: 'Menu', height: 200, width: 100 };

// 换变量名
let options = {
  title: 'Menu',
  width: 100,
  height: 200
};
let { width: w, height: h, title } = options;

// 默认值，属性缺失时使用默认值
let { width = 100, height = 200, title } = options;

// 冒号、等号结合
let { width: w = 100, height: h = 200, title } = options;

// ... 剩余模式
let { title, ...rest } = options; // rest = 存有剩余属性的对象
```

### 9.3 嵌套解构

```javascript
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ['Cake', 'Donut'],
  extra: true
};

let {
  size: {
    // 把 size 赋值到这里
    width,
    height
  },
  items: [item1, item2], // 把 items 赋值到这里
  title = 'Menu' // 在对象中不存在（使用默认值）
} = options;
```

> 注意，size 和 items 没有对应的变量，因为我们取的是它们的内容

### 9.4 函数参数

和解构赋值语法一样

```javascript
let options = {
  title: 'My menu',
  items: ['Item1', 'Item2']
};

function showMenu({
  title = 'Untitled',
  width: w = 100, // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  alert(`${title} ${w} ${h}`); // My Menu 100 200
  alert(item1); // Item1
  alert(item2); // Item2
}

showMenu(options);
```

## 10 日期和时间

### 10.1 创建

```javascript
// new Date() 创建一个表示当前日期和时间的 Date 对象
let now = new Date();

// new Date(milliseconds)
let Jan01_1970 = new Date(0);
let Jan02_1970 = new Date(24 * 3600 * 1000);

// new Date(datestring) 该算法与 Date.parse 所使用的算法相同
let date = new Date('2017-01-26');

// new Date(year, month, date, hours, minutes, seconds, ms)
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
```

> 传入的整数参数 `milliseconds` 代表的是自 `1970-01-01 00:00:00` 以来经过的毫秒数，该整数被称为时间戳

> 时间戳可以为负数，表示 1970 之前的时间

### 10.2 Date.parse

```javascript
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (时间戳)
```

字符串的格式应该为：`YYYY-MM-DDTHH:mm:ss.sssZ`，其中：

- `YYYY-MM-DD` —— 日期：年-月-日
- 字符 "T" 是一个分隔符
- `HH:mm:ss.sss` —— 时间：小时，分钟，秒，毫秒
- 可选字符 'Z' 为 `+-hh:mm` 格式的时区。单个字符 Z 代表 `UTC+0` 时区

## 11 JSON

JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 `JSON.stringify` 跳过

- 函数属性（方法）
- Symbol 类型的属性
- 存储 undefined 的属性

### 11.1 stringify

```javascript
let json = JSON.stringify(value[, replacer, space])
```

- `replacer` 要编码的属性数组或映射函数 `function(key, value)`
- `space` 用于格式化的空格数量

```javascript
let meetup = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
  place: room // meetup 引用了 room
};

JSON.stringify(meetup, ['title', 'participants']);
// {"title":"Conference","participants":[{},{}]}

JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return key == 'occupiedBy' ? undefined : value;
});
```

### 11.2 toJSON

如果对象下面有 `toJSON` 方法，使用 `JSON.stringify` 时会自动调用

```javascript
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

JSON.stringify(room); // 23
```

### 11.3 parse

```javascript
let value = JSON.parse(str, [reviver]);
```

- `reviver` 可选的函数 `function(key,value)`，该函数将为每个 `(key, value)` 对调用，并可以对值进行转换

```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
```

## 复习

- 原始类型 `对象包装器` `String`、`Number`、`Boolean` 和 `Symbol`，让原始类型有方法
- 不直接使用 `new Number(10)`，这个用法仅供内部使用，这样使用会有什么问题？
- `Number('10'); String(10); Boolean(0);` 可用于类型转换
- 数字的表示方法：`let billion = 1e9;` 二进制、八进制、十六进制
- 精度问题，如何修复，十进制转二进制
- `parseInt('100px')` 输出什么
- 数组性能
- 什么是可迭代对象？可迭代对象有什么特性？写一个简单的可迭代对象
- `Map` 概念，使用场景
- `Set` 概念，使用场景
- `WeakMap`, `WeakSet` 特性，有什么作用
- `Object.keys(obj)` `Object.values(obj)` `Object.entries(obj)`
- 解构赋值
- `JSON.stringify` 会跳过那些属性？
- `JSON.stringify` 会自动调用 `toJSON`，如果有的话
- `JSON.parse` 第二个参数

```js
// 遍历对象
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// rest 是数组
let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

// 默认值
let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];
```

```js
// 冒号、等号结合，别名 + 默认值
let { width: w = 100, height: h = 200, title } = options;

// 嵌套
let options = {
  size: { width: 100, height: 200 },
  items: ['Cake', 'Donut'],
  extra: true
};

let {
  size: { width, height },
  items: [item1, item2], // 把 items 赋值到这里
  title = 'Menu' // 在对象中不存在（使用默认值）
} = options;

// 注意，size 和 items 没有对应的变量，因为我们取的是它们的内容
```
