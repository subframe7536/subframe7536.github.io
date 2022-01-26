### 隐藏输出、显示标题
```bat
@echo off
@title 连接WSA
```
### 获取输入变量
```bat
set /p 变量名=输入前的文字
```
### 转义字符
```bat
^|
^>
```
### 获取返回值
[怎么用bat得到一个命令执行后的返回值赋值给一个变量_百度知道 (baidu.com)](https://zhidao.baidu.com/question/563606780.html)
### 跳转
```bat
goto 名称
名称
```
### 判断语句
```bat
if 条件 (
: ....
) else if 条件 (
: ....
) else (
: ....
)
```
### 文件夹操作
```bat
if not exist 文件夹名 md 文件夹名
```
### exe开启关闭
```bat
# 开启
start exe名
# 关闭
taskkill /f /t /im exe名
```
### 隐藏返回结果
```bat
..... >nul
```
### 同时运行多个命令
```bat
.... & .... & ....
```
### 参数
```bat
对于变量%0~%9及for里使用的%i这样的变量，可以有以下的语法：  
~I - 删除任何引号(")，扩充 %I  
%~fI - 将 %I 扩充到一个完全合格的路径名  
%~dI - 仅将 %I 扩充到一个驱动器号  
%~pI - 仅将 %I 扩充到一个路径  
%~nI - 仅将 %I 扩充到一个文件名  
%~xI - 仅将 %I 扩充到一个文件扩展名  
%~sI - 扩充的路径只含有短名  
%~aI - 将 %I 扩充到文件的文件属性
```
### 忽略盘符进入目录
```bat
cd /d 目录
```
### 脚本当前目录
```bat
%~dp0
```
## ruoyi tables message
#### 1、 gen_table
代码生成业务表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `table_id` | 编号 | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `table_name` | 表名称 | varchar(200) |  | YES |  |  |
| 3 | `table_comment` | 表描述 | varchar(500) |  | YES |  |  |
| 4 | `sub_table_name` | 关联子表的表名 | varchar(64) |  | YES |  |  |
| 5 | `sub_table_fk_name` | 子表关联的外键名 | varchar(64) |  | YES |  |  |
| 6 | `class_name` | 实体类名称 | varchar(100) |  | YES |  |  |
| 7 | `tpl_category` | 使用的模板（crud单表操作 tree树表操作） | varchar(200) |  | YES |  | crud |
| 8 | `package_name` | 生成包路径 | varchar(100) |  | YES |  |  |
| 9 | `module_name` | 生成模块名 | varchar(30) |  | YES |  |  |
| 10 | `business_name` | 生成业务名 | varchar(30) |  | YES |  |  |
| 11 | `function_name` | 生成功能名 | varchar(50) |  | YES |  |  |
| 12 | `function_author` | 生成功能作者 | varchar(50) |  | YES |  |  |
| 13 | `gen_type` | 生成代码方式（0zip压缩包 1自定义路径） | char(1) |  | YES |  | 0 |
| 14 | `gen_path` | 生成路径（不填默认项目路径） | varchar(200) |  | YES |  | / |
| 15 | `options` | 其它生成选项 | varchar(1000) |  | YES |  |  |
| 16 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 17 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 18 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 19 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 20 | `remark` | 备注 | varchar(500) |  | YES |  |  |


#### 2、 gen_table_column
代码生成业务表字段

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `column_id` | 编号 | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `table_id` | 归属表编号 | varchar(64) |  | YES |  |  |
| 3 | `column_name` | 列名称 | varchar(200) |  | YES |  |  |
| 4 | `column_comment` | 列描述 | varchar(500) |  | YES |  |  |
| 5 | `column_type` | 列类型 | varchar(100) |  | YES |  |  |
| 6 | `java_type` | JAVA类型 | varchar(500) |  | YES |  |  |
| 7 | `java_field` | JAVA字段名 | varchar(200) |  | YES |  |  |
| 8 | `is_pk` | 是否主键（1是） | char(1) |  | YES |  |  |
| 9 | `is_increment` | 是否自增（1是） | char(1) |  | YES |  |  |
| 10 | `is_required` | 是否必填（1是） | char(1) |  | YES |  |  |
| 11 | `is_insert` | 是否为插入字段（1是） | char(1) |  | YES |  |  |
| 12 | `is_edit` | 是否编辑字段（1是） | char(1) |  | YES |  |  |
| 13 | `is_list` | 是否列表字段（1是） | char(1) |  | YES |  |  |
| 14 | `is_query` | 是否查询字段（1是） | char(1) |  | YES |  |  |
| 15 | `query_type` | 查询方式（等于、不等于、大于、小于、范围） | varchar(200) |  | YES |  | EQ |
| 16 | `html_type` | 显示类型（文本框、文本域、下拉框、复选框、单选框、日期控件） | varchar(200) |  | YES |  |  |
| 17 | `dict_type` | 字典类型 | varchar(200) |  | YES |  |  |
| 18 | `sort` | 排序 | int(11) |  | YES |  |  |
| 19 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 20 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 21 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 22 | `update_time` | 更新时间 | datetime |  | YES |  |  |


#### 3、 qrtz_blob_triggers
Blob类型的触发器表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `trigger_name` | qrtz_triggers表trigger_name的外键 | varchar(200) | PRI | NO |  |  |
| 3 | `trigger_group` | qrtz_triggers表trigger_group的外键 | varchar(200) | PRI | NO |  |  |
| 4 | `blob_data` | 存放持久化Trigger对象 | blob |  | YES |  |  |


#### 4、 qrtz_calendars
日历信息表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `calendar_name` | 日历名称 | varchar(200) | PRI | NO |  |  |
| 3 | `calendar` | 存放持久化calendar对象 | blob |  | NO |  |  |


#### 5、 qrtz_cron_triggers
Cron类型的触发器表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `trigger_name` | qrtz_triggers表trigger_name的外键 | varchar(200) | PRI | NO |  |  |
| 3 | `trigger_group` | qrtz_triggers表trigger_group的外键 | varchar(200) | PRI | NO |  |  |
| 4 | `cron_expression` | cron表达式 | varchar(200) |  | NO |  |  |
| 5 | `time_zone_id` | 时区 | varchar(80) |  | YES |  |  |


#### 6、 qrtz_fired_triggers
已触发的触发器表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `entry_id` | 调度器实例id | varchar(95) | PRI | NO |  |  |
| 3 | `trigger_name` | qrtz_triggers表trigger_name的外键 | varchar(200) |  | NO |  |  |
| 4 | `trigger_group` | qrtz_triggers表trigger_group的外键 | varchar(200) |  | NO |  |  |
| 5 | `instance_name` | 调度器实例名 | varchar(200) |  | NO |  |  |
| 6 | `fired_time` | 触发的时间 | bigint(13) |  | NO |  |  |
| 7 | `sched_time` | 定时器制定的时间 | bigint(13) |  | NO |  |  |
| 8 | `priority` | 优先级 | int(11) |  | NO |  |  |
| 9 | `state` | 状态 | varchar(16) |  | NO |  |  |
| 10 | `job_name` | 任务名称 | varchar(200) |  | YES |  |  |
| 11 | `job_group` | 任务组名 | varchar(200) |  | YES |  |  |
| 12 | `is_nonconcurrent` | 是否并发 | varchar(1) |  | YES |  |  |
| 13 | `requests_recovery` | 是否接受恢复执行 | varchar(1) |  | YES |  |  |


#### 7、 qrtz_job_details
任务详细信息表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `job_name` | 任务名称 | varchar(200) | PRI | NO |  |  |
| 3 | `job_group` | 任务组名 | varchar(200) | PRI | NO |  |  |
| 4 | `description` | 相关介绍 | varchar(250) |  | YES |  |  |
| 5 | `job_class_name` | 执行任务类名称 | varchar(250) |  | NO |  |  |
| 6 | `is_durable` | 是否持久化 | varchar(1) |  | NO |  |  |
| 7 | `is_nonconcurrent` | 是否并发 | varchar(1) |  | NO |  |  |
| 8 | `is_update_data` | 是否更新数据 | varchar(1) |  | NO |  |  |
| 9 | `requests_recovery` | 是否接受恢复执行 | varchar(1) |  | NO |  |  |
| 10 | `job_data` | 存放持久化job对象 | blob |  | YES |  |  |


#### 8、 qrtz_locks
存储的悲观锁信息表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `lock_name` | 悲观锁名称 | varchar(40) | PRI | NO |  |  |


#### 9、 qrtz_paused_trigger_grps
暂停的触发器表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `trigger_group` | qrtz_triggers表trigger_group的外键 | varchar(200) | PRI | NO |  |  |


#### 10、 qrtz_scheduler_state
调度器状态表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `instance_name` | 实例名称 | varchar(200) | PRI | NO |  |  |
| 3 | `last_checkin_time` | 上次检查时间 | bigint(13) |  | NO |  |  |
| 4 | `checkin_interval` | 检查间隔时间 | bigint(13) |  | NO |  |  |


#### 11、 qrtz_simple_triggers
简单触发器的信息表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `trigger_name` | qrtz_triggers表trigger_name的外键 | varchar(200) | PRI | NO |  |  |
| 3 | `trigger_group` | qrtz_triggers表trigger_group的外键 | varchar(200) | PRI | NO |  |  |
| 4 | `repeat_count` | 重复的次数统计 | bigint(7) |  | NO |  |  |
| 5 | `repeat_interval` | 重复的间隔时间 | bigint(12) |  | NO |  |  |
| 6 | `times_triggered` | 已经触发的次数 | bigint(10) |  | NO |  |  |


#### 12、 qrtz_simprop_triggers
同步机制的行锁表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `trigger_name` | qrtz_triggers表trigger_name的外键 | varchar(200) | PRI | NO |  |  |
| 3 | `trigger_group` | qrtz_triggers表trigger_group的外键 | varchar(200) | PRI | NO |  |  |
| 4 | `str_prop_1` | String类型的trigger的第一个参数 | varchar(512) |  | YES |  |  |
| 5 | `str_prop_2` | String类型的trigger的第二个参数 | varchar(512) |  | YES |  |  |
| 6 | `str_prop_3` | String类型的trigger的第三个参数 | varchar(512) |  | YES |  |  |
| 7 | `int_prop_1` | int类型的trigger的第一个参数 | int(11) |  | YES |  |  |
| 8 | `int_prop_2` | int类型的trigger的第二个参数 | int(11) |  | YES |  |  |
| 9 | `long_prop_1` | long类型的trigger的第一个参数 | bigint(20) |  | YES |  |  |
| 10 | `long_prop_2` | long类型的trigger的第二个参数 | bigint(20) |  | YES |  |  |
| 11 | `dec_prop_1` | decimal类型的trigger的第一个参数 | decimal(13,4) |  | YES |  |  |
| 12 | `dec_prop_2` | decimal类型的trigger的第二个参数 | decimal(13,4) |  | YES |  |  |
| 13 | `bool_prop_1` | Boolean类型的trigger的第一个参数 | varchar(1) |  | YES |  |  |
| 14 | `bool_prop_2` | Boolean类型的trigger的第二个参数 | varchar(1) |  | YES |  |  |


#### 13、 qrtz_triggers
触发器详细信息表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sched_name` | 调度名称 | varchar(120) | PRI | NO |  |  |
| 2 | `trigger_name` | 触发器的名字 | varchar(200) | PRI | NO |  |  |
| 3 | `trigger_group` | 触发器所属组的名字 | varchar(200) | PRI | NO |  |  |
| 4 | `job_name` | qrtz_job_details表job_name的外键 | varchar(200) |  | NO |  |  |
| 5 | `job_group` | qrtz_job_details表job_group的外键 | varchar(200) |  | NO |  |  |
| 6 | `description` | 相关介绍 | varchar(250) |  | YES |  |  |
| 7 | `next_fire_time` | 上一次触发时间（毫秒） | bigint(13) |  | YES |  |  |
| 8 | `prev_fire_time` | 下一次触发时间（默认为-1表示不触发） | bigint(13) |  | YES |  |  |
| 9 | `priority` | 优先级 | int(11) |  | YES |  |  |
| 10 | `trigger_state` | 触发器状态 | varchar(16) |  | NO |  |  |
| 11 | `trigger_type` | 触发器的类型 | varchar(8) |  | NO |  |  |
| 12 | `start_time` | 开始时间 | bigint(13) |  | NO |  |  |
| 13 | `end_time` | 结束时间 | bigint(13) |  | YES |  |  |
| 14 | `calendar_name` | 日程表名称 | varchar(200) |  | YES |  |  |
| 15 | `misfire_instr` | 补偿执行的策略 | smallint(2) |  | YES |  |  |
| 16 | `job_data` | 存放持久化job对象 | blob |  | YES |  |  |


#### 14、 sys_config
参数配置表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `config_id` | 参数主键 | int(5) | PRI | NO | auto_increment |  |
| 2 | `config_name` | 参数名称 | varchar(100) |  | YES |  |  |
| 3 | `config_key` | 参数键名 | varchar(100) |  | YES |  |  |
| 4 | `config_value` | 参数键值 | varchar(500) |  | YES |  |  |
| 5 | `config_type` | 系统内置（Y是 N否） | char(1) |  | YES |  | N |
| 6 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 7 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 8 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 9 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 10 | `remark` | 备注 | varchar(500) |  | YES |  |  |


#### 15、 sys_dept
部门表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `dept_id` | 部门id | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `parent_id` | 父部门id | bigint(20) |  | YES |  | 0 |
| 3 | `ancestors` | 祖级列表 | varchar(50) |  | YES |  |  |
| 4 | `dept_name` | 部门名称 | varchar(30) |  | YES |  |  |
| 5 | `order_num` | 显示顺序 | int(4) |  | YES |  | 0 |
| 6 | `leader` | 负责人 | varchar(20) |  | YES |  |  |
| 7 | `phone` | 联系电话 | varchar(11) |  | YES |  |  |
| 8 | `email` | 邮箱 | varchar(50) |  | YES |  |  |
| 9 | `status` | 部门状态（0正常 1停用） | char(1) |  | YES |  | 0 |
| 10 | `del_flag` | 删除标志（0代表存在 2代表删除） | char(1) |  | YES |  | 0 |
| 11 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 12 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 13 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 14 | `update_time` | 更新时间 | datetime |  | YES |  |  |


#### 16、 sys_dict_data
字典数据表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `dict_code` | 字典编码 | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `dict_sort` | 字典排序 | int(4) |  | YES |  | 0 |
| 3 | `dict_label` | 字典标签 | varchar(100) |  | YES |  |  |
| 4 | `dict_value` | 字典键值 | varchar(100) |  | YES |  |  |
| 5 | `dict_type` | 字典类型 | varchar(100) |  | YES |  |  |
| 6 | `css_class` | 样式属性（其他样式扩展） | varchar(100) |  | YES |  |  |
| 7 | `list_class` | 表格回显样式 | varchar(100) |  | YES |  |  |
| 8 | `is_default` | 是否默认（Y是 N否） | char(1) |  | YES |  | N |
| 9 | `status` | 状态（0正常 1停用） | char(1) |  | YES |  | 0 |
| 10 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 11 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 12 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 13 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 14 | `remark` | 备注 | varchar(500) |  | YES |  |  |


#### 17、 sys_dict_type
字典类型表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `dict_id` | 字典主键 | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `dict_name` | 字典名称 | varchar(100) |  | YES |  |  |
| 3 | `dict_type` | 字典类型 | varchar(100) | UNI | YES |  |  |
| 4 | `status` | 状态（0正常 1停用） | char(1) |  | YES |  | 0 |
| 5 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 6 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 7 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 8 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 9 | `remark` | 备注 | varchar(500) |  | YES |  |  |


#### 18、 sys_job
定时任务调度表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `job_id` | 任务ID | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `job_name` | 任务名称 | varchar(64) | PRI | NO |  |  |
| 3 | `job_group` | 任务组名 | varchar(64) | PRI | NO |  | DEFAULT |
| 4 | `invoke_target` | 调用目标字符串 | varchar(500) |  | NO |  |  |
| 5 | `cron_expression` | cron执行表达式 | varchar(255) |  | YES |  |  |
| 6 | `misfire_policy` | 计划执行错误策略（1立即执行 2执行一次 3放弃执行） | varchar(20) |  | YES |  | 3 |
| 7 | `concurrent` | 是否并发执行（0允许 1禁止） | char(1) |  | YES |  | 1 |
| 8 | `status` | 状态（0正常 1暂停） | char(1) |  | YES |  | 0 |
| 9 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 10 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 11 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 12 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 13 | `remark` | 备注信息 | varchar(500) |  | YES |  |  |


#### 19、 sys_job_log
定时任务调度日志表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `job_log_id` | 任务日志ID | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `job_name` | 任务名称 | varchar(64) |  | NO |  |  |
| 3 | `job_group` | 任务组名 | varchar(64) |  | NO |  |  |
| 4 | `invoke_target` | 调用目标字符串 | varchar(500) |  | NO |  |  |
| 5 | `job_message` | 日志信息 | varchar(500) |  | YES |  |  |
| 6 | `status` | 执行状态（0正常 1失败） | char(1) |  | YES |  | 0 |
| 7 | `exception_info` | 异常信息 | varchar(2000) |  | YES |  |  |
| 8 | `create_time` | 创建时间 | datetime |  | YES |  |  |


#### 20、 sys_logininfor
系统访问记录

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `info_id` | 访问ID | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `user_name` | 用户账号 | varchar(50) |  | YES |  |  |
| 3 | `ipaddr` | 登录IP地址 | varchar(128) |  | YES |  |  |
| 4 | `login_location` | 登录地点 | varchar(255) |  | YES |  |  |
| 5 | `browser` | 浏览器类型 | varchar(50) |  | YES |  |  |
| 6 | `os` | 操作系统 | varchar(50) |  | YES |  |  |
| 7 | `status` | 登录状态（0成功 1失败） | char(1) |  | YES |  | 0 |
| 8 | `msg` | 提示消息 | varchar(255) |  | YES |  |  |
| 9 | `login_time` | 访问时间 | datetime |  | YES |  |  |


#### 21、 sys_menu
菜单权限表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `menu_id` | 菜单ID | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `menu_name` | 菜单名称 | varchar(50) |  | NO |  |  |
| 3 | `parent_id` | 父菜单ID | bigint(20) |  | YES |  | 0 |
| 4 | `order_num` | 显示顺序 | int(4) |  | YES |  | 0 |
| 5 | `path` | 路由地址 | varchar(200) |  | YES |  |  |
| 6 | `component` | 组件路径 | varchar(255) |  | YES |  |  |
| 7 | `query` | 路由参数 | varchar(255) |  | YES |  |  |
| 8 | `is_frame` | 是否为外链（0是 1否） | int(1) |  | YES |  | 1 |
| 9 | `is_cache` | 是否缓存（0缓存 1不缓存） | int(1) |  | YES |  | 0 |
| 10 | `menu_type` | 菜单类型（M目录 C菜单 F按钮） | char(1) |  | YES |  |  |
| 11 | `visible` | 菜单状态（0显示 1隐藏） | char(1) |  | YES |  | 0 |
| 12 | `status` | 菜单状态（0正常 1停用） | char(1) |  | YES |  | 0 |
| 13 | `perms` | 权限标识 | varchar(100) |  | YES |  |  |
| 14 | `icon` | 菜单图标 | varchar(100) |  | YES |  | # |
| 15 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 16 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 17 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 18 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 19 | `remark` | 备注 | varchar(500) |  | YES |  |  |


#### 22、 sys_notice
通知公告表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `notice_id` | 公告ID | int(4) | PRI | NO | auto_increment |  |
| 2 | `notice_title` | 公告标题 | varchar(50) |  | NO |  |  |
| 3 | `notice_type` | 公告类型（1通知 2公告） | char(1) |  | NO |  |  |
| 4 | `notice_content` | 公告内容 | longblob |  | YES |  |  |
| 5 | `status` | 公告状态（0正常 1关闭） | char(1) |  | YES |  | 0 |
| 6 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 7 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 8 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 9 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 10 | `remark` | 备注 | varchar(255) |  | YES |  |  |


#### 23、 sys_oper_log
操作日志记录

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `oper_id` | 日志主键 | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `title` | 模块标题 | varchar(50) |  | YES |  |  |
| 3 | `business_type` | 业务类型（0其它 1新增 2修改 3删除） | int(2) |  | YES |  | 0 |
| 4 | `method` | 方法名称 | varchar(100) |  | YES |  |  |
| 5 | `request_method` | 请求方式 | varchar(10) |  | YES |  |  |
| 6 | `operator_type` | 操作类别（0其它 1后台用户 2手机端用户） | int(1) |  | YES |  | 0 |
| 7 | `oper_name` | 操作人员 | varchar(50) |  | YES |  |  |
| 8 | `dept_name` | 部门名称 | varchar(50) |  | YES |  |  |
| 9 | `oper_url` | 请求URL | varchar(255) |  | YES |  |  |
| 10 | `oper_ip` | 主机地址 | varchar(128) |  | YES |  |  |
| 11 | `oper_location` | 操作地点 | varchar(255) |  | YES |  |  |
| 12 | `oper_param` | 请求参数 | varchar(2000) |  | YES |  |  |
| 13 | `json_result` | 返回参数 | varchar(2000) |  | YES |  |  |
| 14 | `status` | 操作状态（0正常 1异常） | int(1) |  | YES |  | 0 |
| 15 | `error_msg` | 错误消息 | varchar(2000) |  | YES |  |  |
| 16 | `oper_time` | 操作时间 | datetime |  | YES |  |  |


#### 24、 sys_post
岗位信息表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `post_id` | 岗位ID | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `post_code` | 岗位编码 | varchar(64) |  | NO |  |  |
| 3 | `post_name` | 岗位名称 | varchar(50) |  | NO |  |  |
| 4 | `post_sort` | 显示顺序 | int(4) |  | NO |  |  |
| 5 | `status` | 状态（0正常 1停用） | char(1) |  | NO |  |  |
| 6 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 7 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 8 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 9 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 10 | `remark` | 备注 | varchar(500) |  | YES |  |  |


#### 25、 sys_role
角色信息表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `role_id` | 角色ID | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `role_name` | 角色名称 | varchar(30) |  | NO |  |  |
| 3 | `role_key` | 角色权限字符串 | varchar(100) |  | NO |  |  |
| 4 | `role_sort` | 显示顺序 | int(4) |  | NO |  |  |
| 5 | `data_scope` | 数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限） | char(1) |  | YES |  | 1 |
| 6 | `menu_check_strictly` | 菜单树选择项是否关联显示 | tinyint(1) |  | YES |  | 1 |
| 7 | `dept_check_strictly` | 部门树选择项是否关联显示 | tinyint(1) |  | YES |  | 1 |
| 8 | `status` | 角色状态（0正常 1停用） | char(1) |  | NO |  |  |
| 9 | `del_flag` | 删除标志（0代表存在 2代表删除） | char(1) |  | YES |  | 0 |
| 10 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 11 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 12 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 13 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 14 | `remark` | 备注 | varchar(500) |  | YES |  |  |


#### 26、 sys_role_dept
角色和部门关联表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `role_id` | 角色ID | bigint(20) | PRI | NO |  |  |
| 2 | `dept_id` | 部门ID | bigint(20) | PRI | NO |  |  |


#### 27、 sys_role_menu
角色和菜单关联表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `role_id` | 角色ID | bigint(20) | PRI | NO |  |  |
| 2 | `menu_id` | 菜单ID | bigint(20) | PRI | NO |  |  |


#### 28、 sys_user
用户信息表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `user_id` | 用户ID | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `dept_id` | 部门ID | bigint(20) |  | YES |  |  |
| 3 | `user_name` | 用户账号 | varchar(30) |  | NO |  |  |
| 4 | `nick_name` | 用户昵称 | varchar(30) |  | NO |  |  |
| 5 | `user_type` | 用户类型（00系统用户） | varchar(2) |  | YES |  | 00 |
| 6 | `email` | 用户邮箱 | varchar(50) |  | YES |  |  |
| 7 | `phonenumber` | 手机号码 | varchar(11) |  | YES |  |  |
| 8 | `sex` | 用户性别（0男 1女 2未知） | char(1) |  | YES |  | 0 |
| 9 | `avatar` | 头像地址 | varchar(100) |  | YES |  |  |
| 10 | `password` | 密码 | varchar(100) |  | YES |  |  |
| 11 | `status` | 帐号状态（0正常 1停用） | char(1) |  | YES |  | 0 |
| 12 | `del_flag` | 删除标志（0代表存在 2代表删除） | char(1) |  | YES |  | 0 |
| 13 | `login_ip` | 最后登录IP | varchar(128) |  | YES |  |  |
| 14 | `login_date` | 最后登录时间 | datetime |  | YES |  |  |
| 15 | `create_by` | 创建者 | varchar(64) |  | YES |  |  |
| 16 | `create_time` | 创建时间 | datetime |  | YES |  |  |
| 17 | `update_by` | 更新者 | varchar(64) |  | YES |  |  |
| 18 | `update_time` | 更新时间 | datetime |  | YES |  |  |
| 19 | `remark` | 备注 | varchar(500) |  | YES |  |  |


#### 29、 sys_user_online
在线用户记录

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `sessionId` | 用户会话id | varchar(50) | PRI | NO |  |  |
| 2 | `login_name` | 登录账号 | varchar(50) |  | YES |  |  |
| 3 | `dept_name` | 部门名称 | varchar(50) |  | YES |  |  |
| 4 | `ipaddr` | 登录IP地址 | varchar(128) |  | YES |  |  |
| 5 | `login_location` | 登录地点 | varchar(255) |  | YES |  |  |
| 6 | `browser` | 浏览器类型 | varchar(50) |  | YES |  |  |
| 7 | `os` | 操作系统 | varchar(50) |  | YES |  |  |
| 8 | `status` | 在线状态on_line在线off_line离线 | varchar(10) |  | YES |  |  |
| 9 | `start_timestamp` | session创建时间 | datetime |  | YES |  |  |
| 10 | `last_access_time` | session最后访问时间 | datetime |  | YES |  |  |
| 11 | `expire_time` | 超时时间，单位为分钟 | int(5) |  | YES |  | 0 |


#### 30、 sys_user_post
用户与岗位关联表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `user_id` | 用户ID | bigint(20) | PRI | NO |  |  |
| 2 | `post_id` | 岗位ID | bigint(20) | PRI | NO |  |  |


#### 31、 sys_user_role
用户和角色关联表

| 序号 |   名称    |  描述  |    类型    | 键  | 为空 | 额外 | 默认值 |
|:----:|:---------:|:------:|:----------:|:---:|:----:|:----:|:------:|
|  1   | `user_id` | 用户ID | bigint(20) | PRI |  NO  |      |        |
|  2   | `role_id` | 角色ID | bigint(20) | PRI |  NO  |      |        | 