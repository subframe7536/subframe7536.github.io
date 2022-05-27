# 文件
## IO操作
### 开关文件流
#### fopen($fileName,mode)
读取此文件并写到输出流的PHP代码
#### fclose($fileName)
关闭读取文件

| 模式 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| r    | 打开文件为只读。文件指针在文件的开头开始。                   |
| w    | 打开文件为只写。删除文件的内容或创建一个新的文件，如果它不存在。文件指针在文件的开头开始。 |
| a    | 打开文件为只写。文件中的现有数据会被保留。文件指针在文件结尾开始。创建新的文件，如果文件不存在。 |
| x    | 创建新文件为只写。返回 FALSE 和错误，如果文件已存在。        |
| r+   | 打开文件为读/写、文件指针在文件开头开始。                    |
| w+   | 打开文件为读/写。删除文件内容或创建新文件，如果它不存在。文件指针在文件开头开始。 |
| a+   | 打开文件为读/写。文件中已有的数据会被保留。文件指针在文件结尾开始。创建新文件，如果它不存在。 |
| x+   | 创建新文件为读/写。返回 FALSE 和错误，如果文件已存在。       |
### 读取文件
#### fread($fileStream,byteLen)
读取文件中的指定长度
#### fgetc($fileStream)
读取当前文件指针后一个的字符，并将指针后移
#### fgets($fileStream,byteLen)
读取当前指针位置到所在行末尾的字符，并将指针移至下一行
#### feof($fileStream)
判断指针是否到末尾
### 写入文件
#### fwrite(`$fileStream`,`$data`,[len])
覆盖所有内容，写入文件，可以指定写入字符串的长度
#### fputs(`$fileStream`,`$data`,[len])
从文件末尾写入，不覆盖，可以指定写入字符串的长度
### 文件信息
#### filesize()
获取文件大小
#### filetype()
获取文件类型
#### is_dir()
判断是否为目录
## 文件上传
### html标签
`<form>` 标签的 enctype 属性规定了在提交表单时要使用哪种内容类型。在表单需要二进制数据时，比如文件内容，请使用 "multipart/form-data"
### 获取文件
`$_FILES["file"]['type']`
超全局变量获取所有上传的文件
#### type
- `$_FILES["file"]["name"]` - 被上传文件的名称
- `$_FILES["file"]["type"]` - 被上传文件的类型
- `$_FILES["file"]["size"]` - 被上传文件的大小，以字节计
- `$_FILES["file"]["tmp_name"]` - 存储在服务器的文件的临时副本的名称
- `$_FILES["file"]["error"]` - 由文件上传导致的错误代码
## 进程锁
`flock($file,lockMode[,block])`
### 锁定类型
- 要取得共享锁定（读取的程序），将lock设为 LOCK_SH（PHP 4.0.1 以前的版本设置为 1）。
- 要取得独占锁定（写入的程序），将lock设为 LOCK_EX（PHP 4.0.1 以前的版本中设置为 2）。
- 要释放锁定（无论共享或独占），将lock设为 LOCK_UN（PHP 4.0.1 以前的版本中设置为 3）。
### block
是否阻挡其他进程
- 为1或true时阻挡
## 所有函数
| 函数                                                                                           | 描述                                                                                     |
|:---------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------- |
| [basename()](https://www.w3school.com.cn/php/func_filesystem_basename.asp)                     | 返回路径中的文件名部分。                                                                 |
| [chgrp()](https://www.w3school.com.cn/php/func_filesystem_chgrp.asp)                           | 改变文件组。                                                                             |
| [chmod()](https://www.w3school.com.cn/php/func_filesystem_chmod.asp)                           | 改变文件模式。                                                                           |
| [chown()](https://www.w3school.com.cn/php/func_filesystem_chown.asp)                           | 改变文件所有者。                                                                         |
| [clearstatcache()](https://www.w3school.com.cn/php/func_filesystem_clearstatcache.asp)         | 清除文件状态缓存。                                                                       |
| [copy()](https://www.w3school.com.cn/php/func_filesystem_copy.asp)                             | 复制文件。                                                                               |
| delete()                                                                                       | 参见 [unlink()](https://www.w3school.com.cn/php/func_filesystem_unlink.asp) 或 unset()。 |
| [dirname()](https://www.w3school.com.cn/php/func_filesystem_dirname.asp)                       | 返回路径中的目录名称部分。                                                               |
| [disk_free_space()](https://www.w3school.com.cn/php/func_filesystem_disk_free_space.asp)       | 返回目录的可用空间。                                                                     |
| [disk_total_space()](https://www.w3school.com.cn/php/func_filesystem_disk_total_space.asp)     | 返回一个目录的磁盘总容量。                                                               |
| [diskfreespace()](https://www.w3school.com.cn/php/func_filesystem_diskfreespace.asp)           | disk_free_space() 的别名。                                                               |
| [fclose()](https://www.w3school.com.cn/php/func_filesystem_fclose.asp)                         | 关闭打开的文件。                                                                         |
| [feof()](https://www.w3school.com.cn/php/func_filesystem_feof.asp)                             | 测试文件指针是否到了文件结束的位置。                                                     |
| [fflush()](https://www.w3school.com.cn/php/func_filesystem_fflush.asp)                         | 向打开的文件输出缓冲内容。                                                               |
| [fgetc()](https://www.w3school.com.cn/php/func_filesystem_fgetc.asp)                           | 从打开的文件中返回字符。                                                                 |
| [fgetcsv()](https://www.w3school.com.cn/php/func_filesystem_fgetcsv.asp)                       | 从打开的文件中解析一行，校验 CSV 字段。                                                  |
| [fgets()](https://www.w3school.com.cn/php/func_filesystem_fgets.asp)                           | 从打开的文件中返回一行。                                                                 |
| [fgetss()](https://www.w3school.com.cn/php/func_filesystem_fgetss.asp)                         | 从打开的文件中读取一行并过滤掉 HTML 和 PHP 标记。                                        |
| [file()](https://www.w3school.com.cn/php/func_filesystem_file.asp)                             | 把文件读入一个数组中。                                                                   |
| [**file_exists()**](https://www.w3school.com.cn/php/func_filesystem_file_exists.asp)           | 检查文件或目录是否存在。                                                                 |
| [file_get_contents()](https://www.w3school.com.cn/php/func_filesystem_file_get_contents.asp)   | 将文件读入字符串。                                                                       |
| [file_put_contents()](https://www.w3school.com.cn/php/func_filesystem_file_put_contents.asp)   | 将字符串写入文件。                                                                       |
| [fileatime()](https://www.w3school.com.cn/php/func_filesystem_fileatime.asp)                   | 返回文件的上次访问时间。                                                                 |
| [filectime()](https://www.w3school.com.cn/php/func_filesystem_filectime.asp)                   | 返回文件的上次改变时间。                                                                 |
| [filegroup()](https://www.w3school.com.cn/php/func_filesystem_filegroup.asp)                   | 返回文件的组 ID。                                                                        |
| [fileinode()](https://www.w3school.com.cn/php/func_filesystem_fileinode.asp)                   | 返回文件的 inode 编号。                                                                  |
| [filemtime()](https://www.w3school.com.cn/php/func_filesystem_filemtime.asp)                   | 返回文件的上次修改时间。                                                                 |
| [fileowner()](https://www.w3school.com.cn/php/func_filesystem_fileowner.asp)                   | 文件的 user ID （所有者）。                                                              |
| [fileperms()](https://www.w3school.com.cn/php/func_filesystem_fileperms.asp)                   | 返回文件的权限。                                                                         |
| [**filesize()**](https://www.w3school.com.cn/php/func_filesystem_filesize.asp)                 | 返回文件大小。                                                                           |
| [**filetype()**](https://www.w3school.com.cn/php/func_filesystem_filetype.asp)                 | 返回文件类型。                                                                           |
| [flock()](https://www.w3school.com.cn/php/func_filesystem_flock.asp)                           | 锁定或释放文件。                                                                         |
| [fnmatch()](https://www.w3school.com.cn/php/func_filesystem_fnmatch.asp)                       | 根据指定的模式来匹配文件名或字符串。                                                     |
| [fopen()](https://www.w3school.com.cn/php/func_filesystem_fopen.asp)                           | 打开一个文件或 URL。                                                                     |
| [fpassthru()](https://www.w3school.com.cn/php/func_filesystem_fpassthru.asp)                   | 从打开的文件中读数据，直到 EOF，并向输出缓冲写结果。                                     |
| [fputcsv()](https://www.w3school.com.cn/php/func_filesystem_fputcsv.asp)                       | 将行格式化为 CSV 并写入一个打开的文件中。                                                |
| [fputs()](https://www.w3school.com.cn/php/func_filesystem_fputs.asp)                           | fwrite() 的别名。                                                                        |
| [fread()](https://www.w3school.com.cn/php/func_filesystem_fread.asp)                           | 读取打开的文件。                                                                         |
| [fscanf()](https://www.w3school.com.cn/php/func_filesystem_fscanf.asp)                         | 根据指定的格式对输入进行解析。                                                           |
| [fseek()](https://www.w3school.com.cn/php/func_filesystem_fseek.asp)                           | 在打开的文件中定位。                                                                     |
| [fstat()](https://www.w3school.com.cn/php/func_filesystem_fstat.asp)                           | 返回关于一个打开的文件的信息。                                                           |
| [ftell()](https://www.w3school.com.cn/php/func_filesystem_ftell.asp)                           | 返回文件指针的读/写位置                                                                  |
| [ftruncate()](https://www.w3school.com.cn/php/func_filesystem_ftruncate.asp)                   | 将文件截断到指定的长度。                                                                 |
| [fwrite()](https://www.w3school.com.cn/php/func_filesystem_fwrite.asp)                         | 写入文件。                                                                               |
| [glob()](https://www.w3school.com.cn/php/func_filesystem_glob.asp)                             | 返回一个包含匹配指定模式的文件名/目录的数组。                                            |
| [**is_dir()**](https://www.w3school.com.cn/php/func_filesystem_is_dir.asp)                     | 判断指定的文件名是否是一个目录。                                                         |
| [is_executable()](https://www.w3school.com.cn/php/func_filesystem_is_executable.asp)           | 判断文件是否可执行。                                                                     |
| [is_file()](https://www.w3school.com.cn/php/func_filesystem_is_file.asp)                       | 判断指定文件是否为常规的文件。                                                           |
| [is_link()](https://www.w3school.com.cn/php/func_filesystem_is_link.asp)                       | 判断指定的文件是否是连接。                                                               |
| [is_readable()](https://www.w3school.com.cn/php/func_filesystem_is_readable.asp)               | 判断文件是否可读。                                                                       |
| [is_uploaded_file()](https://www.w3school.com.cn/php/func_filesystem_is_uploaded_file.asp)     | 判断文件是否是通过 HTTP POST 上传的。                                                    |
| [is_writable()](https://www.w3school.com.cn/php/func_filesystem_is_writable.asp)               | 判断文件是否可写。                                                                       |
| [is_writeable()](https://www.w3school.com.cn/php/func_filesystem_is_writeable.asp)             | is_writable() 的别名。                                                                   |
| [link()](https://www.w3school.com.cn/php/func_filesystem_link.asp)                             | 创建一个硬连接。                                                                         |
| [linkinfo()](https://www.w3school.com.cn/php/func_filesystem_linkinfo.asp)                     | 返回有关一个硬连接的信息。                                                               |
| [lstat()](https://www.w3school.com.cn/php/func_filesystem_lstat.asp)                           | 返回关于文件或符号连接的信息。                                                           |
| [**mkdir()**](https://www.w3school.com.cn/php/func_filesystem_mkdir.asp)                       | 创建目录。                                                                               |
| [move_uploaded_file()](https://www.w3school.com.cn/php/func_filesystem_move_uploaded_file.asp) | 将上传的文件移动到新位置。                                                               |
| [parse_ini_file()](https://www.w3school.com.cn/php/func_filesystem_parse_ini_file.asp)         | 解析一个配置文件。                                                                       |
| [pathinfo()](https://www.w3school.com.cn/php/func_filesystem_pathinfo.asp)                     | 返回关于文件路径的信息。                                                                 |
| [pclose()](https://www.w3school.com.cn/php/func_filesystem_pclose.asp)                         | 关闭有 popen() 打开的进程。                                                              |
| [popen()](https://www.w3school.com.cn/php/func_filesystem_popen.asp)                           | 打开一个进程。                                                                           |
| [readfile()](https://www.w3school.com.cn/php/func_filesystem_readfile.asp)                     | 读取一个文件，并输出到输出缓冲。                                                         |
| [readlink()](https://www.w3school.com.cn/php/func_filesystem_readlink.asp)                     | 返回符号连接的目标。                                                                     |
| [**realpath()**](https://www.w3school.com.cn/php/func_filesystem_realpath.asp)                 | 返回绝对路径名。                                                                         |
| [rename()](https://www.w3school.com.cn/php/func_filesystem_rename.asp)                         | 重名名文件或目录。                                                                       |
| [rewind()](https://www.w3school.com.cn/php/func_filesystem_rewind.asp)                         | 倒回文件指针的位置。                                                                     |
| [rmdir()](https://www.w3school.com.cn/php/func_filesystem_rmdir.asp)                           | 删除空的目录。                                                                           |
| [set_file_buffer()](https://www.w3school.com.cn/php/func_filesystem_set_file_buffer.asp)       | 设置已打开文件的缓冲大小。                                                               |
| [stat()](https://www.w3school.com.cn/php/func_filesystem_stat.asp)                             | 返回关于文件的信息。                                                                     |
| [symlink()](https://www.w3school.com.cn/php/func_filesystem_symlink.asp)                       | 创建符号连接。                                                                           |
| [tempnam()](https://www.w3school.com.cn/php/func_filesystem_tempnam.asp)                       | 创建唯一的临时文件。                                                                     |
| [tmpfile()](https://www.w3school.com.cn/php/func_filesystem_tmpfile.asp)                       | 建立临时文件。                                                                           |
| [touch()](https://www.w3school.com.cn/php/func_filesystem_touch.asp)                           | 设置文件的访问和修改时间。                                                               |
| [umask()](https://www.w3school.com.cn/php/func_filesystem_umask.asp)                           | 改变文件的文件权限。                                                                     |
| [unlink()](https://www.w3school.com.cn/php/func_filesystem_unlink.asp)                         | 删除文件。                                                                               |