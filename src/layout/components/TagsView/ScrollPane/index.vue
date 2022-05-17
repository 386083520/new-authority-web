<template>
    <el-scrollbar :vertical="false" class="scroll-container">
      <slot></slot>
    </el-scrollbar>
</template>

<script>
export default {
  name: 'ScrollPan'
}
</script>

<style scoped lang="scss">
.scroller-container {
}
</style>
