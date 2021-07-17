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
      <md-app-toolbar class="md-primary">
        <span class="md-title">DTNS</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <!-- md-persistent="mini" -->
        <md-toolbar class="md-transparent" md-elevation="0" to="/">
          DTNS
        </md-toolbar>

        <md-list>
        <md-list-item>
          <!-- <menu-icon /> -->
          <md-icon>menu</md-icon>
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
