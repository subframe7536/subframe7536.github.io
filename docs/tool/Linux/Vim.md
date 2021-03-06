# Vim
> 参考：https://www.cnblogs.com/annatest/p/13223153.html
## 工作模式
- 命令模式
- 末行模式
  - 定位、翻页、复制、粘贴、删除……
- 编辑模式
  - 正常的编辑文本

## 基本操作
### 保存与退出
| 命令 | 英文         | 功能                           |
| ---- | ------------ | ------------------------------ |
| w    | write        | 保存                           |
| q    | quit         | 退出，如果没有保存，不允许退出 |
| q!   | quit         | 强行退出，不保存退出           |
| wq   | write & quit | 保存并退出                     |
| x    |              | 保存并退出                     |
### 移动
命令模式下快速移动光标
#### 上下左右

| 命令 | 功能 |
| ---- | ---- |
| h    | 向左 |
| j    | 向下 |
| k    | 向上 |
| l    | 向右 |

#### 行内移动

| 命令 | 英文 | 功能                           |
| ---- | ---- | ------------------------------ |
| w    | word | 向后移动一个单词               |
| b    | back | 向前移动一个单词               |
| 0    |      | 行首                           |
| ^    |      | 行首，第一个不是空白字符的位置 |
| $    |      | 行尾                           |

#### 行数移动

| 命令    | 英文 | 功能                 |
| ------- | ---- | -------------------- |
| gg      | go   | 文件顶部             |
| G       | go   | 文件末尾             |
| 数字 gg | go   | 移动到 数字 对应行数 |
| 数字 G  | go   | 移动到 数字 对应行数 |
| : 数字  |      | 移动到 数字 对应行数 |

#### 屏幕移动

| 命令     | 英文    | 功能     |
| -------- | ------- | -------- |
| Ctrl + b | back    | 向上翻页 |
| Ctrl + f | forward | 向下翻页 |
| H        | Head    | 屏幕顶部 |
| M        | Middle  | 屏幕中间 |
| L        | Low     | 屏幕底部 |

#### 段落移动

- vim 中使用 空行 来区分段落

| 命令 | 功能   |
| ---- | ------ |
| {    | 上一段 |
| }    | 下一段 |

#### 括号跳转

| 命令 | 功能           |
| ---- | -------------- |
| %    | 括号匹配及切换 |

#### 标记
- **标记名称** 可以是 `a~z` 或者 `A~Z` 之间的任意 **一个** 字母
- 添加了标记的 **行如果被删除**，**标记同时被删除**
- 如果 **在其他行添加了相同名称的标记**，**之前添加的标记也会被替换掉**

| 命令   | 英文 | 功能                                             |
| ------ | ---- | ------------------------------------------------ |
| mx     | mark | 添加标记 x，x 是 a~z 或者 A~Z 之间的任意一个字母 |
| 'x     |      | 直接定位到标记 x 所在位置                        |
| :marks |      | 查看所有标记                                     |

### 文本操作
选中、复制、删除、撤销、替换等操作
#### 选中

| 命令 | 模式       | 功能                               |
| ---- | ---------- | ---------------------------------- |
| v    | 可视模式   | 从光标位置开始按照正常模式选择文本 |
| V    | 可视行模式 | 选中光标经过的完整行               |

#### 撤销/恢复

| 命令     | 英文 | 功能           |
| -------- | ---- | -------------- |
| u        | undo | 撤销上次命令   |
| CTRL + r | redo | 恢复撤销的命令 |

#### 复制、粘贴

| 命令         | 英文  | 功能     |
| ------------ | ----- | -------- |
| y (移动命令) | copy  | 复制     |
| yy           | copy  | 复制一行 |
| nyy          | copy  | 复制n行  |
| p            | paste | 粘贴     |

#### 删除文本

| 命令         | 英文   | 功能                           |
| ------------ | ------ | ------------------------------ |
| x            | cut    | 删除光标所在字符，或者选中文字 |
| d (移动命令) | delete | 删除移动命令对应的内容         |
| dd           | delete | 删除光标所在行                 |
| ndd          | delete | 删除光标所在行后n行            |
| D            | delete | 删除至行尾                     |

- 删除命令可以和 **移动命令** 连用，以下是常见的组合命令：
```shell
$ dw        # 从光标位置删除到单词末尾
$ d0        # 从光标位置删除到一行的起始位置
$ d}        # 从光标位置删除到段落结尾
$ ndd       # 从光标位置向下连续删除 n 行
$ d代码行G   # 从光标所在行 删除到 指定代码行 之间的所有代码
$ d'a       # 从光标所在行 删除到 标记a 之间的所有代码
```
#### 替换

| 命令 | 英文    | 功能                   | 工作模式 |
| ---- | ------- | ---------------------- | -------- |
| r    | replace | 替换当前字符           | 命令模式 |
| R    | replace | 替换当前行光标后的字符 | 替换模式 |

#### 缩排和重复执行

| 命令 | 功能               |
| ---- | ------------------ |
| >>   | 所在行向右增加缩进 |
| <<   | 所在行向左减少缩进 |

- 在 **可视模式** 下，缩排命令只需要使用 **一个** `>` 或者 `<`
#### 重复执行

| 命令 | 功能         |
| ---- | ------------ |
| .    | 重复上次命令 |

### 查找替换
#### 查找
##### 常规查找

| 命令 | 功能     |
| ---- | -------- |
| /str | 查找 str |

查找到指定内容之后，使用 `Next` 查找下一个出现的位置：
- `n`: 查找下一个
- `N`: 查找上一个
##### 单词快速匹配

| 命令 | 功能                     |
| ---- | ------------------------ |
| *    | 向后查找当前光标所在单词 |
| #    | 向前查找当前光标所在单词 |

#### 查找并替换
末行模式执行
- 命令格式：
```
:%s///g
```
##### 全局替换
- **一次性**替换文件中的 **所有出现的旧文本**
- 命令格式如下：
```
:%s/旧文本/新文本/g
```
##### 可视区域替换
- **先选中** 要替换文字的 **范围**
- 命令格式如下：
```
:s/旧文本/新文本/g
```
##### 确认替换
- 如果把末尾的 `g` 改成 `gc` 在替换的时候，会有提示！**推荐使用！**
```
:%s/旧文本/新文本/gc
```
1. `y` - `yes` 替换
2. `n` - `no` 不替换
3. `a` - `all` 替换所有
4. `q` - `quit` 退出替换
5. `l` - `last` 最后一个，并把光标移动到行首
6. `^E` 向下滚屏
7. `^Y` 向上滚屏
### 插入模式

| 命令 | 英文   | 功能                   | 常用   |
| ---- | ------ | ---------------------- | ------ |
| i    | insert | 在当前字符前插入文本   | 常用   |
| I    | insert | 在行首插入文本         | 较常用 |
| a    | append | 在当前字符后添加文本   |        |
| A    | append | 在行末添加文本         | 较常用 |
| o    |        | 在当前行后面插入一空行 | 常用   |
| O    |        | 在当前行前面插入一空行 | 常用   |

## 分屏
### 文件操作

| 命令      | 英文  | 功能                                           |
| --------- | ----- | ---------------------------------------------- |
| :e .      | edit  | 会打开内置的文件浏览器，浏览要当前目录下的文件 |
| :n 文件名 | new   | 新建文件                                       |
| :w 文件名 | write | 另存为，但是仍然编辑当前文件，并不会切换文件   |

### 分屏操作

| 命令          | 英文           | 功能         |
| ------------- | -------------- | ------------ |
| :sp [文件名]  | split          | 横向增加分屏 |
| :vsp [文件名] | vertical split | 纵向增加分屏 |

#### 1) 切换分屏窗口
分屏窗口都是前置 CTRL + W 这个快捷键的，w 对应的英文单词是 window

| 命令 | 英文    | 功能                                        |
| ---- | ------- | ------------------------------------------- |
| w    | window  | 切换到下一个窗口                            |
| r    | reverse | 互换窗口                                    |
| c    | close   | 关闭当前窗口，但是不能关闭最后一个窗口      |
| q    | quit    | 退出当前窗口，如果是最后一个窗口，则关闭 vi |
| o    | other   | 关闭其他窗口                                |

#### 2) 调整窗口大小

| 命令 | 功能         |
| ---- | ------------ |
| +    | 增加窗口高度 |
| -    | 减少窗口高度 |
| >    | 增加窗口宽度 |
| <    | 减少窗口宽度 |
| =    | 等分窗口大小 |

- 调整窗口宽高的命令可以和数字连用，例如：`5 CTRL + W +` 连续 5 次增加高度
## 自动补全
补全弹出菜单（popupmenu-completion）
随着弹出菜单的显示，将会自动应用第一个匹配项。
使用以下快捷键，可以在弹出菜单中移动和选择匹配项：
- <kbd>Ctrl+N</kbd>和<kbd>Ctrl+P</kbd>上下移动时，输入的文本也会随之变化。
- <kbd>Up</kbd>和<kbd>Down</kbd>上下移动时，输入的文字并不会变化。
- <kbd>PageUp</kbd>和<kbd>PageDown</kbd>键，可以在菜单中翻页。
- <kbd>Ctrl+Y</kbd>或<kbd>Enter</kbd>回车键，将使用当前匹配项完成补全。
- <kbd>Ctrl+E</kbd>键，将关闭菜单并退回到文字输入的原始状态。
- <kbd>Esc</kbd>键，将关闭弹出菜单，但会保留之前应用的匹配项。
### ^x mode
在插入模式下，输入<kbd>Ctrl+X</kbd>将进入^X模式（插入和替换模式的一个子模式）。屏幕底部将显示以下提示信息：
```
-- ^X mode (^]^D^E^F^I^K^L^N^O^Ps^U^V^Y)
```
您可以选择以下自动补全方式：
- <kbd>Ctrl+]</kbd> ，标签(tags)补全
- <kbd>Ctrl+D</kbd> ，定义补全
- <kbd>Ctrl+E</kbd> ，向上滚动文本
- <kbd>Ctrl+F</kbd> ，文件名补全
- <kbd>Ctrl+I</kbd> ，**当前文件以及包含进来的文件补全**
- <kbd>Ctrl+K</kbd> ，字典补全
- <kbd>Ctrl+L</kbd> ，整行补全
- <kbd>Ctrl+N</kbd> ，当前文件内的关键字补全，向下选择匹配项
- <kbd>Ctrl+O</kbd> ，全能补全
- <kbd>Ctrl+P</kbd> ，当前文件内的关键字补全，向上选择匹配项
- <kbd>Ctrl+S</kbd> ，拼写建议补全
- <kbd>Ctrl+U</kbd> ，用户自定义补全
- <kbd>Ctrl+V</kbd> ，Vim命令补全
- <kbd>Ctrl+Y</kbd> ，向下滚动文本
## 不退出vim执行命令
```shell
:!命令
```
### 将输出内容插入当前文本中
```shell
:r !命令
```
### 指定文本处理范围
规定起始行号和结束行号，将文本作为输入进行处理
```shell
:起始行号,结束行号 !命令
```
### 历史命令切换
```shell
:!  上下键进行切换 
```
### 临时切换到shell
切换到shell，exit返回原来的vim中。
```shell
:shell
```