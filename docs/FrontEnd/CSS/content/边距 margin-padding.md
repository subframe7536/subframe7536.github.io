### 内边距padding
`padding`会导致盒子大小变化
未指定宽高，padding导致盒子大小变化
```css
padding-left/right/top/bottom: 20px;
```
#### 复合写法
| padding：5px                | 上下左右都是5px               |
| --------------------------- | ----------------------------- |
| padding：5px 10px           | 上下5px，左右10px             |
| padding：5px 10px 20px      | 上5px，左右10px 下20px        |
| padding：5px 10px 20px 30px | 上5px，右10px，下20px，左30px |
### 外边距margin
```css
margin-left/right/top/bottom: 20px;
```
#### 块级元素水平居中
盒子设`width`&&左右外边距`auto`
#### 行内元素水平居中
给父元素添加 `text-align：center;`
#### margin合并
非嵌套关系的块元素上下`margin`取`max`显示外边距
嵌套关系的无边框块元素，外`margin`>内`margin`，内`margin`上下为0，外`margin`不变 
解决：`overflow：hidden(溢出隐藏)`
#### 复合写法
| margin：5px                | 上下左右都是5px               |
| -------------------------- | ----------------------------- |
| margin：5px 10px           | 上下5px，左右10px             |
| margin：5px 10px 20px      | 上5px，左右10px 下20px        |
| margin：5px 10px 20px 30px | 上5px，右10px，下20px，左30px |
#### 清除内外边距
每个元素不同浏览器的默认内外边距可能不同，显示会有差异
```css
* {
  margin: 0;
  padding: 0;
}
```