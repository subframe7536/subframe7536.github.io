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

## Github DNS设置
微软和GitHub同一家，微软的DNS能够正确的指向GitHub的地址
微软的DNS是4.2.2.1，4.2.2.2
### 流程
本地组策略 -> 计算机配置 -> windows设置 -> 域名解析策略 -> 
![[Pasted image 20220528132746.png]]
- 如果不行DirectAccress的DNS设置也可以加一下
## 计划任务自动深色模式
进入计划任务，导入计划 #todo 没有全局的深色，需要调整一下注册表
### 自动21点深色模式
```xml
<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Date>2022-06-12T09:32:45.468946</Date>
    <Author>DESKTOP-ARRV585\subframe7536</Author>
    <URI>\自动深色模式</URI>
  </RegistrationInfo>
  <Triggers>
    <CalendarTrigger>
      <StartBoundary>2022-06-12T21:00:00</StartBoundary>
      <Enabled>true</Enabled>
      <ScheduleByDay>
        <DaysInterval>1</DaysInterval>
      </ScheduleByDay>
    </CalendarTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <UserId>S-1-5-21-1661307729-1572147559-481704439-1001</UserId>
      <LogonType>InteractiveToken</LogonType>
      <RunLevel>LeastPrivilege</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>true</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>true</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>false</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <Duration>PT10M</Duration>
      <WaitTimeout>PT1H</WaitTimeout>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>PT72H</ExecutionTimeLimit>
    <Priority>7</Priority>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>reg.exe</Command>
      <Arguments>add  HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 0 /f</Arguments>
    </Exec>
  </Actions>
</Task>
```
```xml
<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Date>2022-06-12T09:32:45.468946</Date>
    <Author>DESKTOP-ARRV585\subframe7536</Author>
    <URI>\自动深色模式</URI>
  </RegistrationInfo>
  <Triggers>
    <CalendarTrigger>
      <StartBoundary>2022-06-12T21:00:00</StartBoundary>
      <Enabled>true</Enabled>
      <ScheduleByDay>
        <DaysInterval>1</DaysInterval>
      </ScheduleByDay>
    </CalendarTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <UserId>S-1-5-21-1661307729-1572147559-481704439-1001</UserId>
      <LogonType>InteractiveToken</LogonType>
      <RunLevel>LeastPrivilege</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>true</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>true</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>false</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <Duration>PT10M</Duration>
      <WaitTimeout>PT1H</WaitTimeout>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>PT72H</ExecutionTimeLimit>
    <Priority>7</Priority>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>reg.exe</Command>
      <Arguments>add  HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v SystemUseLightTheme /t REG_DWORD /d 0 /f</Arguments>
    </Exec>
  </Actions>
</Task>
```
### 自动8点浅色模式
```xml
<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Date>2022-06-12T09:32:45.468946</Date>
    <Author>DESKTOP-ARRV585\subframe7536</Author>
    <URI>\退出深色模式</URI>
  </RegistrationInfo>
  <Triggers>
    <CalendarTrigger>
      <StartBoundary>2022-06-13T08:00:00</StartBoundary>
      <Enabled>true</Enabled>
      <ScheduleByDay>
        <DaysInterval>1</DaysInterval>
      </ScheduleByDay>
    </CalendarTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <UserId>S-1-5-21-1661307729-1572147559-481704439-1001</UserId>
      <LogonType>InteractiveToken</LogonType>
      <RunLevel>LeastPrivilege</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>true</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>true</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>false</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <Duration>PT10M</Duration>
      <WaitTimeout>PT1H</WaitTimeout>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>PT72H</ExecutionTimeLimit>
    <Priority>7</Priority>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>reg.exe</Command>
      <Arguments>add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 1 /f</Arguments>
    </Exec>
  </Actions>
</Task>
```
```xml
<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Date>2022-06-12T09:32:45.468946</Date>
    <Author>DESKTOP-ARRV585\subframe7536</Author>
    <URI>\退出深色模式</URI>
  </RegistrationInfo>
  <Triggers>
    <CalendarTrigger>
      <StartBoundary>2022-06-13T08:00:00</StartBoundary>
      <Enabled>true</Enabled>
      <ScheduleByDay>
        <DaysInterval>1</DaysInterval>
      </ScheduleByDay>
    </CalendarTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <UserId>S-1-5-21-1661307729-1572147559-481704439-1001</UserId>
      <LogonType>InteractiveToken</LogonType>
      <RunLevel>LeastPrivilege</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>true</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>true</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>false</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <Duration>PT10M</Duration>
      <WaitTimeout>PT1H</WaitTimeout>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>PT72H</ExecutionTimeLimit>
    <Priority>7</Priority>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>reg.exe</Command>
      <Arguments>add  HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v SystemUseLightTheme /t REG_DWORD /d 1 /f</Arguments>
    </Exec>
  </Actions>
</Task>
```
## 删除服务
管理员运行cmd
```cmd
sc delete <服务名>
```