<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor" target="_blank">en</a>

# Object.prototype.constructor

## 概述

返回一个指向创建了该对象原型的函数引用。需要注意的是，该属性的值是那个函数本身，而不是一个包含函数名称的字符串。对于原始
值（如1，true 或 "test"），该属性为只读。

## 描述

所有对象都会从它的原型上继承一个 constructor 属性：

```javascript
var o = new Object // 或者 o = {}
o.constructor == Object
var a = new Array  // 或者 a = []
a.constructor == Array
var n = new Number(3)
n.constructor == Number
```

即使一些DOM对象并不是你用构造函数生成的，但你仍然可以将它们与对应的构造函数进行比较。比如：

```javascript
document.constructor == Document;
document.form3.constructor == Form;
```

## 示例

### 打印出一个对象的构造函数

下例首先创建了一个构造原型（即构造函数）Tree 和该原型的一个对象 theTree。接着打印出了对象 theTree 的 constructor 属性。

```javascript
function Tree(name) {
   this.name = name;
}

var theTree = new Tree("Redwood");
console.log( "theTree.constructor is " + theTree.constructor );
```

打印输出：

```javascript
theTree.constructor is function Tree(name) {
    this.name = name;
}
```

### 改变这个对象的constructor属性的值

下面的例子展示了如何修改基本类型对象的 constructor 属性的值。只有 true, 1 和 "test" 的不受影响，因为创建他们的是只读的原
生构造函数（native constructors）。这个例子也说明了依赖一个对象的 constructor 属性并不安全。

```javascript
function Type() { };

var	types = [
	new Array,
	[],
	new Boolean,
	true,        // remains unchanged
	new Date,
	new Error,
	new Function,
	function(){},
	Math,
	new Number,
	1,           // remains unchanged
	new Object,
	{},
	new RegExp,
	/(?:)/,
	new String,
	"test"       // remains unchanged
];

for(var i = 0; i < types.length; i++) {
	types[i].constructor = Type;
	types[i] = [ types[i].constructor, types[i] instanceof Type, types[i].toString() ];
};

console.log( types.join("\n") );
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1st Edition                  | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |