<template>
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

          <md-button>
            <md-icon :md-src="require('../assets/icon/line-logo.svg')"></md-icon>
          </md-button>
            Line 快速註冊
        </md-tab>

        <md-tab id="tab-manage" md-label="manage" md-icon="person">
          <form
            novalidate
            class="md-layout"
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
                  Create user</md-button>
              </md-card-actions>
            </md-card>

            <md-snackbar :md-active.sync="userSaved"
              >The user {{ user }} was saved with {{ message }}!</md-snackbar
            >
          </form>
        </md-tab>
      </md-tabs>
    </md-dialog-content>

  </md-dialog>
  <!-- 參考 https://stackoverflow.com/questions/61611210/opening-and-closing-vue-material-dialog-on-different-components -->
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
      userSaved: false,
      // 送出後的進度條 false 是不跑
      sending: false,
      user: '',
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
      this.form.account = ''
      this.form.password = ''
      // this.form.email = ''
    },
    async saveUser () {
      try {
        await this.axios.post('/users', this.form)

        this.sending = true

        // Instead of this timeout, here you can call your API
        // window.setTimeout(() => {
        this.user = `${this.form.account}`
        this.message = 'success'
        this.userSaved = true
        this.sending = false
        this.clearForm()
        // }, 1500)
      } catch (error) {
        // window.setTimeout(() => {
        this.user = `${this.form.account}`
        this.userSaved = false
        this.message = 'error'
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
    },
    closeModal () {
      this.$emit('closeModal') // emitting to parent
    }
  }
}
</script>
