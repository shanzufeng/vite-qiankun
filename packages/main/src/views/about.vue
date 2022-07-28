<template>
  <div ref="page">关于页面 {{ count }}</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useEventListener } from '@/hooks/useEventListener'
import { ElMessageBox } from 'element-plus'

export default defineComponent({
  name: 'about',
  components: {},
  setup() {
    const store = useStore()
    const page = ref(null)
    const { proxy }: any = getCurrentInstance() //关键代码
    useEventListener({
      el: page,
      name: 'dblclick',
      listener: () => {
        ElMessageBox.confirm('你双击了1')
          .then(() => {
            console.log(3)
          })
          .catch(() => {
            console.log(2)
          })
      }
    })
    proxy.$axios
      .get('/users/XPoet')
      .then((res: any) => {
        console.log('res: ', res)
      })
      .catch((err: any) => {
        console.log('err: ', err)
      })

    return {
      page,
      count: computed(() => store.state.count)
    }
  }
})
</script>
