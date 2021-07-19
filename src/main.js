import Vue from 'vue'
// VueMaterial UI
import VueMaterial from 'vue-material'
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
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
// Vue.use(MdContent)
// Vue.use(MdTabs)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
