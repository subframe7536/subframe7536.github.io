### 改变元素内容
- 不识别`html`标签，去除空格和换行，直接显示所有文字
  `element.innerText='text'`
- W3C 标准，识别 html 标签，保留空格和换行
  `element.innerHTML='text';`
- 返回 text，格式同上
  `element.innerText/innerHTML`
### 改变类名
#### 添加/删除类名
 `element.classList.add('className')`
 `element.classList.remove('className')`
#### 设置类名 (覆盖)
 `element.className=ClassName`
### 窗口大小
- 改变窗口大小
`window.resizeTo(width,height)`
- 可用的屏幕宽度
`screen.availWidth`
- 可用的屏幕高度
`screen.availHeight`
### 改变样式
#### 获取样式
```js
element.style.property
```
 #### 获取所有样式 (包括外联 css)
```js
 window.getComputedStyle(element, PseudoElements)
 .getPropertyValue(property)
```
#### 改变元素样式
```js
element.style.setProperty(property,value)
```
#### 添加 css 表单
```js
document.styleSheets[0].insertRule('selector{property:value}', 0);
document.styleSheets[0].addRule('selector','property:value', 0);
```
#### 改变表单属性
`type`、`value`、`checked`、`selected`、`disabled`
表单的值是通过`value`修改的
下拉表单的选中：`name.selectedIndex`
`button`的内容是通过`innerHtml`修改的
#### 自定义属性
##### 获得
`element.getAttribute('property')`
##### 设置
`element.setAttribute('property', 'value')`
##### 自定义属性的规范
`data-propertyName='value'`
获取：`element.getAttribute('data-property');` 
### 跳转网页
#### 当前页面跳转
`window.location.assign('url');`
#### 新建标签跳转
`window.open('url');`