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
        <div class="md-subhead">期限：{{ item.datepicker }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.textarea"></div>
        <!-- showCardById 顯示個別文章的 modal -->
        <span class="md-caption" @click="showCardById = true">more...</span>
      </md-card-content>

      <!-- diary -->
      <md-card-content v-if="item.template === 3">
        <div class="md-title text-truncate">{{ item.title }}</div>
        <div class="md-subhead">期限：{{ item.datepicker }}</div>
        <div class="md-subhead">心情：{{ item.select }}</div>
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
        <div class="md-subhead">作者：{{ item.text }}</div>
        <div class="md-subhead">是否已完結：{{ item.select }}</div>
        <div class="md-subhead">完結日期：{{ item.datepicker }}</div>
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
        <div class="md-subhead">購買日期：{{ item.datepicker }}</div>
        <div class="md-subhead">
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
            <md-button class="md-icon-button md-dense">
              <md-icon :md-src="require('../assets/icon/action-save.svg')"></md-icon>
              <md-tooltip md-direction="right" md-delay="300">39</md-tooltip>

            </md-button>

            <md-button class="md-icon-button md-dense">
              <md-icon :md-src="require('../assets/icon/action-good.svg')"></md-icon>
              <md-tooltip md-direction="right" md-delay="300">59</md-tooltip>
            </md-button>

            <md-button class="md-icon-button md-dense">
              <a :href="'http://line.naver.jp/R/msg/text/?DTNS分享吧！–' + item.title + '&nbsp;%0D%0Ahttps://showanne.github.io/DTNS'">
                <md-icon :md-src="require('../assets/icon/action-share.svg')"></md-icon>
              </a>
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
    </md-card>
</template>

<script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>

<script>
import TempCardShowById from '@/components/TempCardShowById.vue'

export default {
  name: 'TempCardShare',
  data () {
    return {
      showCardById: false
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
  }
  // methods: {
  // showModal () {
  //   this.showCardById = true
  // },
  // closeModal (val) {
  // this.showCardById = val
  // }
  // }
}
</script>
