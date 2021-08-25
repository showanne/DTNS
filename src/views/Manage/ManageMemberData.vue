<template>
  <div id="manageMemberData">
    <md-table v-model="memberData"
      md-sort="name" md-sort-order="asc"
      md-height="unset" md-fixed-header>
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

      <!-- 無資料時顯示 or 載入 loading 動畫 -->
      <md-table-empty-state v-if="loading"
        md-icon="submit"
        md-label="Loading...">
        <md-progress-spinner class="md-primary loading"
          :md-diameter="100" :md-stroke="10"
          md-mode="indeterminate"></md-progress-spinner>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <!-- <md-table-cell md-label="ID" md-numeric>{{ item._id }}</md-table-cell> -->
        <!-- <md-table-cell md-label="No">{{ item.id }}</md-table-cell> -->
        <md-table-cell class="avatar" md-label="大頭照">
          <md-avatar v-if="item.avatar" class="">
            <img :src="item.avatar" :alt="item.name" width="90">
          </md-avatar>
        </md-table-cell>
        <md-table-cell md-label="姓名" md-sort-by="name">{{ item.name || item.account }}</md-table-cell>
        <md-table-cell md-label="身份" md-sort-by="role">
          <span v-if="item.role == 0">會員（{{ item.role }}）</span>
          <span v-else-if="item.role == 1">管理員（{{ item.role }}）</span>
          <span v-else-if="item.role == -1">訪客（{{ item.role }}）</span>
        </md-table-cell>
        <!-- <md-table-cell md-label="Account">{{ item.account }}</md-table-cell> -->
        <md-table-cell md-label="登入">{{ item.tokens }}</md-table-cell>
        <md-table-cell md-label="文章數">{{ item.editor }}</md-table-cell>
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
                  v-model="signUp.account"
                  placeholder="Your Account..."
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.signUp.account.required"
                  >帳號是必填欄位</span
                >
                <span class="md-error" v-else-if="!$v.signUp.account.minlength"
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
                  v-model="signUp.password"
                  placeholder="password..."
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.signUp.password.required"
                  >密碼是必填欄位</span
                >
                <span class="md-error" v-else-if="!$v.signUp.password.minlength"
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
              <md-button type="submit" class="md-primary"
               :disabled="sending">創建
              </md-button>
            </md-card-actions>
          </md-card>

          <md-snackbar :md-active.sync="messageSussess">
            新帳號 {{ signUp.account }} 創建成功！
          </md-snackbar>

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
  minLength,
  maxLength
} from 'vuelidate/lib/validators'

export default {
  name: 'ManageMemberData',
  mixins: [validationMixin],
  data () {
    return {
      // 載入時 loading 動畫
      loading: false,
      selected: {},
      memberData: [],
      // rowsPerPage: 3
      addUserBtn: false,
      // 新增使用者表單
      signUp: {
        account: '',
        name: '',
        password: '',
        avatar: ''
      },
      // 送出後的進度條 false 是不跑
      sending: false,
      // 創建成功訊息
      messageSussess: false,
      // alert 訊息控制 false 是不跳 alert
      messageShow: false,
      // 提示訊息
      message: ''
    }
  },
  validations: {
    signUp: {
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
      const field = this.$v.signUp[fieldName]

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
        this.signUp.avatar = this.avatarImg
        this.signUp.name = this.signUp.account

        //  註冊 / signUp
        await this.axios.post('/users', this.signUp)

        // NOTE: 將剛新增的使用者塞進呈現的陣列，就不用等送出後又從後台抓資料，再重新整理頁面，使用者體驗較佳
        this.memberData.push({
          account: this.signUp.account,
          avatar: this.avatarImg,
          role: 0
        })

        this.sending = true

        window.setTimeout(() => {
          this.messageSussess = true
          this.sending = false
          this.clearForm()

          // 創建成功後 重新跳轉頁面
          // this.$router.go()
        }, 1500)
      } catch (error) {
        window.setTimeout(() => {
          this.messageShow = true
          this.message = error
          this.sending = true
          this.clearForm()
        }, 1500)
      }
    },
    clearForm () {
      this.$v.$reset()
      this.sending = false
      this.signUp.account = ''
      this.signUp.password = ''
    }
  },
  // created () {
  //   this.updatePagination(1, this.rowsPerPage)
  // },
  async mounted () {
    // 載入時 loading 動畫
    this.loading = true
    try {
      // 取得所有使用者資料  /  getUsers
      const { data } = await this.axios.get('/users/all', {
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
      // 頁面載完時 動畫消失
      this.loading = false
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
