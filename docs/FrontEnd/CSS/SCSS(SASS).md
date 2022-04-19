#code-snippet 下划线动画
```scss
@mixin underline-anime($color) {

  position: relative;
  text-decoration: none !important;

  &:before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 0;
    right: 0;
    height: 3px;
    background: $color;
    transition: all .3s;
    border-radius: 4px;
    transform-origin: right;
  }

  &:hover:before {
    width: 100%;
    left: 0;
    transform-origin: left;
  }
}
.underline{@include underline-anime(#666)}
```
- 效果：[test](_temp/test.md)

### 变量
```scss
$i: 12
$percent: 12*1% //百分号作为值不能直接在选择器中使用
div.test-#{$i} { //选择器中使用变量需要用#{}包裹
	width: $percent
}
```

### 遍历
```scss
@for $a from 开始 to 结束 // [开始, 结束)
@for $b from 开始 through 结束 // [开始, 结束]
```





