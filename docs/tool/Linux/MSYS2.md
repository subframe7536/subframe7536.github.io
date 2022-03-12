> MSYS2是一个MSYS的独立改写版本，主要用于 [shell](https://baike.baidu.com/item/%20shel/1657231) 命令行开发环境。同时它也是一个在Cygwin （POSIX 兼容性层） 和 MinGW-w64（从"MinGW-生成"）基础上产生的，追求更好的互操作性的 Windows 软件。
> - MSYS指Minimal GNU（POSIX）system on Windows，是一个小型的[GNU](https://baike.baidu.com/item/GNU/671972)环境，包括基本的txt，make等等。与[Cygwin](https://baike.baidu.com/item/Cygwin/151477)大致相当。
## 安装
### 从官网下载exe
[Releases](https://github.com/msys2/msys2-installer/releases)
### 安装
打开，解压至某个盘的根目录
### 换源
打开`/etc/pacman.d`目录
#### 中国科学技术开源软件镜像
在`mirrorlist.mingw32`最上面添加
```txt
Server = http://mirrors.ustc.edu.cn/msys2/mingw/i686
```
在`mirrorlist.mingw64`最上面添加
```txt
Server = http://mirrors.ustc.edu.cn/msys2/mingw/x86_64
```
在`mirrorlist.mingw64`最上面添加
```txt
Server = http://mirrors.ustc.edu.cn/msys2/msys/$arch
```
#### 清华大学开源软件镜像站
编辑 `/etc/pacman.d/mirrorlist.mingw32` ，在文件开头添加：
```txt
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/i686
```
编辑 `/etc/pacman.d/mirrorlist.mingw64` ，在文件开头添加：
```txt
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/x86_64
```
编辑 `/etc/pacman.d/mirrorlist.ucrt64` ，在文件开头添加：
```txt
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/ucrt64
```
编辑 `/etc/pacman.d/mirrorlist.clang64` ，在文件开头添加：
```txt
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/clang64
```
编辑 `/etc/pacman.d/mirrorlist.msys` ，在文件开头添加：
```txt
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/msys/$arch
```
#### 更新
打开`msys2`的终端(在菜单里，msys2 64bit->msys2 msys,或者安装目录的msys2.exe)
```txt
pacman -Syuu
```
## 安装zsh
修改根目录中`msys2_shell.cmd`中的第5行
```bash
set "LOGINSHELL=zsh"
```
![[Ubuntu(Linux)#oh-my-zsh]]
## Windows Terminal配置
命令行设为
```txt
C:/msys64/msys2_shell.cmd -defterm -no-start -use-full-path -here -mingw64
```
- `-mingw64` 告诉 MSYS2 这个启动脚本，我们要启动的是mingw64, 不是mingw32, 也不是默认的msys2
- `-defterm` 表示要启动的是bash,当然前面我们已经通过hacking方法让它默认变成了zsh了。
- `-no-start` 表示不通过`start`命令来启动（因为这地弹出一个新的黑框框窗口,而我们的目的是要在Windows Terminal里跑的)
- `-use-full-path` 或 `set MSYS2_PATH_TYPE=inherit` 表示,我们在mingw64下面的时候, `PATH`环境变量的值继承自windows系统的环境变量。
- `-here` 就是`set CHERE_INVOKING=1`的意思。