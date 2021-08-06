<template>
  <md-card md-with-hover>
    <md-card-header>
      <md-avatar class="md-large md-elevation-5">
        <Avatar />
      </md-avatar>

      <div class="md-title">{{ item.title }}</div>
      <div class="md-subhead">{{ item._id }}</div>
      <div class="md-subhead">
        <md-icon>event_note</md-icon>
        {{ item.date }}
      </div>
    </md-card-header>

    <md-card-media v-if="item.image">
      <img :src="item.image" alt="People">
    </md-card-media>

    <md-card-content>
      {{ item.textarea }}
    </md-card-content>

    <md-card-actions  md-alignment="space-between">
      <md-button class="md-icon-button">
        <md-icon :md-src="require('../assets/icon/temp-novel.svg')"></md-icon>
      </md-button>

      <md-speed-dial class="md-bottom-right" md-direction="top">
        <md-speed-dial-target>
          <md-icon class="md-morph-initial">add</md-icon>
          <md-icon class="md-morph-final">edit</md-icon>
        </md-speed-dial-target>

        <md-speed-dial-content>

          <md-button class="md-icon-button">
            <md-icon>volunteer_activism</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>thumb_up_alt</md-icon>
            <span>59</span>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>cloud_download</md-icon>
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
      <span>59</span>

      <md-button class="md-icon-button">
        <md-icon>cloud_download</md-icon>
      </md-button> -->

    </md-card-actions>
  </md-card>
</template>

<script>
import Avatar from '@/components/Avatar.vue'

export default {
  name: 'TempCardShare',
  components: {
    Avatar
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
