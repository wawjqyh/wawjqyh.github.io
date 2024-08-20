# 适配器模式

## 1 概念

- 旧接口格式和新的要求不兼容，那么就需要一个适配器转换成可用的接口
- 类似与充电的适配器，中间加一个适配转换接口

## 2 实例

```javascript
class Adaptee {
  // 旧方法
  specificRequest() {
    return '德国标准插头';
  }
}

// 适配器
class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }

  // 转换 specificRequest 方法
  request() {
    let info = this.adaptee.specificRequest();
    return `${info} - 转换器 - 中国标准插头`;
  }
}

// 测试
let target = new Target();
let res = target.request();
```

## 3 使用场景

### 3.1 封装旧接口

由于历史原因，代码中异步请求全部是：`$.ajax({...})`，现在需要使用新封装的方法

为了不改动旧的代码，就需要使用一个适配器，将 `ajax` 封装成旧代码能使用的格式

```javascript
// 新的 ajax 方法
ajax({
  url: 'xxx',
  type: 'post',
  data: {}
});

// 由于历史原因，旧代码中全部是：$.ajax({...})，改动工作量很大

// 那么可以做一层适配器，旧的代码不用改。
let $ = {
  ajax: function(options) {
    return ajax(options);
  }
};

// 封装后 $.ajax({...}) 调用的就是新的 ajax 方法
```

### 3.2 vue computed

`vue computed` 就是一个适配器模式

`vue computed` 的使用场景通常是：某些数据不符合要求，不能直接使用，对旧的数据进行加工
