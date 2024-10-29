# Vue3 迁移

## 1 Vue3 迁移指南

[Vue3 迁移指南 官方文档](https://v3-migration.vuejs.org/zh/)

## 2 Vue3 新特性

[详情见官方文档](https://v3-migration.vuejs.org/zh/)

- 组合式 API
- 单文件组件中的组合式 API 语法糖 `<script setup>`
- Teleport 组件：可以将一个组件内部的一部分模板传送到外层的位置，例如全屏的模态框
- Fragments 片段：组件支持多根节点
- Emits 组件选项：声明由组件触发的自定义事件

- 来自 `@vue/runtime-core` 的 `createRenderer` API 用来创建自定义渲染函数
- 单文件组件中的状态驱动的 CSS 变量 (`<style>` 中的 `v-bind`)
- SFC `<style scoped>` 新增全局规则和针对插槽内容的规则
- `Suspense` 实验性

## 3 非兼容性改变

[非兼容性改变](https://v3-migration.vuejs.org/zh/breaking-changes/)

### 3.1 全局 API

**全局 Vue API 更改为使用应用程序实例**

Vue 2 没有 app 的概念，从同一个 Vue 构造函数创建的每个根实例共享相同的全局配置

| 2.x 全局 API               | 3.x 实例 API (app)                         |
| -------------------------- | ------------------------------------------ |
| Vue.config                 | app.config                                 |
| Vue.config.productionTip   | 移除                                       |
| Vue.config.ignoredElements | app.config.compilerOptions.isCustomElement |
| Vue.component              | app.component                              |
| Vue.directive              | app.directive                              |
| Vue.mixin                  | app.mixin                                  |
| Vue.use                    | app.use                                    |
| Vue.prototype              | app.config.globalProperties                |
| Vue.extend                 | 移除                                       |

**全局和内部 API 都经过了重构，现已支持 TreeShaking**

```js
// vue 2
import Vue from 'vue';

Vue.nextTick(() => {
  // 一些和 DOM 有关的东西
});

// vue 3
import { nextTick } from 'vue';

nextTick(() => {
  // 一些和 DOM 有关的东西
});
```

受影响的 API

- `Vue.nextTick`
- `Vue.observable` (用 `Vue.reactive` 替换)
- `Vue.version`
- `Vue.compile` (仅完整构建版本)
- `Vue.set` (仅兼容构建版本)
- `Vue.delete` (仅兼容构建版本)

### 3.2 模板指令

- `v-model` prop 和事件名称更改，`title.sync="pageTitle"` 替换为 `v-model.title="pageTitle"`
- `template` 上使用 `v-for` 需要使用 key
- `v-if` 和 `v-for` 在同一个元素身上使用时的优先级发生了变化
- `v-bind="object"` 现在是顺序敏感的
- `v-on:event.native` 移除。自定义事件需要用 emits 显式定义。未被定义为组件触发的所有事件监听器，会把它们作为原生事件监听器添加到子组件的根元素中 (除非在子组件的选项中设置了 `inheritAttrs: false`)

### 3.3 组件

- 异步组件现在需要通过 `defineAsyncComponent` 方法进行创建
- 组件事件现在应该使用 `emits` 选项进行声明

- 函数式组件只能通过纯函数进行创建
- 单文件组件 `<template>` 标签的 `functional attribute` 和函数式组件的 `functional` 选项已被移除

### 3.4 渲染函数

- `$listeners` 被移除或整合到 `$attrs`
- `$attrs` 现在包含 `class` 和 `style attribute`

- 渲染函数 API 更改
- `$scopedSlots property` 已移除，所有插槽都通过 `$slots` 作为函数暴露

### 3.5 被移除的 API

-  `v-on` 不支持 `keyCode`，`KeyboardEvent.keyCode` 已被废弃
- `$on`、`$off` 和 `$once` 实例方法
- 过滤器 `filter`，使用计算属性或者方法替代
- 全局函数 `set` 和 `delete` 以及实例方法 `$set` 和 `$delete`。基于代理的变化检测已经不再需要它们了
- `$children`。`2.x` 中可以使用 `this.$children` 访问当前实例的直接子组件。建议使用模板引用 `ref`
- `$destroy` 实例方法。用户不应该再手动管理单个 Vue 组件的生命周期

- 内联模板 `attribute`
- `propsData` 选项

### 3.6 自定义元素

- 自定义元素检测现在在模板编译时执行
- 特殊的 `is` attribute 的使用被严格限制在被保留的 `<component>` 标签中

### 3.7 其他小改变

- `destroyed` 生命周期选项被重命名为 `unmounted`
- `beforeDestroy` 生命周期选项被重命名为 `beforeUnmount`
- 来自 `mixin` 的 `data` 选项现在为浅合并
- `Props` 的 `default` 工厂函数不再可以访问 `this` 上下文
- 自定义指令的 API 已更改为与组件生命周期一致，且 `binding.expression` 已移除
- 当侦听一个数组时，只有当数组被替换时，回调才会触发，如果需要在变更时触发，则必须指定 `deep` 选项
- 没有特殊指令的标记 (`v-if/else-if/else`、`v-for` 或 `v-slot`) 的 `<template>` 现在被视为普通元素，并将渲染为原生的 `<template>` 元素，而不是渲染其内部内容

- `data` 选项应始终被声明为一个函数
- `Attribute` 强制策略已更改
- `Transition` 的一些 `class` 被重命名
- `<TransitionGroup>` 不再默认渲染包裹元素
- 已挂载的应用不会替换它所挂载的元素
- 生命周期的 `hook:` 事件前缀改为 `vue:`
