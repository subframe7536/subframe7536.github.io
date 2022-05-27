# Tomcat
## 安装事项
1. 下载安装包，解压后放到**可直接访问的目录**下
2. 配置环境变量中的`JAVA_HOME`(JDK所在路径)和`CATALINA_HOME`(tomcat所在路径)，并在Path中添加`%JAVA_HOME%\bin`和`%CATALINA_HOME%\bin`
## 配置服务器
1. 新建`Module`，选择`Java Enterprise`，直接`next`到底
2. 右键`Module`根目录，选择`Add Framework Support`->`web Application`->`取消选Create web.xml`->`OK`
3. 右上角`Add Configuration` -> 左上角`+` -> `Tomcat Server` -> `Local` -> `Configure` -> 选择Tomcat路径 -> 右下角感叹号 -> 配置`Application context` -> `OK`
4. `Project Structure` -> 左侧`Modules` -> 选择根目录 -> 选择`src` -> `Marks as Sources` -> 左侧`Facets` -> `web` -> 选择`src`的路径 -> `OK`(能够新建Servlet对象)
## 运行war包
1. 打包war包
2. 将war包放到webapp目录下
3. 运行startup.bat