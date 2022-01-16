> 类似于linux的oh-my-zsh，用于美化powershell
### 安装
#### 下载
以管理员身份运行
```shell
Set-ExecutionPolicy Bypass
Install-Module oh-my-posh -Scope CurrentUser
Install-Module posh-git -Scope CurrentUser
```
#### 配置
```shell
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
```
打开`C:\user\用户名\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`并输入
```powershell
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt -Theme ys
Enable-PoshTooltips
```
#### 主体
修改`C:\Program Files\WindowsPowerShell\Modules\oh-my-posh\6.3.1\themes`中的文件
这里用的是ys主体
详细的主体可以使用 `Get-PoshThemes` 命令查找
```json
{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "blocks": [
    {
      "type": "prompt",
      "alignment": "left",
      "segments": [
        {
          "type": "python",
          "style": "plain",
          "foreground": "white",
          "properties": {
            "prefix": "(",
            "postfix": ")",
            "display_version": false
          }
        }
      ]
    },
    {
      "type": "prompt",
      "alignment": "left",
      "newline": true,
      "segments": [
        {
          "type": "text",
          "style": "plain",
          "foreground": "lightBlue",
          "properties": {
            "prefix": "",
            "text": "#"
          }
        },
        {
          "type": "root",
          "style": "plain",
          "foreground": "red",
          "properties": {
            "root_icon": "%"
          }
        },
        {
          "type": "session",
          "style": "plain",
          "properties": {
            "user_info_separator": " <darkGray>@</> ",
            "prefix": "",
            "user_color": "cyan",
            "host_color": "green"
          }
        },
        {
          "type": "path",
          "style": "plain",
          "foreground": "lightYellow",
          "properties": {
            "prefix": "<darkGray>in </>",
            "style": "full"
          }
        },
        {
          "type": "git",
          "style": "plain",
          "properties": {
            "branch_icon": " \u03C8 ",
            "prefix": "<darkGray>on</> <white>git:</>",
            "template": "{{ .HEAD }}"
          }
        },
        {
          "type": "time",
          "style": "plain",
          "foreground": "darkGray",
          "properties": {
            "prefix": "[",
            "postfix": "]"
          }
        },
        {
          "type": "exit",
          "style": "plain",
          "foreground": "red",
          "properties": {
            "prefix": " C:",
            "always_numeric": true
          }
        }
      ]
    },
    {
      "type": "prompt",
      "alignment": "left",
      "newline": true,
      "segments": [
        {
          "type": "text",
          "style": "plain",
          "foreground": "lightRed",
          "properties": {
            "prefix": "",
            "text": "$",
            "postfix": ""
          }
        }
      ]
    }
  ],
  "final_space": true
}
```

