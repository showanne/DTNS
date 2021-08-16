<template>
    <md-card md-with-hover>
      <md-card-header class="md-layout">
        <div class="md-layout-item">
          <md-button class="md-icon-button">
            <md-icon :md-src="require('../assets/icon/temp-'+tempList[item.article.template].subhead+'.svg')"></md-icon>
          </md-button>
        </div>
        <div class="md-layout-item md-subhead">
          <md-icon :md-src="require('../assets/icon/dateS.svg')"></md-icon>
          <span>{{ item.article.date }}</span>
        </div>
      </md-card-header>

      <!-- share -->
      <md-card-content v-if="item.article.template === 0">
        <md-card-media v-if="item.article.image">
          <img :src="item.article.image" alt="">
        </md-card-media>
        <div class="md-title">{{ item.article.title }}</div>
        <div class="md-body-1 text-v-html" v-html="item.article.text"></div>
      </md-card-content>

      <!-- postIt -->
      <md-card-content v-if="item.article.template === 1">
        <div class="md-title">{{ item.article.title }}</div>
        <div class="md-body-1 text-v-html" v-html="item.article.text"></div>
      </md-card-content>

      <!-- todo -->
      <md-card-content v-if="item.article.template === 2">
        <div class="md-title">{{ item.article.title }}</div>
        <div class="md-subhead">期限：{{ item.article.datepicker }}</div>
        <div class="md-body-1 text-v-html" v-html="item.article.text"></div>
      </md-card-content>

      <!-- diary -->
      <md-card-content v-if="item.article.template === 3">
        <div class="md-title">{{ item.article.title }}</div>
        <div class="md-subhead">期限：{{ item.article.datepicker }}</div>
        <div class="md-subhead">心情：{{ item.article.select }}</div>
        <div class="md-body-1 text-v-html" v-html="item.article.textarea"></div>
      </md-card-content>

      <!-- notes -->
      <md-card-content v-if="item.article.template === 4">
        <div class="md-title">{{ item.article.title }}</div>
        <div class="md-body-1 text-v-html" v-html="item.article.textarea"></div>
      </md-card-content>

      <!-- novel -->
      <md-card-content v-if="item.article.template === 5">
        <md-card-media v-if="item.article.image">
          <img :src="item.article.image" alt="">
        </md-card-media>
        <div class="md-title">{{ item.article.title }}</div>
        <div class="md-subhead">作者：{{ item.article.text }}</div>
        <div class="md-subhead">是否已完結：{{ item.article.select }}</div>
        <div class="md-subhead">完結日期：{{ item.article.datepicker }}</div>
        <div class="md-body-1 text-v-html" v-html="item.article.textarea"></div>
      </md-card-content>

      <!-- storage -->
      <md-card-content v-if="item.article.template === 6">
        <md-card-media v-if="item.article.image">
          <img :src="item.article.image" alt="">
        </md-card-media>
        <div class="md-title">{{ item.article.title }}</div>
        <div class="md-subhead">購買日期：{{ item.article.datepicker }}</div>
        <div class="md-subhead">
          <md-icon>share_location</md-icon>
          存放地點：{{ item.article.text }}
        </div>
        <div class="md-body-1 text-v-html" v-html="item.article.textarea"></div>
      </md-card-content>

      <md-card-actions md-alignment="space-between">

        <md-button class="md-icon-button md-dense"
           @click="editArticle(index)">
          <md-icon :md-src="require('../assets/icon/action-addEdit.svg')"></md-icon>
        </md-button>

        <md-button class="md-icon-button md-dense"
          @click="deleteArticle(index)">
          <md-icon :md-src="require('../assets/icon/action-delete.svg')"></md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <div class="md-layout md-alignment-center-space-around">
            <md-icon :md-src="require('../assets/icon/action-save.svg')"></md-icon>
            <span>19</span>
          </div>
        </md-button>

        <md-button class="md-icon-button">
          <div class="md-layout md-alignment-center-space-around">
            <md-icon :md-src="require('../assets/icon/action-good.svg')"></md-icon>
            <span>19</span>
          </div>
        </md-button>

        <!-- <div class="line-it-button" data-lang="zh_Hant" data-type="share-b" data-ver="3" data-url="http://192.168.0.6:8080/#/Collection" data-color="grey" data-size="small" data-count="true"></div>
        <div class="line-it-button" data-lang="zh_Hant" data-type="friend" data-lineid="@661mbqmr" data-count="true" style="display: none;"></div>
        <md-button>
          <a href="http://line.naver.jp/R/msg/text/?大家跟我一起用Line分享吧!%0D%0Ahttps://showanne.github.io/">
            <img src="https://social-plugins.line.me/img/button/ja/20x20.png" />
          </a>
        </md-button>
         <a expr:href='&amp;quot;http://line.naver.jp/R/msg/text/?&amp;quot; + data:post.title +
        &amp;quot;%0D%0A&amp;quot; + data:post.url + &amp;quot;&amp;quot;'>
          <img src='https://social-plugins.line.me/img/button/ja/20x20.png'/>
        </a> -->
        <md-button class="md-icon-button md-dense">
          <a :href="'http://line.naver.jp/R/msg/text/?DTNS分享吧！–' + item.article.title + '&nbsp;%0D%0Ahttps://showanne.github.io/DTNS'">
            <md-icon :md-src="require('../assets/icon/action-share.svg')"></md-icon>
          </a>
        </md-button>
      </md-card-actions>
    </md-card>
</template>

<script>
export default {
  name: 'TempCardForMember',
  data () {
    return {

    }
  },
  props: {
    // 外層傳入的 articleM[]
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    async editArticle (index) {
      alert('editArticle', index)
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
    deleteArticle (index) {
      alert('deleteArticle', index)
    }
  },
  mounted () {
    // 有圖片才更新網址
    if (this.item.article.image) {
      // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
      this.item.article.image = `${process.env.VUE_APP_API}/file/${this.item.article.image}`
    }
    // 處理日期格式
    if (this.item.article.datepicker || this.item.article.date) {
      this.item.article.datepicker = new Date(this.item.article.datepicker).toLocaleDateString()
      this.item.article.date = new Date(this.item.article.date).toLocaleDateString()
    }
    console.log(this.item.article)
    // console.log(this.tempList[this.item.article.template].subhead)
  }
}
</script>
