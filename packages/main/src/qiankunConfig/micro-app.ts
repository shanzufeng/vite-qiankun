import store from './store'
import { defaultActiveUrl as activeRule, childName, mountElementId } from '@/constants/qiankun'
const microApps = [
  {
    name: childName,
    entry: import.meta.env.VITE_CHILD_ENTRY,
    activeRule
  }
]

const apps = microApps.map((item) => {
  return {
    ...item,
    container: mountElementId, // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
