<template>
    <img class="avatar"
        :src="`https://source.boringavatars.com/${variant}/${size}/?colors=${colors[random()]},${colors[random()]}`"
        alt="Avatar"
      />
</template>

<style>
  img.avatar{
    filter: drop-shadow(3px 3px 3px #7876B3);
  }
</style>

<script>
export default {
  name: 'Avatar',
  props: {
    size: {
      type: Number,
      default: 80
    },
    variant: {
      type: String,
      default: 'beam'
      // variant oneOf: marble, beam, pixel,sunset, ring, bauhaus
    },
    address: {
      type: String,
      require: true
    },
    colors: {
      type: Array,
      default: function () {
        // HEX 不需要 # (官方文件就沒有)
        return ['3B4058', '2A6E78', '7A907C', 'C9B180', '3E6B48', 'B5B479', 'F7E6A6']
      }
    }
  },
  methods: {
    random () {
      return Math.floor(Math.random() * 7)
    }
  }
}
</script>
