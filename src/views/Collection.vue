<template>
  <div id="collection" class="md-layout md-alignment-center">
    <div class="md-layout-item md-size-100">
      <md-tabs md-alignment="fixed">
        <md-tab v-for="(temp, T) in tempList"
                :key="T" @click="tempShow(T)"
                :id="'tab-'+temp.subhead"
                :md-label="temp.name"
                :md-icon="require('../assets/icon/temp-'+temp.subhead+'.svg')"
                ></md-tab>
                <!-- v-for="(temp, T) in tempList" :key="T" @click="tempShow(T) -->
                <!-- :to="'/collection/'+temp.subhead" -->
                <!-- v-if="+temp.show"  -->
      </md-tabs>
    </div>
    <div class="md-layout-item md-size-100">
      <transition>
        <!-- <keep-alive> -->
          <!-- <router-view> -->
          <!-- </router-view> -->
        <!-- </keep-alive> -->
      </transition>
      <div
        class="masonry-container"
        v-masonry
        transition-duration="0.3s"
        item-selector=".masonry-container > .md-card"
        fit-width="true"
        v-for="item in article"
        :key="item._id">
        <TempCardShare v-if="item.template == tempCardShow" :item="item"></TempCardShare>
        <!--  -->
      </div>
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
      tempList: [
        { show: true, name: '便利貼', subhead: 'postIt' },
        { show: true, name: '美字美句分享', subhead: 'share' },
        { show: this.$store.getters.user.isSignIn, name: '待辦事項', subhead: 'todo' },
        { show: this.$store.getters.user.isSignIn, name: '心情隨筆', subhead: 'diary' },
        { show: this.$store.getters.user.isSignIn, name: '筆記', subhead: 'notes' },
        { show: this.$store.getters.user.isSignIn, name: '小說', subhead: 'novel' },
        { show: this.$store.getters.user.isSignIn, name: '儲物清單', subhead: 'storage' }
      ],
      article: [],
      tempCardShow: 0
    }
  },
  methods: {
    tempShow (T) {
      console.log(T)
      this.tempCardShow = T
    }
  },
  async mounted () {
    try {
      // 取得所有文章 /article
      const { data } = await this.axios.get('/article')
      this.article = data.result.map(article => {
        // 有圖片才更新網址
        if (article.image) {
          // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
          article.image = `${process.env.VUE_APP_API}/file/${article.image}`
        }
        return article
      })
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
