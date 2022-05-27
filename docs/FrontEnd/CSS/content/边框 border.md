### 边框border
#### 上下左右边框分开写法
```
border-top/bottom/left/right-width/style/color
```
#### 分开写法
```css
border-color: #000;
border-style: none;
border-width: 2px;
```
#### 边框样式
| 样式   | 解释                                                   |
| ------ | ------------------------------------------------------ |
| none   | 无边框                                                 |
| hidden | 隐藏边框                                               |
| dotted | 点线                                                   |
| dashed | 虚线                                                   |
| **solid**  | 实线边框                                               |
| double | 双线边框，两条单线与其间隔的和等于指定的border-width值 |
| groove | 根据border-color的值画3D凹槽                           |
| ridge  | 根据border-color的值画菱形边框                         |
| inset  | 根据border-color的值画3D凹边                           |
| outset | 根据border-color的值画3D凸边                           |
#### 复合写法
```css
border: border-width border-style border-color
```
三个属性可以无序
#### 圆角边框
```css
border-radius: 长度/百分比;
border-radius: 左上&右下 右上&左上;
border-radius: 左上 右上 右下 左下;
border-top-left-radius: 长度;
```
#### 边框合并
边框会导致盒子大小变化
```css
border-collapse：collapse
```
##### 细框表格
```css
table，th，td{
  border-collapse：collapse
}
```