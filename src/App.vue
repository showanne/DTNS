<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/edit">Edit</router-link>
      <router-link to="/collection">Collection</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/setting">Setting</router-link>
      <router-link to="/member">Member</router-link>
      <router-link to="/manage">Manage</router-link>
      // modal
         <router-link to="/signin">SignIn</router-link>
      <router-link to="/signup">SignUp</router-link>
    </div> -->

    <div id="nav" class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-layout md-gutter md-alignment-center-right">
        <!-- <h3 class="md-title">DTNS</h3> md-collapse -->
        <div class="md-layout-item md-large-size-20 md-medium-size-33 md-xsmall-hide">
          <md-field>
            <label>Search...</label>
            <!-- search has-white -->
            <md-input v-model="search"></md-input>
            <!-- <span class="md-helper-text">Helper text</span> -->
          </md-field>
        </div>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full" md-persistent="mini">
        <!-- <md-toolbar class="md-transparent" md-elevation="3" to="/">
          DTNS Logo
        </md-toolbar> -->

        <md-list>
          <md-list-item  to="/">
            <!-- <menu-icon /> -->
            <!-- <md-icon>menu</md-icon> -->
            <img src="./assets/logo.png" alt="">
          </md-list-item>
          <md-list-item to="/edit">
              <md-icon :md-src="require('./assets/icon/iconEdit.svg')" />
              <!-- <span>Edit</span> -->
          </md-list-item>

          <md-list-item to="/collection">
              <md-icon :md-src="require('./assets/icon/iconCollection.svg')" />
              <!-- <span>Collection</span> -->
          </md-list-item>

          <md-list-item to="/contact">
              <md-icon :md-src="require('./assets/icon/iconContact.svg')" />
              <!-- <span>Contact</span> -->
          </md-list-item>

          <md-list-item to="/setting">
              <md-icon :md-src="require('./assets/icon/iconSetting.svg')" />
              <!-- <span>Setting</span> -->
          </md-list-item>

          <md-list-item to="/member">
              <md-icon :md-src="require('./assets/icon/iconMember.svg')" />
              <!-- <span>Member</span> -->
          </md-list-item>

          <md-list-item to="/manage">
              <md-icon :md-src="require('./assets/icon/iconManage.svg')" />
              <!-- <span>Manage</span> -->
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>
