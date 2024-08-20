# git

## 1、新建代码库

**1、在当前目录新建一个Git代码库**

```javascript
$ git init
```

**2、新建一个目录，将其初始化为Git代码库**

```javascript
$ git init [project-name]
```

**3、下载一个项目和它的整个代码历史**

```javascript
$ git clone [url]
```

## 2、配置

`Git`的设置文件为`.gitconfig`，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

**1、显示当前的Git配置**
```javascript
$ git config --list
```

**2、编辑Git配置文件**
```javascript
$ git config -e [--global]
```

**3、设置提交代码时的用户信息**
```javascript
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```


## 3、增加/删除文件

**1、添加指定文件到暂存区**
```javascript
$ git add [file1] [file2] ...
```

**2、添加指定目录到暂存区，包括子目录**
```javascript
$ git add [dir]
```

**3、添加当前目录的所有文件到暂存区**
```javascript
$ git add .
```
添加每个变化前，都会要求确认

**4、对于同一个文件的多处变化，可以实现分次提交**
```javascript
$ git add -p
```

**5、删除工作区文件，并且将这次删除放入暂存区**
```javascript
$ git rm [file1] [file2] ...
```

**6、停止追踪指定文件，但该文件会保留在工作区**
```javascript
$ git rm --cached [file]
```

**7、改名文件，并且将这个改名放入暂存区**
```javascript
$ git mv [file-original] [file-renamed]
```

## 4、代码提交

**1、提交暂存区到仓库区**
```javascript
$ git commit -m [message]
```

**2、提交暂存区的指定文件到仓库区**
```javascript
$ git commit [file1] [file2] ... -m [message]
```

**3、提交工作区自上次`commit`之后的变化，直接到仓库区**
```javascript
$ git commit -a
```

**4、提交时显示所有diff信息**
```javascript
$ git commit -v
```

**5、使用一次新的`commit`，替代上一次提交**

如果代码没有任何新变化，则用来改写上一次commit的提交信息
```javascript
$ git commit --amend -m [message]
```

**6、重做上一次`commit`，并包括指定文件的新变化**
```javascript
$ git commit --amend [file1] [file2] ...
```

## 5、分支

**1、列出所有本地分支**
```javascript
$ git branch
```

**2、列出所有远程分支**
```javascript
$ git branch -r
```

**3、列出所有本地分支和远程分支**
```javascript
$ git branch -a
```

**4、新建一个分支，但依然停留在当前分支**
```javascript
$ git branch [branch-name]
```

**5、新建一个分支，并切换到该分支**
```javascript
$ git checkout -b [branch]
```

**6、新建一个分支，指向指定commit**
```javascript
$ git branch [branch] [commit]
```

**7、新建一个分支，与指定的远程分支建立追踪关系**
```javascript
$ git branch --track [branch] [remote-branch]
```

**8、切换到指定分支，并更新工作区**
```javascript
$ git checkout [branch-name]
```

**9、切换到上一个分支**
```javascript
$ git checkout -
```

**10、建立追踪关系，在现有分支与指定的远程分支之间**
```javascript
$ git branch --set-upstream [branch] [remote-branch]
```

**11、合并指定分支到当前分支**
```javascript
$ git merge [branch]
```

**12、选择一个`commit`，合并进当前分支**
```javascript
$ git cherry-pick [commit]
```

**13、删除分支**
```javascript
$ git branch -d [branch-name]
```

**14、删除远程分支**
```javascript
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

**15、推送本地分支到远程**
```javascript
$ git push origin local_branch:remote_branch
```

## 6、标签

**1、列出所有`tag`**
```javascript
$ git tag
```

**2、新建一个`tag`在当前`commit`**
```javascript
$ git tag [tag]
```

**3、新建一个`tag`在指定`commit`**
```javascript
$ git tag [tag] [commit]
```

**4、删除本地`tag`**
```javascript
$ git tag -d [tag]
```

**5、删除远程`tag`**
```javascript
$ git push origin :refs/tags/[tagName]
```

**6、查看`tag`信息**
```javascript
$ git show [tag]
```

**7、提交指定`tag`**
```javascript
$ git push [remote] [tag]
```

**8、提交所有`tag`**
```javascript
$ git push [remote] --tags
```

**9、新建一个分支，指向某个`tag`**
```javascript
$ git checkout -b [branch] [tag]
```

## 7、查看信息

**1、显示有变更的文件**
```javascript
$ git status
```

**2、显示当前分支的版本历史**
```javascript
$ git log
```

**3、显示`commit`历史，以及每次`commit`发生变更的文件**
```javascript
$ git log --stat
```

**4、搜索提交历史，根据关键词**
```javascript
$ git log -S [keyword]
```

**5、显示某个`commit`之后的所有变动，每个`commit`占据一行**
```javascript
$ git log [tag] HEAD --pretty=format:%s
```

**6、显示某个`commit`之后的所有变动，其"提交说明"必须符合搜索条件**
```javascript
$ git log [tag] HEAD --grep feature
```

**7、显示某个文件的版本历史，包括文件改名**
```javascript
$ git log --follow [file]
$ git whatchanged [file]
```

**8、显示指定文件相关的每一次`diff`**
```javascript
$ git log -p [file]
```

**9、显示过去5次提交**
```javascript
$ git log -5 --pretty --oneline
```

**10、显示所有提交过的用户，按提交次数排序**
```javascript
$ git shortlog -sn
```

**11、显示指定文件是什么人在什么时间修改过**
```javascript
$ git blame [file]
```

**12、显示暂存区和工作区的差异**
```javascript
$ git diff
```

**13、显示暂存区和上一个`commit`的差异**
```javascript
$ git diff --cached [file]
```

**14、显示工作区与当前分支最新`commit`之间的差异**
```javascript
$ git diff HEAD
```

**15、显示两次提交之间的差异**
```javascript
$ git diff [first-branch]...[second-branch]
```

**16、显示今天你写了多少行代码**
```javascript
$ git diff --shortstat "@{0 day ago}"
```

**16、显示某次提交的元数据和内容变化**
```javascript
$ git show [commit]
```

**17、显示某次提交发生变化的文件**
```javascript
$ git show --name-only [commit]
```

**18、显示某次提交时，某个文件的内容**
```javascript
$ git show [commit]:[filename]
```

**20、显示当前分支的最近几次提交**
```javascript
$ git reflog
```

## 8、远程同步
`[remote]`是远程仓库的名称，默认名称为origin

**1、下载远程仓库的所有变动**
```javascript
$ git fetch [remote]
```

**2、显示所有远程仓库**
```javascript
$ git remote -v
```

**3、显示某个远程仓库的信息**
```javascript
$ git remote show [remote]
```

**4、增加一个新的远程仓库，并命名**
```javascript
$ git remote add [shortname] [url]
```

**5、取回远程仓库的变化，并与本地分支合并**
```javascript
$ git pull [remote] [branch]
```

**6、上传本地指定分支到远程仓库**
```javascript
$ git push [remote] [branch]
```

**6、强行推送当前分支到远程仓库，即使有冲突**
```javascript
$ git push [remote] --force
```

**7、推送所有分支到远程仓库**
```javascript
$ git push [remote] --all
```

## 9、撤销

**1、恢复暂存区的指定文件到工作区**
```javascript
$ git checkout [file]
```

**2、恢复某个`commit`的指定文件到暂存区和工作区**
```javascript
$ git checkout [commit] [file]
```

**3、恢复暂存区的所有文件到工作区**
```javascript
$ git checkout .
```

**4、重置暂存区的指定文件，与上一次commit保持一致，但工作区不变**
```javascript
$ git reset [file]
```

**5、重置暂存区与工作区，与上一次commit保持一致**
```javascript
$ git reset --hard
```

**6、重置当前分支的指针为指定`commit`，同时重置暂存区，但工作区不变**
```javascript
$ git reset [commit]
```

**7、重置当前分支的HEAD为指定`commit`，同时重置暂存区和工作区，与指定`commit`一致**
```javascript
$ git reset --hard [commit]
```

**8、重置当前`HEAD`为指定`commit`，但保持暂存区和工作区不变**
```javascript
$ git reset --keep [commit]
```

**9、新建一个`commit`，用来撤销指定`commit`**

后者的所有变化都将被前者抵消，并且应用到当前分支
```javascript
$ git revert [commit]
```

**10、暂时将未提交的变化移除，稍后再移入**
```javascript
$ git stash
$ git stash pop
```

## 10、其他

**1、生成一个可供发布的压缩包**
```javascript
$ git archive
```