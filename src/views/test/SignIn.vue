<template>
  <div id="signIn"  class="md-layout md-alignment-center-center h-content">
    <!-- TODO: 寬高的class -->
    <!-- Sign In 登入 -->

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
            <md-icon class="md-size-3x signIcon">person_pin</md-icon>
            <div class="md-title">
              Sign In
            </div>
          </md-card-header>

          <md-card-content>
            <md-field :class="getValidationClass('account')">
              <label for="account">Account</label>
              <md-input
                name="account"
                id="account"
                autocomplete="account"
                v-model="signIn.account"
                placeholder="You Nick Name..."
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.signIn.account.required"
                >帳號是必填欄位</span
              >
              <span class="md-error" v-else-if="!$v.signIn.account.minlength"
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
                v-model="signIn.password"
                placeholder="password..."
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.signIn.password.required"
                >密碼是必填欄位</span
              >
              <span class="md-error" v-else-if="!$v.signIn.password.minlength"
                >密碼最少須 4 個字，最多 20 個字</span
              >
            </md-field>

          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button> Line 快速登入</md-button>
            <md-button type="reset" class="md-primary"> Reset</md-button>
            <md-button type="submit" class="md-primary" :disabled="sending">
              Sign In</md-button
            >
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved"
          >{{ user }} {{ message }}</md-snackbar
        >
      </form>

  </div>
</template>

<script>
// components元件
// import FormCard from '@/components/FormCard.vue'

import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'

export default {
  name: 'SignIn',
  mixins: [validationMixin],
  data () {
    return {
      signIn: {
        signInBtn: false,
        account: '',
        password: ''
      },
      userSaved: false,
      // 送出後的進度條 false 是不跑
      sending: false,
      user: '',
      message: ''
    }
  },
  validations: {
    signIn: {
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
    getValidationClass (fieldName) {
      const field = this.$v.signIn[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.signIn.account = ''
      this.signIn.password = ''
      this.sending = false
    },
    async saveUser () {
      try {
        const { data } = await this.axios.post('/users/signIn', this.signIn)

        this.sending = true

        // Instead of this timeout, here you can call your API
        // window.setTimeout(() => {
        this.user = `Wellcome ${this.signIn.account}`
        this.message = ''
        this.userSaved = true
        this.sending = false
        // this.clearForm()

        this.$store.commit('signIn', data)
        // 登入成功後導向?頁
        // this.$router.push('/?')
        // }, 1500)
      } catch (error) {
        // window.setTimeout(() => {
        this.user = ''
        this.message = error
        this.userSaved = true
        this.sending = true
        // this.clearForm()
        // }, 1500)
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
