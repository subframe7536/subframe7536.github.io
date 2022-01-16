## flex布局
> 自动根据父元素大小进行子元素的宽高、位置的分配。将父元素分为main axis和cross axis，根据这两个轴进行分配空间
### 使用(父对象)
```css
display: flex;
```
#### 主轴方向 flex-dirction
元素按照主轴方向进行排列，默认为从左到右。元素只占用当前的空间
```css
flex-dirction: row/row-reverse/column/column-reverse
```
#### 换行 flex-wrap
元素无法一行无法排完，默认进行宽度压缩。这个方法可以将元素进行换行。行高默认为父元素的一半，未设置则依次排列
```css
flex-wrap: nowrap/wrap/wrap-reverse
```
#### 主轴对齐方向 justify-content
元素在主轴方向的对齐方式
```css
justify-content: flex-start/flex-end/center/space-between/space-around
```
- 左对齐 / 右对齐 / 居中对齐 / 前后顶格均匀分布 / 前后不顶格均匀分布
#### 交叉轴对齐方向 align-items
元素在交叉轴方向的对齐方式
```css
align-items:flex-start/flex-end/center/scretch/baseline
```
- 上对齐 / 下对齐 / 居中对齐 / 拉伸所有无高度元素 / 文本底部对齐
#### 多轴对齐方式 align-content
元素在多条轴方向的对齐方式
```css
align-content: flex-start/flex-end/center
			   /stretch/space-between/space-around
```
- 同上理解
### 子元素属性
#### 排列顺序 order
数值越小显示位置越靠起点
```css
order: num; /*default 0*/
```
#### flex属性
flex属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。该属性有两个快捷值：`auto` (1 1 auto) 和 `none (0 0 auto)
```css
  flex: none/flex-grow flex-shrink flex-basis
```
##### 放大比例 flex-grow
`flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的 `flex-grow` 属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
```css
flex-grow: num; /* default 0 */
```
##### 缩小比例 flex-shrink
默认为1，即如果空间不足，该项目将缩小。如果所有项目的 `flex-shrink` 属性都为1，当空间不足时，都将等比例缩小。如果一个项目的 `flex-shrink` 属性为0，其他项目都为1，则空间不足时，前者不缩小。
```css
  flex-shrink: num; /* default 1 */
```
##### 占据大小 flex-basis
在分配多余空间之前，项目占据的主轴空间`main size`。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。
```css
  flex-basis: length/auto; /* default auto */
```

#### align-self属性
`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
```css
  align-self: auto/flex-start/flex-end/center/baseline/stretch;
```