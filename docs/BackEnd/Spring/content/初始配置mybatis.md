### 注解版
#### 1. 添加 Maven
```xml
<dependency>  
 	<groupId>mysql</groupId>  
 	<artifactId>mysql-connector-java</artifactId>  
</dependency>
<dependency>  
 	<groupId>org.mybatis.spring.boot</groupId>  
 	<artifactId>mybatis-spring-boot-starter</artifactId>  
 	<version>2.2.0</version>  
</dependency>
```
#### 2. 配置数据源
```yml
spring:  
  datasource:  
    username: root  
    password: 1234  
    url: jdbc:mysql://localhost:3306/test?characterEncoding=utf-8&serverTimezone=UTC  
    driver-class-name: com.mysql.jdbc.Driver
mybatis:  
  configuration:  
    # 开启下划线分割法识别为驼峰命名法  
 	map-underscore-to-camel-case: true
```
#### 3. 创建 POJO 对象
```java
@Data  
@AllArgsConstructor  
public class testPojo {  
 	public int id;  
 	public String phone;  
 	public int status;  
}
```

