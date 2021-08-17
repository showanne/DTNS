<template>
  <div id="manageReply">
    <md-table v-model="replyForm" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">replyForm</h1>
        </div>

        <!-- <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search..." v-model="search" @input="searchOnTable" />
        </md-field> -->
      </md-table-toolbar>

      <!-- 無資料時顯示 or 載入 loading 動畫 -->
      <md-table-empty-state
        md-icon="submit"
        md-label="Loading...">
        <md-progress-spinner class="md-primary loading" v-if="loading"
          :md-diameter="100" :md-stroke="10"
          md-mode="indeterminate"></md-progress-spinner>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="date">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="暱稱" md-sort-by="name">{{ item.nickname || item.author }}</md-table-cell>
        <md-table-cell md-label="會員">{{ item.member }}</md-table-cell>
        <md-table-cell md-label="主要問題">{{ item.majorIssue }}</md-table-cell>
        <md-table-cell md-label="問題描述" class="text-v-html"
          v-html="item.issueDescription"></md-table-cell>
        <md-table-cell md-label="問題回復" class="text-v-html">
          <md-field v-if="editReply" md-clearable>
            <md-icon>reply</md-icon>
            <md-textarea md-autogrow v-model="item.replyIssue" @input="submitReply"></md-textarea>
          </md-field>
          <span v-else @dblclick="editReply = true" >{{ item.replyIssue }}</span>
        </md-table-cell>
        <md-table-cell md-label="回復">{{ item.reply }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ManageReply',
  data () {
    return {
      // 載入時 loading 動畫
      loading: false,
      search: null,
      searched: [],
      editReply: false,
      replyForm: []
    }
  },
  methods: {
    // 搜尋功能
  //   searchOnTable () {
  //     const toLower = text => {
  //       return text.toString().toLowerCase()
  //     }
  //     const searchByName = (items, term) => {
  //       if (term) {
  //         return items.filter(item => toLower(item.name).includes(toLower(term)))
  //       }
  //       return items
  //     }
  //     this.searched = searchByName(this.replyForm, this.search)
  //   },
  //   clearSearch () {
  //     this.search = ''
  //   }
    submitReply () {}
  },
  // created () {
  //   this.searched = this.replyForm
  // },
  async mounted () {
    // 載入時 loading 動畫
    this.loading = true
    try {
      //  取得問題 (管理)  /issue/all
      const { data } = await this.axios.get('/issue/all', {
        headers: {
        // 驗證欄位 'Bearer ' + token  -> Bearer要空格
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.replyForm = data.result.map(item => {
        // 處理日期格式
        if (item.date) {
          item.datepicker = new Date(item.datepicker).toLocaleDateString()
          item.date = new Date(item.date).toLocaleDateString()
        }
        if (item.member || item.reply) {
          item.member = '√'
          item.reply = '√'
        } else {
          item.member = 'x'
          item.reply = '？'
        }
        return item
      })
      // 頁面載完時 動畫消失
      this.loading = false
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
