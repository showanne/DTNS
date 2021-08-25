<template>
  <div id="memberReply" class="h-content md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-66 md-small-size-85 md-xsmall-size-100">
      <md-card class="p-5">
          <!-- <md-field>
            <label>send</label>
            <md-input v-model="send"></md-input>
            <md-icon>send</md-icon>
          </md-field> -->
        <div class="md-title text-center">問題回報</div>
        <form class="w-contact-modal"
          @submit.prevent="submitIssue"
          @reset="clearForm">
            <!-- majorIssue -->
            <md-field class="md-form-group">
              <label>
                <md-icon>help_outline</md-icon>
                主要問題...
              </label>
              <md-select
                v-model="contactForm.majorIssue"
                name="majorIssue" required>
                <md-option><!-- 第一個空白選項 --></md-option>
                <md-option value="編輯權限">編輯權限</md-option>
                <md-option value="網頁功能">網頁功能</md-option>
                <md-option value="文章編輯">文章編輯</md-option>
                <md-option value="其他">其他</md-option>
              </md-select>
            </md-field>

            <!-- issueDescription -->
            <md-field class="md-form-group">
              <label>問題描述 ...</label>
              <md-textarea
                v-model="contactForm.issueDescription"
                md-counter="40" required></md-textarea>
            </md-field>

            <!-- button -->
            <div class="md-layout md-alignment-center-space-between">
              <md-button type="reset" class="md-layout-item md-size-45 md-raised md-primary">
                <!-- :disabled="sending" -->
                <!-- <md-icon>reset</md-icon> -->
                重設
              </md-button>
              <md-button type="submit" class="md-layout-item md-size-45 md-raised md-accent">
                <!-- :disabled="sending" -->
                <!-- <md-icon>submit</md-icon> -->
                送出
              </md-button>
            </div>
        </form>
      </md-card>
    </div>
    <md-dialog-alert
        :md-active.sync="submitAlert"
        :md-content="submitMsg"
        md-confirm-text="確認" />
  </div>
</template>

<script>
export default {
  name: 'MemberReply',
  data () {
    return {
      send: '',
      submitAlert: false,
      submitMsg: '',
      contactForm: {
        majorIssue: '',
        issueDescription: '',
        nickname: '',
        date: Date.now()
      }
    }
  },
  methods: {
    async submitIssue () {
      this.contactForm.nickname = this.userName
      console.log(this.contactForm)
      this.submitMsg = '親愛的 ' + this.contactForm.nickname + ' ^^ <br>已收到您有關 ' + this.contactForm.majorIssue + ' 的問題，工程師將會盡快確認喔！'
      this.submitAlert = true

      // this.sending = true
      // 新增問題 (訪客)  /issue
      // await this.axios.post('/issue', this.contactForm)
      // nickname: this.user.name
      // member: true

      // NOTE: 將剛打的問題新增進呈現的陣列，就不用等送出後又從後台抓資料，再重新整理頁面，使用者體驗較佳
      // this.questionCardReply.push({
      //   majorIssue: this.contactForm.majorIssue,
      //   nickname: this.contactForm.nickname,
      //   issueDescription: this.contactForm.issueDescription,
      //   replyIssue: '',
      //   date: this.contactForm.date
      // })
      // this.sending = false
      // this.contactBtn = false
      this.clearForm()
      // 表單成功送出後 重新跳轉頁面
      // this.$router.go()
    },
    clearForm () {
      this.contactForm = {
        majorIssue: '',
        issueDescription: ''
      }
    }
  }
}
</script>
