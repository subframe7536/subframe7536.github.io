## 定义
> 增删改查的请求URI相同，通过不同请求方式区分
> 原理：利用Filter拦截请求，如果是_methed为put或者delete就将post请求转换成put或者delete

1. GET：查询
2. POST：新增
3. PUT：修改
4. DELETE：删除

## Spring使用方法
```yml
spring:  
  mvc:  
    # 开启请求方法自动转换   
    hiddenmethod:  
      filter:  
        enabled: true
```
表单请求时添加`input`
```html
<input name="_method" type="hidden" value="delete/put">
```
服务器代码
```java
@RestController  
public class Controller1 {  
 	@GetMapping("/asd")  
 	public String aaa() {  
 		return "get";  
 	}  
 	@PostMapping("/asd")  
 	public String bbb() {  
 		return "post";  
 	}  
 	@PutMapping("/asd")  
 	public String ccc() {  
 		return "put";  
 	}  
 	@DeleteMapping("/asd")  
 	public String ddd() {  
 		return "delete";  
 	}  
}
```
### 自定义 `_method`
```java
@Configuration  
public class conf {  
 	@Bean  
 	public HiddenHttpMethodFilter hiddenHttpMethodFilter() {  
 		HiddenHttpMethodFilter filter = new HiddenHttpMethodFilter();  
 		filter.setMethodParam("_m");  
		return filter;  
 	}  
}
```
### 自定义handlerMapping
用于自定义不同版本api的请求转发
## PUT和DELETE不安全
> 1.  put不安全，是一个历史遗留的印象问题，因为它可以往服务器上传文件，有某些著名的服务器配置不当，会留下这个漏洞，那攻击者可以通过上传webshell来提权，如何渗透攻
> 2.  delete则可以删除文件，造成恶意攻击
> 
> 其实有大多数服务器本身默认是这方面安全的，但是如果开发者在使用的过程中，不了解安全机制，那么有可能因为修改配置而引入put和delete的安全问题
> 
> 比如，tomcat7 来说，如果开发者在他项目里，因为某些原因，为了方便，把web.xml里面配置defaultServelet的参数readonly为false，那么这个时候就可以无限制的put和delete了，但是开发者自己因为不了解，也不会留意到这个问题，于是就留下隐患了.
- [原文链接](https://www.zhihu.com/question/38770182)
