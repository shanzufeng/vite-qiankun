<template>
  <div class="head">首页</div>
  <div>当前位置{{ x }}, {{ y }}</div>
  <el-button @click="changeRouter">切换主应用</el-button>
  <zujian />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue'
import { useMouse } from '@vueuse/core'
import dayjs from 'dayjs'
import aaa from 'common'

const {
  vueComponents: { test }
} = aaa

export default defineComponent({
  name: 'Home',
  components: {
    zujian: test
  },
  setup() {
    const { proxy }: any = getCurrentInstance() //关键代码
    console.log('我是从组件里面来的' + dayjs().format())
    console.log('我是公共组件来的2222' + JSON.stringify(aaa))
    console.log(aaa)
    const { x, y } = useMouse()

    // 改变路由
    const changeRouter = () => {
      history.pushState(null, '/child2', '/child2')
      // proxy.$setGlobalState &&
      //   proxy.$setGlobalState({
      //     // 更改全局属性
      //     user: { current: 'main' }
      //   })
    }

    return {
      x,
      y,
      changeRouter
    }
  }
})
</script>

<style lang="scss">
.head {
  color: red;
}
</style>
