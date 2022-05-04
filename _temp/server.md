---
title: server v1.0.0
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.4"
---

# server

> v1.0.0

# 登录

<a id="opIdlogin"></a>

## POST /api/login

POST /api/login

登录

> Body 请求参数

```json
{
  "phone": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[PhoneLoginVO](#schemaphoneloginvo)|false|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultString](#schemaresponseresultstring)|

<a id="opIdlogout"></a>

## POST /api/logout

POST /api/logout

登出

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultString](#schemaresponseresultstring)|

# hello

<a id="opIdtest"></a>

## POST test

POST /api/test

test

> Body 请求参数

```json
{
  "file": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### 返回数据结构

# 垃圾暂存箱

<a id="opIdgetDropRecordById"></a>

## GET getDropRecord

GET /api/box/getDropRecord

获取垃圾暂存箱投放记录

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|boxId|query|string|true|none|
|pageCurrent|query|string|false|none|
|pageSize|query|string|false|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultPageBoxDropRecordsVO](#schemaresponseresultpageboxdroprecordsvo)|

<a id="opIdaddRecord"></a>

## POST addRecord

POST /api/box/addRecord

添加投递记录

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultString](#schemaresponseresultstring)|

<a id="opIdgetBoxFullById"></a>

## GET getBoxFull

GET /api/box/getFull

获取垃圾暂存箱当前存放容量

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|boxId|query|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultBoxFullVO](#schemaresponseresultboxfullvo)|

<a id="opIdgetInfoById"></a>

## GET getInfo

GET /api/box/getInfo

获取垃圾暂存箱信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|boxId|query|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultBoxVO](#schemaresponseresultboxvo)|

# 视图

<a id="opIdgetPercent"></a>

## GET /api/view/getPercent

GET /api/view/getPercent

获取所有信息

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultListPercentSum](#schemaresponseresultlistpercentsum)|

<a id="opIdgetTodayRecord"></a>

## GET /api/view/getTodayRecord

GET /api/view/getTodayRecord

获取所有信息

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultTodayRecord](#schemaresponseresulttodayrecord)|

<a id="opIdgetTimelyData"></a>

## GET /api/view/getTimely

GET /api/view/getTimely

获取过去一段时间内的投放量信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|interval|query|string|false|none|
|day|query|string|false|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultWeightSumTimely](#schemaresponseresultweightsumtimely)|

<a id="opIdgetHistory"></a>

## GET /api/view/getHistory

GET /api/view/getHistory

获取所有信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|period|query|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultListHistorySum](#schemaresponseresultlisthistorysum)|

# 用户

<a id="opIdgetInfo"></a>

## GET /api/user/info

GET /api/user/info

获取用户信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|token|header|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseResultUser](#schemaresponseresultuser)|

# 数据模型

<h2 id="tocS_ResponseResultString">ResponseResultString</h2>

<a id="schemaresponseresultstring"></a>
<a id="schema_ResponseResultString"></a>
<a id="tocSresponseresultstring"></a>
<a id="tocsresponseresultstring"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": "string"
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|msg|string|false|none|none|
|data|string|false|none|none|

<h2 id="tocS_ResponseResultListHistorySum">ResponseResultListHistorySum</h2>

<a id="schemaresponseresultlisthistorysum"></a>
<a id="schema_ResponseResultListHistorySum"></a>
<a id="tocSresponseresultlisthistorysum"></a>
<a id="tocsresponseresultlisthistorysum"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": [
    {
      "cabinet": 0,
      "box": 0,
      "date": "2019-08-24"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|msg|string|false|none|none|
|data|[[HistorySum](#schemahistorysum)]|false|none|[历史投放量]|

<h2 id="tocS_PageBoxDropRecordsVO">PageBoxDropRecordsVO</h2>

<a id="schemapageboxdroprecordsvo"></a>
<a id="schema_PageBoxDropRecordsVO"></a>
<a id="tocSpageboxdroprecordsvo"></a>
<a id="tocspageboxdroprecordsvo"></a>

```json


```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|records|[[BoxDropRecordsVO](#schemaboxdroprecordsvo)]|false|none|[垃圾暂存箱_投放记录]|
|total|integer(int64)|false|none|none|
|size|integer(int64)|false|none|none|
|current|integer(int64)|false|none|none|
|orders|[[OrderItem](#schemaorderitem)]|false|none|none|
|optimizeCountSql|boolean|false|none|none|
|hitCount|boolean|false|none|none|
|countId|string|false|none|none|
|maxLimit|integer(int64)|false|none|none|
|searchCount|boolean|false|none|none|
|ascs|[PageBoxDropRecordsVO](#schemapageboxdroprecordsvo)|false|none|none|
|asc|[PageBoxDropRecordsVO](#schemapageboxdroprecordsvo)|false|none|none|
|descs|[PageBoxDropRecordsVO](#schemapageboxdroprecordsvo)|false|none|none|
|desc|[PageBoxDropRecordsVO](#schemapageboxdroprecordsvo)|false|none|none|
|pages|integer(int64)|false|none|none|

<h2 id="tocS_WeightSumTimely">WeightSumTimely</h2>

<a id="schemaweightsumtimely"></a>
<a id="schema_WeightSumTimely"></a>
<a id="tocSweightsumtimely"></a>
<a id="tocsweightsumtimely"></a>

```json
{
  "queryTime": "2019-08-24T14:15:22Z",
  "cabinetSum": 0,
  "boxSum": 0
}

```

一段时间内的垃圾总量统计

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|queryTime|string(date-time)|false|none|开始时间|
|cabinetSum|integer(int32)|false|none|零散垃圾总量|
|boxSum|integer(int32)|false|none|袋装垃圾总量|

<h2 id="tocS_ResponseResultListPercentSum">ResponseResultListPercentSum</h2>

<a id="schemaresponseresultlistpercentsum"></a>
<a id="schema_ResponseResultListPercentSum"></a>
<a id="tocSresponseresultlistpercentsum"></a>
<a id="tocsresponseresultlistpercentsum"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": [
    {
      "name": "string",
      "value": 0
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|msg|string|false|none|none|
|data|[[PercentSum](#schemapercentsum)]|false|none|[每类垃圾比重]|

<h2 id="tocS_ResponseResultWeightSumTimely">ResponseResultWeightSumTimely</h2>

<a id="schemaresponseresultweightsumtimely"></a>
<a id="schema_ResponseResultWeightSumTimely"></a>
<a id="tocSresponseresultweightsumtimely"></a>
<a id="tocsresponseresultweightsumtimely"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "queryTime": "2019-08-24T14:15:22Z",
    "cabinetSum": 0,
    "boxSum": 0
  }
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|msg|string|false|none|none|
|data|[WeightSumTimely](#schemaweightsumtimely)|false|none|一段时间内的垃圾总量统计|

<h2 id="tocS_BoxDropRecordsVO">BoxDropRecordsVO</h2>

<a id="schemaboxdroprecordsvo"></a>
<a id="schema_BoxDropRecordsVO"></a>
<a id="tocSboxdroprecordsvo"></a>
<a id="tocsboxdroprecordsvo"></a>

```json
{
  "dropId": "string",
  "userId": 0,
  "nickName": "string",
  "typeName": "string",
  "weight": 0,
  "dropTime": "2019-08-24T14:15:22Z"
}

```

垃圾暂存箱_投放记录

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|dropId|string|false|none|投放id|
|userId|integer(int32)|false|none|用户id|
|nickName|string|false|none|用户昵称|
|typeName|string|false|none|投放垃圾类型|
|weight|integer(int32)|false|none|投放重量|
|dropTime|string(date-time)|false|none|投放时间|

<h2 id="tocS_User">User</h2>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "userId": 0,
  "typeId": true,
  "nickName": "string",
  "remark": "string",
  "lastLogin": "2019-08-24T14:15:22Z",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z",
  "deleted": true
}

```

用户

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|userId|integer(int32)|false|none|用户id|
|typeId|boolean|false|none|用户类型id|
|nickName|string|false|none|用户昵称|
|remark|string|false|none|备注|
|lastLogin|string(date-time)|false|none|最后登录时间|
|createTime|string(date-time)|false|none|创建时间|
|updateTime|string(date-time)|false|none|修改时间|
|deleted|boolean|false|none|是否删除(0正常 1删除)|

<h2 id="tocS_BoxFullVO">BoxFullVO</h2>

<a id="schemaboxfullvo"></a>
<a id="schema_BoxFullVO"></a>
<a id="tocSboxfullvo"></a>
<a id="tocsboxfullvo"></a>

```json
{
  "fullFood": 0,
  "fullOther": 0,
  "timestamp": 0
}

```

垃圾暂存箱当前存放容量

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|fullFood|integer(int32)|false|none|厨余垃圾投放量|
|fullOther|integer(int32)|false|none|其他垃圾投放量|
|timestamp|integer(int64)|false|none|时间戳|

<h2 id="tocS_ResponseResultTodayRecord">ResponseResultTodayRecord</h2>

<a id="schemaresponseresulttodayrecord"></a>
<a id="schema_ResponseResultTodayRecord"></a>
<a id="tocSresponseresulttodayrecord"></a>
<a id="tocsresponseresulttodayrecord"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "cabinet": 0,
    "box": 0
  }
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|msg|string|false|none|none|
|data|[TodayRecord](#schematodayrecord)|false|none|今日垃圾投放次数|

<h2 id="tocS_OrderItem">OrderItem</h2>

<a id="schemaorderitem"></a>
<a id="schema_OrderItem"></a>
<a id="tocSorderitem"></a>
<a id="tocsorderitem"></a>

```json
{
  "column": "string",
  "asc": true
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|column|string|false|none|none|
|asc|boolean|false|none|none|

<h2 id="tocS_HistorySum">HistorySum</h2>

<a id="schemahistorysum"></a>
<a id="schema_HistorySum"></a>
<a id="tocShistorysum"></a>
<a id="tocshistorysum"></a>

```json
{
  "cabinet": 0,
  "box": 0,
  "date": "2019-08-24"
}

```

历史投放量

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|cabinet|integer(int32)|false|none|智能柜重量|
|box|integer(int32)|false|none|暂存箱重量|
|date|string(date)|false|none|统计时间|

<h2 id="tocS_BoxVO">BoxVO</h2>

<a id="schemaboxvo"></a>
<a id="schema_BoxVO"></a>
<a id="tocSboxvo"></a>
<a id="tocsboxvo"></a>

```json
{
  "boxId": "string",
  "addr": "string",
  "activeDate": "2019-08-24T14:15:22Z",
  "lastCheck": "2019-08-24T14:15:22Z",
  "fullFood": 0,
  "fullOther": 0,
  "isBroken": true
}

```

暂存箱信息

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|boxId|string|false|none|暂存箱id|
|addr|string|false|none|放置位置|
|activeDate|string(date-time)|false|none|首次使用时间|
|lastCheck|string(date-time)|false|none|上次检查时间|
|fullFood|integer(int32)|false|none|厨余垃圾投放量|
|fullOther|integer(int32)|false|none|其他垃圾投放量|
|isBroken|boolean|false|none|是否需要维修|

<h2 id="tocS_ResponseResultBoxVO">ResponseResultBoxVO</h2>

<a id="schemaresponseresultboxvo"></a>
<a id="schema_ResponseResultBoxVO"></a>
<a id="tocSresponseresultboxvo"></a>
<a id="tocsresponseresultboxvo"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "boxId": "string",
    "addr": "string",
    "activeDate": "2019-08-24T14:15:22Z",
    "lastCheck": "2019-08-24T14:15:22Z",
    "fullFood": 0,
    "fullOther": 0,
    "isBroken": true
  }
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|msg|string|false|none|none|
|data|[BoxVO](#schemaboxvo)|false|none|暂存箱信息|

<h2 id="tocS_ResponseResultPageBoxDropRecordsVO">ResponseResultPageBoxDropRecordsVO</h2>

<a id="schemaresponseresultpageboxdroprecordsvo"></a>
<a id="schema_ResponseResultPageBoxDropRecordsVO"></a>
<a id="tocSresponseresultpageboxdroprecordsvo"></a>
<a id="tocsresponseresultpageboxdroprecordsvo"></a>

```json


```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|msg|string|false|none|none|
|data|[PageBoxDropRecordsVO](#schemapageboxdroprecordsvo)|false|none|none|

<h2 id="tocS_ResponseResultUser">ResponseResultUser</h2>

<a id="schemaresponseresultuser"></a>
<a id="schema_ResponseResultUser"></a>
<a id="tocSresponseresultuser"></a>
<a id="tocsresponseresultuser"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "userId": 0,
    "typeId": true,
    "nickName": "string",
    "remark": "string",
    "lastLogin": "2019-08-24T14:15:22Z",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z",
    "deleted": true
  }
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|msg|string|false|none|none|
|data|[User](#schemauser)|false|none|用户|

<h2 id="tocS_PercentSum">PercentSum</h2>

<a id="schemapercentsum"></a>
<a id="schema_PercentSum"></a>
<a id="tocSpercentsum"></a>
<a id="tocspercentsum"></a>

```json
{
  "name": "string",
  "value": 0
}

```

每类垃圾比重

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|name|string|false|none|垃圾种类名称|
|value|integer(int32)|false|none|垃圾重量|

<h2 id="tocS_PhoneLoginVO">PhoneLoginVO</h2>

<a id="schemaphoneloginvo"></a>
<a id="schema_PhoneLoginVO"></a>
<a id="tocSphoneloginvo"></a>
<a id="tocsphoneloginvo"></a>

```json
{
  "phone": "string",
  "password": "string"
}

```

手机号登录用户

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|phone|string|false|none|手机号|
|password|string|false|none|密码|

<h2 id="tocS_ResponseResultBoxFullVO">ResponseResultBoxFullVO</h2>

<a id="schemaresponseresultboxfullvo"></a>
<a id="schema_ResponseResultBoxFullVO"></a>
<a id="tocSresponseresultboxfullvo"></a>
<a id="tocsresponseresultboxfullvo"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "fullFood": 0,
    "fullOther": 0,
    "timestamp": 0
  }
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|msg|string|false|none|none|
|data|[BoxFullVO](#schemaboxfullvo)|false|none|垃圾暂存箱当前存放容量|

<h2 id="tocS_TodayRecord">TodayRecord</h2>

<a id="schematodayrecord"></a>
<a id="schema_TodayRecord"></a>
<a id="tocStodayrecord"></a>
<a id="tocstodayrecord"></a>

```json
{
  "cabinet": 0,
  "box": 0
}

```

今日垃圾投放次数

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|cabinet|integer(int32)|false|none|智能柜投放次数|
|box|integer(int32)|false|none|暂存箱投放次数|

