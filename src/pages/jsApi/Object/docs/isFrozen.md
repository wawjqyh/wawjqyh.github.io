<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen" target="_blank">en</a>

# Object.isFrozen()

Object.isFrozen() 方法判断一个对象是否被冻结 frozen。

## 语法

```javascript
Object.isFrozen(obj)
```

### 参数

* `obj` 被检测的对象

## 描述

一个对象是冻结的（frozen）是指它不可扩展，所有属性都是不可配置的（non-configurable），且所有数据属性（data properties）
都是不可写的（non-writable）。数据属性是指那些没有取值器（getter）或赋值器（setter）的属性。

## 例子

```javascript
// 一个对象默认是可扩展的,所以它也是非冻结的.
assert(Object.isFrozen({}) === false);

// 一个不可扩展的空对象同时也是一个冻结对象.
var vacuouslyFrozen = Object.preventExtensions({});
assert(Object.isFrozen(vacuouslyFrozen) === true);

// 一个非空对象默认也是非冻结的.
var oneProp = { p: 42 };
assert(Object.isFrozen(oneProp) === false);

// 让这个对象变的不可扩展,并不意味着这个对象变成了冻结对象,
// 因为p属性仍然是可以配置的(而且可写的).
Object.preventExtensions(oneProp);
assert(Object.isFrozen(oneProp) === false);

// ...如果删除了这个属性,则它会成为一个冻结对象.
delete oneProp.p;
assert(Object.isFrozen(oneProp) === true);

// 一个不可扩展的对象,拥有一个不可写但可配置的属性,则它仍然是非冻结的.
var nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", { writable: false }); // 变得不可写
assert(Object.isFrozen(nonWritable) === false);

// 把这个属性改为不可配置,会让这个对象成为冻结对象.
Object.defineProperty(nonWritable, "e", { configurable: false }); // 变得不可配置
assert(Object.isFrozen(nonWritable) === true);

// 一个不可扩展的对象,拥有一个不可配置但可写的属性,则它仍然是非冻结的.
var nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", { configurable: false });
assert(Object.isFrozen(nonConfigurable) === false);

// 把这个属性改为不可写,会让这个对象成为冻结对象.
Object.defineProperty(nonConfigurable, "release", { writable: false });
assert(Object.isFrozen(nonConfigurable) === true);

// 一个不可扩展的对象,值拥有一个访问器属性,则它仍然是非冻结的.
var accessor = { get food() { return "yum"; } };
Object.preventExtensions(accessor);
assert(Object.isFrozen(accessor) === false);

// ...但把这个属性改为不可配置,会让这个对象成为冻结对象.
Object.defineProperty(accessor, "food", { configurable: false });
assert(Object.isFrozen(accessor) === true);

// 使用Object.freeze是冻结一个对象最方便的方法.
var frozen = { 1: 81 };
assert(Object.isFrozen(frozen) === false);
Object.freeze(frozen);
assert(Object.isFrozen(frozen) === true);

// 一个冻结对象也是一个密封对象.
assert(Object.isSealed(frozen) === true);

// 当然,更是一个不可扩展的对象.
assert(Object.isExtensible(frozen) === false);
```

## 注意

在 ES5 中，如果参数不是一个对象类型，将抛出一个 TypeError  异常。在 ES6 中， non-object 参数将被视为一个冻结的普通对象，
因此会返回 true。

```javascript
Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES2015 code)
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |