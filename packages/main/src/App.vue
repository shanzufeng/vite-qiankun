<template>
  <!-- 可以放到这里,也可以放到对应子路由的页面里面位置不重要 -->
  <!--<div id="child-viewport" v-show="user.current === 'child'"></div>-->
  <!--<router-view v-if="user.current === 'main'"></router-view>-->
  <div id="child-viewport" v-show="!isSHow"></div>
  <router-view v-show="isSHow"></router-view>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, unref } from 'vue'
const store: any = useStore()
const user = computed(() => store.state.user)

const isSHow = computed(() => unref(user).current === 'main')
console.log(isSHow)
</script>
