<template>
  <div class="head">首页</div>
  <div>当前位置{{ x }}, {{ y }}</div>
  <el-button @click="changeRouter">切换到子级</el-button>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from 'vue'
import { useMouse } from '@vueuse/core'
import { useStore } from 'vuex'
import { defaultActiveUrl } from '@/constants/qiankun'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const store: any = useStore()
    const user = computed(() => store.state.user)
    const { x, y } = useMouse()
    // 改变当前项目
    const changeRouter = () => {
      store.commit('setCurrent', unref(user).current === 'main' ? 'child' : 'main')
      goto(defaultActiveUrl)
    }
    const goto = (app: string) => {
      history.pushState(null, app, app)
    }
    return {
      changeRouter,
      x,
      y
    }
  }
})
</script>

<style lang="scss">
.head {
  color: red;
}
</style>
