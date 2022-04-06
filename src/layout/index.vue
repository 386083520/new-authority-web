<template>
    <div>Layout</div>
</template>

<script>
export default {
  name: 'Layout',
  mounted () {
    console.log('gsdtoken', this.$store.state.user.token)
  }
}
</script>

<style scoped>

</style>
