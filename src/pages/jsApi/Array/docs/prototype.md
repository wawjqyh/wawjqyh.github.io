<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype" target="_blank">en</a>

# Array.prototype

`Array.prototype`  属性表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法

```javascript
/*
如果JavaScript本身不提供 first() 方法，
添加一个返回数组的第一个元素的新方法。
*/

if(!Array.prototype.first) {
    Array.prototype.first = function() {
        console.log(`如果JavaScript本身不提供 first() 方法，
添加一个返回数组的第一个元素的新方法。`);
        return this[0];
    }
}
```

## 描述
Array实例继承自 Array.prototype。与所有构造函数一样，您可以更改构造函数的原型对象，以对所有 Array 实例进行更改。
例如，可以添加新方法和属性以扩展所有Array对象。

`鲜为人知的事实：Array.prototype 本身也是一个 Array`

```javascript
Array.isArray(Array.prototype);
// true
```

| 属性         |       |
|:-------------|:------|
| writable     | false |
| enumerable   | false |
| configurable | false |

## 属性

`Array.prototype.constructor`

所有的数组实例都继承了这个属性，它的值就是 Array，表明了所有的数组都是由 Array 构造出来的。

`Array.prototype.length`

上面说了，因为 Array.prototype 也是个数组，所以它也有 length 属性，这个值为 0，因为它是个空数组。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |