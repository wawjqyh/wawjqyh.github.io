export default [
  ['跨站脚本攻击 XSS', 'xss', () => import(/* webpackChunkName: "docs/loophole/xss" */ './docs/xss.md')],
  ['跨站请求伪造 CSRF', 'csrf', () => import(/* webpackChunkName: "docs/loophole/csrf" */ './docs/csrf.md')],
  ['Cookies 问题', 'cookies', () => import(/* webpackChunkName: "docs/loophole/cookies" */ './docs/cookies.md')],
  ['点击劫持', 'clickHijack', () => import(/* webpackChunkName: "docs/loophole/clickHijack" */ './docs/clickHijack.md')],
  ['传输安全', 'http', () => import(/* webpackChunkName: "docs/loophole/http" */ './docs/http.md')],
  ['密码安全', 'password', () => import(/* webpackChunkName: "docs/loophole/password" */ './docs/password.md')]
];
