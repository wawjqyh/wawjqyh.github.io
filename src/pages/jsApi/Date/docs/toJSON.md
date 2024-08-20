<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" target="_blank">en</a>

# Date.prototype.toJSON()

toJSON() 方法返回 Date 对象的字符串形式。

## 语法

```javascript
dateObj.toJSON()
```

## 描述

Date 实例引用一个具体的时间点。 调用 toJSON() 返回一个 JSON 格式字符串(使用 toISOString())，表示该日期对象的值。默认情况下，
这个方法常用于 JSON序列化Date对象。

## 样例

toJSON() 样例

```javascript
var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);

console.log("Serialized date object: " + jsonDate);
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |