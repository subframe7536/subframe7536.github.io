### DOM对象转jquery对象
```js
var a = document.querySelector('selector');
var b = $(a);//b为jquery对象
```
### jquery对象转DOM对象
```js
//利用数组
var $a = $('selector');
var b = $a[0];//b为DOM对象

//利用get()
var $a = $('selector');
var b = $a.get(0);//b为DOM对象
```
