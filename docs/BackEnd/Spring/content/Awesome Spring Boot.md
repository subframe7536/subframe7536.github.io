# Awesome Spring Boot

收集各种 Spring Boot 学习资源

[参与贡献](https://github.com/ityouknow/awesome-spring-boot/issues/1)


## 目录

- [博客](#博客)
- [网站](#网站)
- [开源](#开源)
- [其它](#其它)

Spring Boot Starters 列表
### Spring Boot application starters

**Spring Boot application starters** 

|名称|描述|
|------|:-----|
|spring-boot-starter|核心starter，包括自动配置支持，日志和YAML|
|spring-boot-starter-activemq|用于使用Apache ActiveMQ实现JMS消息|
|spring-boot-starter-amqp|用于使用Spring AMQP和Rabbit MQ|
|spring-boot-starter-aop|用于使用Spring AOP和AspectJ实现面向切面编程|
|spring-boot-starter-artemis|使用Apache Artemis实现JMS消息|
|spring-boot-starter-batch|对Spring Batch的支持|
|spring-boot-starter-cache|用于使用Spring框架的缓存支持|
|spring-boot-starter-cloud-connectors|对Spring Cloud Connectors的支持，用于简化云平台下（例如Cloud Foundry 和Heroku）服务的连接|
|spring-boot-starter-data-cassandra|用于使用分布式数据库Cassandra和Spring Data Cassandra|
|spring-boot-starter-data-cassandra-reactive|用于使用分布式数据库Cassandra和Spring Data Cassandra 的响应式支持|
|spring-boot-starter-data-couchbase|用于使用基于文档的数据库Couchbase和Spring Data Couchbase|
|spring-boot-starter-data-couchbase-reactive|用于使用基于文档的数据库Couchbase和Spring Data Couchbase 的响应式支持|
|spring-boot-starter-data-elasticsearch|用于使用Elasticsearch搜索，分析引擎和Spring Data Elasticsearch|
|spring-boot-starter-data-jpa|用于使用Hibernate实现Spring Data JPA|
|spring-boot-starter-data-ldap|Spring Boot 对 Spring Data LDAP（轻量级目录访问协议）的支持|
|spring-boot-starter-data-mongodb|用于使用基于文档的数据库MongoDB和Spring Data MongoDB|
|spring-boot-starter-data-mongodb-reactive|用于使用基于文档的数据库MongoDB和Spring Data MongoDB 的响应式支持|
|spring-boot-starter-data-neo4j|用于使用图数据库Neo4j和Spring Data Neo4j|
|spring-boot-starter-data-redis|用于使用Spring Data Redis和Jedis客户端操作键—值数据存储Redis|
|spring-boot-starter-data-redis-reactive|用于使用Spring Data Redis和Jedis客户端操作键—值数据存储Redis的响应式支持|
|spring-boot-starter-data-rest|用于使用Spring Data REST暴露基于REST的Spring Data仓库|
|spring-boot-starter-data-solr|通过Spring Data Solr使用Apache Solr搜索平台|
|spring-boot-starter-freemarker|用于使用FreeMarker模板引擎构建MVC web应用|
|spring-boot-starter-groovy-templates|用于使用Groovy模板引擎构建MVC web应用|
|spring-boot-starter-hateoas|用于使用Spring MVC和Spring HATEOAS实现基于超媒体的RESTful web应用|
|spring-boot-starter-integration|用于使用Spring Integration|
|spring-boot-starter-jdbc|对JDBC的支持（使用Tomcat JDBC连接池）|
|spring-boot-starter-jersey|用于使用JAX-RS和Jersey构建RESTful web应用，可使用[spring-boot-starter-web](http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#spring-boot-starter-web)替代|
|spring-boot-starter-jooq|用于使用JOOQ访问SQL数据库，可使用[spring-boot-starter-data-jpa](http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#spring-boot-starter-data-jpa)或[spring-boot-starter-jdbc](http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#spring-boot-starter-jdbc)替代|
|spring-boot-starter-json|Spring Boot 对 Json 读写支持的组建|
|spring-boot-starter-jta-atomikos|用于使用Atomikos实现JTA事务|
|spring-boot-starter-jta-bitronix|用于使用Bitronix实现JTA事务|
|spring-boot-starter-jta-narayana|Spring Boot Narayana JTA Starter|
|spring-boot-starter-mail|用于使用Java Mail和Spring框架email发送支持|
|spring-boot-starter-mustache|用于使用Mustache模板引擎构建MVC web应用|
|spring-boot-starter-quartz|用于定时任务 quartz 的支持|
|spring-boot-starter-security|对Spring Security的支持|
|spring-boot-starter-test|用于测试Spring Boot应用，支持常用测试类库，包括JUnit, Hamcrest和Mockito|
|spring-boot-starter-thymeleaf|用于使用Thymeleaf模板引擎构建MVC web应用|
|spring-boot-starter-validation|用于使用Hibernate Validator实现Java Bean校验|
|spring-boot-starter-web|用于使用Spring MVC构建web应用，包括RESTful。Tomcat是默认的内嵌容器|
|spring-boot-starter-web-services|对Spring Web服务的支持|
|spring-boot-starter-webflux|对Spring webflux服务的支持|
|spring-boot-starter-websocket|用于使用Spring框架的WebSocket支持构建WebSocket应用|

**Spring Boot 生产级 starters**

|名称|描述|
|----|:----|
|spring-boot-starter-actuator|用于使用Spring Boot的Actuator，它提供了production ready功能来帮助你监控和管理应用程序|

最后，Spring Boot还包含一些用于排除或交换某些特定技术方面的starters：

**Spring Boot 技术性 Starters**

|名称|描述|
|------|:------|
|spring-boot-starter-jetty|用于使用Jetty作为内嵌servlet容器，可使用[spring-boot-starter-tomcat](http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#spring-boot-starter-tomcat)替代|
|spring-boot-starter-log4j2|用于使用Log4j2记录日志，可使用[spring-boot-starter-logging](http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#spring-boot-starter-logging)代替|
|spring-boot-starter-logging|用于使用Logback记录日志，默认的日志starter|
|spring-boot-starter-reactor-netty|用于使用 netty 作为响应式内嵌容器|
|spring-boot-starter-tomcat|用于使用Tomcat作为内嵌servlet容器，[spring-boot-starter-web](http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#spring-boot-starter-web)使用的默认servlet容器|
|spring-boot-starter-undertow|用于使用Undertow作为内嵌servlet容器，可使用[spring-boot-starter-tomcat](http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#spring-boot-starter-tomcat)替代|



## 博客

- [纯洁的微笑-Spring Boot系列文章](http://www.ityouknow.com/spring-boot.html)  
- [江南一点雨-关于Spring Boot](https://www.javaboy.org/springboot/)  
- [林祥纤-从零开始学Spring Boot](http://412887952-qq-com.iteye.com/category/356333)   
- [Mkyong-Spring Boot教程（国外）](http://www.mkyong.com/tutorials/spring-boot-tutorials/)
- [baeldung-Spring Boot教程（国外）](https://www.baeldung.com/spring-boot)  
- [liaokailin的专栏-Spring Boot实战](http://blog.csdn.net/liaokailin/article/category/5765237)
- [catoop的专栏-Spring Boot 学习](http://blog.csdn.net/column/details/spring-boot.html)  
- [方志朋-SpringBoot 非官方教程](https://www.fangzhipeng.com/spring-boot.html)  
- [嘟嘟-Spring-Boot干货系列](http://tengj.top/categories/Spring-Boot%E5%B9%B2%E8%B4%A7%E7%B3%BB%E5%88%97/)  
- [小柒-SpringBoot开发案例](https://blog.52itstyle.com/category/springBoot/)  
- [天码营-Spring Boot](https://www.tianmaying.com/tutorials/tag/Springboot)  
- [猿天地-Spring Boot](http://cxytiandi.com/blog/detail/17437)  
- [刘冬的博客-Spring Boot](http://www.cnblogs.com/GoodHelper/tag/spring%20boot/default.html)  
- [唐亚峰 Battcn-Spring Boot](https://blog.battcn.com/categories/SpringBoot/)  
- [sylvanassun-Spring Boot](https://sylvanassun.github.io/categories/%E5%90%8E%E7%AB%AF/Java/Spring-Boot/)  
- [dalaoyang-Spring Boot](https://www.dalaoyang.cn/tag/springboot/)  
- [謝謝同学-Spring Boot](https://blog.lqdev.cn/categories/springboot/)  
- [追梦1819-Spring Boot](https://blog.csdn.net/weixin_39759846/column/info/38599)  
- [mrbird-Spring Boot](https://mrbird.cc/tags/Spring-Boot/)  
- [Thinkingcao-Spring Boot](https://blog.csdn.net/thinkingcao/category_9281035.html)  

## 开源

- [纯洁的微笑 Spring Boot 示例](https://github.com/ityouknow/spring-boot-examples)
- [Spring Boot 官方示例](https://github.com/spring-projects/spring-boot/tree/master/spring-boot-samples)  
- [Spring Boot开源软件 云收藏](https://github.com/cloudfavorites/favorites-web)  
- [Docker+SpringBoot+Mybatis+thymeleaf等技术实现的Java博客系统](https://github.com/ZHENFENG13/My-Blog)  
- [Spring boot & Shiro 权限管理系统](https://github.com/wuyouzhuguli/FEBS)  
- [Spring Boot实现支付服务：支付宝，微信...](https://gitee.com/52itstyle/spring-boot-pay)  
- [Spring Boot后台商城 h5 小程序](https://gitee.com/JiaGou-XiaoGe/webappchat)  
- [基于Spring Boot响应式文件浏览管理器](https://gitee.com/alexyang/spring-boot-filemanager)  
- [Spring Boot开源博客](https://github.com/Raysmond/SpringBlog)  
- [支付宝、微信、银联支付解决方案](https://gitee.com/52itstyle/spring-boot-pay)  
- [邮件发送服务多种实现，队列，线程定时任务](https://gitee.com/52itstyle/spring-boot-mail)  
- [Spring Boot项目实践总结](https://github.com/timebusker/spring-boot)  
- [Vue+SpringBoot实现的多用户博客管理平台](https://github.com/lenve/VBlog)  
- [Vue+SpringBoot实现的人力资源管理系统](https://github.com/lenve/vhr)  
- [hsweb企业后台管理系统基础框架](https://github.com/hs-web/hsweb-framework)  
- [一个基于spring boot 实现的股票指数💹爬虫](https://github.com/kingschan1204/istock)  
- [KKFileView-SpringBoot实现在线预览](https://gitee.com/kekingcn/file-online-preview)
- [boot-websocket-log-SpringBoot实现日志WEB输出](https://gitee.com/kailing/boot-websocket-log)
- [SpringBoot+MyBatis+ApacheShiro+Ehcahe基础平台](https://gitee.com/lcg0124/bootdo)
- [spring-boot各种示例](https://github.com/leelance/spring-boot-all)
- [一个基于Spring Boot & MyBatis的种子项目，用于快速构建中小型API、RESTful API项目](https://github.com/lihengming/spring-boot-api-project-seed)
- [JWT (Json Web Token) with Spring Security and Spring Boot 2](https://github.com/szerhusenBC/jwt-spring-security-demo)
- [基于Spring-boot和bootstrap搭建的商城系统](https://github.com/vito16/shop)
- [Deployment scripts & config for Sock Shop](https://github.com/microservices-demo/microservices-demo)
- [Spring Boot 开源博客-DBlog](https://gitee.com/yadong.zhang/DBlog)
- [Spring Boot 实现的简易社区](https://github.com/ChinaLHR/JavaQuarkBBS)
- [springboot+shiro+jwt 开源项目](https://gitee.com/tomsun28/bootshiro)
- [Guns-基于SpringBoot的后台管理系统](https://github.com/stylefeng/Guns)
- [halo-基于SpringBoot的博客系统](https://github.com/ruibaby/halo)
- [zhudyos/duic Distributed configuration center（分布式配置中心）:new:](https://github.com/zhudyos/duic)
- [Spring Boot后端 + Vue管理员前端 + 微信小程序用户前端](https://github.com/linlinjava/litemall)
- [mall-SpringBoot+MyBatis 电商系统](https://github.com/macrozheng/mall)
- [Vue+SpringBoot实现的实体书购买平台](https://github.com/liuzhengwei127/Ebook)
- [基于Spring Boot2.0 微服务脚手架](https://github.com/Senssic/sc-whorl)
- [Spring Boot 2.x 现代化的脚手架项目](https://github.com/hope-for/hope-boot)
- [Spring-Boot-Plus 后台快速开发脚手架](https://github.com/geekidea/spring-boot-plus)
- [当Parallel遇上了DI - SpringBoot并行聚合最佳实践](https://github.com/lvyahui8/spring-boot-data-aggregator)
- [JApiDocs：无需注解的 SpringBoot API文档生成工具](https://github.com/YeDaxia/JApiDocs)
- [SpringBoot+Vue搭建的公司门户网站和后台管理系统](https://gitee.com/JuWaiRenDian/mywebsite)


## 网站

- [云收藏](http://favorites.ren/lookAround)  
- [Spring boot 官网](http://projects.spring.io/spring-boot/)  
- [Spring Boot 参考指南- 英文版](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)  
- [网易云课堂Spring Boot视频](http://study.163.com/courses-search?keyword=Spring%20Boot)   
- [慕课网Spring Boot视频](https://www.imooc.com/search/?words=spring%20boot)   
- [开源书籍-微服务：从设计到部署](https://github.com/oopsguy/microservices-from-design-to-deployment-chinese)    

## 其它

- [知乎-Spring Boot要如何学习？](https://www.zhihu.com/question/53729800/answer/311948415)  
- [Spring Cloud 中文索引](https://github.com/ityouknow/awesome-spring-cloud)   
- [程序员导航网站](http://tooool.org/)  
- [IT行业中文资源大全](https://github.com/ityouknow/awesome-list)  
- [很多的 Hello Demo](https://github.com/hellokoding)  


---

关注公众号：纯洁的微笑，回复"springboot"进群交流

![](http://ityouknow.com/assets/images/keeppuresmile.jpg)