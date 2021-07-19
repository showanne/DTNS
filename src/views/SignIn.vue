<template>
  <div id="signIn">
    <div class="wrapper">
      <div class="section page-header header-filter" :style="headerStyle">
        <div class="container">
          <div class="md-layout md-alignment-center">
            <div
              class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
            >
              <SignCard header-color="green">
                <h4 slot="title" class="card-title">Login</h4>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <md-icon class="material-icons-two-tone">facebook</md-icon>
                  <!-- <i class="fab fa-facebook-square"></i> -->
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <!-- <i class="fab fa-twitter"></i> -->
                  <md-icon>chat_bubble</md-icon>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <!-- <i class="fab fa-google-plus-g"></i> -->
                  <md-icon>mobile_friendly</md-icon>

                </md-button>

                <!-- <p slot="description" class="description">Or Be Classical</p> -->
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>face</md-icon>
                  <label>First Name...</label>
                  <md-input v-model="firstname"></md-input>
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
                <md-button slot="footer" class="md-simple md-success md-lg">
                  Get Started
                </md-button>
              </SignCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.md-card .md-card-header-green{
  background: linear-gradient(
60deg
,#66bb6a,#388e3c);
  box-shadow: 0 5px 20px 0 rgba(0,0,0,0.2), 0 13px 24px -11px rgba(76,175,80,0.6);
  margin: -40px 20px 15px;
  text-align: center;
}
</style>

<script>
// components元件
import SignCard from '@/components/SignCard.vue'

export default {
  name: 'SignIn',
  data () {
    return {
      firstname: null,
      email: null,
      password: null
    }
  },
  components: {
    SignCard
  },
  computed: {
    headerStyle () {
      return {
        backgroundColor: '#FFF9DB'
        // backgroundImage: 'url(require("https://picsum.photos/1920/1080/?random=1"))'
      }
    }
  }
}
</script>
