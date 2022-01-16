# taro
> 京东开发维护的小程序框架组件，同时支持rn
## 快速开始
### 安装
```shell
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```
### 初始化
```shell
taro init myApp # 选择
cd myApp
npm install
```
### 多端同时编译
编辑`config/index.js`
```json
{
	//注意是``
	outputRoot: `dist/${process.env.TARO_ENV}`
}
```
