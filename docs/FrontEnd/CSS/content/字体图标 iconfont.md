## 字体图标
图标，但是可以调整大小颜色等属性，和字体一样
[阿里iconfont网站](https://www.iconfont.cn/) -> 我的项目 -> 下载打包好的图标 -> 解压到项目文件夹
```css
@font-face{font-family:'name';font-size/font-style/src:url()...}
```
使用字体时直接引用`font-family:'name';`
### 使用方法(`font-class`引用)
1. 引入项目下面生成的`fontclass`代码：
```css
<link rel="stylesheet" href="./iconfont.css">
```
2. 挑选相应图标并获取类名，应用于页面：
```css
<span class="iconfont icon-xxx"></span>
```
### 样例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Iconfont/iconfont.css">
</head>
<body>
    <i class="iconfont icon-chufadihedidian"></i>
</body>
</html>
```
### 用于伪元素时(unicode+font-class)
设置`content: "111"; font-family: iconfont;` 
111：unicode引用的代码，将`&#x`改为`\`