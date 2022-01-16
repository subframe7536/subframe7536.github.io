# 创建 spring 容器
在容器中创建对象，不是直接写
```java
//根据application.xml创建容器  
ApplicationContext app = new ClassPathXmlApplicationContext("application.xml");  
//还可以通过注解创建Spring容器
//通过application.xml中的Bean的ID创建实现类  
UserService service = (UserService) app.getBean("service"); 

//通过类的类型创建实现类，application.xml中有多个实现对象时会报错 
UserService service1 = app.getBean(UserService.class);  

service.service();  
service1.service();
```

# 配置容器 (xml 方式)

- 建议用注解

`application.xml`

```xml
<?xml version = "1.0" encoding = "UTF-8"?>  
<beans xmlns = "http://www.springframework.org/schema/beans"  
		xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"  
		xsi:schemaLocation = "http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">  
	<!--创建容器-->  
	<!--设置id(唯一)、class(全限定名)、初始化方法、销毁方法-->  
	<bean id = "dao" class = "com.example.useDaoImpl.UserDaoImpl1" init-method = "init" 
		  destroy-method = "destroy"/>  
	<bean id = "service" class = "com.example.Controller.UserServiceImpl">  
		<!--属性注入，name(属性名)、value(属性值)、ref(对象引用值)-->  
		<property name = "UserDao" ref = "dao"/>  
		<property name = "name" value = "subframe"/>  
		<property name = "age" value = "13"/>  
		<!--集合的注入方法-->  
		<property name = "list">  
			<list> 
				<value>1</value>  
				<value>2</value>  
				<value>3</value>  
				<!--注入对象-->  
				<ref xml:id = "dao"/>  
			</list>
		</property> <!--map的注入方式-->  
		<property name = "map">  
			<map>
				<entry key = "123" value = "1"/>  
				<!--注入对象-->  
				<entry key-ref = "" value-ref = ""/>  
			</map> 
		</property> <!--property-->  
		<property name = "properties">  
			<props> 
				<prop key = "k1">000</prop>  
			</props> 
		</property> 
		<!--对象初始化方法-->  
		<constructor-arg name = "dao" ref = "dao"/>  
		</bean> <!--引入文件-->  
	<import resource = "service.xml"/>  
</beans>
```
#### qwe