<a href="https://developer.mozilla.org/zh_CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf" target="_blank">en</a>

# Boolean.prototype.valueOf()

valueOf() 方法返回一个Boolean对象的原始值（primitive value）。

## 语法

```javascript
bool.valueOf()
```

### 参数

无

## 描述

Boolean 的 valueOf 方法返回一个布尔对象或布尔字面量的原始值。

该方法通常在 JavaScript 内部调用，而不是在代码中显示调用。

## 示例

使用 valueOf

```javascript
x = new Boolean();
myVar = x.valueOf()      // assigns false to myVar
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |