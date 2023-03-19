import { createApp } from 'vue'
import App from './App.vue'

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

// import './service/axios_demo'

import WjwRequest from './service'

import router from './router'
import store from './store'

const app = createApp(App)

WjwRequest.request({
  url: 'home/multidata',
  method: 'GET'
}).then((res) => {
  console.log(res)
})

app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')
