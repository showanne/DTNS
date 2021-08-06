import Vue from 'vue'
// VueMaterial UI
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// vue-material variables
import './style/_variables.scss'
// style
import './style/style.scss'
import './style/all.scss'
import './style/style-custom.css'

// 全域引用 mixin
import mixin from './mixin.js'

// VueMaterial UI
Vue.use(VueMaterial)
// Vue.use(MdButton)

// 要注意有多個請求 api 不能寫 baseURL
// 使用 baseURL 的方便之處在於 文件內有用到 axios 需要網址的地方可直接省略
axios.defaults.baseURL = process.env.VUE_APP_API
Vue.use(VueAxios, axios)
Vue.use(VueCarousel)
Vue.component('ImgInputer', ImgInputer)

// 全域引用 mixin 方便各分頁直接用變數
Vue.mixin(mixin)

Vue.config.productionTip = false

// 隱藏 MdSelect 的 'badInput' 警告
// https://github.com/vuematerial/vue-material/issues/2285
Vue.config.errorHandler = (err, vm, info) => {
  if (process.env.NODE_ENV !== 'production') {
    // Show any error but this one
    if (err.message !== "Cannot read property 'badInput' of undefined") {
      console.error(err)
    }
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
