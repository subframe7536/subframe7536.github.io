# python
## 安装
### pip
将sdk根目录和其中的scripts目录加入系统环境变量
#### 修改源
```shell
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```
#### 报错
`THESE PACKAGES DO NOT MATCH THE HASHES FROM THE REQUIREMENTS FILE.`
网速原因&超时
##### 解决方法
```python
pip install --upgrade --default-timeout=100000 包名
```