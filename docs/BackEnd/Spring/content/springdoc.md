> 官网 https://springdoc.org/
### 注释替换
|      swagger2      |                            OpenAPI 3                            |             注解位置             |
|--------------------|-----------------------------------------------------------------|------------------------------|
|        @Api        |                      @Tag(name = “接口类描述”)                       |        Controller 类上         |
|   @ApiOperation    |                  @Operation(summary =“接口方法描述”)                  |        Controller 方法上        |
| @ApiImplicitParams |                           @Parameters                           |        Controller 方法上        |
| @ApiImplicitParam  |                 @Parameter(description=“参数描述”)                  | Controller 方法上 @Parameters 里 |
|     @ApiParam      |                 @Parameter(description=“参数描述”)                  |      Controller 方法的参数上       |
|     @ApiIgnore     | @Parameter(hidden = true) 或 @Operation(hidden = true) 或 @Hidden |              -               |
|     @ApiModel      |                             @Schema                             |            DTO类上             |
| @ApiModelProperty  |                             @Schema                             |            DTO属性上            |
### Controller样例
```java
package cn.lixuelong.hs.api;

import cn.lixuelong.hs.domain.Hs;
import cn.lixuelong.hs.domain.HsType;
import cn.lixuelong.hs.service.HsService;
import cn.lixuelong.hs.service.HsTypeService;
import com.alibaba.fastjson.JSONObject;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;

@Tag(name = "操作接口", description = "操作描述")
@RestController
@RequestMapping("hs")
public class HsApi {

    @Resource
    private HsService hsService;

    @Resource
    private HsTypeService hsTypeService;

    @Operation(summary = "添加", description = "添加描述")
    @Parameters({
            @Parameter(name = "name", description = "名字", required = true),
            @Parameter(name = "typeId", description = "类型ID", required = true)
    })
    @PutMapping("add")
    public JSONObject add(String name, Long typeId) {
        HsType hsType = hsTypeService.findById(typeId);
        Hs hs = new Hs();
        hs.setName(name);
        hs.setType(hsType);
        hs.setDateCreated(new Date());
        hs = hsService.save(hs);
        return JSONObject.parseObject(JSONObject.toJSONString(hs));
    }

    @Operation(summary = "获取")
    @GetMapping("get")
    public JSONObject get(@Parameter(name = "id", description = "数据ID") Long id) {
        Hs hs = hsService.findById(id);
        return JSONObject.parseObject(JSONObject.toJSONString(hs));
    }
}

```
### 开关
```yml
springdoc:
	swagger-ui:
		enabled: false
```