### location [=|~|~*|^~] /uri/ { … }

```nginx
location  = / {
  # 精确匹配 / ，主机名后面不能带任何字符串
  [ configuration A ] 
}
location  / {
  # 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求
  # 但是正则和最长字符串会优先匹配
  [ configuration B ] 
}
location /documents/ {
  # 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索
  # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
  [ configuration C ] 
}
location ~ /documents/Abc {
  # 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索
  # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
  [ configuration CC ] 
}
location ^~ /images/ {
  # 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。
  [ configuration D ] 
}
location ~* \.(gif|jpg|jpeg)$ {
  # 匹配所有以 gif,jpg或jpeg 结尾的请求
  # 然而，所有请求 /images/ 下的图片会被 config D 处理，因为 ^~ 到达不了这一条正则
  [ configuration E ] 
}
location /images/ {
  # 字符匹配到 /images/，继续往下，会发现 ^~ 存在
  [ configuration F ] 
}
location /images/abc {
  # 最长字符匹配到 /images/abc，继续往下，会发现 ^~ 存在
  # F与G的放置顺序是没有关系的
  [ configuration G ] 
}
location ~ /images/abc/ {
  # 只有去掉 config D 才有效：先最长匹配 config G 开头的地址，继续往下搜索，匹配到这一条正则，采用
    [ configuration H ] 
}
location ~* /js/.*/\.js
```

### 符号解释

- `=`    
开头表示精确匹配

- `^~`
开头表示url以某个常规字符串开头，理解为匹配url路径即可，nginx不对url做编码，因此请求为/static/20%/aa,可以被规则 ^$ /static/ /aa 匹配到

- `~`    
区分大小写的正则匹配

- `~*`    
不区分大小写的正则匹配

- `!~ !~*`   
区分大小写不匹配及不区分大小写不匹配的正则

- `/`    
通用匹配，任何请求都会匹配到

location = / {多个location配置的情况下匹配顺序为首先匹配 = 其次匹配 ^~ 其次是按文件中的顺序的正则匹配，最后是交给 / 通用匹配。 当匹配成功的时候，停止匹配，按当前匹配规则处理请求。
```nginx
location = / {
   #规则A
}
location = /login {
   #规则B
}
location ^~ /static/ {
   #规则C
}
location ~ \.(gif|jpg|png|js|css)$ {
   #规则D
}
location ~* \.png$ {
   #规则E
}
location !~ \.xhtml$ {
   #规则F
}
location !~* \.xhtml$ {
   #规则G
}
location / {
   #规则H
}
```

那么产生的效果如下：
访问根目录`/`， `比如http://localhost/` 将匹配规则A
访问 `http://localhost/login` 将匹配规则B，http://localhost/register 则匹配规则H
访问 `http://localhost/static/a.html` 将匹配规则C
访问 `http://localhost/a.gif, http://localhost/b.jpg` 将匹配规则D和规则E，但是规则D顺序优先，规则E不起作用，而`http://localhost/static/c.png` 则优先匹配到规则C
访问 `http://localhost/a.PNG` 则匹配规则E，而不会匹配规则D，因为规则E不区分大小写。
访问 `http://localhost/a.xhtml` 不会匹配规则F和规则G，http://localhost/a.XHTML不会匹配规则G，因为不区分大小写。规则F，规则G属于排除法，符合匹配规则但是不会匹配到，所以想想看实际应用中哪里会用到。
访问 `http://localhost/category/id/1111` 则最终匹配到规则H，因为以上规则都不匹配，这个时候应该是nginx转发请求给后端应用服务器，比如FastCGI（php），tomcat（jsp），nginx作为反向代理服务器存在。

所以实际使用中，个人觉得至少有三个匹配规则定义，如下：
直接匹配网站根，通过域名访问网站首页比较频繁，使用这个会加速处理，官网如是说。
这里是直接转发给后端应用服务器了，也可以是一个静态首页

第一个必选规则
```nginx
location = / {
	proxy_pass http://tomcat:8080/index
}
```
第二个必选规则是处理静态文件请求，这是nginx作为http服务器的强项
有两种配置模式，目录匹配或后缀匹配,任选其一或搭配使用
```nginx
location ^~ /static/ {
	root /webroot/static/;
}
```
第三个规则就是通用规则，用来转发动态请求到后端应用服务器
非静态文件请求就默认是动态请求，自己根据实际把握
毕竟目前的一些框架的流行，带.php,.jsp后缀的情况很少了
```nginx
location ~* .(gif|jpg|jpeg|png|css|js|ico)$ {
	root /webroot/res/;
}
```

```nginx
location / {
proxy_pass http://tomcat:8080/
}
```

### rewrite语法

rewrite功能就是，使用nginx提供的全局变量或自己设置的变量，结合正则表达式和标志位实现url重写以及重定向。rewrite只能放在server{},location{},if{}中，并且只能对域名后边的除去传递的参数外的字符串起作用，例如 `http://seanlook.com/a/we/index.php?id=1&u=str` 只对/a/we/index.php重写。语法`rewrite regex replacement [flag]`;

如果相对域名或参数字符串起作用，可以使用全局变量匹配，也可以使用proxy_pass反向代理。
表明看rewrite和location功能有点像，都能实现跳转，主要区别在于rewrite是在同一域名内更改获取资源的路径，而location是对一类路径做控制访问或反向代理，可以proxy_pass到其他机器。很多情况下rewrite也会写在location里，它们的执行顺序是：
执行server块的rewrite指令
执行location匹配
执行选定的location中的rewrite指令
如果其中某步URI被重写，则重新循环执行1-3，直到找到真实存在的文件；循环超过10次，则返回500 Internal Server Error错误。

```nginx
server {
    listen 80;
    server_name start.igrow.cn;
    index index.html index.php;
    root html;
    if ($http_host !~ "^star\.igrow\.cn$&quot {
        rewrite ^(.*) http://star.igrow.cn$1 redirect;
    }
}
```

### flag标志位

last – 基本上都用这个Flag。
break – 中止Rewirte，不在继续匹配
redirect – 返回临时重定向的HTTP状态302
permanent – 返回永久重定向的HTTP状态301

因为301和302不能简单的只返回状态码，还必须有重定向的URL，这就是return指令无法返回301,302的原因了。这里 last 和 break 区别有点难以理解：
last一般写在server和if中，而break一般使用在location中
last不终止重写后的url匹配，即新的url会再从server走一遍匹配流程，而break终止重写后的匹配
break和last都能组织继续执行后面的rewrite指令

### if指令与全局变量

语法为`if(condition){…}`，对给定的条件condition进行判断。如果为真，大括号内的rewrite指令将被执行，if条件(conditon)可以是如下任何内容：

当表达式只是一个变量时，如果值为空或任何以0开头的字符串都会当做false
直接比较变量和内容时，使用=或!=
`~`正则表达式匹配，`~*`不区分大小写的匹配，`!~`区分大小写的不匹配

1、下面是可以用来判断的表达式：
`-f`和`!-f`用来判断是否存在文件
`-d`和`!-d`用来判断是否存在目录
`-e`和`!-e`用来判断是否存在文件或目录
`-x`和`!-x`用来判断文件是否可执行

2、下面是可以用作判断的全局变量

 

```nginx
if ($http_user_agent ~ MSIE) {
    rewrite ^(.*)$ /msie/$1 break;
} //如果UA包含"MSIE"，rewrite请求到/msid/目录下
if ($http_cookie ~* "id=([^;]+)(?:;|$)") {
    set $id $1;
 } //如果cookie匹配正则，设置变量$id等于正则引用部分
if ($request_method = POST) {
    return 405;
} //如果提交方法为POST，则返回状态405（Method not allowed）。return不能返回301,302
if ($slow) {
    limit_rate 10k;
} //限速，$slow可以通过 set 指令设置
if (!-f $request_filename){
    break;
    proxy_pass  http://127.0.0.1; 
} //如果请求的文件名不存在，则反向代理到localhost 。这里的break也是停止rewrite检查
if ($args ~ post=140){
    rewrite ^ http://example.com/ permanent;
} //如果query string中包含"post=140"，永久重定向到example.com
location ~* \.(gif|jpg|png|swf|flv)$ {
    valid_referers none blocked www.jefflei.com www.leizhenfang.com;
    if ($invalid_referer) {
        return 404;
    } //防盗链
}

例：http://localhost:88/test1/test2/test.php
$host：localhost
$server_port：88
$request_uri：http://localhost:88/test1/test2/test.php
$document_uri：/test1/test2/test.php
$document_root：D:\nginx/html
$request_filename：D:\nginx/html/test1/test2/test.php
```

### 防盗链

```nginx
location ~* \.(gif|jpg|swf)$ {
	valid_referers none blocked start.igrow.cn sta.igrow.cn;
	if ($invalid_referer) {
		rewrite ^/ http://$host/logo.png;
	}
}
```

### 根据文件类型设置过期时间

```nginx
location ~* \.(js|css|jpg|jpeg|gif|png|swf)$ {
	if (-f $request_filename) {
		expires 1h;
		break;
	}
}
```

### 常用变量

```txt
$args ： #这个变量等于请求行中的参数，同$query_string
$content_length ： 请求头中的Content-length字段。
$content_type ： 请求头中的Content-Type字段。
$document_root ： 当前请求在root指令中指定的值。
$host ： 请求主机头字段，否则为服务器名称。
$http_user_agent ： 客户端agent信息
$http_cookie ： 客户端cookie信息
$limit_rate ： 这个变量可以限制连接速率。
$status  请求状态
$body_bytes_sent 发送字节
$request_method ： 客户端请求的动作，通常为GET或POST。
$remote_addr ： 客户端的IP地址。
$remote_port ： 客户端的端口。
$remote_user ： 已经经过Auth Basic Module验证的用户名。
$request_filename ： 当前请求的文件路径，由root或alias指令与URI请求生成。
$scheme ： HTTP方法（如http，https）。
$server_protocol ： 请求使用的协议，通常是HTTP/1.0或HTTP/1.1。
$server_addr ： 服务器地址，在完成一次系统调用后可以确定这个值。
$server_name ： 服务器名称。
$server_port ： 请求到达服务器的端口号。
$request_uri ： 包含请求参数的原始URI，不包含主机名，如：”/foo/bar.php?arg=baz”。
$uri ： 不带请求参数的当前URI，$uri不包含主机名，如”/foo/bar.html”。
$document_uri ： 与$uri相同。
```

### return 指令

用于重定向
在重定向满足两个条件时适用：

1. 重写的 URL 适用于每个匹配的 server 或 location 的请求
2. 可以使用标准的 NGINX 变量构建重写的 URL
3. return 指令简单高效，建议尽量使用 return，而不是 rewrite。

return 指令放在 server 或 location 上下文中。语法很简单

1. return code [text];
2. return code URL;
3. return URL;

```nginx
# 下面代码中，listen 指令表明 server 块同时用于 HTTP流量。
# server_name 指令匹配包含域名 ‘www.old-name.com’ 的请求。return 指令告诉 Nginx 停止处理请求，直接返回 301 (Moved Permanently) 代码和指定的重写过的 URL 到客户端。
# $scheme 是协议（HTTP 或 HTTPS），$request_uri 是包含参数的完整的 URI。 

server {
    listen         80;
    server_name www.old-name.com;
    # return 指令的第一个参数是响应码。第二个参数可选，可以是重定向的 URL
    # location 和 server 上下文中都可以使用 return 指令。
    return 301 $scheme://www.new-name.com$request_uri;
}

```

---
#todo
# config example

# General Settings

# Port `listen`

```nginx
server {
  # standard HTTP protocol
  listen 80;

  # standard HTTPS protocol
  listen 443 ssl;

  # listen on 80 using IPv6
  listen [::]:80;

  # listen only on IPv6
  listen [::]:80 ipv6only=on;
}
```

# Domain name `server_name`

```nginx
server {
  # Listen to yourdomain.com
  server_name yourdomain.com;

  # Listen to multiple domains
  server_name yourdomain.com www.yourdomain.com;

  # Listen to all sub-domains
  server_name *.yourdomain.com;

  # Listen to all top-level domains
  server_name yourdomain.*;

  # Listen to unspecified hostnames (listens to IP address itself)
  server_name "";
}
```

# Access Logging `access_log`

```nginx
server {
  # Relative or full path to log file
  access_log /path/to/file.log;

  # Turn 'on' or 'off'
  access_log on;
}
```

# Miscellaneous `gzip`, `client_max_body_size`

```nginx
server {
  # Turn gzip compression 'on' or 'off'
  gzip on;

  # Limit client body size to 10mb
  client_max_body_size 10M;
}
```

# Serving Files

# Static assets

The traditional web server.

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location / {
    root /path/to/website;
  }
}
```

# Static assets with HTML5 History Mode

Useful for Single-Page Applications like Vue, React, Angular, etc.

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /path/to/website;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

# 重定向

# `301` 永久重定向

Useful for handling `www.yourdomain.com` vs. `yourdomain.com` or redirecting `http` to `https`. In this case we will redirect `www.yourdomain.com` to `yourdomain.com`.

```nginx
server {
  listen 80;
  server_name www.yourdomain.com;
  return 301 http://yourdomain.com$request_uri;
}
```

# `302` 临时重定向

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  return 302 http://otherdomain.com;
}
```

# 重定向到指定 URL

Can be permanent (`301`) or temporary (`302`).

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location /redirect-url {
    return 301 http://otherdomain.com;  
  }
}
```

# 反向代理 Reverse Proxy

使用 Nodejs 作为范例服务器

# Basic

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass http://0.0.0.0:3000;
  }
}
```

# Basic subfolder

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location /folder/ {
    proxy_pass http://0.0.0.0:3000;
  }
}
```

# Basic+

```nginx
upstream node_js {
  server 0.0.0.0:3000;
}

server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass http://node_js;
  }
}
```

# Upgraded Connection (推荐使用 Node.js 应用)

支持 Node.js 的 `WebSockets` 应用服务器，比如 `socket.io`。

```nginx
upstream node_js {
  server 0.0.0.0:3000;
  keepalive 5;
}

server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass http://node_js;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_read_timeout 80; # 增加默认超时
  }
}
```

# Reverse-Proxy For Apache

```nginx
server {

    server_name domain.tld;

    access_log /var/log/nginx/domain.tld.access.log;
    error_log /var/log/nginx/domain.tld.error.log;

    root /var/www/domain.tld/htdocs;

    # pass requests to Apache backend
    location / {
        proxy_pass http://backend;
    }
    # handle static files with a fallback
    location ~* \.(ogg|ogv|svg|svgz|eot|otf|woff|woff2|ttf|m4a|mp4|ttf|rss|atom|jpe?g|gif|cur|heic|png|tiff|ico|zip|webm|mp3|aac|tgz|gz|rar|bz2|doc|xls|exe|ppt|tar|mid|midi|wav|bmp|rtf|swf|webp)$ {
        add_header "Access-Control-Allow-Origin" "*";
        access_log off;
        log_not_found off;
        expires max;
        try_files $uri @fallback;
    }
    # fallback to pass requests to Apache if files are not found
    location @fallback {
        proxy_pass http://backend;
    }
}
```

# TLS/SSL (HTTPS)

# Basic

建议可以使用免费 SSL 证书[**Let's Encrypt**](https://letsencrypt.org/) 。

```nginx
server {
  listen 443 ssl;
  server_name yourdomain.com;

  ssl on;

  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/privkey.pem;

  ssl_stapling on;
  ssl_stapling_verify on;
  ssl_trusted_certificate /path/to/fullchain.pem;

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_session_timeout 1d;
  ssl_session_cache shared:SSL:50m;
  add_header Strict-Transport-Security max-age=15768000;
}

# Permanent redirect for HTTP to HTTPS
server {
  listen 80;
  server_name yourdomain.com;
  return 301 https://$host$request_uri;
}
```

# 大型应用系统

# 负载均衡 Load Balancing

Useful for large applications running multiple instances.

```nginx
upstream node_js {
  server 0.0.0.0:3000;
  server 0.0.0.0:4000;
  server 123.131.121.122;
}

server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass http://node_js;
  }
}
```

# 安全性

# 拒绝访问

通用备份和存档文件

```nginx
# 通用备份和存档文件
location ~* "\.(old|orig|original|php#|php~|php_bak|save|swo|aspx?|tpl|sh|bash|bak?|cfg|cgi|dll|exe|git|hg|ini|jsp|log|mdb|out|sql|svn|swp|tar|rdf)$" {
    d

# 拒绝访问隐藏的文件和目录
location ~ /\.(?!well-known\/) {
    deny all;
}
```

# 阻止常见攻击

```nginx
# base64 encoded url
location ~* "(base64_encode)(.*)(\()" {
    deny all;
}

# javascript eval() url
location ~* "(eval\()" {
    deny all;
}
```

# Nginx SEO

# robots.txt location

```nginx
location = /robots.txt {
# Some WordPress plugin gererate robots.txt file
# Refer #340 issue
    try_files $uri $uri/ /index.php?$args @robots;
    access_log off;
    log_not_found off;
}
location @robots {
    return 200 "User-agent: *\nDisallow: /wp-admin/\nAllow: /wp-admin/admin-ajax.php\n";
}
```

# 使网站不可索引

```nginx
add_header X-Robots-Tag "noindex";

location = /robots.txt {
  return 200 "User-agent: *\nDisallow: /\n";
}
```

# Nginx媒体

MP4流模块

```nginx
location /videos {
    location ~ \.(mp4)$ {
        mp4;
        mp4_buffer_size       1m;
        mp4_max_buffer_size   5m;
        add_header Vary "Accept-Encoding";
        add_header "Access-Control-Allow-Origin" "*";
        add_header Cache-Control "public, no-transform";
        access_log off;
        log_not_found off;
        expires max;
    }
}
```

# 流媒体服务器 MP4|FLV

```bash
http {
    server {
        ...
        location /videos/ {
            mp4;
        }
        location ~ \.flv$ {
            flv; 
        }
    } 
}
```

# 流媒体服务器 HLS

```bash
location /hls/ {
        # 使用 HLS 处理请求
        hls;  
        # 数据文件夹
        alias /var/www/video;
        # HLS 参数
        hls_fragment            4s;
        hls_buffers         10 10m;
        hls_mp4_buffer_size     1m;
        hls_mp4_max_buffer_size 5m;
}
```

# WebP images

映射条件以显示WebP图像

```nginx
# 如果Web浏览器支持WebP，则提供WebP图像
map $http_accept $webp_suffix {
   default "";
   "~*webp" ".webp";
}
```

通过try_files设置服务器的WebP映像

- 如果浏览器支持 WebP
- 如果存在WebP的替代对象

```nginx
# webp的重写机制会在加载 image.png 之前尝试加载替换对象 image.png.webp 
location /wp-content/uploads {
    location ~ \.(png|jpe?g)$ {
        add_header Vary "Accept-Encoding";
        add_header "Access-Control-Allow-Origin" "*";
        add_header Cache-Control "public, no-transform";
        access_log off;
        log_not_found off;
        expires max;
        try_files $uri$webp_suffix $uri =404;
    }
}
```