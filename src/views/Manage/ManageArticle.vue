<template>
  <div id="manageArticle">
    <!-- {{ article }} -->

    <!-- 資料呈現 table -->
    <ve-table
    :columns="tableTitle"
    :table-data="article.filter(item=>!searchText || item.name.includes(searchText))"
    style="'word-break':break-all;"
    :fixed-header="true"
    :border-around="false"
    :border-x="true"
    :border-y="false"
    :cell-style-option="cellStyleOption"
  />

  <!-- 無資料時顯示 or 載入 loading 動畫 -->
  <md-empty-state v-if="loading"
    md-icon="submit"
    md-label="Loading...">
    <md-progress-spinner class="md-primary loading"
      :md-diameter="100" :md-stroke="10"
      md-mode="indeterminate"></md-progress-spinner>
  </md-empty-state>

<!-- TODO:文章檢舉下架功能
     img 顯示
     switch 切換分享
     input 編輯文章功能
 -->

    <!-- 編輯 modal -->
    <md-dialog :md-active.sync="showModal">
      <md-dialog-title class="text-right">查看文章</md-dialog-title>
      <md-dialog-content>

        <md-card>
          <md-button class="closeBtn w-unset h-unset md-primary"
            @click="showModal = false">
            <md-icon>close</md-icon>
          </md-button>
          <md-card-content>
            <md-avatar class="md-small md-elevation-3 mr-2">
              <img :src="articleShow.avatar" :alt="articleShow.author" />
            </md-avatar>
            <div class="md-subhead">{{ articleShow.author }}</div>
            <div class="md-icon-dateL">{{ articleShow.date }}</div>
            <div class="md-title text-v-html">{{ articleShow.title }}</div>
            <!-- <div class="md-caption text-right">編輯日期：{{ articleShow.date }}</div> -->
            <div class="md-caption">選擇日期：{{ articleShow.datepicker }}</div>
            <md-card-media v-if="articleShow.image">
              <img class="w-33 text-right" :src="articleShow.image" :alt="articleShow.title">
            </md-card-media>
            <div class="md-body-1 text-v-html" v-html="'描述1：'+articleShow.textarea"></div>
            <div class="md-body-1 text-v-html" v-html="'描述2：'+articleShow.text"></div>

            <div class="md-subhead">被檢舉：{{ articleShow.report }}</div>
            <div class="md-subhead">移除文章：{{ articleShow.publicOff }}</div>
            <div class="md-subhead">按讚人次：{{ articleShow.likeNum }}</div>
            <div class="md-subhead">儲存人次：{{ articleShow.saveNum }}</div>
            <div class="md-subhead">分享人次：{{ articleShow.shareNum }}</div>
          </md-card-content>
        </md-card>
      </md-dialog-content>
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
        // { field: '_id', key: 'a', title: 'Id', width: '5%' },
        {
          field: 'template',
          key: 'b',
          title: '主題',
          width: '5%',
          align: 'center',
          fixed: 'left'
          // renderHeaderCell: ({ row, column }, h) => {
          //   // jsx 不能直接使用 v-model。此处为 jsx 实现 v-model，了解更多查看官方文档
          //   return (
          //     row[column.field] === 0 ? <span>美字美句</span> : <span>fu</span>
          //   )
          // }
        },
        {
          field: 'title',
          key: 'c',
          title: '標題',
          width: '30%',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
          // v-html 指令在JSX的寫法是 domPropsInnerHTML
            return <div class="text-truncate" domPropsInnerHTML={row[column.field]}></div>
          }
        },
        {
          field: 'share',
          key: 'd',
          title: '公開',
          width: '7.5%',
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
          title: '下架',
          width: '7.5%',
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
          title: '圖片',
          width: '30%',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <img src={row[column.field]} />
            )
          }
        },
        // {
        //   field: 'textarea',
        //   key: 'g',
        //   title: '內文',
        //   width: '20%',
        //   ellipsis: {
        //     showTitle: true,
        //     lineClamp: 2
        //   }
        // },
        // { field: 'text', key: 'h', title: '內文', width: '10%' },
        // { field: 'select', key: 'i', title: '選項', width: '5%' },
        // { field: 'datepicker', key: 'j', title: '日期', width: '5%' },
        { field: 'date', key: 'k', title: '日期', width: '5%' },
        {
          field: '',
          key: 'l',
          title: '動作',
          width: '15%',
          // center: 'left',
          align: 'center',
          fixed: 'right',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <div class="md-layout md-alignment-center-center">
                <md-button class="md-md-layout-item md-primary h-unset w-unset" on-click={() => this.showRow(rowIndex)}>
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
      articleShow: {
        // id: '',
        template: '',
        title: '',
        author: '',
        avatar: '',
        share: '',
        image: '',
        textarea: '',
        text: '',
        datepicker: '',
        select: '',
        date: '',
        report: '',
        publicOff: '',
        likeNum: '',
        saveNum: '',
        shareNum: ''
      },
      // 顯示的 modal
      showModal: false,
      // 提示框顯示控制
      msgModal: false,
      // 提示框訊息
      Msg: '',
      // 載入時 loading 動畫
      loading: false
    }
  },
  methods: {
    async showRow (rowIndex) {
      // alert(`eidt row number:${rowIndex}`)
      this.showModal = true
      try {
        // 取得個別文章 /article/:id
        const { data } = await this.axios.get('/article/' + this.article[rowIndex]._id)

        // this.articleShow = data.result
        this.articleShow.template = data.result.template
        this.articleShow.title = data.result.title
        this.articleShow.author = data.result.author
        this.articleShow.avatar = data.result.avatar
        this.articleShow.share = data.result.share
        // this.articleShow.image = data.result.image
        if (data.result.image) {
          this.articleShow.image = `${process.env.VUE_APP_API}/file/${data.result.image}`
        }
        this.articleShow.textarea = data.result.textarea
        this.articleShow.text = data.result.text
        // this.articleShow.datepicker = data.result.datepicker
        // this.articleShow.date = data.result.date
        this.articleShow.datepicker = new Date(data.result.datepicker).toISOString().split('T')[0]
        this.articleShow.date = new Date(data.result.date).toISOString().split('T')[0]
        this.articleShow.select = data.result.select
        this.articleShow.report = data.result.report
        this.articleShow.publicOff = data.result.publicOff
        this.articleShow.likeNum = data.result.likeNum
        this.articleShow.saveNum = data.result.saveNum
        this.articleShow.shareNum = data.result.shareNum
      } catch (error) {
        console.log(error)
      }
    },
    async publicOff (rowIndex) {
      // 將文章下架，不刪除
      // 會員那邊會顯示成無法更動
      try {
        // console.log(this.$store.state.jwt.token)
        // .patch('/users/cart', { product: this.cart[index]._id, amount: 0 },
        // 編輯文章 (會員)  /  editArticle
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
        // alert(this.article[rowIndex]._id)
        this.article[rowIndex].share = false
        this.article[rowIndex].publicOff = true
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
          article.datepicker = new Date(article.datepicker).toISOString().split('T')[0]
          article.date = new Date(article.date).toISOString().split('T')[0]
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
