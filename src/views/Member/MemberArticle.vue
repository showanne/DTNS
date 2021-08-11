<template>
  <div id="memberArticle">
    memberArticlememberArticle
    <br> {{ tempCardShow }}
  </div>
</template>

<script>
export default {
  name: 'MemberArticle',
  computed: {
    tempCardShow () {
      return this.$store.state.tempCardShow
    }
  }
}
</script>
