### pom.xml
```xml
<dependency> 
	<groupId>org.springframework.boot</groupId> 
	<artifactId>spring-boot-configuration-processor</artifactId> 			
	<optional>true</optional> 
</dependency>
```
### yml
#### application.yml
把其他的yml也读取进来
```yml
spring:
	profiles:  
		# 匹配application-custom.yml,application-xxx.yml,....
		active: 
		  - custom
		  - xxx 
```
#### application-custom.yml
```yml
custom:  
  FileStorePath: D:/code/
```
- 提示没有用到也没关系..？
### CustomConfig
在config目录下创建 #code-snippet  
```java
@Data  
@PropertySource("classpath:application.yml")  
@ConfigurationProperties(prefix = "custom")  
@Component  
public class CustomConfig {  
	 @Value("${FileStorePath}")  
	 private String FileStorePath;  
}
```
[springboot读取yml配置](https://www.cnblogs.com/mysgk/p/9790801.html)

### 使用
```java
@Configuration
public class JwtUtil {

    private static CustomConfig config;

    @Resource //静态成员无法使用@Resource
    void setConfig(CustomConfig config) {
        JwtUtil.config = config;
    }

		public static String getConfig() {
			return config.getTest();
		}
}
```













