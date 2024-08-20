export default [
  ['Number', 'Number', () => import(/* webpackChunkName: "docs/Number/Number" */ './docs/Number.md')],

  '属性',
  ['Number.EPSILON [es6]', 'EPSILON', () => import(/* webpackChunkName: "docs/Number/EPSILON" */ './docs/EPSILON.md')],
  ['Number.MAX_SAFE_INTEGER [es6]', 'MAX_SAFE_INTEGER', () => import(/* webpackChunkName: "docs/Number/MAX_SAFE_INTEGER" */ './docs/MAX_SAFE_INTEGER.md')],
  ['Number.MAX_VALUE', 'MAX_VALUE', () => import(/* webpackChunkName: "docs/Number/MAX_VALUE" */ './docs/MAX_VALUE.md')],
  ['Number.MIN_VALUE', 'MIN_VALUE', () => import(/* webpackChunkName: "docs/Number/MIN_VALUE" */ './docs/MIN_VALUE.md')],
  ['Number.NaN', 'NaN', () => import(/* webpackChunkName: "docs/Number/NaN" */ './docs/NaN.md')],
  ['Number.NEGATIVE_INFINITY', 'NEGATIVE_INFINITY', () => import(/* webpackChunkName: "docs/Number/NEGATIVE_INFINITY" */ './docs/NEGATIVE_INFINITY.md')],
  ['Number.POSITIVE_INFINITY', 'POSITIVE_INFINITY', () => import(/* webpackChunkName: "docs/Number/POSITIVE_INFINITY" */ './docs/POSITIVE_INFINITY.md')],
  ['Number.prototype', 'prototype', () => import(/* webpackChunkName: "docs/Number/prototype" */ './docs/prototype.md')],

  '方法',
  ['Number.isNaN() [es6]', 'isNaN', () => import(/* webpackChunkName: "docs/Number/isNaN" */ './docs/isNaN.md')],
  ['Number.isFinite() [es6]', 'isFinite', () => import(/* webpackChunkName: "docs/Number/isFinite" */ './docs/isFinite.md')],
  ['Number.isInteger() [es6]', 'isInteger', () => import(/* webpackChunkName: "docs/Number/isInteger" */ './docs/isInteger.md')],
  ['Number.isSafeInteger() [es6]', 'isSafeInteger', () => import(/* webpackChunkName: "docs/Number/isSafeInteger" */ './docs/isSafeInteger.md')],
  ['Number.parseFloat() [es6]', 'parseFloat', () => import(/* webpackChunkName: "docs/Number/parseFloat" */ './docs/parseFloat.md')],
  ['Number.parseInt() [es6]', 'parseInt', () => import(/* webpackChunkName: "docs/Number/parseInt" */ './docs/parseInt.md')],
  ['Number.toInteger() [已废弃]', 'toInteger', () => import(/* webpackChunkName: "docs/Number/toInteger" */ './docs/toInteger.md')],

  '实例方法',
  ['toExponential()', 'toExponential', () => import(/* webpackChunkName: "docs/Number/toExponential" */ './docs/toExponential.md')],
  ['toFixed()', 'toFixed', () => import(/* webpackChunkName: "docs/Number/toFixed" */ './docs/toFixed.md')],
  ['toLocaleString()', 'toLocaleString', () => import(/* webpackChunkName: "docs/Number/toLocaleString" */ './docs/toLocaleString.md')],
  ['toPrecision()', 'toPrecision', () => import(/* webpackChunkName: "docs/Number/toPrecision" */ './docs/toPrecision.md')],
  ['toString()', 'toString', () => import(/* webpackChunkName: "docs/Number/toString" */ './docs/toString.md')],
  ['valueOf()', 'valueOf', () => import(/* webpackChunkName: "docs/Number/valueOf" */ './docs/valueOf.md')],
  ['toSource() [非标准]', 'toSource', () => import(/* webpackChunkName: "docs/Number/toSource" */ './docs/toSource.md')]
];
