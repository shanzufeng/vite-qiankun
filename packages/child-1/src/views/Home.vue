<template>
  <div class="head">首页</div>
  <div>当前位置{{ x }}, {{ y }}11</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMouse } from '@vueuse/core'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const optionsRef = ref<LabelValueOptions>([{ label: 'aa', value: 'aa' }])
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
