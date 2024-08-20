export default [
  ['js面向对象', 'objectOriented', () => import(/* webpackChunkName: "docs/designPattern/objectOriented" */ './docs/1-objectOriented.md')],
  ['UML 类图', 'uml', () => import(/* webpackChunkName: "docs/designPattern/uml" */ './docs/2-uml.md')],
  ['设计原则', 'principles', () => import(/* webpackChunkName: "docs/designPattern/principles" */ './docs/3-principles.md')],
  ['工厂模式', 'factory', () => import(/* webpackChunkName: "docs/designPattern/factory" */ './docs/4-factory.md')],
  ['单例模式', 'singleton', () => import(/* webpackChunkName: "docs/designPattern/singleton" */ './docs/5-singleton.md')],
  ['适配器模式', 'adapter', () => import(/* webpackChunkName: "docs/designPattern/adapter" */ './docs/6-adapter.md')],
  ['装饰器模式', 'decorator', () => import(/* webpackChunkName: "docs/designPattern/decorator" */ './docs/7-decorator.md')],
  ['代理模式', 'proxy', () => import(/* webpackChunkName: "docs/designPattern/proxy" */ './docs/8-proxy.md')],
  ['外观模式', 'facade', () => import(/* webpackChunkName: "docs/designPattern/facade" */ './docs/9-facade.md')],
  ['观察者模式', 'observer', () => import(/* webpackChunkName: "docs/designPattern/observer" */ './docs/10-observer.md')],
  ['迭代器模式', 'iterator', () => import(/* webpackChunkName: "docs/designPattern/iterator" */ './docs/11-iterator.md')],
  ['状态模式', 'state', () => import(/* webpackChunkName: "docs/designPattern/state" */ './docs/12-state.md')]
];
