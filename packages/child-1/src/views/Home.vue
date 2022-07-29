<template>
  <div class="head">首页</div>
  <div>当前位置{{ x }}, {{ y }}11</div>
  <zujian />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
    const optionsRef = ref<LabelValueOptions>([{ label: 'aa', value: 'aa' }])
    console.log('我是从组件里面来的' + dayjs().format())
    console.log('我是公共组件来的2222' + JSON.stringify(aaa))
    console.log(aaa)
    const { x, y } = useMouse()
    return {
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
