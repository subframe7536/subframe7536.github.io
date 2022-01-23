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
### 全局存储用户信息
