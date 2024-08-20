<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">en</a>

Object

Object 构造函数创建一个对象包装器。

## 语法

```javascript
// 对象初始化器（Object initialiser）或对象字面量（literal）
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// 以构造函数形式来调用
new Object([value])
```

### 参数

* `nameValuePair1, nameValuePair2, ... nameValuePairN` 成对的名称（字符串）与值（任何值），其中名称通过冒号与值分隔。
* `value` 任何值

## 描述

对象构造函数为给定值创建一个对象包装器。。如果给定值是  null or undefined，将会创建并返回一个空对象，否则，将返回一个与给
定值对应类型的对象。

当以非构造函数形式被调用时，Object 等同于 new Object()。

可查看 对象初始化/字面量语法。

## 属性

`Object.length`

值为1。

`Object.prototype`

可以为所有 Object 类型的对象添加属性。

## 方法

`Object.assign()`

通过复制一个或多个对象来创建一个新的对象。

`Object.create()`

指定原型对象和属性来创建一个新的对象。

`Object.defineProperty()`

给对象添加一个属性并指定该属性的配置。

`Object.defineProperties()`

给对象添加多个属性并分别指定它们的配置。

`Object.entries() [草案]`

返回一个数组，其是给定对象自身的 enumerable 属性键值对（[key, value]）。

`Object.freeze()`

冻结对象：使对象不可删除或修改它的属性。

`Object.getOwnPropertyDescriptor()`

返回对象指定的属性配置。

`Object.getOwnPropertyNames()`

返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。

`Object.getOwnPropertySymbols()`

返回一个数组，它包含了指定对象自身所有的符号属性。

`Object.getPrototypeOf()`

返回指定对象的原型对象。

`Object.is()`

判断两个值是否严格相等。（类似===运算符，但+0不等于-0，NaN等于自己）。

`Object.isExtensible()`

判断对象是否可扩展。

`Object.isFrozen()`

判断对象是否已经冻结。

`Object.isSealed()`

判断对象是否已经密封。

`Object.keys()`

返回一个数组，包含指定对象的所有自有可遍历属性的名称。

`Object.preventExtensions()`

阻止对象扩展。

`Object.seal()`

密封对象以防删除。

`Object.setPrototypeOf()`

设置对象的原型。

`Object.values() [草案]`

返回一个数组，其是给定对象自身的 enumerable 属性值。

## 对象实例和对象原型对象

JavaScript语言的所有对象都是由Object衍生的对象；所有对象都继承了Object.prototype的方法和属性，尽管它们可能被覆盖。例如，
其它的构造器原型覆盖了constructor属性并提供了其自己的toString方法。原型对象的更改会传播给所有的对象，除非这些属性和方法
在原型链中被再次覆盖。

### 属性

`Object.prototype.constructor`

特定的函数，用于创建一个对象的原型。

`Object.prototype.__proto__ [非标准]`

指向当对象被实例化的时候，用作原型的对象。

`Object.prototype.__noSuchMethod__ [非标准]`

当未定义的对象成员被调用作方法的时候，允许定义并执行的函数。

`Object.prototype.__count__ [已废弃]`

用于直接返回用户定义的对象中可数的属性的数量。已被废除。

`Object.prototype.__parent__ [已废弃]`

用于指向对象的内容。已被废除。

### 方法

`Object.prototype.__defineGetter__() [已废弃]`

关联一个函数到一个属性。访问该函数时，执行该函数并返回其返回值。

`Object.prototype.__defineSetter__() [已废弃]`

关联一个函数到一个属性。设置该函数时，执行该修改属性的函数。

`Object.prototype.__lookupGetter__() [已废弃]`

返回使用 __defineGetter__ 定义的方法函数 。

`Object.prototype.__lookupSetter__() [已废弃]`

返回使用 __defineSetter__ 定义的方法函数。

`Object.prototype.hasOwnProperty()`

返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。

`Object.prototype.isPrototypeOf()`

返回一个布尔值，表示指定的对象是否在本对象的原型链中。

`Object.prototype.propertyIsEnumerable()`

判断指定属性是否可枚举，内部属性设置参见 ECMAScript DontEnum attribute 。

`Object.prototype.toSource() [非标准]`

返回字符串表示此对象的源代码形式，可以使用此字符串生成一个新的相同的对象。

`Object.prototype.toLocaleString()`

直接调用 toString()方法。

`Object.prototype.toString()`

返回对象的字符串表示。

`Object.prototype.unwatch() [非标准]`

移除对象某个属性的监听。

`Object.prototype.valueOf()`

返回指定对象的原始值。

`Object.prototype.watch() [非标准]`

给对象的某个属性增加监听。

`Object.prototype.eval() [已废弃]`

在指定对象为上下文情况下执行javascript字符串代码，已经废弃。

## 示例

给定 undefined 和 null 类型使用 Object

下面的例子将一个空的 Object 对象存到 o 中：

```javascript
var o = new Object();
var o = new Object(undefined);
var o = new Object(null);
```

### 使用 Object 生成布尔对象

下面的例子将Boolean 对象存到 o 中：
```javascript
// 等价于 o = new Boolean(true);
var o = new Object(true);
// 等价于 o = new Boolean(false);
var o = new Object(Boolean());
```