# upsteam

## 关于 fork

> Fork，本身并不是 git 工具中的一个命令，也不是对 git 的扩展，它是在 GitHub 上的概念，是另一种 clone 方式——在服务器端的 clone。而我们通常意义上的 clone，是将远程 repo 复制一份到本地

当你从 GitHub 上 clone 一个 repo 到本地时，除非你已明确声明是这个 repo 的 contributor，否则你是不能向其 pull request 的，此时，该远程的 repo 对于本地 repo 来说，就是 upstream。

当你从 GitHub 上 fork 一个 repo 之后，再 clone forked repo 到本地，你就可以任意向其 pull request，此时，远程的 repo 就是 origin。

总结下来：

1. 如果是 upstream repo，你只可以拉取最新代码，从而保证你本地的仓库与源仓库同步
2. 如果是 origin repo，就是你自己的 repo（自己创建的，或者 fork 的项目）你可以做 任何推拉操作（pull and push）
3. 你可以通过 pull request 向 upstream repo 贡献代码

## 让 fork 的项目和源项目同步

> upstream 是一个远程仓库的别名，也可以是其他的名字。origin 也是一个别名。可以配置多个远程仓库

为方便行文，我们将项目的三个别名介绍如下：

- origin：代表远程项目，即 GitHub Fork 项目（克隆自上游项目，即 upstream）
- local 代表本地项目，即电脑上的本地项目（克隆自远程项目）
- upstream：代表上游项目，即被 Fork 的 GitHub 项目

fork 一个项目后，我们一般是 clone origin 项目到本地开发。local 项目和 origin 项目跟 upstream 是没有什么联系的，那么就不能获取到源仓库最新的代码。

这时需要给 local 项目设置一个 upstream。也就是再另外配置一个远程仓库。local 仓库可以拉取 upstream 的代码，拉取后可以推送到 origin 仓库

```javascript
// 增加一个远程仓库
$ git remote add upstream https://github.com/xxx/xxx.git

// 查看远程仓库
$ git remote -v

// 获取 upstream 的更新（只获取不合并）
$ git fetch upstream

// 将 upstream 的 master 分支合并到当前分支
$ git merge upstream/master
```
