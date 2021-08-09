export default {
  // data () {
  // return {
  // tempList: []
  //       { show: true, name: '便利貼', subhead: 'postIt' },
  //       { show: true, name: '美字美句分享', subhead: 'share' },
  //       { show: '', name: '待辦事項', subhead: 'todo' },
  //       { show: '', name: '心情隨筆', subhead: 'diary' },
  //       { show: '', name: '筆記', subhead: 'notes' },
  //       { show: '', name: '小說', subhead: 'novel' },
  //       { show: '', name: '儲物清單', subhead: 'storage' }
  //       // show: `${this.user.isSignIn}`
  //       // this.$store.getters.user.isSignIn

  // }
  // },
  computed: {
    user () {
      return this.$store.getters.user
    },
    tempList () {
      return [
        { index: 0, show: true, name: '便利貼', subhead: 'postIt', input: '' },
        { index: 1, show: true, name: '美字美句分享', subhead: 'share', input: '' },
        { index: 2, show: this.user.isSignIn, name: '待辦事項', subhead: 'todo', input: '' },
        { index: 3, show: this.user.isSignIn, name: '心情隨筆', subhead: 'diary', input: '' },
        { index: 4, show: this.user.isSignIn, name: '筆記', subhead: 'notes', input: '' },
        { index: 5, show: this.user.isSignIn, name: '小說', subhead: 'novel', input: '' },
        { index: 6, show: this.user.isSignIn, name: '儲物清單', subhead: 'storage', input: '' }
        // show: this.user.isSignIn 因為要去動態抓user 是否有登入，所以不能放在 data 會是固定值
      ]
    },
    // show () {
    //   this.tempList.show === null ? this.tempList.show = this.user.isSignIn : this.tempList.show = true
    //   return this.tempList.show
    // },
    randomState () {
      // Math.floor(Math.random() * 7)
      return 'DTNSLOGIN'
    }
  },
  methods: {
    async signForLine () {
      let link = 'https://access.line.me/oauth2/v2.1/authorize?'
      link += 'response_type=code' // 使用者登入後，請LINE回傳「code」（授權碼）
      link += '&client_id=' + process.env.VUE_APP_CHANNEL_ID
      link += '&redirect_uri=' + process.env.VUE_APP_CALLBACK_URL // /users/signInLine
      link += '&state=' + this.randomState
      // TODO: state 建議在 Web app 請求中，針對每個登入階段隨機生成。並確認該值與Web app 中接收授權碼時的 state 屬性值一致。
      link += '&bot_prompt=normal' // 預設要加官方帳號好友
      link += '&scope=openid%20profile' // 預設申請使用者資料及 token
      window.location.href = link
      // window.open(link, '_self') // 跳轉頁面

      // 在 LINE Login 授權 URL ，並讓用戶重新導向
      // https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id={CHANNEL_ID}&redirect_uri={CALLBACK_URL}&state={STATE}&bot_prompt={BOT_PROMPT}&scope={SCOPE_LIST}

      // 回傳的  https://dtns-test-app.herokuapp.com/auth?friendship_status_changed=false&code=JFJstzoT7w62112rXfyy&state=MX44ZkxPWUg%3D
    }
  }
}
