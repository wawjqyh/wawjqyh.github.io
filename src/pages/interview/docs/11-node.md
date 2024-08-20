# Node

## 1 模块机制

### 题目：node 模块机制是怎样的

## 2 require 原理

### 题目：node require 具体实现是什么

## 3 事件循环

### 题目：node 事件循环与浏览器的哪些不一样

## 4 cluster 原理

### 题目：cluster 原理是怎样的

## 5 流机制

## 6 pipe 原理

### 题目：pipe 原理是怎样的

## 7 守护进程

## 8 进程通信

## 9 异常处理

```js
process.on('uncaughtException', function(err) {
  console.error('Error caught in uncaughtException event:', err);
});
```

```js
var d = domain.create();

d.on('error', function(err) {
  console.error('Error caught by domain:', err);
});

d.run(function() {
  process.nextTick(function() {
    fs.readFile('non_existent.js', function(err, str) {
      if (err) throw err;
      else console.log(str);
    });
  });
});
```

### 题目：node 的异常处理方式
