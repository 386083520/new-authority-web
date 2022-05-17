<template>
    <div>
      <svg-icon icon-class="question" @click="goto"></svg-icon>
    </div>
</template>

<script>
export default {
  name: 'RuoYiDoc',
  methods: {
    goto () {
      window.open('www.baidu.com')
    }
  }
}
</script>

<style scoped>

</style>
