# 实验5
<center>2019212212014 宋博帆</center>

## 第一题
请将下面2张图片以 `jpg` 和 `png` 格式进行压缩，并且对比最终的大小。
![[Pasted image 20220323184409.png]]
png格式的图片大小远大于jpg
`15.jpg`的色彩位深度比`16.jpg`大，所以转换成`png`时，`15.png`的图像大小比`16.png`大
## 第二题
将[某公司的主页页面](https://mooc.hznu.edu.cn/proj/mobile/demo.zip)，通过`文字压缩`、`减少HTTP请求`和`压缩图片`的方法，对比采用每一种方法后，蓝线`DOMContentLoaded`和红线`Load`的数值，并且对比标准情况来说明`优化性能提升的多少`以及`为什么性能得到提升`。
### 原始页面
![[Pasted image 20220323185204.png]]
- dom加载时间：203ms
- 总共加载时间：1.40s
### 改变图片格式
将图片格式修改为`webp`
![[Pasted image 20220323185958.png]]
- dom加载时间：196ms
- 总共加载时间：883ms
### 压缩css、js
![[Pasted image 20220323191506.png]]
- dom加载时间：180ms
- 总共加载时间：791ms
### 减少http请求

将`<link href="https://fonts.googleapis.com...`的内容点开，发现是大量的`@font-face`，选取使用的`Open Sans latin-ext`，于是减少了大量时间
![[Pasted image 20220323192209.png]]
- dom加载时间：189ms
- 总共加载时间：258ms