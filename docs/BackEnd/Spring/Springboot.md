# SpringBoot
> 自动配置 spring 框架
### 博客&demo
[[Awesome Spring Boot]]
### hello world
[[helloworld of springboot]]
### 文档
[[spring-boot-reference.pdf|springboot文档]]
### 内容
[[容器功能&properites]]
[[插件&yml]]
跨域Access-Control-Allow-Origin设置
```java
@Configuration  
public class CorsConfig extends WebMvcConfigurerAdapter {  
    @Override  
    public void addCorsMappings(CorsRegistry registry) {  
        registry.addMapping("/**")  
                .allowedOriginPattern("*")  
                .allowCredentials(true)  
                .allowedMethods("GET", "POST", "DELETE", "PUT") 
                .maxAge(3600);  
    }
}
```
### 配置不同类型服务器
[[配置不同类型服务器]]
### 异步任务
[Spring Boot实践——多线程](https://www.cnblogs.com/onlymate/p/9686740.html)
### 多线程下载
[多线程下载](https://blog.csdn.net/weixin_39717692/article/details/112282654)
### 缓存
```properties
# 解决配置js/css/img缓存问题
spring.resources.chain.strategy.content.enabled=true
spring.resources.chain.strategy.content.paths=/css/**,/js/**,/img/**
```