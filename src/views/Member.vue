<template>
  <div id="member">
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Member'
  // data () {
  //   return {
  //     expandArticle: false,
  //     expandSingle: false
  //   }
  // },
  // components: {

  // },
  // computed: {
  //   user () {
  //     return this.$store.state.user
  //   },
  // tempCardShow () {
  //   return this.$store.state.tempCardShow
  // }
  // },
  // methods: {
  //   tempShow (T) {
  //     this.$store.commit('tempShow', T)
  //   }
  // }
  // watch: {
  //   tempCardShow: function (val) {
  //     // console.log(val)
  //     this.tempCardShow = val
  //   }
  // }
}
</script>
