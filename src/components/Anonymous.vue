<template>
  <h2>
  <span v-if="user.name != null">{{ user.name }}</span>
  <span v-else-if="user.name == null && user.account != null">{{ user.account }}</span>
  <span v-else>匿名{{ anonymous[random()] }}</span>
  </h2>
</template>

<script>
export default {
  name: 'Anonymous',
  props: {
    anonymous: {
      type: Array,
      default: function () {
        return ['水獺', '烏龜', '玫瑰', '貓咪', '犀牛', '小鹿', '大魚', '獵豹', '老虎', '海豚', '熊貓', '鴿子', '刺蝟', '黑狗', '小兔', '天鵝', '烏鴉', '小雞', '海鷗']
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    random () {
      return Math.floor(Math.random() * 19)
    }
  }
}
</script>
