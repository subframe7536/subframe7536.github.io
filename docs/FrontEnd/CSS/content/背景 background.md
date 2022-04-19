## 背景
### 背景颜色
```css
background-color: rgb(xx,xx,xx)/transparent透明
```
### 背景图片
图片在颜色上方
```css
background-image: none/url('pictureURL')
```
### 背景平铺
```css
background-repeat: repeat/no-repeat/repeat-x(横向)/repeat-y(纵向)
```
### 背景图片位置
```css
background-position: x y;
```
- x,y为方位名词或者精确数值， 可以混用
方位名词：`left`,`right`,`center`,`top`,`bottom`
方位名词与顺序无关，只写一个另一个默认居中
精确数值只写了一个值，那个值为x的值
### 背景图像固定
默认为scroll滚动
```css
background-attachment: scroll/fixed;
```
### 背景复合写法
```css
background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图像位置;
```
### 背景颜色半透明
```css
background-color: rgba(0，0，0，.3);
opacity: .3;/*不透明度*/
```