# Redis
> 跨平台的非关系型数据库，性能高，操作原子性
> 1. 支持数据的持久化，可将内存中的数据保存在磁盘，重启的时候可以再次加载进行使用。
> 2. 支持简单的key-value类型的数据，同时还提供list/set/zset/hash等数据结构的存储。
> 3. 支持数据的备份，即master-slave模式的数据备份。
## 安装
### Windows
[github下载](https://github.com/tporadowski/redis/releases)
解压后打开一个cmd窗口 使用 cd 命令切换目录或者添加环境变量，运行：
```shell
redis-server.exe redis.windows.conf
```
#### phpstudy_pro自带
软件商店...
### Linux
```shell
wget http://download.redis.io/releases/redis-6.0.8.tar.gz 
tar xzf redis-6.0.8.tar.gz 
cd redis-6.0.8 
make
```
- 配置
```shell
# 查看
CONFIG GET CONFIG_SETTING_NAME
# 修改
CONFIG SET CONFIG_SETTING_NAME NEW_CONFIG_VALUE
```
- 命令行登录+使用
```shell
$ redis-cli
127.0.0.1:6379> auth [用户名] 密码
OK
127.0.0.1:6379> ping
PONG
```
## 基本语法
### 数据类型
#### 字符串 String
[string](https://www.runoob.com/redis/redis-strings.html)
key-value
#### 哈希 Hash
[hash](https://www.runoob.com/redis/redis-hashes.html)
键值对映射表，用于存储对象
#### 列表 List
[list](https://www.runoob.com/redis/redis-lists.html)
按照插入顺序排序，可以从左和右插入
#### 集合 Set
[set](https://www.runoob.com/redis/redis-sets.html)
String类型无序集合，无重复键
#### 有序集合 Sorted Set
[zset](https://www.runoob.com/redis/redis-sorted-sets.html)
set中每个键有一个double的分数，表示顺序(分数可以重复)
#### 日志 HyperHyperLog
#todo 
#### 流 Stream
#todo 
#### 地理位置 GEO
#todo 
### 失效时间
可以设置键的失效时间，过期无法访问，永远存在设为-1
```shell
# ex为秒，排序为毫秒
set key value [ex/px] time
# 设置已有键的失效时间
expire key second
pexpire key millionSecond
# 设置已有键到期时间
expireat key timestamp
pexpireat key millionTimestamp
```
#### 查看失效时间
```shell
[ttl/pttl] key
```
#### 移除失效时间
```shell
persist key
```
## 高级功能
### 订阅与发布
"发布/订阅"模式包含两种角色，分别是发布者和订阅者。订阅者可以订阅一个或者多个频道(channel),而发布者可以向指定的频道(channel)发送消息，所有订阅此频道的订阅者都会收到此消息。
#### 发布
```shell
# 返回订阅者数量
publish channel message
```
#### 订阅
```shell
subscribe channel1 [channel2 ...]
```
##### 按照规则订阅
除了可以使用subscribe命令订阅指定的频道外，还可以使用psubscribe命令订阅指定的规则。规则支持通配符格式。
```shell
psubscribe pattern [pattern ...]
```
### 持久化
防止由于各种因素服务器宕机导致内存中的数据丢失
```shell
bgsave
```
应当在redis.conf修改
#### 自动化RDB
通过记录数据的方式存储，数据量小
设置多少时间内最多存放了多少数据就存储
```
save duration maxRecord
```
#### 实时存储AOF
通过记录命令的方式存储，数据量大
```
appendonly yes
appendfilename appendonly.aof
```
#### 区别
[详细区别](https://blog.csdn.net/weixin_43223076/article/details/87651080)
#### 混合使用
redis5 之后使用 rdb 和 aof 的方式，重写的时候先把 rdb 文件先重写，然后把 aof 文件追加到重写的文件中，速度较快
### 哨兵模式
#todo 
## 问题
### 缓存淘汰机制
Redis过期淘汰并不是立即删除，而是随机选择判断删除(**定期删除**) + 读取时判断删除(**惰性删除**)。这样导致很多过期的key没有及时删除导致堆积和内存浪费
- 相对较优淘汰机制：volatile-lru (最近最少使用淘汰)
### 缓存击穿
1. 定义
高并发的情况下，某个热门Jkey突然过期，导致大量请求在Redis未找到缓存数据，进而全部去访问DB请求数据，引起DB压力瞬间增大。
2. 解决方案
缓存击穿的情况下一般不容易造成DB的宕机，只是会造成对DB的周期性压力。对缓存击穿的解决方
案一般可以这样:
- Redis中的数据不设置过期时间，然后在缓存的对象上添加一个属性标识过期时间，每次获取到数据时,校验对象中的过期时间属性,如果数据即将过期，则异步发起一个线程主动更新缓存中的数据。但是这种方案可能会导致有些请求会拿到过期的值，就得看业务能否可以接受,
- 如果要求数据必须是新数据，则最好的方案则为热点数据设置为永不过期，然后加一个互斥锁保证缓存的单线程写。
### 缓存穿透
1. 定义
缓存穿透是指查询缓存和DB中都不存在的数据。比如通过id查询商品信息，id一般大于0,攻击者会故意传id为-1去查询，由于缓存是不命中则从DB中获取数据，这将会导致每次缓存都不命中数据导致每个请求都访问DB，造成缓存穿透。
2. 解决方案:
- 利用互斥锁，缓存失效的时候，先去获得锁，得到锁了，再去请求数据库。没得到锁，则休眠一-段时间重试
- 采用异步更新策略，无论key是否取到值,都直接返回。value值中维护一个缓存失效时间，缓存如果过期，异步起一个线程去读数据库,更新缓存。需要做缓存预热(项目启动前，先加载缓存)操作。
- 提供一个能迅速判断请求是否有效的拦截机制，比如，利用布隆过滤器，内部维护-系列合法有效的key。迅速判断出，请求所携带的Key是否合法有效。如果不合法，则直接返回。
- 如果从数据库查询的对象为空,也放入缓存，只是设定的缓存过期时间较短，比如设置为60秒。
### 缓存雪崩
1. 定义
缓存中如果大量缓存在一段时间内集中过期了 ,这时候会发生大量的缓存击穿现象，所有的请求都落在
了DB上，由于查询数据量巨大,引起DB压力过大甚至导致DB宕机。
2. 解决方案
- 给缓存的失效时间，加上一个随机值，避免集体失效。如果Redis是集群部署， 将热点数据均匀分布在不同的Redis库中也能避免全部失效的问题
- 使用互斥锁，但是该方案吞吐量明显下降了。
- 设置热点数据永远不过期。
- 双缓存。我们有两个缓存，缓存A和缓存B。缓存A的失效时间为20分钟，缓存B不设失效时间。自己做缓存预热操作。然后细分以下几个小点
	- 从缓存A读数据库，有则直接返回
	- A没有数据，直接从B读数据，直接返回，并且异步启动-个更新线程。
	- 更新线程同时更新缓存A和缓存B。

