export default {
  computed: {
    user () {
      return this.$store.getters.user
    },
    randomState () {
      // Math.floor(Math.random() * 7)
      return 'DTNSLOGIN'
    }
  }
}
