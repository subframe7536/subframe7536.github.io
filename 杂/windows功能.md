## 自带检查功能
右击开始按钮>点击"命令提示符"（以管理员身份运行 ），输入：  
```powershell
# 这条命令将扫描全部系统文件并和官方系统文件对比，扫描计算机中的不一致情况。
Dism /Online /Cleanup-Image /ScanHealth  
```  
### 检查
```powershell
# 这条命令必须在前一条命令执行完以后，发现系统文件有损坏时使用。
Dism /Online /Cleanup-Image /CheckHealth  
```
### 修复
```powershell
# 这条命令是把那些不同的系统文件还原成官方系统源文件。  
DISM /Online /Cleanup-image /RestoreHealth  
```
### 完成后重启
无论以上是否成功，键入以下命令
```powershell
sfc /SCANNOW
```
## 索引位置
控制面板->索引选项->修改
![[索引.png]]
## ssh-agent
```shell
Set-Service -StartupType Automatic ssh-agent
Start-Service ssh-agent
ssh-add C:\Users\subframe\.ssh\id_rsa
# Enter passphrase for C:\Users\subframe\.ssh\id_rsa:
# Identity added: C:\Users\subframe\.ssh\id_rsa (C:\Users\subframe\.ssh\id_rsa)
```
## win11使用win10文件管理器
1. Win+R 输入 `regedit`，转到 `计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions`
2. 在 `Shell Extensions` 上右键新建项，命名为 `Blocked`
3. 右键 `Blocked` ，新建字符串值，重命名为 `{e2bf9676-5f8f-435c-97eb-11607a5bedf7}`
4. 重启资源管理器
### 多标签页
下载vivetool
管理员模式powershell
```shell
.\ViVeTool.exe addconfig 34370472 2
```
## windows动画
系统属性 -> 高级 -> 性能 -> 设置
![[动画.png]]

## wsa
### 下载
https://store.rg-adguard.net/
RP改为slow，输入 `https://www.microsoft.com/store/productId/9P3395VX91NR`
### 安装
1. 管理员模式powershell
2. `Add-AppPackage 安装包路径` 
3. 打开开发人员选项
### 问题
- 开了虚拟机和bios也无法开启，之前模拟器设置过hyper-v了
`bcdedit /set hypervisorlaunchtype auto`
---
- 一直无法连接adb
1. 重启 
2. 点击 关闭适用于Android... 右边的关闭按钮，等待转圈完毕，点击IP地址右边的按钮，可以看到开发人员模式的地址刷新了，这样就可以使用adb了
---
- 不断需要联网
`adb shell settings put global captive_portal_mode 0`

## 以太网不见了
1. 打开服务，找到`network connections`/`wired Auto Config`，打开，重启
2. （可能没用）设备管理器 -> 点击网络适配器 -> 操作 -> 添加过时硬件 -> 下一页 -> 手动 -> 选择网络适配器 -> Microsoft 回环适配器 -> 