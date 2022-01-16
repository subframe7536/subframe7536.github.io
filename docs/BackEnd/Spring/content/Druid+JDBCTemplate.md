# 连接池
> 事先实例化数据源提高性能，连接时资源从数据源中获取，使用完归还数据源

# Druid
通过注解实现

## JDBCTemplate
### maven
```xml
<dependency>  
	<groupId>mysql</groupId>  
	<artifactId>mysql-connector-java</artifactId>  
</dependency>  
<dependency>  
	<groupId>com.alibaba</groupId>  
	<artifactId>druid</artifactId>  
	<version>1.1.21</version>  
</dependency>
<dependency>  
 	<groupId>org.springframework</groupId>  
 	<artifactId>spring-jdbc</artifactId>  
 	<version>5.0.5.RELEASE</version>  
</dependency>  
<dependency>  
 	<groupId>org.springframework</groupId>  
 	<artifactId>spring-tx</artifactId>  
 	<version>5.0.5.RELEASE</version>  
</dependency>
```
### 配置连接属性
创建db.properties
```
jdbc.username=root  
jdbc.password=1234  
jdbc.url=jdbc:mysql://localhost:3306/数据库名称?characterEncoding=UTF-8
jdbc.driver=com.mysql.jdbc.Driver
```
### 引入
```xml
<beans xmlns="http://www.springframework.org/schema/beans"  
	   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
	   xmlns:context="http://www.springframework.org/schema/context"  
	   xsi:schemaLocation="http://www.springframework.org/schema/beans  
						   http://www.springframework.org/schema/beans/spring-beans.xsd 
						   http://www.springframework.org/schema/context 
						   http://www.springframework.org/schema/context/spring-context.xsd">
<!--引入druid配置文件-->  
	<context:property-placeholder location="classpath:DB.properties" />  
  
<!--druid连接池-->  
	<bean name="druidDataSource" class="com.alibaba.druid.pool.DruidDataSource"/>  
		<property name="url" value="${jdbc.url}" />  
		<property name="driverClassName" value="${jdbc.driver}" />  
		<property name="username" value="${jdbc.username}" />  
		<property name="password" value="${jdbc.password}" />  
	</bean>
	<!--配置JDBCTemplate对应Bean，将数据源对象装配到JDBCTemplate对象中\-->  
	<bean id="jdbctemplate" class="org.springframework.jdbc.core.JdbcTemplate"/>  
 		<property name="dataSource" ref="druidDataSource"/>  
	</bean>
</beans>
```
### 使用
```java
ApplicationContext app = new ClassPathXmlApplicationContext("application.xml");  
JdbcTemplate template = app.getBean(JdbcTemplate.class);

//?表示填充的参数
//update、insert、delete
String sql = "UPDATE student SET age = ? WHERE sid = ?";
template.update(sql, 13,21020);

//select
//单行数据
String sql1 = "select * from asd where aaa = ?";
Map<String, Object> map = template.queryForMap(sql,123);
//多行数据
String sql1 = "select * from asd";
List<Map<String, Object>> list = template.queryForList(sql);
//返回封装的实体类
String sql = "select * from lost where LOST_ID = ?";
RowMapper<Lost> mapper=new BeanPropertyRowMapper<>(Lost.class);  
Lost lost = template.queryForObject(sql,mapper,200004);
//返回封装的实体类集合
String sql = "select * from lost";  
RowMapper<Lost> mapper = new BeanPropertyRowMapper<>(Lost.class);  
List<Lost> list = template.query(sql,new BeanPropertyRowMapper<>(Lost.class));
```