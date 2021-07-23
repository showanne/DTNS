<template>
  <div id="collection" class="md-layout md-gutter md-alignment-center">

    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="1:1">
              <img src="https://picsum.photos/600/600/?random=1" alt="Skyscraper">
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title">Solid background</span>
                <span class="md-subhead">1/1 image</span>
              </md-card-header>

              <md-card-actions  md-alignment="space-between">
              <md-button class="md-icon-button">
                <md-icon :md-src="require('../assets/icon/icon-share.svg')"></md-icon>
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
              <span>59</span>

              <md-button class="md-icon-button">
                <md-icon>cloud_download</md-icon>
              </md-button>

            </md-card-actions>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
    </div>

    <div class="md-accent md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-ripple>
            <md-card-header>
              <md-avatar>
                <Avatar />
              </md-avatar>
              <div class="md-title">Accent color</div>
              <div class="md-subhead">With hover and ripple effects</div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </md-card-content>

            <md-card-actions  md-alignment="space-between">
              <md-button class="md-icon-button">
                <md-icon :md-src="require('../assets/icon/icon-postIt.svg')"></md-icon>
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
              <span>59</span>

              <md-button class="md-icon-button">
                <md-icon>cloud_download</md-icon>
              </md-button>

            </md-card-actions>
          </md-ripple>
        </md-card>
    </div>

    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-header>
            <md-avatar>
              <Avatar />
            </md-avatar>

            <div class="md-title">Title goes here</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>

          <md-card-media>
            <img src="https://picsum.photos/300/300/?random=2" alt="People">
          </md-card-media>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
          </md-card-content>

          <md-card-actions  md-alignment="space-between">
              <md-button class="md-icon-button">
                <md-icon :md-src="require('../assets/icon/icon-novel.svg')"></md-icon>
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
              <span>59</span>

              <md-button class="md-icon-button">
                <md-icon>cloud_download</md-icon>
              </md-button>

            </md-card-actions>
        </md-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  // @import "~vue-material/dist/theme/engine";;
  // @include md-register-theme("orange-card", (
  //   primary: md-get-palette-color(orange, 500)
  // ));
  // @import "~vue-material/base/theme";
  // @import "~vue-material/components/MdCard/theme";

  .md-layout-item {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>

<script>
// components元件
import Avatar from '@/components/Avatar.vue'

export default {
  name: 'Collection',
  components: {
    Avatar
  }
}
</script>
