# Maven
> 根据`pom.xml`自动配置`jar`包、`war`包、插件和依赖
## 安装
### linux
1. 下载压缩文件
[链接](https://ftp.wayne.edu/apache/maven/maven-3/3.8.2/binaries/apache-maven-3.8.2-bin.tar.gz)
2. 解压至`/usr/local`
3. 设置环境变量
```shell
vim /etc/profile
```
```shell
export MAVEN_HOME=/usr/local/apache-maven-3.6.1
export PATH=$MAVEN_HOME/bin:$PATH
```
4. 刷新环境变量
```shell
source /etc/profile
```
5. 检测
```shell
mvn -v
```
## 新建webapp
1. 选择`webapp`模板
2. 将`<properties>` -> `<maven.compiler.source>`改为`1.8`
3. 将`<dependencies>` -> `<dependency>` -> `<version>`改为`4.12`
4. 删除`<build>` -> `<pluginsManagement>`
## 构建多模块
1. 建父项目
	- 只选`jdk`不选模板	
2. 建子项目
	- `Java`项目(`dao`/`service`)选择`quickstart`
	- `web`项目(`controller`)选择`webapp`
3. 构建依赖...
#todo 
4. 设置运行`jetty`服务器
`Run` -> `Edit Configurations`添加`maven`,命名为`runJetty`，路径选择`webapp`所在地址，`Command line`输入`jetty:run`并确认。在`pom.xml` -> `<build>`中添加
```xml
<mirrors> 
	<mirror> 
		<id>nexus-aliyun</id> 
		<mirrorOf>central</mirrorOf>
		<name>Nexus aliyun</name>
		<url>http://maven.aliyun.com/nexus/content/groups/public</url>
	</mirror>
</mirrors>  
<profiles> 
	<profile> 
		<id>jdk-1.8</id>
		<activation>
			<activeByDefault>true</activeByDefault> 
			<jdk>1.8</jdk>
		</activation> 
		<properties>
			<maven.compiler.source>1.8</maven.compiler.source> 
			<maven.compiler.target>1.8</maven.compiler.target> 
			<maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
		</properties> 
	</profile>
</profiles>
```
## 打包
导出项目的`jar`包，配置环境
### 添加打包所需的目录
1. 添加Java源文件夹
`src/main` -> `右键` -> `new` -> `Directory` -> `命名java` ->`标记为Sources Root`
- 一般默认为`Sources Root`
2. 添加资源文件夹
`src/main` -> `右键` -> `new` -> `Directory` -> `命名为resources` ->`标记为Resource Root`
- 用于配置资源文件，如`xml`、`properties`文件
	- 分为`dev`(开发)、`test`(测试)、`product`(正式)三个目录
3. 添加`Profile`配置
```xml
<!--打包环境配置开发环境测试环境正式环境-->
<profiles>
 	<profile>
 		<id>dev</id>
 		<properties>
 			<env>dev</env>
 		</properties>
 		<!--未指定环境时，默认打包dev环境-->
 		<activation>
 			<activeByDefault>true</activeByDefault>
 		</activation>
 	</profile>
 	<profile>
 		<id>test</id>
 		<properties>
 			<env>test</env>
 		</properties>
 	</profile>
 	<profile>
 		<id>product</id>
 		<properties>
 			<env>product</env>
 		</properties>
 	</profile>
</profiles>
```
- 放入`pom.xml` -> `<project>`中
4. 设置资源文件配置
```xml
<!-- 对于项目资源文件的配置放在build中 -->
<resources>
 	<resource>
 		<directory>src/main/ resources/${env}</directory>
		<!--env对应3中的env-->
 	</resource>
 	<resource>
 		<directory>src/main/ java</directory>
 		<includes>
 			<include>**/*.xml</include>
 			<include>**/*.properties</include>
 			<include>**/*.tld</include>
 		</includes>
 		<filtering>false</filtering>
 	</resource>
</resources>
```
- 放入`pom.xml` ->`<project>` -> `<build>`中
5. 执行打包操作
打开`Run/Debug Configuarations`，输入`clean compile package -Pdev -Dmaven.test.skip=true`(`-Pdev`可以换成`-Ptest`或者`-Pproduct`)

## web项目注意事项
`maven`中导入的jar包需要在`project structure` -> `Artifacts` -> `Output Latout` -> 将右侧`jar`包放到左侧`WEB-INF`中