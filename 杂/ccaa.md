# Linux+aria2+FileBroswer

[项目地址](https://github.com/helloxz/ccaa/)
## 安装
```shell
#海外
bash <(curl -Lsk https://raw.githubusercontent.com/helloxz/ccaa/master/ccaa.sh)
#国内
bash <(curl -Lsk https://raw.githubusercontent.com/helloxz/ccaa/master/ccaa.sh) cdn
```
- 根据提示来
## 管理
### 配置文件
CCAA所有配置文件位于`/etc/ccaa/`，无特殊情况一般不用修改
```shell
├── aria2.conf #--- aria2配置文件
├── aria2.session #--- aria2 session文件
├── config.json #--- Filebrowser配置文件
├── filebrowser.db #--- Filebrowser数据库
├── index.html #--- AriaNg页面
├── upbt.sh #--- BtTracker更新脚本
└── version.txt #--- CCAA版本号
```
### 程序路径
-   Filebrowser二进制文件：`/usr/sbin/filebrowser`
-   Aria2二进制文件：`/usr/bin/aria2c`
-   ccaa_web二进制文件：`/usr/sbin/ccaa_web`
-   CCAA管理脚本：`/usr/sbin/ccaa`
### 日志文件
CCAA产生的相关日志文件都位于`/var/log/`，路径如下：
-   Aria2日志文件：`aria2.log`
-   FileBrowser日志文件：`filebrowser.log`
-   FileBrowser运行时产生的日志文件：`fbrun.log`
-   ccaa_web运行产生的日志文件：`ccaa_web.log`
### 查看密码
```shell
#查看Aria2 RPC 密钥
cat /etc/ccaa/aria2.conf | grep 'rpc-secret='
```
### 修改RPC密钥
-   如果需要修改Aria2 RPC 密钥密钥，请编辑`/etc/ccaa/aria2.conf`，找到`rpc-secret=`进行修改
-   修改配置后需要输入命令`ccaa restart`重启服务生效
### 修改AriaNG访问端口
AriaNG以`ccaa_web`来运行，默认端口为`6080`,CCAA `v2.1`版本及以上才支持自定义端口，先输入`ccaa -v`确保版本大于等于`2.1`
1. 先输入`ccaa stop`停止CCAA服务
2. 编辑`/etc/systemd/system/ccaa_web.servic`这个文件，将`ExecStart=/usr/bin/sudo -u ccaa /usr/sbin/ccaa_web` 修改为 `ExecStart=/usr/bin/sudo -u ccaa /usr/sbin/ccaa_web /etc/ccaa/AriaNg 8888`
> [!NOTE] Title
> `8888`修改为你自己的端口
3. 继续修改`/usr/sbin/ccaa`这个文件，将`nohup sudo -u ccaa /usr/sbin/ccaa_web > /var/log/ccaa_web.log 2>&1 &` 修改为 `nohup sudo -u ccaa /usr/sbin/ccaa_web /etc/ccaa/AriaNg 8888 > /var/log/ccaa_web.log 2>&1 &`
> [!NOTE] Title
> `8888`修改为你自己的端口,**注意这个文件里面有2个地方都要改，修改后注意防火墙放行新的端口。**
4. 修改完毕后输入`ccaa start`重启启动CCAA
### 开机启动CCAA
CCAA `v2.1`版本开始支持以服务的形式开机启动，首先输入命令`ccaa -v`查看当前版本，确保大于等于`2.1`，然后依次输入下面的命令设置开机启动：
```shell
systemctl enable aria2
systemctl enable ccaa_web
systemctl enable filebrowser
```
### 自动更新BT Tracker列表
使用crontab可以设置自动更新BT Tracker列表，输入下面的命令：
```shell
#安装crontab，如已安装请跳过
yum -y install crontabs
#新增计划任务
crontab -e
#添加如下内容
* 2 * * 7 /etc/ccaa/upbt.sh > /dev/null
#重启crontab服务
service crond reload 	#CentOS 6
systemctl reload crond	#CentOS 7
```
### 卸载CCAA
直接输入`ccaa`可显示CCAA界面，根据提示卸载，或者输入下面的命令也可以卸载：
```shell
bash <(curl -Lsk https://raw.githubusercontent.com/helloxz/ccaa/master/ccaa.sh)
```
