#code-snippet 按钮覆盖动画
```scss
 @mixin mul-transition($attrs) {                                     
     transition-property: $attrs;                                    
     transition-duration: 0.3s;                                      
     transition-timing-function: ease-in-out;                        
 }                                                                   
 @mixin hover-anime($color) {                                    
     $transition: color, box-shadow;                                                    
     position: relative;                                             
     @include mul-transition($transition);                           
     border-radius: 4px;                                             
     padding: 0 2px;                                                 
     border: 2px solid $color;                                       
     box-shadow: 1px 1px 4px #00000045, -1px -1px 4px #ffffff45;     
     &,                                                              
     & * {                                                           
         z-index: 1;                                                 
     }                                                               
     &:before {                                                      
         content: '';                                                
         position: absolute;                                         
         bottom: -2px;                                               
         width: 0;                                                   
         right: -2px;                                                
         height: calc(100% + 4px);                                   
         background: $color;                                         
         transition: all 0.3s;                                       
         border-radius: 4px;                                         
         transform-origin: right;                                    
         z-index: -1;                                                
     }                                                               
     &:hover {                                                       
         color: var(--background-primary) !important;                
         @include mul-transition($transition);                       
         box-shadow: 3px 3px 6px #00000045, -3px -3px 6px #ffffff45; 
         &:before {                                                  
             width: calc(100% + 4px);                                
             left: -2px;                                             
             transform-origin: left;                                 
         }                                                           
     }                                                               
 }                                                                                                                 
.underline{@include hover-anime(#666)}
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





