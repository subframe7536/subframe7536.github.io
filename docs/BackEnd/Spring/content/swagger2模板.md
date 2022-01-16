### 1、pom.xml
```xml
		<!--mysql-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <!--<scope>runtime</scope>-->
        </dependency>

        <!--mybatis-plus-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.0.3</version>
        </dependency>

        <!--代码生成器所需模板引擎-->
        <dependency>
            <groupId>org.apache.velocity</groupId>
            <artifactId>velocity-engine-core</artifactId>
            <version>2.1</version>
        </dependency>

        <!--lombok-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.2</version>
        </dependency>

        <!--druid-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.10</version>
        </dependency>

        <!-- fastjson -->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.56</version>
        </dependency>

        <!--swagger-->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.9.2</version>
        </dependency>

        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>swagger-bootstrap-ui</artifactId>
            <version>1.8.7</version>
        </dependency>
    </dependencies>
```

```xml
	<build>
        <resources>
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.*</include>
                </includes>
            </resource>
            <resource>
                <directory>src/main/resources</directory>
                <includes>
                    <include>**/*.*</include>
                </includes>
            </resource>
        </resources>

        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```

### 2、application.yml

```yml
spring:
  application:
    name: my-plus
  datasource:
    url: jdbc:mysql://localhost:3306/devdb?characterEncoding=UTF-8&serverTimezone=Asia/Shanghai&useSSL=false
    username: root
    password: root
    driver-class-name: com.mysql.cj.jdbc.Driver

mybatis-plus:
  mapper-locations: classpath:/com/mby/desert/mapper/xml/*Mapper.xml
  typeAliasesPackage: com.mby.desert.entity
  global-config:
  #主键类型  0:"数据库ID自增", 1:"用户输入ID",2:"全局唯一ID (数字类型唯一ID)", 3:"全局唯一ID UUID";
    id-type: 0
    #字段策略 0:"忽略判断",1:"非 NULL 判断"),2:"非空判断"
    field-strategy: 2
    #刷新mapper 调试神器
    refresh-mapper: true
    #驼峰下划线转换
    #db-column-underline: true
    # Sequence序列接口实现类配置
    key-generator: com.baomidou.mybatisplus.incrementer.OracleKeyGenerator
  configuration:
    map-underscore-to-camel-case: true
    cache-enabled: false

pagehelper:
  helper-dialect: mysql
  reasonable: false
  support-methods-arguments: true
  params: count=countSql
  
logging.level.com.mclrock.myshiro.mapper: debug
```

### 3、MybatisPlusConfig.java

```java
@Configuration
public class MybatisPlusConfig {

    /**
     *   mybatis-plus分页插件
     */
    @Bean
    public PaginationInterceptor paginationInterceptor() {
        PaginationInterceptor page = new PaginationInterceptor();
        page.setDialectType("mysql");
        return page;
    }
}
```

### 4、SwaggerConfig.xml

```java
@Configuration
@EnableSwagger2
public class SwaggerConfig {

    ApiInfo apiInfo() {
        return new ApiInfoBuilder()//
                .title("管理后台API")//
                .description("接口文档最终解释权请联系开发人员")//
                .version("1.0.0")//
                .build();
    }

    @Bean
    public Docket customImplementation() {
        ParameterBuilder tokenPar = new ParameterBuilder();
        List<springfox.documentation.service.Parameter> pars = new ArrayList<>();
        tokenPar.name("token")
                .description("令牌")
                .modelRef(new ModelRef("string"))
                .parameterType("header")
                .required(false)
                .build();
        pars.add(tokenPar.build());

        return new Docket(DocumentationType.SWAGGER_2)//
                .select()//
                .apis(RequestHandlerSelectors.basePackage("com.mclrock.myshiro.controller"))//
                .paths(PathSelectors.any())
                .build()//
                .globalOperationParameters(pars)
                .apiInfo(apiInfo());
    }
}
```



### 5、templates/controller.vm

```java
package ${package.Controller};

import com.baomidou.mybatisplus.extension.api.R;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import ${package.Service}.${table.serviceName};
import ${package.Entity}.${entity};
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;

#if(${restControllerStyle})

#else
import org.springframework.stereotype.Controller;
#end

#if(${superControllerClassPackage})
import ${superControllerClassPackage};
#end
import java.util.List;

/**
* @author ${author}
* @since ${date}
*/
@Slf4j
@Api(tags = {"$!{table.comment}"})
@RestController
@RequestMapping("#if(${package.ModuleName})/${package.ModuleName}#end/#if(${controllerMappingHyphenStyle})${controllerMappingHyphen}#else${table.entityPath}#end")
#if(${kotlin})
class ${table.controllerName}#if(${superControllerClass}) : ${superControllerClass}()#end

#else
#if(${superControllerClass})
public class ${table.controllerName} extends ${superControllerClass} {
#else
public class ${table.controllerName} {
#end

  @Autowired
  public ${table.serviceName} ${table.entityPath}Service;

#end
}
```

### 6、templates/entity.vm

```java
package ${package.Entity};

#foreach($pkg in ${table.importPackages})
import ${pkg};
#end
#if(${entityLombokModel})

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import lombok.AllArgsConstructor;
import lombok.experimental.Accessors;
#end
import org.springframework.format.annotation.DateTimeFormat;

/**
 * @author ${author}
 * @since ${date}
 */
@ApiModel(value = "$!{table.name}")
#if(${entityLombokModel})
@Data
@AllArgsConstructor
@Accessors(chain = true)
#end
@JsonInclude(value = JsonInclude.Include.NON_DEFAULT)
#if(${table.convert})
@TableName("${table.name}")
#end
#if(${superEntityClass})
public class ${entity} extends ${superEntityClass}#if(${activeRecord})<${entity}>#end {
#elseif(${activeRecord})
public class ${entity} extends Model<${entity}> {
#else
public class ${entity} implements Serializable{
#end

    private static final long serialVersionUID=1L;

## ----------  BEGIN 字段循环遍历  ----------
#foreach($field in ${table.fields})
#if(${field.keyFlag})
  #set($keyPropertyName=${field.propertyName})
#end
#if("$!field.comment" != "")
    @ApiModelProperty(value = "${field.comment}")
#end
#if(${field.keyFlag})
## 主键
#if(${field.keyIdentityFlag})
    @TableId(value = "${field.name}" , type = IdType.AUTO)
#elseif(!$null.isNull(${idType}) && "$!idType" != "")
    @TableId(value = "${field.name}" , type = IdType.${idType})
#elseif(${field.convert})
    @TableId("${field.name}")
#end
## 普通字段
#elseif(${field.fill})
## -----   存在字段填充设置   -----
#if(${field.convert})
    @TableField(value = "${field.name}" , fill = FieldFill.${field.fill})
#else
    @TableField(fill = FieldFill.${field.fill})
#end
#elseif(${field.convert})
    @TableField("${field.name}")
#end
## 乐观锁注解
#if(${versionFieldName}==${field.name})
    @Version
#end
## 逻辑删除注解
#if(${logicDeleteFieldName}==${field.name})
    @TableLogic
#end
## date日期格式
#if(${field.propertyType}=="LocalDateTime")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
#end
#if(${field.propertyType}=="LocalDate")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
#end
    private ${field.propertyType} ${field.propertyName};

#end
## ----------  END 字段循环遍历  ----------
#if(!${entityLombokModel})
  #foreach($field in ${table.fields})
    #if(${field.propertyType.equals("boolean")})
      #set($getprefix="is")
    #else
      #set($getprefix="get")
    #end

    public ${field.propertyType} ${getprefix}${field.capitalName}(){
        return ${field.propertyName};
    }

    #if(${entityBuilderModel})
    public ${entity} set${field.capitalName}(${field.propertyType} ${field.propertyName}){
    #else
    public void set${field.capitalName}(${field.propertyType} ${field.propertyName}) {
    #end
        this.${field.propertyName} = ${field.propertyName};
    #if(${entityBuilderModel})
        return this;
    #end
    }
  #end
#end

#if(${entityColumnConstant})
  #foreach($field in ${table.fields})
    public static final String ${field.name.toUpperCase()} ="${field.name}" ;
  #end
#end
#if(${activeRecord})
    @Override
    protected Serializable pkVal(){
      #if(${keyPropertyName})
        return this.${keyPropertyName};
      #else
        return null;
      #end
    }
#end
#if(!${entityLombokModel})
@Override
public String toString() {
        return "${entity}{" +
        #foreach($field in ${table.fields})
          #if($!{velocityCount}==1)
            "${field.propertyName}=" + ${field.propertyName} +
          #else
            ", ${field.propertyName}=" + ${field.propertyName} +
          #end
        #end
        "}";
        }
#end
}
```

### 7、GeneratorCode.java

```java
public class GeneratorCode {

    private static String packageName = "com.mby.desert";
    private static String outDir = System.getProperty("user.dir")+"/src/main/java";
    private static String entity = "entity";
    private static String mapper = "mapper";
    private static String service = "service";
    private static String impl = "service.impl";
    private static String controller = "controller";
    private static String xml = "mapper.xml";
    //创建表
//    private static boolean isOverEntity = true;
//    private static boolean isOverController = true;
//    private static boolean isOverService = true;
//    private static boolean isOverServiceImpl = true;
//    private static boolean isOverMapper = true;
//    private static boolean isOverXml = true;

    //修改表
    private static boolean isOverEntity = true;
    private static boolean isOverController = false;
    private static boolean isOverService = false;
    private static boolean isOverServiceImpl = false;
    private static boolean isOverMapper = true;
    private static boolean isOverXml = true;

    private static String entityVM = "/templates/entity.vm";
    private static String controllerVM = "/templates/controller.vm";
    private static String serviceVM = "";
    private static String serviceImplVM = "";
    private static String mapperVM = "";
    private static String xmlVM = "";

    private static String[] baseDir = {entity, mapper, service, impl, controller};

    public static void main(String[] args) {
        //user -> UserService, 设置成true: user -> IUserService
        boolean serviceNameStartWithI = false;
        generateByTables(serviceNameStartWithI, packageName,

                "cou_register"
               );
    }

    private static void generateByTables(boolean serviceNameStartWithI, String packageName, String... tableNames) {
        GlobalConfig config = new GlobalConfig();
        String dbUrl = "jdbc:mysql://localhost:3306/desert?serverTimezone=Asia/Shanghai&characterEncoding=utf-8&useSSL=true";
        DataSourceConfig dataSourceConfig = new DataSourceConfig();
        dataSourceConfig.setDbType(DbType.MYSQL)
                .setUrl(dbUrl)
                .setUsername("root")
                .setPassword("root")
                .setDriverName("com.mysql.cj.jdbc.Driver");
        StrategyConfig strategyConfig = new StrategyConfig();
        strategyConfig
                .setCapitalMode(false)
                .setEntityLombokModel(true)
//                .setDbColumnUnderline(true)
                .setRestControllerStyle(true)
                .entityTableFieldAnnotationEnable(false)
                .setNaming(NamingStrategy.underline_to_camel)
                //修改替换成你需要的表名，多个表名传数组
                .setInclude(tableNames);
        config.setActiveRecord(true)
                .setAuthor("Xiao")
                .setOutputDir(outDir)
                .setBaseResultMap(true)
                .setBaseColumnList(true)
                .setFileOverride(true)
                .setEnableCache(false)
                // XML ResultMap
                .setBaseResultMap(true)
                // XML columList;
                .setBaseColumnList(true);
        if (!serviceNameStartWithI) {
            config.setServiceName("%sService");
        }

        PackageConfig pcf = initPackage();

        TemplateConfig tc = initTemplateConfig(packageName);

        new AutoGenerator().setGlobalConfig(config)
                .setDataSource(dataSourceConfig)
                .setStrategy(strategyConfig)
                .setPackageInfo(pcf)
                .setTemplate(tc)
                .execute();
    }

    /**
     * 根据自己的需要，修改哪些包下面的 要覆盖还是不覆盖
     *
     * @param packageName
     */
    private static TemplateConfig initTemplateConfig(String packageName) {
        TemplateConfig tc = new TemplateConfig();
        for (String tmp : baseDir) {
            initVM(tc);
            File file = new File(Paths.get(outDir, String.join("/", packageName.split("\\.")), tmp).toString());
            String[] list = file.list();
            if (list != null && list.length > 0) {
                if (!isOverController) {
                    tc.setController(null);
                }
                if (!isOverService) {
                    tc.setService(null);
                }
                if (!isOverServiceImpl) {
                    tc.setServiceImpl(null);
                }
                if (!isOverEntity) {
                    tc.setEntity(null);
                }
                if (!isOverMapper) {
                    tc.setEntity(null);
                }
                if (!isOverXml) {
                    tc.setXml(null);
                }
            }
        }
        return tc;
    }

    private static void initVM(TemplateConfig tc) {
        if (stringIsNotNull(entityVM)) {
            tc.setEntity(entityVM);
        }
        if (stringIsNotNull(mapperVM)) {
            tc.setMapper(mapperVM);
        }
        if (stringIsNotNull(serviceImplVM)) {
            tc.setServiceImpl(serviceImplVM);
        }
        if (stringIsNotNull(serviceVM)) {
            tc.setService(serviceVM);
        }
        if (stringIsNotNull(xmlVM)) {
            tc.setXml(xmlVM);
        }
        if (stringIsNotNull(controllerVM)) {
            tc.setController(controllerVM);
        }
    }

    /**
     * 简单判断字符串是不是为空
     *
     * @param s
     * @return
     */
    private static boolean stringIsNotNull(String s) {
        if (null != s && !s.equals("") && s.length() > 0 && s.trim().length() > 0) {
            return true;
        }
        return false;
    }

    /**
     * 初始化包目录配置
     *
     * @return
     */
    private static PackageConfig initPackage() {
        PackageConfig packageConfig = new PackageConfig();
        packageConfig.setParent(packageName);
        packageConfig.setService(service);
        packageConfig.setServiceImpl(impl);
        packageConfig.setController(controller);
        packageConfig.setEntity(entity);
        packageConfig.setXml(xml);
        return packageConfig;
    }
}
```

### 8、MainApplication.java

```java
@MapperScan("com.mclrock.myshiro.mapper")
@SpringBootApplication
public class MainApplication {

    public static void main(String[] args) {
        SpringApplication.run(MianApplication.class, args);
    }

}
```