<template>
    <md-card md-with-hover>
      <md-card-header class="md-layout">
        <md-avatar class="md-large md-elevation-5">
          <img :src="item.avatar" alt="Avatar">
        </md-avatar>
        <div class="md-layout-item md-subhead">{{ item.author }}</div>
        <div class="md-layout-item md-subhead">
          <md-icon :md-src="require('../assets/icon/dateS.svg')"></md-icon>
          <span>{{ item.date }}</span>
        </div>
      </md-card-header>

      <!-- share -->
      <md-card-content v-if="item.template === 0">
        <md-card-media v-if="item.image">
          <img :src="item.image" alt="">
        </md-card-media>

        <div class="md-title text-truncate">{{ item.title }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.text"></div>
        <!-- showCardById 顯示個別文章的 modal -->
        <span class="md-caption" @click="showCardById = true">more...</span>
      </md-card-content>

      <!-- postIt -->
      <md-card-content v-if="item.template === 1">
        <div class="md-title text-truncate">{{ item.title }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.textarea"></div>
        <!-- showCardById 顯示個別文章的 modal -->
        <span class="md-caption" @click="showCardById = true">more...</span>
      </md-card-content>

      <!-- todo -->
      <md-card-content v-if="item.template === 2">
        <div class="md-title text-truncate">{{ item.title }}</div>
        <div class="md-subhead lh-4">
          <md-icon>alarm</md-icon>
          期限：{{ item.datepicker }}
        </div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.textarea"></div>
        <!-- showCardById 顯示個別文章的 modal -->
        <span class="md-caption" @click="showCardById = true">more...</span>
      </md-card-content>

      <!-- diary -->
      <md-card-content v-if="item.template === 3">
        <div class="md-title text-truncate">{{ item.title }}</div>
        <div class="md-subhead lh-4">
          <md-icon>event_note</md-icon>
          期限：{{ item.datepicker }}
        </div>
        <div class="md-subhead lh-4">
          <md-icon>face</md-icon>
          心情：{{ item.select }}
        </div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.textarea"></div>
        <!-- showCardById 顯示個別文章的 modal -->
        <span class="md-caption" @click="showCardById = true">more...</span>
      </md-card-content>

      <!-- notes -->
      <md-card-content v-if="item.template === 4">
        <div class="md-title text-truncate">{{ item.title }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.textarea"></div>
        <!-- showCardById 顯示個別文章的 modal -->
        <span class="md-caption" @click="showCardById = true">more...</span>
      </md-card-content>

      <!-- novel -->
      <md-card-content v-if="item.template === 5">
        <md-card-media v-if="item.image">
          <img :src="item.image" alt="">
        </md-card-media>

        <div class="md-title text-truncate">{{ item.title }}</div>
        <div class="md-subhead lh-4">
          <md-icon>emoji_emotions</md-icon>
          作者：{{ item.text }}
        </div>
        <div class="md-subhead lh-4">
          <md-icon>book</md-icon>
          是否完結：{{ item.select }}
        </div>
        <div class="md-subhead lh-4">
          <md-icon>event_available</md-icon>
          完結日期：{{ item.datepicker }}
        </div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.textarea"></div>
        <!-- showCardById 顯示個別文章的 modal -->
        <span class="md-caption" @click="showCardById = true">more...</span>
      </md-card-content>

      <!-- storage -->
      <md-card-content v-if="item.template === 6">
        <md-card-media v-if="item.image">
          <img :src="item.image" alt="">
        </md-card-media>
        <div class="md-title text-truncate">{{ item.title }}</div>
        <div class="md-subhead lh-4">
          <md-icon>today</md-icon>
          購買日期：{{ item.datepicker }}
          </div>
        <div class="md-subhead lh-4">
          <md-icon>share_location</md-icon>
          存放地點：{{ item.text }}
        </div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.textarea"></div>
        <!-- showCardById 顯示個別文章的 modal -->
        <span class="md-caption" @click="showCardById = true">more...</span>
      </md-card-content>

      <md-card-actions  md-alignment="space-between">
        <md-button class="md-icon-button">
          <md-icon :md-src="require('../assets/icon/temp-'+tempIcon+'.svg')"></md-icon>
        </md-button>

        <md-speed-dial class="md-bottom-right" md-direction="top"  md-event="click">
          <md-speed-dial-target class="md-dense">
            <md-icon class="md-morph-initial">add</md-icon>
            <md-icon class="md-morph-final">more</md-icon>
          </md-speed-dial-target>

          <md-speed-dial-content>
            <md-button class="md-icon-button md-dense" @click="saveArticle = true">
              <md-icon :md-src="require('../assets/icon/action-save.svg')"></md-icon>
              <md-tooltip md-direction="right" md-delay="300">儲存</md-tooltip>
              <!-- {{ saveNum }} -->
            </md-button>

            <md-button class="md-icon-button md-dense" @click="reportArticle = true">
              <md-icon :md-src="require('../assets/icon/action-report.svg')"></md-icon>
              <md-tooltip md-direction="right" md-delay="300">檢舉</md-tooltip>
              <!-- {{ report }} -->
            </md-button>

            <md-button class="md-icon-button md-dense" @click="likeArticle = true">
              <md-icon :md-src="require('../assets/icon/action-good.svg')"></md-icon>
              <md-tooltip md-direction="right" md-delay="300">按讚</md-tooltip>
              <!-- {{ likeNum }} -->
            </md-button>

            <md-button class="md-icon-button md-dense">
              <a :href="'http://line.naver.jp/R/msg/text/?DTNS分享吧！– ' + item.title + '%0D%0Ahttps://showanne.github.io/DTNS/#/'" target="_blank">
                <md-icon :md-src="require('../assets/icon/action-share.svg')"></md-icon>
              </a>
              <md-tooltip md-direction="right" md-delay="300">分享</md-tooltip>
            </md-button>

            <!-- <div class="line-it-button" data-lang="zh_Hant" data-type="share-b" data-ver="3" data-url="http://192.168.0.6:8080/#/Collection" data-color="grey" data-size="small" data-count="true"></div>

            <div class="line-it-button" data-lang="zh_Hant" data-type="friend" data-lineid="@661mbqmr" data-count="true" style="display: none;"></div>
            <a href="http://line.naver.jp/R/msg/text/?大家跟我一起用Line分享吧!%0D%0Ahttps://showanne.github.io/">
              <img src="https://social-plugins.line.me/img/button/ja/20x20.png" />
            </a>
            <a expr:href='&amp;quot;http://line.naver.jp/R/msg/text/?&amp;quot; + data:post.title +
            &amp;quot;%0D%0A&amp;quot; + data:post.url + &amp;quot;&amp;quot;'>
              <img src='https://social-plugins.line.me/img/button/ja/20x20.png'/>
            </a> -->

          </md-speed-dial-content>
        </md-speed-dial>
      </md-card-actions>

      <TempCardShowById
        v-if="showCardById"
        :showCardById="showCardById"
        @closeModal="showCardById = false"
        :tempCardId="item._id"
        :tempIcon="tempIcon"
        :tempNum="item.template">
        <!-- :showCardById="showCardById" 傳值進 TempCardShowById.vue -->
        <!-- @closeModal="showCardById = false" 接收內層傳來的值 並做 "" 內動作是改 showCardById 的值 -->
      </TempCardShowById>

      <md-dialog-alert
        :md-active.sync="saveArticle"
        md-content="儲存文章！"
        md-confirm-text="確認" />

      <md-dialog-confirm
        :md-active.sync="reportArticle"
        md-title="確認要檢舉這篇文章？"
        :md-content="'檢舉 <strong>編號 ' + item._id.substr(3, 6) + '*** </strong>文章'"
        md-confirm-text="確認"
        md-cancel-text="取消"
        @md-cancel="onCancel"
        @md-confirm="onConfirm" />

      <md-dialog-alert
        :md-active.sync="likeArticle"
        :md-content="item.author + ' 感謝您按讚！'"
        md-confirm-text="確認" />

    </md-card>
</template>

<script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>

<script>
import TempCardShowById from '@/components/TempCardShowById.vue'

export default {
  name: 'TempCardShare',
  data () {
    return {
      showCardById: false,
      saveArticle: false,
      reportArticle: false,
      likeArticle: false,
      report: ''
    }
  },
  components: {
    TempCardShowById
  },
  props: {
    // 外層傳入的 article[]
    item: {
      type: Object,
      required: true
    },
    // 外層傳入的 icon name 給 svg 指定檔名用
    tempIcon: {
      type: String,
      required: true
    }
  },
  methods: {
    onConfirm () {
      this.report = 'Confirm'
    },
    onCancel () {
      this.report = 'Cancel'
    }
    // async likeArticle () {
    //   // alert(this.item._id)
    //   // 如果不是會員就不跑下面了
    //   if( user.role !== 0 || user.role !== 1 ) return
    //   try {
    //     // 按讚文章 (會員)  /  likeArticle
    //     await this.axios.patch('/article/like' + this.item._id, {
    //       like: this.name // 放目前的會員
    //     }, {
    //       headers: {
    //       // 驗證欄位 'Bearer ' + token  -> Bearer要空格
    //         authorization: 'Bearer ' + this.$store.state.jwt.token
    //       }
    //     })
    //     this.article[rowIndex].likeNum += 1
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  // showModal () {
  //   this.showCardById = true
  // },
  // closeModal (val) {
  // this.showCardById = val
  // }
  }
}
</script>
