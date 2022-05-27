## head
`<head></head>`
头标签
### meta标签
| charset    | character_set                                    | 定义文档的字符编码。                         |
| ---------- | -------------------------------------------------- | -------------------------------------------- |
| content    | text                                            | 定义与 http-equiv 或 name 属性相关的元信息。 |
| http-equiv | content-typedefault-stylerefresh                   | 把 content 属性关联到 HTTP 头部。            |
| name       | application-nameauthordescriptiongeneratorkeywords | 把 content 属性关联到一个名称。              |
[http-equiv具体用法](https://www.cnblogs.com/dreamaker/p/10576750.html)
#### 禁止缩放
`<meta name="viewport" content="user-scalable=no">`
### title标签
`<title></title>`
标签显示的内容
### link标签
- `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`
收藏夹、标签页显示的小图标，ico格式
- `<link rel="stylesheet" href="experience.css">`
css文件
- `<link rel="canonical" href="">`
**对搜索引擎优化，提高搜索自然排名**
### style标签
`<style></style>`
CSS样式
### script标签
`<script></script>`
JavaScript文件
### SEO搜索引擎优化：tdk
title、description、keyword
`<title></title>`: 网站名-网站的介绍(不超过30字)
`meta name="description" content=" "`: 介绍具体业务和主题
`meta name="keyword" content="0,0,0"`:关键字，逗号分隔，越靠前比重越大