# 集合

## 1 概念

集合是一种无序且唯一的数据结构，js 中有集合这种数据结构 Set

集合的常用操作：去重、判断某元素是否在集合中、求交集

## 2 JavaScript 中的 Set

### 2.1 概念

Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

它的主要方法如下：

- `new Set(iterable)` —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中
- `set.add(value)` —— 添加一个值，返回 set 本身
- `set.delete(value)` —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false
- `set.has(value)` —— 如果 value 在 set 中，返回 true，否则返回 false
- `set.clear()` —— 清空 set
- `set.size` —— 返回元素个数

> Set 主要特点是，重复使用同一个值调用 set.add(value) 并不会发生什么改变。这就是 Set 里面的每一个值只出现一次的原因

### 2.2 Set 迭代

Map 中用于迭代的方法在 Set 中也同样支持：

- `set.keys()` —— 遍历并返回所有的值（returns an iterable object for values）
- `set.values()` —— 与 `set.keys()` 作用相同，这是为了兼容 Map
- `set.entries()` —— 遍历并返回所有的实体（returns an iterable object for entries）`[value, value]`，它的存在也是为了兼容 Map

## 3 实例

### 3.1 leetcode 349 两个数组的交集
