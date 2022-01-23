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
将前端传递的参数存入`Threadlocal`，这样不需要显示传参，只需从`Threadlocal`中读取即可
### 全局存储用户信息
用户信息会保存在`Session`或者`Token`中，使用常规方法比较费劲
在**拦截器**的业务中， 获取到保存的用户信息，然后存入`ThreadLocal`中
如果`header`中携带`Token`，拦截器中解析`Token`，获取用户信息，调用上述类的`set`方法存入`ThreadLocal`中，当请求结束的时候，将ThreadLocal存储数据清空， 中间的过程无需在关注如何获取用户信息，只需要使用工具类的`get`方法即可。
### 