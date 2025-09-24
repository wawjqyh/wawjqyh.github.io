export default [
  ['资源', 'resource', () => import(/* webpackChunkName: "docs/vue/resource" */ './docs/resource.md')],
  'vue',
  ['vue3 学习', 'vue3', () => import(/* webpackChunkName: "docs/vue/vue3" */ './docs/vue3.md')],
  ['vue3 迁移', 'vue3-migration', () => import(/* webpackChunkName: "docs/vue/vue3-migration" */ './docs/vue3-migration.md')],
  '其他',
  ['VueUse', 'vueuse', () => import(/* webpackChunkName: "docs/vue/vueuse" */ './docs/vueuse.md')],
];
