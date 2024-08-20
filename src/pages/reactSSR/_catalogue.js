export default [
  ['前言', 'about', () => import(/* webpackChunkName: "docs/reactSSR/about" */ './docs/1_about.md')],
  ['SSR 与 CSR 实例', 'aboutWidthCode', () => import(/* webpackChunkName: "docs/reactSSR/aboutWidthCode" */ './docs/2_aboutWidthCode.md')],
  ['简单的 react 服务端渲染', 'base', () => import(/* webpackChunkName: "docs/reactSSR/base" */ './docs/3_base.md')],
  ['同构', 'isomorphism', () => import(/* webpackChunkName: "docs/reactSSR/isomorphism" */ './docs/4_isomorphism.md')],
  ['在 SSR 中使用路由', 'router', () => import(/* webpackChunkName: "docs/reactSSR/router" */ './docs/5_router.md')],
  ['在 SSR 中使用 redux', 'redux', () => import(/* webpackChunkName: "docs/reactSSR/redux" */ './docs/6_redux.md')],
  ['注水和脱水', 'water', () => import(/* webpackChunkName: "docs/reactSSR/water" */ './docs/7_water.md')],
  ['总结', 'summary', () => import(/* webpackChunkName: "docs/reactSSR/summary" */ './docs/8_summary.md')]
];
