> Obaidian 0.14.2 版本后增加了Callout功能，这个功能就是之前 admonition(简称ad插件) 插件收编的，目前语法跟Microsoft Docs 一致。之前用ad插件设置的提示框可以一键转换成最新的语法样式。

## 调用办法
`ctrl+p`  输入 callout 即可自动输入模板
### 视频教程
[告别单调的Obsidian (bilibili.com)](https://www.bilibili.com/video/BV1G5411U7m8/)

[[test]]


## 目前支持的样式列表
## 官方示例
### 提示框类型
> [!note]
> Here's a callout block.
> It supports **markdown** and [[Internal link|wikilinks]].

> [!abstract]

>[!todo]

> [!info]

> [!tip]

> [!success]

> [!question]

> [!warning]
> test

> [!failure]

> [!danger]

> [!bug]

> [!example]

> [!quote]



除了info 类型还支持以下类型
-   note
-   abstract, summary, tldr
-   info, todo
-   tip, hint, important
-   success, check, done
-   question, help, faq
-   warning, caution, attention
-   failure, fail, missing
-   danger, error
-   bug
-   example
-   quote, cite
### 提示框的各种用法

1. 可以没有内容直接显示标题
> [!TIP] Callouts can have custom titles, which also supports **markdown**!

2. 折叠提示框
> [!FAQ]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden until it is expanded.

3. 自定义提示框
可以通过css设置my-callout-type 的样式
```css
.callout[data-callout="my-callout-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: icon-id;
    --callout-icon: '<svg>...custom svg...</svg>';
}
```

## 主题自定义示例
通过添加callout类型，实现各类样式控制。下面以Blue Topaz主题内置的callout样式举例说明，目前支持的callout样式有：


| Callout类型         | 解释                          | 使用                                 |
| ------------------- | ----------------------------- | ------------------------------------ |
| xx%                 | callout宽度xx代表10-100的数值 | >[!30%]                              |
| right\|left\|center | callout布局位置               | >[!right] <br>>[!left]<br>>[!center] |
| indent              | 全文自动缩进2字符             | >[!indent]                           |
| timeline            | 时间线样式                    | >[!timeline]                         |
**注意 以上类型都可以互相组合使用，具体看下面例子**

### 信息卡 infobox

> [!Infobox|35%] ## 关羽
>![[动画.png]]
> 
| 本名     | 关羽                          |
|:-------- |:--------------------------------------------- |
| 别名     | 关云长、关公、汉寿亭侯、武圣                 |
| 昵称     | 二爷                                              |
| 国籍     | 中国                                       |
| 出生     | 约160年                                |
| 逝世     | 220年（约60岁）               |
| 职业     | 将领                              |
| 活跃年代 | 东汉末年                       |
| 相关人士 | 大哥：刘备<div>三弟：张飞<br></div><div>子女：关平、关银屏<br></div> |

> [!tip indent] 三国人物--关羽
>关羽早年因杀人逃离家乡，奔向涿郡，在此处结识刘备与张飞，三人相谈甚欢，恩若兄弟。
>建安五年（200年）刘备投奔袁绍，关羽被曹操捉拿后担任偏将军，在万军之中斩杀颜良，立下了大功。不过之后关羽离开曹操阵营投奔刘备，曹操并未挽留，而是认为“彼各为其主”，放他离开了。
>之后关羽跟随刘备投奔刘表，刘表去世后刘备在南逃过程中派遣关羽带领数百艘船前往江陵，并在被曹操追杀后成功与之汇合，一同前往夏口。在刘备平定益州后关羽总督荆州诸事，并在之后进行了刮骨疗毒的壮举。
>建安二十四年（219年）刘备自封为汉中王，赐关羽前将军之职，之后在樊城之战中一举斩落庞德，威震华夏。但之后由于孙权反水偷袭以及部下倒戈东吴，关羽军队溃散，败走麦城，被孙权部将抓获，同年十二月在临沮被斩杀。
>之后孙权将关羽的头颅送给曹操，曹操以诸侯之礼下葬于洛阳，孙权则将身躯下葬于当阳。后被蜀后主刘禅追谥为壮缪侯。
> 

### 自定义宽度 位置 
> 目前支持的位置属性有 right，center，left
支持的宽度属性 10%-100% 比如10% 15% 20% 等
它们可以组合使用，**在预览模式使用**
 > [!note 30%]
 > [!note|30%]

> [!tips right|35% ]+ Title
>  Indeed, Chinese box office is increasing every year, even surpasses the foreign’s, which makes the foreign directors pay so much attention to Chinese audiences. It also shows that China has influnced the world and it plays more and more important role in the world economy. There is no doubt that more cooperations will happen during foreign enterprises and Chinese business. 

With the development of Chinese economy, the world is watching us. More and more foreigners have sensed the great potential market and come to China to seek for cooperation. Chinese film market had been ignored before, but now more Hollywood directors show their willingness to work with Chinese actors, so as to catch more Chinese audiences and increase the box office.  
 Indeed, Chinese box office is increasing every year, even surpasses the foreign’s, which makes the foreign directors pay so much attention to Chinese audiences. It also shows that China has influnced the world and it plays more and more important role in the world economy. There is no doubt that more cooperations will happen during foreign enterprises and Chinese business.
 With the development of Chinese economy, the world is watching us. More and more foreigners have sensed the great potential market and come to China to seek for cooperation. Chinese film market had been ignored before, but now more Hollywood directors show their willingness to work with Chinese actors, so as to catch more Chinese audiences and increase the box office.  

### 首行缩进2字符 indent 
```html
 > [!note indent]
```
#todo hidestyle
> [!NOTE indent hidestyle] Title
> 测试`code`
> In China, millions of high school students will take part in the very important exam on June, it is the turning point of their lives, because the exam will decide what kind of university they will enter. Most people believe that it even decides their fates. While it is just the beginning of their new lives.
在中国,数以百万计的高中学生会在6月参加重要的考试,这是他们生活的转折点,因为考试将决定他们将进入什么样的大学。大多数人认为,这甚至决定他们的命运。然而这只是他们的新生活的开端。
When high school students finish their study, it is time to think about what kind of major they need to choose. This is a very important question, choosing a major needs to consider many factors. The first is about interest. Studying with passion can make a student happy and love what the major. The second is about foreground. The major always decide the future job, so students need to think about the prospect.
当高中学生完成他们的学业,是时候考虑需要选择什么样的专业。这是一个非常重要的问题,选择专业需要考虑很多因素。第一个是关于兴趣。有激情的学习可以让学生感受到快乐和爱。第二个是关于前景。专业总会决定未来的工作,所以学生需要思考前景。

### timeline
#### 语法
```
> [!timeline] 
>>这里写左栏内容
> ---
正文内容也就是右栏目内容。

```

#### 示例效果
##### 左右分栏 康奈尔笔记效果

> [!timeline] 演示
>> 左栏目内容
>--- 
>右栏目内容
>- 可以用列表 等md语法
>
>> 需要右栏目的话 多加一个引用符号即可
>
>右栏目跟左栏目内容需要空一行进行分割
>这样就会识别
>>这是左栏目内容
>
>右栏目内容
>> 左边内容输入完回车两次即可
>
>右栏目内容
>右边内容
>支持复杂的md语法 比如下面的例子





> [!timeline]+  **计算机系统**
>>- 什么是计算机系统
> ---
计算机系统指用于数据库管理的计算机硬软件及网络系统。数据库系统需要大容量的主存以存放和运行操作系统、数据库管理系统程序、应用程序以及数据库、目录、系统缓冲区等，而辅存则需要大容量的直接存取设备。此外，系统应具有较强的网络功能。 
>>- 计算机系统的组成
>
计算机系统由硬件（子）系统和软件（子）系统组成。前者是借助电、磁、光、机械等原理构成的各种物理部件的有机组合，是系统赖以工作的实体。后者是各种程序和文件，用于指挥全系统按指定的要求进行工作。

> [!question]+ 思考内容
> - 专用机的特点是什么?
>- 如何自己做一台计算机?



> [!timeline]+ 时间线样式--近代中国史
> >  1840年6月
> ---
英军发动鸦片战争
> >1842年8月
> 
清政府与英国签订《南京条约》:
1）中国割让香港岛给英国;
2）赔款洋银2100万元;
3）开放广州、厦门、福州、宁波、上海五处为通商口岸;
>
>> [!note]+ 《南京条约》影响
>>1. 中国近代史上第一个不平等条约，给中国人民带来深重的灾难，开创了列强以条约形式侵略和奴役中国的恶例;
>2. 中国的国家主权和领土完整遭到破坏，逐步沦为半殖民地半封建社会;
>3. 中国社会的主要矛盾由地主阶级与农民阶级的矛盾，演变为帝国主义和中华民族的矛盾（主要矛盾)、封建主义和人民大众的矛盾;
>4. 反侵略反封建成为中国人民肩负的两大历史任务;
>5. 中国逐渐开始了反帝反封建的资产阶级民主革命。
>
| | |
 | ------ | -------------------------------------- |
 | 1943年 | 中英《虎门条约》签订;                  |
 | 1844年 | 中关《望厦条约》、中法《黄埔条约》签订 | 
> >1841年5月
> 
> 三元里人民的抗英斗争，是中国近代史上中国人民第一次大规模的反侵略武装斗争。
>![ ](https://tse1-mm.cn.bing.net/th/id/R-C.4bbce1406f4442c1360edde26baa894d?rik=iHeUeby0jS5lnw&riu=http%3a%2f%2fp8.qhmsg.com%2fdr%2f270_500_%2ft01dbb76ff833d0a159.jpg&ehk=yggnC0t62%2b6DEVjvBgs%2fXJuuexBucd66FTc5gL0Gw%2fA%3d&risl=&pid=ImgRaw&r=0)
>>1842年
>
> 魏源编著《海国图志》，提出"师夷长技以制夷”
>>1851年1月
>
>洪秀全金田村发动起义，建号太平天国。1853年3月，占领南京,定为首都,改名天京，正式宜告太平天国农民政权的建立。颁布《天朝天亩制度》、天平军北伐


