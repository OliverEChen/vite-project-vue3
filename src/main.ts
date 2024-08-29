// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import 'virtual:svg-icons-register'
//引入自定义插件对象:注册整个项目全局组件
import globalComponent from '@/components'
import '@/styles/index.scss'
import router from '@/router/index'
import pinia from '@/store/index'

const app = createApp(App)

//安装自定义插件
app.use(globalComponent)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
