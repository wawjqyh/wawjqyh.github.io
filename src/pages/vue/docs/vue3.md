# Vue3 学习笔记

## 1 setup

`setup()` 钩子是在组件中使用组合式 API 的入口

选项式的代码都需要放在 `setup()` 内

**通常只在以下情况下使用：**

- 需要在非单文件组件中使用组合式 API 时
- 需要在基于选项式 API 的组件中集成基于组合式 API 的代码时（即选项式和组合式混用）

> 即在 `setup()` 中访问 `this` 会是 `undefined`。可以在选项式 API 中访问组合式 API 暴露的值，但反过来不行

```vue
<template>
  <div>
    <div class="section">
      <div><button @click="handleAddYear">年份+1</button></div>
      <div>{{ year }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const year = ref(2024);

    function handleAddYear() {
      year.value = year.value + 1;
    }

    return {
      year,
      handleAddYear
    };
  }
};
</script>

<style scoped>
.section {
  padding: 10px 0;
}
</style>
```

## 2 script setup

[文档](https://cn.vuejs.org/api/sfc-script-setup)

`<script setup>` 是在单文件组件中使用组合式 API 的编译时语法糖。当同时使用单文件组件与组合式 API 时该语法是**默认推荐**

顶层的绑定会被暴露给模板

当使用 `<script setup>` 的时候，任何在 `<script setup>` 声明的顶层的绑定 (包括变量，函数声明，以及 `import` 导入的内容) 都能在模板中直接使用

`setup()` 则需要 `return`

## 3 响应式基础

> 建议使用 `ref()` 作为声明响应式状态的主要 API，`ref()` 内容也用到了 `reactive()`

### 3.1 ref

`ref()` 返回的实际是一个对象。通过 `getter` 和 `setter` 方法来拦截对象属性的 `get` 和 `set` 操作

所以访问值需要使用 `.value`

```js
// 伪代码，不是真正的实现
const myRef = {
  _value: 0,
  get value() {
    track();
    return this._value;
  },
  set value(newValue) {
    this._value = newValue;
    trigger();
  }
};
```

> 非原始值将通过 `reactive()` 转换为响应式代理，即当 `ref` 的值是一个对象时，`ref()` 也会在内部调用它

```js
import { ref } from 'vue';

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
});

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++;
  obj.value.arr.push('baz');
}
```

### 3.2 reactive

`reactive()` 是使用 `Proxy` 代理对象实现响应式

**`reactive()` 的局限性 ​**

**有限的值类型：**它只能用于对象类型 (对象、数组和如 `Map`、`Set` 这样的集合类型)。它不能持有如 `string`、`number` 或 `boolean` 这样的原始类型

**不能替换整个对象：**由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用

```js
let state = reactive({ count: 0 });

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = reactive({ count: 1 });
```

**对解构操作不友好：**当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：

```js
const state = reactive({ count: 0 });

// 当解构时，count 已经与 state.count 断开连接
let { count } = state;
// 不会影响原始的 state
count++;

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
callSomeFunction(state.count);
```

## 4 计算属性

### 4.1 基础

组合式 API 中，使用 `computed()` 方法返回一个计算属性

```vue
<script setup>
import { reactive, computed } from 'vue';

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
});

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No';
});
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>
```

### 4.2 计算属性和方法的区别

方法：

```vue
<p>{{ calculateBooksMessage() }}</p>
```

```js
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No';
}
```

计算属性和方法两种方式在结果上确实是完全相同的

但是计算属性仅会在其响应式依赖更新时才重新计算

而方法调用总是会在重渲染发生时再次执行函数

### 4.3 可写计算属性

## 5 侦听器

### 5.1 基础

在组合式 API 中，我们可以使用 `watch` 函数在每次响应式状态发生变化时触发回调函数

```vue
<script setup>
import { ref, watch } from 'vue';

const question = ref('');

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    const res = await fetch('https://yesno.wtf/api');
    // do some thing
  }
});
</script>
```

### 5.2 数据源类型

`watch` 的第一个参数可以是不同形式的数据源：它可以是一个 `ref` (包括计算属性)、一个响应式对象、一个 `getter` 函数、或多个数据源组成的数组

```js
const x = ref(0);
const y = ref(0);

// 单个 ref
watch(x, newX => {
  console.log(`x is ${newX}`);
});

// getter 函数
watch(
  () => x.value + y.value,
  sum => {
    console.log(`sum of x + y is: ${sum}`);
  }
);

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});
```

### 5.3 选项

`watch()` 选项为第三个参数

如即时回调、深层侦听、一次性侦听

```js
watch(
  source,
  (newValue, oldValue) => {
    // do some thing
  },
  {
    deep: true,
    immediate: true,
    once: true
  }
);
```

### 5.4 watchEffect

`watchEffect()` 允许我们自动跟踪回调的响应式依赖。和 `computed` 类似

## 6 组件

### 6.1 基础

- 声明 props `defineProps()`
- 声明事件 `defineEmits()`
- 暴露属性和方法 `defineExpose()`

### 6.2 v-model

原理(和 vue2 有区别)：

- 一个名为 `modelValue` 的 prop，本地 ref 的值与其同步
- 一个名为 `update:modelValue` 的事件，当本地 ref 的值发生变更时触发

```vue
<script setup>
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />
</template>
```

`defineModel` 是一个便利宏

```vue
<script setup>
const model = defineModel();
</script>

<template>
  <input v-model="model" />
</template>
```

多个 `v-model` 绑定，可以指定 `v-model` 名称

```vue
<template>
  <UserName v-model:first-name="first" v-model:last-name="last" />
</template>
```

```vue
<script setup>
const firstName = defineModel('firstName');
const lastName = defineModel('lastName');
</script>

<template>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
</template>
```

## 7 组合式函数 composables