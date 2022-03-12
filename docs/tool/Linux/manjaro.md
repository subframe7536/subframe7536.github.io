# manjaro(时间不够，暂时入土)
## 安装
### 下载
[Manjaro - Downloads](https://manjaro.org/download/)，推荐用种子下
kde版？
### 制作启动盘
rufus，制作
boot时选择U盘启动
#### bios的模式
`SATA`mode选择为`AHCI`
##### 如果更改时提示会有问题
1. 退出bios，回到windows
2. <kbd>Win+R</kbd>输入`msconfig`
3. ![[Pasted image 20220303220310.png]]
4. 重启，进入`bios`，修改`SATA`mode
5. 进入安全模式，重复`2`，取消勾选安全引导
6. 重启 
### 进入后
`Nvidia`显卡选择non-Free Driver
#### 分区

| 大小     | 文件系统  | 挂载点    | 标记     | 用途                         |
| -------- | --------- | --------- | -------- | ---------------------------- |
| 100M     | fat32     | /boot/efi | efi      | 引导分区                             |
| 8G       | linuxswap |           | swap     | about swap                   |
| 500M     | ext4      | /boot     | boot     | 存放与Linux启动相关的程序    |
| 20G      | ext4      | /         | root     | 用于存放系统相当于win10的C盘 |
| the rest | ext4      | /home     | 无需标记 | 用户数据存储                 |

参考[win10环境下安装manjaro kde（双系统） - Jaywhenxiang - 博客园 (cnblogs.com)](https://www.cnblogs.com/Jaywhen-xiang/p/11561661.html)
- `100M`会提醒不够，应该没事？
### 完成
重启
## 配置
### 更改源
```shell
sudo pacman-mirrors -c China -m rank 
```
增加中文社区的源，在 `/etc/pacman.conf` 中添加 `archlinuxcn` 源，加上：
```txt
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
``` 
### 更新源
```shell
sudo pacman -Syy
sudo pacman -Sy archlinuxcn-keyring
```
### 安装Arch Linux AUR 包管理工具
```shell
sudo pacman -S yay 
```
#### 解决双系统时间不同步问题
```shell
timedatectl set-local-rtc true
```
#### 目录中文改英文
依次执行下面三行命令
```shell
sudo pacman -S xdg-user-disgtk
export LANG=en_US
xdg-user-dirs-gtk update
```
然后会有个窗口提示语言更改，更新名称即可，此时`home`下的文件夹名已变为英文。
接着需要将语言改回中文，执行:
```shell
export LANG=zh_CN.UTF-8
```


### zsh
![[Ubuntu(Linux)#oh-my-zsh]]

### wine
[wine install](https://blog.csdn.net/zzxian/article/details/7166572)
