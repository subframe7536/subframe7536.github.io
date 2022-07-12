# Electron-start
## 安装(全局)
```shell
npm i -g electron
```
### 卡在install.js不动的问题
`UnhandledPromiseRejectionWarning: RequestError: read ECONNRESET`
#### 解决方案
```shell
npm config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/
```
或者
node install.js 报错 RequestError: read ECONNRESET

1. 进入 node_modules/electron文件下， 编辑install.js
2. 修改downloadArtifact这段代码， 添加淘宝镜像地址`https://npm.taobao.org/mirrors/electron`
 ```js
 {.....
	mirrorOptions: {
		mirror: 'https://npm.taobao.org/mirrors/electron',
	    platform,
	    arch,
	}
 }
 ```
## 项目安装
```shell
npm i --save electron
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
## 功能模块
### 存储
#### (轻量) electron-store+Vuex/Pinia
`app.getPath('exe')`
getPath未定义
- 使用`remote.app.getPath('exe')`
#### (大量) sql.js
https://github.com/sql-js/sql.js
https://xushanxiang.com/electron-sql-js-sqlite.html
### 获取系统字体
使用`font-list`
#### 安装
```shell
npm install font-list
```
#### 使用
```js
import fontList from 'font-list';

fontList
	.getFonts()
	.then(fonts => {
		//有引号
		console.log(newFontList);
		//去引号
		const newFontList = [];
		data.map(item => {
			if (item.indexOf('"') === 0) {
				newFontList.push(item.replace(/^"|"$/g,''));
			} else {
				newFontList.push(item);
			}
		});
		console.log(newFontList);
	})
	.catch(err => {
		 console.log(err);
	});
```
##### 打包之后找不到
(Windows)经过调试后发现打包之后找不到`fonts.vbs`文件, 最简单的办法, 把fonts.vbs放到打包后能找到的地方, 于是我就把他拷贝到了`app/dist`里面. 然后将`index.js`中的
```javascript
 fn = path.join(__dirname, 'fonts.vbs')
```
改成了
```javascript
let fn
if(process.env.NODE_ENV === 'development') {
  fn = path.join(__dirname, 'fonts.vbs')
} else {
  fn = path.join(__dirname, 'dist/fonts.vbs')
}
```
- 最好再打个包
## 样例

### electron-vite
electron+vite+vue/react模板
```shell
npm create electron-vite
```


[外部桌面歌词](https://github.com/qier222/YesPlayMusic/issues/616)

### ffmpeg 
[electron + fluent-ffmpeg + ffmpeg/installer](http://cache.baiducontent.com/c?m=ghzx_4VF7vA0AEok5DGjQ7EV3a-AyO75Oeq5qPm3xEQyq3yrfL9MNGJpI9_hF-bzzoRDEEueh_-QfTENI8a5LIDwDJEevCrQyCHLp_az--q&p=c06ed1179c904ead08e2977e0f51cf&newp=8d79c71b85cc43ff57ee947c1c4791231610db2151d4d5106b82c825d7331b001c3bbfb422211307d3c37a6606ae4f56e1f43470310923a3dda5c91d9fb4c57479&s=a2a8441d32facfab&user=baidu&fm=sc&query=electron+ffmpeg&qid=db0923f400000eca&p1=2)