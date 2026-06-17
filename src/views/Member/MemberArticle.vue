<template>
  <div id="memberArticle">
    <!-- 載入 loading 動畫 -->
    <md-empty-state v-if="loading"
      md-icon="submit"
      md-label="Loading...">
      <md-progress-spinner class="md-accent loading"
        :md-diameter="100" :md-stroke="10"
        md-mode="indeterminate"></md-progress-spinner>
    </md-empty-state>

    <!-- 特殊作者專屬功能入口 (Demo) -->
    <div v-if="user.isSignIn" class="demo-controls md-layout md-alignment-center p-2 mb-2" style="background: #eee; border-radius: 8px;">
      <span class="md-body-1 mr-3">Demo 測試工具：</span>
      <md-switch v-model="demoIsSpecial" class="md-primary">開啟特殊作者權限</md-switch>
    </div>

    <div v-if="user.isSpecial" class="special-author-tools md-layout md-alignment-center p-3">
      <md-button to="/member/specialEdit" class="md-raised md-primary">
        <md-icon>edit_note</md-icon> 撰寫深度專欄 (特殊作者)
      </md-button>
    </div>

    <!-- 無資料時顯示 -->
    <md-empty-state v-else-if="articleM == '' && specialArticles.length == 0"
      class="md-primary"
      md-icon="travel_explore"
      md-label="快來開始吧！">
      <md-button to="/edit" class="md-accent md-raised h-unset p-3 fz-5 ls-2">紀錄讓你感動的瞬間</md-button>
      <md-button to="/collection" class="md-primary md-raised h-unset p-3 fz-5 ls-2">在文字的世界裡遨遊</md-button>
    </md-empty-state>

    <!-- 文章呈現區 -->
    <div v-else class="md-layout md-alignment-center">
      <!-- 特殊專欄區域 (Demo) -->
      <div v-if="specialArticles.length > 0" class="md-layout-item md-size-100 p-4">
        <h2 class="md-title ml-4">我的深度專欄 (不公開)</h2>
        <div class="md-layout md-gutter md-alignment-top-center">
          <div v-for="sa in specialArticles" :key="sa._id" class="md-layout-item md-size-33 md-small-size-100 mb-4">
            <md-card>
              <md-card-header>
                <div class="md-title">{{ sa.title }}</div>
                <div class="md-subhead">{{ new Date(sa.date).toLocaleDateString() }}</div>
              </md-card-header>
              <md-card-content class="text-truncate-3">
                {{ sa.content }}
              </md-card-content>
              <md-card-actions>
                <md-button class="md-primary">編輯</md-button>
                <md-button>查看</md-button>
              </md-card-actions>
            </md-card>
          </div>
        </div>
        <md-divider class="my-5"></md-divider>
      </div>

      <div
        class="masonry-container"
        v-masonry
        transition-duration="0.3s"
        item-selector=".tempCardForMember"
        fit-width="true">
        <TempCardForMember
          class="tempCardForMember" v-masonry-tile
          v-for="(item, i) in articleM"
          :key="i"
          :index="i"
          :item="item">
        </TempCardForMember>
          <!-- :key="item._id" -->
      </div>
    </div>
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
    user () {
      return this.$store.getters.user
    },
    specialArticles () {
      return this.$store.getters.specialArticles
    },
    demoIsSpecial: {
      get () {
        return this.user.isSpecial
      },
      set (val) {
        this.$store.commit('getInfo', { ...this.user, isSpecial: val })
      }
    }
  },
  async mounted () {
    // 載入時 loading 動畫
    this.loading = true
    try {
      // 取得指定分類的文章 (會員)  /  getArticleByTempForMember
      const { data } = await this.axios.get('/article/member/template/', {
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
