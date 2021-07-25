<template>
  <div id="manage">
    <md-tabs md-sync-route @md-changed="checkNewPosts">
      <template slot="md-tab" slot-scope="{ tab }">
        {{ tab.label }} <i class="badge" v-if="tab.data.badge">{{ tab.data.badge }}</i>
      </template>

      <md-tab id="tab-Home" md-label="Home" to="/manage" exact>
        <router-view></router-view>
      </md-tab>
      <md-tab id="tab-reply" md-label="reply" to="/manage/reply" :md-template-data="{ badge: newPosts }" @click="clearNewPosts">
        <router-view></router-view>
      </md-tab>
      <md-tab id="tab-editApp" md-label="editApp" to="/manage/editApp">
        <router-view></router-view>
      </md-tab>
      <md-tab id="tab-memberData" md-label="memberData" to="/manage/memberData">
        <router-view></router-view>
      </md-tab>
      <md-tab id="tab-template" md-label="template" to="/manage/template">
        <router-view></router-view>
      </md-tab>
      <md-tab id="tab-special" md-label="special" to="/manage/special">
        <router-view></router-view>
      </md-tab>
    </md-tabs>

  </div>
</template>

<script>
export default {
  name: 'Manage',
  data () {
    return {
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
