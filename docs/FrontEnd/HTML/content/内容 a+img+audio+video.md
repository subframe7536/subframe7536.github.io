### 超链接a 
`<a href="111" target="222">333</a>`
超链接标签
111：链接或.html或空链接(#)或文件或定位到id的位置(#+id)
222：链接的弹出方式
 - `_self`：默认值
 - `_blank`：新窗口打开
### 图片img
`<img src="111" alt="222" title="333">  `
图片标签
111：图链或者路径
222：无法显示图片时显示的文字
333：鼠标经过时显示的文本
### 音频标签audio
`<audio src="111" autoplay muted controls loop preload="222"></audio>  `
111：链接或路径
`autoplay`：自动播放(Google浏览器需要添加muted静音)
`muted`：静音
`controls`：控件(一般在js中写)
`loop`：循环
222：`auto`自动预加载/`none`不加载  
### 视频标签video
`<video src="111" autoplay muted controls width="222" height="333" loop preload="444" poster="555"></video>  `
111：链接或路径
`autoplay`：自动播放(Google浏览器需要添加muted静音)
`muted`：静音
`controls`：控件(一般在js中写)
`loop`：循环
222：高度
333：宽度
444：`auto`自动预加载/`none`不加载  
555：封面地址或路径