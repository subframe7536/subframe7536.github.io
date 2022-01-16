### 获取 css
```js
$('selector').css('property');
```
### 设置 css
```js
$('selector').css({ 
	'property1': 'value1',
	'property2': 'value2' 
});
```
### 删除 css
```js
$('selector').css('property','');
```
### 是否包含 css
```js
$('selector').hasClass('className')
```
## 添加 html 属性
```js
$('selector').attr({
	src: '...',
	class: '...'
})
```