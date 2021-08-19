<template>
  <div id="home">
    <div class="text-title">文字的溫度</div>
    <div class="text-subhead">每字美句每個你喜歡的瞬間</div>
    <!-- 網頁功能簡介 -->
    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-small-size-100">
        <md-card class="md-layout md-alignment-center-center">
          <div class="md-layout-item md-size-100 md-small-size-30">
            <md-card-media>
              <md-icon class="md-home-icon"
                :md-src="require('../assets/icon/action-record.svg')"
              ></md-icon>
            </md-card-media>
          </div>
          <div class="md-layout-item md-size-100 md-small-size-70">
            <md-card-header>
              <div class="md-title">隨時記錄</div>
              <div class="md-subhead">來自一本書、一句詞、一個讓你感動的瞬間。</div>
              <md-button to="/edit"
                class="md-raised md-accent">馬上開始...</md-button>
            </md-card-header>
          </div>
        </md-card>
      </div>
      <div class="md-layout-item md-size-33 md-small-size-100">
        <md-card class="md-layout md-alignment-center-center">
          <div class="md-layout-item md-size-100 md-small-size-30">
            <md-card-media>
              <md-icon class="md-home-icon"
                :md-src="require('../assets/icon/action-save.svg')"
              ></md-icon>
            </md-card-media>
          </div>
          <div class="md-layout-item md-size-100 md-small-size-70">
            <md-card-header>
              <div class="md-title">方便儲存</div>
              <div class="md-subhead">紀錄讓你心動的剎那，隨時回味翻找查詢。</div>
              <md-button to="/member"
                class="md-raised md-accent">立即註冊...</md-button>
            </md-card-header>
          </div>
        </md-card>
      </div>
      <div class="md-layout-item md-size-33 md-small-size-100">
        <md-card class="md-layout md-alignment-center-center">
          <div class="md-layout-item md-size-100 md-small-size-30">
            <md-card-media>
              <md-icon class="md-home-icon"
                :md-src="require('../assets/icon/action-share.svg')"
              ></md-icon>
            </md-card-media>
          </div>
          <div class="md-layout-item md-size-100 md-small-size-70">
            <md-card-header>
              <div class="md-title">便捷分享</div>
              <div class="md-subhead">立即跟親朋好友分享，創造更好的文字風景。</div>
              <md-button to="/collection"
                class="md-raised md-accent">來去看看...</md-button>
            </md-card-header>
          </div>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {

    }
  },
  mounted () {}
}
</script>
