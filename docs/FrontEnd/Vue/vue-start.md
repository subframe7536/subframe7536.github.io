# Vue
> a) MVVM的开发模式，从dom中解脱出来，双向数据绑定
> b) 数据更新采用异步事件机制
> c) 采用单向数据流
> d) 组件式开发
> e) 采用虚拟dom
> f) 支持模板和jsx两种开发模式
> g) 可以进行服务端渲染
> h) 扩展性强，既可以向上又可以向下扩展

## 快速开始
### 全局安装  
```shell
npm install –g vue-cli @vue/cli-init
```
### 创建项目  **
#### 使用webpack
```shell
vue init webpack myproject
```
### 安装依赖包  
```shell
npm install
```
## 语法
[vue笔记整理与总结 - SegmentFault 思否](https://segmentfault.com/a/1190000019162582)

## 注意
- 数据加载完再渲染页面，可以用`v-if`，初始为`false`，刷新完改为`true`
	- 或者`watch` #todo 
- `v-for`需要配合`:key`
	- 推荐写法：`v-for="(data,index) in datas" :key="index"`

### props

- type (规定数据类型) 
	- String 字符串
	- Number 数字
	- Boolean 布尔
	- Array 数组 
	- Object 对象
	- Date 日期
	- Function 函数
	- Symbol 独一无二的值(es6)
- default
	- default : (默认值)
	- 基础数据类型: 直接赋值
	- 对象数据类型: 用函数赋值 `()=>[]`
- required
	- required: (必填项)
	- 默认为false,说明父级必须传入,否则会报错
- validator
	- validator: 校验(验证传入的值是否符合规定)
# element-ui
### 样式穿透
像`el-input`无法对内部的`input`修改，通过`::v-deep`或`:(deep)`修改
```scss
.address-input ::v-deep .el-input__inner
```
### 输入框自动补全
`callback`的参数格式必须是包含`value`（读取的是`value`）
```js
{
	value: '',
	infos: ……
}
```
https://blog.csdn.net/webfullstack/article/details/83989895
# pinia 
> replace of `vuex` for vue3
https://pinia.vuejs.org/getting-started.html
https://juejin.cn/post/7049196967770980389
```js
import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! 
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // call other getters with autocompletion 
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```

```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
//usage
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    counter.count++
    // with autocompletion 
    counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    counter.increment()
  },
}
```

# Vue3
https://juejin.cn/post/7028137821269393438

### setup语法糖
https://blog.csdn.net/jiangsheer/article/details/120181520


```js
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### ref 和 reactive
`ref` 一般定义原始数据类型
`reactive` 一般定义对象
#### toRefs
`reactive` 中的属性可以直接访问，但是会拆掉响应式，可以使用`toRefs()`加回来
```js
import { reactive, toRefs } from 'vue'
const book = reactive({
	name: 'test',
	value: '111'
})
const { name, value } = toRefs(book)
```
### setup语法糖添加name
另写一个`<script>`，用普通模式写
```html
<script>
  export default {
    name: 'CustomName',
  }
</script>

<script setup>
  // script setup logic
</script>
```
### 配置路径别名
#### tsconfig.json
```json
"baseUrl": "./",
    "paths": {
	"@/*": ["src/*"]
}
```
#### vite.config.js
```js
import { defineConfig } from "vite";
import { resolve } from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	}
});
```