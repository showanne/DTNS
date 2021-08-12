<template>
  <div id="manageHome">
    <!-- 管理者資訊 -->
    <Avatar class="md-large md-elevation-5" />
    <Anonymous />
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
