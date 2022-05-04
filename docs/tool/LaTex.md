# LaTex
## 排版
### 行内
`$...$`
### 居中
`$$...$$`
## 公式
### 基本
`+ - * /`
### 成组
`{ab}`
$a_{10}$
### 需要转义
`# $ % & ~ _ ^ \ { }`
### 常用
#### 分数
`\(d)frac{分子}{分母}`
$\dfrac{1}{2}$
- dfrac 分数超出行的高度
#### 上标
`{}^{}`
$2^2$
#### 下标
`{}_{}`
$n_0$
#### 根号
`\sqrt[次根]{}`
$\sqrt[3]{231^2}$
#### 正负号
`\pm`
$\pm$
#### 乘号
`\times`
$\times$
#### 除号
`\div`
$\div$
#### 中点
`\cdot`
$\cdot$
#### 并
`\cap`
$\cap$
#### 交
`\cup`
$\cup$
#### 大于等于
`\geq`
$\geq$
#### 小于等于
`\leq`
$\leq$
#### 不等于
`\neq`
$\neq$
#### 空格
`\quad 123`
$\quad 123$
##### 1/3空格
`1\ 123`
$1\ 123$
#### 属于
`a\in b`
$a\in b$
##### 不属于
`a\notin b`
$a\notin b$
#### 对数
`\log_{a}x`
$\log_{a}x$
##### ln
`\ln x`
$\ln x$
##### lg
`\lg x`
$\lg x$
#### 相似
`\sim`
$\sim$
#### 约等于
`\approx`
$\approx$
#### 同或
`\oplus`
$\oplus$
#### 异或
`\oplus`
$\oplus$
#### 左箭头
`\leftarrow`
$\leftarrow$
`\nleftarrow`
$\nleftarrow$
`\Leftarrow`
$\Leftarrow$
#### 右箭头
`\rightarrow`
$\rightarrow$
`\nrightarrow`
$\nrightarrow$
`\Rightarrow`
$\Rightarrow$
#### 双箭头
$\Leftrightarrow$
#### 上划线
`\overline{111}`
$\overline{111}$
#### 下划线
`\underline{111}`
$\underline{111}$
#### 删除线
`\enclose{horizontalstrike}{x+y}`
$\enclose{horizontalstrike}{x+y}$
#### 省略号
`\dots`
$\dots$
### 其他
#### 求和
`\sum_start^end {}`
$\sum_{i=1}^3 {a_i}$
#### 求积
`\prod`
$\prod_{i=1}^3 {a_i}$
#### 同余
`\equiv`
$\equiv$
#### 极限
`\displaystyle\lim_{x \to 0^+}`
$\displaystyle\lim_{x \to 0^+}$
#### 求积分
`\int^{x}_{1}`
$\int^{x}_{1}$
#### 存在
`{\forall}`
$\forall$
#### 任取
`\exists`
$\exists$
#### 框
`\boxed`
$\boxed{123}$
#### 分支公式
```latex
$$y=\begin{cases}
-x,x\leq 0\\
x,x>0
\end{cases}$$
```
$$y=\begin{cases}
-x,x\leq 0\\
x, x>0
\end{cases}$$
##### 对齐
&占位
```latex
$$\begin{split}
\begin{align}
1&=4-1\times3\\
&=(26-2\times11)-[11-2\times(26-2\times11)]\\
&=-7\times11+3\times26
\end{align}
\end{split}$$

```
$$\begin{split}
\begin{align}
1&=4-1\times3\\
&=(26-2\times11)-[11-2\times(26-2\times11)]\\
&=-7\times11+3\times26
\end{align}
\end{split}$$
### 特殊字符
- $\infty$
`\infty`
- $\alpha$
`\alpha`
- $\beta$
`\beta`
- $\theta$
`\theta`
- $\gamma$
`\gamma`
- $\Delta$
`\Delta`
- $\lambda$
`\lambda`
- $\mu$
`\mu`
- $\pi$
`\pi`
- $\varphi$
`\varphi`
- $\omega$
`\omega`
- $\sigma$
`\sigma`
- $\Sigma$
`\Sigma`
- $\varepsilon$
`\varepsilon`
- $\psi$
`\psi`
- $\xi$
`\xi`
- $\eta$
`\eta`
- $\mu$
`\mu`
- $\Omega$
`\Omega`
- $\partial$
`\partial`
