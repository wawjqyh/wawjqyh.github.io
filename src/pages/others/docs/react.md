# react

## 基础

### Hello World

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));
```

### 组件

组件名称必须以大写字母开头

```jsx
import HelloComponent from "./HelloComponent";

render() {
    return (
        <div>
            <HelloComponent name="啦啦啦"/>
        </div>
    )
}
```

### props

props 是外部传到组件内的

无论是使用函数或是类来声明一个组件，它决不能修改它自己的 props

### state

- state 是私有的，完全受控于当前组件
- 如果你不在 render() 中使用某些东西，它就不应该在 state 中
- this.setState() 来更新组件局部状态，会重新渲染组件
- setState(state, props) 可以接受一个函数，用于需要异步更新的情况
- state 是单向的

```jsx
constructor(props) {
    super(props);

    // 初始化 state
    this.state = {
        nowTime: new Date()
    }
}
```

```jsx
// 更新状态
this.setState({
  nowTime: new Date()
});
```

```jsx
render() {
    return (
        <div>now {moment(this.state.nowTime).format("YYYY-MM-DD hh:mm:ss")}</div>
    )
}
```

### 事件

注意 this 指向，JSX 回调函数中的 this，类的方法默认是不会绑定 this 的

- 可以使用 bind 绑定 this
- 属性初始化器语法，可以使用属性初始化器来正确的绑定回调函数
- 使用箭头函数(不推荐使用)

如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined

```jsx
export default class Event extends Component {
  constructor(props) {
    super(props);
    this.myName = '啦啦啦';
  }

  clickEvent(e) {
    console.log(this.myName); // 这时会输出undefined
  }

  render() {
    return <button onClick={this.clickEvent}>点击1</button>;
  }
}
```

#### 方法 1 bind

```jsx
export default class Event extends Component {
  constructor(props) {
    super(props);
    this.myName = '啦啦啦';

    // 方法1 使用bind绑定
    // 或者可以直接在render里面绑定
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    console.log(this.myName);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>点击1</button>
        <button onClick={this.clickEvent.bind(this)}>点击1</button>
      </div>
    );
  }
}
```

#### 方法 2 属性初始化器

```jsx
export default class Event extends Component {
  constructor(props) {
    super(props);
    this.myName = '啦啦啦';
  }

  // 方法2
  // 属性初始化器语法
  clickEvent = () => {
    console.log(this.myName);
  };

  render() {
    return <button onClick={this.clickEvent2}>点击2</button>;
  }
}
```

#### 方法 3 箭头函数(不推荐)

```jsx
export default class Event extends Component {
  constructor(props) {
    super(props);
    this.myName = '啦啦啦';
  }

  clickEvent(e) {
    console.log(this.myName);
  }

  render() {
    return (
      <div>
        {/*方法3*/}
        {/*使用箭头函数*/}
        <button onClick={e => this.clickEvent(e)}>点击3</button>
      </div>
    );
  }
}
```

### 条件渲染

- 条件变量
- 与运算符
- 三目运算符

```jsx
<h4>与运算符</h4>
<div>
    <span>{this.num}</span>
    {this.num < 5 && (
        <span>小于5</span>
    )}
    {this.num > 5 && (
        <span>大于5</span>
    )}
</div>

<h4>三目运算符</h4>
<div>
    <span>{this.num}</span>
    {this.num < 5 ? (
        <span>小于5</span>
    ) : (
        <span>大于5</span>
    )}
</div>
```

### 列表和 key

列表渲染时需要传 key

Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识

```jsx
render() {
    this.arr = ["h", "e", "l", "l", "o"];

    return (
        <div>
            {this.arr.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}
```

### 表单

```jsx
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  onUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this.onUsername.bind(this)} />
        <div>{this.state.username}</div>
      </div>
    );
  }
}
```

### 状态提升

使用 react 经常会遇到几个组件需要共用状态数据的情况。这种情况下，我们最好将这部分共享的状态提升至他们最近的父组件当中进行管理

## redux

### 概述

`store` 管理所有状态，在里面记录 `state`，
需要改变的时候告诉 `dispatch` 要干什么 `action`，
处理变化的部分 `reducer` 拿到 `state` 和 `action`，生成新的 `state`

- `store` 集中管理状态的地方
- `state` 状态
- `dispatch` 调用 action 的方法
- `action` 获取数据的方法
- `reducer` 改变数据的方法，管理 action 和 state

### 过程

- 首先通过 reducer 新建 store，随时通过 store.getState 获取状态
- 需要状态变更，store.dispatch(action) 来修改状态
- reducer 函数接收 state 和 action，返回新的 state，可以用 store.subscribe 来监听每次修改

### react 使用 redux

- 把 store.dispatch 方法传递给组建，内部可以修改状态
- subscribe 订阅 render 函数，每次修改都重新渲染
- redux 相关内容移到单独地方管理

## react-redux

- react-redux 提供了 Provider 和 connect 两个接口来连接
- 不需要 subscribe，react-redux 会自动监听 state 变化来重新渲染 dom

### Provider

Provider 就是把我们用 rudux 创建的 store 传递到内部的其他组件。让内部组件可以享有这个 store 并提供对 state 的更新

```jsx
<Provider store={store}>
  <Router ref="router" history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={MainPage}></IndexRoute>
    </Route>
  </Router>
</Provider>
```

### connect

```jsx
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])(components);
```

#### mapStateToProps

- 如果定义该参数，组件将会监听 Redux store 的变化
- 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用
- 该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并
- 如果你省略了这个参数，你的组件将不会监听 Redux store
- 如果指定了该回调函数中的第二个参数 ownProps，则该参数的值为传递到组件的 props，而且只要组件接收到新的 props，mapStateToProps 也会被调用

#### mapDispatchToProps

- 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，对象所定义的方法名将作为属性名；每个方法将返回一个新的函数，函数中 dispatch 方法会将 action creator 的返回值作为参数执行。这些属性会被合并到组件的 props 中
- 如果传递的是一个函数，该函数将接收一个 dispatch 函数，然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起
- 如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中
