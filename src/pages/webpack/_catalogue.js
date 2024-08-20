export default [
  ['简介', 'preface', () => import(/* webpackChunkName: "docs/webpack/preface" */ './docs/1-preface.md')],
  ['模块化', 'modulesDesc', () => import(/* webpackChunkName: "docs/webpack/modulesDesc" */ './docs/2-modulesDesc.md')],
  ['版本历史', 'synopsis', () => import(/* webpackChunkName: "docs/webpack/synopsis" */ './docs/3-synopsis.md')],
  ['entry output', 'entryOutputBase', () => import(/* webpackChunkName: "docs/webpack/entryOutputBase" */ './docs/4-entry-output-base.md')],
  ['插件', 'pluginBase', () => import(/* webpackChunkName: "docs/webpack/pluginBase" */ './docs/5-plugin-base.md')],
  ['sourcemap', 'sourcemap', () => import(/* webpackChunkName: "docs/webpack/sourcemap" */ './docs/6-sourcemap.md')],
  ['dev server', 'devServer', () => import(/* webpackChunkName: "docs/webpack/devServer" */ './docs/7-dev-server.md')],
  ['babel', 'babel', () => import(/* webpackChunkName: "docs/webpack/babel" */ './docs/8-babel.md')],
  ['css', 'css', () => import(/* webpackChunkName: "docs/webpack/css" */ './docs/9-css.md')],
  ['tree shaking', 'treeShaking', () => import(/* webpackChunkName: "docs/webpack/treeShaking" */ './docs/10-tree-shaking.md')],
  ['代码分割', 'codeSplitting', () => import(/* webpackChunkName: "docs/webpack/codeSplitting" */ './docs/11-code-splitting.md')],
  ['打包分析', 'analysis', () => import(/* webpackChunkName: "docs/webpack/analysis" */ './docs/12-analysis.md')],
  ['打包 library', 'library', () => import(/* webpackChunkName: "docs/webpack/library" */ './docs/13-library.md')],
  ['编写 loader', 'loader', () => import(/* webpackChunkName: "docs/webpack/loader" */ './docs/14-loader.md')],
  ['编写 plugin', 'plugin', () => import(/* webpackChunkName: "docs/webpack/plugin" */ './docs/15-plugin.md')]
];
