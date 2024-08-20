# 工厂模式

## 1 概念

### 1.1 概念

**工厂模式的特性：**

- 将 new 操作单独封装
- 遇到 new 时，就要考虑是否使用工厂模式

> 通俗的说，工厂模式就是实现一个函数或方法，这个函数的功能是生成一个类的实例并返回 (或者返回一个你想要的对象)

### 1.2 实例

```javascript
class Product {
  constructor(name) {
    this.name = name;
  }

  init() {
    alert('init');
  }
}

class Creator {
  create(name) {
    return new Productor(name);
  }
}

// 工厂创建实例
let creator = new Creator();
let p = creator.create('p1');

p.init();
```

## 2 应用场景

### 2.1 jQuery

`jQuery` 的 `$('div')` 就是一个工厂

`$('div')` 能直接返回一个 `jQuery` 实例，而不需要自己创建，减少了书写的麻烦

一旦构造函数名称 `jQuery` 发生变化，只需要修改一个地方

```javascript
// jQuery 场景
class JQuery {
  constructor(selector) {}

  append(node) {}
}

// 工厂模式
window.$ = function(slector) {
  return new JQuery(slector);
};

let test = $('#test');
```

### 2.2 React.createElement

`React.createElement` 是一个工厂模式，它创建了一个 `Vnode` 实例

```jsx
// react，jsx 是一个语法糖
let profile = (
  <div>
    <img src="avatar.png" className="profile" />
    <h3>{[user.firstName, user.lastName].join(' ')}</h3>
  </div>
);

// 上面的语法糖会转换成
let profile = React.createElement(
  'div',
  null,
  React.createElement('img', { src: 'avatar.png', className: 'profile' }),
  React.createElement('h3', null, [user.firshName, user.lastName].join(' '))
);

// 工厂模式
React.createElement = function(tag, attrs, children) {
  return new Vnode(tag, attrs, children);
};
```
