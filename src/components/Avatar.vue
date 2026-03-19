<template>
  <md-avatar>
    <img class="avatar"
        :src="`https://api.dicebear.com/9.x/${diceBearVariant}/svg?seed=${address || 'DTNS'}`"
        alt="Avatar"
      />
  </md-avatar>
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
      // original boringavatars variant: marble, beam, pixel, sunset, ring, bauhaus
    },
    address: {
      type: String,
      default: ''
    },
    colors: {
      type: Array,
      default: function () {
        return ['3B4058', '2A6E78', '7A907C', 'C9B180', '3E6B48', 'B5B479', 'F7E6A6']
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    diceBearVariant () {
      const map = {
        beam: 'thumbs',
        pixel: 'pixel-art',
        marble: 'shapes',
        ring: 'identicon',
        sunset: 'shapes',
        bauhaus: 'shapes'
      }
      return map[this.variant] || 'thumbs'
    }
  },
  methods: {
    random () {
      return Math.floor(Math.random() * 7)
    }
  }
}
</script>
