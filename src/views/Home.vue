<template>
  <div id="home">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <span class="md-headline">文字的溫度</span><br>
        <span class="md-headline">每字美句每個你喜歡的瞬間</span><br>
        <span class="md-subheading mx-small-3">隨時記錄</span>
        <span class="md-subheading mx-small-3">方便儲存</span>
        <span class="md-subheading mx-small-3">便捷分享</span>
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
