# context 和 helper

## 1 context

`context` 上下文对象在特定的地方可用，例如 `asyncData`、`plugins`、`middleware` 和 `nuxtServerInit`

**context 概览：**

```js
function (context) {
  // 客户端和服务端都可用
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error,
    $config
  } = context

  // 仅服务端
  if (process.server) {
    const { req, res, beforeNuxtRender, beforeSerialize } = context
  }

  // 仅客户端
  if (process.client) {
    const { from, nuxtState } = context
  }
}
```

**使用场景：`asyncData`**

```js
export default {
  async asyncData(context) {
    const id = context.params.id
    try {
      // Using the nuxtjs/http module here exposed via context.app
      const post = await context.app.$http.$get(
        `https://api.nuxtjs.dev/posts/${id}`
      )
      return { post }
    } catch (e) {
      context.error(e) // Show the nuxt error page with the thrown error
    }
  }
}
```

使用场景：重定向和访问 store

```js
export default {
  middleware({ store, redirect }) {
    // retrieving keys via object destructuring
    const isAuthenticated = store.state.authenticated
    if (!isAuthenticated) {
      return redirect('/login')
    }
  }
}
```

## 2 $nuxt

`$nuxt` 可以通过 `this.$nuxtVue` 组件或 `window.$nuxt` 方式访问

**使用场景：检查网络**

```vue
<template>
  <div>
    <div v-if="$nuxt.isOffline">You are offline</div>
    <Nuxt />
  </div>
</template>
```

**使用场景：刷新页面数据**

```vue
<template>
  <div>
    <div>{{ content }}</div>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script>
  export default {
    asyncData() {
      return { content: 'Created at: ' + new Date() }
    },
    methods: {
      refresh() {
        this.$nuxt.refresh()
      }
    }
  }
</script>
```

**使用场景：控制加载栏**

```js
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
```

请参阅相应的加载功能章节以了解更多信息

## 3 onNuxtReady

如果想在 Nuxt 应用程序加载并准备就绪后执行一些操作，可以使用 `window.onNuxtReady`

当您想在客户端执行某个函数而不增加网站交互时间时，此功能非常有用

```js
window.onNuxtReady(() => {
  console.log('Nuxt is ready and mounted')
})
```

## 4 process

Nuxt 将三个布尔值 `client` `server` `static` 注入到全局 `process` 对象中

可在整个应用程序中使用，通常用于 `asyncData` 中

```vue
<template>
  <h1>I am rendered on the {{ renderedOn }} side</h1>
</template>

<script>
  export default {
    asyncData() {
      return { renderedOn: process.client ? 'client' : 'server' }
    }
  }
</script>
```
