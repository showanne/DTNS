<template>
  <!-- showCardById 顯示個別文章的 modal -->
    <md-dialog class="showCardModal"
      :md-active.sync="showCardById"
      :md-click-outside-to-close="false"
      :md-close-on-esc="false">
      <!-- :md-close-on-esc="true" -->
      <!-- <md-dialog-title>{ item.title }</md-dialog-title> -->
      <md-dialog-content  class="md-scrollbar">
        <md-card>
          <md-card-header>
            <div class="md-layout md-alignment-center-space-between">
              <div class="md-layout-item md-size-15">
                <md-avatar class="md-large md-elevation-5">
                  <img :src="avatar" alt="">
                </md-avatar>
              </div>
              <div class="md-layout-item md-size-70">
                  <div class="md-subhead d-medium-inline">{{ author }}</div>

                <div class="md-subhead">
                  <md-icon class="md-icon-dateL"
                     :md-src="require('../assets/icon/dateL.svg')"></md-icon>
                  <span>{{ date }}</span>
                </div>
              </div>
              <div class="md-layout-item md-size-15">
                <md-icon class="md-size-3x"
                  :md-src="require('../assets/icon/temp-'+tempIcon+'.svg')">
                </md-icon>
              </div>
            </div>
          </md-card-header>

          <!-- share -->
          <md-card-content v-if="tempNum === 0">
            <div class="md-title text-v-html">{{ title }}</div>
            <md-card-media v-if="image">
              <img :src="image" :alt="title">
            </md-card-media>
            <div class="md-body-1 text-v-html" v-html="text"></div>
          </md-card-content>

          <!-- postIt -->
          <md-card-content v-if="tempNum === 1">
            <div class="md-title text-v-html">{{ title }}</div>
            <div class="md-body-1 text-v-html" v-html="textarea"></div>
          </md-card-content>

          <!-- todo -->
          <md-card-content v-if="tempNum === 2">
            <div class="md-title text-v-html">{{ title }}</div>
            <div class="md-caption text-medium-right">期限：{{ datepicker }}</div>
            <div class="md-body-1 text-v-html" v-html="textarea"></div>
          </md-card-content>

          <!-- diary -->
          <md-card-content v-if="tempNum === 3">
            <div class="md-title text-v-html">{{ title }}</div>
            <div class="md-caption text-medium-right">日期：{{ datepicker }}</div>
            <div class="md-caption text-medium-right">心情：{{ select }}</div>
            <div class="md-body-1 text-v-html" v-html="textarea"></div>
          </md-card-content>

          <!-- notes -->
          <md-card-content v-if="tempNum === 4">
            <div class="md-title text-v-html">{{ title }}</div>
            <div class="md-body-1 text-v-html" v-html="textarea"></div>
          </md-card-content>

          <!-- novel -->
          <md-card-content v-if="tempNum === 5">
            <div class="md-title text-v-html">{{ title }}</div>
            <div class="md-body-1 text-v-html" v-html="'作者：'+text"></div>
            <div class="md-caption text-medium-right">完結日期：{{ datepicker }}</div>
            <div class="md-caption text-medium-right">是否已完結：{{ select }}</div>
            <md-card-media v-if="image">
              <img :src="image" :alt="title" class="w-50">
            </md-card-media>
            <div class="md-body-1 text-v-html" v-html="textarea"></div>
          </md-card-content>

          <!-- storage -->
          <md-card-content v-if="tempNum === 6">
            <div class="md-title text-v-html">{{ title }}</div>
            <div class="md-body-1 text-v-html" v-html="'存放地點：'+text"></div>
            <div class="md-caption text-medium-right">購買日期：{{ datepicker }}</div>
            <md-card-media v-if="image">
              <img :src="image" :alt="title">
            </md-card-media>
            <div class="md-body-1 text-v-html" v-html="'物品狀況描述：'+textarea"></div>
          </md-card-content>

        </md-card>
      </md-dialog-content>
      <md-dialog-actions class="md-layout md-alignment-space-around-center">
        <md-button class="md-layout-item md-layout-nowrap">
          <md-icon :md-src="require('@/assets/icon/action-save.svg')"></md-icon>
          <span>&nbsp; 39</span>

        </md-button>

        <md-button class="md-layout-item md-layout-nowrap">
          <md-icon :md-src="require('@/assets/icon/action-good.svg')"></md-icon>
          <span>&nbsp; 59</span>
        </md-button>

        <md-button class="md-layout-item md-layout-nowrap">
          <a :href="'http://line.naver.jp/R/msg/text/?DTNS分享吧！–' + title + '&nbsp;%0D%0Ahttps://showanne.github.io/DTNS'">
            <md-icon :md-src="require('../assets/icon/action-share.svg')"></md-icon>
          </a>
        </md-button>

        <md-button class="md-layout-item md-primary"
        @click="closeModal">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
</template>

<script>
export default {
  name: 'TempCardShowById',
  data () {
    return {
      // modalAction: this.showCardById,
      id: '',
      template: 0,
      title: '',
      author: '',
      image: '',
      textarea: '',
      text: '',
      select: '',
      datepicker: '',
      date: ''
    }
  },
  components: {},
  props: {
    // 外層傳入 用來控制 modal 顯示
    showCardById: {
      type: Boolean,
      required: true
    },
    // 外層傳入的 Id 用來丟請求給後端顯示對應的文章
    tempCardId: {
      type: String,
      required: true
    },
    // 外層傳入的 icon name 給 svg 指定檔名用
    tempIcon: {
      type: String,
      required: true
    },
    // 外層傳入的 template 指定用哪個模板顯示
    tempNum: {
      type: Number,
      required: true
    }
  },
  async mounted () {
    try {
      // 取得個別文章 /article/:id
      const { data } = await this.axios.get('/article/' + this.tempCardId)
      this.id = this.tempCardId
      this.template = data.result.template
      this.title = data.result.title
      this.author = data.result.author
      this.avatar = data.result.avatar
      if (data.result.image) {
        this.image = `${process.env.VUE_APP_API}/file/${data.result.image}`
      }
      this.textarea = data.result.textarea
      this.text = data.result.text
      this.select = data.result.select
      this.datepicker = new Date(data.result.datepicker).toLocaleDateString()
      this.date = new Date(data.result.date).toLocaleDateString()
    } catch (error) {
      // 找不到丟回原頁
      this.$router.push('/collection')
    }
  },
  // watch: {
  //   showCardById (val) {
  //     this.modalAction = val
  //   }
  // },
  methods: {
    closeModal () {
      // 傳資料給外層 TempCardShare.vue ，告訴他更改 showCardById 的值來關閉他
      this.$emit('closeModal')
    }
  }
}
</script>
