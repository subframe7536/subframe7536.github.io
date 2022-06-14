### 隐藏输出、显示标题
```shell
@echo off
@title 连接WSA
```
### 获取输入变量
```shell
set /p 变量名=输入前的文字
```
### 转义字符
```shell
^|
^>
```
### 获取返回值
[怎么用shell得到一个命令执行后的返回值赋值给一个变量_百度知道 (baidu.com)](https://zhidao.baidu.com/question/563606780.html)
### 跳转
```shell
goto 名称
名称
```
### 判断语句
[shell中if语句的用法 - tao之夭夭 - 博客园 (cnblogs.com)](https://www.cnblogs.com/yigui/p/10889135.html)
```shell
if 条件 (
: ....
) else if 条件 (
: ....
) else (
: ....
)
```
### 文件夹操作
```shell
if not exist 文件夹名 md 文件夹名
```
### exe开启关闭
```shell
# 开启
start exe名
# 关闭
taskkill /f /t /im exe名
```
### 隐藏返回结果
```shell
..... >nul
```
### 同时运行多个命令
```shell
.... & .... & ....
```
### 参数
```shell
对于变量%0~%9及for里使用的%i这样的变量，可以有以下的语法：  
~I - 删除任何引号(")，扩充 %I  
%~fI - 将 %I 扩充到一个完全合格的路径名  
%~dI - 仅将 %I 扩充到一个驱动器号  
%~pI - 仅将 %I 扩充到一个路径  
%~nI - 仅将 %I 扩充到一个文件名  
%~xI - 仅将 %I 扩充到一个文件扩展名  
%~sI - 扩充的路径只含有短名  
%~aI - 将 %I 扩充到文件的文件属性
```
### 忽略盘符进入目录
```shell
cd /d 目录
```
### 脚本当前目录
```shell
%~dp0
```
### 修改系统环境变量
```shell
setx /M 变量名 路径
```

修改HOST
```shell
@echo off  
echo "去除hosts 只读属性"  
attrib -R C:\windows\system32\drivers\etc\hosts  
echo "备份 hosts"  
@xcopy C:\Windows\system32\drivers\etc\hosts C:\Windows\system32\drivers\etc\hosts.bak  
echo "hosts 备份 完毕"  
echo "开始修改 hosts"  
@echo xx.xx.xx.101  admin.xxxx.com >> C:\Windows\System32\drivers\etc\hosts  
echo "hosts 修改完毕"  
echo "开始 刷新dns"  
@ipconfig /flushdns  
echo "dns 刷新完成"  
echo "hosts 加上只读属性"  
attrib +R C:\windows\system32\drivers\etc\hosts
```