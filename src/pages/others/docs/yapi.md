# yapi 开发文档

参照官方文档：(https://hellosean1025.github.io/yapi/documents/redev.html)[https://hellosean1025.github.io/yapi/documents/redev.html]

## 1 mongodb

快速安装参考这里 (https://www.runoob.com/mongodb/mongodb-osx-install.html)[https://www.runoob.com/mongodb/mongodb-osx-install.html]

建如下目录：

- data 数据库存储目录
- logs 日志文件存储目录
- mongo.conf 启动的配置文件

在 mongo.conf 中做如下配置：

```bash
# 数据库路径
dbpath=/Users/chiu/work/mongodb/data/

# 日志文件路径
logpath=/Users/chiu/work/mongodb/logs/mongo.log

# 日志是否用追加模式，true 追加到现有文件，false 新建文件
logappend=true

# 是否启用日志文件，默认启用
journal=true

# 这个选项可以过滤掉一些无用的日志信息
quiet=true

# 端口号，默认为27017
port=27017
```

指定 mongo.conf 为配置文件，启动数据库

```bash
/Users/chiu/work/mongodb/mongodb/bin/mongod --config /Users/chiu/work/mongodb/mongo.conf --auth

# --config 指定配置文件
# --auth 开启认证 (需要使用账号密码)
```

另外可以使用官方提供的 GUI 工具 MongoDB Compass，下载地址 [https://www.mongodb.com/download-center/compass](https://www.mongodb.com/download-center/compass)

## 2 目录结构

```
|-- config.json
|-- init.lock
|-- log
|-- vendors
    |-- CHANGELOG.md
    |-- LICENSE
    |-- README.md
    |-- client // 前端目录
    |-- common // 公共配置，工具类
    |-- config_example.json
    |-- doc // 项目文档
    |-- exts // 内置插件
    |-- nodemon.json
    |-- npm-debug.log
    |-- package.json
    |-- plugin.json
    |-- server // 后端目录
    |-- static
    |-- test
    |-- webpack.alias.js
    |-- yapi-base-flow.jpg
    |-- ydocfile.js
    `-- ykit.config.js
```

需要注意的是项目拉取下来需要放在 vendors 下面，config.json 这个配置文件在项目的根目录，log 为项目生成的日志

## 3 文档

文档用的是去哪儿团队开发的 ydoc

相关目录和配置文件：

- `docs`
- `ydoc.js` 配置文件
- `ydocfile.js` 配置文件

官方文档：

(https://hellosean1025.github.io/ydoc/documents/index.html)[https://hellosean1025.github.io/ydoc/documents/index.html]

## 4 插件

在了解打包配置之前，先了解下插件的结构，打包配置涉及插件的打包

官方文档：

(https://hellosean1025.github.io/yapi/documents/plugin-dev.html)[https://hellosean1025.github.io/yapi/documents/plugin-dev.html]

- `exts` 内部插件目录
- `common/config.js` 内部插件配置文件
- `node_modules/yapi-plugin-xxx` 外部插件目录
- `config.json` 外部插件配置文件

## 5 前端打包

前端打包工具使用的是去哪儿团队开发的 ykit

YKit 是一个基于 Webpack 的打包工具，它利用插件机制封装了各种 JavaScript 应用的配置

官方文档：

(https://github.com/YMFE/ykit)[https://github.com/YMFE/ykit]

配置文件为根目录下的 `ykit.config.js`

**配置文件选项：**

- plugins - 插件是对一类配置和功能的封装，通过安装插件可以快速搭建开发环境
- config.exports - 资源入口
- config.modifyWebpackConfig - 用来更改 Webpack 现有配置的函数
- hooks - 打包过程钩子
- commands - 自定义命令

配置文件中 `initPlugins` 为整理插件的配置，将内部插件和外部插件整理在一起，在 `client` 目录下输出一个配置文件 `plugin-module.js`

配置文件格式：

```javascript
module.exports = {
  'import-postman': {
    module: require('exts/yapi-plugin-import-postman/client.js'),
    options: null
  }
};
```

## 6 前端

前端技术栈为：

- `react` v16.3.0
- `redux` v3.7.1
- `react-router-dom` v4.1.1
- `antd` v3.2.2

### 6.1 目录结构

```
|-- components // 组件
|-- constants // 集中定义常量
|-- containers // 页面
|-- font
|-- images
|-- reducer
|-- styles
|-- Application.js // 项目入口文件，路由配置
|-- common.js // 公共工具方法
|-- index.js // 入口文件
|-- plugin-module.js // 打包工具生成的插件配置文件
|-- plugin.js // 插件相关方法
```

### 6.2 plugin

`plugin.js` 定义了前端插件的 hooks

- `third_login` 第三方登录，可参考 yapi-plugin-qsso 插件
- `import_data` 导入数据，可参考 vendors/exts/yapi-plugin-import-swagger 插件
- `export_data` 导出数据
- `interface_tab` 接口页面 tab 钩子，可参考 vendors/exts/yapi-plugin-advanced-mock，预览/编辑/运行
- `before_request` 在运行页面或单个测试也里每次发送请求前调用，可以用插件针对某个接口的请求头或者数据进行修改或者记录
- `after_request` 在运行页面或单个测试也里每次发送完成后调用
- `before_col_request` 在测试集里运行每次发送请求前调用
- `after_col_request` 在测试集里运行每次发送请求后调用
- `header_menu` header 下拉菜单 menu 钩子，可参考 vendors/exts/yapi-plugin-statistics，个人中心/我的关注/用户管理/退出
- `app_route` Route 路由列表钩子
- `add_reducer` 添加 reducer
- `sub_nav` 添加 subnav 钩子
- `sub_setting_nav` 添加项目设置 nav

`bindHook()` 绑定插件中定义的钩子

`emitHook()` 在业务逻辑中触发钩子

### 6.3 reducer

项目 model 全部为全局 model，集中在 reducer 目录下面。

modules 为各个模块的 model，需要注意的是模块相关调用接口的方法都放在当前文件内。

例如 `user.js`

```javascript
export function loginActions(data) {
  return {
    type: LOGIN,
    payload: axios.post('/api/user/login', data)
  };
}
```

`messageMiddleware.js` 中间件集中处理 ajax 的错误，并弹出错误提示

## 7 后端

后端技术栈为：

- `koa` v2.0.0
- `mongoose` v5.7.5
- `websocket`

### 7.1 目录结构

- `controllers`
- `middleware`
- `models`
- `utils`
- `app.js`
- `install.js`
- `plugin.js`
- `router.js`
- `websocket.js`
- `yapi.js`

### 7.2 install

`npm run install-server` 运行的就是 `install.js`，安装程序会初始化数据库索引和管理员账号，管理员账号名可在 config.json 配置

运行完成后会在根目录下生成 `init.lock` 文件

### 7.3 app

后端入口文件，`npm run start` 执行 `app.js` 启动后端服务

`app.js` 用于启动时的初始化工作，和一些基本配置。如：路由、缓存、静态文件

### 7.4 plugin

`plugin.js` 定义了后端插件的 hooks

- `third_login` 第三方 sso 登录钩子，暂只支持设置一个
- `interface_add` 客户端增加接口成功后触发
- `interface_del` 客户端删除接口成功后触发
- `interface_update` 客户端更新接口成功后触发
- `interface_list` 客户端获取接口数据列表
- `interface_get` 客户端获取一条接口信息触发
- `project_add` 客户端增加一个新项目
- `project_up` 客户端更新一个新项目
- `project_get` 客户端获取一个项目
- `project_del` 客户端删除删除一个项目
- `export_markdown` 导出 markdown 数据
- `mock_after` MockServer 生成 mock 数据后触发
- `add_router` 增加路由的钩子
- `add_ws_router` 增加 websocket 路由的钩子
- `import_data` 导入数据

### 7.5 router

`router.js` 文件用于统一所有路由规则

**如何定义 router**

在 `INTERFACE_CONFIG` 中定义所属资源的配置，如：

```javascript
let INTERFACE_CONFIG = {
  user: {
    prefix: '/user/',
    controller: userController
  }
};
```

再到 `routerConfig` 定义路由：

```javascript
let routerConfig = {
  user: [
    {
      action: 'login', // controller
      path: 'login',
      method: 'post'
    }
  ]
};
```

### 7.5 controller

controller 通过类的方式编写，类里面方法可以作为一个 Controller 在 Router 中引用到

controller 类需要继承 baseController (controller/base.js)

在 constructor 中使用 `yapi.getInst` 获取 controller 中需要用到的 Model 实例

```javascript
class userController extends baseController {
  constructor(ctx) {
    super(ctx);
    this.Model = yapi.getInst(userModel);
  }

  async login(ctx) {
    // ...
  }
}
```

### 7.6 Model

model 也是通过类的方式编写，所有的 model 都需要继承 baseModel, 且需要 getSchema 和 getName 方法

getName 定义集合名，getSchema 定义集合的数据结构，类里面的方法可以对当前集合进行操作，CDRD 等

项目中的数据集合 (数据表)

- `avatar` 用户头像
- `interface` 接口
- `interfaceCase` 测试用例
- `interfaceCat` 接口分类
- `interfaceCol` 测试集合
- `log` 操作记录
- `project` 项目
- `user` 用户

数据库管理员账号 admin 123456

yapi 管理员账号: admin@admin.com 密码: ymfe.org
