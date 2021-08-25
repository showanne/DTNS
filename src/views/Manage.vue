<template>
  <div id="manage">
    <md-tabs class="md-accent md-small-none-manage" md-alignment="fixed" md-sync-route @md-changed="checkNewPosts">
      <template slot="md-tab" slot-scope="{ tab }" class="md-primary">
        {{ tab.label }}
        <i class="badge bg-dark3" v-if="tab.data.badge">!</i>
        <!-- <i class="badge" v-if="tab.data.badge">{{ tab.data.badge }}</i> -->
      </template>

      <!-- Home 管理員身分顯示頁面 -->
      <!-- <md-tab id="tab-Home" md-label="管理員身分資訊" to="/manage" exact>
        <router-view></router-view>
      </md-tab> -->
      <!-- memberData 會員資料管理頁 -->
      <md-tab id="tab-memberData" md-label="會員資料管理" to="/manage/memberData"
        :md-template-data="{ badge: newPosts }" @click="clearNewPosts">
        <router-view></router-view>
      </md-tab>
      <!-- article 文章管理頁 -->
      <md-tab id="tab-article" md-label="文章管理" to="/manage/article"
        :md-template-data="{ badge: newPosts }" @click="clearNewPosts">
        <router-view></router-view>
      </md-tab>
      <!-- template 模板管理頁&模板欄位管理 -->
      <md-tab id="tab-template" md-label="文章模板管理" to="/manage/template">
        <router-view></router-view>
      </md-tab>
      <!-- reply 問題回復 -->
      <md-tab id="tab-reply" md-label="問題回復" to="/manage/reply"
        :md-template-data="{ badge: newPosts }" @click="clearNewPosts">
        <router-view></router-view>
      </md-tab>
      <!-- special 最新消息或優惠訊息 -->
      <!-- <md-tab id="tab-special" md-label="最新消息" to="/manage/special">
        <router-view></router-view>
      </md-tab> -->
      <!-- editApp 網頁版面及內容編輯 -->
      <!-- <md-tab id="tab-editApp" md-label="網頁內容編輯" to="/manage/editApp">
        <router-view></router-view>
      </md-tab> -->
    </md-tabs>
    <!-- 800px 以下尺寸 不顯示任何資料 -->
    <md-empty-state
      class="md-small-show-manage tc-warn2"
      md-icon="no_accounts"
      md-label="為了您的管理體驗"
      md-description="螢幕尺寸小於 800px 管理頁面將不會顯示任何資料！">
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: 'Manage',
  data () {
    return {
      articleTotal: 0,
      newPosts: 0,
      checkInterval: null
    }
  },
  methods: {
    clearCheckPosts () {
      window.clearInterval(this.checkInterval)
      this.checkInterval = null
    },
    clearNewPosts () {
      this.clearCheckPosts()
      this.newPosts = 0
    },
    checkNewPosts (activeTab) {
      if (activeTab !== 'tab-posts' && !this.checkInterval) {
        this.checkInterval = window.setInterval(() => {
          if (this.newPosts === 99) {
            this.newPosts = '99+'
            this.clearCheckPosts()
          } else {
            this.newPosts++
          }
        }, 1000)
      }
    }
  },
  mounted () {
    this.checkNewPosts()
  }
}
</script>
