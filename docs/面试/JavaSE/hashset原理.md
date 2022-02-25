## 实现
基于HashMap实现，默认构造函数是构建一个初始容量为16，负载因子为0.75 的HashMap。封装了一个 HashMap 对象来存储所有的集合元素，所有放入 HashSet 中的集合元素实际上由 HashMap 的 key 来保存，而 HashMap 的 value 则存储了一个 PRESENT，它是一个静态的 Object 对象。
当把某个类的对象当成 HashMap的key，或试图将这个类的对象放入 HashSet 中保存时，重写该类的equals(Object obj)方法和 hashCode() 方法很重要，而且这两个方法的返回值必须保持一致：当该类的两个的 hashCode() 返回值相同时，它们通过 equals() 方法比较也应该返回 true。
通常来说，所有参与计算 hashCode() 返回值的关键属性，都应该用于作为 equals() 比较的标准。
- 其他操作都是基于HashMap的。
## 去重
利用`HashMap`的key唯一性
重写`equals()`和`hashCode()`方法，添加对象时调用
如果Set集合中没有与该元素 hashCode 值相同的元素，则说明该元素是新元素，可以添加到 Set 集合中；如果两个元素的 hashCode 值相同，再使用 equals 方法比较，如果返回值为 true，就说明两个元素相同，新元素不会被添加到 Set 集合中；如果 hashCode 值相同，但是 equals 方法比较后，返回值为 false ，就说明两个元素不相同，新元素会被添加到 Set 集合中。