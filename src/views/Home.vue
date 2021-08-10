<template>
  <div id="home">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <div class="h-content">
          <div class="md-display-3">文字的溫度</div>
          <div class="md-display-2">每字美句每個你喜歡的瞬間</div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33">
              <md-card>
                <md-card-media>
                  <md-icon class="md-size-5x"
                    :md-src="require('../assets/icon/action-addEdit.svg')"
                  ></md-icon>
                </md-card-media>
                <md-card-header>
                  <div class="md-title">隨時記錄</div>
                  <div class="md-subhead">Lorem ipsum dolor sit amet consectetur adi incidunt.</div>
                </md-card-header>
                <md-card-actions>
                  <md-button>一個置中的Action</md-button>
                </md-card-actions>
              </md-card>
              <md-card>
                <md-card-header>
                  <md-button class="md-title">100 K+</md-button>
                </md-card-header>
              </md-card>
            </div>
            <div class="md-layout-item md-size-33">
              <md-card>
                <md-card-media>
                  <md-icon class="md-size-5x"
                    :md-src="require('../assets/icon/action-save.svg')"
                  ></md-icon>
                </md-card-media>
                <md-card-header>
                  <div class="md-title">方便儲存</div>
                  <div class="md-subhead">Lorem ipsum dolor sit amet consectetur adi incidunt.</div>
                </md-card-header>
                <md-card-actions>
                  <md-button>一個置中的Action</md-button>
                </md-card-actions>
              </md-card>
              <md-card>
                <md-card-header>
                  <md-button class="md-title">100 W+</md-button>
                </md-card-header>
              </md-card>
            </div>
            <div class="md-layout-item md-size-33">
              <md-card>
                <md-card-media>
                  <md-icon class="md-size-5x"
                    :md-src="require('../assets/icon/action-share.svg')"
                  ></md-icon>
                </md-card-media>
                <md-card-header>
                  <div class="md-title">便捷分享</div>
                  <div class="md-subhead">Lorem ipsum dolor sit amet consectetur adi incidunt.</div>
                </md-card-header>
                <md-card-actions>
                  <md-button>一個置中的Action</md-button>
                </md-card-actions>
              </md-card>
              <md-card>
                <md-card-header>
                  <md-button class="md-title">666 K+</md-button>
                </md-card-header>
              </md-card>
            </div>
          </div>
        </div>
      </div>
      <div class="md-layout-item md-size-100 mx-auto">
        <md-card>
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
            <slide>
              <div class="carousel-caption">
                <h4>
                  <md-icon>person</md-icon>
                  Beyond
                </h4>
              </div>
              <img :src="carousel1" alt="carousel1" />
            </slide>
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
      carousel1: 'https://picsum.photos/1920/1080/?random=1',
      carousel2: 'https://picsum.photos/1920/1080/?random=2',
      carousel3: 'https://picsum.photos/1920/1080/?random=3'
      // carousel1: require("@/assets/img/nature-2.jpg"),
      // carousel2: require("@/assets/img/nature.jpg"),
      // carousel3: require("@/assets/img/nature-3.jpg")
    }
  }
}
</script>
