## 安装
### 1. VS C++ Build Tools
选择 Desktop development with C++
#### 右侧选择
- MSVC v143 - ……
- Windows 10 SDK (10.0.19041.0)
### 2. rust编译器
https://www.rust-lang.org/tools/install
下载完在`~/.cargo`和`~/.rustup`
#### 修改环境变量
如果要修改路径，则需要在环境变量中分别添加`CARGO_HOME`和`RUSTUP_HOME`为所在的路径
`PATH`中的路径也需要修改
### 3. 换源
在`CARGO_HOME`中新建config文件，换成交大的源
```txt
[source.crates-io]  
replace-with = 'sjtu'
  
[source.sjtu]  
registry = "https://mirrors.sjtug.sjtu.edu.cn/git/crates.io-index/"
```
### 4. 确认
```shell
rustc -V
```
## 学习路线
- [ ] 语法
- [ ] 错误处理
- [ ] wasm
- [ ] warp
- [ ] tauri