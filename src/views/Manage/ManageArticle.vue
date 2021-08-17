<template>
  <div id="manageArticle">
    <!-- {{ article }} -->

    <!-- 資料呈現 table -->
    <ve-table
    :columns="tableTitle"
    :table-data="article.filter(item=>!searchText || item.name.includes(searchText))"
    style="'word-break':break-all;"
    max-height="calc(100vh - 190px)"
    :fixed-header="true"
    :border-around="false"
    :border-x="true"
    :border-y="false"
    :cell-style-option="cellStyleOption"
  />

  <!-- 無資料時顯示 or 載入 loading 動畫 -->
  <md-table-empty-state
    md-icon="submit"
    md-label="Loading...">
    <md-progress-spinner class="md-primary loading" v-if="loading"
      :md-diameter="100" :md-stroke="10"
      md-mode="indeterminate"></md-progress-spinner>
  </md-table-empty-state>

<!-- TODO:文章檢舉下架功能
     img 顯示
     switch 切換分享
     input 編輯文章功能
 -->

    <!-- 編輯 modal -->
    <md-dialog :md-active.sync="editModal">
      <md-dialog-title>查看文章</md-dialog-title>
      <md-dialog-content>

      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="editModal = false">關閉</md-button>
      </md-dialog-actions>
    </md-dialog>

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
      // 設定表格行樣式
      cellStyleOption: {
        bodyCellClass: ({ row, column, rowIndex }) => {
          return 'table-body-cell-class'
        }
      },
      // 搜索
      searchText: '',
      tableTitle: [
        {
          field: '',
          key: 'a',
          title: 'No.',
          width: '3%',
          align: 'center',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <span style="color:#7876B3;">
                {++rowIndex}
              </span>
            )
          }
        },
        // { field: '_id', key: 'a', title: 'Id', width: '5%' },
        {
          field: 'template',
          key: 'b',
          title: 'temp',
          width: '5%',
          align: 'center',
          fixed: 'left'
          // renderHeaderCell: ({ column }, h) => {
          //   return (
          //     <input
          //       // jsx 不能直接使用 v-model。此处为 jsx 实现 v-model，了解更多查看官方文档
          //       value={this.searchText}
          //       onInput={this.searchInputChange}
          //       style="width:90%"
          //       placeholder="主題"
          //     />
          //   )
          // }
        },
        { field: 'title', key: 'c', title: 'title', width: '30%' },
        {
          field: 'share',
          key: 'd',
          title: 'share',
          width: '5%',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <md-switch v-model={row[column.field]} class="md-primary">
              </md-switch>
            )
          }
        },
        {
          field: 'publicOff',
          key: 'e',
          title: 'publicOff',
          width: '5%',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <md-switch v-model={row[column.field]} class="md-primary">
              </md-switch>
            )
          }
        },
        {
          field: 'image',
          key: 'f',
          title: 'image',
          width: '15%',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <img src={row[column.field]} />
            )
          }
        },
        {
          field: 'textarea',
          key: 'g',
          title: 'textarea',
          width: '20%',
          ellipsis: {
            showTitle: true,
            lineClamp: 2
          }
        },
        { field: 'text', key: 'h', title: 'text', width: '10%' },
        { field: 'select', key: 'i', title: 'select', width: '5%' },
        { field: 'datepicker', key: 'j', title: 'datepicker', width: '5%' },
        { field: 'date', key: 'k', title: 'date', width: '5%' },
        {
          field: '',
          key: 'l',
          title: 'Action',
          width: '20%',
          // center: 'left',
          align: 'center',
          fixed: 'right',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <div class="md-layout md-alignment-center-center">
                <md-button class="md-md-layout-item md-primary h-unset w-unset" on-click={() => this.editRow(rowIndex)}>
                  <md-icon>visibility</md-icon>
                </md-button>
                <md-button class="md-md-layout-item md-primary h-unset w-unset" on-click={() => this.publicOff(rowIndex)}>
                  <md-icon>public_off</md-icon>
                </md-button>
              </div>
            )
          }
        }
      ],
      article: [],
      search: null,
      searched: [],
      // 編輯 modal
      editModal: false,
      // 提示框顯示控制
      msgModal: false,
      // 提示框訊息
      Msg: '',
      // 載入時 loading 動畫
      loading: false
    }
  },
  methods: {
    editRow (rowIndex) {
      // alert(`eidt row number:${rowIndex}`)
      this.editModal = true
    },
    async publicOff (rowIndex) {
      // 將文章下架，不刪除
      // 會員那邊會顯示成無法更動
      // 編輯文章 (會員)  /  editArticle
      try {
        console.log(this.$store.state.jwt.token)
        // .patch('/users/cart', { product: this.cart[index]._id, amount: 0 },
        await this.axios.patch('/article/all', {
          article: this.article[rowIndex]._id,
          share: false,
          publicOff: true
        }, {
          headers: {
          // 驗證欄位 'Bearer ' + token  -> Bearer要空格
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        alert(this.article[rowIndex]._id)
      } catch (error) {
        console.log(error)
      }
      // this.tableTitle.splice(rowIndex, 1)
      // this.tableTitle.report = false
    },
    // search input change event
    searchInputChange (e) {
      this.searchText = e.target.value
    }
    // searchOnTable () {
    //   const searchByName = (items, term) => {
    //     if (term) {
    //       return items.filter(item => item.name.includes(term))
    //     }

    //     return items
    //   }
    //   this.searched = searchByName(this.article, this.search)
    // }
  },
  created () {
    this.searched = this.article
  },
  async mounted () {
    // 載入時 loading 動畫
    this.loading = true
    try {
      // 取得所有文章 /article/all
      const { data } = await this.axios.get('/article/all', {
        headers: {
          // 驗證欄位 'Bearer ' + token  -> Bearer要空格
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.article = data.result.map(article => {
        // 有圖片才更新網址
        if (article.image) {
          // 處理 image 路徑  因為 :src 會錯誤判別 process.env  / 取得上傳的圖片 /file
          article.image = `${process.env.VUE_APP_API}/file/${article.image}`
        }
        // 處理日期格式
        if (article.datepicker || article.date) {
          article.datepicker = new Date(article.datepicker).toLocaleDateString()
          article.date = new Date(article.date).toLocaleDateString()
        }
        return article
      })
      // 頁面載完時 動畫消失
      this.loading = false
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
