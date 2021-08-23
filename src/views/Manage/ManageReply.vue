<template>
  <div id="manageReply">
       <ve-table
        style="width:100%"
        :columns="replyTable"
        :table-data="replyForm"
        :expand-option="expandOption"
        row-key-field-name="_id"
        />
      <!-- 無資料時顯示 or 載入 loading 動畫 -->
      <md-empty-state v-if="loading"
        md-icon="submit"
        md-label="Loading...">
        <md-progress-spinner class="md-primary loading"
          :md-diameter="100" :md-stroke="10"
          md-mode="indeterminate"></md-progress-spinner>
      </md-empty-state>

    <!-- <md-table v-model="replyForm" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">replyForm</h1>
        </div>
      </md-table-toolbar>

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
    </md-table> -->

    <md-dialog-alert
      :md-active.sync="editReply"
      md-title="回覆問題"
      :md-content="replyAlert"
       />
  </div>
</template>

<script>
export default {
  name: 'ManageReply',
  data () {
    return {
      // 載入時 loading 動畫
      loading: false,
      // search: null,
      // searched: [],
      editReply: false,
      replyAlert: '',
      replyForm: [],
      expandOption: {
        trigger: 'cell',
        render: ({ row, column, rowIndex }, h) => {
          return (
            <md-field class="w-66" md-clearable>
              <md-button class="md-primary" on-click={() => this.submitReply(rowIndex)}>
                <md-icon>reply</md-icon>
              </md-button>
              <md-textarea md-autogrow v-model={row.replyIssue} ></md-textarea>
            </md-field>
          )
        }
      },
      replyTable: [
        {
          field: '',
          key: 'a',
          // 展開設定
          type: 'expand',
          title: '',
          width: '5%',
          align: 'center'
        },
        {
          field: '',
          key: 'b',
          title: '項次',
          width: '5%',
          align: 'center',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <span style="color:#7876B3;">
                {++rowIndex}
              </span>
            )
          }
        },
        {
          field: 'nickname',
          key: 'c',
          title: '暱稱',
          width: '10%',
          align: 'left'
        },
        {
          field: 'member',
          key: 'd',
          title: '會員',
          width: '5%',
          align: 'center',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <md-icon>{row[column.field]}</md-icon>
            )
          }
        },
        {
          field: 'majorIssue',
          key: 'e',
          title: '主要問題',
          width: '10%',
          align: 'left'
        },
        {
          field: 'issueDescription',
          key: 'f',
          title: '問題描述',
          width: 99,
          align: 'left'
        },
        {
          field: 'replyIssue',
          key: 'g',
          title: '問題回復',
          width: 99,
          align: 'left'
        },
        {
          field: 'reply',
          key: 'h',
          title: '回復',
          width: '5%',
          align: 'center',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <md-icon>{row[column.field]}</md-icon>
            )
          }
        }
      ]
    }
  },
  methods: {
    async submitReply (rowIndex) {
      // alert(`已回復編號 ${this.replyForm[rowIndex]._id} 的問題`)
      try {
        await this.axios.patch('/issue', {
          _id: this.replyForm[rowIndex]._id,
          replyIssue: this.replyForm[rowIndex].replyIssue,
          reply: true
        }, {
          headers: {
          // 驗證欄位 'Bearer ' + token  -> Bearer要空格
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.replyForm[rowIndex].reply = true
        // this.replyForm[rowIndex].replyIssue = replyIssue

        window.setTimeout(() => {
          this.editReply = true
          this.replyAlert = '已回復編號 ' + this.replyForm[rowIndex]._id + '的問題'
        }, 1500)

        // 表單成功送出後 重新跳轉頁面
        // this.$router.go()
      } catch (error) {
        console.log(error)
      }
    }
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
        if (item.member) {
          item.member = 'account_circle'
        } else {
          item.member = 'hide_source'
        }
        if (item.reply) {
          item.reply = 'done_all'
        } else {
          item.reply = 'feedback'
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
