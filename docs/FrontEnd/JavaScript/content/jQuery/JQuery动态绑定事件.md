```js
$('selector').on('event','childSelector',data,function(){})
```
| 参数          | 描述                                                                                                           |
|:------------- |:-------------------------------------------------------------------------------------------------------------- |
| event         | 必需。规定要从被选元素添加的一个或多个事件或命名空间。  由空格分隔多个事件值，也可以是数组。必须是有效的事件。 |
| childSelector | 可选。规定只能添加到指定的子元素上的事件处理程序（且不是选择器本身，比如已废弃的 delegate() 方法）。           |
| data          | 可选。规定传递到函数的额外数据。                                                                               |
| function      | 可选。规定当事件发生时运行的函数。                                                                             |
```js
$('.main').on('click', 'div', () => {//动态获取元素
    var $big = $(this).clone();
	$('.main').append($big);
})
```
- `$('selector')`选择的元素必须是`dom`生成的时候就有的