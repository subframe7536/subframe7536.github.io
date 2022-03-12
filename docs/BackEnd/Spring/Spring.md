# Spring
> 开源的J2EE框架，核心为==IOC==(inverse of control 反转控制)和==AOP==(Aspect Oriented Programming 面向切面编程)
## 概念
### IOC
> 将对象的生成交给spring框架，而不是自己生成
### AOP
> 预编译和运行期间==动态代理==，提高代码可重用性
## 内容
### hello world
![[创建spring容器&配置文件]]
### 注解
![[注解]]
### 自定义配置文件
[[yml自定义配置文件]]
### 数据库
[[Druid+JDBCTemplate]]
#### rollback
在方法前添加`@Transactional`注解，配置遇到异常时的回滚
```java
@Transactional(rollbackFor = {RuntimeException.class})
```
### 线程池
Spring自带线程池可以直接导入使用
```java
@Resource  
private ThreadPoolTaskExecutor executor;
```