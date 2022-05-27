### 查询
- 小于 lt => less then
- 小于等于 le(lte) => less then or equal
- 大于 gt => greater then
- 大于等于 ge(gte) => greater then or equal
```java
mapper.selectList(null);
QueryWrapper wrapper = new QueryWrapper();
Map<String,Object> map = new HashMap<>();
map.put("name","小红");
map.put("age",3);
wrapper.allEq(map);
wrapper.gt("age",2);
wrapper.ne("name","小红");
wrapper.ge("age",2);
```
- **实体类必须要有空的构造方法**
#### 选择部分列
```java
wrapper.select("col1,col2");
//去重
wrapper.select("DISTINCT col1,col2");
```
- 返回实体类
#### like
```java
//like '%小'
wrapper.likeLeft("name","小");
//like '小%'
wrapper.likeRight("name","小");
```
#### inSql
```java
//inSQL
wrapper.inSql("id","select id from user where id < 10");
wrapper.inSql("age","select age from user where age > 3");

wrapper.orderByDesc("age");

wrapper.orderByAsc("age");
wrapper.having("id > 8");

mapper.selectList(wrapper).forEach(System.out::println);
```
#### Map查询
```java
System.out.println(mapper.selectById(7));
mapper.selectBatchIds(Arrays.asList(7,8,9)).forEach(System.out::println);

//Map 只能做等值判断，逻辑判断需要使用 Wrapper 来处理
Map<String,Object> map = new HashMap<>();
map.put("id",7);
mapper.selectByMap(map).forEach(System.out::println);

QueryWrapper wrapper = new QueryWrapper();
wrapper.eq("id",7);
System.out.println(mapper.selectCount(wrapper));

//将查询的结果集封装到Map中
mapper.selectMaps(wrapper).forEach(System.out::println);
System.out.println("-------------------");
mapper.selectList(wrapper).forEach(System.out::println);
```
#### 分页查询
1. 配置文件
```java
@Configuration  
public class MybatisPlusConfig {  
	 @Bean  
	 public PaginationInterceptor paginationInterceptor(){  
		 PaginationInterceptor interceptor = new PaginationInterceptor();  
		 return interceptor;  
 	}  
}
```
2. 业务实现
```java
Page<User> page = new Page<>(2,2);//第一页
Page<User> result = mapper.selectPage(page,null);
System.out.println(result.getSize());
System.out.println(result.getTotal());
result.getRecords().forEach(System.out::println);

Page<Map<String,Object>> page = new Page<>(1,2);
mapper.selectMapsPage(page,null).getRecords().forEach(System.out::println);

mapper.selectObjs(null).forEach(System.out::println);
System.out.println(mapper.selectOne(wrapper));
```
#### 自定义 SQL（多表关联查询）
1. ObjVO类
```java
package com.southwind.mybatisplus.entity;

import lombok.Data;

@Data
public class ProductVO {
    private Integer category;
    private Integer count;
    private String description;
    private Integer userId;
    private String userName;
}
```

```java
package com.southwind.mybatisplus.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.southwind.mybatisplus.entity.ProductVO;
import com.southwind.mybatisplus.entity.User;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface UserMapper extends BaseMapper<User> {
    @Select("select p.*,u.name userName from product p,user u where p.user_id = u.id and u.id = #{id}")
    List<ProductVO> productList(Integer id);
}
```

### 添加
```java
User user = new User();
user.setTitle("小明");
user.setAge(22);
mapper.insert(user);
System.out.println(user);
//插入后自动填充user的id，需要给主键添加@TableId(type = IdType.AUTO)
System.out.println(user.getId());

//自动填充更新/插入时间
//Entity类
@TableField(fill = FieldFill.INSERT) 
private Date createTime; 
@TableField(fill = FieldFill.INSERT_UPDATE) 
private Date updateTime;
```

### 删除
```java
mapper.deleteById(1);
mapper.deleteBatchIds(Arrays.asList(7,8));
QueryWrapper wrapper = new QueryWrapper();
wrapper.eq("age",14);
mapper.delete(wrapper);

Map<String,Object> map = new HashMap<>();
map.put("id",10);
mapper.deleteByMap(map);
```

### 修改
```java
update ... version = 3 where version = 2
User user = mapper.selectById(7);
user.setTitle("一号");

update ... version = 3 where version = 2
User user1 = mapper.selectById(7);
user1.setTitle("二号");

mapper.updateById(user1);
mapper.updateById(user);

User user = mapper.selectById(1);
user.setTitle("小红");
QueryWrapper wrapper = new QueryWrapper();
wrapper.eq("age",22);
mapper.update(user,wrapper);
```
#### 直接修改
```java
//UpdateWrapper
UpdateWrapper<Member> wrapper = new UpdateWrapper<>();  
wrapper.eq("cur_task", task_id)  
	.set("cur_task","-1");  
memberMapper.update(null, wrapper);

//LambdaUpdateWrapper
new LambdaUpdateChainWrapper<>(memberMapper)  
	.eq(Member::getCurTaskId, task_id)  
	.set(Member::getCurTaskId, "-1")  
	.update();
```

