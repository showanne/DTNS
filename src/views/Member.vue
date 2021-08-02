<template>
  <div id="member">
    <h1>This is an member page</h1>
    <Avatar />
    <Anonymous />
    <br><br><br>
    <h1>Receive Page</h1>
    <h3>回傳回來的值：{{ query }}</h3>
    <hr>
    <h1>Token API</h1>
    <h3>回傳回來的值: {{ token }}</h3>
    <hr>
    <h1>IdToken Decode</h1>
    <h3>解析後的值: {{ idTokenDecode }}</h3>
  </div>
</template>

<script>
// components元件
import Avatar from '@/components/Avatar.vue'
import Anonymous from '@/components/Anonymous.vue'

import Qs from 'qs' // 將回傳的 JSON 轉 form-urlencoded
import jwtDecode from 'jwt-decode' // 解析回傳的 id_Token

export default {
  name: 'Member',
  data () {
    return {
      query: {},
      token: {},
      idTokenDecode: {}
    }
  },
  components: {
    Avatar,
    Anonymous
  },
  async mounted () {
    console.log(this.$route.query)
    this.query = this.$route.query

    const options = Qs.stringify({
      grant_type: 'authorization_code',
      code: this.query.code,
      redirect_uri: process.env.VUE_APP_CALLBACK_URL,
      client_id: process.env.VUE_APP_CHANNEL_ID,
      client_secret: process.env.VUE_APP_CHANNEL_SECRET
    })

    await this.axios.post('https://api.line.me/oauth2/v2.1/token', options, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      console.log(res)
      this.token = res.data
      this.idTokenDecode = jwtDecode(res.data.id_token)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
