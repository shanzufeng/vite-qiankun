import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import App from './App.vue'
import store from './store'
import { router, createRouterFun, destroyRouterFun } from './router'
import axios from './request'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let instance: any = null

function render(props: any = {}) {
  const { container } = props
  //   console.log(history,qiankunWindow.__POWERED_BY_QIANKUN__ ,"history");
  createRouterFun()
  instance = createApp(App)
  instance.use(router)
  instance.use(store)
  instance.use(ElementPlus)

  instance.mount(container ? container.querySelector('#app') : document.getElementById('app'))

  instance.config.globalProperties.$axios = axios

  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行')
  }
}

renderWithQiankun({
  mount(props: any) {
    console.log('child1挂载dom结束')
    render(props)
    instance.config.globalProperties.$setGlobalState = props.setGlobalState
  },
  bootstrap() {
    console.log('child1开始挂载dom')
  },
  unmount(props: any) {
    console.log(props)
    console.log('vite被卸载了')
    instance.unmount()
    instance._container.innerHTML = ''
    destroyRouterFun() // 销毁路由
    instance = null
  }
} as any)

// 作为单独项目运行的环境
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
