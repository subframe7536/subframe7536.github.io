# lombok
> 用于简化JavaBean开发，在编译时自动配置构造、getter、setter等方法
## 使用
1. 配置`pom.xml`(springboot自带版本)
```xml
<dependency>  
 	<groupId>org.projectlombok</groupId>  
 	<artifactId>lombok</artifactId>  
</dependency>
```
2. 下载`idea`插件
搜索lombok
### 构造方法
#### 有参构造
`@AllArgsConstructor`
#### 无参构造
`@NoArgsConstructor`
### getter and setter
`@Data`
### ToString 
`@TosString`