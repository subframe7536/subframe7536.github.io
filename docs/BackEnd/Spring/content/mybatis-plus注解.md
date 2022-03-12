## 常用注解
### @TableName
> 映射数据库的表名
```java
package com.southwind.mybatisplus.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName(value = "user")
public class Account {
    private Integer id;
    private String name;
    private Integer age;
}
```
### @TableId
> 设置主键映射，value 映射主键字段名
- type 设置==主键类型==和==主键的生成策略==
```java
AUTO(0),
NONE(1),
INPUT(2),
ASSIGN_ID(3),
ASSIGN_UUID(4),
@Deprecated
ID_WORKER(3),
@Deprecated
ID_WORKER_STR(3),
/** @deprecated */
@Deprecated
UUID(4);
```

| 值          | 描述                                         |
| ----------- | -------------------------------------------- |
| AUTO        | 数据库自增                                   |
| NONE        | MP set 主键，雪花算法实现                    |
| INPUT       | 手动赋值，没有就数据库自增                   |
| ASSIGN_ID   | 分配 ID，数据类型可以是Long, Integer, String |
| ASSIGN_UUID | 分配 UUID，数据类型必须是String              |

### @TableField
> 映射非主键字段

| 参数   | 含义                                                                                                           |
| ------ | -------------------------------------------------------------------------------------------------------------- |
| value  | 映射字段名                                                                                                     |
| exist  | 表示是否为数据库字段 false，如果实体类中的成员变量在数据库中没有对应的字段，则可以使用 exist，如在`VO`/`DTO`中 |
| select | 表示是否查询该字段                                                                                             |
| fill   | 表示是否自动填充，将对象存入数据库的时候，由 MyBatis Plus 自动给某些字段赋值，如`create_time`/`update_time`    |

#### 1. 给表添加 create_time、update_time 字段
#### 2. 实体类中添加成员变量
```java
package com.southwind.mybatisplus.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

@Data
@TableName(value = "user")
public class User {
    @TableId
    private String id;
    @TableField(value = "name",select = false)
    private String title;
    private Integer age;
    @TableField(exist = false)
    private String gender;
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
}
```
#### 3. 创建自动填充处理器
#code-snippet 
```java
import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;
import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import org.apache.ibatis.reflection.MetaObject;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;

@Configuration
// 配置文件
public class MybatisPlusConfig implements MetaObjectHandler {
    @Bean
    public PaginationInterceptor paginationInterceptor() {
        return new PaginationInterceptor();
    }

    @Override
    public void insertFill(MetaObject metaObject) {
		//通用填充
		this.setFieldValByName("createTime",LocalDateTime.now(),metaObject);
		//严格填充,只针对非主键的字段,只有该表注解了fill并且字段名和字段属性能匹配到才会进行填充(null值不填充)
        this.strictInsertFill(metaObject, "createTime", LocalDateTime.class, LocalDateTime.now());
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        this.strictUpdateFill(metaObject, "updatedTime", LocalDateTime.class, LocalDateTime.now());
    }
}
```
#### 4. 添加序列化器
```xml
<!-- 序列化器 -->
<dependency>  
    <groupId>com.fasterxml.jackson.datatype</groupId>  
    <artifactId>jackson-datatype-jsr310</artifactId>  
    <version>2.13.0</version>  
</dependency>
```

### @Version
> 标记乐观锁，通过 version 字段来保证数据的安全性，当修改数据的时候，会以 version 作为条件，当条件成立的时候才会修改成功。
- version = 2
线程1：update ... set version = 2 where version = 1
线程2：update ... set version = 2 where version = 1
#### 1. 数据库表添加 version 字段，默认值为 1
#### 2. 实体类添加 version 成员变量，并且添加 @Version 
```java
import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.util.Date;

@Data
@TableName(value = "user")
public class User {
    @TableId
    private String id;
    @TableField(value = "name",select = false)
    private String title;
    private Integer age;
    @TableField(exist = false)
    private String gender;
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
    @Version
    private Integer version;
}
```
#### 3. 注册配置类
```java
import com.baomidou.mybatisplus.extension.plugins.OptimisticLockerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyBatisPlusConfig {
    
    @Bean
    public OptimisticLockerInterceptor optimisticLockerInterceptor(){
        return new OptimisticLockerInterceptor();
    }
    
}
```

### @EnumValue
> 通用枚举类注解，将数据库字段映射成实体类的枚举类型成员变量
#### 1. 创建枚举类和对象
```java
package org.ovo.returnhome.Enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * @author subframe
 */

public enum SexEnum {
    /**
     * 男
     */
    men(true,"男"),
    /**
     * 女
     */
    women(false,"女");

	//输入数据库的值
    @EnumValue
    private boolean sex;
	//json的返回值
    @JsonValue
    private String msg;

    SexEnum(boolean sex, String msg) {
        this.sex = sex;
        this.msg = msg;
    }

    public boolean getSex() {
        return sex;
    }

    public String getMsg() {
        return msg;
    }
}
```
#### 2. 创建实体类
```java

@ApiModel(value = "lost")
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@JsonInclude(value = JsonInclude.Include.NON_DEFAULT)
public class Lost implements Serializable{

    private static final long serialVersionUID=1L;

    @ApiModelProperty(value = "微信open_id")
    private String openId;

    @ApiModelProperty(value = "老人id，200000开始")
    @TableId(value = "lost_id" , type = IdType.AUTO)
    private Integer lostId;

    @ApiModelProperty(value = "老人姓名")
    private String name;

    @ApiModelProperty(value = "老人性别，0为男，1为女")
    private SexEnum sex;

    @ApiModelProperty(value = "老人出生日期")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birth;
}

```
#### 3. application.yml添加配置
```yaml
type-enums-package: 
  com.southwind.mybatisplus.enums
```


### @TableLogic
映射==逻辑删除==
#### 1. 数据表添加 deleted 字段
#### 2. 实体类添加注解
```java
package com.southwind.mybatisplus.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.southwind.mybatisplus.enums.AgeEnum;
import com.southwind.mybatisplus.enums.StatusEnum;
import lombok.Data;

import java.util.Date;

@Data
@TableName(value = "user")
public class User {
    @TableId
    private String id;
    @TableField(value = "name",select = false)
    private String title;
    private AgeEnum age;
    @TableField(exist = false)
    private String gender;
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
    @Version
    private Integer version;
    @TableField(value = "status")
    private StatusEnum statusEnum;
    @TableLogic
    private Integer deleted;
}
```
#### 3. application.yml 添加配置
```yaml
global-config:
  db-config:
    logic-not-delete-value: 0
    logic-delete-value: 1
```