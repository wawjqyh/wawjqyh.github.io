# subtree

git subtree 可以实现一个仓库作为其他仓库的子仓库。

## 命令

git subtree 的主要命令有：

```bash
# 克隆子仓库到当前项目的某个目录
git subtree add   --prefix=<目录> <仓库地址> <分支> <参数>

# 拉取子仓库
git subtree pull  --prefix=<目录> <仓库地址> <分支> <参数>

# 将当前项目的一个目录推送到子仓库
git subtree push  --prefix=<目录> <仓库地址> <分支> <参数>

# 合并某次提交
git subtree merge --prefix=<目录> <commit id>

git subtree split --prefix=<目录> [OPTIONS] [<commit>]
```

## 公共子仓库

常用的使用场景，例如有一个项目 main，main 使用到了一个公共的项目 common。common 项目有多个项目依赖，需要单独维护，并且有一个仓库存放 common 项目。

main 项目结构如下：

```
.
├── main.js
└── common
    └── utils.js
```

现在使用 subtree 管理 main 项目，也就是说 main 项目包含了两个仓库。

### 添加子仓库

将 common 项目的 master 分支（获取其他分支）克隆到 main 项目的 common 目录下。注意 common 目录克隆前是不存在的，否则会无法添加子仓库。

```bash
git subtree add --prefix=common https://github.com/xxx/common.git master --squash
# --squash参数表示不拉取历史信息，而只生成一条commit信息
```

### 拉取/推送

可以拉取和推送任意分支

```bash
# 拉取
git subtree pull --prefix=common https://github.com/xxx/common.git master --squash

# 推送
git subtree push --prefix=common https://github.com/xxx/common.git master --squash
```

### merge

```bash
# merge 前先 fetch
git fetch origin-common

# 只能 merge 某次提交
git subtree merge --prefix=common 8915506648798dfcda2207c2d023315628327be2
```

## 简化命令

上面输命令的时候每次都需要输子仓库的地址，其实子仓库的地址可以作为一个 remote，在使用前先添加一个 remote

```bash
git remote add origin-common https://github.com/xxx/common.git
```

命令可以简化为：

```bash
git subtree add --prefix=common origin-common master --squash
```

## gh-pages

还有另外一种使用 subtree 的场景，就是将当前项目的一个目录提交到远程的另一个分支。比如 github 项目主页，需要有一个 gh-pages 分支，而 gh-pages 分支一般是存放编译后的文件，所以需要将项目编译的文件单独提交到 gh-pages 分支

例如项目结构如下：

```
.
├── src
├── dist
└── main.js
```

需要将 dist 目录下的文件提交到 gh-pages 分支下，就可以用 subtree

```bash
# origin 是当前项目的仓库
git subtree push --prefix=common origin gh-pages
```
