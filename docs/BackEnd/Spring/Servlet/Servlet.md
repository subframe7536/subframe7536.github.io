# Servlet
> Servlet 是一个接口，定义了 Java 类被浏览器访问到 (`Tomcat` 识别) 的规则，通过定义类，实现 Servlet 接口，复写方法
## 实现流程
1. 创建 JavaEE 项目，在项目根目录右键的 `add Framework Support` 中选择 `web application(4.0)`，返回并点击 `Run` -> `Edit Configurations` -> `Templates` -> `Tomcat Server` -> `Local`, 点击右下角的 `Fix`，创建之后将 `On 'Update' action` 和 `On frame deactivation` 设置为 `Update Resources`，在 `project Structure` -> `Modules` -> `dependances` 中添加 `lib`，选择 `Tomcat`
2. 定义一个类，实现 Servelet 接口
   `public class servletDemo1 implements Servlet`
3. 实现接口中的抽象方法
4. 在 `web.xml-><web-app>` 中配置 Servlet
```xml
<servlet>
    <servlet-name>任意名字(如demo1)</servlet-name>
    <servlet-class>实现类的完整类名</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>同上的任意名字</servlet-name>
    <url-pattern>任意路径名</url-pattern>
</servlet-mapping>
```
## 原理
通过 `url` 访问 xml，`<url-pattern>` 的路径名对应的 `<servlet-name>` 的名字匹配到 `<servlet>` 中的 `<servlet-name>`，然后访问 `<servlet-class>` 的类
### @WebServlet 注解优化
`Web Application 3.0` 后不用 web. Xml，在实现类前加 `@WebServlet("/xxx(任意路径名)")`
Url-pattern 可以设置多个，`@WebServlet({"/asd/asdasd","*.do","/*"(任意路径)})`
## 生命周期
### 创建
#### 创建时间
- 默认情况时，第一次被访问时创建
- 服务器被访问时
```xml
<servlet>
    <servlet-name>任意名字(如demo1)</servlet-name>
    <servlet-class>实现类的完整类名</servlet-class>
    <!--num<0，第一次访问时创建；num>=0，服务器被访问时创建-->
    <load-on-startup>num</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>同上的任意名字</servlet-name>
    <url-pattern>任意路径名</url-pattern>
</servlet-mapping>
```
##### 安全问题
Init 对象只能执行一次 (一个对象)，多个用户同时访问会出现安全问题
==尽量不要在 Servlet 中定义成员变量==
#### 服务
#### 销毁
```java
//初始化,在Servlet被创建时执行
@Override
public void init(ServletConfig servletConfig) throws ServletException {
}
//配置，获得ServletConfig对象
@Override
public ServletConfig getServletConfig() {
    return null;
}
//服务，每次被访问时执行
@Override
public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
    System.out.println("hello!");
}
//获取Servlet的一些信息，如版本，作者……
@Override
public String getServletInfo() {
    return null;
}
//销毁，在服务器被正常关闭时执行
@Override
public void destroy() {
}
```
## Servlet 体系
Servlet (接口)->GenericServlet (抽象类)->HTTPServlet (抽象类)
### GenericServlet
继承后只需重写 `service()`，其他方法默认空实现
### HTTPServlet
对 `http` 协议的简化封装，继承后重写 doGet ()/doPost ()

## JavaBean
> 标准的 Java 类，用于封装数据
### 要求
- 类必须被 `public` 修饰
- 必须提供无参的构造器
- 成员变量必须使用 `private` 修饰
- 提供公共 `setter` 和 `getter` 方法
### BeanUtils 封装对象
```java
try {
	BeanUtils.populate(dataClassName,mapName);
} catch (IllegalAccessException e){
    e.printStackTrace();
} catch (InvocationTargetException e){
    e.printStackTrace();
}
```
将 map 中存的键值对 set 入对象类中，不用每条单独写 set
需要导包
## HTTP 传输协议
> 定义了客户端和服务器端通信时，发送数据的格式
### 特点
- 基于 TCP/IP 的高级协议 (三次握手)
- 默认端口号 80
- 基于请求响应模型：一次请求对应一次响应
- 无状态：每次请求之间相互独立，不能交互数据
## 请求消息和响应消息
> 请求消息：==客户端==发给==服务器端==的数据
> 响应消息：==服务器端==发给==客户端==的数据

`IDEA` 中新建 `servlet` 对象
### 请求消息数据格式
#### 请求行
格式：请求方式请求 url 请求协议/版本
- 请求方式
  共有 7 种，常用的是 `get` 和 `post`
  - `get` 的请求参数在请求行中，url 后 (长度有上限)
  - `post` 的请求参数在请求体中，url 长度无上限
#### 请求头
请求头名称：请求头值
- 常见的请求头：
  - `User-Agent` ：浏览器版本的信息
  - `Referer` ：提供当前访问的地址
    - 防盗链
    - 统计
#### 请求空行
空行，分隔 `POST` 请求头和请求体
#### 请求体
正文，只在 `POST` 方法中出现，用于封装 `POST` 请求消息的请求参数
格式：`name=value`
### Request 对象
> 由 `Tomcat` 服务器创建，实现 `HttpServletRequest` 接口，用于获取请求消息，将对象传给 `service()` 方法
#### 基本功能
##### 获取请求行消息
`GET /day14/demo1?name=zhangsan HTTP/1.1`
- 获取请求方式: `GET`
`string getMethod()`
- ==获取虚拟目录==: `/day14`
`string getContextPath()`
- 获取 Servlet 路径: `/demo1`
`String getServletPath()`
- 获取 get 方式请求参数: `name=zhangsan`
`String getQueryString()`
- ==获取请求 URI/URL==: `/day14/demo1`
    `String getRequestURI()`
    例：`/day14/demo1`
    `StringBuffer getRequestURL()`
    例：`http://localhost/day14/demo1`
  - 区别：`URL` ：统一资源定位符；
			    `URI` ：统一资源标识符
    `URI` 的范围比 `URL` 大
- 获取协议及版本: `HTTP/1.1`
   `String getProtocol()`
- 获取客户机的 IP 地址:
   `String getRemoteAddr()`
##### 获取请求头
- ==通过请求头的名称获取请求头的值==
   `String getHeader(String name)`
- 获取所有的请求头名称
   `Enumeration<String> getHeaderNames()`
   类似于迭代器
   - `hasMoreElement()`
   - `nextElement()`
##### 获取请求体数据
- 获取流对象
  - 获取字符输入流，只能操作字符数据
  	`BufferedReader getReader()`
  - 获取字节输入流，可以操作所有类型数据
    `ServletInputStream getInputStreaem()`
- 从流对象中获取数据
#### 常用功能
##### 获取请求参数
> 通用的方式，`get` 和 `post` 都可以获取
- ==根据参数名称获取参数值==
  `String getParameter(String name)`
- 根据参数名称获取参数值的数组
  `String[] getParameterValues(String name)`
- 获取所有请求的参数名称   
  `Enumeration<String> getParameterNames()`
- ==获取所有参数的 `map` 集合==
  `Map<String,String[]> getParameterMap()`
###### 中文乱码
- `get` 方式：Tomcat8 已经解决
- `post` 方式：在获取参数前加上 `request.setCharacterEncoding("utf-8")`
##### 请求转发 forward
> 在服务器内部的资源跳转的方式，不需要些虚拟目录
- 步骤：
  1. 通过 `request` 对象获取请求转发器对象
     `request.getRequestDispatcher(String path)`
  2. 使用 `requestDispatcher` 对象进行转发
     `forward(ServletRequest request, ServletResponse response)`
```java
request.getRequestDispatcher("/PostNewTask").forward(request,response);
```
- 特点：
  - 浏览器地址栏路径不发生变化
  - 只能访问服务器内部的资源
  - 一次请求，可以多次获取数据
  - 相比重定向快，因为不需要浏览器再次请求
##### 共享数据
> 域对象：一个有作用范围的对象，可以在范围内共享数据
> request 域: 代表依次请求的范围，一般用于请求转发的多个资源中共享数据
###### 方法
- 存储数据
  `void setAttribute(String name, Object obj)`
- 通过键获取值
  `Object getAttribute(String name)`
- 移除键值对
  `void removeAttribute(String name)`
##### 获取 ServletContext 对象
`request.getServletContext()`
##### Form 表单中 action 路径的写法
虚拟路径+ `Servlet` 的资源路径
### 请求消息数据格式
#### 响应行
协议/版本响应状态码状态码描述
- 响应状态码
  > 服务器告诉客户端本次请求和响应的一个状态，都是 3 位数字
  - 分类
    - 1xx：服务器接收客户端消息，但没有接收完成，等待一段时间后发送
    - 2xx：发送成功
      常见：200
    - 3xx：重定向
      常见：302 (重定向)，304 (访问缓存)
    - 4xx：客户端错误
      常见：403 (禁止访问)，404 (请求路径没有资源)，405 (请求方式没有对应方法 (doXXX))
    - 5xx：服务器端错误
      常见：500 (服务器内部出现异常)
#### 响应头
响应头名称：响应值
- 常见的响应头：
  - Content-Type：服务器告诉客户端本次响应体的格式和编码
  - Content-disposition：服务器告诉客户端以什么格式打开响应体
    - In-line：默认值，在当前页面打开
    - Attachment; filename=xxx：下载文件
#### 响应空行
分隔用
#### 响应体
传输的数据
### Response 对象
> 由 `Tomcat` 服务器创建，实现 `HttpservletRequest` 接口，用于==设置响应消息==，将对象传给 `service()` 方法
#### 基本功能
##### 设置响应行
`HTTP/1.1 200 ok`
- 设置状态码
  `setStatus(int sc)`
##### 设置响应头
`setHeader(String name, String value)`
##### 设置响应体
1. 获取输出流
   - 字符输出流
     `PrintWriter getWriter()`
   - 字节输出流
     `ServletOutputStream getOutputStream()`
2. 使用输出流，将数据输出到客户端浏览器
#### 其他功能
##### 重定向 redirect
> 服务器间资源跳转的方式，需要虚拟目录 (动态获取 `getContextPath()`)

`response.sendRedict(request.getContextPath() + "地址")`
- 原理
```java
response.setStatus(302);
response.setHeader("location", "地址")
```
    
- 特点
  - 浏览器地址栏发生变化
  - 可以访问其他服务器资源
  - 至少两次请求，不能用 `request` 对象共享数据
  - 相比转发速度慢，因为需要经过浏览器的重新请求
##### 输出字符数据
在屏幕显示数据 (以 html 的形式)
```java
//设置浏览器解码的编码,Tomcat默认编码为ISO-8859-1
response.setContentType("text/html;charset=utf-8");
//response.setHeader("content-type", "text/html;charset=");
PrintWriter pw = response.getWriter();
pw.write("");
```
##### 输出字节数据
一般用于输出图像、音频、视频等数据
```java
response.setContentType("text/html;charset=utf-8");
ServletOutputStream sos = response.getOutputStream();
sos.write("".getBytes("utf-8"));
```
###### 验证码 (了解)
防恶意表单，通过程序动态生成
```java
//创建缓存图片对象
int width = 100, height = 50;
BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
//填充图片
//填充背景色
Graphics g = image.getGraphics();
g.setColor(Color.BLUE);
g.fillRect(0, 0, width, height);
//画边框
g.setColor(Color.BLUE);
g.drawRect(0, 0, width - 1, height - 1);
//填充字符
String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
Random random = new Random();
int count = 6;
for (int i = 0; i < count; i++) {
    int index = random.nextInt(str.length());
    char ch = str.charAt(index);
    g.drawString(String.valueOf(ch), width / 5 - i, height / 2);
}
//画干扰线
g.setColor(Color.yellow);
int num = 10;
for (int i = 0; i < num; i++) {
    g.drawLine(random.nextInt(width), random.nextInt(height), random.nextInt(width), random.nextInt(height));
}
//输出图片
ImageIO.write(image, "jpg", response.getOutputStream());
```
时间戳：永不重复
`var date = new Date().getTime()`
点击切换图片：src 设置为 `地址+?+date`
### ServletContext 对象
> 代表整个 `web` 应用，可以和服务器交互
#### 获取
- 通过 `request` 对象获取
  `request.getServletContext()`
- 通过 `HttpServlet` 获取
  `this.getServletContext()`
#### 功能
##### 获取 MIME 类型
> `MIME` ：互联网通信过程中定义的一种文件数据类型
- 格式
  大类型/小类型 `text/html` `image/jpge`
- 获取
  `String getMimeType(String file)`
##### 域对象：
共享数据，所有用户所有请求的数据
1. 设置数据
   `setAttribute(String name, Object value)`
2. 获取数据
   `getAttribute(String name)`
3. 删除数据
   `removeAttribute(String name)`
##### 获取文件的服务器路径
`String getRealPath(String path)`
#### 案例：下载文件
- 需要添加 `@MultipartConfig` 注解接收文件
```java
//1.获取请求参故，文件名称
String filename = request.getParameter("filename");
//2.使用字节输入慌加绒文件进内存
//2.1找到文件服务器路径
ServletContext servletContext = this.getServletContext();
String realPath = servletContext.getRealPath("/img/" + filename);
//2.2用字节流关联
FileInputStream fis = new FileInputStream(realPath);
//3.设置response的响应头
//3.1设置响应头类型: content-type
String mimeType = servletContext.getMimeType(filename);
//获取文件的mime类型
response.setHeader("content-type", mimeType);
//3.2设1响应头打开方式:content-disposition
response.setHeader("content-disposition", "attachment;filename=" + filename);
//4.将输入流的数据写出到输出流中
ServletOutputStream sos = response.getOutputStream();
byte[] buff = new byte[1024 - 8];
int len = 0;
while ((len = fis.read(buff)) != -1) {
    sos.write(buff, 0, len);
    fis.close();
}
```
中文名问题：不同浏览器所需求的`filename`不同，通过网上的工具类转换
```java
import java.net.URLEncoder;
import sun.misc.BASE64Encoder;
import java.io.UnsupportedEncodingException;
public class DownLoadUtils {
    public static String getFileName(String agent, String filename) throws UnsupportedEncodingException {
        if (agent.contains("MSIE")) {
            // IE浏览器
            filename = URLEncoder.encode(filename, "utf-8");
            filename = filename.replace("+", " ");
        } else if (agent.contains("Firefox")) {
            //火狐浏览器
            BASE64Encoder base64Encoder = new BASE64Encoder();
            filename = "=?utf-8?B?" + base64Encoder.encode(filename.getBytes("utf-8")) + "?=";
        } else {
            //其它浏览器
            filename = URLEncoder.encode(filename, "utf-8");
        }
        return filename;
    }
}
```
### 动态获取当前的项目的绝对路径
`${pageContext.request.contextPath}`
## 会话技术
> 一次会话包含多次请求，直到服务器端或者客户端关闭会话
### 功能
在一次会话范围内的多次请求间共享数据
### Cookie
> 客户端会话技术，将数据保存到客户端，默认在关闭时销毁
#### 特点
- 存储在客户端浏览器，安全性不好
- 大小有限制 (4kb)，数量有限制 (20 个)
#### 作用
- 用于存储少量的不敏感的数据
- 用于不登录时完成服务器对客户端的身份验证
#### 步骤
1. 创建 `Cookie` 对象，绑定数据
   `new Cookie(String name, String value)`
2. 发送 `Cookie` 对象 (可多次创建多次发送)
   `response.addCookie(Cookie cookie)`
3. 获取 `Cookie` 对象，拿到数据
   `Cookie[] request.getCookies()`
#### 原理
![[cookie原理图.jpg]]
#### 设置 Cookie 存储时间
`setMaxAge(int seconds)`
- 正数：`Cookie` 数据写到硬盘中的文件的存放秒数
- 负数：默认值，关闭时销毁
- 0：删除 `Cookie`
#### 存储中文
`Tomcat 8` 后可以直接存储中文，之前用 URL 编码 (%)
#### 获取范围
- 设置 `Cookie` 获取范围，默认设置为当前虚拟目录
  `cookieName.setPath(String path)`
默认情况 `Cookie` 不能共享
- 如果一级域名相同，则不同服务器间可以共享 `Cookie`
  `setDomain(String path)`
  例：`setDomain(".baidu.com")`
### Session
> 服务器端会话技术，在一次会话的多次请求间共享数据，保存在服务器端的对象 `HttpSession`，依赖于 `cookie`，确保 `Session` 为同一个
#### 特点
- 存在服务器端
- 存储任意大小的数据
#### HttpSession 对象
- 创建对象
  `HttpSession session = request.getsession();`
- 存储数据
  `void setAttribute(String name, Object obj)`
- 通过键获取值
  `Object getAttribute(String name)`
- 移除键值对
  `void removeAttribute(String name)`
#### Session 失效
- 客户端关闭，会话结束，`Session` 不是同一个
- 服务器关闭，缓存消失，`Session` 不是同一个
  - `Session` 钝化
    服务器正常关闭时，将 `Session` 序列化到硬盘
  - `Session` 活化
    服务器开启后，将硬盘中的 `Session` 读取
- 销毁时间
  - 服务器关闭
  - `session` 对象调用 `invalidate()`
  - `session` 默认失效时间为 30 分钟
### Session 和 Cookie 的区别
- `session` 存储数据在服务器端，`Cookie` 在客户端
- `session` 没有数据大小限制，`Cookie` 有
- `session` 数据安全，`Cookie` 相对于不安全
## JSP
> `Java Server Page`，`java` 服务器端界面，可以理解为一个能够同时定义 `html` 标签和 `java` 代码的页面，用于简化书写，本质上是一个 `Servlet`
### 脚本区域
JSP 定义 `java` 代码的方式
- `<%code%>`
  定义的代码在 `service()` 中，可以定义 `service()` 中的方法
- `<%!code%>` ==较少用==
  定义代码在成员中，可以定义变量或者方法
- `<%=code%>`
  定义的代码会输出到页面上，相当于 `print(code)`
### 内置对象
> `JSP` 不需要获取和创建可以直接用的对象，共 9 个
- `pageContext`
  - 真实类型：`PageContext`
  - 域对象
    - 当前页面共享数据
    - 获取其他八个内置对象
- `request`
  - 真实类型：`HttpServletRequest`
  - 域对象
    - 请求 (一次请求访问多个资源)
- `session`
  - 真实类型：`HttpSession`
  - 域对象
    - 一次会话的多个请求间共享数据
- `application`
  - 真实类型：`ServletContext`
  - 域对象
    - 所有用户间共享数据
- `response`
  - 真实类型：`HttpServletResponse`
  - 响应对象
- `out`
  - 真实类型：`JspWriter`
  - 输出对象
    - `response.getWriter()` 在最开头输出
    - `out.write()` 在代码所在位置输出
- `page`
  - 真实类型：`object`
  - 当前页面的对象 (this)
- `config`
  - 真实类型：`ServletConfig`
  - `Servlet` 的配置对象
- `exception`
  - 真实类型：`Throwable`
  - 异常对象
### 指令
> 用于导入资源文件
#### 格式
`<%@ instructionName property=value %>`
#### 分类
- `page`
  配置 JSP 页面
  - `contentType`
    设置响应体的 `MIME` 类型以及字符集
    设置当前 `JSP` 页面的编码 (高级 IDE 生效，低级需要设置 `pageEncodeing`)
  - `language`
    语言，目前只支持 `Java`
  - `buffer`
    设置 `out` 的缓存，默认为 8kb
  - `import`
    导包
  - `errorPage`
    设置报错后跳转的页面
  - `isErrorPage`
    用 `true` 和 `false` 设置是否为报错跳转的页面 (写了之后可以用 `exception` 对象输出错误信息)
- `include`
  导入页面资源，用于重复页面
  `file="地址"`
- `taglib`
  导入资源
  - 导入标签库
    `<%@ taglib prefix="前缀名" uri="地址"%>`
  - 使用标签
    `<前缀名:>`
### 注释
- 注释 html：`<!-- -->`
- 注释所有文本：`<%-- --%>`
### MVC 开发模式
> 用于合作，将内容模块化，分成 `model` 、 `view` 、 `Controller` 三部分
- `Model(JavaBean)`
  完成业务操作，如查询数据库，封装对象
- `View(JSP)`
  展示数据
- `Controller(Servlet)`
  - 获取用户输入
  - 调用模型
  - 将数据展示
### EL 表达式
> 表达式语言 (Expression Language)，替换和简化 `JSP` 页面中的 `java` 代码
#### 语法
`${表达式}`
- 忽略 EL 表达式：`\${表达式}`
#### 作用
##### 运算
- 算术运算符：`+ - - /(div) %(mod)`
- 比较运算符：`> < >= <= == !=`
- 逻辑运算符：`&&(and) ||(or) !(not)`
- 空运算符：`empty`
  - 用于判断字符串、集合、数组对象是否为 `null` 并且 `length` 是否为 0
##### 获取值
- 只能从域对象获取值
- 语法
  - `${域名称.键名}` ：从指定域中获取指定键的值
    - 域名称：
      1. `pageScope` -> `pageContext`
      2. `requestscope` -> `request`
      3. `sessionScope` -> `session`
      4. `applicationScope` -> `application (ServletContext)`
    - 例：在 `request` 域中存储了 `name=zhangsan`，获取 `${requestScope.name}`，找不到输出 `""`
  - `${键名}` ：一次从最小的域中查找是否有该键对应的值，直到找到为止

### JSTL 标签
> `JSP` 标准标签库 (`JavaServer Pages Tag Library`)，由 `Apache` 组织提供的开源的免费的 `JSP` 标签，用于简化替换 `JSP` 页面上的 `java` 代码
#### 使用步骤
1. 导入 `jstl` 相关 `jar` 包
   1. `web` 包下新建 `WEB-INF`，`WEB-INF` 下新建 `lib`
   2. 将 `jar` 包复制到 `lib` 中，并右键-> `add as library`
2. 引入标签库
   `<%@ taglib prefix="prefixName" uri="address"%>`
   http://java.sun.com/jsp/jst1/core
3. 使用标签
   `<prefixName:>`
#### 常用标签
- `<c:if>`
  相当于 `java` 的 `if`，但是没有 `else`，要有则再写一个 `c:if`
  - 必需属性：`test`
    接受 `boolean` 表达式，为 `true` 显示，为 `false` 不显示
- `<c:choose>`
  相当于 `java` 的 `switch` 的声明
  - `<c:when>` 相当于 `java` 的 `case`
  - `<c:otherwise>` 相当于 `java` 的 `default`
  ```jsp
  <c:choose>
      <c:when test="${number == 1}">星期一</c:when>
      <c:when test="${number == 2}">星期二</c:when>
      <c:when test="${number == 3}">星期三</c:when>
      <c:when test="${number == 4}">星期四</c:when>
      <c:when test="${number == 5}">星期五</c:when>
      <c:when test="${number == 6}">星期六</c:when>
      <c:when test="${number == 7}">星期天</c:when>
      <c:otherwise>数字输入有误</c:otherwise>
  </c:choose>
  ```
- `<c:foreach>`
  相当于 `java` 的 `for`
  `for (int i = 0; i < 10; i++)`
  - 属性:
    - `begin` ：开始值
    - `end` ：结束值
    - `var` ：临时变量
    - `step` ：步长
    - `varStatus` ：循环状态对象
      - `varStatus.index` ：当前索引
      - `varStatus.count` ：当前循环次数
  ```jsp
  <c:forEach begin="0" end="10" step="2" var="s" varStatus="temp">
      ${temp.count}    ${temp.index}
  </c:forEach>
  ```
  `List<User> list;for(User user : list)`
  - 属性:
    - `items` ：容器对象
    - `var` ：容器中元素的临时变量
    - `varStatus` ：循环状态对象
      - `index` ：容器中元素的索引，从 0 开始
      - `count` ：循环次数，从 1 开始
  ```jsp
  <c:forEach items="list" var="s" varStatus="temp">
      ${temp.index}    ${temp.count}
  </c:forEach>
  ```
### 三层架构
1. 界面层 (表示层)：用户交互的界面
2. 业务逻辑层：处理业务逻辑
3. 数据访问层：操作数据存储文件
# Filter 
> 当访问服务器资源时，浏览器可以将请求拦截下来。可以用于完成登录验证、统一编码处理、敏感字符过滤等==通用操作==
## 创建步骤
1. 定义一个类，实现 `Filter` 接口 (`javax.servlet` 的包)
2. 复写方法
3. 配置要拦截的资源的路径
   `web.xml` 的配置方式类似于 `servlet`
   `@WebFilter("address")`
## 生命周期
### 创建
服务器启动后，创建 `Filter` 对象，调用 `init()`, 只执行一次
- 一般用于加载资源
### 拦截
### 销毁
服务器正常关闭后，执行 `destroy()`, 销毁 `Filter` 对象
- 一般用于释放资源
```java
@WebFilter("/Filter")//设置拦截资源的路径
public class FilterDemo1 implements Filter {
    public void destroy() {
    }
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        //request对象请求消息增强
        content
        //通过过滤器
        chain.doFilter(req, resp);
        //response对象响应消息增强
        content
    }
    public void init(FilterConfig config) throws ServletException {
    }
}
```
## 配置
### 拦截资源
#### 拦截具体资源
`/index.jsp`
#### 拦截目录
`/user/`
#### 拦截后缀名
`*.jsp`
#### 拦截所有资源
`/*`
### 拦截方式
> 资源被访问的方式
#### 注解配置
设置 `dispatcherType` 属性，可以设置多个属性
- `REQUEST`
  默认值，浏览器直接请求资源
- `FORWARD`
  转发访问资源
- `INCLUDE`
  包含访问资源
- `ERROR`
  错误跳转资源
- `ASYNC`
  异步访问资源
```java
@WebFilter(urlPatterns = "address",dispatcherTypes = {DispatcherType.REQUEST,DispatcherType.FORWARD...})
```
#### Web. Xml 配置
在 `<filter-mapping></filter-mapping>` 中添加 `<dispatcher></dispatcher>`
### 过滤器链
> 执行多个过滤器
#### 执行顺序
如果有两个过滤器: 过滤器 1 和过滤器 2
1. 过滤器 1
2. 过滤器 2
3. 资源执行
4. 过滤器 2
5. 过滤器 1
#### 顺序问题
##### 注解配置
按照字典序的顺序执行
##### Web. Xml 配置
按照在 `xml` 中 `filter` 位置的先后顺序执行
## 案例
### 判断是否登录
```java
public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
    //强制转换
    HttpServletRequest request = (HttpServletRequest) req;
    //获取请求路径
    String uri = request.getRequestURI();
    //如果是请求到登录界面直接通过
    if (uri.contains("address")) {//包含js、css、jsp、html、图片、音视频、验证码等资源
        chain.doFilter(request, resp);
    } else {//不是登录界面
        Object user = request.getSession().getAttribute("user");
        if (user != null) {//如果登录了
            chain.doFilter(request, resp);
        } else {//如果没登录
            request.getRequestDispatcher("loginAddress").forward(request, resp);
        }
    }
}
```
### 屏蔽敏感词 (==动态代理==)
```java
//ServletRequest没有getParameter()，必须通过动态代理实现
public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
    //动态代理
    ServletRequest proxy_req = (ServletRequest) Proxy.newProxyInstance(req.getClass().getClassLoader(), req.getClass().getInterfaces(), new InvocationHandler() {
        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            //增强getParameter方法
            if (method.getName().equals("getParameter")) {
                String value = (String) method.invoke(req, args);
                if (value != null) {
                    for (String str : list) {//list中存的是敏感词
                        if (value.contains(str)) {
                            value = value.replaceAll(str, "**");
                        }
                    }
                }
            }
            return method.invoke(req, args);
        }
    });
    chain.doFilter(proxy_req, resp);
}
```
# Listener
> 同 `js` 的监听器，但是很少用
ServletContextlistener : 监听 servletContext 对象的创建和销毁
- Void contextDestroyed (ServletContextEvent sce)
  ServletContext 对象被销毁之前会调用该方法
- Void contextInitialized (ServletContextEvent sce)
ServletContext 对象创建后会调用该方法
## 步骤
1. 定义类，实现 ServletContextlistener 接口
2. 复写方法
3. 配置
   - 注解：@WebListener

# 长轮询
> 将访问阻塞在服务器，通过 `thread` 和循环进行查询，如果一段时间没有结果则返回结果，如果查询到，则立即返回。
- 优点：减少服务器与客户端之间连接的时间，提高效率，实现同步
- 缺点：增加服务器同时连接的数量，增大压力
```java
public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter writer = response.getWriter();
        String codeKey = request.getParameter("CodeKey");
        HttpSession session = request.getSession(true);
        System.out.println("CodeConfirmSessionId:"+request.getSession().getId());
        Random rand = new Random();
        String userName = "wangs"+codeKey;
        int count = 0;//查询计数器，
        while (true) {
            if(count >= 5){//大于5次的话，轮询终止，返回给页面超时状态
                writer.print("timeout");
                break;
            }
            try {
                Thread.sleep(300);// 模仿数据查询任务
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            } 
            int i = rand.nextInt(100); // 产生一个0-100之间的随机数
            if (i > 50 && i < 60) { // 模仿等待随机数确认，随机数在区间内的则认定确认随机数，区间外则认定尚未确认随机数
                writer.print(userName);
                break; // 跳出循环，返回数据
            } else { // 模拟没有数据变化，将休眠 hold住连接
                try {
                    count++;
                    System.out.println("CodeKey未确认"+count);
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }
        }
    }
```