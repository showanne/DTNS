<template>
  <div id="app">
    <div id="nav" class="page-container" nav-pills-icons>
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-accent md-layout md-alignment-center-space-between">
          <div class="md-layout-item md-large-size-15 md-medium-size-25 md-small-50">
            <md-button class="md-menu-button">
              <md-icon :md-src="require('./assets/icon/menu.svg')"></md-icon>
            </md-button>
            <!-- <md-button class="md-menu-button"
              @click="toggleMenu" v-if="!menuVisible">
              <md-icon>menu</md-icon>
            </md-button> -->
            <!-- <h3 class="md-title">DTNS</h3> md-collapse -->
          </div>
          <div class="md-layout-item md-large-size-70 md-medium-size-60 md-small-50 md-xsmall-hide">
            <!-- <h4 v-if="user.name != ''">HelloN {{ user.name }} ^^</h4>
            <h4 v-else-if="user.name == '' && user.account != ''">HelloA {{ user.account }} ^^</h4>
            <h4 v-else>HelloY <Anonymous style="display: inline-block; font-size: 1.5rem;" /> ^^</h4> -->
          </div>

          <div class="md-layout-item md-large-size-15 md-medium-size-15 md-xsmall-hide">
            <md-field>
              <label>Search...</label>
              <!-- search has-white -->
              <md-input v-model="search"></md-input>
              <!-- <span class="md-helper-text">Helper text</span> -->
            </md-field>
          </div>
        </md-app-toolbar>

        <md-app-drawer md-permanent="full">
          <!-- <md-app-drawer :md-active.sync="menuVisible" md-permanent="full" md-persistent="mini"> -->
          <!-- <md-toolbar class="md-transparent" md-elevation="3" to="/">
            DTNS Logo
            <md-button class="md-menu-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </md-toolbar> -->

          <md-list>
            <md-list-item to="/">
              <h3 class="md-title">DTNS</h3>
              <!-- <img src="./assets/logo.png" alt="logo" width="90"> -->
            </md-list-item>
            <!-- edit -->
            <md-list-item to="/edit">
              <md-icon
                :md-src="require('./assets/icon/menu-Edit.svg')"
              ></md-icon>
              <span class="md-list-item-text">Edit</span>
            </md-list-item>

            <!-- collection -->
            <md-list-item to="/collection">
              <md-icon
                :md-src="require('./assets/icon/menu-Collection.svg')"
              ></md-icon>
              <span class="md-list-item-text">Collection</span>
            </md-list-item>

            <!-- contact -->
            <md-list-item to="/contact">
              <md-icon
                :md-src="require('./assets/icon/menu-Contact.svg')"
              ></md-icon>
              <span class="md-list-item-text">Contact</span>
            </md-list-item>

            <!-- news -->
            <md-list-item to="/news">
              <md-icon
                :md-src="require('./assets/icon/menu-News.svg')"
              ></md-icon>
              <span class="md-list-item-text">News</span>
            </md-list-item>

            <!-- setting to="/setting" -->
            <md-list-item @click="settingTooltip = !settingTooltip">
              <md-icon
                :md-src="require('./assets/icon/menu-Setting.svg')"
              ></md-icon>
              <span class="md-list-item-text">Setting</span>

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
              <span class="md-list-item-text">Member</span>
            </md-list-item>

            <!-- manage -->
            <md-list-item v-if="user.isSignIn && user.isAdmin" to="/manage">
              <md-icon
                :md-src="require('./assets/icon/menu-Manage.svg')"
              ></md-icon>
              <span class="md-list-item-text">Manage</span>
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

          <!-- 個人連結 &copy;  -->
          <md-button>
            <div class="md-layout md-alignment-center-center">
              <md-icon :md-src="require('./assets/icon/icon-github.svg')"></md-icon>
              Anne.
            </div>
          </md-button>
        </md-app-drawer>

        <!-- Sign out alert 錯誤訊息 -->
        <md-dialog-alert
          :md-active.sync="signOutMsg"
          md-title="ERROR"
          md-content="發生錯誤" />
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
// import Anonymous from '@/components/Anonymous.vue'

export default {
  data () {
    return {
      search: '',
      menuVisible: false,
      settingTooltip: false,
      signUpBtn: false,
      signInBtn: false,
      // alert 訊息控制 false 是不跳 alert
      signOutMsg: false
    }
  },
  components: {
    SignModal
    // Anonymous
  },
  computed: {
    user () {
      return this.$store.state.user
    }
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
      }).catch((error) => {
        console.log(error)
        this.$store.commit('signOut')
      })
    }
  }
}
</script>
