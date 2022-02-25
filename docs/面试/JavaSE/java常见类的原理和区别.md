## map/set/list区别
![[Pasted image 20220219165035.png]]
- 原excalidraw [[collection&map接口]]
### List
1. 可以允许重复的对象
2. 可以插入多个`null`元素
3. 是一个有序容器，保持了每个元素的插入顺序
### map
1. 以键值对保存，`key`唯一，`value`可以重复
2. 不是`collection`的子接口或者实现类，是接口
3. 可以放任意个`null`值但最多只能有一个`null`键
### set
1. 不允许重复对象
2. 只允许一个`null`元素
3. 无序容器，无法保证每个元素的存储顺序
## 原理&区别
[[hashmap原理]]
[[hashset原理]]
[[hashmap&hastable区别]]
[[hashmap&hastset区别]]
[[concurrenthashmap原理]]
[[LinkedList、ArrayList和Vector区别]]
[[TreeSet原理]]
[[LinkedHashSet原理]]
[[LinkedHashMap原理]]
[看完你就懂了！Java集合之Map接口详解_mb6004f7a0e5cc3的技术博客_51CTO博客](https://blog.51cto.com/u_15087081/2597150)