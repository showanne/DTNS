<template>
  <div id="home">
    <div class="md-display-3 lh-5 pl-5">文字的溫度</div>
    <div class="md-display-1 pl-5">每字美句每個你喜歡的瞬間</div>
    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-small-size-100">
        <md-card class="md-layout md-alignment-center-center">
          <div class="md-layout-item md-size-100 md-small-size-20">
            <md-card-media>
              <md-icon class="md-home-icon"
                :md-src="require('../assets/icon/action-record.svg')"
              ></md-icon>
            </md-card-media>
          </div>
          <div class="md-layout-item md-size-100 md-small-size-80">
            <md-card-header>
              <div class="md-title">隨時記錄</div>
              <div class="md-subhead">來自一本書、一句詞、一個讓你感動的瞬間。</div>
              <md-button to="/edit">馬上開始...</md-button>
            </md-card-header>
          </div>
        </md-card>
        <md-card class="md-small-hide">
          <md-card-header>
            <md-button class="md-title">100 K+</md-button>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-size-33 md-small-size-100">
        <md-card class="md-layout md-alignment-center-center">
          <div class="md-layout-item md-size-100 md-small-size-20">
            <md-card-media>
              <md-icon class="md-home-icon"
                :md-src="require('../assets/icon/action-save.svg')"
              ></md-icon>
            </md-card-media>
          </div>
          <div class="md-layout-item md-size-100 md-small-size-80">
            <md-card-header>
              <div class="md-title">方便儲存</div>
              <div class="md-subhead">紀錄讓你心動的剎那，隨時回味翻找查詢。</div>
              <md-button to="/member">立即註冊...</md-button>
            </md-card-header>
          </div>
        </md-card>
        <md-card class="md-small-hide">
          <md-card-header>
            <md-button class="md-title">100 W+</md-button>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-size-33 md-small-size-100">
        <md-card class="md-layout md-alignment-center-center">
          <div class="md-layout-item md-size-100 md-small-size-20">
            <md-card-media>
              <md-icon class="md-home-icon"
                :md-src="require('../assets/icon/action-share.svg')"
              ></md-icon>
            </md-card-media>
          </div>
          <div class="md-layout-item md-size-100 md-small-size-80">
            <md-card-header>
              <div class="md-title">便捷分享</div>
              <div class="md-subhead">立即跟親朋好友分享，創造更好的文字風景。</div>
              <md-button to="/collection">來去看看...</md-button>
            </md-card-header>
          </div>
        </md-card>
        <md-card class="md-small-hide">
          <md-card-header>
            <md-button class="md-title">666 K+</md-button>
          </md-card-header>
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
