<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime" target="_blank">en</a>

# Date.prototype.getTime()

getTime() 方法返回一个时间的格林威治时间数值。

你可以使用这个方法把一个日期时间赋值给另一个Date 对象。这个方法的功能和 valueOf() 方法一样。

## 语法

```javascript
dateObj.getTime()
```

### 返回值

getTime 方法的返回值一个数值，表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数

## 例子

### 使用 getTime() 复制日期对象

创建一个拥有相同时间值的日期对象

```javascript
var birthday = new Date(1994, 12, 10);
var copy = new Date();
copy.setTime(birthday.getTime());
```

### 测量代码执行时间

连续调用两个新生成的日期对象的 getTime 方法，根据两次调用的返回值求得时间差。这可以用于计算某些操作的执行时间。避免生成不必要的Date对象另见Date.now()

```javascript
var end, start, i;

start = new Date();
for (i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log("Operation took " + (end.getTime() - start.getTime()) + " msec");
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |