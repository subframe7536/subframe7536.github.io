### 添加列
```sql
ALTER TABLE 表名 ADD 列名 类型
```
### 修改列类型
```sql
ALTER TABLE 表名 MODIFY 列名 类型
```
### 删除列
```sql
ALTER TABLE 表名 DROP 列名
```
### 修改列名
```sql
ALTER TABLE 表名 CHANGE 原列名 列名 类型
```
### 添加外键
```sql
alter table 表名 add constraint FK_ID foreign key(你的外键字段名) 
REFERENCES 外表表名(对应的表的主键字段名) 
[ON DELETE {RESTRICT | CASCADE | SET NULL | NO ACTION}]
[ON UPDATE {RESTRICT | CASCADE | SET NULL | NO ACTION}]
```
### 修改表名
```sql
ALTER TABLE 表名 RENAME 新表名
```
### 删除表
```sql
DROP TABLE 表名
```