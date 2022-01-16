# 安装
## 全局
```shell
npm i -g electron
```
### 卡在install.js不动的问题
`UnhandledPromiseRejectionWarning: RequestError: read ECONNRESET`
#### 解决方案
[原文](https://blog.csdn.net/qq_27005821/article/details/102748201)
1. 停顿在`node install.js`时，ctrl+c取消，y确认
2. 进入 http://npm.taobao.org/mirrors/electron/ ，下载相应版本zip
3. 修改`./node_modules/electron/install.js`
```js
#!/usr/bin/env node

const version = require('./package').version

const fs = require('fs')
const os = require('os')
const path = require('path')
const extract = require('extract-zip')
const platformPath = 'electron.exe'
const zipPath = "./electron.zip"
extractFile (zipPath)
// unzips and makes path.txt point at the correct executable
function extractFile (zipPath) {
	extract(zipPath, { dir: path.join(__dirname, 'dist') }, function (err) {
    if (err) return onerror(err)
    fs.writeFile(path.join(__dirname, 'path.txt'), platformPath, function (err) {
		if (err) return onerror(err)
    })
  })
}
```
4. `./node_modules/electron`目录下运行`node install.js`
5. `npx electron -v`检查版本
## 项目安装
```shell
npm i --save-dev electron
```
# Hello World
1. 创建`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   <div>
       hello world!
   </div>
</body>
</html>
```
2. 创建`main.js`
```js
var electron = require('electron')

var app = electron.app //应用端
var BrowserWindow = electron.BrowserWindow //浏览器端？

var mainWindow = null

app.on('ready', () => {
   mainWindow = new BrowserWindow({ height: 800, width: 1000 })
   mainWindow.loadFile('index.html')
   mainWindow.webContents.openDevTools();//默认打开调试工具
   mainWindow.on('close', () => {
       mainWindow = null
   })
})
```
3. 控制台`npm init --yes`
生成`package.json`
- `--yes`默认**所有**选项都为yes
4. 控制台`electron main.js`/`electron .`
运行
# 渲染
#todo 
