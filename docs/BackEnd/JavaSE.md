# Collection&Map
## 使用多态初始化
### Collection（线性）
#### list（可重复）
- ArrayList
- LinkedList
##### 遍历方法
```java
public class Test {

    public static void main(String[] args) {
        // 循环遍历List的4中方法
        List<String> strList = new ArrayList<>();
        strList.add("aaa");
        strList.add("bbb");
        strList.add("ccc");
        // 1. 普通遍历方式
        for (int i = 0; i < strList.size(); i++) {
            System.out.println(strList.get(i));
        }
        // 2.增强的for循环
        for (String str : strList) {
            System.out.println(str);
        }
        // 3. 使用Iterator迭代器
        Iterator<String> it = strList.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            System.out.println(str);
        }
        // 4. java8 Lambda方式
        // strList.forEach(System.out::println);//和下面的写法等价
        strList.forEach(str -> {
            System.out.println(str);
        });
    }
}
```
#### Set（不可重复）
- HashSet
- TreeSet
### Map（非线性）
- HashMap
# 字节流&字符流
## 字节流
### FileInputStream
```java
import java.io.FileInputStream;
import java.io.IOException;

public class file_input_stream {
	public static void main(String[] args) throws IOException {
		FileInputStream fis = new FileInputStream("abc.txt");
		int x;
		while ((x = fis.read()) != -1) {//没有读到末尾
			System.out.print((char) x);
		}
		fis.close();
	}
}
/*
byte[] byt = new byte[1024]; 
while ((x = fis.read(byt)) != -1) {//没有读到末尾
	fos.write(bys,0,len);
}
*/
```
### FileOutputStream
```java
import java.io.FileOutputStream;
import java.io.IOException;

public class file_output_stream {
	public static void main(String[] args) throws IOException {
		FileOutputStream fos = new FileOutputStream(
              "abc.txt", true/* 继续往后写 */);
		byte[] b = new byte[1024];
		fos.write(b);
		fos.write(123);
		fos.write(b, 0, 1024);
		fos.write("rn".getBytes());//写字符串、换行
		fos.write(555);
		fos.close();
	}
}
```
### BufferedInputStream
```java
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class buffered_input_stream {
	public static void main(String[] args) throws IOException {
		BufferedInputStream bis = new BufferedInputStream(new FileInputStream("abc.txt"));
		int x;
		while ((x = bis.read()) != -1) {
			System.out.print((char) x);
		}
		bis.close();
	}
}
```
### BufferedOutputStream
```java
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class buffered_output_stream {
	public static void main(String[] args) throws IOException {
		BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("abc.txt", true));
		bos.write("avdrn".getBytes());
		bos.close();
	}
}
```
## 字符流
### FileWriter/InputStreamWriter
```java
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;

public class output_stream_writer {
	public static void main(String[] args) throws IOException {
		OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream("abc.txt", true));
		FileWriter fw = new FileWriter("abc.txt", true);
		osw.write("abdddrn");
		osw.flush();// 刷新流，将字符串写入文件
		fw.write("fw");
		fw.flush();
		osw.close();
		fw.close();
	}
}
```
### FileReader/OutputStreamReader
```java
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class input_stream_writer {
	public static void main(String[] args) throws IOException {
		InputStreamReader isr = new InputStreamReader(new FileInputStream("abc.txt"));
		FileReader fr = new FileReader("abc.txt");//简化版
		int ch;
		while ((ch = isr.read()) != -1) {
			System.out.print((char) ch);
		}
		System.out.print("n");
		while ((ch = fr.read()) != -1) {
			System.out.print((char) ch);
		}
		isr.close();
		fr.close();
	}
}
```
### BufferedReader
```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class buffered_reader {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new FileReader("abc.txt"));
		int ch;
        String s = br.readLine();//读一行
		while ((ch = br.read()) != -1) {
			System.out.print((char) ch);
		}
		br.close();
	}
}
```
### BufferedWriter
```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class buffered_writer {
	public static void main(String[] args) throws IOException {
		BufferedWriter bw=new BufferedWriter(new FileWriter("abc.txt",true));
		bw.write("123rn");
        bw.newLine();//写一行分隔符
		bw.write(97);
		bw.flush();
		bw.close();
	}
}
```
### Scanner
```java
Scanner sc=new Scanner(new File("abc.txt"));
while (sc.hasNextLine()) {
	String s = sc.nextLine();
    System.out.println(s);
}
```
# LocalDate/LocalTime/LocalDateTime
#todo 
[JDK8的LocalDateTime用法 - 闲人鹤 - 博客园 (cnblogs.com)](https://www.cnblogs.com/huanshilang/p/12013386.html)
# File
## 基本方法
### 创建 
- `createNewFile()`
在指定位置创建一个空文件，成功就返回true，如果已存在就不创建，然后返回false。  
- `mkdir()`
在指定位置创建一个单级文件夹。  
- `mkdirs()`
在指定位置创建一个多级文件夹。  
- `renameTo(File dest)`
如果目标文件与源文件是在同一个路径下，那么renameTo的作用是重命名， 如果目标文件与源文件不是在同一个路径下，那么renameTo的作用就是剪切，而且还不能操作文件夹。
### 删除
- `delete()`
删除文件或者一个空文件夹，不能删除非空文件夹，马上删除文件，返回一个布尔值。  
- `deleteOnExit()`
jvm退出时删除文件或者文件夹，用于删除临时文件，无返回值。  
### 判断
- `exists()` 
文件或文件夹是否存在。  
- `isFile()` 
是否是一个文件，如果不存在，则始终为false。  
- `isDirectory()` 
是否是一个目录，如果不存在，则始终为false。  
- `isHidden()` 
是否是一个隐藏的文件或是否是隐藏的目录。  
- `isAbsolute()` 
测试此抽象路径名是否为绝对路径名。  
### 获取
- `getName()` 
获取文件或文件夹的名称，不包含上级路径。  
- `getAbsolutePath()`
获取文件的绝对路径，与文件是否存在没关系  
- `length()` 
获取文件的大小（字节数），如果文件不存在则返回0L，如果是文件夹也返回0L。  
- `getParent()` 
返回此抽象路径名父目录的路径名字符串；如果此路径名没有指定父目录，则返回null。  
- `lastModified()`
获取最后一次被修改的时间。
### 文件夹相关
- `static File[] listRoots()`
列出所有的根目录（Window中就是所有系统的盘符）  
- `list()` 
返回目录下的文件或者目录名，包含隐藏文件。对于文件这样操作会返回null。  
- `listFiles()` 
返回目录下的文件或者目录对象（File类实例），包含隐藏文件。对于文件这样操作会返回null。  
- `list(FilenameFilter filter)`
返回指定当前目录中符合过滤条件的子文件或子目录。对于文件这样操作会返回null。  
- `listFiles(FilenameFilter filter)`
返回指定当前目录中符合过滤条件的子文件或子目录。对于文件这样操作会返回null。
## 常用片段
### 创建文件夹
```java
File dir = new File(filePath);  
if (!dir.exists()) {  
	 boolean mkdirs = dir.mkdirs();  
	if (!mkdirs) {  
 		return false;  
 	}  
}
```
# 细节
### 字符串比较
`s1.equals(s2);`
### 字符串编码
`new String(your_string.getBytes(StandardCharsets.UTF_8))`
### StringBuffer和Stringbuilder
#### 1. 线程安全
StringBuffer：线程安全，StringBuilder：线程不安全。因为 StringBuffer 的所有公开方法都是 synchronized 修饰的，而 StringBuilder 并没有 synchronized 修饰。
#### 2. 缓冲区
- StringBuffer 每次获取 toString 都会直接使用缓存区的 toStringCache 值来构造一个字符串。
- StringBuilder 则每次都需要复制一次字符数组，再构造一个字符串。
#### 3. 区别3：性能
既然 StringBuffer 是线程安全的，它的所有公开方法都是同步的，StringBuilder 是没有对方法加锁同步的，所以毫无疑问，StringBuilder 的性能要远大于 StringBuffer。
#### 总结
StringBuffer 适用于用在多线程操作同一个 StringBuffer 的场景，如果是单线程场合 StringBuilder 更适合。
### 获取当前包名
```java
String className = Thread.currentThread().getStackTrace()[1].getClassName();  
String packageName = packageName.substring(0, packageName.lastIndexOf("."));  
System.out.println(packageName);
```
### 单实例模式
[详解](https://blog.csdn.net/u014672511/article/details/79774847)
[单例模式和静态方法区别](https://www.cnblogs.com/nizuimeiabc1/p/4254132.html)
### 编码
```java
URLDecoder.decode("","UTF-8");
```
### 封装类

| 数据类型 | 封装类    |
| -------- | --------- |
| int      | Integer   |
| short    | Short     |
| float    | Float     |
| double   | Double    |
| long     | Long      |
| boolean  | Boolean   |
| byte     | Byte      |
| char     | Character | 

#todo HashMap，HashSet，TreeSet，TreeMap，Deque，LinkedHashMap；排序算法，DFS，BFS，Sliding Window，sweep line