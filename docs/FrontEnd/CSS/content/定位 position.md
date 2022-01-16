### 定位模式
```css
position：static/relative/absolute/fixed;
```
| static   | 静态定位 |
| -------- | -------- |
| relative | 相对定位 |
| absolute | 绝对定位 |
| fixed    | 固定定位 |
| sticky   | 粘性定位 |
#### 静态定位static
```css
position：static;
```
- 标准流
#### 相对定位relative
```css
position：relative;
```
- 相对于原来的位置移动，原来的定位继续占有，不脱标
#### 绝对定位absolute
```css
position：absolute;
```
- 若没有父元素或者父元素未定位，则以浏览器为准定位
- 父元素有定位，则以最近一级父元素为准定位
绝对定位不占用原先的定位(脱标)
##### 左右居中
```css
.change {
    position: absolute;
    left: 50%;
    margin-left: [元素本身长度]/-2;
}
```
### 子绝父相
> 子元素是绝对定位，父元素要相对定位
绝对定位的子元素可以任意摆放，不占用其他盒子的地方
#### 固定定位
```css
position：fixed;
```
以浏览器的可视窗口为准定位，不随滚动条滚动，不占用位置，一般用于侧边栏
#### 粘性定位
```css
position：sticky;
top/bottom/left/right：20px;/*必须写，否则当相对定位使用*/
```
到一定位置前随滚动条滚动，之后以可视窗口为准定位，占有原先的位置
具体应用：导航栏
- IE不支持