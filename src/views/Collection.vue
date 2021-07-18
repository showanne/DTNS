<template>
  <div id="collection" class="md-layout md-gutter md-alignment-center">

    <md-card class="md-layout-item md-medium-size-50">
      <md-card-media-actions>
        <md-card-media>
          <img src="https://picsum.photos/450/450/?random=1" alt="Cover">
        </md-card-media>

        <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>bookmark</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-media-actions>
    </md-card>

    <md-card class="md-layout-item md-medium-size-50">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="https://picsum.photos/300/300/?random=1" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Gradient background</span>
            <span class="md-subhead">16/9 image</span>
          </md-card-header>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>

    <md-card class="md-layout-item md-medium-size-50">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <img src="https://picsum.photos/300/300/?random=1" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Solid background</span>
            <span class="md-subhead">1/1 image</span>
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>

    <md-card class="md-accent md-layout-item md-medium-size-50" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Accent color</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

    <md-card class="md-layout-item md-medium-size-50">
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

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
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
