<template>
  <div v-if="!item.hidden">
    <el-menu-item index="1-4-1" v-if="!item.children">{{item.name}}</el-menu-item>
    <el-submenu v-else>
      <template slot="title">
        <span>{{item.name}}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      ></sidebar-item>
    </el-submenu>
  </div>
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
