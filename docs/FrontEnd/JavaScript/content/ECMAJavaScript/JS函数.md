### 函数
```JavaScript
function functionName(p1, p2...) {
	/**/
}
```
- `argument`：伪数组，存放函数内的参数，不必在括号内声明
#### 封装函数(ES6)
```JavaScript
const functionName = (e) => { 
	return ... 
}
```
#### ES6剩余参数
除了设置好的参数之外的参数数组
```js
const functioncationName = (a, ...arg) => {
	console.log(arg)
}
```