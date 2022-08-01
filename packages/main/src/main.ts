import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from './request'
import runQianKun from './qiankunConfig'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'nprogress/nprogress.css'

import '@/style/public.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)

const instance = app.mount('#app')

app.config.globalProperties.$axios = axios

runQianKun(instance)
