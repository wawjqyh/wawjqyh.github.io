export default [
  ['SVG', 'svg', () => import(/* webpackChunkName: "docs/svg/svg" */ './docs/1-svg.md')],
  ['SVG 入门', 'getting-start', () => import(/* webpackChunkName: "docs/svg/getting-start" */ './docs/2-getting-start.md')],
  ['坐标定位', 'positions', () => import(/* webpackChunkName: "docs/svg/positions" */ './docs/3-positions.md')],
  ['基本形状', 'basic-shapes', () => import(/* webpackChunkName: "docs/svg/basic-shapes" */ './docs/4-basic-shapes.md')],
  ['路径', 'path', () => import(/* webpackChunkName: "docs/svg/path" */ './docs/5-path.md')],
];
