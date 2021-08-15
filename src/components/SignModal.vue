<template>
  <div>
    <md-dialog :md-active.sync="signBtn"
    :md-close-on-esc="false"
    :md-click-outside-to-close="false"
    >
      <md-dialog-title>
        <div class="md-layout md-alignment-center-space-between">
          <!-- <md-icon class="md-size-3x signIcon">person_pin</md-icon> -->
          <slot name="title"></slot>

          <md-button class="md-primary" @click="closeModal">
            close &times;
          </md-button>
        </div>
      </md-dialog-title>

      <md-dialog-content class="md-scrollbar">
        <md-tabs md-alignment="fixed">

          <md-tab exact id="tab-line" md-label="line" :md-icon="require('../assets/icon/line-logo.svg')">
            <div class="md-layout md-alignment-center-center">
              <md-button @click="signForLine" class="h-unset">
                <md-icon :md-src="require('../assets/icon/line-logo.svg')"
                  class="md-size-5x"></md-icon>
                <span> 快速登入 </span>
              </md-button>
            </div>
          </md-tab>

          <md-tab id="tab-manage" md-label="manage" md-icon="person">
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
                      placeholder="You Nick Name..."
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

                  <!-- 信箱 Email -->
                  <!-- <md-field :class="getValidationClass('email')">
                    <label for="email">Email</label>
                    <md-input
                      type="email"
                      name="email"
                      autocomplete="email"
                      v-model="form.email"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.email.required"
                      >信箱是必填欄位</span
                    >
                    <span class="md-error" v-else-if="!$v.form.email.email"
                      >信箱格式不符</span
                    >
                  </md-field> -->
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending" />

                <md-card-actions>
                  <md-button type="reset" class="md-primary"> Reset</md-button>
                  <md-button type="submit" class="md-primary" :disabled="sending">
                    Sign In</md-button>
                </md-card-actions>
              </md-card>

              <!-- Sign Up -->
              <!-- <md-snackbar :md-active.sync="messageShow"
                >The user {{ user }} was saved with {{ message }}!</md-snackbar> -->
              <!-- Sign In -->
              <md-snackbar :md-active.sync="messageShow"
            >{{ message }}</md-snackbar>

            <!-- <md-dialog-alert
              :md-active.sync="messageShow"
              md-title="ERROR"
              :md-content="message" /> -->

            </form>

            <!-- small 以下尺寸禁止管理者登入 -->
            <md-empty-state
              class="md-small-show"
              md-icon="no_accounts"
              md-label="為了您的管理體驗"
              md-description="螢幕尺寸小於 960px 禁止管理者登入後台！">
            </md-empty-state>
          </md-tab>
        </md-tabs>
      </md-dialog-content>

    </md-dialog>
    <!-- 參考 https://stackoverflow.com/questions/61611210/opening-and-closing-vue-material-dialog-on-different-components -->

    <md-dialog-alert
      :md-active.sync="messageShow"
      md-title="ERROR"
      :md-content="message" />

    <!-- <md-dialog :md-active.sync="wellcomeMsg">
      <md-dialog-content class="md-alignment-centered">
        <md-avatar class="md-large md-elevation-5">
          <img :src="avatarImg" alt="">
        </md-avatar>
        <div class="md-layout-item">
          Wellcome {{ form.account }}
          </div>
      </md-dialog-content>
    </md-dialog> -->
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
  name: 'SignModal',
  components: {},
  mixins: [validationMixin],
  props: {
    signBtn: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      // signBtn: false,
      form: {
        account: '',
        password: ''
        // email: ''
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
      // email: {
      //   required,
      //   email
      // }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.sending = false
      this.form.account = ''
      this.form.password = ''
      // this.form.email = ''
    },
    async signIn () {
      try {
        const { data } = await this.axios.post('/users/signIn', this.form)

        this.sending = true

        window.setTimeout(() => {
          // this.wellcomeMsg = true
          this.sending = false
          // this.clearForm()
          this.$store.commit('signIn', data)
          this.$emit('closeModal') // emitting to parent
          if (this.user.isSignIn && this.user.isAdmin) {
            // 是管理者登入的話，登入成功後導向管理中心
            this.$router.push('/manage').catch((error) => { console.log(error) })
            // console.log(this.$store.state.jwt.token.length, this.$store.state.user.role, this.$store.state.jwt.token)
          } else {
            // 登入成功後導向會員中心
            this.$router.push('/member').catch((error) => { console.log(error) })
            // console.log(this.$store.state.jwt.token.length, this.$store.state.user.role, this.$store.state.jwt.token)
          }
        }, 1500)
      } catch (error) {
        console.log(error)
        this.messageShow = true
        let errorMsg = ''
        error.response.data.message === null ? errorMsg = error : errorMsg = error.response.data.message
        this.message = `${this.form.account} ` + errorMsg
        this.sending = true
        // this.clearForm()
      }
    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.signIn()
      }
    },
    closeModal () {
      this.$emit('closeModal') // emitting to parent
    }
  }
}
</script>
