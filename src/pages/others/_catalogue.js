export default [
  ['数学公式解析', 'formula', () => import(/* webpackChunkName: "docs/others/formula" */ './docs/formula.md')],
  ['ffmpeg 命令', 'ffmpeg', () => import(/* webpackChunkName: "docs/others/ffmpeg" */ './docs/ffmpeg.md')],
  ['Electron 检查更新', 'electronUpdate', () => import(/* webpackChunkName: "docs/others/electronUpdate" */ './docs/electron-update.md')],
  ['微信授权登录', 'wechatLogin', () => import(/* webpackChunkName: "docs/others/wechatLogin" */ './docs/wechat-login.md')],
  ['多页面共用进程问题', 'process', () => import(/* webpackChunkName: "docs/others/process" */ './docs/process.md')],
  ['前端压缩图片', 'miniImage', () => import(/* webpackChunkName: "docs/others/miniImage" */ './docs/mini-image.md')],
  ['文字溢出和换行', 'ellipse', () => import(/* webpackChunkName: "docs/others/ellipse" */ './docs/ellipse.md')],
  ['gulp', 'gulp', () => import(/* webpackChunkName: "docs/others/gulp" */ './docs/gulp.md')],
  ['月份', 'month', () => import(/* webpackChunkName: "docs/others/month" */ './docs/month.md')],
  ['React 服务端渲染', 'reactSsr', () => import(/* webpackChunkName: "docs/others/reactSsr" */ './docs/react-ssr.md')],
  ['angular', 'angular', () => import(/* webpackChunkName: "docs/others/angular" */ './docs/angular.md')],
  ['react', 'react', () => import(/* webpackChunkName: "docs/others/react" */ './docs/react.md')],
  ['yapi开发文档', 'yapi', () => import(/* webpackChunkName: "docs/others/yapi" */ './docs/yapi.md')],
  ['Nuxt3 升级', 'nuxt3', () => import(/* webpackChunkName: "docs/others/nuxt3" */ './docs/nuxt3.md')],
  ['VSCode 插件开发', 'vscode', () => import(/* webpackChunkName: "docs/others/vscode" */ './docs/vscode.md')]
];
