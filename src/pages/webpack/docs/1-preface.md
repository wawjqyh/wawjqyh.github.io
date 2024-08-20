# webpack 简介

## 1 webpack 的由来

#### 作者：Tobias Koppers （github: @sokra）

It’s a funny story how I started with Webpack. Before getting addicted to JavaScript, I also developed in Java. I tried GWT (Google Web Toolkit) in that time. GWT is a Java-to-JavaScript Compiler, which has a great feature: code-splitting. I liked this feature and missed it in existing JavaScript tooling. I made a pull request to an existing module bundler, but it did not go through. Webpack was born.

## 2 前后端分工演变

**很久以前**

前端：

- View
- View Logic

后端：

- Router
- Render
- Data logic
- Data base

**现在**

前端：

- View
- Router
- View logic
- Render
- Data logic

后端：

- Data logic
- API
- Data base

## 3 前端框架演变

`js库 => mvc => mvvm`

js 库：

- dojo
- yui
- jQuery
- prototype
- mootools
- kissy

mvc：

- backbone.js

mvvm：

- angular
- vue
- react

## 3 工具的发展

- apache ant 将软件编译、测试、部署等步骤联系在一起加以自动化的一个工具，大多用于Java环境中的软件开发
- grunt 自动化处理任务的构建工具
- gulp 同上，配置更简单，速度更快
- webpack 模块打包器

## 4 为什么需要构建工具

- 开发复杂
- 框架去中心化
- 语言编译化
- 开发模块化
