import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createVuetify} from 'vuetify'

import '@/assets/style/main.scss'
import '@/assets/icon/iconfont.css'
import '@/assets/style/font.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.css'


import * as components from 'vuetify/lib/components/index'
import * as directives from 'vuetify/lib/directives/index'
import {aliases, mdi} from 'vuetify/lib/iconsets/mdi'
import {fa} from 'vuetify/lib/iconsets/fa'

import '@mdi/font/css/materialdesignicons.css'

// https://materialdesignicons.com/ 图标字体
// https://fontawesome.com/

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
            fa
        }
    },
});

createApp(App).use(store).use(router).use(vuetify).mount('#app')
