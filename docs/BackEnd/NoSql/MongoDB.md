# MongoDB
> MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统，旨在为WEB应用提供可扩展的高性能数据存储解决方案，在高负载的情况下，添加更多的节点，可以保证服务器性能
## 特点
- 面向集合和文档存储，易存储对象类型的数据，操作起来比较简单和容易
- 支持查询，以及动态查询
- 支持RUBY，PYTHON， JAVA, C++, PHP， C#等多种语言
- 文件存储格式为BSON (JSON的扩展)
- 支持复制和故障恢复和分片
- 支持事务支持
- 索引聚合关联
## 结构

| sql      | MongoDB    | 说明          |
| -------- | ---------- | ------------- |
| database | database   | 数据库        |
| table    | collection | 数据库表/集合 |
| row      | document   | 数据行/文档   |
| column   | filed      | 数据字段/域   |
| index    | index      | 索引          |

### 数据库
- 一个MongoDB中可以建立多个数据库。
- MongoDB的默认数据库为"db"，该数据库存储在data目录中
### 集合
- 集合名不能以"system."开头
- 关系型数据库中的表（table）中的每一条数据（row）的格式是事先约定好的的，而MongoDB中的集合（collection）中文档（document）的数据格式是不固定的，也就是说我们可以将如下数据插入统一文档中。
```
{"site":"www.wuhuan.me"}
{"site":"www.baidu.com","name":"百度"}
```
### 文档
- 文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)
### ObjectId
`MongoDB`的文档必须有一个默认的`_id`键，且在一个集合里`_id`始终唯一。
	`_id`键的值可以是任何类型的，默认是个`ObjectId`对象，由`MongoDB`自动创建。
	`MongoDB`使用`objectId`而不是使用常规做法（自增主键）主要原因是,在分布式同步自动增加主键费力费时。

`ObjectId`由12个字节的[BSON](https://baike.baidu.com/item/BSON/10981745?fr=aladdin)组成

- 前4个字节表示时间戳
- 接下来的3个字节是机器标识码
- 紧接的两个字节由进程id组成（PID）
- 最后三个字节是随机数。
    


## 数据类型

| 数据类型           | 描述                                                 |
| ------------------ | ---------------------------------------------------- |
| String             | 字符串，只有UTF-8编码的字符串合法                    |
| Integer            | 整型数值，可分为 32 位或 64 位                       |
| Boolean            | 布尔值用于存储布尔值（真/假）                        |
| Double             | 双精度浮点值用于存储浮点值                           |
| Min/Max keys       | 将一个值与BSON(二进制JSON)元素的最低值和最高值相对比 | 
| Array              | 用于将数组或列表或多个值存储为一个键                 |
| Timestamp          | 时间戳记录文档修改或添加的具体时间                   |
| Object             | 用于内嵌文档                                         |
| Null               | 用于创建空值                                         |
| Symbol             | 符号，一般用于采用特殊符号类型的语言                 |
| Date               | 日期时间，创建 Date 对象，传入年月日信息             |
| Object ID          | 对象 ID用于创建文档的 ID                             |
| Binary Data        | 二进制数据用于存储二进制数据                         |
| Code               | 代码类型用于在文档中存储 JavaScript 代码             |
| Regular expression | 正则表达式类型用于存储正则表达式                     |



