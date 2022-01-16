# devtools
> 编译时自动部署，restart，不是reload，但是通过不加载一部分类，相对于一般的重启速度快
## 使用
### pom.xml
```xml
<dependency>  
 	<groupId>org.springframework.boot</groupId>  
 	<artifactId>spring-boot-devtools</artifactId>  
 	<optional>true</optional>  
</dependency>
<build>
	<plugins>
		<plugin>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-maven-plugin</artifactId>
			<configuration>
				<fork>true</fork>
				<!--增加jvm参数-->
				<jvmArguments>-Dfile.encoding=UTF-8</jvmArguments>
			</configuration>
		</plugin>
	</plugins>
</build>
```
### 设置
1. setting -> build,execution,Deployment -> build project automatically
2. 双击shift -> 输入registry -> compiler.automake.allow.when.app.running
### properties.yml
```yml
spring:
  devtools:
    restart:
    # 该目录下的内容修改不重启
      exclude: doc/**
	# 设置重启的目录   
	  additional-paths: resources/**,static/**,templates/**
    # 设置不重启目录
      additional-exclude: WEB-INF/**
```
### 浏览器LiveReload插件