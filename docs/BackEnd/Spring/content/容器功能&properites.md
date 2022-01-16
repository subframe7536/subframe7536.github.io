## 组件添加
### @configuration
等价于原先的配置文件
使用`@Bean("组件id")`声明组件
- 组件注册方法如果容器中已经有组件，就直接调用组件，不会重新创建。
	- 原理：`proxyBeanMethods = true`，保持组件单实例
	- 为false，则会创建新的组件
#### 轻量模式/全模式
`proxyBeanMethods = false`时为轻量模式，即不会检查容器中是否有创建过对象，速度快，用于组件无依赖关系的情况
- `@configuration` 改为 `@component`
- 有依赖关系时用`@configuration`
### @Conditional
按照情况注入Bean
#### @ConditionalOnBean("a")
当容器中有a的实例才执行
### @ImportResource("classpath:xx.xml")
导入xml配置文件
### @ConfigurationProperties(prefix="xx")
在`@Component`下/配置类中加`@EnableConfigurationProperties(xx.class)`
用于导入配置文件，前缀为xx	


## .properties配置springboot
### 新建
`new` -> `Resource Bundle`
### 查找自动配置文件
或者`debug=true`














