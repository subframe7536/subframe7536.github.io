# PHP
> PHP 是一种被广泛使用的开源脚本语言  
> PHP 脚本在服务器上执行  
> PHP 文件能够包含文本、HTML、CSS 以及 PHP 代码  
> PHP 代码在服务器上执行，而结果以纯文本返回浏览器  
> PHP 能够生成动态页面内容，创建、打开、读取、写入、删除以及关闭服务器上的文件，发送并取回 cookies 

### 语法
[[语法]]
### 表单
[[PHP表单]]
### 多维数组
```php
<?php
$cars = array (
  	array("aaa",22,18),
  	array("bbb",15,13),
  	array("ccc",5,2),
  	array("ddd",17,15)
);
echo $cars[0][1];
?>
```
### 时间
[[时间]]
### 引用
`require()` 、 `include()`
能够调用引用页面的脚本，调用变量和参数
- 遇到严重错误 (找不到文件) 时，`require()` 不继续执行，`include()` 继续执行
### 文件
[[php文件]]
### Cookie&Session
[[php_cookie_session]]
### 错误信息
[[错误&异常]]
### 过滤器
[基本过滤器](https://www.runoob.com/php/php-filter.html)
[高级过滤器](https://www.runoob.com/php/php-filter-advanced.html)
### JSON
#### Json 编码
`json_encode($value[,$option])`
将变量转换为 json
Option：`JSON_UNESCAPED_UNICODE` 中文不进行 unicode 编码
#### Json 解码
`json_decode ($json_string [,$assoc = false [, $depth = 512 [, $options = 0 ]]])`
将 json 数据转换为变量
- Json_string: 待解码的 JSON 字符串，必须是 UTF-8 编码数据
- Assoc: 当该参数为==TRUE==时返回数组，==FALSE==时返回对象。
- Depth: 整数类型的参数，它指定递归深度
- Options: 二进制掩码，目前只支持 JSON_BIGINT_AS_STRING 。	
### 数据库
[[php数据库]]

### AJAX
#### XML
[ajax与xml](https://www.runoob.com/php/php-ajax-xml.html)
#### 跨域 (Access-Control-Allow-Origin) 解决方案详解
```php
header("Access-Control-Allow-Origin: *"); //允许所有域名发起的跨域请求
header("Access-Control-Allow-Origin: www.xxx.xom"); //允许指定域名发起的跨域请求
```