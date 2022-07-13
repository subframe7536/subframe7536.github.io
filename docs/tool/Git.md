> 版本管理、远程仓库、多分支工具

## 初始化
1. [官网下载](https://git-scm.com/downloads)
2. 开始 -> `Git` -> `Git Bash` 能打开说明成功
3. 设置你的`name`和`email`
```shell
git config --global user.name "subframe7536"
git config --global user.email "1667077010@qq.com"
```
4. 设置ssh
```shell
ssh-keygen -t rsa
```
之后直接全按回车
5. 设置config
```txt
Host *
  HostName gitee.com
  User git
  IdentityFile C:\\Users\\subframe\\.ssh\\none_pass_phrase
```
## 结构
![[git原理.png]]
### 暂存、评论、管理修改
分为 工作空间(working directory) 和 暂存区 ()
每次暂存将工作空间的修改提交到暂存区，推送时将暂存区的文件推送
#### 暂存&提交
```shell
$ git add fileName1
$ git add . # 暂存所有
$ git commit -m "wrote fileName1"
```
- 可以暂存多个文件
- `-m`后输入这次提交的评论
#### 回退修改
```shell
$ git restore . # 撤销所有修改
$ git restore --stage . # 将暂存区文件
```
#### 回退所有未暂存的修改
```shell
$ git checkout .
```
#### 隐藏未提交的修改
```shell
git stash save "name"
```
- git stash 命令可以将当前未提交的工作隐藏起来。让你的工作区变的干净清爽。
##### 查看保存工作现场
```shell
git stash list
```
##### 恢复工作现场
```shell
git stash apply 
```
##### 恢复并删除工作现场
```shell
git stash pop
```
#### 添加记录和描述到上一次提交
- 但是会改变 branch id
```shell
git commit --amend -a -m "test"
```
- -a 将工作区的代码也加入
#### 查看状态
```shell
$ git status
```
#### 查看记录
```shell
$ git log
```
#### 回退
```shell
$ git reset --hard HEAD~[number]
```
- 回到上`number`个指针指的位置的文件
#### 查看区别
```shell
$ git diff HEAD -- fileName1
```
### 分支管理&远程仓库
#### 克隆远程仓库的指定分支
```shell
git clone -b branchName URL
```
- 添加远程仓库
```shell
git remote add remoteName URL
```
- 修改远程仓库
```shell
git remote set-url remoteName URL
```
#### 查看分支
```shell
git branch
```
#### 查看所有分支
```shell
git branch -a
```
#### 切换分支
```shell
git checkout branchName
```
#### 创建新分支并切换 (签出)
```shell
git checkout -b branchName
```
##### 获取远程分支
```shell
git checkout -b branchName remoteName
```
#### 推送分支
```shell
git push remoteName branchName
```
#### 合并分支
```shell
git merge branchName
```
github中pull request，然后原作者选择是否合并分支
### gitignore失效
```shell
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```
# Github 镜像
https://hub.xn--gzu630h.xn--kpry57d/
https://hub.fastgit.xyz/
https://cdn.githubjs.cf/
https://gitclone.com/

## 改域名
`api.mtr.pub`
### 例
https://api.mtr.pub/zsh-users/zsh-syntax-highlighting.git
## 加域名
`gitclone.com`
### 例
https://gitclone.com/github.com/tendermint/tendermint.git
## 加前缀
`https://ghproxy.com/`
### 例
https://ghproxy.com/https://github.com/zsh-users/zsh-autosuggestions.git 
