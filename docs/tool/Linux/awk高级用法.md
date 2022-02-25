## awk 使用变量
> [Linux awk命令高级用法完全攻略 (biancheng.net)](http://c.biancheng.net/view/4097.html)

在 awk 的脚本程序中，支持使用变量来存取值。awk 支持两种不同类型的变量：
- 内建变量：awk 本身就创建好，用户可以直接拿来用的变量，这些变量用来存放处理数据文件中的某些字段和记录的信息。
- 自定义变量：awk 支持用户自己创建变量。
#### 内建变量
awk 程序使用内建变量来引用程序数据里的一些特殊功能。常见的一些内建变量，包括上一节介绍的数据字段变量`($0、$1、$2...$n)`以及表 1 、表 2 中所示的这些变量。

| 变量        | 功能                                                 |
| ----------- | ---------------------------------------------------- |
| FIELDWIDTHS | 由空格分隔的一列数字，定义了每个数据字段的确切宽度。 |
| FNR         | 当前输入文档的记录编号，常在有多个输入文档时使用。   |
| NR          | 输入流的当前记录编号。                               |
| FS          | 输入字段分隔符                                       |
| RS          | 输入记录分隔符，默认为换行符 \n。                    |
| OFS         | 输出字段分隔符，默认为空格。                         |
| ORS         | 输出记录分隔符，默认为换行符 \n。                    |

在表 1 中，变量 FS 和 OFS 定义了 awk 如何处理数据流中的数据字段。我们已经知道了如何使用变量 FS 来定义记录中的字段分隔符，变量 OFS 具备相同的功能，只不过是用在 print 命令的输出上，例如：
```shell
[root@localhost ~]# cat data1
data11,data12,data13,data14,data15
data21,data22,data23,data24,data25
data31,data32,data33,data34,data35
[root@localhost ~]# awk 'BEGIN{FS=","; OFS="-"} {print $1,$2,$3}' data1
data11-data12-data13
data21-data22-data23
data31-data32-data33
[root@localhost ~]# awk 'BEGIN{FS=","; OFS="--"} {print $1,$2,$3}' data1
data11--data12--data13
data21--data22--data23
data31--data32--data33
```

可以看到，print 命令会自动将 OFS 变量的值放置在输出中的每个字段间。通过设置 OFS 变量，可以在输出中使用任意字符串来分隔字段。

FIELDWIDTHS 变量允许用户不依靠字段分隔符来读取记录。在一些应用程序中，数据并没有使用字段分隔符，而是被放置在了记录中的特定列，这种情况下，必须设定 FIELDWIDTHS 变量来匹配数据在记录中的位置。

一旦设置了 FIELDWIDTH 变量，awk 就会忽略 FS 变量，并根据提供的字段宽度来计算字段，下面是个采用字段宽度而非字段分隔符的例子：
```shell
[root@localhost ~]# cat data1b
1005.3247596.37
115-2.349194.00
05810.1298100.1
[root@localhost ~]# awk 'BEGIN{FIELDWIDTHS="3 5 2 5"}{print $1,$2,$3,$4}' data1b
100 5.324 75 96.37
115 -2.34 91 94.00
058 10.12 98 100.1
```

注意，一旦设定了 FIELDWIDTHS 变量的值，就不能再改变了，因此，这种方法并不适用于变长的字段。

变量 RS 和 ORS 定义了 awk 程序如何处理数据流中的字段，默认情况下，awk 将 RS 和 ORS 设为换行符。默认的 RS 值表明，输入数据流中的每行新文本就是一条新纪录。 有时，你会在数据流中碰到占据多行的字段。典型的例子是包含地址和电话号码的数据，其中地址和电话号码各占一行，例如：
```
Riley Mullen
123 Main Street
Chicago, IL 60601
(312)555-1234
```
如果你用默认的 FS 和 RS 变量值来读取这组数据，awk 就会把每行作为一条单独的记录来读取，并将记录中的空格当作字段分隔符，这并不是用户想要的。

要解决这个问题，只需把 FS 变量设置成换行符，这就表明数据流中的每行都是一个单独的字段，每行上的所有数据都属于同一个字段；与此同时，把 RS 变量设置成空字符串，然后在数据记录间留一个空白行，awk 会把每个空白行当作一个记录分隔符。例如：
```shell
[root@localhost ~]# cat data2
Riley Mullen
123 Main Street
Chicago, IL 60601
(312)555-1234

Frank Williams
456 Oak Street
Indianapolis, IN 46201
(317)555-9876

Haley Snell
4231 Elm Street
Detroit, MI 48201
(313)555-4938
[root@localhost ~]# awk 'BEGIN{FS="\n"; RS=""} {print $1,$4}' data2
Riley Mullen (312)555-1234
Frank Williams (317)555-9876
Haley Snell (313)555-4938
```

| 变量名     | 功能                                                     |
| ---------- | -------------------------------------------------------- |
| ARGC       | 命令行参数个数。                                         |
| ARGIND     | 当前文件在 ARGC 中的位置。                               |
| ARGV       | 包含命令行参数的数组。                                   |
| CONVFMT    | 数字的转换格式，默认值为 %.6g。                          |
| ENVIRON    | 当前 shell 环境变量及其值组成的关联数组。                |
| ERRNO      | 当读取或关闭输入文件发生错误时的系统错误号。             |
| FILENAME   | 当前输入文档的名称。                                     |
| FNR        | 当前数据文件中的数据行数。                               |
| IGNORECASE | 设成非 0 值时，忽略 awk 命令中出现的字符串的字符大小写。 |
| NF         | 数据文件中的字段总数。                                   |
| NR         | 已处理的输入记录数。                                     |
| OFMT       | 数字的输出格式，默认值为 %.6g。                          |
| RLENGTH    | 由 match 函数所匹配的子字符串的长度。                    |
| TSTART     | 由 match 函数所匹配的子字符串的起始位置。                |

其中，FNR 和 NR 变量虽然类似，但又略有不同。FNR 变量含有当前数据文件中已处理过的记录数，NR 变量则含有已处理过的记录总数。举个例子：
```shell
[root@localhost ~]# cat data1
data11,data12,data13,data14,data15
data21,data22,data23,data24,data25
data31,data32,data33,data34,data35
[root@localhost ~]# awk '
\> BEGIN {FS=","}
\> {print $1,"FNR="FNR,"NR="NR}
\> END{print "There were",NR,"records processed"}' data1 data1
data11 FNR=1 NR=1
data21 FNR=2 NR=2
data31 FNR=3 NR=3
data11 FNR=1 NR=4
data21 FNR=2 NR=5
data31 FNR=3 NR=6
There were 6 records processed
```

由此可以看出，当只使用一个数据文件作为输入时，FNR 和 NR 的值是相同的；如果使用多个数据文件作为输入，FNR 的值会在处理每个数据文件时被重置，而 NR 的值则会继续计数直到处理完所有的数据文件。

#### 自定义变量

和其他典型的编程语言一样，awk 允许用户定义自己的变量在脚本程序中使用。awk 自定义变量名可以是任意数目的字母、数字和下划线，但不能以数字开头。更重要的是，awk 变量名区分大小写。

举个简单的例子：
```shell
[root@localhost ~]# awk '
\> BEGIN{
\> testing="This is a test"
\> print testing
\> testing=45
\> print testing
\> }'
This is a test
45
```

可以看到，print 语句的输出是 testing 变量的当前值。

也可以用 awk 命令行来给程序中的变量赋值，这允许我们在正常的代码之外赋值，即时改变变量的值，比如：
```shell
[root@localhost ~]# cat script1
BEGIN{FS=","} {print $n}
[root@localhost ~]# awk -f script1 n=2 data1
data12
data22
data32
[root@localhost ~]# awk -f script1 n=3 data1
data13
data23
data33
```

需要注意的是，使用命令行参数来定义变量值会有一个问题，即设置了变量后，这个值在代码的 BEGIN 部分不可用，如下所示：
```shell
[root@localhost ~]# cat script2
BEGIN{print "The starting value is",n; FS=","}
{print $n}
[root@localhost ~]# awk -f script2 n=3 data1
The starting value is
data13
data23
data33
```

解决这个问题，可以用 -v 命令行参数，它可以实现在 BEGIN 代码之前设定变量。在命令行上，-v 命令行参数必须放在脚本代码之前，如下所示：
```shell
[root@localhost ~]# awk -v n=3 -f script2 data1
The starting value is 3
data13
data23
data33
```

注意，awk 脚本程序中输出函数还可以使用 C 语言中的 printf 函数，具体用法可阅读《[C语言 printf 函数](http://c.biancheng.net/view/1757.html)》 和《[C语言输出大汇总](http://c.biancheng.net/view/1793.html)》两篇文章，系统学习此函数的用法。

## awk 使用数组

为了在单个变量中存储多个值，许多编程语言都提供数组，awk 使用关联数组提供数组功能。

关联数组跟数字数组不同之处在于，它的索引值可以是任意文本字符串。用户不需要用连续的数字来标识数组中的数据元素；相反，关联数组用各种字符串来引用值。每个索引字符串都必须能够唯一地标识出赋给它的数据元素。

如果你熟悉其他编程语言的话，其实关联数组和散列表、字典的用法类似。

#### 关联数组的定义和使用

在 awk 脚本程序中，定义一个数组变量可以使用标准复制语句，其基本格式为：
`var[index]=element`
其中，var 是数组名，index 是关联数组的索引值，element 是数据元素值。例如：
```
capital["Illinois"] = "Springfield"
capital["Indiana"] = "Indianapolis"
capital["Ohio"] = "Columbus"
```

在引用数组变量时，必须用索引值（index）来提取相应的数据元素值，例如：

```shell
[root@localhost ~] awk 'BEGIN{
\> capital["Illinois"] = "Springfield"
\> print capital["Illinois"]
\> }'
Springfield
```

数组变量也是变量，也可以使用其进行基本的算术运算，例如：
```shell
[root@localhost ~] awk 'BEGIN{
\> var[1] = 34
\> var[2] = 3
\> total = var[1] + var[2]
\> print total
\> }'
37
```

#### 关联数组的遍历

在 awk 中遍历关联数组，可以用 for 语句的一种特殊形式：
```
for (var in array)
{
  statements
}
```
这个 for 语句会在每次循环时将关联数组 array 的下一个索引值赋给变量 var，然后执行一遍 statements。

再次强调，整个遍历过程中，传给 var 的都是每个数组元素的索引值（也就是 index），不是数组元素的值。

举个例子：
```shell
[root@localhost ~] awk 'BEGIN{
\> var["a"] = 1
\> var["g"] = 2
\> var["m"] = 3
\> var["u"] = 4
\> for (test in var)
\> {
\>  print "Index:",test," - Value:",var[test]
\> }
\> }'
Index: u - Value: 4
Index: m - Value: 3
Index: a - Value: 1
Index: g - Value: 2
```

注意，索引值不会按任何特定顺序返回，但它们都能够指向对应的数据元素值。

#### 删除数组变量

awk脚本程序还支持从关联数组中删除某个数组索引，使用 delete 命令就可以，此命令会从数组中删除指定的索引值及相关的数据元素的值。

delete 命令的基本格式如下：

`delete array[index]`

举个例子：
```shell
[root@localhost ~] awk 'BEGIN{
\> var["a"] = 1
\> var["g"] = 2
\> for (test in var)
\> {
\>  print "Index:",test," - Value:",var[test]
\> }
\> delete var["g"]
\> print "---"
\> for (test in var)
\> {
\>  print "Index:",test," - Value:",var[test]
\> }
\> }'
Index: a - Value: 1
Index: g - Value: 2
\---
Index: a - Value: 1
```

需要注意的是，一旦从关联数组中删除了索引值，就没法再用它来提取元素值。

## awk使用分支结构
### if
awk 支持标准的 if-then-else 格式的 if 语句，其基本格式为：

```
if (condition)
  statement1
else if (condition2)
  statement2
else
  statements
```

也可以将它放在一行上，像这样：

`if (condition) statement1；else statement2`

#### 例子：
```shell
[root@localhost ~] cat data4
10
5
13
50
34
[root@localhost ~] awk '{if ($1 > 20) print $1 * 2; else print $1 / 2}' data4
5
2.5
6.5
100
68
```

### switch
## switch...case

```
switch (expression) {
    case value1|regex1 : statements1
    case value2|regex2 : statements2
    case value3|regex3 : statements3
    ...
    [ default: statement ]
}
```

#### 例子
```shell
{
    switch($1){
        case 1:
            print("Monday")
            break
        case 2:
            print("Tuesday")
            break
        case 3:
            print("Wednesday")
            break
        case 4:
            print("Thursday")
            break
        case 5:
            print("Friday")
            break
        case 6:
            print("Saturday")
            break
        case 7:
            print("Sunday")
            break
        default:
            print("What day?")
            break
    }
}
```

## awk使用循环结构

awk 脚本程序中，可以使用 while、do-while、for 这 3 种循环结构，它们各自的基本格式分别如表 3 所示。

### while
`while (条件) {运行代码; `
```shell
[root@localhost ~] cat data5 
130 120 135
160 113 140
145 170 215 
[root@localhost ~] awk '{ 
> total = 0 
> i = 1 
> while (i < 4) 
> { 
>  total += $i 
>  i++ 
> } 
> avg = total / 3 
> print "Average:",avg 
> }' data5 
Average: 128.333 
Average: 137.667 
Average: 176.667 
```
### dowhile
`do { 运行代码； }while(条件)`     
```shell
[root@localhost ~] awk '{ 
> total = 0 
> i = 1 
> do > { 
>  total += $i 
>  i++ 
> } while (total < 150) 
> print total }' data5 
250 
160 
315 
```
### for
`for(变量；条件；计数器) {运行代码;}`  
```shell
[root@localhost ~] awk '{ 
> total = 0 
> for (i = 1; i < 4; i++) 
> { 
>  total += $i 
> } 
> avg = total / 3 
> print "Average:",avg 
> }' data5 
Average: 128.333 
Average: 137.667 
Average: 176.667 
```

从表 3 中可以看出，awk 支持使用的循环结构的用法和 C 语言完全一样，除此之外，awk 还支持使用 break（跳出循环）、continue（终止当前循环）关键字，其用法和 C 语言中也完全相同，这里不再过多赘述，读者可以阅读《[C语言循环结构和选择结构](http://c.biancheng.net/c/32/)》一章系统学习。

### next 
跳出循环

## awk使用函数

### 内建函数

和内建变量类似，awk 也提供了不少内建函数，可进行一些常见的数学、字符串以及时间函数运算，如表 4 所示。

| 数学函数    | 函数原型                            |
| ----------- | ----------------------------------- |
| atan2(x, y) | x/y 的反正切，x 和 y 以弧度为单位。 |
| cos(x)      | x 的余弦，x 以弧度为单位。          |
| exp(x)      | x 的指数函数。                      |
| int(x)      | x 的整数部分，取靠近零一侧的值。    |
| log(x)      | x 的自然对数。                      |
| srand(x)    | 为计算随机数指定一个种子值。        |
| rand()      | 比 0 大比 1 小的随机浮点值。        |
| sin(x)      | x 的正弦，x 以弧度为单位。          |
| sqrt(x)     | x 的平方根。                        |

| 位运算函数         | 函数原型                         |
| ------------------ | -------------------------------- |
| and(v1, v2)        | 执行值 v1 和 v2 的按位与运算。   |
| compl(val)         | 执行 val 的补运算。              |
| lshift(val, count) | 将值 val 左移 count 位。         |
| or(v1, v2)         | 执行值 v1 和 v2 的按位或运算。   |
| rshift(val, count) | 将值 val 右移 count 位。         |
| xor(v1, v2)        | 执行值 v1 和 v2 的按位异或运算。 |

| 字符串函数                 | 函数原型                                                                                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| asort(s [,d])              | 将数组 s 按数据元素值排序。索引值会被替换成表示新的排序顺序的连续数字。另外，如果指定了 d，则排序后的数组会存储在数组 d 中。                                                          |
| asorti(s [,d])             | 将数组 s 按索引值排序。生成的数组会将索引值作为数据元素值，用连续数字索引来表明排序顺序。另外如果指定了 d，排序后的数组会存储在数组 d 中。                                            |
| gensub(r, s, h [, t])      | 查找变量 $0 或目标字符串 t（如果提供了的话）来匹配正则表达式 r。如果 h 是一个以 g 或 G 开头的字符串，就用 s 替换掉匹配的文本。如果 h 是一个数字，它表示要替换掉第 h 处 r 匹配的地方。 |
| gsub(r, s [,t])            | 查找变量 $0 或目标字符串 t（如果提供了的话）来匹配正则表达式 r。如果找到了，就全部替换成字符串 s。                                                                                    |
| index(s, t)                | 返回字符串 t 在字符串 s 中的索引值，如果没找到的话返回 0。                                                                                                                            |
| length([s])                | 返回字符串 s 的长度；如果没有指定的话，返回 $0 的长度。                                                                                                                               |
| match(s, r [,a])           | 返回字符串 s 中正则表达式 r 出现位置的索引。如果指定了数组 a，它会存储 s 中匹配正则表达式的那部分。                                                                                   |
| split(s, a [,r])           | 将 s 用 FS 字符或正则表达式 r（如果指定了的话）分开放到数组 a 中，并返回字段的总数。                                                                                                  |
| sprintf(format, variables) | 用提供的 format 和 variables 返回一个类似于 printf 输出的字符串。                                                                                                                     |
| sub(r, s [,t])             | 在变量 $0 或目标字符串 t 中查找正则表达式 r 的匹配。如果找到了，就用字符串 s 替换掉第一处匹配。                                                                                       |
| substr(s, i [,n])          | 返回 s 中从索引值 i 开始的 n 个字符组成的子字符串。如果未提供 n，则返回 s 剩下的部分。                                                                                                |
| tolower(s)                 | 将 s 中的所有字符转换成小写。                                                                                                                                                         |
| toupper(s)                 | 将 s 中的所有字符转换成大写。                                                                                                                                                         |

| 时间函数                      | 函数原型                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| mktime(datespec)              | 将一个按 YYYY MM DD HH MM SS [DST] 格式指定的日期转换成时间戳值。                                 |
| strftime(format [,timestamp]) | 将当前时间的时间戳或 timestamp（如果提供了的话）转化格式化日期（采用 shell 函数 date() 的格式）。 |
| systime()                     | 返回当前时间的时间戳。                                                                            |

时间戳指的是格林威治时间，即从 1970年1月1日8时1起到现在的总秒数。

#### 自定义函数

除了awk 中的内建函数，还可以在 awk 脚本程序中自定义函数，创建自定义函数的基本格式为：
```
function 函数名(参数1，参数2，...)
{
  运行代码；
}
```

注意，自定义函数的函数名必须能够唯一标识此函数，换句话说，在同一个 awk 脚本程序中，多个函数的函数名不能相同。同时，函数的参数可以有多个（0 个、1 个或多个）。

例如：
```
function printthird()
{
  print $3
}
```

此函数会打印记录中的第三个数据字段。

函数还能用 return 语句返回值，例如：
```
function myrand(limit) {
  return int(limit * rand())
}
```

需要注意的是，在定义函数时，它必须出现在所有代码块之前（包括 BEGIN 和 END代码块）。

#### 创建函数库

awk 提供了一种途径来将多个函数放到一个库文件中，这样用户就能在所有的 awk 脚本程序中使用了。为了方便大家理解，下面给大家举个实例。

首先，我们需要创建一个存储所有 awk 函数的文件：
```shell
[root@localhost ~] cat funclib
function myprint() {
  printf "%-16s - %s\n", $1, $4
}
function myrand(limit)
{
  return int(limit * rand())
}
function printthird()
{
  print $3
}
```

要想让 awk 成功读取 funclib 函数库文件，就需要使用 -f 选项，但此选项无法和 awk 脚本程序同时放到命令行中一起使用。因此，要使用库函数文件，只能再创建一个脚本程序文件，例如：
```shell
[root@localhost ~] cat script4
BEGIN{ FS="\n"; RS=""}
{
   myprint()
}
[root@localhost ~] awk -f funclib -f script4 data2
Riley Mullen   - (312)555-1234
Frank Williams  - (317)555-9876
Haley Snell   - (313)555-4938
```