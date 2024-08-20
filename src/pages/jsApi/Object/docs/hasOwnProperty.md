<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" target="_blank">en</a>

# Object.prototype.hasOwnProperty()

hasOwnProperty() 方法会返回一个布尔值，指示对象是否具有指定的属性作为自身（不继承）属性。

## 语法

```javascript
obj.hasOwnProperty(prop)
```

### 参数

* `prop` 要检测的属性  字符串 名称或者 Symbol。

### 返回值

用来判断某个对象是否含有指定的属性的 Boolean 。

## 描述

所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符
不同，该方法会忽略掉那些从原型链上继承到的属性。

## 示例

### 使用 hasOwnProperty 方法判断属性是否存在

下面的例子检测了对象 o 是否含有自身属性 prop：

```javascript
o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // 返回 true
changeO();
o.hasOwnProperty('prop');   // 返回 false
```

### 自身属性与继承属性

下面的例子演示了 hasOwnProperty 方法对待自身属性和继承属性的区别：
```javascript
o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // 返回 true
o.hasOwnProperty('toString');         // 返回 false
o.hasOwnProperty('hasOwnProperty');   // 返回 false
```

### 遍历一个对象的所有自身属性

下面的例子演示了如何在遍历一个对象的所有属性时忽略掉继承属性，注意这里 for...in  循环只会遍历可枚举属性，所以不应该基于
这个循环中没有不可枚举的属性而得出 hasOwnProperty 是严格限制于可枚举项目的（如同 Object.getOwnPropertyNames()）。

```javascript
var buz = {
    fog: 'stack'
};

for (var name in buz) {
    if (buz.hasOwnProperty(name)) {
        alert("this is fog (" + name + ") for sure. Value: " + buz[name]);
    }
    else {
        alert(name); // toString or something else
    }
}
```

### 使用 hasOwnProperty 作为属性名

JavaScript 并没有保护 hasOwnProperty 属性名，因此某个对象是有可能存在使用这个属性名的属性，使用外部的 hasOwnProperty 获
得正确的结果是需要的：

```javascript
var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 始终返回 false

// 如果担心这种情况，可以直接使用原型链上真正的 hasOwnProperty 方法
({}).hasOwnProperty.call(foo, 'bar'); // true

// 也可以使用 Object 原型上的 hasOwnProperty 属性
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |