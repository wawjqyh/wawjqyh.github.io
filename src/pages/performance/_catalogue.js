export default [
  ['资源合并与压缩', 'resource2', () => import(/* webpackChunkName: "docs/performance/resource2" */ './docs/old/1_resource.md')],
  ['图片相关的优化', 'image', () => import(/* webpackChunkName: "docs/performance/image" */ './docs/old/2_image.md')],
  ['懒加载与预加载', 'load', () => import(/* webpackChunkName: "docs/performance/load" */ './docs/old/3_load.md')],
  ['浏览器缓存', 'cache2', () => import(/* webpackChunkName: "docs/performance/cache2" */ './docs/old/4_cache.md')],
  ['css 和 js 的装载与执行', 'cssJsExec', () => import(/* webpackChunkName: "docs/performance/cssJsExec" */ './docs/old/5_cssJsExec.md')],
  ['回流与重绘', 'paint2', () => import(/* webpackChunkName: "docs/performance/paint2" */ './docs/old/6_paint.md')],
  '新整理',
  ['性能优化的指标和工具', 'target', () => import(/* webpackChunkName: "docs/performance/target" */ './docs/1-target.md')],
  ['渲染优化', 'paint', () => import(/* webpackChunkName: "docs/performance/paint" */ './docs/2-paint.md')],
  ['代码优化', 'code', () => import(/* webpackChunkName: "docs/performance/code" */ './docs/3-code.md')],
  ['资源优化', 'resource', () => import(/* webpackChunkName: "docs/performance/resource" */ './docs/4-resource.md')],
  ['构建优化', 'build', () => import(/* webpackChunkName: "docs/performance/build" */ './docs/5-build.md')],
  ['传输加载优化', 'transmission', () => import(/* webpackChunkName: "docs/performance/transmission" */ './docs/6-transmission.md')],
  ['浏览器缓存', 'cache', () => import(/* webpackChunkName: "docs/performance/cache" */ './docs/7-cache.md')],
  ['其他前沿优化', 'others', () => import(/* webpackChunkName: "docs/performance/others" */ './docs/8-others.md')]
];
