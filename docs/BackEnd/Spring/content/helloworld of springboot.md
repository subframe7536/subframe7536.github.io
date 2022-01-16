### 配置`pom.xml`
```xml
<parent>  
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-parent</artifactId>
	<version>2.3.4.RELEASE</version> 
</parent>  
<dependencies> 
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency> 
</dependencies>
<build>  
	 <plugins> 
		 <plugin>
			 <groupId>org.springframework.boot</groupId>  
			 <artifactId>spring-boot-maven-plugin</artifactId>  
		 </plugin> 
	</plugins>
</build>
```
### 创建主程序
```java
/**  
 * 主程序类 
 * @SpringBootApplication：这是一个SpringBoot应用 
 */
@SpringBootApplication(scanBasePackages/*扫描的包名*/ = "com.*")
public class MainApp {
	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class,args); 
	}
}
```
 ### 编写业务
 ```java
/*控制器，@Responsebody+@Controller*/ 
@RestController
public class HelloController {
	@RequestMapping("/hello") 
	public String handle1() {
		return "Hello, Spring Boot 2!"; 
	}
}
 ```
### 测试
运行mainApp的main方法
### 配置&部署
已经部署好Tomcat服务器
在resources下新建`application.property`，设置各项配置，具体见文档property
#### 打包
`Project Structure` -> `artifacts` -> 加号 -> 添加`Application.java`
左侧`maven`工具 -> 项目 -> `lifescycle` -> `clean & package`  
#### 运行
`cmd` -> `java -jar 包名`(在target文件夹下) 