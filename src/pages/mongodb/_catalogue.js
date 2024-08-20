export default [
  ['1 安装和启动配置', 'install', () => import(/* webpackChunkName: "docs/mongodb/install" */ './docs/1_install.md')],
  ['2 创建账号', 'account', () => import(/* webpackChunkName: "docs/mongodb/account" */ './docs/2_account.md')]
];
