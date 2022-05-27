### 普通查询
```sql
SELECT 列名 FROM 表名
```
### 表名、列名命名
```sql
表名/列名 (AS) 名称
```
- 表名、列名之间用逗号分格，不用加括号
### 查询结果去重
```sql
DISTINCT 列名
```
### 排序查询
#### 依据单列
```sql
SELECT 列名 FROM 表名 ORDER BY 列名 ASC/DSC
```
- ASC可以不写
#### 依据多列
```sql
SELECT 列名 FROM 表名 ORDER BY 列名 ASC/DESC , 列名 ASC/DCS
```
- 优先级从前往后
### 条件查询
![[条件查询 WHERE]]
### 时间查询
```sql
SELECT 时间函数(参数列表)
```
| 时间函数              | 描述                           |
| --------------------- | ------------------------------ |
| SYSDATE()             | 获取系统时间                   |
| CURDATE()             | 获取当前日期                   |
| CURTIME()             | 获取当前时间                   |
| WEEK(DATE)            | 获取指定日期为一年中的第几周   |
| YEAR(DATE)            | 获取指定日期的年份             |
| HOUR(DATE)            | 获取指定时间的小时值           |
| MINUTE(TIME)          | 获取指定时间的分钟值           |
| DATEDIFF(DATE1,DATE2) | 计算DATE1和DATE2之间相隔的天数 |
| ADDDATE(DATE,N)       | 计算DATE加上N天后的日期        |
### 字符串查询
```sql
SELECT 字符串函数([参数列表])
```
| 字符串函数                 | 说明                                            |
| -------------------------- | ----------------------------------------------- |
| CONCAT(str1,str2……)        | 将多个字符串连接                                |
| INSERT(str,pos,len,newStr) | 将str中指定pos位置开始len长度的内容替换为newStr |
| LOWER(str)                 | 将指定字符串转换为小写                          |
| UPPER(str)                 | 将指定字符串转换为大写                          |
| SUBSTR(str,num,len)     | 将str字符串指定num位置开始截取len个内容，len为NULL时截取到末尾         |
### 聚合函数
```sql
SELECT 聚合函数(列名) FROM 表名
```
| 聚合函数 | 说明               |
| -------- | ------------------ |
| SUM()    | 求单列结果的总和   |
| AVG()    | 求单列结果的平均值 |
| MAX()    | 求单列结果的最大值 |
| MIN()    | 求单列结果的最小值 |
| COUNT()  | 求总行数           |
| ALL()    | 全部               |
| ANY()    | 任一            |

### 分组查询
```sql
SELECT 列名 FROM 表名 GROUP BY 列名
```
- 计算聚合函数的结果
- 列名只包含**分组依据列**或者**聚合函数列**
#### 分组过滤查询
```sql
SELECT 列名 FROM 表名 WHERE 条件 GROUP BY 分组列 HAVING 过滤规则
```
- 过滤规则：聚合函数
### 限定查询(分页的应用)
```sql
SELECT 列名 FROM 表名 LIMIT 起始行, 查询行数
```
- 第一行是0
### 子查询
```sql
SELECT 列名 FROM 表名 WHERE EXISTS(子查询)
SELECT 列名 FROM 表名(子查询) WHERE 条件
```
### 合并查询
```sql
SELECT * FROM 表名1 UNION(去重)/UNION ALL(不去重) SELECT * FROM 表名2
```
- 列数必须相同，类型可以不同
### 表连接查询
```sql
SELECT 列名 FROM 表1 连接方式 表2 ON 连接条件
```
[[表链接查询]]
