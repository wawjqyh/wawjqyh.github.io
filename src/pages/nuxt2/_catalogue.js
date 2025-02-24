export default [
  ['前言', '0-intro', () => import(/* webpackChunkName: "docs/nuxt2/0-intro" */ './docs/0-intro.md')],
  '概念',
  ['View', '1-1-view', () => import(/* webpackChunkName: "docs/nuxt2/1-1-view" */ './docs/1-1-view.md')],
  ['context 和 helper', '1-2-context', () => import(/* webpackChunkName: "docs/nuxt2/1-2-context" */ './docs/1-2-context.md')],
  '特性',
  ['渲染', '2-1-rendering', () => import(/* webpackChunkName: "docs/nuxt2/2-1-rendering" */ './docs/2-1-rendering.md')],
];
