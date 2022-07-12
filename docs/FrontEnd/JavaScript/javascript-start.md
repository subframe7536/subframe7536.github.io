# JavaScript-start
> 一种属于网络的高级脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。分为三部分：
> - ECMAScript
> - DOM
> - BOM

[[JS引入方式]]
[[ECMAScript]]
[[BOM]]
[[DOM]]
## 框架
[[JQuery]]			
### 轻量级替代
[[SimJQ]]
[[Move.js]]
### 深色夜间模式
[web深色模式适配 - guangzan - 博客园 (cnblogs.com)](https://www.cnblogs.com/guangzan/p/13524990.html)
#todo async await promise fetch

`~~var`
- 两次取反
- 数字字符串转数字/boolean转数字/非数字符号转0

`navigator.mediaSession.metadata`

#todo 
[音乐元数据读取](https://github.com/Borewit/music-metadata#usage)
[ffmpeg读写元数据](https://github.com/honjes/async-ffmetadata)
[离线存储localforage](https://github.com/localForage/localForage)
### howler 
音频api
[docs](https://github.com/goldfire/howler.js#documentation)
### buffer转base64
```js
function buffer2Base64(buffer) {
  let bytes = new Uint8Array(buffer)
  return window.btoa(
      bytes.reduce((data, byte) => data + String.fromCharCode(byte), '')
  );
}
```
## PWA
[文档](https://developers.google.com/codelabs/project-fugu?hl=zh_cn#0)
[vite plugin](https://vite-plugin-pwa.netlify.app/guide/)
[系统集成](https://web.dev/learn/pwa/os-integration/)