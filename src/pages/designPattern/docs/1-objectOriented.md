# 面向对象

面向对象三要素：

- 继承，子类继承父类
- 封装，数据权限和保密
- 多态，同一接口不同实现

## 1 继承

```javascript
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} eat something`);
  }

  speak() {
    console.log(`my name is ${this.name}, age ${this.age}`);
  }
}

class Student extends People {
  constructor(name, age, number) {
    // 执行父类的构造方法
    super(name, age);

    this.number = number;
  }

  study() {
    console.log(`${this.name} study`);
  }
}

let xiaoMing = new Student('xiaoming', 10, 'A1');
xiaoMing.study();
```

## 2 封装

- public 完全开发
- protected 对子类开放
- private 对自己开放

> js 没有上面的关键字(es6 尚不支持)，可以使用 typescript

- 减少耦合，不该外露的不外露
- 利于数据、接口的权限管理
- ES6 目前不支持，一般约定，\_ 开头的属性是 private

```javascript
class People {
  protected weight; // 受保护的属性，只有自己和子类能访问

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.weight = 120;
  }

  eat() {
    console.log(`${this.name} eat something`);
  }

  speak() {
    console.log(`my name is ${this.name}, age ${this.age}`);
  }
}

class Student extends People {
  private girlfriend; // 私有属性

  constructor(name, age, number) {
    // 执行父类的构造方法
    super(name, age);

    this.number = number;
  }

  study() {
    console.log(`${this.name} study`);
  }
}

let xiaoMing = new Student('xiaoming', 10, 'A1');

xiaoMin.girlfriend; // 编译报错，私有属性无法访问
```

## 3 多态

- 同一个接口，不同表现
- JS 应用极少
- 需要结合 java 等语言的接口、重写、重载等功能

## 4 应用 jQuery

jQuery 就是一个 class，`$('#test')` 会生成一个 jQuery 的实例

```javascript
class JQuery {
  constructor(selector) {}

  append(node) {}

  addClass(name) {}
}

// 返回 jQuery 的实例
window.$ = function(slector) {
  return new JQuery(slector);
};

let test = $('#test');
```
