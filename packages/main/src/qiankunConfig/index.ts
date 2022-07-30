import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'
import { defaultActiveUrl } from '@/constants/qiankun'

const fun = (instance: any) => {
  // 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
  function loader(loading: boolean) {
    if (instance.isLoading) {
      instance.isLoading = loading
    }
  }
  // 给子应用配置加上loader方法
  const apps = microApps.map((item) => {
    return {
      ...item,
      loader
    }
  })
  registerMicroApps(apps, {
    beforeLoad: (app: any) => {
      console.log('子应用开始加载，子应用名称', app.name)
    },
    beforeMount: [
      (app: any) => {
        console.log('子应用开始挂载dom', app.name)
      }
    ],
    afterMount: [
      (app: any) => {
        console.log('子应用dom挂载完毕', app.name)
      }
    ],
    afterUnmount: [
      (app: any) => {
        console.log('子应用销毁', app.name)
      }
    ]
  } as any)
  setDefaultMountApp('/child2')
  start()
}

export default fun
