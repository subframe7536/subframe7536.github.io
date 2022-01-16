# Cookie
必须写在`<html>`前
### 设置cookie
`setcookie(name,value,expire,path,domain,secure)`

| 参数   | 描述                                               |
| ------ | -------------------------------------------------- |
| name   | 必需。规定 cookie 的名称。                         |
| value  | 必需。规定 cookie 的值。                           |
| expire | 可选。规定 cookie 的有效期。                       |
| path   | 可选。规定 cookie 的服务器路径。                   |
| domain | 可选。规定 cookie 的域名。                         |
| secure | 可选。规定是否通过安全的 HTTPS 连接来传输 cookie。 |
### 获取cookie
`$_COOKIE['cookieName']`
### 判断是否有cookie
即判断cookie是否过期
`isset($_COOKIE['cookieName'])`
# Session
必须写在`<html>`前
### 新建session
`session_start();`
### 设置&修改session
`$_SESSION['sessionName']=value;`
### 释放/销毁session
#### 释放
`unset($_SESSION['sessionName']);`
#### 销毁
`session_destroy();`