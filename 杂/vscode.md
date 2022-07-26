### 下载慢
1. 生成下载链接
2. 将链接的域名改为
```txt
vscode.cdn.azure.cn
```
3. 重新下载

### 添加右键
```txt
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="D:\\code\\_software\\VSCode\\Code.exe"

[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"D:\\code\\_software\\VSCode\\Code.exe\" \"%1\""
    
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="D:\\code\\_software\\VSCode\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"D:\\code\\_software\\VSCode\\Code.exe\" \"%V\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="D:\\code\\_software\\VSCode\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"D:\\code\\_software\\VSCode\\Code.exe\" \"%V\""
```
