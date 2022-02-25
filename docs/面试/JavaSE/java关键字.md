## synchronized
1、 无论synchronized关键字加在方法上还是对象上，如果它作用的对象是非静态的，则它取得的锁是对象；如果synchronized作用的对象是一个静态方法或一个类，则它取得的锁是对类，该类所有的对象同一把锁。   
2、每个对象只有一个锁（lock）与之相关联，谁拿到这个锁谁就可以运行它所控制的那段代码。
## trainsient
让属性不被自动序列化
## volatile
- 保证变量的内存可见性，但是不能保障变量原子性
- 禁止指令重排序
[volatile 关键字，你真的理解吗？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/138819184)
[volatile面试题](https://zhuanlan.zhihu.com/p/147825106)
