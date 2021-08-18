<template>
  <div id="home">
    <div class="md-layout">{{ carousel }}</div>
    <div class="md-layout"  v-for="(c ,i) in carousel" :key="i"><span v-if="c !== ''">{{ i }}{{ c.author }}{{ c.image }}</span>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <div class="intro h-content">
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
      </div>
      <div class="md-layout-item md-size-100 mx-auto">
        <!-- <md-card> -->
          <carousel
            :per-page="1"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigationEnabled
            navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <!-- <slide v-for="(c ,i) in carousel" :key="i">
              <div class="carousel-caption">
                <h4>
                  <md-icon>person</md-icon>
                  {{ c.author }}
                </h4>
              </div>
              <img :src="c.image" :alt="c.title" />
            </slide> -->

            <slide>
              <div class="carousel-caption">
                <h4>
                  <md-icon>person</md-icon>
                  Yellowstone
                </h4>
              </div>
              <img :src="carousel2" alt="carousel2" />
            </slide>
            <slide>
              <div class="carousel-caption">
                <h4>
                  <md-icon>person</md-icon>
                  Unitesvykjvyfvyu
                </h4>
              </div>
              <img :src="carousel3" alt="carousel3" />
            </slide>
          </carousel>
        <!-- </md-card> -->
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
      carousel: [],
      carousel1: 'https://picsum.photos/1920/1080/?random=1',
      carousel2: 'https://picsum.photos/1920/1080/?random=2',
      carousel3: 'https://picsum.photos/1920/1080/?random=3'
      // carousel1: require("@/assets/img/nature-2.jpg"),
      // carousel2: require("@/assets/img/nature.jpg"),
      // carousel3: require("@/assets/img/nature-3.jpg")
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/article/carousel')
      this.carousel = data.result.map(item => {
        if (item.image) {
          item.image = `${process.env.VUE_APP_API}/file/${item.image}`
        }
        if (item.image !== '') {
          return item
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
