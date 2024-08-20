export default [
  ['eval()', 'eval', () => import(/* webpackChunkName: "docs/functionProperty/eval" */ './docs/eval.md')],
  ['uneval() [非标准]', 'uneval', () => import(/* webpackChunkName: "docs/functionProperty/uneval" */ './docs/uneval.md')],
  ['isFinite()', 'isFinite', () => import(/* webpackChunkName: "docs/functionProperty/isFinite" */ './docs/isFinite.md')],
  ['isNaN()', 'isNaN', () => import(/* webpackChunkName: "docs/functionProperty/isNaN" */ './docs/isNaN.md')],
  ['parseFloat()', 'parseFloat', () => import(/* webpackChunkName: "docs/functionProperty/parseFloat" */ './docs/parseFloat.md')],
  ['parseInt()', 'parseInt', () => import(/* webpackChunkName: "docs/functionProperty/parseInt" */ './docs/parseInt.md')],
  ['encodeURI()', 'encodeURI', () => import(/* webpackChunkName: "docs/functionProperty/encodeURI" */ './docs/encodeURI.md')],
  ['decodeURI()', 'decodeURI', () => import(/* webpackChunkName: "docs/functionProperty/decodeURI" */ './docs/decodeURI.md')],
  ['encodeURIComponent()', 'encodeURIComponent', () => import(/* webpackChunkName: "docs/functionProperty/encodeURIComponent" */ './docs/encodeURIComponent.md')],
  ['decodeURIComponent()', 'decodeURIComponent', () => import(/* webpackChunkName: "docs/functionProperty/decodeURIComponent" */ './docs/decodeURIComponent.md')],
  ['escape() [已丢弃]', 'escape', () => import(/* webpackChunkName: "docs/functionProperty/escape" */ './docs/escape.md')],
  ['unescape() [已丢弃]', 'unescape', () => import(/* webpackChunkName: "docs/functionProperty/unescape" */ './docs/unescape.md')]
];
