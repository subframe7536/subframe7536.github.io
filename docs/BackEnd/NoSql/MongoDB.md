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

## 基本操作
### 启动
```yml
## content
systemLog:
  destination: file
  logAppend: true
  path: /www/server/mongodb/log/config.log
 
# Where and how to store data.
storage:
  dbPath: /www/server/mongodb/data
  directoryPerDB: true

  journal:
    enabled: true
# how the process runs
processManagement:
  fork: false
  pidFilePath: /www/server/mongodb/log/configsvr.pid
 
# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1
 
#operationProfiling:
#replication:
#    replSetName: bt_main   
security:
  authorization: disabled
  javascriptEnabled: false

#sharding:
#    clusterRole: shardsvr
```
#### 启动
```shell
mongod
```
#### 连接
```shell
mongo
```
### 库
#### 查看所有库
```shell
> show databases;
admin 0.000G
config 0.000G
local 0.000G
> show dbs;
```
- admin 
从权限的角度来看，这是"root"数据库。 要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
- local
这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
- config
当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息
#### 查看当前使用库
```shell
db
```
默认的库是`test`
#### 创建数据库
```shell
use 数据库名;
```
#### 删除数据库
删除当前库
```shell
db.dropDatabase();
```
### 集合
#### 查看集合
```shell
show collections;
show tables;
```
#### 创建集合
```shell
db.createCollection('集合名称',[选项]);
```
| 选项   | 描述                           |
| ------ | ------------------------------ |
| capped | 是否覆盖(true/false)           | 
| size   | capped为true时必须指定集合大小 |
| max    | 文档最大数量，超出覆盖         |

- 如果插入时集合不存在，则自动创建
#### 删除集合
```shell
db.集合名.drop();
```
#### 插入数据
```shell
# 插入单条
db.集合名.insert({...});

# 插入多条
user4={ "_id":4, "name":"jingliyang", "age":40, 'hobbies':['music','read','dancing','tea'], 'addr':{ 'country':'China', 'city':'BJ' }
}

user5={ "_id":5, "name":"jinxin", "age":50, 'hobbies':['music','read',], 'addr':{ 'country':'China', 'city':'henan' }
}
db.user.insertMany([user4,user5])
```
#### 删除
```shell
#1、删除符合条件的第一个文档
db.user.deleteOne({ 'age': 8 })#第一个包含有 'age': 8的文档

#2、删除符合条件的全部
db.user.deleteMany( {'addr.country': 'China'} ) #只要有内嵌文档，且内容含有country': 'China'的全都删除
db.user.deleteMany({"_id":{"$gte":3}})#删除id大于等于3的所有

#3、删除全部
db.user.deleteMany({}) #等于是清空该集合（表）
```
#### 修改
```shell
db.collection.update( <query>, <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document> }
)
```
#### 查询
```shell
db.集合名.find().pretty();
```
[MongoDB增删改查](https://www.cnblogs.com/zhuminghui/p/8330429.html)
### 索引
```shell
db.集合名.createIndex();
```
[Indexes — MongoDB Manual](https://docs.mongodb.com/manual/indexes/)
[mongoDB的索引详解](https://www.cnblogs.com/wyy1234/p/11032163.html)
