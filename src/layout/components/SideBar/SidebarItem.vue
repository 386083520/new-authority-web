<template>
  <el-menu-item index="1-4-1">{{item.name}}</el-menu-item>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
