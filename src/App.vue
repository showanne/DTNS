<template>
  <div id="app">
    <div id="nav" class="page-container" nav-pills-icons>
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar
          class="md-accent md-layout md-gutter md-alignment-center-space-between"
        >
          <!-- <md-button class="md-icon-button"
            @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button> -->
          <!-- <h3 class="md-title">DTNS</h3> md-collapse -->
          <div
            class="md-layout-item md-large-size-60 md-medium-size-60 md-xsmall-hide"
          >
            <h4>Hello user ^^</h4>
          </div>

          <div
            class="md-layout-item md-large-size-20 md-medium-size-33 md-xsmall-hide"
          >
            <md-field>
              <label>Search...</label>
              <!-- search has-white -->
              <md-input v-model="search"></md-input>
              <!-- <span class="md-helper-text">Helper text</span> -->
            </md-field>
          </div>

          <div
            class="md-layout-item md-large-size-5 md-medium-size-5 md-xsmall-hide"
          >
            <md-button class="md-icon-button">
              <md-icon>tungsten</md-icon>
            </md-button>
          </div>
        </md-app-toolbar>

        <md-app-drawer md-permanent="full">
          <!-- <md-app-drawer :md-active.sync="menuVisible" md-permanent="full" md-persistent="mini"> -->
          <!-- <md-toolbar class="md-transparent" md-elevation="3" to="/">
            DTNS Logo
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
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
                :md-src="require('./assets/icon/icon-Edit.svg')"
              ></md-icon>
              <span class="md-list-item-text">Edit</span>
            </md-list-item>

            <!-- collection -->
            <md-list-item to="/collection">
              <md-icon
                :md-src="require('./assets/icon/icon-Collection.svg')"
              ></md-icon>
              <span class="md-list-item-text">Collection</span>
            </md-list-item>

            <!-- contact -->
            <md-list-item to="/contact">
              <md-icon
                :md-src="require('./assets/icon/icon-Contact.svg')"
              ></md-icon>
              <span class="md-list-item-text">Contact</span>
            </md-list-item>

            <!-- news -->
            <md-list-item to="/news">
              <!-- <md-icon
                :md-src="require('./assets/icon/icon-News.svg')"
              ></md-icon> -->
              <span class="md-list-item-text">News</span>
            </md-list-item>

            <!-- setting -->
            <md-list-item to="/setting">
              <md-icon
                :md-src="require('./assets/icon/icon-Setting.svg')"
              ></md-icon>
              <span class="md-list-item-text">Setting</span>
            </md-list-item>

            <!-- member -->
            <md-list-item v-if="user.isSignIn" to="/member">
              <md-icon
                :md-src="require('./assets/icon/icon-Member.svg')"
              ></md-icon>
              <span class="md-list-item-text">Member</span>
            </md-list-item>

            <!-- manage -->
            <md-list-item v-if="user.isSignIn && user.isAdmin" to="/manage">
              <md-icon
                :md-src="require('./assets/icon/icon-Manage.svg')"
              ></md-icon>
              <span class="md-list-item-text">Manage</span>
            </md-list-item>

            <!-- Sign Up -->
            <md-list-item v-if="!user.isSignIn">
              <md-button class="md-primary md-raised"
                @click="signUpBtn = true" >
                <md-icon>person_add_alt_1</md-icon>
                &nbsp; Sign Up
              </md-button>

              <md-dialog :md-active.sync="signUpBtn">
                <md-dialog-content>
                  <md-button>
                    <div class="md-layou">
                      <div class="md-layout-item">
                        <md-icon :md-src="require('./assets/icon/line-logo.svg')"></md-icon>
                      </div>
                      <div class="md-layout-item">&nbsp; 快速登入</div>
                    </div>
                  </md-button>
                </md-dialog-content>
              </md-dialog>
            </md-list-item>

            <!-- Sign In -->
            <md-list-item v-if="!user.isSignIn">
              <md-button class="md-primary md-raised" @click="signInBtn = true">
                <md-icon>person_remove</md-icon>
                &nbsp; Sign In
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
              <md-button
                class="md-primary md-raised"
                @click="signOutBtn">
                <md-icon>person_remove</md-icon>
                &nbsp; Sign out
              </md-button>
            </md-list-item>

          </md-list>
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

export default {
  data () {
    return {
      search: '',
      menuVisible: false,
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
    }
  }
}
</script>
