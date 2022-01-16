# 数据库
### 原始方法
```php
<?php
$conn = mysqli_connect('localhost', 'root', '1234');
if ($conn->connect_error) {
    die("连接失败" . $conn->connect_error);
}

$conn->set_charset('utf8');//设置读取编码
$conn->select_db('DBName');//选择数据库
// mysqli_set_charset($conn, "utf8");//面向过程
// mysqli_select_db($conn, 'DBName');

$sql = 'select * from aaa';
$query = $conn->query($sql);
// $query = mysqli_query($conn, $sql);

foreach ($query as $k => $v) {
    echo json_encode($v, JSON_UNESCAPED_UNICODE) . "<br>";
}
```
#### 预处理
减少mysql分析时间，减少带宽消耗
不存储结果，一般用在update、insert、delete
```php
$sql1 = 'insert into user(name,age) values(?,?)';
$userName = '11';
$age = 16;
$stmt = $conn->prepare($sql1);
$stmt->bind_param("si", $userName, $age);
$stmt->execute();
```
- `?`用参数代替，不可为表名
- `$stmt->bind_param("s", $userName);`设置参数格式

| 参数 | 含义                                     |
| ---- | ---------------------------------------- |
| i    | integer（整型）                          |
| d    | double（双精度浮点型）                   |
| s    | string（字符串）                         |
| b    | BLOB（binary large object:二进制大对象） |

### PDO
> PHP 数据对象 （PDO） 扩展为PHP访问数据库定义了一个轻量级的一致接口。
> PDO 提供了一个数据访问抽象层，这意味着，不管使用哪种数据库，都可以用相同的函数（方法）来查询和获取数据。
> PDO随PHP5.1发行，在PHP5.0的PECL扩展中也可以使用，无法运行于之前的PHP版本。

#### 连接
```php
$dbms = 'mysql';     //数据库类型
$host = 'localhost'; //数据库主机名
$dbName = 'short_term_yundaoyigou';    //使用的数据库
$user = 'root';      //数据库连接用户名
$pass = '1234';          //对应的密码
try {
    $dsn = "$dbms:host=$host;dbname=$dbName;charset=utf8";
    $pdo = new PDO($dsn, $user, $pass);
} catch (PDOException $e) {
    die("Error!: " . $e->getMessage() . "<br/>");
}
```
#### 输出
- `$pdo->exec($sql)` 
insert、update、delete
- `$pdo->query($sql)`
select
#### 预编译
```php
$sql = 'select name from student where id = :id';
    $sql1 = 'insert into user(name) values(?)';
    $res = $pdo->prepare($sql);
    $res1 = $pdo->prepare($sql1);
    $id = 100000;
    $name = 'subframe';
	//冒号+名称标识
    $res->bindParam(':id', $id, PDO::PARAM_INT);
    $res->execute();
    // $res->execute(array('id' => 100000));
    $res1->bindParam(1, $name);
    $res1->execute();
    // $res1->execute(array('subframe'));

	//输出受影响的行数(insert、update、delete)，select别用
    if ($res1->rowCount()) {
        echo 'success';
    } else {
        echo 'fail';
    }
	
	//从结果集中获取所有数据，并存到数组中
    $te = $res->fetchAll(PDO::FETCH_ASSOC);
    print_r($te);
```
##### `fetch()`模式
- PDO::FETCH_ASSOC
	- 返回一个索引为结果集列名的数组
- PDO::FETCH_BOTH（默认）
	- 返回一个索引为结果集列名和以0开始的列号的数组
- PDO::FETCH_BOUND
	- 返回TRUE ，并分配结果集中的列值给PDOStatement::bindColumn() 方法绑定的 PHP 变量。
- PDO::FETCH_CLASS
	- 返回一个请求类的新实例，映射结果集中的列名到类中对应的属性名。如果 `fetch_style` 包含 PDO::FETCH_CLASSTYPE（例如：PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE），则类名由第一列的值决定
- PDO::FETCH_INTO
	- 更新一个被请求类已存在的实例，映射结果集中的列到类中命名的属性
- PDO::FETCH_LAZY
	- 结合使用 PDO::FETCH_BOTH 和 PDO::FETCH_OBJ，创建供用来访问的对象变量名
- PDO::FETCH_NUM
	- 返回一个索引为以0开始的结果集列号的数组
- PDO::FETCH_OBJ
	- 返回一个属性名对应结果集列名的匿名对象