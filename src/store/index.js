import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 狀態
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
      role: 0, // 一般會員 0 / 管理者 1
      email: ''
    }
  },
  // 修改狀態的 function
  // 呼叫 mutations this.$store.commit('', )
  mutations: {
    signIn (state, data) {
      state.jwt.token = data.token
      state.jwt.received = new Date().getTime()
      state.user.account = data.account
      state.user.role = data.role
      state.user.email = data.email
    }
  },
  // 修改狀態的 function，支援 async
  // 呼叫 actions this.$store.dispatch('', )
  actions: {
  },
  // 將 Vuex 模組化分割
  modules: {
  },
  // 獲取資料的 function
  // 使用 getter 取得狀態 this.$store.getters.xx
  // 使用 getter 取得狀態，傳資料進 function this.$store.getters.xxx()
  getters: {
    user (state) {
      return {
        isSignIn: state.user.account.length > 0,
        isAdmin: state.user.role === 1,
        ...state.user
      }
      // ...state.user 其餘運算子 將 state: {user} 展開
    }
  }
})
