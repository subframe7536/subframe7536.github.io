### location对象
> 用于获取或者设置窗体的`URL`，并且可以用于解析`URL`
#### URL格式
`protocol://host(:port)/path/(?query)#fragment`

| 名称     | 含义                         |
| -------- | ---------------------------- |
| protocol | 通信协议，如https/ftp/maito  |
| host     | 主机(域名)                   |
| port     | 端口，http的端口默认为80     |
| path     | 路径，表示主机上的目录或地址 |
| query    | 参数，以键值对形式通过&分隔  |
| fragment | 片段，#后多为链接/锚点       |
#### 属性
| location.href     | 获取或者设置整个URL          |
| ----------------- | ---------------------------- |
| location.host     | 返回主机(域名)               |
| location.port     | 返回端口号，未写返回空字符串 |
| location.pathname | 返回路径                     |
| location.search   | 返回参数                     |
| location.hash     | 返回片段                     |
#### 跳转到指定网页
`location.href='URL';`
#### 传递参数
利用提交的表单，`action="第二个页面"`，用`substr`和`split('')`读取`URL`中的`location.search`参数
##### 方法
- 跳转页面，记录浏览历史，可回退
  `location.assign('URL')`
- 跳转页面，不记录浏览历史，不可回退
  `location.replace('URL')`
- 刷新
  `location.reload(true/空或false)`
  - 空或`false`：刷新界面(F5)
  - `true`：强制刷新(Ctrl+F5)

### navigator对象
> 获取浏览器有关信息的对象
`userAgent`返回有个户籍发送服务器的`user-agent`头部的值
判断用户终端
```javascript
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|WOSBrowser|Browser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //Phone
    window.location.href = 'URL';
} else {
    //PC
    window.location.href = 'URL';
}

var ua = navigator.userAgent
let isMobile = false
let reg = RegExp(/mobile/i)
if (reg.test(ua.toString())) {
	isMobile = true
}
```