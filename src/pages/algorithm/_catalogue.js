export default [
  ['复杂度', 'complexity', () => import(/* webpackChunkName: "docs/algorithm/complexity" */ './docs/1-complexity.md')],
  ['数组', 'array', () => import(/* webpackChunkName: "docs/algorithm/array" */ './docs/2-array.md')],
  ['链表', 'linkedList', () => import(/* webpackChunkName: "docs/algorithm/linkedList" */ './docs/3-linked-list.md')],
  ['栈', 'stack', () => import(/* webpackChunkName: "docs/algorithm/stack" */ './docs/4-stack.md')],
  ['队列', 'queue', () => import(/* webpackChunkName: "docs/algorithm/queue" */ './docs/5-queue.md')],
  ['集合', 'set', () => import(/* webpackChunkName: "docs/algorithm/set" */ './docs/6-set.md')],
  ['字典', 'map', () => import(/* webpackChunkName: "docs/algorithm/map" */ './docs/7-map.md')],
  ['树', 'tree', () => import(/* webpackChunkName: "docs/algorithm/tree" */ './docs/8-tree.md')],
  ['图', 'graph', () => import(/* webpackChunkName: "docs/algorithm/graph" */ './docs/9-graph.md')],
  ['堆', 'heap', () => import(/* webpackChunkName: "docs/algorithm/heap" */ './docs/10-heap.md')],
  ['排序', 'sort', () => import(/* webpackChunkName: "docs/algorithm/sort" */ './docs/11-sort.md')],
  ['贪心算法', 'greedyAlgorithm', () => import(/* webpackChunkName: "docs/algorithm/greedyAlgorithm" */ './docs/12-greedy-algorithm.md')],
  ['分而治之', 'divideAndConquer', () => import(/* webpackChunkName: "docs/algorithm/divideAndConquer" */ './docs/13-divide-and-conquer.md')],
  ['回溯算法', 'backtrackinAlgorithm', () => import(/* webpackChunkName: "docs/algorithm/backtrackinAlgorithm" */ './docs/14-backtracking-algorithm.md')],
  ['动态规划', 'dynamicProgramming', () => import(/* webpackChunkName: "docs/algorithm/dynamicProgramming" */ './docs/15-dynamic-programming.md')],
  ['复习', 'summary', () => import(/* webpackChunkName: "docs/algorithm/summary" */ './docs/16-summary.md')]
];
