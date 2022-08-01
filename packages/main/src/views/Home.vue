<template>
  <el-row>
    <el-col :sm="12" :lg="6">
      <el-result icon="success" title="项目一" sub-title="这里是对项目的描述">
        <template #extra>
          <el-button type="primary" @click="handerGo('/child1')">进入</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="success" title="项目二" sub-title="这里是对项目的描述">
        <template #extra>
          <el-button type="primary" @click="handerGo('/child2')">进入</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="success" title="项目三" sub-title="这里是对项目的描述">
        <template #extra>
          <el-button type="primary">进入</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="success" title="项目四">
        <template #sub-title>
          <p>这里是对项目的描述</p>
        </template>
        <template #extra>
          <el-button type="primary">进入</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store: any = useStore()
const user = computed(() => store.state.user)
const handerGo = (name: string) => {
  store.commit('setCurrent', 'child')
  history.pushState(null, name, name)
}
</script>
