<template>
  <div id="setting">
    <h1>This is an setting page</h1>
    <div class="md-layout md-alignment-bottom-left">
      <span class="md-medium-size-30">
        settings_font_size</span>
      <div class="md-medium-size-30 md-layout md-alignment-bottom-left">
        <md-button class="md-raised md-primary h-button">
          <md-icon class="md-size-2x"
            :md-src="require('../assets/icon/fontZoomIn.svg')"
          ></md-icon>
        </md-button>
        <md-button class="md-raised md-primary h-button">
          <md-icon class="md-size-2x"
            :md-src="require('../assets/icon/fontOrign.svg')"
          ></md-icon>
        </md-button>
        <md-button class="md-raised md-primary h-button">
          <md-icon class="md-size-2x"
            :md-src="require('../assets/icon/fontZoomOut.svg')"
          ></md-icon>
        </md-button>
      </div>
    </div>

    <div class="md-layout md-alignment-bottom-left">
      <span>settings_brightness</span>
      <md-icon class="md-size-2x md-layout-item">brightness_4</md-icon>
      <md-icon class="md-size-2x md-layout-item">brightness_5</md-icon>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Setting'
}
</script>
