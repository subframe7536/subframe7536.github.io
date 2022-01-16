### 禁用右键
`document.addEventListener('contextmenu',function(e){e.preventDefalut();})`
### 禁用选中
`document.addEventListener('selectstart',function(e){e.preventDefalut();})`
### 阻止链接跳转
```javascript
herf="javascript:void(0);"
herf="javascript:;"
```
### 返回顶部
```javascript
href="javascript:scroll(0,0);"
```