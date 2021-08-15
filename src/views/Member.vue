<template>
  <div id="member">
    <!-- <h1>This is an member page</h1> -->
    <div class="md-layout">
      <div class="md-layout-item md-size-80">
        member DATA TEMP ARTICLE
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
      <div class="md-layout-item md-size-20">
        <div class="full-control" style="border:dashed 2.5px #B3AB88; padding: 16px;">
          <!-- 會員資訊 -->
          <md-avatar class="md-large md-elevation-5">
            <img :src="avatarImg" alt="">
          </md-avatar>
          <h2>{{ userName }}</h2>

          <!-- 會員可用功能選單 -->
          <div class="list">
            <md-list :md-expand-single="expandSingle">
              <md-list-item to="/member/memberAnalytics">
                <md-icon>analytics</md-icon>
                <span class="md-list-item-text">Analytics</span>
              </md-list-item>

              <md-list-item to="/member/memberArticle">
                <md-icon>feed</md-icon>
                <span class="md-list-item-text">Article</span>

                <!-- TODO: 分主題檢視
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    to="/member/memberArticle"
                    v-for="(temp, T) in tempList"
                    :key="T"
                    @click="tempShow(T)">
                    {{ temp.subhead }}
                  </md-list-item>
                </md-list> -->
              </md-list-item>

              <md-list-item to="/member">
                <md-icon>perm_contact_calendar</md-icon>
                <span class="md-list-item-text">Profile</span>
              </md-list-item>

              <md-list-item to="/member/memberReply">
                <md-icon>3p</md-icon>
                <span class="md-list-item-text">Reply</span>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

// import Qs from 'qs' // 將回傳的 JSON 轉 form-urlencoded
// import jwtDecode from 'jwt-decode' // 解析回傳的 id_Token

export default {
  name: 'Member',
  data () {
    return {
      expandArticle: false,
      expandSingle: false
    }
  },
  components: {

  },
  computed: {
    user () {
      return this.$store.state.user
    },
    tempCardShow () {
      return this.$store.state.tempCardShow
    }
  },
  methods: {
    tempShow (T) {
      this.$store.commit('tempShow', T)
    }
  }
  // watch: {
  //   tempCardShow: function (val) {
  //     // console.log(val)
  //     this.tempCardShow = val
  //   }
  // }
}
</script>
