<template>
  <div id="setting">
    <h1>This is an setting page</h1>
    <div class="md-layout md-alignment-bottom-left">
      <span class="md-medium-size-30">
        settings_brightness</span>
      <div class="md-medium-size-30 md-layout md-alignment-bottom-left">
        <md-icon class="md-size-2x">filter_1</md-icon>
        <md-icon class="md-size-3x">filter_2</md-icon>
        <md-icon class="md-size-4x">filter_3</md-icon>
      </div>
    </div>

    <md-icon>exposure_plus_1</md-icon>
    <md-icon>exposure_plus_2</md-icon>
    <md-icon>exposure_plus_3</md-icon>

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
