## 2D转换
### 移动translate
> 不影响其他元素，只对块级元素生效
```css
transform: translate(x,y);
transform: translateX(n);
transform: translateY(n);
```
数值为百分比时，移动的是自身的宽/高的百分比
### 居中：
```css
p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
```
### 旋转rotate
```css
transform: rotate(20deg);
```
角度为+，顺时针
### 2D转换中心点
```css
transform-origin: x y;
```
默认为50%，50%
可以设置为像素或者方位名词
### 缩放scale
```css
transform: scale(x,y); 
```
x,y: 宽高，>1放大，<1缩小，只写x等于y=x，可以设置中心点缩放
### 总和写法：
```css
transform: translate(x,y) rotate(deg) scale(x,y);
```
顺序会影响转换效果(旋转会改变坐标轴方向)
先位移再其他
## 3D转换
> 近大远小、遮挡不可见
z轴往外为+，用px为单位
### 旋转法则
左手法则，大拇指为正方向，四指为旋转正方向
### 位移
``` css
translform:translateX(x);
translform:translateY(y);
translform:transateZ(z);
transform:translate3d(x,y,z);
```
不能省略，没有就写0
### 旋转
```css
transform: rotateX(deg);
transform: rotateY(deg);
transform: rotateZ(deg);
transform: rotate3d(x,y,z,deg);
```
### 透视
写在被观察元素的父盒子上
```css
perspective: 20px;
```
数值越小，距离越近，元素越大
### 呈现
> 控制是否开启3D立体环境
代码写给父盒子，但是影响的是子盒子
```css
transform-style: flat(默认,不开启)/preserve-3d;
```