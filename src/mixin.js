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
    // 編輯主題清單
    tempList () {
      return [
        { index: 0, show: true, name: '美字美句', subhead: 'share', input: this.share },
        { index: 1, show: true, name: '便利貼', subhead: 'postIt', input: this.postIt },
        { index: 2, show: this.user.isSignIn, name: '待辦事項', subhead: 'todo', input: this.todo },
        { index: 3, show: this.user.isSignIn, name: '心情隨筆', subhead: 'diary', input: this.diary },
        { index: 4, show: this.user.isSignIn, name: '筆記', subhead: 'notes', input: this.notes },
        { index: 5, show: this.user.isSignIn, name: '小說', subhead: 'novel', input: this.novel },
        { index: 6, show: this.user.isSignIn, name: '儲物清單', subhead: 'storage', input: this.storage }
        // show: this.user.isSignIn 因為要去動態抓user 是否有登入，所以不能放在 data 會是固定值
      ]
    },
    // 選單列清單
    menuList () {
      return [
        { index: 0, name: '編輯', subhead: 'Edit', show: true },
        { index: 1, name: '分享牆', subhead: 'Collection', show: true },
        { index: 2, name: '聯絡我們', subhead: 'Contact', show: true },
        { index: 3, name: '最新消息', subhead: 'News', show: true }
        // { index: 4, name: '會員中心', subhead: 'Member', show: this.user.isSignIn && !this.user.isAdmin },
        // { index: 5, name: '管理中心', subhead: 'Manage', show: !this.user.isSignIn && this.user.isAdmin }
      ]
    },
    userName () {
      let userName = ''
      if (this.user.name !== '') {
        userName = this.user.name
      } else if (this.user.account !== '') {
        userName = this.user.account
      } else {
        const anonymous = ['水獺', '烏龜', '玫瑰', '貓咪', '犀牛', '小鹿', '大魚', '獵豹', '老虎', '海豚', '熊貓', '鴿子', '刺蝟', '黑狗', '小兔', '天鵝', '烏鴉', '小雞', '海鷗']
        userName = '匿名' + anonymous[Math.floor(Math.random() * 19)]
      }
      return userName
    },
    avatarImg () {
      let avatarImg = ''
      if (this.user.avatar !== '') {
        avatarImg = this.user.avatar
      } else {
        const avatarColors = ['3B4058', '2A6E78', '7A907C', 'C9B180', '3E6B48', 'B5B479', 'F7E6A6']
        avatarImg = `https://source.boringavatars.com/beam/80/?colors=${avatarColors[Math.floor(Math.random() * 7)]},${avatarColors[Math.floor(Math.random() * 7)]}`
      }
      return avatarImg
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
    random (R) {
      return Math.floor(Math.random() * R)
    },
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
