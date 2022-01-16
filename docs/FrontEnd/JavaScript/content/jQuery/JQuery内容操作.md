### 内容操作
- `text()`：设置或返回所选元素的文本内容
- `html()`：设置或返回所选元素的内容（包括 HTML 标记）
- `val()`：设置或返回表单字段的值
- `attr()`：设置/改变属性值
- 使用`=`赋值
```js
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
$("#btn1").click(function(){
  alert("Value: " + $("#test").val());
});
$("button").click(function(){
  alert($("#w3s").attr("href"));
});
```
### 遍历
```js
$('selector').each(function(){})
```