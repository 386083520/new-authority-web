<template>
  <div v-if="!item.hidden">
    <template v-if="!item.children">
      <app-link :to="item.path">
        <el-menu-item :index="item.path">
          <menu-item :icon = "item.meta.icon" :title="item.meta.title"></menu-item>
        </el-menu-item>
      </app-link>
    </template>
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
import AppLink from './Link'
export default {
  name: 'SidebarItem',
  components: { AppLink, MenuItem },
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
