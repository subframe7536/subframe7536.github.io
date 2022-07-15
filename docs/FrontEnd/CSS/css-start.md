# CSS-start
> CSS指层叠样式表(Cascading Style Sheets)，主要用于设置HTML页面中的文本内容（字体、大小、对齐方式等）、图片的外形（宽高、边框样式、边距等）以及版面的布局等外观显示样式。

[[CSS引入方式]]
[[选择器]]
[[元素显示模式 display]]
[[flex布局]]
[[字体属性]]
[[文本属性]]
[[背景 background]]
[[盒子模型 padding+margin+border]]
[[浮动&位置 float+position]]
[[切换是否显示]]
[[精灵图(过时)]]
[[字体图标 iconfont]]
[[三角形]]
[[鼠标&光标样式]]
[[滚动条样式]]
[[表单属性]]
[[渐变色]]
[[CSS函数]]
[[动画过渡 transition]]
[[2D3D转换 transform]]
[[浏览器前缀]]
[[初始化]]
[[有用的片段]]
## CSS三大特性
### 层叠性
样式冲突，后面的样式覆盖
### 继承性
子标签会继承父标签的某些样式
如文本颜色和字号
### 优先级
样式按照选择器权重优先显示

| 选择器                       | 优先级 |
| ---------------------------- | ------ |
| 继承或通配符选择器*          | 0      |
| 元素选择器                   | 1      |
| 类选择器.class或伪类选择器:a | 10     |
| ID选择器#id                  | 100    |
| 行内样式style=""             | 1000   |
| !important(写在属性值后)     | 无穷   |
复合选择器权重相加
**继承的权重永远为0**
## 深色模式
https://www.cnblogs.com/guangzan/p/13524990.html
## 注意
1. `z-index`只在`position:absolute`时生效

# LESS
[[LESS]]
[[SCSS(SASS)]]


[lazyload](https://blog.csdn.net/liuyan19891230/article/details/125230290)

父元素`scroll-snap-type: y mandatory;` #todo
子元素`scroll-snap-align:center`




