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
### nrm
> 管理npm镜像源地址的工具
#### nrm ls
查看所有npm镜像源的地址
#### nrm use taobao
使用taobao镜像源
#### nrm current
查看当前npm镜像源地址
#### 报错
```shell
internal/validators.js:124
    throw new ERR_INVALID_ARG_TYPE(name, 'string', value);
    ^

[TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
  at validateString (internal/validators.js:124:11)
  at Object.<anonymous> (C:\Users\subframe7536\AppData\Roaming\npm\node_modules\nrm\cli.js:17:20)
  at Module._compile (internal/modules/cjs/loader.js:1063:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
  at Module.load (internal/modules/cjs/loader.js:928:32)
  at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
  at internal/main/run_main_module.js:17:47
] {
  code: 'ERR_INVALID_ARG_TYPE'
}
```
##### 解决方法
修改上述地址文件第17行
改为
```js
const NRMRC = path.join(process.env[(process.platform == 'win32') 
?'USERPROFILE' : 'HOME'], '.nrmrc');
```
### cnpm
> 中国npm镜像的客户端
#### 安装
```shell 
npm install cnpm -g --registry=https://registry.npm.taobao.org
```
### pnpm
进阶，优化很多，但有些bug
### Express
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