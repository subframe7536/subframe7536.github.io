# math
## 生成随机数
`rand($min,$max)`
`mt_rand($min,$max)`
### 随机播种
```php
$seed = time();                   // 使用时间作为种子源
mt_srand($seed);                  // 播下随机数发生器种子
echo rand();                      // 根据种子生成 0~RAND_MAX 之间的随机数，如果 $seed 值固定，则生成的随机数也不变
echo rand(1000000, 9999999);      // 根据种子生成 1000000~9999999 之间的随机数，如果 $seed 值固定，则生成的随机数也不变
```
## 所有
 | 函数                                                                           | 描述                                     |
 |:------------------------------------------------------------------------------ |:---------------------------------------- |
 | [**abs()**](https://www.w3school.com.cn/php/func_math_abs.asp)                 | 绝对值。                                 |
 | [acos()](https://www.w3school.com.cn/php/func_math_acos.asp)                   | 反余弦。                                 |
 | [acosh()](https://www.w3school.com.cn/php/func_math_acosh.asp)                 | 反双曲余弦。                             |
 | [asin()](https://www.w3school.com.cn/php/func_math_asin.asp)                   | 反正弦。                                 |
 | [asinh()](https://www.w3school.com.cn/php/func_math_asinh.asp)                 | 反双曲正弦。                             |
 | [atan()](https://www.w3school.com.cn/php/func_math_atan.asp)                   | 反正切。                                 |
 | [atan2()](https://www.w3school.com.cn/php/func_math_atan.asp)                  | 两个参数的反正切。                       |
 | [atanh()](https://www.w3school.com.cn/php/func_math_atanh.asp)                 | 反双曲正切。                             |
 | [base_convert()](https://www.w3school.com.cn/php/func_math_base_convert.asp)   | 在任意进制之间转换数字。                 |
 | [**bindec()**](https://www.w3school.com.cn/php/func_math_bindec.asp)           | 把二进制转换为十进制。                   |
 | [**ceil()**](https://www.w3school.com.cn/php/func_math_ceil.asp)               | 向上舍入为最接近的整数。                 |
 | [cos()](https://www.w3school.com.cn/php/func_math_cos.asp)                     | 余弦。                                   |
 | [cosh()](https://www.w3school.com.cn/php/func_math_cosh.asp)                   | 双曲余弦。                               |
 | [**decbin()**](https://www.w3school.com.cn/php/func_math_decbin.asp)           | 把十进制转换为二进制。                   |
 | [dechex()](https://www.w3school.com.cn/php/func_math_dechex.asp)               | 把十进制转换为十六进制。                 |
 | [decoct()](https://www.w3school.com.cn/php/func_math_decoct.asp)               | 把十进制转换为八进制。                   |
 | [deg2rad()](https://www.w3school.com.cn/php/func_math_deg2rad.asp)             | 将角度转换为弧度。                       |
 | [exp()](https://www.w3school.com.cn/php/func_math_exp.asp)                     | 返回 Ex 的值。                           |
 | [expm1()](https://www.w3school.com.cn/php/func_math_expm1.asp)                 | 返回 Ex - 1 的值。                       |
 | [**floor()**](https://www.w3school.com.cn/php/func_math_floor.asp)             | 向下舍入为最接近的整数。                 |
 | [fmod()](https://www.w3school.com.cn/php/func_math_fmod.asp)                   | 返回除法的浮点数余数。                   |
 | [getrandmax()](https://www.w3school.com.cn/php/func_math_getrandmax.asp)       | 显示随机数最大的可能值。                 |
 | [hexdec()](https://www.w3school.com.cn/php/func_math_hexdec.asp)               | 把十六进制转换为十进制。                 |
 | [hypot()](https://www.w3school.com.cn/php/func_math_hypot.asp)                 | 计算直角三角形的斜边长度。               |
 | [is_finite()](https://www.w3school.com.cn/php/func_math_is_finite.asp)         | 判断是否为有限值。                       |
 | [is_infinite()](https://www.w3school.com.cn/php/func_math_is_infinite.asp)     | 判断是否为无限值。                       |
 | [is_nan()](https://www.w3school.com.cn/php/func_math_is_nan.asp)               | 判断是否为合法数值。                     |
 | [lcg_value()](https://www.w3school.com.cn/php/func_math_lcg_value.asp)         | 返回范围为 (0, 1) 的一个伪随机数。       |
 | [log()](https://www.w3school.com.cn/php/func_math_log.asp)                     | 自然对数。                               |
 | [**log10()**](https://www.w3school.com.cn/php/func_math_log10.asp)             | 以 10 为底的对数。                       |
 | [log1p()](https://www.w3school.com.cn/php/func_math_log1p.asp)                 | 返回 log(1 + number)。                   |
 | [max()](https://www.w3school.com.cn/php/func_math_max.asp)                     | 返回最大值。                             |
 | [min()](https://www.w3school.com.cn/php/func_math_min.asp)                     | 返回最小值。                             |
 | [mt_getrandmax()](https://www.w3school.com.cn/php/func_math_mt_getrandmax.asp) | 显示随机数的最大可能值。                 |
 | [mt_rand()](https://www.w3school.com.cn/php/func_math_mt_rand.asp)             | 使用 Mersenne Twister 算法返回随机整数。 |
 | [mt_srand()](https://www.w3school.com.cn/php/func_math_mt_srand.asp)           | 播种 Mersenne Twister 随机数生成器。     |
 | [octdec()](https://www.w3school.com.cn/php/func_math_octdec.asp)               | 把八进制转换为十进制。                   |
 | [pi()](https://www.w3school.com.cn/php/func_math_pi.asp)                       | 返回圆周率的值。                         |
 | [pow()](https://www.w3school.com.cn/php/func_math_pow.asp)                     | 返回 x 的 y 次方。                       |
 | [rad2deg()](https://www.w3school.com.cn/php/func_math_rad2deg.asp)             | 把弧度数转换为角度数。                   |
 | [**rand()**](https://www.w3school.com.cn/php/func_math_rand.asp)               | 返回随机整数。                           |
 | [round()](https://www.w3school.com.cn/php/func_math_round.asp)                 | 对浮点数进行四舍五入。                   |
 | [sin()](https://www.w3school.com.cn/php/func_math_sin.asp)                     | 正弦。                                   |
 | [sinh()](https://www.w3school.com.cn/php/func_math_sinh.asp)                   | 双曲正弦。                               |
 | [sqrt()](https://www.w3school.com.cn/php/func_math_sqrt.asp)                   | 平方根。                                 |
 | [**srand()**](https://www.w3school.com.cn/php/func_math_srand.asp)             | 播下随机数发生器种子。                   |
 | [tan()](https://www.w3school.com.cn/php/func_math_tan.asp)                     | 正切。                                   |
 | [tanh()](https://www.w3school.com.cn/php/func_math_tanh.asp)                   | 双曲正切。                               |
 