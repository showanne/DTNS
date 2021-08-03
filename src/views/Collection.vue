<template>
  <div id="collection" class="md-layout md-alignment-center">

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
  }
}
</script>
