# 下载
[Move.js](http://visionmedia.github.io/move.js/)

# 使用
### 基本
```JavaScript
move(selector).set(prop, val)
```
### Move#set(prop, val)
- 设置属性
```JavaScript
move('#example-1 .box')
  	.set('margin-left', 200)
  	.end();
```
### Move#add(prop, val)
- 增加属性值
```JavaScript	  
move('#example-2 .box')
	.add('margin-left', 200)
	.end();
``` 
### Move#sub(prop, val)
- 减去属性值
```JavaScript
  move('#example-3 .box')
	.sub('margin-left', 100)
  	.end();
``` 
### Move#rotate(deg)
- 旋转
```JavaScript
move('#example-4 .box')
  .rotate(140)
  .end();
```
### Move#duration(n)
- 动画时间
```JavaScript
move('#example-5 .box')
  .set('background-color', 'blue')
  .duration('2s')
  .end();
``` 
### Move#translate(x[, y])
- 移动到`(x,y)`
```JavaScript
move('#example-6 .box')
  .translate(300, 80)
  .end();
```        
### Move#x(n)/Move#y(n)
- x轴/y轴移动
```JavaScript
move('#example-7 .box')
  .x(300)
  .y(20)
  .end();
``` 
### Move#skew(x[, y])
- x轴/y轴倾斜百分比
```JavaScript
move('#example-8 .box')
  .x(300)
  .skew(50)
  .set('height', 20)
  .end();
``` 
### Move#scale(x[, y])
- 放大
```JavaScript
move('#example-9 .box')
  .scale(3)
  .end();
```
### Move#ease(fn)
- 运动加速度
```JavaScript
move('#example-10 .box1').x(400).end();
move('#example-10 .box2').ease('in').x(400).end();
move('#example-10 .box3').ease('out').x(400).end();
move('#example-10 .box4').ease('in-out').x(400).end();
move('#example-10 .box5').ease('snap').x(400).end();
move('#example-10 .box6').ease('cubic-bezier(0,1,1,0)').x(400).end();

setTimeout(function(){
  move('#example-10 .box1').x(0).end();
  move('#example-10 .box2').x(0).end();
  move('#example-10 .box3').x(0).end();
  move('#example-10 .box4').x(0).end();
  move('#example-10 .box5').x(0).end();
  move('#example-10 .box6').x(0).end();
}, 1200);
```
### Move#end([fn])
- 动画完成的回调函数
```JavaScript
move('#example-11 .box')
  .set('background-color', 'red')
  .duration(1000)
  .end(function(){
    move('#example-11 .box')
      .set('background-color', 'white')
      .end();
  });
``` 
### Move#delay(n)
- 延迟时间执行
```JavaScript
move('#example-12 .box')
  .set('background-color', 'blue')
  .delay('2s')
  .end();
``` 
### Move#then([fn])
- 动画结束后调用
```JavaScript
var moveBack = move('#example-13 .box')
  .set('background-color', 'white')
  .x(0);

move('#example-13 .box')
  .set('background-color', 'red')
  .x(500)
  .then(moveBack)
  .end();

move('#example-13 .box2')
  .set('background-color', 'red')
  .x(500)
  .scale(.5)
  .rotate(60)
    .then()
      .rotate(30)
      .scale(1.5)
      .set('border-radius', 5)
      .set('background-color', 'white')
      .then()
        .set('opacity', 0)
        .pop()
      .pop()
  .end();
```
### move.select(selector)
- This function is used throughout move to select elements. For example if we wanted to utilize jQuery, we could re-define this function as shown below.
```JavaScript
move.select = function(selector){
  return $(selector).get(0);
};
``` 
### move.defaults
- 设置默认参数
```JavaScript
move.defaults = {
  duration: 500
};
``` 
