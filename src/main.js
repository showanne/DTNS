import Vue from 'vue'
// VueMaterial UI
import VueMaterial from 'vue-material'
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// style
import './style/style.scss'
import './style/all.scss'
// vue-material variables
// import './style/variables.scss'

// material icon
// import MenuIcon from 'vue-material-design-icons/Menu.vue'
// Vue.component('menu-icon', MenuIcon)

// VueMaterial UI
Vue.use(VueMaterial)
// Vue.use(MdButton)

// 要注意有多個請求 api 不能寫 baseURL
// 使用 baseURL 的方便之處在於 文件內有用到 axios 需要網址的地方可直接省略
axios.defaults.baseURL = process.env.VUE_APP_API
Vue.use(VueAxios, axios)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
