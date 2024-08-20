<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now" target="_blank">en</a>

# Date.now()

Date.now() 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。

## 语法

```javascript
var timeInMs = Date.now();
```

### 参数

无

## 描述

now()方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数，类型为Number。

因为 now() 是Date的一个静态函数，所以必须以 Date.now() 的形式来使用。

## 兼容旧环境

该方法在 ECMA-262 第五版中被标准化，可以通过下面的代码来兼容那些不支持该方法的引擎。

```javascript
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |