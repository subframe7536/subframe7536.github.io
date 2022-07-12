## 安装
jetbrains插件市场搜索`jrebel`
## 激活
### 搭建服务器
1. 一台云服务器
2. 安装java、maven、docker
### 运行服务
```shell
git clone https://gitee.com/ek-plugs/jrebel-server.git
cd jrebel-server
mvn package
docker build -t qierkang/jrebel-server .
docker run -d --name jrebel-server --restart always -e PORT=9001 -p 9001:9001 qierkang/jrebel-server
ps -ef | grep java
```
或者直接用现成的，但有广告
```shell
# 下载代理镜像
$ docker pull qierkang/golang-reverseproxy
# 启动代理容器
$ docker run --restart=always -dit --name=jreber -p 8888:8888 qierkang/golang-reverseproxy
# 验证容器是否启动成功
$ docker ps
# 验证,有返回一大堆广告就是成功了
$ curl http://localhost:8888
```
有9001就行
#### 注意
记得开放9001端口
### 使用
验证选择 Team URL
是指为公网ip:9001/guid ([生成地址](https://www.guidgen.com/))
#### 样例
别人搭的服务器，可直接用
- 地址：http://jrebel.yanjiayu.cn:9001/f9adc39c-880f-4452-8bca-ea6198520d82
- 邮箱：任意邮箱
