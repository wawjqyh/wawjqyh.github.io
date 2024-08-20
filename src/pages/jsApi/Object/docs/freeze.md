<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank">en</a>

# Object.freeze()

Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，
以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。

## 语法

```javascript
Object.freeze(obj)
```

### 参数

* `obj` 将要被冻结的对象

### 返回值

被冻结的对象。

## 描述
冻结对象的所有自身属性都不可能以任何方式被修改。任何尝试修改该对象的操作都会失败，可能是静默失败，也可能会抛出异常（严格模式中）。

数据属性的值不可更改，访问器属性（有getter和setter）也同样（但由于是函数调用，给人的错觉是还是可以修改这个属性）。如果一
个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象。

## 例子

```javascript
var obj = {
  prop: function (){},
  foo: "bar"
};

// 可以添加新的属性,已有的属性可以被修改或删除
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

var o = Object.freeze(obj);

assert(Object.isFrozen(obj) === true);

// 现在任何修改操作都会失败
obj.foo = "quux"; // 静默失败
obj.quaxxor = "the friendly duck"; // 静默失败,并没有成功添加上新的属性

// ...在严格模式中会抛出TypeError异常
function fail(){
  "use strict";
  obj.foo = "sparky"; // 抛出TypeError异常
  delete obj.quaxxor; // 抛出TypeError异常
  obj.sparky = "arf"; // 抛出TypeError异常
}

fail();

// 使用Object.defineProperty方法同样会抛出TypeError异常
Object.defineProperty(obj, "ohai", { value: 17 }); // 抛出TypeError异常
Object.defineProperty(obj, "foo", { value: "eit" }); // 抛出TypeError异常
```

下面的例子演示了一个冻结对象中的非冻结对象是可以被修改的（浅冻结）。

```javascript
obj = {
  internal : {}
};

Object.freeze(obj);
obj.internal.a = "aValue";

obj.internal.a // "aValue"

// 想让一个对象变的完全冻结,冻结所有对象中的对象,我们可以使用下面的函数.

function deepFreeze (o) {
  var prop, propKey;
  Object.freeze(o); // 首先冻结第一层对象.
  for (propKey in o) {
    prop = o[propKey];
    if (!o.hasOwnProperty(propKey) || !(typeof prop === "object") || Object.isFrozen(prop)) {
      // 跳过原型链上的属性和已冻结的对象.
      continue;
    }

    deepFreeze(prop); //递归调用.
  }
}

obj2 = {
  internal : {}
};

deepFreeze(obj2);
obj2.internal.a = "anotherValue";
obj2.internal.a; // undefined
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |