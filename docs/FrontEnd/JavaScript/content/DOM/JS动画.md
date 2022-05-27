### 动画函数
通常放入单独的`js`文件中
#### 原理
> 通过定时器`setInterval()`不断移动盒子位置
#### 步骤
1. 获取盒子的当前位置
2. 在盒子的当前位置加1个移动距离
3. 利用定时器不断重复
4. 加一个结束定时器的条件
**盒子需要添加定位才能使用**`element.style.left`
#### 线性动画封装
```javascript
function animate(obj, target) {
    clearInterval(obj,target);
    obj.timer = setInterval(function() {
        var step = 1;
        if (obj.offsetLeft >= target) {
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 10);
}
```
#### 缓动动画封装
```javascript
function animate(obj, target) {
    clearInterval(obj,target);
    obj.timer = setInterval(function() {
        var step = (target-obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil((target-obj.offsetLeft) / 10) : Math.floor((target-obj.offsetLeft) / 10)
        if (obj.offsetLeft >= target) {
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 10);
}
```
#### 添加回调函数
```javascript
function animate(obj, target, callback) {
    clearInterval(obj,target);
    obj.timer = setInterval(function() {
        var step = 1;
        if (obj.offsetLeft >= target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 10);
}
animate(element, 400, function(){})
```