# Ubuntu
## 安装WSL(子系统)
### 1. 启用子系统功能
1. windows设置 -> 更新与安全 -> 开发者选项 -> 选择开发者模式
2. 控制面板 -> 程序 -> 启用或关闭Windows功能 -> 适用于Linux的Windows子系统 -> 重启
### 2. 下载安装并设置账户
MSstore搜索Ubuntu，选18.04版本，下载好后打开，设置账户密码(密码不显示)
### 3. 换源
1. 备份原数据源配置
```shell
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
``` 
2. 修改数据源配置
```shell
sudo vim /etc/apt/sources.list
```
- 按`i`进入编辑模式
- `esc`退出编辑模式
- `:wq`强制退出并保存
- 主题：https://draculatheme.com/vim
- 详细：[[Vim]]
1. 输入国内镜像源
```text
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
```
#### 清华源
- 网址：[https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/](https://link.zhihu.com/?target=https%3A//mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)
- 源地址：[https://mirrors.tuna.tsinghua.edu.cn/ubuntu/](https://link.zhihu.com/?target=https%3A//mirrors.tuna.tsinghua.edu.cn/ubuntu/)
```text
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
```
4. 更新
```shell
sudo apt-get update
sudo apt-get upgrade
```
- 如果签名异常
```shell
sudo apt-key adv --keyserver keyserver.ubuntu.com\
--recv-keys 报错的签名
```
### 4. 安装软件
`sudo apt-get install 软件名`
### 5. 用户操作
#### 添加用户
`adduser 用户名`
#### 删除用户
`userdel -r 用户名`
#### 赋予root权限
`sudo addusser 用户名 sudo`
### 6. 重置密码(wsl)
1. 请打开 PowerShell，并使用以下命令进入默认 WSL 分发版的根目录：`wsl -u root`
- 如果需要在非默认分发版中更新忘记的密码，请使用命令：`wsl -d Debian -u root`，并将 `Debian` 替换为目标分发版的名称。
2. 在 PowerShell 内的根级别打开 WSL 发行版后，可使用此命令更新密码：`passwd <WSLUsername>`，其中 `<WSLUsername>` 是 DISTRO 中帐户的用户名，而你忘记了它的密码。
3. 系统将提示你输入新的 UNIX 密码，然后确认该密码。 在被告知密码已成功更新后，请使用以下命令在 PowerShell 内关闭 WSL：`exit`
### 7. 查看系统信息
```shell
screenfetch
```
或者
```shell
linuxlogo
```
### 8. ssh
#### 生成密钥
```shell
ssh-keygen -t rsa
```
#### 放置信任的公钥
```shell
# 编辑
sudo vim ~/.ssh/authorized_keys 

# 输入公钥后保存

# 重启ssh服务
systemctl restart sshd
```
## oh-my-zsh
1. 下载zsh
```shell
sudo apt-get install zsh -y
```
2. 下载oh-my-zsh
```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
- 或者手动安装
```shell
git clone https://gitee.com/whereabouts-fork/ohmyzsh.git ~/.oh-my-zsh
# 拷贝配置文件
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
# 应用配置文件
source ~/.zshrc
```
- 查看shell
```shell
cat /etc/shells 
```
- 切换shell工具
```shell
chsh -s /bin/zsh
chsh -s /bin/bash
```
3. 设置主题
```shell
vim ~/.zshrc
```
设置`ZSH_THEME="ys"`
- 或者用 [[powerlevel10k主题]]
4. 启用插件
- `zsh-autosuggestions`
它是Oh-myszh的一个插件，作用基本上是根据历史输入指令的记录即时的提示，能够很大的提高效率。
- `zsh-syntax-highlighting`
这是一个命令高亮插件，输入为绿色时表示可用命令，路径带有下划线时表示可用路径
```shell
cd ~/.oh-my-zsh/plugins 
git clone https://ghproxy.com/https://github.com/zsh-users/zsh-autosuggestions.git 
git clone https://ghproxy.com/https://github.com/zsh-users/zsh-syntax-highlighting.git
``` 
```shell
vim ~/.zshrc
```
```shell
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```
5. 重启配置
```shell
source ~/.zshrc
```
6. 更新oh-my-zsh
```shell
omz update
```
7. alias
```shell
alias config="vim ~/.zshrc"
alias refresh="source ~/.zshrc"
alias l="ls -alF"
alias cl="clear"
```
# 常用命令
![[Linux常用命令]]

# CentOS 7
## 换源
### 备份
```shell
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```
### 替换阿里源
```shell
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```
### 更新
```shell
yum update
```
## 安装宝塔面板
```shell
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```
# GDB调试
### 1. 生成编译文件
`g++ 源文件名 -o 编译文件名(一般不用带后缀) -g`
### 2. 调试文件
`gdb 编译文件名`
### 常用命令
- 运行
`r(run)`
- 查看文件
`l`
- 设置断点
	- 设置某一行断点
	`b 行号`
		- 条件断点
		`b 行号 if 条件`
	- 设置某函数断点
	`b 函数名`
	- 追踪变量值
	`display 变量名`
	- 取消追踪变量名
	`delete display`
- 打印变量值
`print 变量名`
- 显示信息
	- 显示文件
	`info file`
	- 显示断点
	`info b`
- 退出
`q(quit)`

