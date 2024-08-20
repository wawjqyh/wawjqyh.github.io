export default [
  ['Git 命令', 'gitList', () => import(/* webpackChunkName: "docs/git/gitList" */ './docs/git.md')],
  ['commit', 'commit', () => import(/* webpackChunkName: "docs/git/commit" */ './docs/commit.md')],
  [
    'subtree',
    'subtree',
    () => import(/* webpackChunkName: "docs/git/subtree" */ './docs/subtree.md')
  ],
  [
    'upsteam',
    'upsteam',
    () => import(/* webpackChunkName: "docs/git/upsteam" */ './docs/upsteam.md')
  ]
];
