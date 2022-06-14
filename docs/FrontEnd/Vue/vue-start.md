# Vue
> a) MVVM的开发模式，从dom中解脱出来，双向数据绑定
> b) 数据更新采用异步事件机制
> c) 采用单向数据流
> d) 组件式开发
> e) 采用虚拟dom
> f) 支持模板和jsx两种开发模式
> g) 可以进行服务端渲染
> h) 扩展性强，既可以向上又可以向下扩展

## 快速开始
### 全局安装  
```shell
npm install –g vue-cli @vue/cli-init
```
### 创建项目  **
#### 使用webpack
```shell
vue init webpack myproject
```
### 安装依赖包  
```shell
npm install
```
## 语法
[vue笔记整理与总结 - SegmentFault 思否](https://segmentfault.com/a/1190000019162582)

## 注意
- 数据加载完再渲染页面，可以用`v-if`，初始为`false`，刷新完改为`true`
	- 或者`watch` #todo 
- `v-for`需要配合`:key`
	- 推荐写法：`v-for="(data,index) in datas" :key="index"`

### props

- type (规定数据类型) 
	- String 字符串
	- Number 数字
	- Boolean 布尔
	- Array 数组 
	- Object 对象
	- Date 日期
	- Function 函数
	- Symbol 独一无二的值(es6)
- default
	- default : (默认值)
	- 基础数据类型: 直接赋值
	- 对象数据类型: 用函数赋值 `()=>[]`
- required
	- required: (必填项)
	- 默认为false,说明父级必须传入,否则会报错
- validator
	- validator: 校验(验证传入的值是否符合规定)
# element-ui
### 样式穿透
像`el-input`无法对内部的`input`修改，通过`::v-deep`或`:(deep)`修改
```scss
.address-input ::v-deep .el-input__inner
```
### 输入框自动补全
`callback`的参数格式必须是包含`value`（读取的是`value`）
```js
{
	value: '',
	infos: ……
}
```
https://blog.csdn.net/webfullstack/article/details/83989895
# vuex
`this.$store.dispatch()`
https://blog.csdn.net/weixin_42554191/article/details/105741120

# Vue3
https://juejin.cn/post/7028137821269393438