# 代理模式

## 1 概念

**代理模式的特性：**

- 使用者无权访问目标对象
- 中间加代理，通过代理做授权和控制
- 代理后方法名不变，还是按原来的方式使用，这个是跟适配器模式的区别

比如科学上网，国内无法访问外网就需要使用代理，访问代理服务器，通过代理服务器访问外网。使用代理时还是通过原网址访问，网址并不会变

**代理模式 vs 适配器模式：**

- 适配器模式：提供一个不同的接口，使用者有权限使用目标类，但是接口不适用
- 代理模式：提供一模一样的接口，使用者无权使用目标类

**代理模式 vs 装饰器模式：**

- 装饰器模式：扩展功能，原有的功能不变且可以直接使用
- 代理模式：显示原有功能，但是是经过限制或阉割之后的

## 2 实例

```js
class ReadImg {
  constructor(fileName) {
    this.fileName = fileName;
    this.loadFromDisk(); // 初始化即从硬盘中加载
  }

  loadFromDisk() {
    console.log(`loading...${this.fileName}`);
  }

  display() {
    console.log(`display...${this.fileName}`);
  }
}

// 代理 ReadImg
class ProxyImg {
  constructor(fileName) {
    this.readImg = new ReadImg(fileName);
  }

  display() {
    this.readImg.display();
  }
}
```

## 2 使用场景

### 2.1 事件代理

假如要给 container 下所有 a 标签绑定 click 事件，一个个去绑定就会比较麻烦。这时就可以用事件代理

```html
<div id="container">
  <a href="#">a1</a>
  <a href="#">a2</a>
  <a href="#">a3</a>
  <a href="#">a4</a>
</div>

<script>
  var container = document.getElementById('container');
  container.addEventListener('click', function(e) {
    var target = e.target;

    if (target.nodeName === 'A') {
      console.log(target.innerHtml);
    }
  });
</script>
```

### 2.2 ES6 Proxy

Proxy 用于修改某些操作的默认行为。Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

使用明星和经纪人的例子来解释。我们知道外部是无法直接和明星沟通的，假如要邀请明星演出，必须要通过经纪人沟通

```javascript
let star = {
  name: '刘德华',
  age: 28,
  phone: '18711110000'
};

let agent = new Proxy(star, {
  get: (target, key) => {
    // 返回经纪人自己的电话，明星的电话是私密的
    if (key === 'phone') {
      return '18712341234';
    }

    // 经纪人报价
    if (key === 'price') {
      return 12000;
    }

    return target[key];
  },

  set: (target, key, val) => {
    // 限制值的写入
    if (key === 'customPrice') {
      if (val < 10000) {
        throw new Error('价格太低');
      } else {
        target[key] = val;
      }
    }
  }
});
```
