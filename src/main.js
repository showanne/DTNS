import Vue from 'vue'
// VueMaterial UI
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import './style/style.scss' // vue-material theme

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// vue-carousel 輪播套件
// import VueCarousel from 'vue-carousel'
// vue-masonry 瀑布流套件 ->解決 card 排版問題
import { VueMasonryPlugin } from 'vue-masonry'
// vue-img-inputer 圖片上傳套件
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
// vue-easytable 表格套件
import 'vue-easytable/libs/theme-default/index.css'
import VueEasytable from 'vue-easytable'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// vue-material variables
import './style/_variables.scss'
// style
import './style/all.scss'
// import './style/style-custom.css'

// 全域引用 mixin
import mixin from './mixin.js'

// 要注意有多個請求 api 不能寫 baseURL
// 使用 baseURL 的方便之處在於 文件內有用到 axios 需要網址的地方可直接省略
axios.defaults.baseURL = process.env.VUE_APP_API

// VueMaterial UI
Vue.use(VueMaterial)
Vue.use(VueAxios, axios)
// Vue.use(VueCarousel)
Vue.use(VueMasonryPlugin)
Vue.component('ImgInputer', ImgInputer)
Vue.use(VueEasytable)

// 全域引用 mixin 方便各分頁直接用變數
Vue.mixin(mixin)

// google analytics 評估 ID
Vue.use(VueGtag, {
  config: { id: 'G-LZVEQGZREJ' }
})

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
