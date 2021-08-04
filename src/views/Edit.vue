<template>
  <div id="edit" class="md-scrollbar">
    <!-- <h1>This is an edit page</h1> -->

    <div class="md-layout md-alignment-space-around">
      <!-- 模板選擇 -->
      <div id="temp"
        class="md-layout-item md-xlarge-size-15 md-large-size-20 md-medium-size-33 md-small-size-100 md-xsmall-size-100"
      >
        <div class="md-layout md-alignment-space-between-center">
          <!-- 有漸層背景及文字 <md-card-media-cover md-text-scrim> -->

          <div v-for="(temp, T) in tempList"
            :key="T" @click="tempShow(T)"
            class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-50 md-small-size-15 md-xsmall-size-15"
          >
            <md-card md-with-hover v-if="temp.show">
              <md-ripple>
                <md-card-media-cover>
                  <md-card-media md-ratio="4:3">
                    <img
                      :src="
                        require('../assets/icon/temp-' + temp.subhead + '.svg')
                      "
                      :alt="temp.subhead"
                    />
                  </md-card-media>

                  <md-card-area>
                    <md-card-header>
                      <span class="md-subhead md-small-hide">
                        {{ temp.name }}
                      </span>
                    </md-card-header>
                  </md-card-area>
                </md-card-media-cover>
              </md-ripple>
            </md-card>
          </div>
        </div>
      </div>

      <!-- 編輯 -->
      <div id="tempEdit"
        class="md-layout-item md-xlarge-size-85 md-large-size-80 md-medium-size-66 md-small-size-100 md-xsmall-size-100"
      >
        <form @submit.prevent="submitEdit"
             @reset="clearForm">
          <md-card>
            <md-card-header>
              <h4 class="title">
                <!-- Edit temp name -->
                {{ tempList[tempForm.template].name }}
              </h4>
              <!-- <p class="category">小標文字</p> -->
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-90 md-small-size-80 md-xsmall-size-100">
                  <md-field>
                    <label>Title</label>
                    <md-textarea v-model="tempForm.title" md-autogrow></md-textarea>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-10 md-small-size-20 md-xsmall-size-25">
                  <label class="label">share</label>
                  <md-switch v-model="tempForm.share"
                    class="md-primary" ></md-switch>
                </div>

                <div class="md-layout-item md-size-100 md-xsmall-size-75">
                  <img-inputer v-model="tempForm.image"
                    accept="image/*" theme="material"
                    placeholder="點擊或拖曳選擇圖片"
                    bottom-text="點擊或拖曳以修改" />
                    <!-- 自動上傳 auto-upload="true" 尺寸 size="large" -->
                </div>

                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Textarea</label>
                    <md-textarea v-model="tempForm.textarea"></md-textarea>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>text</label>
                    <md-input v-model="tempForm.text"></md-input>
                    <span class="md-helper-text">Helper text</span>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label for="select">select</label>
                    <md-select
                      v-model="tempForm.select"
                      name="select"
                      id="select"
                      placeholder="select" >
                      <md-option>
                        <!-- 第一個空白選項 -->
                      </md-option>
                      <md-option
                        v-for="(Sitem, s) in selectList[0]"
                        :key="s" :value="s">
                        {{ Sitem }}
                      </md-option>
                    </md-select>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                  <md-datepicker
                    v-model="tempForm.datepicker"
                    md-immediately
                  />
                </div>
              </div>
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />
              <!-- TODO: 調整 progress-bar 參數 md-mode="buffer" :md-value="29"
              :md-buffer="66" -->

            <md-card-actions>
              <md-button type="reset" class="md-raised">
                RESET
              </md-button>
              <md-button type="submit" class="md-raised"
                :disabled="sending">
                Submit
              </md-button>
            </md-card-actions>
          </md-card>

          <!-- <md-snackbar :md-active.sync="formSaved">
            The form {{ tempList[tempForm.template].name }} {{ tempForm.title }} was saved with success!
          </md-snackbar> -->
        </form>

        <md-dialog :md-active.sync="formSaved">
          <md-dialog-title>{{ savedMsg }}</md-dialog-title>
          <md-dialog-actions>
            <md-button class="md-primary" @click="formSaved = false">Close</md-button>
            <md-button class="md-primary" @click="formSaved = false"
              to="/collection">GO</md-button>
          </md-dialog-actions>
        </md-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      tempList: [
        { show: true, name: '便利貼', subhead: 'postIt' },
        { show: true, name: '美字美句分享', subhead: 'share' },
        { show: this.$store.getters.user.isSignIn, name: '待辦事項', subhead: 'todo' },
        { show: this.$store.getters.user.isSignIn, name: '心情隨筆', subhead: 'diary' },
        { show: this.$store.getters.user.isSignIn, name: '筆記', subhead: 'notes' },
        // { show: this.$store.getters.user.isSignIn, name: '小說', subhead: 'novel' },
        { show: this.$store.getters.user.isSignIn, name: '儲物清單', subhead: 'storage' }
      ],
      selectList: [
        { 0: '開心', 1: '不好', 2: '傷心' }, // mood
        { 0: '很重要', 1: '近期須完成', 2: '普通' } // finish
      ],
      tempForm: {
        _id: '', // 方便編輯
        template: 0,
        title: 'text',
        share: true,
        image: null,
        textarea: '',
        text: '',
        select: '',
        datepicker: Number(new Date()),
        date: Number(new Date())
        // date: new Date().toLocaleString('zh-TW', { hour12: false })
        // 預設夾帶傳進資料庫當下的編輯日期 "2021/8/3 12:28:23"
      },
      // 進度條
      sending: false,
      // 提示框顯示控制
      formSaved: false,
      // 提示框訊息
      savedMsg: ''
    }
  },
  methods: {
    tempShow (T) {
      console.log(T)
      this.tempForm.template = T
    },
    async submitEdit () {
      // 送出表單後 + 資料還在傳送進資料庫時 按鈕狀態設定為不能點擊，避免重複送出
      this.sending = true

      try {
        // 建立上傳格式 FormData
        // FormData 可以傳送檔案也可以傳一般文字
        // 前端送出的資料類型 FormData  後端接收資料型態為 multipart/form-data
        const FD = new FormData()
        // 將資料新增進 FormData 用 append('key 欄位名稱', 'value 資料的值')
        for (const key in this.tempForm) {
          FD.append(key, this.tempForm[key])
        }
        await this.axios.post(`${process.env.VUE_APP_API}/article`, FD, {
          headers: {
            // 驗證欄位 'Bearer ' + token  -> Bearer要空格
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })

        this.savedMsg = this.tempList[this.tempForm.template].name + '-' + this.tempForm.title + 'was saved with success!'
        this.formSaved = true

        this.clearForm()
      } catch (error) {
        console.log(error)
        let errorMsg = ''
        error.response.data.message === null ? errorMsg = error : errorMsg = error.response.data.message
        this.savedMsg = 'Saved with ' + errorMsg
        this.formSaved = true
        this.sending = true
      }
      // 送出表單後 + 資料已傳進資料庫時 按鈕狀態設改為可以點擊
      this.sending = false
    },
    clearForm () {
      this.tempForm = {
        _id: '', // 方便編輯
        template: 0,
        title: 'text',
        share: true,
        image: null,
        textarea: '',
        text: '',
        select: '',
        datepicker: Number(new Date())
      }

      this.sending = false
    }
  },
  computed: {

  }
}
</script>
