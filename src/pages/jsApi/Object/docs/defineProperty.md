<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank">en</a>

# Object.defineProperty()

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

## 语法

```javascript
Object.defineProperty(obj, prop, descriptor)
```

### 参数

* `obj` 要在其上定义属性的对象。
* `prop` 要定义或修改的属性的名称。
* `descriptor` 将被定义或修改的属性的描述符。

### 返回值

被传递给函数的对象。

## 描述

该方法允许精确添加或修改对象的属性。一般情况下，我们为对象添加属性是通过赋值来创建并显示在属性枚举中（for...in 或 Object.keys 方法），
但这种方式添加的属性值可以被改变，也可以被删除。而使用 Object.defineProperty() 则允许改变这些额外细节的默认设置。例如，
默认情况下，使用  Object.defineProperty() 增加的属性值是不可改变的。

对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个拥有可写或不可写值的属性。存取描述符是
由一对 getter-setter 函数功能来描述的属性。描述符必须是两种形式之一；不能同时是两者。

**数据描述符和存取描述符均具有以下可选键值：**

* `configurable` 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，也能够被删除。默认为 false。
* `enumerable` 当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。

**数据描述符同时具有以下可选键值：**

* `value` 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
* `writable` 当且仅当该属性的 writable 为 true 时，该属性才能被赋值运算符改变。默认为 false。

**存取描述符同时具有以下可选键值：**

* `get` 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为 undefined。
* `set` 一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为 undefined。

记住，这些选项不一定是自身属性，如果是继承来的也要考虑。为了确认保留这些默认值，你可能要在这之前冻结 Object.prototype，
明确指定所有的选项，或者将\_\_proto\_\_属性指向null。

```javascript
// 使用 __proto__
Object.defineProperty(obj, "key", {
  __proto__: null, // 没有继承的属性
  value: "static"  // 没有 enumerable
                   // 没有 configurable
                   // 没有 writable
                   // 作为默认值
});

// 显式
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static"
});

// 循环使用同一对象
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  d.value = value;
  return d;
}
// ... 并且 ...
Object.defineProperty(obj, "key", withValue("static"));

// 如果 freeze 可用, 防止代码添加或删除对象原型的属性
// （value, get, set, enumerable, writable, configurable）
(Object.freeze||Object)(Object.prototype);
```

## 示例

如果你想知道如何用 binary-flags-like 语法使用 Object.defineProperty 方法，看看这篇文章。

### 创建属性

如果对象中不存在指定的属性，Object.defineProperty()就创建这个属性。当描述符中省略某些字段时，这些字段将使用它们的默认值。
拥有布尔值的字段的默认值都是false。value，get和set字段的默认值为undefined。定义属性时如果没有get/set/value/writable，那
它被归类为数据描述符。

```javascript
var o = {}; // 创建一个新对象

// Example of an object property added with defineProperty with a data property descriptor
Object.defineProperty(o, "a", {
  value : 37,
  writable : true,
  enumerable : true,
  configurable : true
});

// 对象o拥有了属性a，值为37

// Example of an object property added with defineProperty with an accessor property descriptor
var bValue;
Object.defineProperty(o, "b", {
  get : function(){
    return bValue;
  },
  set : function(newValue){
    bValue = newValue;
  },
  enumerable : true,
  configurable : true
});

o.b = 38;
// 对象o拥有了属性b，值为38

// The value of o.b is now always identical to bValue, unless o.b is redefined

// 数据描述符和存取描述符不能混合使用
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get: function() {
    return 0xdeadbeef;
  }
});
// throws a TypeError: value appears only in data descriptors, get appears only in accessor descriptors
```

### 修改属性

如果属性已经存在，Object.defineProperty()将尝试根据描述符中的值以及对象当前的配置来修改这个属性。如果描述符的 configurable
特性为false（即该特性为non-configurable），那么除了 writable 外，其他特性都不能被修改，并且数据和存取描述符也不能相互切换。

如果一个属性的 configurable 为 false，则其 writable 特性也只能修改为 false。

如果尝试修改 non-configurable 属性特性（除 writable 以外），将会产生一个TypeError 异常，除非当前值与修改值相同。

#### Writable 属性

当属性特性（property attribute） writable 设置为false时，表示 non-writable，属性不能被修改。

```javascript
var o = {}; // 创建一个新对象

Object.defineProperty(o, "a", { value : 37,
                                writable : false });

console.log(o.a); // 打印 37
o.a = 25; // 没有错误抛出（在严格模式下会抛出，即使之前已经有相同的值）
console.log(o.a); // 打印 37， 赋值不起作用。
```

正如上例中看到的，修改一个 non-writable 的属性不会改变属性的值，同时也不会报异常。

#### Enumerable 特性

属性特性 enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。

```javascript
var o = {};
Object.defineProperty(o, "a", { value : 1, enumerable:true });
Object.defineProperty(o, "b", { value : 2, enumerable:false });
Object.defineProperty(o, "c", { value : 3 }); // enumerable defaults to false
o.d = 4; // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable为true

for (var i in o) {
  console.log(i);
}
// 打印 'a' 和 'd' (in undefined order)

Object.keys(o); // ["a", "d"]

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
```

#### Configurable 特性

configurable 特性表示对象的属性是否可以被删除，以及除 writable 特性外的其他特性是否可以被修改。

```javascript
var o = {};
Object.defineProperty(o, "a", { get : function(){return 1;},
                                configurable : false } );

// throws a TypeError
Object.defineProperty(o, "a", {configurable : true});
// throws a TypeError
Object.defineProperty(o, "a", {enumerable : true});
// throws a TypeError (set was undefined previously)
Object.defineProperty(o, "a", {set : function(){}});
// throws a TypeError (even though the new get does exactly the same thing)
Object.defineProperty(o, "a", {get : function(){return 1;}});
// throws a TypeError
Object.defineProperty(o, "a", {value : 12});

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
```

如果 o.a 的 configurable 特性已经为 true，没有错误会被抛出，并且属性会在最后被删除。

### 添加多个属性和默认值

考虑特性被赋予的默认特性值非常重要，通常，使用点运算符和Object.defineProperty()为对象的属性赋值时，数据描述符中的属性默
认值是不同的，如下例所示。

```javascript
var o = {};

o.a = 1;
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : true,
  configurable : true,
  enumerable : true
});


// 另一方面，
Object.defineProperty(o, "a", { value : 1 });
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : false,
  configurable : false,
  enumerable : false
});
```

### 一般的 Setters 和 Getters

下面的例子说明了如何实现自我存档的对象。当 temperature 属性设置时，archive 数组会得到一个 log。

```javascript
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

另一个例子：

```javascript
var pattern = {
    get: function () {
        return 'I alway return this string,whatever you have assigned';
    },
    set: function () {
        this.myname = 'this is my name string';
    }
};


function TestDefineSetAndGet() {
    Object.defineProperty(this, 'myproperty', pattern);
}


var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';

// 'I alway return this string,whatever you have assigned'
console.log(instance.myproperty);
// 'this is my name string'
console.log(instance.myname);
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |