# ThreadLocal
使用上锁之外的方式创建线程本地变量，用于规避线程安全问题。
```java
class ThreadLocalUtil {
    private static final ThreadLocal<Map<String,String>> LOGIN_THREAD_LOCAL = new ThreadLocal<>();
    public static void set(Map<String,String> map){
        LOGIN_THREAD_LOCAL.set(map);
    }
    public static String userId(){
        return get("userId");
    }
    public static String get(String key){
        Map<String,String> map = LOGIN_THREAD_LOCAL.get();
        return map.get(key);
    }
    public static void clear(){
        LOGIN_THREAD_LOCAL.remove();
    }
}
```
## 用途
### 代替显示传参
将前端传递的参数存入`Threadlocal`，这样不需要显示传参，只需从`Threadlocal`中读取即可。
### 全局存储用户信息
用户信息会保存在`Session`或者`Token`中，使用常规方法比较费劲。
在**拦截器**的业务中， 获取到保存的用户信息，然后存入`ThreadLocal`中
如果`header`中携带`Token`，拦截器中解析`Token`，获取用户信息，调用上述类的`set`方法存入`ThreadLocal`中，当请求结束的时候，将ThreadLocal存储数据清空， 中间的过程无需在关注如何获取用户信息，只需要使用工具类的`get`方法即可。
### 线程安全
`Spring`项目中`Dao`层中装配的`Connection`采用`ThreadLocal`方法，当每个请求线程使用`Connection`的时候，都会从`ThreadLocal`获取一次，如果为`null`，说明没有进行过数据库连接，连接后存入`ThreadLocal`中，如此一来，每一个请求线程都有一份单独`Connection`。
## 无法使用的场景
1. 线程池中线程调用使用ThreadLocal。由于线程池中对线程管理都是采用线程复用的方法。在线程池中线程非常难结束甚至于永远不会结束。这将意味着线程持续的时间将不可预測，甚至与JVM的生命周期一致。
2. 异步程序中，ThreadLocal的參数传递是不靠谱的，由于线程将请求发送后。就不再等待远程返回结果继续向下运行了，真正的返回结果得到后，处理的线程可能是其他的线程。Java8中的并发流也要考虑这种情况。
3. 使用完`ThreadLocal`，最好手动调用`remove`方法，防止出现内存溢出，因为使用中的key为ThreadLocal的弱引用，如果ThreadLocal没有被外部强引用的情况下，在`gc`的时候会被清理掉的，但是如果value是强引用，不会被清理，这样一来就会出现key为null的value。
[[java四种引用]]