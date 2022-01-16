# 下载
```JavaScript
<script type="text/javascript" src="//leytton.gitee.io/simjq/releases/simJQ-2.2.min.js"></script>
```
### 下载地址
[下载](https://leytton.gitee.io/simjq)
# 使用
同`jQuery`语法，精简很多
### 修改
- 原本的`css()`无法读取外部样式表的属性
```javascript
$s.fn.css = function (key, value, important) { return null != value ? this.each((function () { this.style.setProperty(key, value, important) })) : this.each((function () { return window.getComputedStyle(this).getPropertyValue(key) }), 1) }
```
### 缺少
`animate()`
`toggle()`
`then()`