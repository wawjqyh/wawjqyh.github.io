# JavaScript 基础知识

## 1 use strict

"use strict" 表示启用 ES5，这会导致一些旧的特性无法使用

> 确保 "use strict" 出现在最顶部，如果前面有代码则不会生效。"use strict" 无法取消

## 2 变量

JavaScript 的变量命名有两个限制：

- 变量名称必须仅包含字母，数字，符号 \$ 和 \_
- 首字符必须非数字
- 连字符 '-' 不允许用于变量命名，如 `let my-name;`

需要注意的特性：

- 变量声明两次会触发 error
- `use strict` 模式下，变量必须要声明。非严格模式下，变量未声明不会报错，`num = 5; // 如果变量 "num" 不存在，就会被创建成全局变量`

## 3 数据类型

JavaScript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始类型，而 object 为复杂数据类型）

- number 用于任何类型的数字：整数或浮点数，在 ±(253-1) 范围内的整数
- bigint 用于任意长度的整数
- string 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型
- boolean 用于 true 和 false
- null 用于未知的值 —— 只有一个 null 值的独立类型
- undefined 用于未定义的值 —— 只有一个 undefined 值的独立类型
- symbol 用于唯一的标识符
- object 用于更复杂的数据结构

### 3.1 Number

“特殊数值（“special numeric values”）”也属于这种类型：Infinity、-Infinity 和 NaN

Infinity 代表数学概念中的 无穷大 ∞。是一个比任何数字都大的特殊值

```javascript
alert(1 / 0); // Infinity
```

NaN 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果

```javascript
alert('not a number' / 2); // NaN，这样的除法是错误的
```

任何对 NaN 的进一步操作都会返回 NaN：

```js
alert('not a number' / 2 + 5); // NaN
```

> 在 JavaScript 中做数学运算是安全的，js 不会因此而报错，最坏的情况下，会得到 `NaN` 的结果

### 3.2 Bigint

在 JavaScript 中，`Number` 类型无法表示大于 `2^53-1`（即 9007199254740991），或小于 `-2^53-1` 的整数

```javascript
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

### 3.3 null

相比较于其他编程语言，JavaScript 中的 `null` 不是一个 “对不存在的 object 的引用” 或者 “null 指针”

JavaScript 中的 `null` 仅仅是一个代表 “无”、“空” 或 “值未知” 的特殊值

### 3.4 undefined

undefined 的含义是 `未被赋值`

如果一个变量已被声明，但未被赋值，那么它的值就是 undefined

```javascript
let age;

alert(age); // 弹出 "undefined"
```

### 3.5 typeof

我们可以利用 `typeof` 来判断 `number`, `string`, `object`, `boolean`, `function`, `undefined`, `symbol` 这七种类型

```javascript
typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof 'foo'; // "string"

typeof Symbol('id'); // "symbol"

typeof Math; // "object"

typeof null; // "object"

typeof alert; // "function"
```

- Math 是一个提供数学运算的内建 object
- typeof null 的结果是 "object"。这是官方承认的 typeof 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。null 绝对不是一个 object。null 有自己的类型，它是一个特殊值
- typeof alert 的结果是 "function"，因为 alert 在 JavaScript 语言中是一个函数。在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 object 类型。但是 typeof 会对函数区分对待，并返回 "function"。这也是来自于 JavaScript 语言早期的问题

## 4 类型转换

### 4.1 字符串转换

显式地调用 `String(value)` 来将 value 转换为字符串类型

### 4.2 数字型转换

在**算术函数和表达式**中，会自动进行 number 类型转换，也可以使用 `Number(value)` 显式地将这个 value 转换为 number 类型

| 值            | 转换   |
| ------------- | ------ |
| undefined     | NaN    |
| null          | 0      |
| true 和 false | 1 和 0 |
| string        |        |

string 转换为去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 0。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 NaN

### 4.3 布尔型转换

- 直观上为“空”的值（如 0、空字符串、null、undefined 和 NaN）将变为 false
- 其他值变成 true，包含 0 的字符串 "0" 是 true

## 5 基础运算符

### 5.1 术语

- **运算元** 运算符应用的对象。比如乘法运算 `5 * 2`，有两个运算元
- **一元运算符** 如果一个运算符对应的只有一个运算元，那么它是一元运算符 `x = -x;`
- **二元运算符** 如果一个运算符拥有两个运算元，那么它是二元运算符 `y - x`
- **三元运算符** 拥有三个运算元 `result = condition ? value1 : value2`

### 5.2 数学运算

加、减、乘、除、取余、求幂

> 求幂 \*\*

### 5.3 一元运算符 +

加号 `+` **有两种形式**。一种是的二元运算符，还有一种是一元运算符

一元运算符加号，应用于单个值，对数字没有任何作用。但是如果运算元不是数字，加号 + 则会将其转化为数字

```javascript
// 对数字无效
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// 转化非数字
alert(+true); // 1
alert(+''); // 0
```

### 5.4 运算符优先级

数字越大，越先执行。如果优先级相同，则按照由左至右的顺序执行

| 优先级 | 名称     | 符号 |
| ------ | -------- | ---- |
| …      | …        | …    |
| 17     | 一元加号 | +    |
| 17     | 一元负号 | -    |
| 16     | 求幂     | \*\* |
| 15     | 乘号     | \*   |
| 15     | 除号     | /    |
| 13     | 加号     | +    |
| 13     | 减号     | -    |
| …      | …        | …    |
| 3      | 赋值符   | =    |
| …      | …        | …    |

### 5.5 赋值运算符

赋值符号 `=` 也是一个运算符。从优先级表中可以看到它的优先级非常低，只有 3

`=` 是一个运算符，而不是一个有着“魔法”作用的语言结构

> 语句 `x = value` 将值 `value` 写入 `x` 然后返回 `x`

```js
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0
```

```javascript
let a, b, c;

a = b = c = 2 + 2;

alert(a); // 4
alert(b); // 4
alert(c); // 4
```

### 5.6 原地修改

```javascript
let n = 2;

n += 5;
n -= 1;
n *= 2;
n /= 3;
```

### 5.7 自增自减

> 自增/自减只能应用于变量。将其应用于数值（比如 `5++`）则会报错

运算符 `++` 和 `--` 可以置于变量前，也可以置于变量后

- 当运算符置于变量后，被称为“后置形式”：`counter++`
- 当运算符置于变量前，被称为“前置形式”：`++counter`

**所有的运算符都有返回值**。自增/自减也不例外。前置形式返回一个新的值，但后置返回原来的值（做加法/减法之前的值）

```javascript
let counter = 1;
let a = ++counter;

alert(a); // 2
```

```javascript
let counter = 1;
let a = counter++; // 将 ++counter 改为 counter++

alert(a); // 1
```

```javascript
let counter = 0;
counter++;
++counter;
alert(counter); // 2，以上两行作用相同
```

在表达式内部使用：

```js
// ++/-- 运算符同样可以在表达式内部使用。它们的优先级比绝大部分的算数运算符要高

let counter = 1;
alert(2 * ++counter); // 4

let counter = 1;
alert(2 * counter++); // 2，因为 counter++ 返回的是“旧值”
```

### 5.8 位运算符

位运算符把运算元当做 32 位整数，并在它们的**二进制**上操作

- 按位与 `&`
- 按位或 `|`
- 按位异或 `^`
- 按位非 `~`
- 左移 `<<`
- 右移 `>>`
- 无符号右移 `>>>`

比较少用，一般用在某些特殊领域比如密码学

### 5.9 逗号运算符

逗号运算符能让我们处理多个语句，使用 `,` 将它们分开。每个语句都运行了，但是只有最后的语句的结果会被返回

```javascript
let a = (1 + 2, 3 + 4);

alert(a); // 7（3 + 4 的结果）
```

这里，第一个语句 `1 + 2` 运行了，但是它的结果被丢弃了。随后计算 `3 + 4`，并且该计算结果被返回

> 逗号运算符的优先级非常低，**比 `=` 还要低**。如果没有圆括号：`a = 1 + 2, 3 + 4` 会先执行 `+`，将数值相加得到 `a = 3, 7`，然后赋值运算符 `=` 执行, `a = 3`，然后逗号之后的数值 7 不会再执行，它被忽略掉了。相当于 `(a = 1 + 2), 3 + 4`

通常用于简化代码：

```javascript
// 一行上有三个运算符
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```

## 6 值的比较

```javascript
alert('2' > 1); // true，字符串 '2' 会被转化为数字 2
alert('01' == 1); // true，字符串 '01' 会被转化为数字 1
```

严格相等运算符 === 在进行比较时不会做任何的类型转换，只要类型不同就返回 false

```javascript
alert(null === undefined); // false
alert(null == undefined); // true
```

> 当使用数学式或其他比较方法 `< > <= >=` 时：`null / undefined` 会被转化为数字：`null` 被转化为 `0`，`undefined` 被转化为 `NaN`

```javascript
alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true
```

> 相等性检查 == 和普通比较符 `> < >= <=` 的代码逻辑是相互独立的。进行值的比较时，null 会被转化为数字，因此它被转化为了 0。这就是为什么 `null >= 0` 返回值是 true，`null > 0` 返回值是 false

**特殊情况 (null/undefined)：**

- **使用 `==`**：`null == undefined`
- **使用 `< > <= >=`**： null 被转化为 0，undefined 被转化为 NaN

```js
// 当使用非严格相等 == 比较二者时
alert(null == undefined); // true

// null 和 0 比较
alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true

// undefined 和 0 比较
alert( undefined > 0 ); // false
alert( undefined < 0 ); // false
alert( undefined == 0 ); // false
```

**总结：**

- 比较运算符始终返回布尔值
- 字符串的比较，会按照 `Unicode` 编码顺序逐字符地比较大小
- 当对不同类型的值进行比较时，它们会先被**转化为数字**（不包括严格相等检查）再进行比较
- 在非严格相等 `==` 下，`null` 和 `undefined` 相等且各自不等于任何其他的值
- 在使用 `>` 或 `<` 进行比较时，需要注意变量可能为 `null/undefined` 的情况。比较好的方法是单独检查变量是否等于 `null/undefined`

## 7 条件分支 if 和 ?

`if (…)` 语句会计算圆括号内的表达式，并将计算结果**转换为布尔型**

- 数字 `0`、空字符串 `""`、`null`、`undefined` 和 `NaN` 都会被转换成 `false`
- 其他值被转换为 `true`

`?` 称为三元运算符

```js
let result = condition ? value1 : value2;
```

## 8 逻辑运算符

### 8.1 ||（或）

JavaScript 中有三个逻辑运算符：||（或），&&（与），!（非）

一个或运算 || 的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值

> 或运算寻找第一个真值

```javascript
alert(1 || 0); // 1（1 是真值）

alert(null || 1); // 1（1 是第一个真值）
alert(null || 0 || 1); // 1（第一个真值）

alert(undefined || null || 0); // 0（都是假值，返回最后一个值）
```

简写语句：

```javascript
true || alert('not printed'); // 不执行
false || alert('printed'); // 执行
```

### 8.2 &&（与）

在处理每一个操作数时，都将其转化为布尔值。如果结果是 false，就停止计算，并返回这个操作数的初始值

> 与运算寻找第一个假值

```javascript
// 如果第一个操作数是真值，
// 与运算返回第二个操作数：
alert(1 && 0); // 0
alert(1 && 5); // 5

// 如果第一个操作数是假值，
// 与运算将直接返回它。第二个操作数会被忽略
alert(null && 5); // null
alert(0 && 'no matter what'); // 0
```

> 与运算 && 的优先级比或运算 || 要高。所以代码 `a && b || c && d` 跟 && 表达式加了括号完全一样：`(a && b) || (c && d)`

### 8.3 !（非）

逻辑非运算符将操作数转化为布尔类型：true/false，并返回相反的值

两个非运算 !! 有时候用来将某个值转化为布尔类型

## 9 空值合并运算符 ??

`a ?? b` 如果第一个参数不是 `null/undefined`，则 `??` 返回第一个参数。否则，返回第二个参数

通常 `??` 的使用场景是，为可能是未定义的变量提供一个默认值

> 和 `||` 的区别：`||` 返回第一个真值，`??` 返回第一个已定义的值。`||` 无法区分 false、0、空字符串 "" 和 null / undefined

## 10 循环

### 10.1 for 循环

**语法：**

```javascript
let i = 0; // 我们已经声明了 i 并对它进行了赋值

for (; i < 3; i++) {
  // 不再需要 "begin" 语句段
  alert(i); // 0, 1, 2
}
```

```javascript
// step 语句段可移除
let i = 0;

for (; i < 3; ) {
  alert(i++);
}
```

```javascript
for (;;) {
  // 无限循环
}
```

### 10.2 标签

`标签` 是在循环之前带有冒号的标识符：

```javascript
labelName: for (...) {
  // ...
}
```

可以用来跳出多层循环

```javascript
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果是空字符串或被取消，则中断并跳出这两个循环。
    if (!input) break outer;

    // 用得到的值做些事……
  }
}
alert('Done!');
```

## 11 switch

`switch` 语句可以替代多个 `if` 判断

**特性：**

1. 几个 `case` 分支可以被分为一组
1. 严格相等，被比较的值必须是相同的类型

```js
let arg = prompt('Enter a value?');
switch (arg) {
  // case 可分组
  case '0':
  case '1':
    alert('One or zero');
    break;

  case '2':
    alert('Two');
    break;

  // 类型需严格相等，不会隐式转换
  case 3:
    alert('Never executes!');
    break;
  default:
    alert('An unknown value');
}
```

## 12 函数

函数是值。它们可以在代码的任何地方被分配，复制或声明

**函数表达式和函数声明的区别：**

- 函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用
- 在函数声明被定义之前，它就可以被调用

当 JavaScript 准备 运行脚本时，首先会在脚本中寻找全局函数声明，并创建这些函数。我们可以将其视为“初始化阶段”。在处理完所有函数声明后，代码才被执行

## 复习

- 变量能否声明两次
- js 有几种数据类型
- `Number` 中的特殊数值 `Infinity`、`-Infinity` 和 `NaN` 的含义
- `Bigint` 是什么格式
- `undefined` 是什么，如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`
- `typeof` 的七种类型
- 求幂 `**`
- `Boolean('0')` `Boolean(0)` `Boolean(NaN)`
- `Number(undefined)` `Number(null)` `Number('str')`
- `let a, b, c; a = b = c = 2 + 2;`
- `counter++` `++counter`
- for 循环标签

```js
typeof undefined;
typeof 0;
typeof 10n;
typeof true;
typeof 'foo';
typeof Symbol('id');
typeof Math;
typeof null;
typeof alert;

alert(null === undefined);
alert(null == undefined);
alert(null > 0);
alert(null == 0);
alert(null >= 0);

alert(1 || 0);
alert(null || 1);
alert(null || 0 || 1);
alert(undefined || null || 0);

alert(1 && 0);
alert(1 && 5);
alert(null && 5);
alert(0 && 'no matter what');
```
