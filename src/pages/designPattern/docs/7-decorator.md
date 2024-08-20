# 装饰器模式

## 1 概念

装饰器模式是在原有的基础上增加一些功能，适配器模式为为旧的接口做兼容

**装饰器模式的特性：**

- 为对象添加新的功能
- 不改变原有的结构和功能

## 2 实例

```javascript
class Circle {
  draw() {
    console.log('画一个圆形');
  }
}

// 装饰器
class Decorator {
  constructor(circle) {
    this.circle = circle;
  }

  draw() {
    this.circle.draw();
    // 添加新功能
    this.setRedBorder();
  }

  setRedBorder() {
    console.log('设置红色边框');
  }
}

let circle = new Circle();
circle.draw();

let dec = new Decorator(circle);
dec.draw();
```

## 3 使用场景

### 3.1 类装饰器

```javascript
// 装饰类
@testDec
class Demo {
  // ...
}

function testDec(target) {
  target.isDec = true;
}

alert(Demo.isDec);
```

```javascript
@decorator
class A {}

// 等同于
class A {}
A = decorator(A) || A;
```

testDec 就是一个装饰器。它修改了 Demo 这个类的行为，为它加上了静态属性 isDec。testDec 函数的参数 target 是 Demo 类本身

### 3.2 类装饰器-传参数

```javascript
// mixin示例

function mixins(...list) {
  // 传参数需要返回一个函数
  return function(target) {
    Object.assign(target.prototype, ...list);
  };
}

const Foo = {
  foo() {
    alert('foo');
  }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo(); // 'foo'
```

### 3.3 方法装饰器

方法装饰器有固定的格式

- 第一个参数是类的原型对象
- 第二个参数是所要装饰的属性名
- 第三个参数是该属性的描述对象，Object.defineProperty 中会用到。即：

```javascript
{
  value: specifiedFunction,
  enumerable: false,
  configurable: true,
  writable: true
}
```

> 方法装饰器需要返回 descriptor

```javascript
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Person {
  constructor() {
    this.first = 'hello';
    this.last = 'world';
  }

  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}

let p = new Person();
p.name = function() {}; // 这里会报错，因为是只读的
```

### 3.4 方法装饰器-添加 log

是否遇到过这样的情景，比如使用 vue 框架的时候，使用了某个方法会在 console 打印一些日志，表示这个方法即将被弃用请使用新的方法替代。使用下面的装饰器就能很容易实现这个功能。

```javascript
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log('执行了加法');
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

const math = new Math();
math.add(2, 4);
```

### 3.5 connect 是如何实现的

`connect` 是用来连接 `Redux` 和 `React` 的，它包在我们的容器组件的外一层，它接收上面 `Provider` 提供的 `store` 里面的 `state` 和 `dispatch`，传给一个构造函数，返回一个对象，以属性形式传给我们的容器组件。`connect` 是一个高阶函数，首先传入 `mapStateToProps`、`mapDispatchToProps`，然后返回一个生产 Component 的函数。

主要的逻辑如下：

```js
export default function connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {}) {
  return function wrapWithConnect(WrappedComponent) {
    class Connect extends Component {
      constructor(props, context) {
        // 从Component处获得store
        this.store = props.store || context.store;
        this.stateProps = computeStateProps(this.store, props);
        this.dispatchProps = computeDispatchProps(this.store, props);
        this.state = { storeState: null };
        // 对stateProps、dispatchProps、parentProps进行合并
        this.updateState();
      }

      shouldComponentUpdate(nextProps, nextState) {
        // 进行判断，当数据发生改变时，Component重新渲染
        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
          this.updateState(nextProps);
          return true;
        }
      }

      componentDidMount() {
        // 改变Component的state
        this.store.subscribe(() => {
          this.setState({
            storeState: this.store.getState()
          });
        });
      }

      render() {
        // 生成包裹组件Connect
        return <WrappedComponent {...this.nextState} />;
      }
    }

    Connect.contextTypes = {
      store: storeShape
    };

    return Connect;
  };
}
```
