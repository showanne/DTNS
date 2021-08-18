<template>
  <div id="app">
    <div id="nav" class="page-container" nav-pills-icons>
      <md-app md-waterfall md-mode="fixed">

        <!-- 上方列 toolbar -->
        <md-app-toolbar class="md-accent md-layout md-alignment-center-space-between">
          <div class="md-layout-item md-large-size-15 md-medium-size-25 md-small-50">
            <md-button class="md-menu-button w-unset"
              @click="toggleMenu" v-if="!menuVisible">
              <md-icon :md-src="require('./assets/icon/menu.svg')"></md-icon>
            </md-button>
          </div>

          <div class="md-layout-item md-large-size-15 md-medium-size-20 md-small-size-30">
            <div class="md-layout md-alignment-center-right">
              <md-field class="md-layout-item md-size-50 md-xsmall-hide">
                <label>Search...</label>
                <md-input v-model="search"></md-input>
              </md-field>

              <!-- mode toggle -->
              <div id="modeToggle" class="md-layout-item md-size-50">
                <input type="checkbox" v-model="toggleDark" id="toggleDark"/>
                <label for="toggleDark"></label>
                <!-- <span>{{ toggleDark }}</span> -->
              </div>
            </div>
          </div>
        </md-app-toolbar>

        <!-- 側邊欄 drawer -->
        <md-app-drawer :md-active.sync="menuVisible"
          md-permanent="full" class="md-layout">
          <!-- :md-permanent="permanent"
          :md-persistent="persistent" -->
        <!-- <md-app-drawer :md-active.sync="menuVisible" md-permanent="full" md-persistent="mini"> -->

          <md-list class="mb-auto">
            <md-list-item to="/">
              <h3 class="md-title lh-5 fw-bold">DTNS</h3>
              <!-- TODO: 按鈕用釘選的 -->
              <md-button class="md-menu-button md-dense w-unset h-unset"
               v-if="menuVisible" @click="toggleMenu">
                <md-icon>keyboard_arrow_left</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item v-for="(menu, m) in menuList" :key="m"
             :to="'/'+menu.subhead">
              <md-icon
                :md-src="require('./assets/icon/menu-'+menu.subhead+'.svg')"
              ></md-icon>
              <span class="md-list-item-text">{{ menu.name }}</span>
            </md-list-item>

            <!-- setting to="/setting" -->
            <md-list-item @click="settingTooltip = !settingTooltip">
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
            </md-list-item>

            <!-- member -->
            <md-list-item v-if="user.isSignIn && !user.isAdmin" to="/member">
              <md-icon
                :md-src="require('./assets/icon/menu-Member.svg')"
              ></md-icon>
              <span class="md-list-item-text">會員中心</span>
            </md-list-item>

            <!-- manage -->
            <md-list-item v-if="user.isSignIn && user.isAdmin" to="/manage">
              <md-icon
                :md-src="require('./assets/icon/menu-Manage.svg')"
              ></md-icon>
              <span class="md-list-item-text">管理中心</span>
            </md-list-item>

            <!-- Sign Up -->
            <md-list-item v-if="!user.isSignIn">
              <md-button @click="signUpBtn = true"
                class="md-raised">
                <div class="md-layout md-alignment-center-space-around w-signBtn">
                <md-icon :md-src="require('./assets/icon/signUp.svg')"></md-icon>
                Sign Up
                </div>
              </md-button>

              <md-dialog :md-active.sync="signUpBtn">
                <md-dialog-content class="md-layout md-alignment-center-center">
                  <md-button @click="signForLine" class="h-unset">
                    <md-icon :md-src="require('./assets/icon/line-logo.svg')" class="md-size-5x"></md-icon>
                    <span> 快速註冊 </span>
                  </md-button>
                </md-dialog-content>
              </md-dialog>
            </md-list-item>

            <!-- Sign In -->
            <md-list-item v-if="!user.isSignIn">
              <md-button @click="signInBtn = true"
              class="md-raised">
              <div class="md-layout md-alignment-center-space-around w-signBtn">
                <md-icon :md-src="require('./assets/icon/signIn.svg')"></md-icon>
                Sign In
              </div>
              </md-button>
              <SignModal
                v-if="signInBtn"
                :signBtn="signInBtn"
                @closeModal="signInBtn = false"
                ><!-- capturing event close-context -->
                <span slot="title">Sign In</span>
              </SignModal>
            </md-list-item>

            <!-- Sign out -->
            <md-list-item v-if="user.isSignIn">
              <md-button @click="signOutBtn"
                class="md-raised">
                <div class="md-layout md-alignment-center-space-around w-signBtn">
                <md-icon :md-src="require('./assets/icon/signOut.svg')"></md-icon>
                Sign out
                </div>
              </md-button>
            </md-list-item>

          </md-list>

          <div class="mt-auto mx-auto">
            <!-- mode toggle -->
              <div id="modeToggle">
                <input type="checkbox" v-model="toggleDark" id="toggleDark"/>
                <label for="toggleDark"></label>
                <!-- <span>{{ toggleDark }}</span> -->
              </div>

            <!-- 個人連結 &copy;  -->
            <!-- <md-button> -->
              <a href="https://showanne.github.io/"
              class="td-none lh-5">
                <div class="md-layout md-alignment-center-center">
                  <md-icon :md-src="require('./assets/icon/icon-github.svg')"></md-icon>
                  Anne.
                </div>
              </a>
            <!-- </md-button> -->
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

export default {
  data () {
    return {
      search: '',
      menuVisible: false,
      toggleDark: '',
      permanent: '',
      persistent: '',
      settingTooltip: false,
      signUpBtn: false,
      signInBtn: false,
      // alert 訊息控制 false 是不跳 alert
      signOutMsg: false
    }
  },
  components: {
    SignModal
  },
  methods: {
    async signOutBtn () {
      try {
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
    screenWidth () {
      addEventListener('resize', () => {
        const clientWidth = document.body.clientWidth
        console.log(clientWidth)
        // TODO: 根據螢幕大小去調整 md-permanent="full" md-persistent="mini" 的值 及 menuVisible 的開關
        // 當螢幕 ... 時
        if (clientWidth > 900) {
          this.menuVisible = true
          // > 900 md-permanent="full"
          this.permanent = 'full'
          this.persistent = null
          // console.log(this.permanent, this.persistent)
        } else if (clientWidth > 600 && clientWidth < 900) {
          this.menuVisible = !this.menuVisible
          //  < 900 md-permanent="full" md-persistent="mini"
          this.permanent = 'full'
          this.persistent = 'mini'
          // console.log(this.permanent, this.persistent)
        } else {
          this.menuVisible = !this.menuVisible
          //  < 600 md-persistent="full"
          this.permanent = null
          this.persistent = 'full'
          // console.log(this.permanent, this.persistent)
        }
      })
    }
  },
  created () {
    const jwt = this.$route.query.jwt
    // console.log(jwt)
    if (jwt) {
      // this.$store.commit('signIn', jwt)
      // const query = this.$route.query
      // delete query.jwt
      // 把網址列的 jwt 清掉
      // this.$router.replace({ query: {} })
      this.axios.get('/users/signInLineData', {
        headers: {
          authorization: 'Bearer ' + jwt
        }
      }).then(res => {
        // console.log(res)
        this.$store.commit('signIn', res.data)
        // 登入成功後導向會員中心 / 網址列的 jwt 清不掉用跳轉到會員頁代替
        this.$router.push('/member')
      }).catch((error) => {
        console.log(error)
        this.$store.commit('signOut')
      })
    }
  },
  mounted () {
    console.log(document.body.clientWidth)
    // console.log(this.user)
    // console.log(this.user.isSignIn)
  }
}
</script>
