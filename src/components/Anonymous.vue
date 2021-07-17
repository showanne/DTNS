<template>
  <h2>匿名{{ anonymous[random()] }}</h2>
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
  methods: {
    random () {
      return Math.floor(Math.random() * 19)
    }
  }
}
</script>
