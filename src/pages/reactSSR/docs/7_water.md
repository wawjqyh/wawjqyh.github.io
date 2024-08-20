# 注水和脱水

demo 地址 [https://github.com/wawjqyh/demo-react-ssr/tree/master/7_water](https://github.com/wawjqyh/demo-react-ssr/tree/master/7_water)

到这里服务端渲染以及基本完成，但是仔细观察页面会发现，虽然数据已经挂载到了服务端返回的 HTML 代码中，但是浏览器的初始状态是没有数据的。

这是因为当服务端拿到 store 并获取数据后，客户端的 js 代码又执行一遍，在客户端代码执行的时候又创建了一个空的 store，两个 store 的数据不能同步。

同步两个 store 的数据的操作就叫注水和脱水。

## 注水

把服务端的 store 数据注入到 window 全局环境中，就是注水操作

```javascript
<script>
  window.context = {
    state: ${JSON.stringify(store.getState())}
  }
</script>
```

## 脱水

脱水就是把 window 上绑定的数据给到客户端的 store，可以在创建 redux 实例的时候进行。

```javascript
// 这个是脱水的操作，将服务端的 state 作为 initialState 初始化 store
export function getClientStore() {
  const defaultState = window.context ? window.context : {};
  return createStore(combineReducers({ user }), defaultState);
}
```
