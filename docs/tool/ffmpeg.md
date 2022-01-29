# FFMPEG
> 音视频处理工具
- -y 覆盖同名文件
### 输出编码
#### 视频编码
```shell
-c:v copy # 复制源文件的视频编码
-c:v mpeg # 输出为MP4
```
#### 音频编码
```shell
-c:a copy # 复制源文件的视频编码
-c:a flac # 输出为flac
```
### 淡入淡出
```shell
ffmpeg -i 源文件 -filter_complex afade=t=out:st=开始减弱时间:d=减弱持续时间 输出文件
```
### 视频帧截取
```shell
ffmpeg -i 源文件 -ss 开始时间 -to 结束时间 -v 1 [-vframes 总帧数/-r 每秒截取帧数] %03d.png
```
`-v`不输入的话需要在执行过程中输入`+`
- verbosity=1
### 视频裁剪
-ss 开始时间 -to 结束时间
-ss 开始时间 -t 持续时间
```shell
ffmpeg -i 原始视频文件 -vcodec copy -acodec copy -ss 开始时间 -to 结束时间 处理后视频文件 -y
ffmpeg -ss 开始时间 -t 持续时间 -i 原始视频文件 -vcodec copy -acodec copy 处理后视频文件 -y
```
### 音视频提取
#### 音频提取
-vn
```shell
ffmpeg -i 原始视频文件 -acodec copy -vn 输出音频文件
```
#### 视频提取
-an
```shell
ffmpeg -i 原始视频文件 -acodec copy -an 输出视频文件
```
### 音视频合成
```shell
ffmpeg –i 原始视频文件 –i 原始音频文件 –vcodec copy –acodec copy 输出视频文件
```
### 水印去除
-vf delogo
```shell
ffmpeg -i 原始视频文件 -vf delogo=x:y:w:h 输出视频文件
```
- x,y为距左上角坐标，w,h为水印的宽度和高度
### 视频拼接
-f concat
```shell
ffmpeg -f concat -i filelist.txt -c copy 输出视频文件
```
```text
file ./视频1
file ./视频2
```
### 画面裁剪
-vf
```shell
# 截取部分视频，从[80,60]的位置开始，截取宽200，高100的视频
ffmpeg -i 原始视频文件 -vf "crop=80:60:200:100" -c:a 输出视频文件
# 截取右下角的四分之一
ffmpeg -i 原始视频文件 -vf "crop=in_w/2:in_h/2:in_w/2:in_h/2" -c:a copy 输出视频文件
```
- `-vf = -filter:v`
### 精确裁剪
按照帧内编码，输出视频大小会比原视频大，但是可以精确裁剪
```shell
ffmpeg -i 原始视频文件 -strict -2 -qscale 0 -intra 输出视频文件
```
### 输出文件大小
-fs
```shell
ffmpeg -i 原始视频文件 -fs 1024K 输出视频文件
```
- 计算输出文件大小 
$(视频码率+音频码率) * 时长 /8 = 文件大小$