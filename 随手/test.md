1. 算法基础，大厂的笔试题就没有，别的不说，算法必须玩儿得溜溜的，[算法导论](https://www.zhihu.com/search?q=%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)还是要看看的，ACM的题或者是leetcode的题目你必须要刷得有一定水平吧。对了，大学参加点算法比赛，如果拿点奖，超级加分项。算法这个问题，个人看来虽然算套路，你不想被套路，那还是刷题套路考卷吧。为什么如此重要？因为很多经典问题的线装本就在这里，经典问题你都解决不好，还指望你能灵活变通？

2. 数据结构，程序=数据架构+算法，这个应该听过吧？代码的灵魂之一了，合适的数据结构配合合适的算法，是解决问题的根本之道。也不要求你多了，时间复杂度和[空间复杂度](https://www.zhihu.com/search?q=%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)的问题，必须给整明白了。数组，链表，这两个基本的结构搞懂，加以创造，[平衡二叉树](https://www.zhihu.com/search?q=%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)，红黑树，哈希表，堆，捅，图，这些结构用数组和链表的方式分别去创造下，自己实现下，[增量因子](https://www.zhihu.com/search?q=%E5%A2%9E%E9%87%8F%E5%9B%A0%E5%AD%90&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)设置多大，为什么要那么大什么的破烂问题也要关注。

3. 计算机组成原理, 至少《[计算机组成与设计](https://www.zhihu.com/search?q=%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E6%88%90%E4%B8%8E%E8%AE%BE%E8%AE%A1&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)》至少大学要看一遍吧，不说原版，中文翻译版还是要搞一手噢？

4. [计算机网络](https://www.zhihu.com/search?q=%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)，这个搞懂几个层是啥，TCP/IP的三次握手，四次挥手过程，为什么要这样设计，抓包怎么抓，基本还好了。

5. 操作系统，《[操作系统――精髓与设计原理](https://www.zhihu.com/search?q=%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E2%80%95%E2%80%95%E7%B2%BE%E9%AB%93%E4%B8%8E%E8%AE%BE%E8%AE%A1%E5%8E%9F%E7%90%86&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)》什么的还是看看吧，手动实现个建议版本的linux内核，相信内存分配、调度、进程、线程这几个点，着重理解下，相信大学的你只要看了些linux内核的书籍，大多数内核代码你是看过的了。

6. 数据库：不光要会写sql,几大范式定义概念搞懂。数据库事务的ACID总能扯明白吧？隔离层级分别保障的粒度，和依然存在的问题你得知晓吧？更重要的是，你得知道sql得优化和套路。查询优化策略，db层级的优化考虑你是大学生，不太会问题。这年月也不想要求你oracle了，但是主流的MYSQL的存储引擎之间的区别，你得知道吧。索引你得知道吧，这个是个比较广泛的话题噢，[索引原理](https://www.zhihu.com/search?q=%E7%B4%A2%E5%BC%95%E5%8E%9F%E7%90%86&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)，索引数据结构与算法，为什么会采用这些索引？索引优缺点。都起码知晓下吧。数据库事务的实现方式你能知道一些吗？二阶段提交、三阶段提交你知道不？看你个人深浅了。

7. 编译原理：记得有门课程，如果实现一个简单的编程语言，这个都有搞过吧，各位985的童鞋们？翻翻去，别忘记了。别觉得难，也别看不起，你要是真认了我也就放心了——至少这个小伙子处理字符串的能力很强，AST都能搞搞了，日常的字符串信息处理问题应该不大的。

编程语言：题主都指定Java了，那我们就来掰扯掰扯java的一些知识点了。

1. 集合方面：map,set,list的区别概念，你总该晓得吧？你看数据结构重要不？我问你点具体的实现类简单点的就HashMap HashSet ArrayList，看你能扯多少，要是能行的话我们换点稍微有意思的话题HashTable,CurrentHashMap,TreeSet，LinkedHashSet,LinkedArrayList,BlockingQueue及其各种实现看你能掰扯几分了？

2. IO方面：BIO\NIO\AIO你有能知道多少呢？这个话题可就多了也见深浅了，话题也开放了。基本的IO操作，到实现机制、设计模式乃至操作系统的各种调度我都可以和你聊一聊，也顺便可以和你扯一扯mina，netty，Grizzly，听没听过，玩没玩耍过，相信很快能摸出你的深浅。

3.多线程：你以为这个你能跑得掉？线程的生命周期，同步异步的区别，什么时候需要同步，什么时候需要异步，线程的调度方式，聊聊并发编程，为啥要并发，怎么去并发，你处理了哪些并发问题，你能没经验，不过没关系，问问还是可以的。

4.[虚拟机](https://www.zhihu.com/search?q=%E8%99%9A%E6%8B%9F%E6%9C%BA&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)的那些事儿：都搞java了，虚拟机的一些东西你总得知道吧？JVM的内存模型，垃圾回收机制，各种机制下的垃圾回收器怎么工作还是知晓些吧。JVM字节码那个太苛刻了，不要求你，但是你有真功夫，大家聊聊还是可以的。

5.一些基本的东西你还是要有吧：[http协议](https://www.zhihu.com/search?q=http%E5%8D%8F%E8%AE%AE&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)、https协议，dns解析过程、servlet是个什么东西？生命周期如何？request/response区别，session/cookie区别实现机制，redirect/forward的区别你能给简单讲讲？

6.编程框架：web类的框架执行流程总得讲一下吧，比如SpringMVC是如何工作的？你自己实现个web框架可以还是不可以？怎么做，可有思路？既然是Spring了那么IOC\AOP的实现原理怎么来的,bean的作用域有哪些，务传播机制，隔离层级，基本还是要问问的？反射，代理怎么回事不可能搞不清楚吧。代理的几种方式JDK的cglib的aspectJ的，你又只多少？抛弃了框架你自己实现基于类的代理有门么？mybatis听过没？不管你听没听过反正jdbc那些事情，数据库连接池的那些事情，我们有得聊，只要你能勾起我们的聊天兴趣。

7.通用性质的一些东西：大名鼎鼎的apache你知道吗？web服务器，应用服务器类的区别你知道吗？ngnix玩耍过没？ngnix你都用来干了些什么？缓存可有听过？怎么来玩耍？从浏览器端一直到后端的各层缓存该怎么来玩耍？策略又是如何来定的？分布式缓存可有听过？memcached，redis可有玩耍过总之话题很多，不一而足。

8.分布式的一些概念：你可知晓为啥要分布式？分布式有哪些经典问题？简单点的如何实现应用无状态，全局唯一ID(莫要拿什么雪花算法之类的烂大街的来扯，要有点实际意义的)，负载均衡有没有概念？如何做？如何去做高可用？如何去保障分布式环境下的一致性问题？[消息中间件](https://www.zhihu.com/search?q=%E6%B6%88%E6%81%AF%E4%B8%AD%E9%97%B4%E4%BB%B6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)玩耍过没有？知不知道都有哪些，实现区别在哪里，用它干嘛去？分布式的环境下如何去保障服务的可靠性？如何面临雪崩问题？如何面临穿透问题？包括但不限于[spring cloud](https://www.zhihu.com/search?q=spring+cloud&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1318777850%7D)的相关话题，都解决了哪些分布式方面性的问题，如何解决的，策略有哪些？问题多的是，看你有多少深浅了。