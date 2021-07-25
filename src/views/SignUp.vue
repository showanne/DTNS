<template>
  <div id="signUp" class="md-layout md-alignment-center-center" style="height: 80vh;">
    <!-- Sign Up -->

      <form
        novalidate
        class="md-layout md-alignment-center-center"
        @submit.prevent="validateUser"
        @reset="clearForm"
      >
        <md-card
          class="md-layout-item md-size-33 md-medium-size-50 md-small-size-100"
        >
          <md-card-header>
            <md-icon class="md-size-3x signIcon">perm_contact_calendar</md-icon>
            <div class="md-title">
              Sign Up
            </div>
          </md-card-header>

          <md-card-content>
            <md-field :class="getValidationClass('account')">
              <label for="account">Account</label>
              <md-input
                name="account"
                id="account"
                autocomplete="account"
                v-model="signUp.account"
                placeholder="You Nick Name..."
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.signUp.account.required"
                >帳號是必填欄位</span
              >
              <span class="md-error" v-else-if="!$v.signUp.account.minlength"
                >帳號最少須 5 個字，最多 20 個字</span
              >
            </md-field>

            <md-field :class="getValidationClass('password')">
              <label for="password">Password</label>
              <md-input
                type="password"
                name="password"
                id="password"
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

            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                v-model="signUp.email"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.signUp.email.required"
                >信箱是必填欄位</span
              >
              <span class="md-error" v-else-if="!$v.signUp.email.email"
                >信箱格式不符</span
              >
            </md-field>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button> Line</md-button>
            <md-button type="reset" class="md-primary"> Reset</md-button>
            <md-button type="submit" class="md-primary" :disabled="sending">
              Create user</md-button
            >
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved"
          >The user {{ user }} was saved with {{ message }}!</md-snackbar
        >
        <b></b>
      </form>

  </div>
</template>

<script>
// components元件
// import FormCard from '@/components/FormCard.vue'

import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'

export default {
  name: 'SignUp',
  mixins: [validationMixin],
  data () {
    return {
      signUp: {
        signUpBtn: false,
        account: '',
        password: '',
        email: ''
      },
      userSaved: false,
      // 送出後的進度條 false 是不跑
      sending: false,
      user: '',
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
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.signUp[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.signUp.account = ''
      this.signUp.password = ''
      this.signUp.email = ''
      this.sending = false
    },
    async saveUser () {
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
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveUser()
      }
    }
  }
}
</script>
