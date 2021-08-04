<template>
  <div id="manageArticle">
    <!-- {{ article }} -->

    <!-- 資料呈現 table -->
    <md-table v-model="article" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">ALL Article</h1>
        </div>

        <!-- <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by ..." v-model="search" @input="searchOnTable" />
        </md-field> -->
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No article found"
        :md-description="`No article found for this '${search}' query. Try a different search term .`">
        <!-- newArticle 新增文章 -->
        <!-- <md-button class="md-primary md-raised" @click="newArticle">Create New User</md-button> -->
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <!-- <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell> -->
        <md-table-cell md-label="template" md-sort-by="template">{{ item.template }}</md-table-cell>
        <md-table-cell md-label="date" md-sort-by="date">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="title" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="datepicker" md-sort-by="datepicker">{{ item.datepicker }}</md-table-cell>
        <md-table-cell md-label="image" md-sort-by="image">{{ item.image }}</md-table-cell>
        <md-table-cell md-label="textarea" md-sort-by="textarea">{{ item.textarea }}</md-table-cell>
        <md-table-cell md-label="text" md-sort-by="text">{{ item.text }}</md-table-cell>
        <md-table-cell md-label="share" md-sort-by="share">
          <md-switch v-model="item.share" class="md-primary">
            {{ item.share }}
          </md-switch>
        </md-table-cell>
        <!-- <md-table-cell md-label="select" md-sort-by="select">{{ item.select }}</md-table-cell> -->
        <md-table-cell md-label="_id" md-sort-by="_id">{{ item._id }}</md-table-cell>
      </md-table-row>
    </md-table>

    <!-- 訊息提示 modal -->
    <md-dialog :md-active.sync="msgModal">
      <md-dialog-title>{{ Msg }}</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="msgModal = false">Close</md-button>
        <md-button class="md-primary" @click="msgModal = false">SEE</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: 'ManageArticle',
  data () {
    return {
      article: [],
      search: null,
      searched: [],
      // 提示框顯示控制
      msgModal: false,
      // 提示框訊息
      Msg: ''
    }
  },
  methods: {
    // newArticle () {
    // newArticle 新增文章
    //   window.alert('Noop')
    // },
    searchOnTable () {
      const searchByName = (items, term) => {
        if (term) {
          return items.filter(item => item.name.includes(term))
        }

        return items
      }
      this.searched = searchByName(this.article, this.search)
    }
  },
  created () {
    this.searched = this.article
  },
  async mounted () {
    try {
      const { data } = await this.axios.get(`${process.env.VUE_APP_API}/article`)
      this.article = data.result
    } catch (error) {
      console.log(error)
      let errorMsg = ''
      error.response.data.message === null ? errorMsg = error : errorMsg = error.response.data.message
      this.Msg = errorMsg
      this.msgModal = true
    }
  }
}
</script>
