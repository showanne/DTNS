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
    <div  id="nav" class="page-container">
    <md-app>
      <md-app-toolbar class="md-accent">
        <span class="md-title">DTNS</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <router-link to="/">DTNS</router-link>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <router-link to="/edit">
            <img :src="require('./assets/icon/iconEdit.svg')">
            Edit
            </router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/collection">
            <img :src="require('./assets/icon/iconCollection.svg')">
            Collection
            </router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/contact">
            <img :src="require('./assets/icon/iconContact.svg')">
            Contact
            </router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/setting">
            <img :src="require('./assets/icon/iconSetting.svg')">
            Setting
            </router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/member">
            <img :src="require('./assets/icon/iconMember.svg')">
            Member
          </router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/manage">
            <img :src="require('./assets/icon/iconManage.svg')">
            Manage
          </router-link>
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
