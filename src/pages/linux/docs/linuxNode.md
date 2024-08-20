# linux 搭建 node.js 环境

## yum 安装

### 1 安装 epel

EPEL 是 yum 的一个软件源，里面包含了许多基本源里没有的软件

```
sudo yum install epel-release
```

### 2 安装 node

```
sudo yum install nodejs
```

## nvm 安装

nvm 是一个可以让你在同一台机器上安装和切换不同版本 node 的工具

### 1 安装 nvm

下载脚本安装文件会自动安装

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

### 2 安装 node

```javascript
nvm install v8.9.4  // 安装8.9.4这个版本

nvm ls-remote       // 列出全部可以安装的版本号

nvm use v8.0.0      // 切换指定版本

nvm current         // 查看当前使用的版本

nvm ls              // 查看已安装的版本
```
