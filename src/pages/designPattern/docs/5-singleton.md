# 单例模式

## 1 概念

**单例模式的特性：**

- 对象在系统中是唯一的 (例如：购物车，购物车在系统中是唯一的，不管在哪个页面)
- 一个类只有一个实例

**注意点**

- 单例模式需要用到 java 的特性(private)
- ES6 中没有(typescript 中有)

> 单例模式需要现在类在外部不能 `new`，也就是外部不能生成实例，只能在内部生成

## 2 实例

### 2.1 typescript 写法

```javascript
class Singleton {
  private static singleton: Singleton;

  //限制产生多个对象，即外部不能 new
  private constructor () {

  }

  // 只能调用内部的 getInstance 方法获取实例
  public static getInstance (): Singleton {
    // 只创建一个实例
    if (Singleton.singleton === null) {
      Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}

let obj1 = new Singleton(); // 报错，外部不能new
let obj2 = Singleton.getInstance();
```

### 2.2 js 写法

js 中无法通过代码约束外部使用 new，只能约定不使用 new

```javascript
class Singleton {
  login() {
    console.log('login...');
  }
}

// 立即执行的匿名函数，形成闭包，让 instance 不会被回收
Singleton.getInstance = (function() {
  let instance;

  return function() {
    if (!instance) {
      instance = new Singleton();
    }
    return instance;
  };
})();

let obj1 = Singleton.getInstance();
```

## 3 应用场景

- jQuery，jQuery 只有一个实例
- 登录注册框/购物车
- vuex 和 redux 中的 store
