<template>
  <div id="member">
    <h1>This is an member page</h1>
    <Avatar />
    <Anonymous />
  </div>
</template>

<script>
// components元件
import Avatar from '@/components/Avatar.vue'
import Anonymous from '@/components/Anonymous.vue'

export default {
  name: 'Member',
  data () {
    return {
      variant: 'beam',
      // variant oneOf: marble, beam, pixel,sunset, ring, bauhaus
      size: 80,
      // address: true,
      // HEX 不需要 # (官方文件就沒有)
      colors: ['3B4058', '2A6E78', '7A907C', 'C9B180', '3E6B48', 'B5B479', 'F7E6A6']
    }
  },
  components: {
    Avatar,
    Anonymous
  // },
  // methods: {
  //   random () {
  //     return Math.floor(Math.random() * 7)
  //   }
  }
}
</script>
