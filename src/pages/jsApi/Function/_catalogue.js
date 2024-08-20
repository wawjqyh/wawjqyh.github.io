export default [
  ['Function', 'Function', () => import(/* webpackChunkName: "docs/Function/Boolean" */ './docs/Function.md')],

  '属性',
  ['Function.length', 'length', () => import(/* webpackChunkName: "docs/Function/length" */ './docs/length.md')],
  ['Function.prototype.constructor', '', ''],
  ['Function.arguments [已废弃]', '', ''],
  ['Function.arity [已删除]', '', ''],
  ['Function.caller [非标准]', '', ''],
  ['Function.name [非标准]', '', () => ''],
  ['Function.displayName [非标准]', '', ''],

  '方法',
  ['Function.prototype.call()', 'call', () => import(/* webpackChunkName: "docs/Function/call" */ './docs/call.md')],
  ['Function.prototype.apply()', 'apply', () => import(/* webpackChunkName: "docs/Function/apply" */ './docs/apply.md')],
  ['Function.prototype.bind()', 'bind', () => import(/* webpackChunkName: "docs/Function/bind" */ './docs/bind.md')],
  ['Function.prototype.toString()', 'toString', () => import(/* webpackChunkName: "docs/Function/toString" */ './docs/toString.md')],
  ['Function.prototype.isGenerator() [非标准]', '', ''],
  ['Function.prototype.toSource() [非标准]', '', '']
];
