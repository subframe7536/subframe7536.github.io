### 元素偏移量offset
> 动态获得==元素位置==、元素大小
==获得==元素距离带有定位的父元素的远近，获得元素自身的大小(宽高)
返回的数值不带单位

| 属性                 | 作用                                                 |
| -------------------- | ---------------------------------------------------- |
| Element.offsetParent | 返回作为该元素的带有定位的父元素的位置，没有返回body |
| Element.offsetTop    | 返回元素相对带有定位的父元素的位置上方的偏移         |
| Element.offsetLeft   | 返回元素相对带有定位的父元素的位置左边框的偏移       |
| Element.offsetWidth  | 返回padding+border+width                             |
| Element.offsetHeight | 返回padding+border+height                            |
#### offset与style的区别和使用推荐
1. `offset`可以得到任意样式表中的样式值
   `style`只能得到行内样式表中的样式值
2. `offset`获得的数值是没有单位的
   `style`获得的是带有单位的字符串
3. `offsetWidth`返回`padding+border+width`
   `style.width`返回`width`
4. `offset`获取的属性为只读
   `style`获取的属性为可读写
- 获取元素大小位置用`offset`
- 更改元素的值用`style`

### 元素可视区client
> 动态获得元素边框大小、==元素大小==

| 属性                 | 作用                         |
| -------------------- | ---------------------------- |
| Element.clientTop    | 返回元素上边框大小           |
| Element.clientLeft   | 返回元素左边框大小           |
| Element.clientWidth  | 返回padding+width，不带数值  |
| Element.clientHeight | 返回padding+height，不带数值 |
后两个属性使用较多
### 立即执行函数
不需要调用立即执行的函数
作用：独立创建了一个作用域，都是局部变量，不会命名冲突
```javascript
(function functionName(parameters){})(parameters);
(function functionName(parameter){}(parameter));
```
常用：`(function Name(window, document){}(window, document))`
### 适配不同设备
#### 物理像素比dpi
不同设备`dpi`不同，字体大小需要改为`currentFontSize - dpi`
```javascript
var dpr = window.devicePixelRatio || 1;
//adjust body font size
function setBodyFontSize() {
    if (document.body) {
        document.body.style.fontSize = (12 - dpr) + 'px';
    } else {//set size after loading the body
        document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
}
```
#### 设置rem
`rem`能够适应各种设备不同的字体显示比例
```javascript
function setRemUnit() {
    var rem = document.documentElement.clientWidth / 10;
    document.documentElement.style.fontSize = rem + 'px';
}
//reset rem on page resize
window.addEventListener('resize', setRemUnit)
window.addEventListener('pageshow', function(e) {
    if (e.persisted){//already stored in the memory
        setRemUnit()
    }
})
```
`pageshow`：强制刷新页面，无视火狐浏览器缓存在内存中的网页
### 元素滚动scroll
> 动态获得元素的大小、==滚动距离==

| 属性                 | 作用                                                 |
| -------------------- | ---------------------------------------------------- |
| Element.scrollTop    | 返回被卷去的上方距离，返回数值不带单位               |
| Element.scrollLeft   | 返回被卷去的左侧距离，返回数值不带单位               |
| Element.scrollWidth  | 返回实际内容的width+padding，包括被隐藏的，不带单位  |
| Element.scrollHeight | 返回实际内容的height+padding，包括被隐藏的，不带单位 |
`window.pageYOffset`返回页面被卷去的面积
