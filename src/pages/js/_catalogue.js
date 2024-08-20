export default [
  ['JavaScript 基础知识', 'jsBasic', () => import(/* webpackChunkName: "docs/js/jsBasic" */ './docs/1-js-basic.md')],
  ['对象', 'object', () => import(/* webpackChunkName: "docs/js/object" */ './docs/2-object.md')],
  ['数据类型', 'dataType', () => import(/* webpackChunkName: "docs/js/dataType" */ './docs/3-data-type.md')],
  ['函数进阶', 'function', () => import(/* webpackChunkName: "docs/js/function" */ './docs/4-function.md')],
  ['对象属性配置', 'objectProp', () => import(/* webpackChunkName: "docs/js/objectProp" */ './docs/5-object-prop.md')],
  ['原型、继承', 'prototype', () => import(/* webpackChunkName: "docs/js/prototype" */ './docs/6-prototype.md')],
  ['类', 'class', () => import(/* webpackChunkName: "docs/js/class" */ './docs/7-class.md')],
  ['错误处理', 'error', () => import(/* webpackChunkName: "docs/js/error" */ './docs/8-error.md')],
  ['Promise', 'promise', () => import(/* webpackChunkName: "docs/js/promise" */ './docs/9-promise.md')],
  ['Generator', 'generator', () => import(/* webpackChunkName: "docs/js/generator" */ './docs/10-generator.md')],
  ['模块', 'module', () => import(/* webpackChunkName: "docs/js/module" */ './docs/11-module.md')],
  ['杂项', 'others', () => import(/* webpackChunkName: "docs/js/others" */ './docs/12-others.md')]
];
