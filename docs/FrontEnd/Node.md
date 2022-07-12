# NodeJS-start
## 安装
### 报错
控制台运行npm指令时遇到报错信息：“因为在此系统上禁止运行脚本”
#### 解决方法
1. 管理员身份运行`powershell`
2. 输入命令`set-ExecutionPolicy RemoteSigned`，更改执行策略
3. 输入命令`get-ExecutionPolicy`，查看是否成功
## 包管理
### npm
全局安装
```shell
npm i -g 
``` 
#### 设置镜像源
```shell
npm config set registry https://registry.npm.taobao.org
```

#### savedev
[--save和--save-dev](https://zhuanlan.zhihu.com/p/215887185)
### cnpm
> 中国npm镜像的客户端
#### 安装
```shell 
npm install cnpm -g --registry=https://registry.npm.taobao.org
```
### pnpm
进阶，优化很多
### Express/koa
#### 安装
```shell
npm install express express-static --save
```
#### 使用
```js
//1.引入express和express-static模块
const express = require("express");
const expressStatic = requier("express-static");
//2. 创建服务器
let app = express();
//3. 指定文件夹
//浏览器可以浏览当前文件目录下的'「www」文件夹
app.use(expressStatic(__dirname + '/www'));
//4. 服务器监听
app.listen(8080);
```
## cors
```js
app.use('*',(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Credential','true');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    next();
});
```

`child_process spawn`
`through`
[fs stream](http://t.zoukankan.com/Walker-lyl-p-7249625.html)
[fs-jetpack](https://github.com/szwacz/fs-jetpack)