<template>
  <div id="member">
    <!-- <h1>This is an member page</h1> -->
    <div class="md-layout">
      <div class="md-layout-item md-size-80">
        member DATA TEMP ARTICLE
      </div>
      <div class="md-layout-item md-size-20">
        <div class="full-control" style="border:solid 3px #ace; padding: 16px;">
          <!-- 會員資訊 -->
          <md-avatar v-if="user.avatar != null" class="md-large">
            <img :src="user.avatar" alt="avatar">
          </md-avatar>
          <Avatar v-else />
          <h2 v-if="user.name != null">{{ user.name }}</h2>
          <h2 v-else-if="user.name == null && user.account != null">{{ user.account }}</h2>
          <Anonymous v-else />

          <!-- 會員可用功能選單 -->
          <div class="list">
            <md-list :md-expand-single="expandSingle">
              <md-list-item md-expand :md-expanded.sync="expandNews">
                <md-icon>whatshot</md-icon>
                <span class="md-list-item-text">News</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset">World</md-list-item>
                  <md-list-item class="md-inset">Europe</md-list-item>
                  <md-list-item class="md-inset">South America</md-list-item>
                </md-list>
              </md-list-item>

              <md-list-item>
                <md-icon>shopping_basket</md-icon>
                <span class="md-list-item-text">Shop</span>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// components元件
import Avatar from '@/components/Avatar.vue'
import Anonymous from '@/components/Anonymous.vue'

// import Qs from 'qs' // 將回傳的 JSON 轉 form-urlencoded
// import jwtDecode from 'jwt-decode' // 解析回傳的 id_Token

export default {
  name: 'Member',
  data () {
    return {
      expandNews: false,
      expandSingle: false
    }
  },
  components: {
    Avatar,
    Anonymous
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
