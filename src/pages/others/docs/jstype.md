# JS 类型转换

## 1 类型转换

大多数情况下，`运算符`和`函数`会自动将赋予它们的值转换为正确的类型

比如，`alert` 会自动将任何值都转换为字符串以进行显示。算术运算符会将值转换为数字

在某些情况下，我们需要将值显式地转换为我们期望的类型。

### 1.1 字符串转换

当我们需要一个字符串形式的值时，就会进行字符串转换。

比如，`alert(value)` 将 `value` 转换为字符串类型，然后显示这个值

我们也可以显式地调用 `String(value)` 来将 `value` 转换为字符串类型：

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // 现在，值是一个字符串形式的 "true"
alert(typeof value); // string
```

字符串转换最明显。`false` 变成 `"false"`，`null` 变成 `"null"` 等

### 1.2 数字型转换

在算术函数和表达式中，会自动进行 `number` 类型转换

比如，当把除法 `/` 用于非 `number` 类型：

```js
alert('6' / '2'); // 3, string 类型的值被自动转换成 number 类型后进行计算
```

我们也可以使用 `Number(value)` 显式地将这个 `value` 转换为 `number` 类型

```js
let str = '123';
alert(typeof str); // string

let num = Number(str); // 变成 number 类型 123

alert(typeof num); // number
```

当我们从 `string` 类型源（如文本表单）中读取一个值，但期望输入一个数字时，通常需要进行显式转换

如果该字符串不是一个有效的数字，转换的结果会是 `NaN`。例如：

```js
let age = Number('an arbitrary string instead of a number');

alert(age); // NaN，转换失败
```

**number 类型转换规则：**

| 值            | 转换    |
| ------------- | ------- |
| undefined     | NaN     |
| null          | 0       |
| true 和 false | 1 and 0 |
| string        |         |

**string:** 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 0。否则，将会从剩余字符串中“读取”数字。当类型转换出现 `error` 时返回 `NaN`

例子：

```js
alert(Number(' 123 ')); // 123
alert(Number('123z')); // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert(Number(true)); // 1
alert(Number(false)); // 0
```

请注意 `null` 和 `undefined` 在这有点不同：`null` 变成数字 `0`，`undefined` 变成 `NaN`

### 1.3 布尔型转换

布尔（boolean）类型转换是最简单的一个

它发生在逻辑运算中（稍后我们将进行条件判断和其他类似的东西），但是也可以通过调用 `Boolean(value)` 显式地进行转换

**转换规则如下：**

- 直观上为 “空” 的值（如 `0`、`空字符串`、`null`、`undefined` 和 `NaN`）将变为 `false`
- 其他值变成 `true`

比如：

```js
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean('hello')); // true
alert(Boolean('')); // false
```

**注意：**包含 `0` 的字符串 `"0"` 是 `true`

一些编程语言（比如 PHP）视 `"0"` 为 `false`。但在 JavaScript 中，**非空的字符串**总是 `true`

```js
alert(Boolean('0')); // true
alert(Boolean(' ')); // 空白，也是 true（任何非空字符串都是 true）
```

## 2 对象 — 原始值转换

当对象相加 `obj1 + obj2`，相减 `obj1 - obj2`，或者使用 `alert(obj)` 打印时会发生什么？

在这种情况下，对象会被自动转换为原始值，然后执行操作。

所有的对象在布尔上下文（context）中均为 `true`。所以对于对象，不存在 `to-boolean` 转换，只有字符串和数值转换

**数值转换：**

数值转换发生在对象 `相减` 或 `应用数学函数` 时。例如，`Date` 对象可以相减，`date1 - date2` 的结果是两个日期之间的差值

**字符串转换：**

字符串转换 —— 通常发生在我们像 `alert(obj)` 这样输出一个对象和类似的上下文中

### 2.1 ToPrimitive

我们可以使用特殊的对象方法，对字符串和数值转换进行微调。

下面是三个类型转换的变体，被称为 `hint`，当一个对象被用在需要原始值的上下文中时，例如，在 `alert` 或数学运算中，对象会被转换为原始值

**string :**

对象到字符串的转换，当我们对期望一个字符串的对象执行操作时，如 `alert`：

```js
// 输出
alert(obj);

// 将对象作为属性键
anotherObj[obj] = 123;
```

**number :**

对象到数字的转换，例如当我们进行数学运算时：

```js
// 显式转换
let num = Number(obj);

// 数学运算（除了二元加法）
let n = +obj; // 一元加法
let delta = date1 - date2;

// 小于/大于的比较
let greater = user1 > user2;
```

**default :**

在少数情况下发生，当运算符 `不确定` 期望值的类型时

例如，二元加法 `+` 可用于字符串（连接），也可以用于数字（相加），所以字符串和数字这两种类型都可以。因此，当二元加法得到对象类型的参数时，它将依据 `default` `hint` 来对其进行转换

此外，如果对象被用于与字符串、数字或 `symbol` 进行 `==` 比较，这时到底应该进行哪种转换也不是很明确，因此使用 `default` `hint`

```js
// 二元加法使用默认 hint
let total = obj1 + obj2;

// obj == number 使用默认 hint
if (user == 1) {
  // ...
}
```

像 `<` 和 `>` 这样的小于/大于比较运算符，也可以同时用于字符串和数字。不过，它们使用 `number` `hint`，而不是 `default`。这是历史原因。

> 实际上，我们没有必要记住这些奇特的细节，除了一种情况（Date 对象，我们稍后会学到它）之外，所有内建对象都以和 "number" 相同的方式实现 "default" 转换

**没有 "boolean" hint :**

> 没有 “boolean” hint（在布尔上下文中所有对象都是 true）或其他任何东西。如果我们将 "default" 和 "number" 视为相同，就像大多数内建函数一样，那么就只有两种转换了

**为了进行转换，JavaScript 尝试查找并调用三个对象方法：**

1. 调用 `obj[Symbol.toPrimitive](hint)` —— 带有 `symbol` 键 `Symbol.toPrimitive`（系统 symbol）的方法，如果这个方法存在的话
2. 否则，如果 `hint` 是 `string` —— 尝试 `obj.toString()` 和 `obj.valueOf()`，无论哪个存在
3. 否则，如果 `hint` 是 `number` 或 `default` —— 尝试 `obj.valueOf()` 和 `obj.toString()`，无论哪个存在

### 2.2 Symbol.toPrimitive

我们从第一个方法开始。有一个名为 `Symbol.toPrimitive` 的内建 `symbol`，它被用来给转换方法命名，像这样：

```js
obj[Symbol.toPrimitive] = function(hint) {
  // 返回一个原始值
  // hint = "string"、"number" 和 "default" 中的一个
};
```

例如，这里 user 对象实现了它：

```js
let user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  }
};

// 转换演示：
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

从代码中我们可以看到，根据转换的不同，user 变成一个自描述字符串或者一个金额。单个方法 `user[Symbol.toPrimitive]` 处理了所有的转换情况。

### 2.3 toString/valueOf

方法 `toString` 和 `valueOf` 来自上古时代。它们不是 `symbol`（那时候还没有 symbol 这个概念），而是 “常规的” 字符串命名的方法。它们提供了一种可选的 “老派” 的实现转换的方法

**如果没有 `Symbol.toPrimitive`，那么 JavaScript 将尝试找到它们，并且按照下面的顺序进行尝试：**

1. **对于 string hint :** `toString` -> `valueOf`
2. **其他情况 :** `valueOf` -> `toString`

这些方法必须返回一个原始值。如果 `toString` 或 `valueOf` 返回了一个对象，那么返回值会被忽略（和这里没有方法的时候相同）

**默认情况下，普通对象具有 `toString` 和 `valueOf` 方法：**

- `toString` 方法返回一个字符串 `[object Object]`
- `valueOf` 方法返回对象自身

下面是一个示例：

```js
let user = { name: 'John' };

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```

所以，如果我们尝试将一个对象当做字符串来使用，例如在 alert 中，那么在默认情况下我们会看到 `[object Object]`

> 这里提到默认值 `valueOf` 只是为了完整起见，以避免混淆。它返回对象本身，因此被忽略。那是历史原因，所以我们可以假设它根本就不存在

例如，这里的 user 执行和前面提到的那个 user 一样的操作，使用 `toString` 和 `valueOf` 的组合（而不是 `Symbol.toPrimitive`）：

```js
let user = {
  name: 'John',
  money: 1000,

  // 对于 hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // 对于 hint="number" 或 "default"
  valueOf() {
    return this.money;
  }
};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500
```

我们可以看到，执行的动作和前面使用 `Symbol.toPrimitive` 的那个例子相同

通常我们希望有一个 `全能` 的地方来处理所有原始转换。在这种情况下，我们可以只实现 `toString`，就像这样：

```js
let user = {
  name: 'John',

  toString() {
    return this.name;
  }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500
```

如果没有 `Symbol.toPrimitive` 和 `valueOf`，`toString` 将处理所有原始转换

### 2.4 返回类型

关于所有原始转换方法，有一个重要的点需要知道，就是它们不一定会返回 `hint` 的原始值

没有限制 `toString()` 是否返回字符串，或 `Symbol.toPrimitive` 方法是否为 `hint number` 返回数字

**唯一强制性的事情是：这些方法必须返回一个原始值，而不是对象**

> 由于历史原因，如果 `toString` 或 `valueOf` 返回一个对象，则不会出现 `error`，但是这种值会被忽略（就像这种方法根本不存在）。这是因为在 JavaScript 语言发展初期，没有很好的 `error` 的概念
> 相反，Symbol.toPrimitive 必须 返回一个原始值，否则就会出现 `error`

**进一步的转换 :**

我们已经知道，许多运算符和函数执行类型转换，例如乘法 \* 将操作数转换为数字

如果我们将对象作为参数传递，则会出现两个阶段：

1. 对象被转换为原始值（通过前面我们描述的规则）
2. 如果生成的原始值的类型不正确，则继续进行转换

例如：

```js
let obj = {
  // toString 在没有其他方法的情况下处理所有转换
  toString() {
    return '2';
  }
};

alert(obj * 2); // 4，对象被转换为原始值字符串 "2"，之后它被乘法转换为数字 2
```

1. 乘法 `obj * 2` 首先将对象转换为原始值（字符串 `"2"`）
2. 之后 `"2" * 2` 变为 `2 * 2`（字符串被转换为数字）

二元加法在同样的情况下会将其连接成字符串，因为它更愿意接受字符串：

```js
let obj = {
  toString() {
    return '2';
  }
};

alert(obj + 2); // 22（"2" + 2）被转换为原始值字符串 => 级联
```
