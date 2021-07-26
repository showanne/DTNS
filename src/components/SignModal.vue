<template>
  <md-dialog :md-active.sync="signBtn"
  :md-close-on-esc="false"
  :md-click-outside-to-close="false"
  >
    <!-- md-close-on-esc= false
      md-fullscreen="false"
      md-click-outside-to-close= false -->
    <md-dialog-title>
      <!-- <md-icon><slot name="title-icon"></slot></md-icon> -->
      <!-- Sign Up -->
      <!-- <md-icon class="md-size-3x signIcon">perm_contact_calendar</md-icon> -->
      <!-- Sign In -->
      <md-icon class="md-size-3x signIcon">person_pin</md-icon>
      <slot name="title"></slot>
    </md-dialog-title>
    <md-dialog-content class="md-scrollbar">
      <form
        novalidate
        class="md-layout"
        @submit.prevent="validateUser"
        @reset="clearForm"
      >
        <md-card
          class="md-layout-item"
        >
          <!-- <md-card-header>
            <md-icon class="md-size-2x">perm_contact_calendar</md-icon>
            <div class="md-title">
              Sign Up
            </div>
          </md-card-header> -->

          <md-card-content>
            <md-field :class="getValidationClass('account')">
              <label for="account">Account</label>
              <md-input
                name="account"
                autocomplete="account"
                v-model="account"
                placeholder="You Nick Name..."
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.account.required"
                >帳號是必填欄位</span
              >
              <span class="md-error" v-else-if="!$v.account.minlength"
                >帳號最少須 5 個字，最多 20 個字</span
              >
            </md-field>

            <md-field :class="getValidationClass('password')">
              <label for="password">Password</label>
              <md-input
                type="password"
                name="password"
                autocomplete="password"
                v-model="password"
                placeholder="password..."
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.password.required"
                >密碼是必填欄位</span
              >
              <span class="md-error" v-else-if="!$v.password.minlength"
                >密碼最少須 4 個字，最多 20 個字</span
              >
            </md-field>

            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input
                type="email"
                name="email"
                autocomplete="email"
                v-model="email"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.email.required"
                >信箱是必填欄位</span
              >
              <span class="md-error" v-else-if="!$v.email.email"
                >信箱格式不符</span
              >
            </md-field>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button> Line 快速註冊</md-button>
            <md-button type="reset" class="md-primary"> Reset</md-button>
            <md-button type="submit" class="md-primary" :disabled="sending">
              Create user</md-button>
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved"
          >The user {{ user }} was saved with {{ message }}!</md-snackbar
        >
      </form>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button class="md-primary" @click="closeModal">Close</md-button>
        <!-- <md-button class="md-primary" @click="signInBtn = false">Close</md-button>
        <md-button class="md-primary" @click="signInBtn = false">Save</md-button> -->
      </md-dialog-actions>
  </md-dialog>
  <!-- 參考 https://stackoverflow.com/questions/61611210/opening-and-closing-vue-material-dialog-on-different-components -->
</template>

<script>
// vuelidate 驗證套件
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'

export default {
  name: 'SignModal',
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
      account: '',
      password: '',
      email: '',
      userSaved: false,
      // 送出後的進度條 false 是不跑
      sending: false,
      user: '',
      message: ''
    }
  },
  validations: {
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
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.account = ''
      this.password = ''
      this.email = ''
    },
    async saveUser () {
      try {
        await this.axios.post('/users', this)

        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.user = `${this.account}`
          this.message = 'success'
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      } catch (error) {
        window.setTimeout(() => {
          this.user = `${this.account}`
          this.userSaved = false
          this.message = 'error'
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
    },
    closeModal () {
      this.$emit('closeModal') // emitting to parent
    }
  }
}
</script>
