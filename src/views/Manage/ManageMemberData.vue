<template>
  <div id="manageMemberData">
    <md-table v-model="memberData" md-card  md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">使用者清單</h1>
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-primary md-raised"
            @click="addUserBtn = true">
            新增使用者
          </md-button>
        </div>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users" md-icon="person_search">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <!-- <md-table-cell md-label="ID" md-numeric>{{ item._id }}</md-table-cell> -->
        <md-table-cell md-label="No">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Role">{{ item.role }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name || item.account }}</md-table-cell>
        <!-- <md-table-cell md-label="Account">{{ item.account }}</md-table-cell> -->
        <md-table-cell class="avatar" md-label="Avatar">
          <md-avatar v-if="item.avatar" class="md-large">
            <img :src="item.avatar" :alt="item.name" width="90">
          </md-avatar>
        </md-table-cell>
        <md-table-cell md-label="Tokens">{{ item.tokens }}</md-table-cell>
        <md-table-cell md-label="Editor">{{ item.editor }}</md-table-cell>
      </md-table-row>

      <!-- 分頁上使用仍有問題
        <md-table-pagination
        :md-page-size="rowsPerPage"
        :md-page-options="[5, 10]"
        :md-update="updatePagination"
        :md-data.sync="memberData"
      /> -->
    </md-table>

    <md-dialog :md-active.sync="addUserBtn">
      <md-dialog-title>
        <div class="md-layout md-alignment-center-space-between">
          <md-icon class="md-size-3x signIcon">person_pin</md-icon>
          <!-- <div class="md-title">新增使用者</div> -->
        </div>
      </md-dialog-title>

      <md-dialog-content class="md-scrollbar">
        <form
          novalidate
          class="md-layout md-small-hide"
          @submit.prevent="validateUser"
          @reset="clearForm"
        >
          <md-card class="md-layout-item" >
            <md-card-content>
              <!-- 帳號 Account -->
              <md-field :class="getValidationClass('account')">
                <label for="account">Account</label>
                <md-input
                  name="account"
                  autocomplete="account"
                  v-model="form.account"
                  placeholder="Your Account..."
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.account.required"
                  >帳號是必填欄位</span
                >
                <span class="md-error" v-else-if="!$v.form.account.minlength"
                  >帳號最少須 5 個字，最多 20 個字</span
                >
              </md-field>

              <!-- 密碼 Password -->
              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input
                  type="password"
                  name="password"
                  autocomplete="password"
                  v-model="form.password"
                  placeholder="password..."
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.password.required"
                  >密碼是必填欄位</span
                >
                <span class="md-error" v-else-if="!$v.form.password.minlength"
                  >密碼最少須 4 個字，最多 20 個字</span
                >
              </md-field>
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
              <md-button class="md-primary" @click="addUserBtn = false">
                關閉
              </md-button>
              <md-button type="reset" class="md-primary">重設</md-button>
              <md-button type="submit" class="md-primary" :disabled="sending">
                創建</md-button>
            </md-card-actions>
          </md-card>

          <md-snackbar :md-active.sync="messageShow">
            {{ user }} was created with {{ message }}!
          </md-snackbar>

        <!-- <md-dialog-alert
          :md-active.sync="messageShow"
          md-title="ERROR"
          :md-content="message" /> -->

        </form>
      </md-dialog-content>

    </md-dialog>
    <md-dialog-alert
      :md-active.sync="messageShow"
      md-title="ERROR"
      :md-content="message" />
  </div>
</template>

<script>
// vuelidate 驗證套件
import { validationMixin } from 'vuelidate'
import {
  required,
  // email,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'

export default {
  name: 'ManageMemberData',
  mixins: [validationMixin],
  data () {
    return {
      selected: {},
      memberData: [],
      // rowsPerPage: 3
      addUserBtn: false,
      // 新增使用者表單
      form: {
        account: '',
        password: ''
      },
      // 送出後的進度條 false 是不跑
      sending: false,
      // 登入的歡迎訊息
      // wellcomeMsg: false,
      // alert 訊息控制 false 是不跳 alert
      messageShow: false,
      // 登入訊息
      message: ''
    }
  },
  validations: {
    form: {
      account: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(20)
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20)
      }
    }
  },
  methods: {
    // updatePagination (page, pageSize, sort, sortOrder) {
    //   console.log('pagination has updated', page, pageSize, sort, sortOrder)
    // },
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.addUser()
      }
    },
    async addUser () {
      try {
        await this.axios.post('/users', this.signUp)

        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.user = `${this.signUp.account}`
          this.message = 'success'
          this.userSaved = true
          this.sending = false
          // this.clearForm()

          // 註冊成功後導回首頁
          // this.$router.push('/')
        }, 1500)
      } catch (error) {
        window.setTimeout(() => {
          this.user = `${this.signUp.account}`
          this.message = error
          this.userSaved = true
          this.sending = true
          // this.clearForm()
        }, 1500)
      }
    },
    clearForm () {
      this.$v.$reset()
      this.sending = false
      this.form.account = ''
      this.form.password = ''
      // this.form.email = ''
    }
  },
  // created () {
  //   this.updatePagination(1, this.rowsPerPage)
  // },
  async mounted () {
    const { data } = await this.axios.get('/users', {
      headers: {
        // 驗證欄位 'Bearer ' + token  -> Bearer要空格
        authorization: 'Bearer ' + this.$store.state.jwt.token
      }
    })
    this.memberData = data.result.map(data => {
      if (data.tokens) {
        data.tokens = data.tokens.length
      }
      // if (data.tokens[data.tokens.length].access_token) {
      //   data.tokens[data.tokens.length].access_token = true
      // }
      if (data.editor) {
        data.editor = data.editor.length
      }
      return data
    })
  }
}
</script>
