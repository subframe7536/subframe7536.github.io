# CRC循环冗余校验码
> 给定**信息10101...**和**CRC多项式**计算原本信息

例子：
信息 11001001 / 多项式 $x^3+1$
1. $x^3+1$ => 1001 (除数)
2. 向信息补最高阶个0，这里的最高位为3，补3个0 => 11001001000
3. 补完后的信息 除以 1中的除数(异或运算) => 11001001000/1001 = 011(补全3位)
4. 原本的信息+余数 => 11001001011
5. 计算出的信息**不能**整除 1中的除数 则**传输出错**