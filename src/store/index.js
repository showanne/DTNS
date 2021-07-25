import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 後端傳回的資料紀錄
    jwt: {
      // 後端傳回的 token 存在這兒
      token: '',
      // 時間戳記 - 計算取得 token 的時間
      received: 0
    },
    user: {
      account: '',
      role: 0,
      email: ''
    }
  },
  mutations: {
    signIn (state, data) {
      state.jwt.token = data.token
      state.jwt.received = new Date().getTime()
      state.user.account = data.account
      state.user.role = data.role
      state.user.email = data.email
    }
  },
  actions: {
  },
  modules: {
  }
})
