<script setup lang="ts">
import { computed } from 'vue'
import store from '@/qiankunConfig/store'

const user = computed(() => store.getGlobalState('user'))
</script>

<template>
  <div>我是主应用的头部, 看看下面我的状态, 是不是</div>
  <div>{{ user.name }}</div>
  <!-- 可以放到这里,也可以放到对应子路由的页面里面位置不重要 -->
  <div id="child-viewport"></div>
  <router-view></router-view>
</template>

<style scoped>
#child-viewport {
  border: 1px solid red;
}
</style>
