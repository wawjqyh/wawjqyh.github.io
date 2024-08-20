export default [
  ['Getting started - 入门', 'getting-started', () => import(/* webpackChunkName: "docs/sequelize/getting-started" */ './docs/getting-started.md')],
  ['Model definition - 模型定义', 'models-definition', () => import(/* webpackChunkName: "docs/sequelize/models-definition" */ './docs/models-definition.md')],
  ['Model usage - 模型使用', 'models-usage', () => import(/* webpackChunkName: "docs/sequelize/models-usage" */ './docs/models-usage.md')],
  ['Querying - 查询', 'querying', () => import(/* webpackChunkName: "docs/sequelize/querying" */ './docs/querying.md')],
  ['Instances - 实例', 'instances', () => import(/* webpackChunkName: "docs/sequelize/instances" */ './docs/instances.md')],
  ['Associations - 关联', 'associations', () => import(/* webpackChunkName: "docs/sequelize/associations" */ './docs/associations.md')],
  ['Transactions - 事务', 'transactions', () => import(/* webpackChunkName: "docs/sequelize/transactions" */ './docs/transactions.md')],
  ['Scopes - 作用域', 'scopes', () => import(/* webpackChunkName: "docs/sequelize/scopes" */ './docs/scopes.md')],
  ['Hooks - 钩子', 'hooks', () => import(/* webpackChunkName: "docs/sequelize/hooks" */ './docs/hooks.md')],
  ['Raw queries - 原始查询', 'raw-queries', () => import(/* webpackChunkName: "docs/sequelize/raw-queries" */ './docs/raw-queries.md')],
  ['Migrations - 迁移', 'migrations', () => import(/* webpackChunkName: "docs/sequelize/migrations" */ './docs/migrations.md')],
  ['Upgrade to V4 - 升级到 V4', 'upgrade-to-v4', () => import(/* webpackChunkName: "docs/sequelize/upgrade-to-v4" */ './docs/upgrade-to-v4.md')],
  ['legacy tables - 使用遗留表', 'legacy', () => import(/* webpackChunkName: "docs/sequelize/legacy" */ './docs/legacy.md')]
];
