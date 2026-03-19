<template>
  <div id="manageHome">
    <!-- 管理者資訊 -->
    <Avatar class="md-large md-elevation-5" :src="user.avatar" :address="userName" />
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
