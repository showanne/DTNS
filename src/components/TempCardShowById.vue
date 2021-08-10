<template>
  <!-- showCardById 顯示個別文章的 modal -->
    <md-dialog class="showCardModal"
      :md-active.sync="showCardById">
      <!-- :md-close-on-esc="true" -->
      <!-- <md-dialog-title>{ item.title }</md-dialog-title> -->
      <md-dialog-content  class="md-scrollbar">
        <md-card>
          <md-card-header>
            <div class="md-layout md-alignment-center-space-between">
              <div class="md-layout-item md-size-15">
                <md-avatar class="md-large md-elevation-5">
                  <Avatar />
                </md-avatar>
              </div>
              <div class="md-layout-item md-size-70">
                <div class="md-title">
                  {{ title }} By
                  <div class="md-subhead d-medium-inline">{{ author }}</div>
                  </div>

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

          <md-card-media v-if="image">
            <img :src="image" :alt="title">
          </md-card-media>

          <md-card-content class="md-layout">
            <div class="md-body-1 text-pre" v-html="textarea"></div>
            <div class="md-body-1 text-pre" v-html="text"></div>
            <div class="md-subheading">{{ source }}</div>
          </md-card-content>
        </md-card>
      </md-dialog-content>
      <md-dialog-actions class="md-layout md-alignment-space-around-center">
        <md-button class="md-layout-item">
          <md-icon>volunteer_activism</md-icon>
          <span>19</span>
        </md-button>

        <md-button class="md-layout-item"
          @click="1">
          <md-icon>thumb_up_alt</md-icon>
          <span>59</span>
        </md-button>

        <md-button class="md-layout-item">
          <md-icon>cloud_download</md-icon>
        </md-button>

        <md-button class="md-layout-item md-primary"
        @click="closeModal">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
</template>

<script>
import Avatar from '@/components/Avatar.vue'

export default {
  name: 'TempCardShowById',
  data () {
    return {
      // modalAction: this.showCardById,
      id: '',
      template: 0,
      title: '',
      author: '',
      source: '',
      image: '',
      textarea: '',
      text: '',
      select: '',
      datepicker: '',
      date: ''
    }
  },
  components: {
    Avatar
  },
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
      this.source = data.result.source
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
