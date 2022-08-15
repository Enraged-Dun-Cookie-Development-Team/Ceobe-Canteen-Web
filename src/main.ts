import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/style/main.scss'
import '@/assets/icon/iconfont.css'
import '@/assets/style/font.scss'

createApp(App).use(store).use(router).mount('#app')
