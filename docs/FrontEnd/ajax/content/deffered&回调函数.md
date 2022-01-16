# deferred对象
从jQuery 1.5.0版本开始引入的一个新功能`deferred对象`。 这个功能很重要，未来将成为jQuery的核心方法，它彻底改变了如何在jQuery中使用ajax。为了实现它，jQuery的全部ajax代码都被改写了
### 什么是deferred对象？
deferred对象就是jQuery的回调函数解决方案。在英语中，defer的意思是`延迟`，所以deferred对象的含义就是 `延迟` 到未来某个点再执行。它解决了如何处理耗时操作的问题，对那些操作提供了更好的控制，以及统一的编程接口。
### ajax操作的链式写法
jQuery的[[ajax-start]]操作的传统写法：
```js
$.Ajax({　　　　
  url: "test.html",
  success: function() {　　　　　　
    alert("哈哈，成功了！");　　　　
  },
  error: function() {　　　　　　
    alert("出错啦！");　　　　
  }　　
});
```

`$.ajax()`接受一个对象参数，这个对象包含两个方法：success方法指定操作成功后的回调函数，error方法指定操作失败后的回调函数。
## deferred对象的写法
`$.ajax()`操作完成后，如果使用的是低于1.5.0版本的jQuery，返回的是`XHR`对象，你没法进行链式操作；如果高于1.5.0版本，返回的是`deferred`对象，可以进行链式操作。
```js
$.ajax("test.html")
  .done(function() {
    alert("哈哈，成功了！");
  })
  .fail(function() {
    alert("出错啦！");
  });
//done()相当于success方法，fail()相当于error方法。采用链式写法以后，代码的可读性大大提高
```
### 指定同一操作的多个回调函数
deferred对象的一大好处，就是它允许你自由添加多个回调函数。 如果ajax操作成功后，除了原来的回调函数，我还想再运行一个回调函数，怎么办？ 很简单，直接把它加在后面就行了。
```js
$.ajax("test.html")
  .done(function() {
    alert("哈哈，成功了！");
  })
  .fail(function() {
    alert("出错啦！");
  })
  .done(function() {
    alert("第二个回调函数！");
  });
//回调函数可以添加任意多个，它们按照添加顺序执行
```
### 为多个操作指定回调函数
deferred对象的另一大好处，就是它允许你为多个事件指定一个回调函数，这是传统写法做不到的。请看下面的代码，它用到了一个新的方法`$.when()`
```js
$.when($.ajax("test1.html"), $.ajax("test2.html"))　　
  .done(function() {
    alert("哈哈，成功了！");
  })　　
  .fail(function() {
    alert("出错啦！");
  });
//如果有一个失败或都失败了，就执行fail()指定的回调函数。
```
### 普通操作的回调函数接口 1
deferred对象的最大优点，就是它把这一套回调函数接口，从ajax操作扩展到了所有操作。不管是ajax操作还是本地操作，也不管是异步操作还是同步操作，都可以使用deferred对象的各种方法，指定回调函数。

```js
var wait = function() {　　　　
  var tasks = function() {　　　　　　
    alert("执行完毕！");　　　　
  };　　　　
  setTimeout(tasks, 5000);　　
};
```
为它指定回调函数，应该怎么做呢？很自然的，你会想到，可以使用 `$.when()` ^097cff
```js
$.when(wait())
  .done(function() {
    alert("哈哈，成功了！");
  })
  .fail(function() {
    alert("出错啦！");
  });
```
但是，这样写的话，`done()`方法会立即执行，起不到回调函数的作用。原因在于`$.when()`的参数只能是deferred对象，所以必须对`wait()`进行改写：
```js
var dtd = $.Deferred(); // 新建一个deferred对象
var wait = function(dtd) {　　　　
  var tasks = function() {　　　　　　
    alert("执行完毕！");　　　　　　
    dtd.resolve(); // 改变deferred对象的执行状态
  };　　　　
  setTimeout(tasks, 5000);　　　　
  return dtd;　　
};

$.when(wait(dtd))
  .done(function() {
    alert("哈哈，成功了！");
  })
  .fail(function() {
    alert("出错啦！");
  });
//wait()函数运行完，就会自动运行done()方法指定的回调函数。
```
### deferred.resolve() & deferred.reject()
jQuery规定，deferred 对象有三种执行状态: `未完成`，`已完成`和`已失败`。
-   如果执行状态是`已完成`(resolved),deferred对象立刻调用`done()`方法指定的回调函数；
-   如果执行状态是`已失败`，调用`fail()`方法指定的回调函数；
-   如果执行状态是`未完成`，则继续等待，或者调用`progress()`方法指定的回调函数(jQuery1.7版本添加)。
-   ajax操作时，deferred对象会根据返回结果，自动改变自身的执行状态；
-   在wait()函数中，这个执行状态必须手动指定。
-   `dtd.resolve()`的意思是，将dtd对象的执行状态从`未完成`改为`已完成`，从而触发`done()`方法。
-   `deferred.reject()`方法，作用是将dtd对象的执行状态从`未完成`改为`已失败`，从而触发`fail()`方法。
```js
var dtd = $.Deferred(); // 新建一个Deferred对象
var wait = function(dtd) {　　　　
  var tasks = function() {　　　　　　
    alert("执行完毕！");　　　　　　
    dtd.reject(); // 改变Deferred对象的执行状态
  };　　　　
  setTimeout(tasks, 5000);　　　　
  return dtd;　　
};　　

$.when(wait(dtd))
  .done(function() {
    alert("哈哈，成功了！");
  })
  .fail(function() {
    alert("出错啦！");
  });
```
### deferred.promise()方法
上面这种写法，还是有问题。那就是`dtd`是一个全局对象，所以它的执行状态可以从外部改变。
```js
var dtd = $.Deferred(); // 新建一个Deferred对象
var wait = function(dtd) {　　　　
  var tasks = function() {　　　　　　
    alert("执行完毕！");　　　　　　
    dtd.resolve(); // 改变Deferred对象的执行状态
  };　　　　
  setTimeout(tasks, 5000);　　　　
  return dtd;　　
};

$.when(wait(dtd))
  .done(function() {
    alert("哈哈，成功了！");
  })
  .fail(function() {
    alert("出错啦！");
  });　　
dtd.resolve();
//代码的尾部加了一行dtd.resolve()，这就改变了dtd对象的执行状态
//导致done()方法立刻执行，跳出"哈哈，成功了！"的提示框，等5秒之后再跳出"执行完毕！"的提示框。
```
为了避免这种情况，jQuery提供了`deferred.promise()`方法。它的作用是，在原来的deferred对象上返回另一个deferred对象，后者只开放与改变执行状态无关的方法(比如`done()`方法和`fail()`方法)，屏蔽与改变执行状态有关的方法(比如`resolve()`方法和`reject()`方法)，从而使得执行状态不能被改变。
```js
var dtd = $.Deferred(); // 新建一个Deferred对象
var wait = function(dtd) {　　　　
  var tasks = function() {　　　　　　
    alert("执行完毕！");　　　　　　
    dtd.resolve(); // 改变Deferred对象的执行状态　　
  };　　　
  setTimeout(tasks, 5000);　　　　
  return dtd.promise(); // 返回promise对象　
};

var d = wait(dtd); // 新建一个d对象，改为对这个对象进行操作
$.when(d)
  .done(function() {
    alert("哈哈，成功了！");
  })
  .fail(function() {
    alert("出错啦！");
  });
//wait()函数返回的是promise对象。然后，我们把回调函数绑定在这个对象上面，而不是原来的deferred对象上面。
//这样的好处是，无法改变这个对象的执行状态，要想改变执行状态，只能操作原来的deferred对象。
```
### 更好的方法
不过，更好的写法是将dtd对象变成`wait()`函数的内部对象。
```js
var wait = function(dtd) {　　　　
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var tasks = function() {　　　　　　
    alert("执行完毕！");　　　　　　
    dtd.resolve(); // 改变Deferred对象的执行状态　　
  };　　
  setTimeout(tasks, 5000);　　　　
  return dtd.promise(); // 返回promise对象　
};　　

$.when(wait())
  .done(function() {
    alert("哈哈，成功了！");
  })
  .fail(function() {
    alert("出错啦！");
  });
```

### $.Deferred() 建构函数
另一种防止执行状态被外部改变的方法，是使用deferred对象的建构函数`$.Deferred()`。这时，`wait()`函数还是保持不变，我们直接把它传入`$.Deferred()`
```js
var wait = function(dtd) {
  var tasks = function() {
    alert("执行完毕！");
    dtd.resolve(); // 改变Deferred对象的执行状态
  };
  setTimeout(tasks, 5000);
  return dtd.promise();
};

$.Deferred(wait)
  .done(function() {
    alert("哈哈，成功了！");
  })
  .fail(function() {
    alert("出错啦！");
  });
};
//$.Deferred()可以接受一个函数名(注意，是函数名)作为参数
//$.Deferred()所生成的deferred对象将作为这个函数的默认参数。
```
### 直接部署deferred接口
除了上面两种方法以外，还可以直接在`wait`对象上部署deferred接口。
```js
var dtd = $.Deferred(); // 生成Deferred对象　
var wait = function(dtd) {　　　
  var tasks = function() {
    alert("执行完毕！");　　　　
    dtd.resolve(); // 改变Deferred对象的执行状态　　
  };　　　
  setTimeout(tasks, 5000);
};

dtd.promise(wait);
wait.done(function() {
  alert("哈哈，成功了！");
}).fail(function() {
  alert("出错啦！");
});　
wait(dtd);
//关键是dtd.promise(wait)这一行，它的作用就是在wait对象上部署Deferred接口。
//正是因为有了这一行，后面才能直接在wait上面调用done()和fail()。
```
### Deferred范例1
```js
function sleep(timeout) {  
    var dtd = $.Deferred();
    setTimeout(dtd.resolve, timeout);
    return dtd;
}

// 等同于上面的写法
function sleep(timeout) {  
    return $.Deferred(function(dtd) {
        setTimeout(dtd.resolve, timeout);
    });
}

console.time('sleep');  
sleep(2000).done(function() {  
    console.timeEnd('sleep');
});
```
### Deferred范例2
```js
function loadImg(src) {
  var dtd = $.Deferred(),
    img = new Image;
  img.onload = function() {
    dtd.resolve(img);
  }
  img.onerror = function(e) {
    dtd.reject(e);
  }
  img.src = src;
  return dtd;
}

loadImg('http://www.baidu.com/favicon.ico').then(
  function(img) {
    $('body').prepend(img);
  }, function() {
    alert('load error');
  }
)
```
### Deferred范例3
5s后把百度Logo显示出来
```js
setTimeout(function() {
  loadImg('http://www.baidu.com/favicon.ico').done(function(img) {
    $('body').prepend(img);
  });
}, 5000);
```

```js
sleep(5000)
  .done(function() {
    loadImg('http://www.baidu.com/favicon.ico').done(function(img) {
      $('body').prepend(img);
    });
  });
```

```js
$.when(sleep(5000), loadImg('http://www.baidu.com/favicon.ico'))
  .done(function(ignore, img) {
    $('body').prepend(img);
  });
```
### deferred对象总结
1 . `$.Deferred()` 生成一个deferred对象。  
2 . `deferred.done()` 指定操作成功时的回调函数  
3 . `deferred.fail()` 指定操作失败时的回调函数
### deferred对象总结
4 . `deferred.promise()` 没有参数时，返回一个新的deferred对象，该对象的运行状态无法被改变；接受参数时，作用为在参数对象上部署deferred接口。  
5 . `deferred.resolve()` 手动改变deferred对象的运行状态为"已完成"，从而立即触发`done()`方法  
6 . `deferred.reject()` 这个方法与`deferred.resolve()` 正好相反，调用后将deferred对象的运行状态变为"已失败"，从而立即触发fail()方法  
7 . `$.when()` 为多个操作指定回调函数
### deferred对象总结
8 . `deferred.then()` 有时为了省事，可以把`done()`和`fail()`合在一起写，这就是`then()`方法
```js
$.when($.ajax( "/main.php" ))
  .then(successFunc, failureFunc );
//如果then()有两个参数，那么第一个参数是done()方法的回调函数，第二个参数是fail()方法的回调方法。
//如果then()只有一个参数，那么等同于done()  
```
### deferred对象总结
9 . `deferred.always()` 这个方法也是用来指定回调函数的，它的作用是，不管调用的是`deferred.resolve()`还是`deferred.reject()`，最后总是执行。
```js
$.ajax( "test.html" )
  .always( function() { alert("已执行！");} );
```
### deferred对象技巧
使用deferred对象写JS动画非常方便
```js
// Animation flows.
$.when( preloadImage() )
.then( animation01 )
.then( animation02 )
.then( animation03 )
.then( transition )
.then( merge )
.then( zoom )
.then( showContent )
.then( flicker );
```
### 优点
1、可以任意调整动画的先后顺序  
2、添加 SKIP(跳过动画)功能也很方便  
3、调试动画也可以节省大量时间。 把不需要调试的动画项注释掉
```js
$.when( preloadImage() )
// .then( animation01 )
// .then( animation02 )
// .then( animation03 )
// .then( transition )
// .then( merge )
// .then( zoom )
.then( showContent )
.then( flicker );
```