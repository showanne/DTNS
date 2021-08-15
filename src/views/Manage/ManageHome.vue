<template>
  <div id="manageHome">
    <!-- 管理者資訊 -->
    <md-avatar class="md-large md-elevation-5">
      <img :src="user.avatar" alt="">
    </md-avatar>
    <h2>{{ userName }}</h2>
  </div>
</template>

<script>

export default {
  name: 'ManageHome',
  components: {

  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
