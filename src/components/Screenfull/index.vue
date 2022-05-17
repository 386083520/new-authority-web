<template>
    <div>
      <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'"></svg-icon>
    </div>
</template>

<script>
export default {
  name: 'Screenfull',
  data () {
    return {
      isFullscreen: false
    }
  }
}
</script>

<style scoped>

</style>
