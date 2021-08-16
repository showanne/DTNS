<template>
  <div id="collection" class="md-layout md-alignment-center">
    <div class="md-layout-item md-size-100">
      <md-tabs md-elevation="1" md-alignment="fixed">
        <md-tab v-for="(temp, T) in tempList"
                :key="T" @click="tempShow(T)"
                :id="'tab-'+temp.subhead"
                :md-label="temp.name"
                :md-icon="require('../assets/icon/temp-'+temp.subhead+'.svg')"
                md-dynamic-height
                md-scrollbar>
                <!-- v-for="(temp, T) in tempList" :key="T" @click="tempShow(T) -->
                <!-- :to="'/collection/'+temp.subhead" -->
                <!-- v-if="+temp.show"  -->
            <!-- v-if="item.template == tempCardShow" -->

          <!-- 載入 loading 動畫" -->
          <md-progress-spinner class="md-accent loading" v-if="loading"
            :md-diameter="100" :md-stroke="10"
            md-mode="indeterminate"></md-progress-spinner>

          <div class="md-layout md-alignment-center">
            <div
              class="masonry-container"
              v-masonry
              transition-duration="0.3s"
              item-selector=".tempCard"
              fit-width="true">
              <!-- v-masonry="containerId + T"
                  官方Demo 也沒有給 containerId，可能下方 .$redrawVueMasonry 會自動抓取? 給了會有 errorMsg -->
                <!-- v-masonry-tile class="tempCard" 這2個是套件所需屬性 -->
              <TempCardShare
                class="tempCard" v-masonry-tile
                v-for="item in article"
                :key="item._id"
                :item="item"
                :tempIcon="temp.subhead">
              </TempCardShare>
                <!-- @click="showCardById = true" -->
            </div>
          </div>
        </md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
// components元件
import TempCardShare from '@/components/TempCardShare.vue'

export default {
  name: 'Collection',
  components: {
    TempCardShare
  },
  data () {
    return {
      article: [],
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
    }
  },
  watch: {
    tempCardShow: async function () {
      // 載入時 loading 動畫
      this.loading = true

      try {
        // 取得指定分類的文章 / getArticleByTemp
        const { data } = await this.axios.get('/article/template/' + this.tempCardShow)
        this.article = data.result.map(article => {
          // 有圖片才更新網址
          if (article.image) {
            // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
            article.image = `${process.env.VUE_APP_API}/file/${article.image}`
          }
          // 處理日期格式
          if (article.datepicker || article.date) {
            article.datepicker = new Date(article.datepicker).toLocaleDateString()
            article.date = new Date(article.date).toLocaleDateString()
          }
          return article
        })

        this.$redrawVueMasonry()

        // 頁面載完時 動畫消失
        this.loading = false
      } catch (error) {
        console.log(error)
        // let errorMsg = ''
        // error.response.data.message === null ? errorMsg = error : errorMsg = error.response.data.message
        // this.Msg = errorMsg
        // this.msgModal = true
      }
    }
  },
  async mounted () {
    // 載入時 loading 動畫
    this.loading = true

    try {
      // 取得指定分類的文章 / getArticleByTemp
      const { data } = await this.axios.get('/article/template/' + this.tempCardShow)
      this.article = data.result.map(article => {
        // 有圖片才更新網址
        if (article.image) {
          // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
          article.image = `${process.env.VUE_APP_API}/file/${article.image}`
        }
        // 處理日期格式
        if (article.datepicker || article.date) {
          article.datepicker = new Date(article.datepicker).toLocaleDateString()
          article.date = new Date(article.date).toLocaleDateString()
        }
        return article
      })
      this.$redrawVueMasonry()

      // 頁面載完時 動畫消失
      this.loading = false
    } catch (error) {
      console.log(error)
      // let errorMsg = ''
      // error.response.data.message === null ? errorMsg = error : errorMsg = error.response.data.message
      // this.Msg = errorMsg
      // this.msgModal = true
    }
  }
}
</script>
