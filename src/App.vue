<template>
  <div id="app">
    <div id="nav" class="page-container" nav-pills-icons>
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar
          class="md-accent md-layout md-gutter md-alignment-center-space-between">
          <md-button class="md-icon-button"
            @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
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

        <md-app-drawer :md-active.sync="menuVisible" md-permanent="full" md-persistent="mini">
          <!-- -->
          <!-- <md-toolbar class="md-transparent" md-elevation="3" to="/">
            DTNS Logo
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </md-toolbar> -->

          <md-list>
            <md-list-item to="/">
              <img src="./assets/logo.png" alt="logo" width="90">
            </md-list-item>
            <md-list-item to="/edit">
                <md-icon :md-src="require('./assets/icon/icon-Edit.svg')"></md-icon>
                <!-- <span class="md-list-item-text">Edit</span> -->
            </md-list-item>

            <md-list-item to="/collection">
                <md-icon :md-src="require('./assets/icon/icon-Collection.svg')"></md-icon>
                <!-- <span class="md-list-item-text">Collection</span> -->
            </md-list-item>

            <md-list-item to="/contact">
                <md-icon :md-src="require('./assets/icon/icon-Contact.svg')"></md-icon>
                <!-- <span class="md-list-item-text">Contact</span> -->
            </md-list-item>

            <md-list-item to="/setting">
                <md-icon :md-src="require('./assets/icon/icon-Setting.svg')"></md-icon>
                <!-- <span class="md-list-item-text">Setting</span> -->
            </md-list-item>

            <md-list-item to="/member">
                <md-icon :md-src="require('./assets/icon/icon-Member.svg')"></md-icon>
                <!-- <span class="md-list-item-text">Member</span> -->
            </md-list-item>

            <md-list-item to="/manage">
                <md-icon :md-src="require('./assets/icon/icon-Manage.svg')"></md-icon>
                <!-- <span class="md-list-item-text">Manage</span> -->
            </md-list-item>

            <md-list-item to="/SignIn">
              <!-- <md-icon>recent_actors</md-icon> -->
              <span class="md-list-item-text">SignIn</span>
            </md-list-item>

            <md-list-item to="/SignUp">
              <!-- <md-icon>recent_actors</md-icon> -->
              <span class="md-list-item-text">SignUp</span>
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
      search: '',
      menuVisible: false

    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>
