### Fading 
-   `$('selector').fadeIn(speed,callback)`：淡入已隐藏的元素
-   `$('selector').fadeOut(speed,callback)`：淡出可见元素
-   `$('selector').fadeToggle(speed,callback)`：可以在 fadeIn() 与 fadeOut() 方法之间进行切换
-   `$('selector').fadeTo(speed,opacity,callback)`：允许渐变为给定的不透明度（值介于 0 与 1 之间）
```js
$("button").click(function(){
  $("#div3").fadeIn(3000);
  $("#div1").fadeTo("slow",0.15);
});
```
### slide
- `$('selector').slideDown(speed,callback)`:用于向下滑动元素
- `$('selector').slideUp(speed,callback)`:用于向上滑动元素
- `$('selector').slideToggle(speed,callback)`:可以在 slideDown() 与 slideUp() 方法之间进行切换
```js
$("#flip").click(function(){
  $("#panel").slideDown();
});
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```
### animate
jQuery `animate()` 方法用于创建自定义动画。
```js
$('selector').animate({params},speed,callback);
```
- 必需的 `params` 参数定义形成动画的 CSS 属性。
- 可选的 `speed` 参数规定效果的时长。它可以取以下值：`slow` 、`fast` 或 `毫秒`。
- 可选的 `callback` 参数是动画完成后所执行的函数名称。
```js
$("button").click(function(){
  $("div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
}); 
```
### 停止动画
`stop()`方法用于在动画完成之前,停止动画。`stop()` 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。
```js
$(selector).stop(stopAll,goToEnd)

$("#stop").click(function(){
  $("#panel").stop();
});
```
### Callback 函数
```js
$(selector).hide(speed,callback)
```
-   动画函数将`speed`或`duration`作为可选参数;由于 JavaScript 语句（指令）是逐一执行的,按照次序动画之后的语句可能会产生错误或页面冲突，因为动画还没有完成。
-   为了避免这个情况，可以以参数的形式添加 `Callback` 函数。
-   当动画 100% 完成后，即调用 `Callback` 函数。
```js
//错误（没有 callback）
$("p").hide(1000);
  alert("The paragraph is now hidden");
});
//正确（有 callback）
$("p").hide(1000,function(){
alert("The paragraph is now hidden");
});
```