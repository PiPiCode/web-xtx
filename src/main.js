import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
//导入 自己的 UI 组件库
import UI from '@components/library'
// 1.重置样式库
import 'normalize.css'
// 2.自己项目的重置样式和公用样式
import '@/assets/styles/common.less'

createApp(App).use(store).use(router).use(UI).mount('#app')
