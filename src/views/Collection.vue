<template>
  <div id="collection" class="md-layout md-alignment-center">
    <div class="md-layout-item md-size-100">
      <md-tabs  md-alignment="fixed">
                <!-- v-for="(temp, T) in tempList"
                :key="T" @click="tempShow(T)" -->
        <md-tab id="tab-home" md-label="便利貼"
                to="/collection/postIt"
                :md-icon="require('../assets/icon/temp-postIt.svg')"></md-tab>
        <md-tab id="tab-pages" md-label="美字美句分享"
                to="/collection"
                :md-icon="require('../assets/icon/temp-share.svg')"></md-tab>
        <md-tab id="tab-pages1" md-label="待辦事項"
                to="/collection/todo"
                :md-icon="require('../assets/icon/temp-todo.svg')"></md-tab>
        <md-tab id="tab-page2s" md-label="心情隨筆"
                to="/collection/diary"
                :md-icon="require('../assets/icon/temp-diary.svg')"></md-tab>
        <md-tab id="tab-posts" md-label="筆記"
                to="/collection/notes"
                :md-icon="require('../assets/icon/temp-notes.svg')"></md-tab>
        <md-tab id="tab-favorites" md-label="小說"
                to="/collection/novel"
                :md-icon="require('../assets/icon/temp-novel.svg')"></md-tab>
        <md-tab id="tab-favorites" md-label="儲物清單"
                to="/collection/storage"
                :md-icon="require('../assets/icon/temp-storage.svg')"></md-tab>
      </md-tabs>
    </div>
    <div class="md-layout-item md-size-100">
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>

    <!-- 只有圖片的版型 -->
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-header>
            <md-avatar class="md-large md-elevation-5">
              <Avatar />
            </md-avatar>

            <div class="md-title">只有圖片的版型</div>
            <div class="md-subhead">Nick name</div>
          </md-card-header>

          <md-card-media>
            <img src="https://picsum.photos/300/300/?random=2" alt="People">
          </md-card-media>

          <!-- <md-card-content>
            Lorem ipsum.
          </md-card-content> -->

          <md-card-actions  md-alignment="space-between">
              <md-button class="md-icon-button">
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
              </md-button>

            </md-card-actions>
        </md-card>
    </div>

    <!-- 圖片+文字描述的版型 -->
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-header>
            <md-avatar class="md-large md-elevation-5">
              <Avatar />
            </md-avatar>

            <div class="md-title">圖片+文字描述的版型</div>
            <div class="md-subhead">Nick name</div>
          </md-card-header>

          <md-card-media>
            <img src="https://picsum.photos/1920/1080/?random=2" alt="People">
          </md-card-media>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </md-card-content>

          <md-card-actions  md-alignment="space-between">
              <md-button class="md-icon-button">
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
              </md-button>

            </md-card-actions>
        </md-card>
    </div>

    <!-- 只有文字(引用佳句)的版型 -->
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-header>
            <md-avatar class="md-large md-elevation-5">
              <Avatar />
            </md-avatar>

            <div class="md-title">只有文字(引用佳句)的版型</div>
            <div class="md-subhead">Nick name</div>
          </md-card-header>

            <md-card-content class="blockquote">
              <figure>
                <blockquote>
                    <p>Edit this content to add your own quote</p>
                </blockquote>

                <figcaption>––
                  <span>作者 ngoewsghep</span>，
                  <cite>
                    <a href="">出處 Brave New World</a>
                  </cite>
                </figcaption>
              </figure>
            </md-card-content>

          <md-card-actions  md-alignment="space-between">
              <md-button class="md-icon-button">
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
              </md-button>

            </md-card-actions>
        </md-card>
    </div>

    <!-- 只有文字(文章或句子)的版型 -->
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-header>
            <md-avatar class="md-large md-elevation-5">
              <Avatar />
            </md-avatar>

            <div class="md-title">只有文字(文章或句子)的版型</div>
            <div class="md-subhead">Nick name</div>
          </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod neque optio et delectus obcaecati quos suscipit asperiores laborum soluta illum, culpa reiciendis iure reprehenderit adipisci magni officia hic laudantium!
            </md-card-content>

          <md-card-actions  md-alignment="space-between">
              <md-button class="md-icon-button">
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
              </md-button>

            </md-card-actions>
        </md-card>
    </div>

    <!-- 只有文字(待辦事項)的版型 -->
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-header>
            <md-avatar class="md-large md-elevation-5">
              <Avatar />
            </md-avatar>

            <div class="md-title">只有文字(待辦事項)的版型</div>
            <div class="md-subhead">Nick name</div>
          </md-card-header>

            <md-card-content>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </md-card-content>

          <md-card-actions  md-alignment="space-between">
              <md-button class="md-icon-button">
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
              </md-button>

            </md-card-actions>
        </md-card>
    </div>

        <!-- 只有圖片的版型 -->
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-header>
            <md-avatar class="md-large md-elevation-5">
              <Avatar />
            </md-avatar>

            <div class="md-title">只有圖片的版型</div>
            <div class="md-subhead">Nick name</div>
          </md-card-header>

          <md-card-media>
            <img src="https://picsum.photos/300/300/?random=2" alt="People">
          </md-card-media>

          <!-- <md-card-content>
            Lorem ipsum.
          </md-card-content> -->

          <md-card-actions  md-alignment="space-between">
              <md-button class="md-icon-button">
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
              </md-button>

            </md-card-actions>
        </md-card>
    </div>

  </div>
</template>

<script>
// components元件
import Avatar from '@/components/Avatar.vue'

export default {
  name: 'Collection',
  components: {
    Avatar
  },
  data () {
    return {
      tempList: [
        { show: true, name: '便利貼', subhead: 'postIt' },
        { show: true, name: '美字美句分享', subhead: 'share' },
        { show: this.$store.getters.user.isSignIn, name: '待辦事項', subhead: 'todo' },
        { show: this.$store.getters.user.isSignIn, name: '心情隨筆', subhead: 'diary' },
        { show: this.$store.getters.user.isSignIn, name: '筆記', subhead: 'notes' },
        { show: this.$store.getters.user.isSignIn, name: '小說', subhead: 'novel' },
        { show: this.$store.getters.user.isSignIn, name: '儲物清單', subhead: 'storage' }
      ]
    }
  },
  methods: {
    tempShow (T) {
      console.log(T)
      // this.tempForm.template = T
    }
  }
}
</script>
