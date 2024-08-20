<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank">en</a>

# Object.keys()

Object.keys() 方法会返回一个由给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时
返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。

## 语法

```javascript
Object.keys(obj)
```

## 参数

* `obj` 要返回其枚举自身属性的对象。

### 返回值

一个表示给定对象的所有可枚举属性的字符串数组。

## 描述

Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的对象上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。

## 例子

```javascript
var arr = ["a", "b", "c"];
alert(Object.keys(arr));
// 弹出"0,1,2"

/* 类数组对象 */
var obj = { 0 : "a", 1 : "b", 2 : "c"};
alert(Object.keys(obj));
// 弹出"0,1,2"
/* 具有随机键排序的数组类对象 */
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj));
// console: ['2', '7', '100']
/* getFoo是个不可枚举的属性 */
var my_obj = Object.create(
   {},
   { getFoo : { value : function () { return this.foo } } }
);
my_obj.foo = 1;

alert(Object.keys(my_obj));
// 只弹出foo
```

如果你想获取一个对象的所有属性,，甚至包括不可枚举的，请查看Object.getOwnPropertyNames。

## 注意

在ES5，如果此方法的参数不是一个对象（原始的），那么它会造成 TypeError。在ES2015，非对象的参数将被强制转换为一个对象。

```javascript
Object.keys("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.keys("foo");
// ["0", "1", "2"]                   (ES2015 code)
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |