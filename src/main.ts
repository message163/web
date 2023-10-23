import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import '@/assets/css/reset.css'
import 'element-plus/dist/index.css'
import '@/theme/element.scss'
import 'uno.css'
// import axios from 'axios'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
// app.use(axios)
app.mount('#app')
