<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties" target="_blank">en</a>

# Object.defineProperties()

Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

## 语法

```javascript
Object.defineProperties(obj, props)
```

### 参数

* `obj` 将要被添加属性或修改属性的对象
* `props` 该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置

## 例子

```javascript
var obj = {};
Object.defineProperties(obj, {
  "property1": {
    value: true,
    writable: true
  },
  "property2": {
    value: "Hello",
    writable: false
  }
  // 等等.
});
alert(obj.property2) //弹出"Hello"
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |