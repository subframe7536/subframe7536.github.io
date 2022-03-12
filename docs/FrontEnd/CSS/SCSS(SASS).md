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





