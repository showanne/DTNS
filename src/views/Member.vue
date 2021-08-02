<template>
  <div id="member">
    <!-- <h1>This is an member page</h1> -->
    <md-avatar v-if="user.avatar != null" class="md-large">
      <img :src="user.avatar" alt="avatar">
    </md-avatar>
    <Avatar v-else />
    <h2 v-if="user.name != null">{{ user.name }}</h2>
    <h2 v-else-if="user.name == null && user.account != null">{{ user.account }}</h2>
    <Anonymous v-else />
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
      // query: {},
      // token: {},
      // idTokenDecode: {}
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
