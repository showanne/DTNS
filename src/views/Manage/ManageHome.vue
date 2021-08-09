<template>
  <div id="manageHome">
    <!-- 管理者資訊 -->
    <md-avatar v-if="user.avatar != null" class="md-large">
      <img :src="user.avatar" alt="avatar">
    </md-avatar>
    <Avatar v-else />
    <h2 v-if="user.name != null">{{ user.name }}</h2>
    <h2 v-else-if="user.name == null && user.account != null">{{ user.account }}</h2>
    <Anonymous v-else />
  </div>
</template>

<script>
// components元件
import Avatar from '@/components/Avatar.vue'
import Anonymous from '@/components/Anonymous.vue'

export default {
  name: 'ManageHome',
  components: {
    Avatar,
    Anonymous
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
