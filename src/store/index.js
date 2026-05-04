import Vue from 'vue'
import Vuex from 'vuex'

// 將 Vuex 資料存 localstorage
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
// Vuex 可以儲存網頁的狀態，讓元件間的資料共享更方便

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
      role: -1, // 一般訪客 -1 / 一般會員 0 / 管理者 1
      account: '',
      name: '',
      avatar: '',
      isSpecial: false // 特殊作者標記 (Demo 用)
      // email: ''
    },
    specialArticles: [] // 儲存特殊作者的本地文章 (Demo 用)
    // tempCardShow: 0
  },
  // 修改狀態的 function
  // 呼叫 mutations this.$store.commit('', )
  mutations: {
    signIn (state, data) {
      state.jwt.token = data.token
      state.jwt.received = new Date().getTime()
      state.user.account = data.account
      state.user.role = data.role
      state.user.name = data.name
      state.user.avatar = data.avatar
      state.user.isSpecial = data.isSpecial || false
    },
    signOut (state) {
      // 登出把 vuex 清空
      state.jwt.token = ''
      state.jwt.received = 0
      state.user.account = ''
      state.user.role = -1
      state.user.name = ''
      state.user.avatar = ''
      state.user.isSpecial = false
    },
    extend (state, data) {
      // 更新 jwt
      state.jwt.token = data
      state.jwt.received = new Date().getTime()
    },
    getInfo (state, data) {
      // 進入網頁時重新取一次使用者資料
      state.user.account = data.account
      state.user.role = data.role
      state.user.name = data.name
      state.user.avatar = data.avatar
      state.user.isSpecial = data.isSpecial || false
    },
    // Demo 用：儲存特殊文章到本地
    saveSpecialArticle (state, article) {
      state.specialArticles.push({
        ...article,
        _id: Date.now().toString(),
        date: new Date().getTime()
      })
    }
    // tempShow (state, data) {
    //   state.tempCardShow = data
    // }
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
        isSignIn: state.jwt.token.length > 0,
        isAdmin: state.user.role === 1,
        isSpecial: state.user.isSpecial,
        ...state.user
      }
      // ...state.user 其餘運算子 將 state: {user} 展開
    },
    specialArticles (state) {
      return state.specialArticles
    }
  },
  // 將 Vuex 資料存 localstorage
  plugins: [
    createPersistedState({
      // paths: ['jwt'] // 可以指定 Vuex 存 localstorage 只存 jwt
      key: 'DTNS'
    })
  ]
})
