## module proxy
[goproxy.cn/README.zh-CN.md at master · goproxy/goproxy.cn (github.com)](https://github.com/goproxy/goproxy.cn/blob/master/README.zh-CN.md)
```shell
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```
## 打包
### 最小体积
```shell
go -ldflags="-s -w" main.go
```