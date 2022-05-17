<template>
    <div>
      <svg-icon icon-class="github" @click="goto"></svg-icon>
    </div>
</template>

<script>
export default {
  name: 'RuoYiGit',
  methods: {
    goto () {
      window.open('www.baidu.com')
    }
  }
}
</script>

<style scoped>

</style>
