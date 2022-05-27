# shell编程
## 创建&执行
1. 创建文件
`touch xxx.sh`
2. 设置权限
`chmod 755 xxx.sh`
3. 执行shell脚本
`./xxx.sh`
## 语法
> 语句换行即相当于加分号
### 注释
`#xxxx`
- 最开头需要写`#!/bin/bash`，提示这是shell脚本，便于他人查看
### linux语句
`Ubuntu`的语句可以直接写，比如显示文件权限`ls -l xxx`
#### 管道
上一句的结果为下一句的输出
```shell
echo "asdasda wrobnbd" | awk "{print $1}"
```
### 打印
```shell
echo "xxxx"
```
- `\n`无效
### 多语句执行
`{}`或者`()`，使用`;`间隔
```shell
(var=notest; echo $var)
{ var=notest; echo $var;}
```
#### 区别
1. 执行进程不同
	1. `()`只是对一串命令重新开一个子shell进行执行，同名的变量在父进程和子进程中都有不同的空间，相互不干扰
	2. `{}`对一串命令在当前shell执行，同名的变量是共享同一块存储空间的，利用此功能，可以将当前shell进程中变量传递给函数
2. 分号使用
	1. `()`最后一个命令可以不用分号  
	2. `{}`最后一个命令要用分号
3. 空格使用
	1. `{}`的第一个命令和左括号之间必须要有一个空格  
	2. `()`里的各命令不必和括号有空格
### 变量
#### 定义
`xxx`
- 无需声明数据类型
#### 键盘获取变量值
```shell
read xxx
```
#### 赋值
```shell
xxx=123456
```
#### 赋值变量为运行结果
在语句前后添加<code>`</code>或<code>$()</code>
```shell
xxx=`awk "{print $1}" file`
xxx=$(ls)
```
#### 使用变量的值
```shell
$x
```
##### 规定范围
- 变量长度过长会导致shell无法正确识别变量，需要使用大括号进行划定范围
```shell
${test}
```
#### 特殊的变量名
| 参数   | 含义                 |
| ------ | -------------------- |
| `$0`   | 当前脚本名称         |
| `${n}` | 第n个参数            | 
| `$@`   | 输入的所有参数       |
| `$#`   | 输入的参数个数       |
| `$$`   | 当前进程 ID          |
| `$?`   | 上一个命令的退出状态 |
#### 引号内使用后变量
单引号不对其中的句子进行解析，直接输出
双引号支持解析变量
### 变量替换
string符合shell语法，可以是常量或者语句
#### ${var:-string}
判断var是否为空，**为空**则用string替换
```shell
$ echo newvar  

$ echo ${newvar:-a}  
a
$ echo newvar  

```
#### ${var:=string} 
判断var是否为空，**为空**则用string替换并赋值给var
- 设置变量的默认值
```shell
$ echo newvar  

$ echo ${newvar:=a}  
a  
$ echo newvar 
a
```
#### ${var:+string}
判断var是否为空，**不为空**则用string替换
```shell
$ echo $newvar  
a  
$ echo ${newvar:+b}  
b  
$ echo $newvar  
a  
$ newvar=  
$ echo ${newvar:+b}

```
#### ${var:?string}
判断var是否为空，**为空**则把string输出到标准错误中，并从脚本中退出
- 判断是否输入变量
```shell
$ newvar=  
$ echo ${newvar:?没有设置newvar的值}  
bash: newvar: 没有设置newvar的值
```
### 扩展计算
`$((exp))`
- 只能是整数型的计算，不支持浮点型
- 若是逻辑判断，表达式exp为真则为1,假则为0。  
```shell
$ echo $((3+2))  
5  
$ echo $((3>2))  
1  
$ echo $((25<3?2:3))  
3  
#************************#
$ echo $var  

$ echo $((var=2+3))  
5  
$ echo $var  
5  
#************************#
$ echo $((var++))  
5  
$ echo $var  
6
```
### 退出
`exit`/`exit 0`
### 判断/循环/条件语句
#### 符号
| 数据类型 | 写法 | 含义                              |
| -------- | ---- | --------------------------------- |
| 数值     | -lt  | less than 小于                    |
| 数值     | -le  | less equal 小于等于               |
| 数值     | -eq  | equal 等于                        |
| 数值     | -gt  | greater than 大于                 |
| 数值     | -ge  | greater equal 大于等于            |
| 数值     | -ne  | not equal 不等于                  |
| 文件     | -r   | read 有读权限                     |
| 文件     | -w   | write 有写权限                    |
| 文件     | -x   | execute 有执行权限                |
| 文件     | -f   | file 文件存在并且是一个常规的文件 |
| 文件     | -e   | existence 文件存在                |
| 文件     | -d   | directory 文件存在并是一个目录    |
#### if语句
```shell
if 条件 
then 
	...
elif 条件
then
	...
else
	...
fi
```
#### case语句
```shell
case $xxx in 
1) 
	echo 10 
	;; 
2) 
	echo 20 
	;; 
*) 
	echo other 
	;; 
esac
```
#### while语句
```shell
while [ $i -le 100 ] 
do 
	s=$[$s+$i] 
	i=$[$i+1] 
done
```
#### for循环语句
```shell
# 普通for
for (( i=1;i<=10;i++ ))
do
	echo $i
done

# for in
for i in $*
do
	echo $i
done
```
### 获取调用参数
`getopts OPTSTRING  VARNAME`
#### 模式
![[getopts错误模式.png]]
#### 使用
OPTSTRING => 告诉**getopts**会有哪些选项和参数
VARNAME => 保存getopts获取到的选项
```shell
getopts ":d:D" opt
# slient模式，输入[ -d 参数 ]或者[ -D ]
```
#### 范例
```shell
while getopts ":sn:p:" opt; do
    case $opt in
    n)
        echo "选项-$opt的值是$OPTARG"
        ;;
    s)
        echo "选项-$opt"
        ;;
    p)
        echo "选项-$opt的值是$OPTARG"
        ;;
    :)
        echo "选项-$OPTARG后面需要一个参数值"
        exit 1
        ;;
    ?)
        echo "无效的选项 -$OPTARG"
        exit 2
        ;;
    esac
done
```
##### 结果
```shell
$ ./testopt.sh -s -n testname -p
选项-s
选项-n的值是testname
选项-p后面需要一个参数值
```
## 常用
### 遍历文件每一行
```shell
cat FileName | while read line
do
	echo $line
done
```
### 遍历所有文件
```shell
path=/home/*
for file in $path
do
	if test -f $file
	then
		echo $file 是文件
	else	
		echo $file 是目录
	fi
done
```
### 遍历计数
```shell
num=0
for (( i=1;i<=10;i++ )) 
do 
	num=$((num+1)) 
done
echo $num
```
### 创建文件(夹)时判断是否存在
#### Directory
```shell
if [ ! -d "/data/" ];then
	mkdir /data 
else 
	echo "文件夹已经存在" 
fi
```
#### File
```shell
if [ ! -e "data" ];then
	touch data 
else 
	echo "文件已经存在" 
fi
```
