export default [
  ['Boolean', 'Boolean', () => import(/* webpackChunkName: "docs/Boolean/Boolean" */ './docs/Boolean.md')],

  '属性',
  ['Boolean.prototype', 'prototype', () => import(/* webpackChunkName: "docs/Boolean/prototype" */ './docs/prototype.md')],

  '方法',
  ['Boolean.prototype.toSource() [非标准]', 'toSource', () => import(/* webpackChunkName: "docs/Boolean/toSource" */ './docs/toSource.md')],
  ['Boolean.prototype.toString()', 'toString', () => import(/* webpackChunkName: "docs/Boolean/toString" */ './docs/toString.md')],
  ['Boolean.prototype.valueOf()', 'valueOf', () => import(/* webpackChunkName: "docs/Boolean/valueOf" */ './docs/valueOf.md')]
];
