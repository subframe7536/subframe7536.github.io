[Tomcat在springboot中启动](https://blog.csdn.net/qq_32101993/article/details/99700910)
一、修改maven.xml
1、`pom.xml`中设置打包为`war`包
```xml
<packaging>war</packaging>
```
2、不使用SpringBoot内置的Tomcat,添加
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
    <scope>provided</scope>
</dependency>
```
二、修改`application.yml`
```yml
server：
	servlet：
		context-path=/MyProject
```


三、修改启动文件main方法，让该方法继承自SpringBootServletInitializer，并且重写configure方法：
@Override
protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
    return builder.sources(FileuploadApplication.class);
}
修改后的启动文件为：

package qiu.fileupload;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class FileuploadApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(FileuploadApplication.class, args);
    }
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(FileuploadApplication.class);
    }
}


四、打包
1、在项目的根目录下面执行命令：
mvn clean package
打包成功后，在项目的根目录下面会多出一个target目录，该目录下面有一个war包，名为：fileupload-0.0.1-SNAPSHOT.war。



2、将fileupload-0.0.1-SNAPSHOT.war改名为yml文件中context-path的名字MyProject


五、拷贝到tomcat的webapps目录，重启tomcat。