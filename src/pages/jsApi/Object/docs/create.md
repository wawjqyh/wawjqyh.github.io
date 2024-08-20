<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" target="_blank">en</a>

# Object.create()

Object.create() 方法使用指定的原型对象和其属性创建了一个新的对象。

## 语法

```javascript
Object.create(proto, [ propertiesObject ])
```

### 参数

* `proto` 一个对象，应该是新创建的对象的原型。
* `propertiesObject 可选` 该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，值是属性描述符（这些属性
描述符的结构与Object.defineProperties()的第二个参数一样）。注意：该参数对象不能是 undefined，另外只有该对象中自身拥有的
可枚举的属性才有效，也就是说该对象的原型链上属性是无效的。

### 抛出异常

如果 proto 参数不是 null 或一个对象值，则抛出一个 TypeError 异常。

## 例子

### 使用Object.create实现类式继承

下面的例子演示了如何使用Object.create()来实现类式继承。这是一个单继承。

```javascript
//Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); //call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);

var rect = new Rectangle();

rect instanceof Rectangle //true.
rect instanceof Shape //true.

rect.move(1, 1); //Outputs, "Shape moved."
```

如果你希望能继承到多个对象,则可以使用混入的方式。

```javascript
function MyClass() {
     SuperClass.call(this);
     OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); //inherit
mixin(MyClass.prototype, OtherSuperClass.prototype); //mixin

MyClass.prototype.myMethod = function() {
     // do a thing
};
```

mixin函数会把超类原型上的函数拷贝到子类原型上，这里mixin函数没有给出,需要由你实现。一个和 mixin 很像的函数是  jQuery.extend。

### 使用Object.create 的 propertyObject 参数

```javascript
var o;

// 创建一个原型为null的空对象
o = Object.create(null);


o = {};
// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);


o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: { writable:true, configurable:true, value: "hello" },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) { console.log("Setting `o.bar` to", value) }
}})


function Constructor(){}
o = new Constructor();
// 上面的一句就相当于:
o = Object.create(Constructor.prototype);
// 当然,如果在Constructor函数中有一些初始化代码,Object.create不能执行那些代码


// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p
//42

o.q = 12
for (var prop in o) {
   console.log(prop)
}
//"q"

delete o.p
//false

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, { p: { value: 42, writable: true, enumerable: true, configurable: true } });
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |