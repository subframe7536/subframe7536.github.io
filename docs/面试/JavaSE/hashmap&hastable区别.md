### 继承的父类不同
- `HashMap`继承`AbstractMap`
- `HashTable`继承`Dictionary`
### `NULL key`和`NULL value`的支持不同
- `HashTable`调用`put()`时，如果`key`为`NULL`，`key.hashCode()`会抛出空指针异常，`value`为`NULL`时，源码中声明了会抛出空指针异常
- `HashMap`的`key`和`value`都可以为`NULL`，但是导致如果用`get()`取值返回`NULL`可能时没有`key`或者`key`为`NULL`，所以通过`key`找`value`的时候必须使用`containsKey()`
### 线程安全性不同
- `HashTable`每个方法前都有`synchronized`修饰，是线程安全的，效率低
- `HashMap`没有`synchronized`修饰，是线程不安全的，效率高
### 每次扩容大小不同
- `HashTable`默认大小为11，每次扩容为原来的`2n+1`倍，实例化时可以指定默认大小
- `HashMap`默认大小为16，每次扩容为原来的`2`倍，实例化时可以指定大小`a`，生成离`a`最接近的$2^n$倍
### Hash值计算方式不同
- `Hashtable`使用的是对象的`hashCode`
- `HashMap`将哈希表的大小固定为2的幂，然后进行位运算
