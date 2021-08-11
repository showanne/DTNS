export default {
  data () {
    return {
      share: [
        { field: 'share', name: '分享', value: true }, // 預設分享 o
        { field: 'title', name: '分享的佳句' },
        { field: 'author', name: '作者' }, // 系統自行帶入
        { field: 'image', name: '分享的圖片' },
        { field: 'text', name: '來自(引用)' }
      ],
      postIt: [
        { field: 'share', name: '分享', value: false }, // 預設分享 x
        { field: 'title', name: '本次發想主題' },
        { field: 'author', name: '作者' }, // 系統自行帶入
        { field: 'text', name: '寫點什麼...' } // 輸完會自動增加一個 input
      ],
      todo: [
        { field: 'share', name: '分享', value: false }, // 預設分享 x
        { field: 'title', name: '待辦事項主題' },
        { field: 'author', name: '作者' }, // 系統自行帶入
        { field: 'datepicker', name: '期限' },
        { field: 'text', name: '寫點什麼...' } // 輸完會自動增加一個 input
        // { field: 'select', name: '重要程度', selectList: [] },
      ],
      diary: [
        { field: 'share', name: '分享', value: false }, // 預設分享 x
        { field: 'title', name: '隨筆...' },
        { field: 'author', name: '作者' }, // 系統自行帶入
        { field: 'datepicker', name: '日期' },
        { field: 'textarea', name: '紀錄' },
        { field: 'select', name: '心情', selectList: ['開心', '不好', '傷心'] }
      ],
      notes: [
        { field: 'share', name: '分享', value: true }, // 預設分享 o
        { field: 'title', name: '筆記標題' },
        { field: 'author', name: '作者' }, // 系統自行帶入
        { field: 'textarea', name: '筆記內容' }
      ],
      novel: [
        { field: 'share', name: '分享', value: true }, // 預設分享 o
        { field: 'title', name: '書名' },
        { field: 'author', name: '投稿人' }, // 系統自行帶入
        { field: 'text', name: '作者' },
        { field: 'image', name: '書籍封面' },
        { field: 'textarea', name: '書籍內容' },
        { field: 'select', name: '是否已完結', selectList: ['完結', '正文完結，番外待續', '未完結'] },
        { field: 'datepicker', name: '完結日期' }
      ],
      storage: [
        { field: 'share', name: '分享', value: false }, // 預設分享 x
        { field: 'title', name: '物品名稱' },
        // { field: 'author', name: '擁有者' }, // 系統自行帶入
        { field: 'image', name: '物品圖片' },
        { field: 'textarea', name: '物品狀況描述' },
        { field: 'text', name: '存放地點' },
        { field: 'datepicker', name: '購買日期' }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    tempList () {
      return [
        { index: 0, show: true, name: '美字美句分享', subhead: 'share', input: this.share },
        { index: 1, show: true, name: '便利貼', subhead: 'postIt', input: this.postIt },
        { index: 2, show: this.user.isSignIn, name: '待辦事項', subhead: 'todo', input: this.todo },
        { index: 3, show: this.user.isSignIn, name: '心情隨筆', subhead: 'diary', input: this.diary },
        { index: 4, show: this.user.isSignIn, name: '筆記', subhead: 'notes', input: this.notes },
        { index: 5, show: this.user.isSignIn, name: '小說', subhead: 'novel', input: this.novel },
        { index: 6, show: this.user.isSignIn, name: '儲物清單', subhead: 'storage', input: this.storage }
        // show: this.user.isSignIn 因為要去動態抓user 是否有登入，所以不能放在 data 會是固定值
      ]
    },
    // authorName () {
    //   let authorName = ''
    //   if (this.user.name !== '' && this.user.account === '') {
    //     authorName = this.user.name
    //   } else if (this.user.account !== '' && this.user.name === '') {
    //     authorName = this.user.account
    //   } else {
    //     const anonymous = ['水獺', '烏龜', '玫瑰', '貓咪', '犀牛', '小鹿', '大魚', '獵豹', '老虎', '海豚', '熊貓', '鴿子', '刺蝟', '黑狗', '小兔', '天鵝', '烏鴉', '小雞', '海鷗']
    //     authorName = '匿名' + anonymous[Math.floor(Math.random() * 19)]
    //   }
    //   return authorName
    // },
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
