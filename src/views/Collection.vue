<template>
  <div id="collection" class="md-layout md-alignment-center">
    <div class="md-layout-item md-size-100">
      <md-tabs md-alignment="fixed">
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
// import Avatar from '@/components/Avatar.vue'
import TempCardShare from '@/components/TempCardShare.vue'

export default {
  name: 'Collection',
  components: {
    // Avatar,
    TempCardShare
  },
  data () {
    return {
      article: []
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
    tempCardShow: async function (val) {
      console.log(val)
      this.tempCardShow = val

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
        // this.$redrawVueMasonry('containerId' + this.tempCardShow)
        this.$redrawVueMasonry()
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
      // this.$redrawVueMasonry('containerId' + this.tempCardShow)
      this.$redrawVueMasonry('containerId')
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
