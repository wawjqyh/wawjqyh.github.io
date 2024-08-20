# 搭建本地开发环境

使用 `webpack-dev-server` 创建本地服务

功能：

- live reloading 代码发生改变时自动编译并且刷新浏览器
- 不会生成打包文件，文件存在内存中
- 路径重定向
- 支持 https
- 浏览器中显示编译错误
- 接口代理
- 模块热更新-不刷新浏览器更新代码

配置：

- `contentBase` 提供内容的路径，即项目打包后的根目录
- `port` 端口
- `historyApiFallback` 使用 html5 history 时需要配置这个参数，不配置会显示 404
- `https` 本地会自动生成证书，或者自己指定
- `proxy` 代理
- `hot` 模块热更新
- `openpage` 初始页面
- `lazy` 访问到的内容才会编译（多页面应用比较有用）
- `overlay` 遮罩，显示错误信息
