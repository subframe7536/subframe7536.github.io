### 添加元素
- `append()`：在被选元素的结尾插入内容
- `prepend()`：在被选元素的开头插入内容
- `after()`： 在被选元素之后插入内容
- `before()`： 在被选元素之前插入内容
```js
$("p").append("Some appended text.");
$("p").prepend("Some prepended text.");
$("img").after("Some text after");
$("img").before("Some text before");
```
### 删除元素
- `remove()`： 删除被选元素（及其子元素）
- `empty()`： 从被选元素中删除子元素
```js
$("#div1").remove();
$("#div1").empty();

//remove()方法也可接受一个参数，允许您对被删元素进行过滤。
$("p").remove(".italic");
```