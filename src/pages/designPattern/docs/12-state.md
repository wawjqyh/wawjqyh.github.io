# 状态模式

## 1 概念

在状态模式（State Pattern）中，类的行为是基于它的状态改变的。这种类型的设计模式属于行为型模式

可以用于消除 if...else 等条件选择语句

## 2 实例

```js
class TrafficLight {
  constructor() {
    this.currentLight = null;
  }

  change(light) {
    this.currentLight = light;
    this.currentLight.go();
  }
}

class RedLight {
  go() {
    console.log('this is red light');
  }
}
class GreenLight {
  go() {
    console.log('this is green light');
  }
}
class YellowLight {
  go() {
    console.log('this is yellow light');
  }
}

const trafficLight = new TrafficLight();

trafficLight.change(new RedLight());
trafficLight.change(new YellowLight());
```

通过传入灯对象到 change 方法中，从而改变红绿灯的状态，触发其相应的处理程序，这就是一个典型的状态模式的应用

采用状态模式的代码，代码结构都差不多，都是一种状态对应一种操作，然后可能会改变对象的状态

## 3 使用场景

### 3.1 有限状态机
