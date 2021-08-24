<template>
  <div id="news">
    <div class="md-headline">最新消息</div>
    <div class="md-layout-nowrap">
      <div v-for="(news, n) in newsCard" :key="n"
        class="md-layout-item md-size-100">
        <md-card md-with-hover>
          <md-ripple class="bg-warn2 p-3 my-3 md-layout md-alignment-center-space-between">
            <div class="text-support">
              <md-icon class="mr-2 tc-dark4">maps_ugc</md-icon>
              <span>{{ news.news }}</span>
            </div>
            <div class="md-body-1 lh-4 tc-dark4">
              {{ news.date }}
            </div>
              <!-- <div class="md-caption lh-4">
                #{{ n+1 }}
              </div> -->
          </md-ripple>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      newsCard: [
        {
          date: '2021/08/08',
          news: '編輯功能更新上線囉！大家一起來試試吧！'
        },
        {
          date: '2021/08/13',
          news: '全新推出問題頁面，有任何使用上的問題都歡迎反應喔！'
        }
      ]
    }
  }
}
</script>
