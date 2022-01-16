### Math
| 方法          | 含义         |
| ------------- | ------------ |
| Math.abs()    | 绝对值       |
| Math.ceil()   | 向上取整     |
| Math.floor()  | 向下取整     |
| Math.max()    | 最大值       |
| Math.sin()    | 最小值       |
| Math.pow()    | 平方         |
| Math.random() | 0~1随机数    |
| Math.sqrt()   | 根号         |
| Math.trunc()  | 去除小数部分 |
### Date
```javascript
var date=new Date(parameter)
```
- 月份从0开始
#### 构造函数
| 函数                                                           | 含义                               |
| -------------------------------------------------------------- | ---------------------------------- |
| new Date()                                                     | 返回系统当前时间(日期、时间、时区) |
| new Date(value)                                                | 1970年1月1日经过value毫秒的日期    |
| new Date(dateString)                                           | "年-月-日 时:分:秒"                |
| new Date(year, monthIndex, (day, minute, second, millisecond)) | "年-月-日 时:分:秒"                |
#### 方法：
| 方法           | 含义           |
| -------------- | -------------- |
| getFullYears() | 获取当年       |
| getMonth()     | 获取当月 |
| getDate()      | 获取当天日期   |
| getDay()       | 获取星期几     |
| getHours()     | 获取当前小时   |
| getMinutes()   | 获取当前分钟   |
| getSeconds()   | 获取当前秒数   |
| getTime()      | 获取当前时间戳 |
- 日期直接减得到毫秒数

### 日期转换
```js
const timeIntervalToString = (timeInterval, showSecond) => {
    var totalMinute = parseInt(timeInterval / 60000); //总分钟数
    var day = parseInt(parseInt(totalMinute / 60) / 24);
    var hour = parseInt((totalMinute - day * 24 * 60) / 60);
    var minute = totalMinute - day * 24 * 60 - hour * 60
    var retData = '';
    if (day != 0) {
        retData += day.toString().padStart(2, '0') + '天';
    }
    if (hour != 0) {
        retData += hour.toString().padStart(2, '0') + '时';
    }
    retData += minute.toString().padStart(2, '0') + '分';
    if (showSecond) {
        retData += parseInt(timeInterval % 60000 / 1000).toString().padStart(2, '0') + '秒'
    }
    return retData;
}
```

### 时间间隔转字符串
```js
const timeIntervalToString = (timeInterval, showSecond) => {
    var totalMinute = parseInt(timeInterval / 60000); //总分钟数
    var day = parseInt(parseInt(totalMinute / 60) / 24);
    var hour = parseInt((totalMinute - day * 24 * 60) / 60);
    var minute = totalMinute - day * 24 * 60 - hour * 60
    var retData = '';
    if (day != 0) {
        retData += day + '天';
    }
    if (hour != 0) {
        retData += hour + '小时';
    }
    retData += minute + '分';
    if (showSecond) {
        retData += (parseInt(timeInterval % 60000 / 1000)).toString().padStart(2, '0') + '秒'
    }
    return retData;
}
```