<template>
    <md-card md-with-hover>
      <md-card-header class="md-layout">
        <Avatar class="md-large md-elevation-5" />

        <div class=" md-layout-item md-subhead">{{ item.author }}</div>
        <div class=" md-layout-item md-subhead">
          <md-icon :md-src="require('../assets/icon/dateS.svg')"></md-icon>
          <span>{{ item.date }}</span>
        </div>
      </md-card-header>

      <md-card-content>
        <md-card-media v-if="item.image">
          <img :src="item.image" alt="">
        </md-card-media>

        <div class="md-title text-truncate">{{ item.title }}</div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.textarea"></div>
        <div class="md-body-1 text-truncate word-break-all" v-html="item.text"></div>
        <div class="md-subheading">{{ item.source }}</div>
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
            <md-icon class="md-morph-final">edit</md-icon>
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
              <md-icon :md-src="require('../assets/icon/action-share.svg')"></md-icon>
              <md-tooltip md-direction="right" md-delay="300">109</md-tooltip>
            </md-button>
          </md-speed-dial-content>
        </md-speed-dial>
        <!-- <md-button class="md-icon-button">
          <md-icon :md-src="require('../assets/icon/temp-novel.svg')"></md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>event_note</md-icon>
        </md-button>
        <span>110.07.23</span>

        <md-button class="md-icon-button">
          <md-icon>volunteer_activism</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>thumb_up_alt</md-icon>
        </md-button>
        <span>59</span> -->
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

<script>
import Avatar from '@/components/Avatar.vue'
import TempCardShowById from '@/components/TempCardShowById.vue'

export default {
  name: 'TempCardShare',
  data () {
    return {
      showCardById: false
    }
  },
  components: {
    Avatar,
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
