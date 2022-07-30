<template>
  <!-- 可以放到这里,也可以放到对应子路由的页面里面位置不重要 -->
  <!--<div id="child-viewport" v-show="user.current === 'child'"></div>-->
  <!--<router-view v-if="user.current === 'main'"></router-view>-->
  <div id="child-viewport"></div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
const store: any = useStore()
const user = computed(() => store.state.user)
</script>

<style scoped>
#child-viewport {
  border: 1px solid red;
}
</style>
