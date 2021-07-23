<template>
  <!-- <md-card class="md-card-sign" :class="{ 'md-card-hidden': cardHidden }"> -->
  <md-card>
    <md-card-header :class="getClass(headerColor)">
      <slot name="title"></slot>
      <div class="social-line">
        <slot name="buttons"></slot>
      </div>
    </md-card-header>

    <md-card-content>
      <slot name="description"></slot>
      <slot name="inputs"></slot>
      <slot name="select"></slot>
      <slot name="textarea"></slot>
    </md-card-content>

    <md-card-actions>
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'FormCard',
  props: {
    headerColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // cardHidden: true
    }
  },
  // beforeMount () {
  //   setTimeout(this.showCard, 400)
  // },
  methods: {
    // showCard: function () {
    //   this.cardHidden = false
    // },
    getClass: function (headerColor) {
      return 'md-card-header-' + headerColor + ''
    }
  }
}
</script>
