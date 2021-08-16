<template>
  <div id="memberArticle">
    <!-- {{ articleM[6].article.image }} -->
    <!-- {{ tempCardShow }} -->
    <!-- <md-button class="md-primary" @click="editArticle(index)">編輯</md-button> -->
    <!-- <md-button class="md-primary" @click="deleteArticle(index)">刪除</md-button> -->

    <!-- 載入 loading 動畫" -->
    <md-progress-spinner class="md-accent loading" v-if="loading"
      :md-diameter="100" :md-stroke="10"
      md-mode="indeterminate"></md-progress-spinner>

    <!-- 文章呈現區 -->
    <div class="md-layout md-alignment-center">
      <div
        class="masonry-container"
        v-masonry
        transition-duration="0.3s"
        item-selector=".tempCardForMember"
        fit-width="true">
        <TempCardForMember
          class="tempCardForMember" v-masonry-tile
          v-for="item in articleM"
          :key="item._id"
          :item="item">
        </TempCardForMember>
      </div>
    </div>

    <!-- 編輯 modal -->
    <!-- <md-dialog :md-active.sync="editArticleModal">
      <md-dialog-title>編輯文章</md-dialog-title>
      <md-dialog-content>

      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="submitArticle(index)">確定</md-button>
        <md-button class="md-primary" @click="editArticleModal = false">取消</md-button>
      </md-dialog-actions>
    </md-dialog> -->
  </div>
</template>

<script>
// components元件
import TempCardForMember from '@/components/TempCardForMember.vue'

export default {
  name: 'MemberArticle',
  components: {
    TempCardForMember
  },
  data () {
    return {
      articleM: [],
      tempForm: {
        _id: '', // 方便編輯
        template: 0,
        title: '',
        author: '',
        avatar: '',
        share: true,
        image: null,
        textarea: '',
        text: '',
        select: '',
        datepicker: Number(new Date()),
        date: Number(new Date())
      },
      editArticleModal: false,
      // 載入時 loading 動畫
      loading: false
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
    },
    async editArticle (index) {
      this.tempForm = {
        _id: this.articleM[index]._id,
        title: this.articleM[index].title,
        share: this.articleM[index].share,
        image: this.articleM[index].image,
        textarea: this.articleM[index].textarea,
        text: this.articleM[index].text,
        select: this.articleM[index].select,
        datepicker: this.articleM[index].datepicker,
        date: this.articleM[index].date,
        index
      }
      this.editArticleModal = true
      // 建立上傳格式 FormData  後端接收資料型態為 multipart/form-data
      const FD = new FormData()
      // 將資料新增進 FormData 用 append('key 欄位名稱', 'value 資料的值')
      for (const key in this.tempForm) {
        FD.append(key, this.tempForm[key])
      }
      // 編輯文章 (會員)  /  editArticle
      const { data } = await this.axios.patch('/article/member' + this.tempForm._id, FD, {
        headers: {
          // 驗證欄位 'Bearer ' + token  -> Bearer要空格
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.articleM[this.tempForm.index] = {
        title: this.tempForm.title,
        share: this.tempForm.share,
        image: `${process.env.VUE_APP_API}/file/${data.result.image}`,
        textarea: this.tempForm.textarea,
        text: this.tempForm.text,
        select: this.tempForm.select,
        datepicker: new Date(this.tempForm.datepicker).toLocaleDateString(),
        date: new Date(this.tempForm.datepicker).toLocaleDateString(),
        _id: this.tempForm._id
      }
      // refresh 畫面 讓資料即時更新
      // else {
      //   console.log(error)
      // }
    },
    deleteArticle (index) {},
    submitArticle (index) {}
  },
  watch: {
    // tempCardShow: async function () {
    //   // console.log(val)
    //   // this.tempCardShow = val

    //   try {
    //   // 取得指定分類的文章 (會員)  / getArticleByTempForMember
    //     const { data } = await this.axios.get('/article/member/template/' + this.tempCardShow, {
    //       headers: {
    //       // 驗證欄位 'Bearer ' + token  -> Bearer要空格
    //         authorization: 'Bearer ' + this.$store.state.jwt.token
    //       }
    //     })

    //     this.articleM = data.result.map(articleM => {
    //       // 有圖片才更新網址
    //       if (articleM.article.image) {
    //       // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
    //         articleM.article.image = `${process.env.VUE_APP_API}/file/${articleM.article.image}`
    //       }
    //       // 處理日期格式
    //       if (articleM.article.datepicker || articleM.article.date) {
    //         articleM.article.datepicker = new Date(articleM.article.datepicker).toLocaleDateString()
    //         articleM.article.date = new Date(articleM.article.date).toLocaleDateString()
    //       }
    //       return articleM
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  async mounted () {
    // 載入時 loading 動畫
    this.loading = true
    try {
      // 取得指定分類的文章 (會員)  /  getArticleByTempForMember
      const { data } = await this.axios.get('/article/member/template/' + this.tempCardShow, {
        headers: {
          // 驗證欄位 'Bearer ' + token  -> Bearer要空格
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })

      this.articleM = data.result.map(articleM => {
        // console.log(articleM)
        // 有圖片才更新網址
        // if (articleM.article.image) {
        // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
        // articleM.article.image = `${process.env.VUE_APP_API}/file/${articleM.article.image}`
        // }
        // 處理日期格式
        // if (articleM.article.datepicker || articleM.article.date) {
        // articleM.article.datepicker = new Date(articleM.article.datepicker).toLocaleDateString()
        // articleM.article.date = new Date(articleM.article.date).toLocaleDateString()
        // }
        return articleM
      })
      // 頁面載完時 動畫消失
      this.loading = false
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
