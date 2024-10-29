export default [
  ['浏览器工作原理', 'browser', () => import(/* webpackChunkName: "docs/browser/browser" */ './docs/0-browser.md')],
  ['Document', 'document', () => import(/* webpackChunkName: "docs/browser/document" */ './docs/1-document.md')],
  ['事件', 'event', () => import(/* webpackChunkName: "docs/browser/event" */ './docs/2-event.md')],
  ['UI 事件', 'uiEvent', () => import(/* webpackChunkName: "docs/browser/uiEvent" */ './docs/3-ui-event.md')],
  ['表单', 'form', () => import(/* webpackChunkName: "docs/browser/form" */ './docs/4-form.md')],
  ['加载文档和资源', 'load', () => import(/* webpackChunkName: "docs/browser/load" */ './docs/5-load.md')],
  ['杂项', 'others', () => import(/* webpackChunkName: "docs/browser/others" */ './docs/6-others.md')],
  ['Frame 和 window', 'frameWindow', () => import(/* webpackChunkName: "docs/browser/frameWindow" */ './docs/7-frame-window.md')],
  ['二进制数据和文件', 'file', () => import(/* webpackChunkName: "docs/browser/file" */ './docs/8-file.md')],
  ['网络请求', 'network', () => import(/* webpackChunkName: "docs/browser/network" */ './docs/9-network.md')],
  ['数据存储', 'data', () => import(/* webpackChunkName: "docs/browser/data" */ './docs/10-data.md')],
  ['web components', 'components', () => import(/* webpackChunkName: "docs/browser/components" */ './docs/11-web-components.md')]
];
