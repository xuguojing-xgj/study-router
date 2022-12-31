import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入
import router from './router'
// 注册使用
createApp(App).use(router).mount('#app')
