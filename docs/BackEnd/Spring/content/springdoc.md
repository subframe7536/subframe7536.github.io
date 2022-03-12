> 官网 https://springdoc.org/

### 注释替换

| swagger2           | OpenAPI 3                                                         | 注解位置                         |
| ------------------ | ----------------------------------------------------------------- | -------------------------------- |
| @Api               | @Tag(name = "接口类描述")                                         | Controller 类上                  |
| @ApiOperation      | @Operation(summary ="接口方法描述")                               | Controller 方法上                |
| @ApiImplicitParams | @Parameters                                                       | Controller 方法上                |
| @ApiImplicitParam  | @Parameter(description="参数描述")                                | Controller 方法上 @Parameters 里 |
| @ApiParam          | @Parameter(description="参数描述")                                | Controller 方法的参数上          |
| @ApiIgnore         | @Parameter(hidden = true) 或 @Operation(hidden = true) 或 @Hidden | -                                |
| @ApiModel          | @Schema                                                           | DTO类上                          |
| @ApiModelProperty  | @Schema                                                           | DTO属性上                        |

#todo 
### Controller样例
```java
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.ecycle.common.utils.ResponseResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author subframe7536
 */
@Tag(name = "hello", description = "test")
@RestController
public class HelloController {

    @Operation(summary = "test", description = "test")
    @GetMapping("/test")
    public ResponseResult<String> test() {
        return new ResponseResult<>(200, "hello");
    }

}

```
### Entity 样例
```java
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

/**
 * @author subframe7536
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Schema(description = "手机号登录用户")
public class PhoneLoginVo implements Serializable {

    @Schema(description = "手机号",type = "String")
    public String phone;
}
```
### 开关
```yml
springdoc:
	swagger-ui:
		enabled: false
```

### Nginx反向代理**
```nginx
location ~* ^(/swagger-ui|/v3){
    proxy_set_header Host $host;
    proxy_set_header  X-Real-IP  $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
	proxy_set_header Host $host:$server_port;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Port $server_port;
    proxy_pass http://127.0.0.1:9011; # 后端服务地址
}
```