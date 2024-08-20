export default [
  ['创建一个正则表达式', 'create', () => import(/* webpackChunkName: "docs/RegExp/create" */ './docs/1-create.md')],
  ['元字符', 'metacharacter', () => import(/* webpackChunkName: "docs/RegExp/metacharacter" */ './docs/2-metacharacter.md')],
  ['匹配类', 'class', () => import(/* webpackChunkName: "docs/RegExp/class" */ './docs/3-class.md')],
  ['量词', 'classifier', () => import(/* webpackChunkName: "docs/RegExp/classifier" */ './docs/4-classifier.md')],
  ['分组', 'group', () => import(/* webpackChunkName: "docs/RegExp/group" */ './docs/5-group.md')],
  ['前瞻(额外条件)', 'assertion', () => import(/* webpackChunkName: "docs/RegExp/assertion" */ './docs/6-assertion.md')],
  ['字符串对象方法', 'string', () => import(/* webpackChunkName: "docs/RegExp/string" */ './docs/7-string.md')],
  ['参考', 'RegExp', () => import(/* webpackChunkName: "docs/RegExp/RegExp" */ './docs/8-RegExp.md')]
];
