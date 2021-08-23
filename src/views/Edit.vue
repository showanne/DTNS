<template>
  <div id="edit" class="md-scrollbar">
    <!-- <h1>This is an edit page</h1> -->
    <div class="tc-dark3 md-body-1 lh-5"  v-if="!user.isSignIn">
      <md-icon>error_outline</md-icon>
      提醒您！您目前尚未登入會員，您的編輯內容將以匿名形式發出，並且不會被記錄！</div>

    <div class="md-layout md-alignment-space-around">
      <!-- 模板選擇 -->
      <div id="temp"
        class="md-layout-item md-size-33 md-small-size-100 md-xsmall-size-100"
      >
        <div class="md-layout md-alignment-space-around-left">
          <div v-for="(temp, T) in tempList"
            :key="T" @click="tempShow(T)"
            class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-50 md-small-size-temp"
          >
            <md-card md-with-hover v-if="temp.show">
              <md-ripple>
                <md-card-media-cover>
                  <md-card-media md-ratio="4:3">
                    <img
                      :src="require('../assets/icon/temp-' + temp.subhead + '.svg')"
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
        class="md-layout-item md-size-66 md-small-size-100 md-xsmall-size-100"
      >
      <!-- <div class="md-layout md-alignment-center-center"> -->
        <form class=""
            @submit.prevent="submitEdit"
            @reset="clearForm">
            <md-card class="py-4">
              <md-card-header>
                <p class="md-title fw-bold">
                  <!-- Edit temp name -->
                  {{ tempList[tempForm.template].name }}
                </p>
                <p class="md-body-1 m-1">
                  {{ userName }}
                </p>
              </md-card-header>

              <!-- share -->
              <md-card-content v-if="tempForm.template === 0">
                <div class="md-layout md-alignment-center-center">
                  <md-field md-clearable :class="errorClass('title')" class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[1].name }}</label>
                    <md-textarea v-model="tempForm.title" md-autogrow required></md-textarea>
                    <span class="md-error" v-if="!$v.tempForm.title.required">此欄位為必填</span>
                  </md-field>

                  <div class="md-layout-item md-size-90">
                    <img-inputer v-model="tempForm.image"
                      accept="image/*" theme="material"
                      :capture="true"
                      :placeholder="'點擊或拖曳選擇'+tempList[tempForm.template].input[3].name"
                      bottom-text="點擊或拖曳以修改" />
                      <!-- 尺寸 size="large"
                      自動上傳 auto-upload="true"
                      在手機中使用相機 capture="true"-->
                  </div>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[4].name }}</label>
                    <md-input v-model="tempForm.text"></md-input>
                    <span class="md-helper-text">作者、書名、社團名稱或某個網站...</span>
                    <!-- <md-input v-model="tempForm.text"></md-input>
                    <span class="md-helper-text">來源連結</span> -->
                  </md-field>
                </div>
              </md-card-content>

              <!-- postIt -->
              <md-card-content v-if="tempForm.template === 1">
                <div class="md-layout md-alignment-center-center">
                  <md-field md-clearable :class="errorClass('title')" class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[1].name }}</label>
                    <md-textarea v-model="tempForm.title" md-autogrow required></md-textarea>
                    <span class="md-error" v-if="!$v.tempForm.title.required">此欄位為必填</span>
                  </md-field>

                  <md-field md-clearable :md-counter="true"
                  class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[3].name }}</label>
                    <md-textarea v-model="tempForm.textarea" md-autogrow></md-textarea>
                  </md-field>
                </div>
              </md-card-content>

              <!-- todo -->
              <md-card-content v-if="tempForm.template === 2">
                <div class="md-layout md-alignment-center-center">
                  <md-field md-clearable :class="errorClass('title')" class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[1].name }}</label>
                    <md-textarea v-model="tempForm.title" md-autogrow required></md-textarea>
                    <span class="md-error" v-if="!$v.tempForm.title.required">此欄位為必填</span>
                  </md-field>

                  <div class="md-layout-item md-size-90">
                    <label class="label">{{ tempList[tempForm.template].input[3].name }}</label>
                    <md-datepicker
                      v-model="tempForm.datepicker"
                      md-immediately />
                  </div>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[4].name }}</label>
                    <md-textarea v-model="tempForm.textarea" md-autogrow></md-textarea>
                    <span class="md-helper-text">輸入待辦事項</span>
                  </md-field>
                </div>

              </md-card-content>

              <!-- diary -->
              <md-card-content v-if="tempForm.template === 3">
                <div class="md-layout md-alignment-center-center">
                  <md-field md-clearable :class="errorClass('title')" class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[1].name }}</label>
                    <md-textarea v-model="tempForm.title" md-autogrow required></md-textarea>
                    <span class="md-error" v-if="!$v.tempForm.title.required">此欄位為必填</span>
                  </md-field>

                  <div class="md-layout-item md-size-90">
                    <label class="label">{{ tempList[tempForm.template].input[3].name }}</label>
                    <md-datepicker
                      v-model="tempForm.datepicker"
                      md-immediately />
                  </div>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[4].name }}</label>
                    <md-textarea v-model="tempForm.textarea"></md-textarea>
                  </md-field>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label for="select">{{ tempList[tempForm.template].input[5].name }}</label>
                    <md-select
                      v-model="tempForm.select"
                      name="select"
                      :placeholder="tempList[tempForm.template].input[5].name" >
                      <md-option>
                        <!-- 第一個空白選項 -->
                      </md-option>
                      <md-option
                        v-for="(Sitem, s) in tempList[tempForm.template].input[5].selectList"
                        :key="s" :value="s">
                        {{ Sitem }}
                      </md-option>
                    </md-select>
                  </md-field>
                </div>
              </md-card-content>

              <!-- notes -->
              <md-card-content v-if="tempForm.template === 4">
                <div class="md-layout md-alignment-center-center">
                  <md-field md-clearable :class="errorClass('title')" class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[1].name }}</label>
                    <md-textarea v-model="tempForm.title" md-autogrow required></md-textarea>
                    <span class="md-error" v-if="!$v.tempForm.title.required">此欄位為必填</span>
                  </md-field>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[3].name }}</label>
                    <md-textarea v-model="tempForm.textarea"></md-textarea>
                  </md-field>
                </div>
              </md-card-content>

              <!-- novel -->
              <md-card-content v-if="tempForm.template === 5">
                <div class="md-layout md-alignment-center-center">
                  <md-field md-clearable :class="errorClass('title')" class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[1].name }}</label>
                    <md-textarea v-model="tempForm.title" md-autogrow required></md-textarea>
                    <span class="md-error" v-if="!$v.tempForm.title.required">此欄位為必填</span>
                  </md-field>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[3].name }}</label>
                    <md-input v-model="tempForm.text"></md-input>
                  </md-field>

                  <div class="md-layout-item md-size-90">
                    <img-inputer v-model="tempForm.image"
                      accept="image/*" theme="material"
                      :capture="true"
                      :placeholder="'點擊或拖曳選擇'+tempList[tempForm.template].input[2].name"
                      bottom-text="點擊或拖曳以修改" />
                      <!-- 尺寸 size="large"
                      自動上傳 auto-upload="true"
                      在手機中使用相機 capture="true"-->
                  </div>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[5].name }}</label>
                    <md-textarea v-model="tempForm.textarea"></md-textarea>
                  </md-field>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label for="select">{{ tempList[tempForm.template].input[6].name }}</label>
                    <md-select
                      v-model="tempForm.select"
                      name="select"
                      :placeholder="tempList[tempForm.template].input[6].name" >
                      <md-option>
                        <!-- 第一個空白選項 -->
                      </md-option>
                      <md-option
                        v-for="(Sitem, s) in tempList[tempForm.template].input[6].selectList"
                        :key="s" :value="s">
                        {{ Sitem }}
                      </md-option>
                    </md-select>
                  </md-field>

                  <div class="md-layout-item md-size-90">
                    <label class="label">{{ tempList[tempForm.template].input[7].name }}</label>
                    <md-datepicker
                      v-model="tempForm.datepicker"
                      md-immediately />
                  </div>
                </div>

              </md-card-content>

              <!-- storage -->
              <md-card-content v-if="tempForm.template === 6">
                <div class="md-layout md-alignment-center-center">
                  <md-field md-clearable :class="errorClass('title')" class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[1].name }}</label>
                    <md-textarea v-model="tempForm.title" md-autogrow required></md-textarea>
                    <span class="md-error" v-if="!$v.tempForm.title.required">此欄位為必填</span>
                  </md-field>

                  <div class="md-layout-item md-size-90">
                    <img-inputer v-model="tempForm.image"
                      accept="image/*" theme="material"
                      :capture="true"
                      :placeholder="'點擊或拖曳選擇'+tempList[tempForm.template].input[2].name"
                      bottom-text="點擊或拖曳以修改" />
                      <!-- 尺寸 size="large"
                      自動上傳 auto-upload="true"
                      在手機中使用相機 capture="true"-->
                  </div>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[3].name }}</label>
                    <md-textarea v-model="tempForm.textarea"></md-textarea>
                  </md-field>

                  <md-field md-clearable class="md-layout-item md-size-90">
                    <label>{{ tempList[tempForm.template].input[4].name }}</label>
                    <md-input v-model="tempForm.text"></md-input>
                  </md-field>

                  <div class="md-layout-item md-size-90">
                    <label class="label">{{ tempList[tempForm.template].input[5].name }}</label>
                    <md-datepicker
                      v-model="tempForm.datepicker"
                      md-immediately />
                  </div>
                </div>

              </md-card-content>

              <md-progress-bar md-mode="indeterminate" v-if="sending" />

              <div class="p-share">
                <label class="label">公開至分享牆</label>
                <md-switch v-model="tempList[tempForm.template].input[0].value"
                  class="md-primary" ></md-switch>
              </div>

              <md-card-actions class="md-layout md-alignment-center-center">
                <md-button type="reset" class="mx-2 md-accent md-raised">
                  重設
                </md-button>
                <md-button type="submit" class="mx-2 md-primary md-raised"
                  :disabled="sending">
                  送出
                </md-button>
              </md-card-actions>
            </md-card>
        </form>
      <!-- </div> -->

        <md-dialog :md-active.sync="formSaved">
          <md-dialog-title>{{ savedMsg }}</md-dialog-title>
          <md-dialog-actions>
            <md-button class="md-primary" @click="formSaved = false">關閉</md-button>

            <md-button v-if="!user.isSignIn" class="md-primary" @click="formSaved = false"
              to="/collection">去瞧瞧...</md-button>

            <md-button v-else class="md-primary" @click="formSaved = false"
              to="/member/memberArticle">去瞧瞧...</md-button>
          </md-dialog-actions>
        </md-dialog>
      </div>
    </div>
  </div>
</template>

<script>
// import Anonymous from '@/components/Anonymous.vue'
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Edit',
  mixins: [validationMixin],
  // components: {
  //   Anonymous
  // },
  data () {
    return {
      // 編輯欄位
      tempForm: {
        _id: '', // 方便編輯
        template: 0,
        title: '',
        // author: '',
        // avatar: '',
        share: true,
        publicOff: false,
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
  validations: {
    tempForm: {
      title: {
        required,
        minLength: minLength(1)
      }
    }
  },
  watch: {},
  methods: {
    tempShow (T) {
      console.log('Edit ' + T)
      this.tempForm.template = T
    },
    // FIXED: 驗證不會出現驗證文字
    errorClass (fieldName) {
      const field = this.$v.tempForm[fieldName]
      // console.log(field)
      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
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
        FD.append('author', this.userName)
        FD.append('avatar', this.avatarImg)
        // console.log(this.$store.state.user.role)
        // 判斷身分為會員或管理員才做驗證後的新增文章
        // THINK: 是否需再判斷新增的文章類型 ??
        if (this.$store.state.user.role === 1 || this.$store.state.user.role === 0) {
          // console.log(FD)
          await this.axios.post('/article/member', FD, {
            headers: {
              // 驗證欄位 'Bearer ' + token  -> Bearer要空格
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
        } else {
          await this.axios.post('/article', FD)
        }

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
        title: '',
        image: null,
        textarea: '',
        text: '',
        select: '',
        datepicker: Number(new Date())
      }

      this.sending = false
    }

  },
  mounted () {
    // console.log(this.user)
    // console.log(this.user.isSignIn)
  }
}
</script>
