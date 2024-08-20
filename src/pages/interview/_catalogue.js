export default [
  ['CSS', 'css', () => import(/* webpackChunkName: "docs/interview/css" */ './docs/1-css.md')],
  ['JavaScript', 'javascript', () => import(/* webpackChunkName: "docs/interview/javascript" */ './docs/2-js.md')],
  ['浏览器相关', 'browser', () => import(/* webpackChunkName: "docs/interview/browser" */ './docs/3-browser.md')],
  ['计算机网络', 'network', () => import(/* webpackChunkName: "docs/interview/network" */ './docs/4-network.md')],
  ['性能优化', 'performance', () => import(/* webpackChunkName: "docs/interview/performance" */ './docs/5-performance.md')],
  ['工程化', 'webpack', () => import(/* webpackChunkName: "docs/interview/webpack" */ './docs/6-webpack.md')],
  ['算法', 'algorithm', () => import(/* webpackChunkName: "docs/interview/algorithm" */ './docs/7-algorithm.md')],
  ['框架相关', 'framework', () => import(/* webpackChunkName: "docs/interview/framework" */ './docs/8-framework.md')],
  ['前端漏洞', 'loophole', () => import(/* webpackChunkName: "docs/interview/loophole" */ './docs/9-loophole.md')],
  ['操作系统', 'os', () => import(/* webpackChunkName: "docs/interview/os" */ './docs/10-os.md')],
  ['Node', 'node', () => import(/* webpackChunkName: "docs/interview/node" */ './docs/11-node.md')],
  ['设计和架构', 'design', () => import(/* webpackChunkName: "docs/interview/design" */ './docs/12-design.md')]
  // ['面试题', 'questions', () => import(/* webpackChunkName: "docs/interview/questions" */ './docs/13-questions.md')],
  // ['项目', 'project', () => import(/* webpackChunkName: "docs/interview/questions" */ './docs/14-project.md')],
  // ['面试问答', 'interview', () => import(/* webpackChunkName: "docs/interview/interview" */ './docs/15-interview.md')]
];
