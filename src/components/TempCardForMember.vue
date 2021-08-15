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
        <div class="md-title text-truncate">{{ item.article.title }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.article.text"></div>
      </md-card-content>

      <!-- postIt -->
      <md-card-content v-if="item.article.template === 1">
        <div class="md-title text-truncate">{{ item.article.title }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.article.text"></div>
      </md-card-content>

      <!-- todo -->
      <md-card-content v-if="item.article.template === 2">
        <div class="md-title text-truncate">{{ item.article.title }}</div>
        <div class="md-subhead">期限：{{ item.article.datepicker }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.article.text"></div>
      </md-card-content>

      <!-- diary -->
      <md-card-content v-if="item.article.template === 3">
        <div class="md-title text-truncate">{{ item.article.title }}</div>
        <div class="md-subhead">期限：{{ item.article.datepicker }}</div>
        <div class="md-subhead">心情：{{ item.article.select }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.article.textarea"></div>
      </md-card-content>

      <!-- notes -->
      <md-card-content v-if="item.article.template === 4">
        <div class="md-title text-truncate">{{ item.article.title }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.article.textarea"></div>
      </md-card-content>

      <!-- novel -->
      <md-card-content v-if="item.article.template === 5">
        <md-card-media v-if="item.article.image">
          <img :src="item.article.image" alt="">
        </md-card-media>
        <div class="md-title text-truncate">{{ item.article.title }}</div>
        <div class="md-subhead">作者：{{ item.article.text }}</div>
        <div class="md-subhead">是否已完結：{{ item.article.select }}</div>
        <div class="md-subhead">完結日期：{{ item.article.datepicker }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.article.textarea"></div>
      </md-card-content>

      <!-- storage -->
      <md-card-content v-if="item.article.template === 6">
        <md-card-media v-if="item.article.image">
          <img :src="item.article.image" alt="">
        </md-card-media>
        <div class="md-title text-truncate">{{ item.article.title }}</div>
        <div class="md-subhead">購買日期：{{ item.article.datepicker }}</div>
        <div class="md-subhead">
          <md-icon>share_location</md-icon>
          存放地點：{{ item.article.text }}
        </div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.article.textarea"></div>
      </md-card-content>

      <md-card-actions md-alignment="space-between">

        <md-button class="md-icon-button md-dense">
          <md-icon :md-src="require('../assets/icon/action-addEdit.svg')"></md-icon>
        </md-button>

        <md-button class="md-icon-button md-dense">
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
  mounted () {
    // console.log(this.item.article.template)
    // console.log(this.tempList[this.item.article.template].subhead)
  }
}
</script>
