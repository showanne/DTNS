<template>
  <div id="memberArticle">
    memberArticlememberArticle
    <br> {{ tempCardShow }}
    {{ articleM }}
  </div>
</template>

<script>
export default {
  name: 'MemberArticle',
  data () {
    return {
      articleM: []
    }
  },
  computed: {
    tempCardShow () {
      return this.$store.state.tempCardShow
    }
  },
  methods: {
    tempShow (T) {
      this.$store.commit('tempShow', T)
    }
  },
  watch: {
    tempCardShow: async function () {
      // console.log(val)
      // this.tempCardShow = val

      try {
      // 取得指定分類的文章 (會員)  / getArticleByTempForMember
        const { data } = await this.axios.get('/article/member/template/' + this.tempCardShow, {
          headers: {
          // 驗證欄位 'Bearer ' + token  -> Bearer要空格
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })

        this.articleM = data.result.map(articleM => {
        // 有圖片才更新網址
          if (articleM.image) {
          // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
            articleM.image = `${process.env.VUE_APP_API}/file/${articleM.image}`
          }
          // 處理日期格式
          if (articleM.datepicker || articleM.date) {
            articleM.datepicker = new Date(articleM.datepicker).toLocaleDateString()
            articleM.date = new Date(articleM.date).toLocaleDateString()
          }
          return articleM
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    try {
      // 取得指定分類的文章 (會員)  / getArticleByTempForMember
      const { data } = await this.axios.get('/article/member/template/' + this.tempCardShow, {
        headers: {
          // 驗證欄位 'Bearer ' + token  -> Bearer要空格
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })

      this.articleM = data.result.map(articleM => {
        // 有圖片才更新網址
        if (articleM.image) {
          // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
          articleM.image = `${process.env.VUE_APP_API}/file/${articleM.image}`
        }
        // 處理日期格式
        if (articleM.datepicker || articleM.date) {
          articleM.datepicker = new Date(articleM.datepicker).toLocaleDateString()
          articleM.date = new Date(articleM.date).toLocaleDateString()
        }
        return articleM
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
