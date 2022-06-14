# SQL
> 对数据库进行管理的语言
## 分类：
- 数据查询语言 DQL (Data Query Language)
`select` / `where` / `order by` / `group by` / `having`
- 数据定义语 DDL (Data Definition Language)
`create` / `alter` / `drop`
- 数据操作语言 DML (Data Manipulation Language)
`insert` / `update` / `delete`
- 事务处理语言 TPL (Transaction Process Language)
`commit` / `rollback`
- 数据控制语言 DCL (Data Control Language)
`grant` / `revoke`
[[相关概念]]

## MYSQL安装
打开`installer` -> 选择`developr default` -> 显示`excute`就点`excute`，没有就`next` & `no` ->  等待安装 -> 设置密码
### 独立版
#### 下载压缩包
[地址](https://downloads.mysql.com/archives/get/p/23/file/mysql-8.0.28-winx64.zip)
解压
#### 添加配置文件
解压后的文件夹根目录添加`my.ini`
```ini
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录(修改)
basedir=D:\code\_env\mysql_8.0.28
# 设置mysql数据库的数据的存放目录(修改)
datadir=D:\code\_env\mysql_8.0.28\data
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTFMB4
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8mb4
```
#### 添加服务和用户
到bin目录下运行管理员powershell
1. 安装服务
```shell
.\mysqld install
```
2. 初始化服务，此时root用户没有密码
```shell
$ sudo .\mysqld --initialize-insecure
```
3. 启动服务
```shell
sudo net start mysql
```
失败：[[windows功能#删除服务|删除原先的mysql服务或端口占用的进程]]
4. 登录
```shell
.\mysql -uroot
```
5. 修改密码
```shell
alter user 'root'@localhost identified by '123456';
```
6. 将bin目录添加到环境变量
## MYSQL备份
```shell
mysqldump -h服务器名 -u用户名 -p密码 --routines --default-character-set=utf8 数据库名 > 文件位置/文件名.sql
```
### 数据类型
#### Text 类型

| 数据类型      | 描述                                                                   |
|:------------- |:---------------------------------------------------------------------- |
| CHAR(size)    | 保存固定长度的字符串（可包含字母、数字以及特殊字符）（最大255）        |
| VARCHAR(size) | 保存可变长度的字符串（可包含字母、数字以及特殊字符）（最大255）        |
| TINYTEXT      | 存放最大长度为 255 个字符的字符串。                                    | 
| TEXT          | 存放最大长度为 65,535 个字符的字符串。                                 |
| BLOB          | 用于 BLOBs (Binary Large OBjects)。存放最多 65,535 字节的数据。        |
| MEDIUMTEXT    | 存放最大长度为 16,777,215 个字符的字符串。                             |
| MEDIUMBLOB    | 用于 BLOBs (Binary Large OBjects)。存放最多 16,777,215 字节的数据。    |
| LONGTEXT      | 存放最大长度为 4,294,967,295 个字符的字符串。                          |
| LONGBLOB      | 用于 BLOBs (Binary Large OBjects)。存放最多 4,294,967,295 字节的数据。 |
| ENUM(x,y,z,etc.) | 允许你输入可能值的列表|
| SET              | 与 ENUM 类似，SET 最多只能包含 64 个列表项，不过 SET 可存储一个以上的值。                                                                                                                |
- 需要加`'单引号'`
#### Number 类型

| 数据类型        | 描述                                                                                |
|:--------------- |:----------------------------------------------------------------------------------- |
| TINYINT(size)   | -128 到 127 常规。0 到 255 无符号*。在括号中规定最大位数。                          |
| SMALLINT(size)  | -32768 到 32767 常规。0 到 65535 无符号*。在括号中规定最大位数。                    |
| MEDIUMINT(size) | -8388608 到 8388607 普通。0 to 16777215 无符号*。在括号中规定最大位数。             |
| INT(size)       | -2147483648 到 2147483647 常规。0 到 4294967295 无符号*。在括号中规定最大位数。     |
| BIGINT(size)    | -9223372036854775808 到 9223372036854775807 常规                                    | 
| FLOAT(size,d)   | 带有浮动小数点的小数字。在括号中规定最大位数。在 d 参数中规定小数点右侧的最大位数。 |
| DOUBLE(size,d)  | 带有浮动小数点的大数字。在括号中规定最大位数。在 d 参数中规定小数点右侧的最大位数。 |
| DECIMAL(size,d) | 作为字符串存储的 DOUBLE 类型，允许固定的小数点。                                    |

- 这些整数类型拥有额外的选项 UNSIGNED。通常，整数可以是负数或正数。如果添加 UNSIGNED 属性，那么范围将从 0 开始，而不是某个负数。
- tinyint读取的时候0转换成true，1转换成false，解决：`select 字段名*1`
#### Time 类型
| 日期时间类型  | 日期格式             | 最小值              |
| ------------ | ------------------- | ------------------- |
| DATETIME     | YYYY-MM-DD HH:MM:SS | 1000-01-01 00:00:00 |
| TIMESTAMP    | YYYY-MM-DD HH:MM:SS | 19700101080001      |
| DATE         | YYYY-MM-DD          | 1000-01-01          |
| TIME         | HH:MM:SS            | -838:59:59          |
| YEAR         | YYYY                | 1901                |
- 如果在时间上要**超过 Linux 时间的**，或者想要使用自动插入时间或者**自动更新时间**功能的，timestamp 会随时区变化而变化，服务器时区不一样，用**timestamp**。
- 如果只是想表示年、日期、时间的还可以使用 year、date、time，它们分别占据 1、3、3 字节，用**datetime**
#### 数据库表字段类型规范
- 用尽量少的存储空间来存数一个字段的数据;
- 例如：能使用int就不要使用varchar、char,能用varchar(16)就不要使用varchar(256);
- IP地址最好使用int类型;
- 固定长度的类型最好使用char,例如：邮编;
- 能使用tinyint就不要使用smallint,int;
- 最好给每个字段一个默认值,最好不能为null;
### 内置函数
#### 生日
```mysql
ROUND(DATEDIFF(CURDATE(), @birthday)/365.2422)
```
### 表内数据增删改查
![[表内数据增删改查]]
### 表的操作
#### 创建表
##### 基本语句
```sql
CREATE TABLE 表名(
	列名 数据类型[约束],
	列名 数据类型[约束],
	列名 数据类型[约束],
	……
)CHARSET=utf8
```
#### 优化
![[约束]]
![[索引]]
#### 修改 ALTER
##### 基本语句
```sql
ALTER TABLE 表名 操作
```
![[修改 ALTER]]
### 数据库的操作
#### 创建数据库
```sql
CREATE DATABASE 数据库名
```
#### 展示数据库
```sql
SHOW DATABASES
```
#### 使用数据库
```sql
USE 数据库名
```
#### 删除数据库
```sql
DROP DATABASE 数据库名
```
### 事务
[[事务]]
### 权限管理
#### 创建用户
```sql
CREATE USER 用户名 IDENTIFIDE BY '密码'
```
#### 授权
```sql
GRANT privileges ON 数据库.表 TO 用户名/public(所有人)
```
- `privileges`：
	- `update`
	- `select`
	- `insert`
	- `delete`
	- `all(update、select、insert、delete)`
#### 撤销授权
**账户需要重新连接数据库才会生效**
```sql
REVOKE privileges ON 数据库.表 FROM 用户名
```
#### 删除用户
**账户需要重新连接数据库才会生效**
```sql
DROP USER 用户名
```

### 视图
[[视图]]
### 关系代数
[[关系代数]]
### ER 图 
[[ER图]]
### 范式
[[范式]]

## 注意
`ifnull(a,0)` a为null，则返回0
`Date_format(time,'%y-%m-%d')` 格式化时间

## 主从复制
[docker部署多个mysql节点并开启主从复制](https://blog.csdn.net/KIMTOU/article/details/121570030)
[[Mybatis#多数据源|mybatis-plus读写分离]]