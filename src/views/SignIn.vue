<template>
  <div id="signIn">
    <!-- Sign Up -->

    <md-button
      class="md-primary md-raised"
      @click="signUp.signUpBtn = true">
      <!-- <md-icon>star</md-icon> -->
      Sign Up
    </md-button>

    <md-dialog
      :md-active.sync="signUp.signUpBtn"
    >
      <!-- md-close-on-esc= false
      md-click-outside-to-close= false -->
      <!-- <md-dialog-title>Sign Up</md-dialog-title> -->
      <md-dialog-content class="md-scrollbar">
        <form class="">
          <FormCard header-color="signUp">
            <!-- <p slot="description" class="description">Or Be Classical</p> -->
            <h4 slot="title" class="card-title">Sign Up</h4>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>face</md-icon>
              <label>account</label>
              <md-input v-model="signUp.nickname"
                placeholder="You Nick Name..."></md-input>
            </md-field>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>lock_outline</md-icon>
              <label>Password...</label>
              <md-input type="password"
               v-model="signUp.password"
               placeholder="********"></md-input>
            </md-field>

            <md-button slot="footer" type="reset">
              <!-- <md-icon>reset</md-icon> -->
              reset
            </md-button>
            <md-button slot="footer" to="/">
              <md-icon>star</md-icon>
              Started
            </md-button>
            <md-button slot="footer"  type="submit" to="/member">
              Get Started
            </md-button>
          </FormCard>
        </form>
      </md-dialog-content>
      <!-- <md-dialog-actions>
        <md-button class="md-primary" @click="signInBtn = false">Close</md-button>
        <md-button class="md-primary" @click="signInBtn = false">Save</md-button>
      </md-dialog-actions> -->
    </md-dialog>

    <!-- Sign In -->

    <md-button
      class="md-primary md-raised"
      @click="signIn.signInBtn = true">
      <!-- <md-icon>star</md-icon> -->
      Sign In
    </md-button>

    <md-dialog
      :md-active.sync="signIn.signInBtn"
    >
      <!-- md-close-on-esc= false
      md-click-outside-to-close= false -->
      <!-- <md-dialog-title>Sign In</md-dialog-title> -->
      <md-dialog-content class="md-scrollbar">
        <form class="">
          <FormCard header-color="signIn">
            <!-- <p slot="description" class="description">Or Be Classical</p> -->
            <h4 slot="title" class="card-title">Sign In</h4>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>face</md-icon>
              <label>Nick Name...</label>
              <md-input v-model="signIn.nickname"></md-input>
            </md-field>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>email</md-icon>
              <label>Email...</label>
              <md-input v-model="signIn.email" type="email"></md-input>
            </md-field>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>lock_outline</md-icon>
              <label>Password Set...</label>
              <md-input type="password" v-model="signIn.passwordSet"></md-input>
            </md-field>

            <md-button slot="footer" type="reset">
              <!-- <md-icon>reset</md-icon> -->
              reset
            </md-button>
            <md-button slot="footer" to="/">
              <md-icon>star</md-icon>
              Started
            </md-button>
            <md-button slot="footer"  type="submit" to="/member">
              Get Started
            </md-button>
          </FormCard>
        </form>
      </md-dialog-content>
      <!-- <md-dialog-actions>
        <md-button class="md-primary" @click="signInBtn = false">Close</md-button>
        <md-button class="md-primary" @click="signInBtn = false">Save</md-button>
      </md-dialog-actions> -->
    </md-dialog>

  </div>
</template>

<script>
// components元件
import FormCard from '@/components/FormCard.vue'

export default {
  name: 'SignIn',
  data () {
    return {
      signUp: {
        signUpBtn: false,
        account: null,
        password: null
      },
      signIn: {
        signInBtn: false,
        nickname: null,
        email: null,
        passwordSet: null
      }
    }
  },
  components: {
    FormCard
  },
  computed: {
  }
}
</script>
