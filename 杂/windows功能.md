### 自带检查功能
右击开始按钮>点击"命令提示符"（以管理员身份运行 ），输入：  
```powershell
# 这条命令将扫描全部系统文件并和官方系统文件对比，扫描计算机中的不一致情况。
Dism /Online /Cleanup-Image /ScanHealth  
```  
#### 检查
```powershell
# 这条命令必须在前一条命令执行完以后，发现系统文件有损坏时使用。
Dism /Online /Cleanup-Image /CheckHealth  
```
#### 修复
```powershell
# 这条命令是把那些不同的系统文件还原成官方系统源文件。  
DISM /Online /Cleanup-image /RestoreHealth  
```
#### 完成后重启
无论以上是否成功，键入以下命令
```powershell
sfc /SCANNOW
```
### 索引位置
控制面板->索引选项->修改
![[索引.png]]
### ssh-agent
```shell
Set-Service -StartupType Automatic ssh-agent
Start-Service ssh-agent
ssh-add C:\Users\subframe\.ssh\id_rsa
# Enter passphrase for C:\Users\subframe\.ssh\id_rsa:
# Identity added: C:\Users\subframe\.ssh\id_rsa (C:\Users\subframe\.ssh\id_rsa)
```
### win11使用win10文件管理器
1. Win+R 输入 `regedit`，转到 `计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions`
2. 在 `Shell Extensions` 上右键新建项，命名为 `Blocked`
3. 右键 `Blocked` ，新建字符串值，重命名为 `{e2bf9676-5f8f-435c-97eb-11607a5bedf7}`
4. 重启资源管理器


