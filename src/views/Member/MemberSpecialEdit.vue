<template>
  <div id="memberSpecialEdit" class="p-4">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-80 md-small-size-100">
        <md-card class="p-4">
          <md-card-header>
            <div class="md-title">專欄編輯中心 (特殊作者專用)</div>
            <div class="md-subhead">在此撰寫的內容將不會顯示在公開分享牆</div>
          </md-card-header>

          <md-card-content>
            <md-field>
              <label>文章標題</label>
              <md-input v-model="form.title"></md-input>
            </md-field>

            <div class="editor-placeholder mt-4">
              <div class="editor-toolbar md-elevation-1 p-2 d-flex">
                <md-button class="md-icon-button md-dense"><md-icon>format_bold</md-icon></md-button>
                <md-button class="md-icon-button md-dense"><md-icon>format_italic</md-icon></md-button>
                <md-button class="md-icon-button md-dense"><md-icon>format_list_bulleted</md-icon></md-button>
                <md-button class="md-icon-button md-dense"><md-icon>image</md-icon></md-button>
                <md-button class="md-icon-button md-dense"><md-icon>link</md-icon></md-button>
              </div>
              <md-field>
                <label>請輸入專欄內容...</label>
                <md-textarea v-model="form.content" md-autogrow></md-textarea>
              </md-field>
            </div>

            <md-field>
              <label>標籤 (以逗號分隔)</label>
              <md-input v-model="form.tags"></md-input>
            </md-field>
          </md-card-content>

          <md-card-actions>
            <md-button class="md-raised" @click="$router.back()">取消</md-button>
            <md-button class="md-raised md-primary" @click="saveArticle">儲存文章</md-button>
          </md-card-actions>
        </md-card>

        <!-- 預覽區域 -->
        <md-card class="mt-4 p-4 md-elevation-0 preview-section" v-if="form.title || form.content">
          <div class="md-title">即時預覽</div>
          <md-divider class="my-3"></md-divider>
          <h1>{{ form.title }}</h1>
          <div class="content-preview">{{ form.content }}</div>
        </md-card>
      </div>
    </div>

    <md-snackbar :md-active.sync="showSnackbar" md-persistent>
      <span>文章已成功儲存至本地 (Demo 效果)!</span>
      <md-button class="md-primary" @click="showSnackbar = false">了解</md-button>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: 'MemberSpecialEdit',
  data () {
    return {
      form: {
        title: '',
        content: '',
        tags: '',
        template: 99 // 特殊專欄 ID
      },
      showSnackbar: false
    }
  },
  methods: {
    saveArticle () {
      if (!this.form.title || !this.form.content) {
        alert('請填寫標題與內容')
        return
      }
      // 提交到 Vuex (Demo)
      this.$store.commit('saveSpecialArticle', {
        ...this.form,
        author: this.$store.state.user.name || this.$store.state.user.account
      })
      this.showSnackbar = true
      // 清空表單
      this.form.title = ''
      this.form.content = ''
      this.form.tags = ''
    }
  }
}
</script>

<style lang="scss" scoped>
#memberSpecialEdit {
  background: #f5f5f5;
  min-height: calc(100vh - 64px);
}
.editor-placeholder {
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
}
.editor-toolbar {
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
}
.preview-section {
  background: #fff;
  border: 1px dashed #ccc;
}
.content-preview {
  white-space: pre-wrap;
  line-height: 1.6;
}
</style>
