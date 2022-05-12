<template>
  <div v-if="!item.hidden">
    <el-menu-item :index="item.path" v-if="!item.children">
      <menu-item :icon = "item.meta.icon" :title="item.meta.title"></menu-item>
    </el-menu-item>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <menu-item :icon = "item.meta.icon" :title="item.meta.title"></menu-item>
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
import MenuItem from './Item'
export default {
  name: 'SidebarItem',
  components: { MenuItem },
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
