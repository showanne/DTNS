<template>
  <div id="app">
    <div id="nav" class="page-container" nav-pills-icons>
      <md-app md-waterfall md-mode="fixed">

        <!-- 上方列 toolbar -->
        <md-app-toolbar class="btn-menu md-primary md-layout md-alignment-center-space-between">
          <div class="md-layout-item">
            <md-button class="md-menu-button w-unset"
              @click="toggleMenu" v-if="!menuVisible">
              <md-icon :md-src="require('./assets/icon/menu.svg')"></md-icon>
            </md-button>

            <md-button class="w-unset"
              v-if="!user.isSignIn"
              @click="signForLine">
              <md-icon class="iconFill" :md-src="require('./assets/icon/signUp.svg')"></md-icon>
            </md-button>
          </div>

          <h1 class="md-layout-item text-dtns">DTNS</h1>

          <!-- mode toggle -->
          <div class="modeToggle md-layout-item">
            <input type="checkbox" id="toggleDark"
              v-model="toggleDark" @click="toggleMode"/>
            <label for="toggleDark"></label>
            <!-- <span>{{ toggleDark }}</span> -->
          </div>
        </md-app-toolbar>

        <!-- 側邊欄 drawer -->
        <md-app-drawer :md-active.sync="menuVisible"
          md-permanent="full" class="md-accent bg-dark3 md-layout">
          <!-- :md-permanent="permanent"
          :md-persistent="persistent" -->
        <!-- <md-app-drawer :md-active.sync="menuVisible" md-permanent="full" md-persistent="mini"> -->

          <md-list :md-expand-single="expandSingle"
            class="mb-auto bg-dark3 tc-light1">

            <md-list-item to="/">
              <h1 class="text-dtns">DTNS</h1>
            </md-list-item>
            <md-button class="btn-toggleMenu md-menu-button md-dense w-unset h-unset"
              v-if="menuVisible" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>

            <md-list-item v-for="(menu, m) in menuList" :key="m"
             :to="'/'+menu.subhead" @click="toggleMenu">
              <md-icon
                :md-src="require('./assets/icon/menu-'+menu.subhead+'.svg')"
              ></md-icon>
              <span class="menuText md-list-item-text">{{ menu.name }}</span>
              <md-tooltip class="menuTooltip"
                v-if="fullWidth >= 600 || fullWidth <= 900"
                md-direction="right">
                {{ menu.name }}</md-tooltip>
            </md-list-item>

            <!-- setting to="/setting" -->
            <!-- <md-list-item @click="settingTooltip = !settingTooltip">
              <md-icon
                :md-src="require('./assets/icon/menu-Setting.svg')"
              ></md-icon>
              <span class="md-list-item-text">設定</span>

              <md-tooltip class="settingTooltip md-layout md-alignment-center-center"
                md-delay="300"
                md-direction="right"
                :md-active.sync="settingTooltip">
                  <div class="md-layout-item md-size-100">
                    <div class="md-layout">
                      <md-button class="md-layout-item h-unset w-unset">
                        <md-icon class="md-size-2x"
                          :md-src="require('@/assets/icon/fontZoomIn.svg')"
                        ></md-icon>
                      </md-button>
                      <md-button class="md-layout-item h-unset w-unset">
                        <md-icon class="md-size-2x"
                          :md-src="require('@/assets/icon/fontOrign.svg')"
                        ></md-icon>
                      </md-button>
                      <md-button class="md-layout-item h-unset w-unset">
                        <md-icon class="md-size-2x"
                          :md-src="require('@/assets/icon/fontZoomOut.svg')"
                        ></md-icon>
                      </md-button>
                    </div>
                  </div>
                  <div class="md-layout-item md-size-100">
                    <div class="md-layout">
                    <md-icon class="md-layout-item md-size-2x">brightness_4</md-icon>
                    <md-icon class="md-layout-item md-size-2x">brightness_5</md-icon>
                    </div>
                  </div>
              </md-tooltip>
            </md-list-item> -->

            <!-- member -->
            <md-list-item v-if="user.isSignIn"
              md-expand :md-expanded.sync="expandMember">
              <md-icon
                :md-src="require('./assets/icon/menu-Member.svg')"
              ></md-icon>
              <span class="menuText menuMember md-list-item-text">會員中心</span>
              <md-tooltip class="menuTooltip"
                v-if="fullWidth >= 600"
                md-direction="right">
                會員中心</md-tooltip>

              <md-list slot="md-expand" class="bg-dark3">
                <!-- 會員資訊 -->
                <md-list-item>
                  <md-avatar class="md-elevation-3">
                    <img :src="avatarImg" :alt="userName">
                  </md-avatar>

                  <span class="menuText md-body-2">{{ userName }}</span>
                </md-list-item>

                <!-- 會員可用功能選單 -->
                <!-- <md-list-item to="/member/memberAnalytics">
                  <md-icon>analytics</md-icon>
                  <span class="md-list-item-text">Analytics</span>
                </md-list-item> -->

                <md-list-item to="/member/memberArticle"
                  class="menuMember-item" @click="toggleMenu">
                  <md-icon>feed</md-icon>
                  <span class="menuText md-list-item-text">文章總覽</span>
                  <md-tooltip class="menuTooltip"
                    v-if="fullWidth >= 600"
                    md-direction="right">
                    文章總覽</md-tooltip>
                </md-list-item>

                <!-- <md-list-item to="/member/memberProfile">
                  <md-icon>perm_contact_calendar</md-icon>
                  <span class="md-list-item-text">Profile</span>
                </md-list-item> -->

                <md-list-item to="/member/memberReply"
                  class="menuMember-item" @click="toggleMenu">
                  <md-icon>3p</md-icon>
                  <span class="menuText md-list-item-text">問題回報</span>
                  <md-tooltip class="menuTooltip"
                    v-if="fullWidth >= 600"
                    md-direction="right">
                    問題回報</md-tooltip>
                </md-list-item>
              </md-list>
            </md-list-item>

            <!-- manage -->
            <md-list-item v-if="user.isSignIn && user.isAdmin" to="/manage" @click="toggleMenu">
              <md-icon
                :md-src="require('./assets/icon/menu-Manage.svg')"
              ></md-icon>
              <span class="menuText md-list-item-text">管理中心</span>
              <md-tooltip class="menuTooltip"
                v-if="fullWidth >= 600 || fullWidth <= 900"
                md-direction="right">
                管理中心</md-tooltip>

            </md-list-item>

            <!-- Sign Up -->
            <md-list-item v-if="!user.isSignIn"
              @click="signUpBtn = true">
                <md-icon class="iconFill" :md-src="require('./assets/icon/signUp.svg')"></md-icon>
                <span class="menuText md-list-item-text">註冊</span>
                <md-tooltip class="menuTooltip"
                  v-if="fullWidth >= 600 || fullWidth <= 900"
                  md-direction="right">
                  註冊</md-tooltip>

              <md-dialog :md-active.sync="signUpBtn">
                <md-dialog-content class="md-layout md-alignment-center-center">
                  <md-button class="closeBtn w-unset h-unset md-primary"
                    @click="signUpBtn = false">
                    <md-icon>close</md-icon>
                  </md-button>
                  <md-button @click="signForLine" class="h-unset">
                    <md-icon :md-src="require('./assets/icon/line-logo.svg')" class="md-size-5x"></md-icon>
                    <span> 快速註冊 </span>
                  </md-button>
                </md-dialog-content>
              </md-dialog>
            </md-list-item>

            <!-- Sign In -->
            <md-list-item v-if="!user.isSignIn"
              @click="signInBtn = true">
              <md-icon class="iconFill" :md-src="require('./assets/icon/signIn.svg')"></md-icon>
              <span class="menuText md-list-item-text">登入</span>
              <md-tooltip class="menuTooltip"
                v-if="fullWidth >= 600 || fullWidth <= 900"
                md-direction="right">
                登入</md-tooltip>

              <SignModal
                v-if="signInBtn"
                :signBtn="signInBtn"
                @closeModal="signInBtn = false"
                >
              </SignModal>
            </md-list-item>

            <!-- Sign out -->
            <md-list-item v-if="user.isSignIn"
              @click="signOutBtn">
              <md-icon class="iconFill" :md-src="require('./assets/icon/signOut.svg')"></md-icon>
              <span class="menuText md-list-item-text">登出</span>
              <md-tooltip class="menuTooltip"
                v-if="fullWidth >= 600 || fullWidth <= 900"
                md-direction="right">
                登出</md-tooltip>
            </md-list-item>

          </md-list>

          <div class="mt-auto mx-auto mb-2">
            <!-- mode toggle -->
            <div class="modeToggle md-layout-item mb-2">
              <input type="checkbox" id="toggleDark"
                v-model="toggleDark" @click="toggleMode"/>
              <label for="toggleDark"></label>
              <!-- <span>{{ toggleDark }}</span> -->
            </div>

            <!-- 個人連結 &copy; -->
            <a href="https://showanne.github.io/"
               class="text-Anne">
                <md-icon :md-src="require('./assets/icon/icon-github.svg')"
                  class="d-inline-block"></md-icon>
                <span> Anne.</span>
            </a>
            <div class="md-caption tc-light3">&copy; {{ copyright }} Anne.</div>
          </div>
        </md-app-drawer>

        <!-- Sign out alert 錯誤訊息 -->
        <md-dialog-alert
          :md-active.sync="signOutMsg"
          md-title="ERROR"
          md-content="發生錯誤" />

        <!-- 內容 content -->
        <md-app-content class="h-content">
          <router-view />
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
// components元件
import SignModal from '@/components/SignModal.vue'
// vue-easytable 表格 切換黑暗模式 JS
import ThemeSwitchMixins from './theme-switch-mixins.js'

export default {
  mixins: [ThemeSwitchMixins],
  data () {
    return {
      search: '',
      menuVisible: false,
      toggleDark: false,
      expandSingle: false,
      expandMember: false,
      // settingTooltip: false,
      signUpBtn: false,
      signInBtn: false,
      // alert 訊息控制 false 是不跳 alert
      signOutMsg: false,
      // copyright 自動依照當年度年份顯示
      copyright: new Date().getFullYear(),
      fullWidth: 0
      // fullHeight: 0
    }
  },
  components: {
    SignModal
  },
  methods: {
    async signOutBtn () {
      try {
        //  登出 / signOut
        await this.axios.delete('/users/signOut', {
          headers: {
            // 驗證欄位 'Bearer ' + token  -> Bearer要空格
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('signOut')
        // (如果登出時不在首頁) 登出後導向首頁
        if (this.$route.path !== '/') this.$router.push('/')
        // $route 是取路由資訊 / $router 是對路由做修改的 function
      } catch (error) {
        this.signOutMsg = true
      }
    },
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    },
    toggleMode () {
      if (this.toggleDark) {
        this.$material.theming.theme = 'default'
        this.switchThemeMix('theme-default')
      } else {
        this.$material.theming.theme = 'dark'
        this.switchThemeMix('theme-dark')
      }
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     console.log(to, from)
  //   }
  // },
  // computed: {
  //   query () {
  //     return this.$route.query
  //   }
  // },
  // watch: {
  //   query: {
  //     handler (value) {
  //       if (value.jwt) {
  //         console.log(value.jwt)
  //       }
  //     },
  //     deep: true
  //   }
  // },
  created () {
    // console.log('created')
    // console.log(window.location)
    // console.log('search: ' + window.location.search)
    // console.log('href: ' + window.location.href)
    // console.log('href.jwt: ' + window.location.href.jwt)

    if (window.location.href.includes('jwt')) {
      const matches = location.href.match(/jwt=([^.\s]+.[^.\s]+.[^.\s]+)/gm)
      // console.log(matches)
      if (matches.length > 0) {
        // console.log(matches[0])
        // 如果 line 有成功登入，會有 jwt 在網址列，要拿這個 jwt 去換自己的 token
        const jwt = matches[0].substring(4, 176)
        // console.log(jwt)
        if (jwt) {
        // this.$store.commit('signIn', jwt)
        // const query = this.$route.query
        // delete query.jwt
        // 把網址列的 jwt 清掉
        // this.$router.replace({ query: {} })
        // Line登入換資料 / signInLineData
          this.axios.get('/users/signInLineData', {
            headers: {
              authorization: 'Bearer ' + jwt
            }
          }).then(res => {
            // console.log(res)
            this.$store.commit('signIn', res.data)
            // 登入成功後導向會員中心
            this.$router.push('/member/memberArticle').catch(() => {})
            // 清網址列的 jwt
            window.history.pushState('', '', '/DTNS/#/member/memberArticle')
          }).catch((error) => {
            console.log(error)
            this.$store.commit('signOut')
          })
        }
      }
    }
  },
  async mounted () {
    this.fullWidth = window.innerWidth
    // this.fullHeight = window.innerHeight
    window.onresize = () => {
      this.fullWidth = window.innerWidth
    //   this.fullHeight = window.innerHeight
    }
    // console.log(this.fullWidth, this.fullHeight)

    // console.log('mounted')
    // console.log(this.$route)
    // console.log(this.$route.query)
    // console.log(this.$route.query.jwt)

    // 判斷 Vuex 裡有沒有存 jwt ，沒有就不跑接下來的程式
    if (this.$store.state.jwt.token.length === 0) return

    // 檢查上一次收到 jwt 是什麼時候，然後快過期要換新的
    // 計算收到 jwt 的時間 (現在 - 收到的時間)
    const diff = Date.now() - this.$store.state.jwt.received
    try {
      // 如果進入網頁時，距離收到 jwt 過了六天，重新取得一次新的 jwt
      // 現在的時間距離上次收到 jwt 的時間大於 6 天 1000 * 60 * 60 * 24 * 6 = 6 天的毫秒數
      if (diff > 1000 * 60 * 60 * 24 * 6) {
        // 更新 jwt  /  extend
        const { data } = await this.axios.post('/users/extend', {
          headers: {
            // 驗證欄位 'Bearer ' + token  -> Bearer要空格
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('extend', data.result)
      }
      // 進入網頁時重新取一次使用者資料
      // 抓取使用者資料  /  getUserInfo
      const { data } = await this.axios.get('/users/', {
        headers: {
          // 驗證欄位 'Bearer ' + token  -> Bearer要空格
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.$store.commit('getInfo', data.result)
    } catch (error) {
      console.log(error)
      // 如果有錯誤直接登出
      this.$store.commit('signOut')
    }
    // console.log(document.body.clientWidth)
    // console.log(this.user)
    // console.log(this.user.isSignIn)
  }
}
</script>
