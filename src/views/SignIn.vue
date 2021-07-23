<template>
  <div id="signIn">

    <md-dialog
      :md-active.sync="signInBtn"
    >
      <!-- md-close-on-esc= false
      md-click-outside-to-close= false -->
      <!-- <md-dialog-title>Sign In</md-dialog-title> -->
      <form class="">
        <FormCard header-color="signIn">
          <!-- <p slot="description" class="description">Or Be Classical</p> -->
          <h4 slot="title" class="card-title">Sign In</h4>
          <md-field class="md-form-group" slot="inputs">
            <md-icon>face</md-icon>
            <label>Nick Name...</label>
            <md-input v-model="nickname"></md-input>
          </md-field>
          <md-field class="md-form-group" slot="inputs">
            <md-icon>email</md-icon>
            <label>Email...</label>
            <md-input v-model="email" type="email"></md-input>
          </md-field>
          <md-field class="md-form-group" slot="inputs">
            <md-icon>lock_outline</md-icon>
            <label>Password...</label>
            <md-input v-model="password"></md-input>
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

      <!-- <md-dialog-actions>
        <md-button class="md-primary" @click="signInBtn = false">Close</md-button>
        <md-button class="md-primary" @click="signInBtn = false">Save</md-button>
      </md-dialog-actions> -->
    </md-dialog>

    <md-button
      class="md-primary md-raised"
      @click="signInBtn = true">
      <!-- <md-icon>star</md-icon> -->
      Sign In
    </md-button>
  </div>
</template>

<script>
// components元件
import FormCard from '@/components/FormCard.vue'

export default {
  name: 'SignIn',
  data () {
    return {
      signInBtn: false,
      nickname: null,
      email: null,
      password: null
    }
  },
  components: {
    FormCard
  },
  computed: {
  }
}
</script>
