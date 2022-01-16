# 表单
`$_SERVER["PHP_SELF"]` 是一种超全局变量，它返回当前执行脚本的文件名。
```php
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];//跳转到原本的地址(不跳转) ?>">
名字: <input type="text" name="name" value="<?php echo $name;//提交表单后不清空内容 ?>">
```
### 表单验证
防止注入第三方脚本导致被攻击
`htmlspecialchars()` 函数把特殊字符转换为 HTML 实体。这意味着 < 和 > 之类的 HTML 字符会被替换为 `&lt;` 和 `&gt;`
```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```
处理传递后的字符串
- `trim()` 去除用户输入数据中不必要的字符(多余的空格、制表符、换行)
- `stripslashes()`  删除用户输入数据中的反斜杠
```php
<?php
// 定义变量并设置为空值
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  	$name = test_input($_POST["name"]);
}

function test_input($data) {
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	return $data;
}
?>
```
### 必填字段
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 	if (empty($_POST["name"])) {
 		$nameErr = "Name is required";
 	} else {
 		$name = $_POST["name"];
 		// 检测名字是否只包含字母跟空格
 		if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
 			$nameErr = "只允许字母和空格";
 		}
 	}
} ?>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
 	名字: <input type="text" name="name">
 	<span class="error">* <?php echo $nameErr; ?></span>
 	<br><br>
</form>
```
#### 字符串匹配(正则表达式)
`int preg_match (string $pattern, string $subject[, array &$matches[, int $flags = 0[, int $offset = 0 ]]])`

- `$pattern`: 要搜索的模式，字符串形式。
- `$subject`: 输入字符串。
    
- `$matches`: 如果提供了参数 matches ，它将被填充为搜索结果。 `$matches[0]`将包含完整模式匹配到的文本，`$matches[1]` 将包含第一个捕获子组匹配到的文本，以此类推。
    
- `$flags`：flags 可以被设置为以下标记值：
    
    - `PREG_OFFSET_CAPTURE`: 如果传递了这个标记，对于每一个出现的匹配返回时会附加字符串偏移量(相对于目标字符串的)。 注意：这会改变填充到 matches 参数的数组，使其每个元素成为一个由 第0个元素是匹配到的字符串，第1个元素是该匹配字符串 在目标字符串 subject 中的偏移量。
        
- `offset`: 通常，搜索从目标字符串的开始位置开始。可选参数 offset 用于 指定从目标字符串的某个未知开始搜索(单位是字节)。