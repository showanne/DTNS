<template>
    <!-- .tempCardForMember -->
    <md-card md-with-hover class="px-3 py-2">
      <md-card-header
        class="md-layout md-alignment-center-space-around">
        <div class="md-layout-item">
          <md-icon class="d-inline-block"
            :md-src="require('../assets/icon/temp-'+tempList[item.article.template].subhead+'.svg')"></md-icon>
          <span class="pl-2">{{ tempList[item.article.template].name }}</span>
        </div>
        <div class="md-layout-item text-right md-subhead">
          <md-icon class="d-inline-block" :md-src="require('../assets/icon/dateS.svg')"></md-icon>
          <span class="pl-2">{{ item.article.date }}</span>
        </div>
      </md-card-header>

      <!-- share -->
      <md-card-content v-if="item.article.template === 0"
        class="card-share">
        <md-card-media v-if="item.article.image">
          <img :src="item.article.image"
               :alt="item.article.title">
        </md-card-media>

        <figure>
          <blockquote class="p-3">
            <p class="text-v-html" v-html="item.article.title"></p>
            <figcaption>
              <cite>
              –– <span class="text-v-html" v-html="item.article.text"></span>
              </cite>
            </figcaption>
          </blockquote>
        </figure>
      </md-card-content>

      <!-- postIt -->
      <md-card-content v-if="item.article.template === 1">
        <div class="md-title">{{ item.article.title }}</div>

        <div class="ulListBox">
          <div class="card-postit text-v-html" v-for="(postit, p) in ulList" :key="p">{{ postit }}</div>
        </div>
      </md-card-content>

      <!-- todo -->
      <md-card-content v-if="item.article.template === 2">
        <div class="md-title">{{ item.article.title }}</div>

        <div class="md-subhead lh-5">
          <md-icon>alarm</md-icon>
          期限：{{ item.article.datepicker }}</div>

        <div class="ulListBox">
          <div class="card-todo text-v-html" v-for="(todo, t) in ulList" :key="t">{{ todo }}</div>
        </div>
      </md-card-content>

      <!-- diary -->
      <md-card-content v-if="item.article.template === 3">
        <div class="md-title">{{ item.article.title }}</div>

        <div class="md-subhead">
          <md-icon>event_note</md-icon>
          期限：{{ item.article.datepicker }}</div>

        <div class="md-subhead">
          <md-icon>face</md-icon>
          心情：{{ item.article.select }}</div>

        <div class="md-body-1 text-v-html" v-html="item.article.textarea"></div>
      </md-card-content>

      <!-- notes -->
      <md-card-content v-if="item.article.template === 4">
        <div class="md-title">{{ item.article.title }}</div>
        <div class="md-body-1 text-v-html" v-html="item.article.textarea"></div>
      </md-card-content>

      <!-- novel -->
      <md-card-content v-if="item.article.template === 5">
        <md-card-media
          class="text-center">
          <img v-if="item.article.image" :src="item.article.image" :alt="item.article.title" class="w-80">
          <md-icon v-else class="md-size-2x my-2">image_not_supported</md-icon>
        </md-card-media>

        <div class="md-title">{{ item.article.title }}</div>

        <div class="md-subhead lh-5">
          <md-icon>emoji_emotions</md-icon>
          作者：{{ item.article.text }}</div>

        <div class="md-subhead lh-5">
          <md-icon>book</md-icon>
          是否已完結：{{ item.article.select }}</div>

        <div class="md-subhead lh-5">
          <md-icon>event_available</md-icon>
          完結日期：{{ item.article.datepicker }}</div>

        <div class="md-body-1 text-v-html" v-html="item.article.textarea"></div>
      </md-card-content>

      <!-- storage -->
      <md-card-content v-if="item.article.template === 6">
        <md-card-media
          class="text-center">
          <img v-if="item.article.image" :src="item.article.image" :alt="item.article.title" class="w-80">
          <md-icon v-else class="md-size-2x my-2">image_not_supported</md-icon>
        </md-card-media>

        <div class="md-title">{{ item.article.title }}</div>

        <div class="lh-5">
          <md-icon>share_location</md-icon>
          <span class="md-subhead text-v-html" v-html="'存放地點：'+ item.article.text"></span>
        </div>

        <div class="lh-5">
          <md-icon>inventory_2</md-icon>
          <span class="md-subhead text-v-html" v-html="'物品狀況描述：'+item.article.textarea"></span>
        </div>
      </md-card-content>

      <md-card-actions md-alignment="space-between">

        <md-button class="md-button w-unset md-dense"
           @click="editArticle(index)">
          <md-icon :md-src="require('../assets/icon/action-addEdit.svg')"></md-icon>
        </md-button>

        <md-button class="md-button w-unset md-dense"
          @click="deleteArticle(index)">
          <md-icon :md-src="require('../assets/icon/action-delete.svg')"></md-icon>
        </md-button>

        <md-button class="md-button w-unset">
            <md-icon class="d-inline-block" :md-src="require('../assets/icon/action-save.svg')"></md-icon>
            <span class="px-1">--</span>
        </md-button>

        <md-button class="md-button w-unset">
            <md-icon class="d-inline-block" :md-src="require('../assets/icon/action-good.svg')"></md-icon>
            <span class="px-1">--</span>
        </md-button>

        <md-button v-if="item.article.publicOff" class="md-button w-unset" disabled>
          <md-icon :md-src="require('../assets/icon/action-report.svg')"></md-icon>
          <!-- {{ item.article.publicOff }} -->
          <!-- <small class="pl-1">檢舉</small> -->
        </md-button>

        <md-button class="md-button w-unset md-dense">
          <a :href="'http://line.naver.jp/R/msg/text/?DTNS分享吧！–&nbsp;' + item.article.title + '%0D%0Ahttps://showanne.github.io/DTNS'">
            <md-icon :md-src="require('../assets/icon/action-share.svg')"></md-icon>
          </a>
        </md-button>
      </md-card-actions>

      <!-- 編輯 modal -->
      <md-dialog :md-active.sync="editArticleModal">
        <md-dialog-title>編輯文章</md-dialog-title>
        <md-dialog-content>
          <!-- {{ editForm }} -->
          <!-- <form class="md-layout md-alignment-center-center">

            <md-field v-if="editForm.article.title" md-clearable class="md-layout-item md-size-90">
              <md-textarea v-model="editForm.article.title" md-autogrow required></md-textarea>
            </md-field>

            <md-field v-if="editForm.article.textarea" md-clearable class="md-layout-item md-size-90">
              <md-textarea v-model="editForm.article.textarea"></md-textarea>
            </md-field>

            <md-field v-if="editForm.article.text" md-clearable class="md-layout-item md-size-90">
              <md-input v-model="editForm.article.text"></md-input>
            </md-field>

            <div v-if="editForm.article.datepicker" class="md-layout-item md-size-45">
              <md-datepicker
                v-model="editForm.article.datepicker"
                md-immediately />
            </div>

            <div v-if="editForm.article.share" class="md-layout-item md-size-45 ml-3">
              <label class="label">公開至分享牆</label>
              <md-switch v-model="editForm.article.share"
                class="md-primary m-1" ></md-switch>
            </div>

            <div v-if="editForm.article.image" class="md-layout-item md-size-90">
              <img-inputer v-model="editForm.article.image"
                accept="image/*" theme="material"
                :capture="true"
                placeholder="點擊或拖曳選擇相片"
                bottom-text="點擊或拖曳以修改" />
            </div>

          </form> -->
            <!-- <md-progress-bar md-mode="indeterminate" v-if="sending" /> -->
        </md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-primary" @click="submitArticle(index)">確定</md-button>
          <md-button class="md-primary" @click="editArticleModal = false">取消</md-button>
        </md-dialog-actions>
      </md-dialog>
    </md-card>
</template>

<script>
export default {
  name: 'TempCardForMember',
  data () {
    return {
      editArticleModal: false,
      editForm: [],
      ulList: []
    }
  },
  props: {
    // 外層傳入的 articleM[]
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    async editArticle (index) {
      this.editArticleModal = true
      // alert('editArticle', index)
      console.log(index, this.index)

      this.editForm = this.item
    },
    async submitArticle (index) {
      console.log(index)
      console.log(this.item._id)
      try {
        console.log(this.editForm)
        // 建立上傳格式 FormData  後端接收資料型態為 multipart/form-data
        const FD = new FormData()
        // 將資料新增進 FormData 用 append('key 欄位名稱', 'value 資料的值')
        for (const key in this.editForm.article) {
          FD.append(key, this.editForm.article[key])
        }

        // 編輯文章 (會員)  /  editArticle
        await this.axios.patch('/article/member/' + this.item._id, FD, {
          headers: {
            // 驗證欄位 'Bearer ' + token  -> Bearer要空格
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })

        this.editArticleModal = false
      } catch (error) {
        console.log(error)
      }
    },
    deleteArticle (index) {
      alert('deleteArticle', index)
    }
  },
  // computed: {
  // datepickerFormat () {
  //   const date = this.item.article.datepicker
  //   return new Date(date).toLocaleDateString()
  // },
  //   dateFormat () {
  //     const date = this.item.article.date
  //     return new Date(date).toLocaleDateString()
  //   }
  // },
  mounted () {
    // 有圖片才更新網址
    if (this.item.article.image) {
      // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
      this.item.article.image = `${process.env.VUE_APP_API}/file/${this.item.article.image}`
    }
    // 處理日期格式
    if (this.item.article.datepicker || this.item.article.date) {
      // .split('T')[0] 找到 'T' 切割成陣列，並取第 0 個陣列回傳
      this.item.article.datepicker = new Date(this.item.article.datepicker).toISOString().split('T')[0]
      this.item.article.date = new Date(this.item.article.date).toISOString().split('T')[0]
    }

    // 處理 便利貼1 及待辦事項2 顯示格式
    if (this.item.article.template === 1 || this.item.article.template === 2) {
      // .split("-").map(a=>"#"+a)
      this.ulList = this.item.article.textarea.split('\n').map(item => {
        // console.log(item)
        return item
      })
    }

    // console.log(this.item.article)
    // console.log(this.tempList[this.item.article.template].subhead)
  }
}
</script>
