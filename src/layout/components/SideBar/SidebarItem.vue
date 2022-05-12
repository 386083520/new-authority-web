<template>
  <div v-if="!item.hidden">
    <template v-if="!item.children">
      <app-link :to="basePath">
        <el-menu-item :index="basePath">
          <menu-item :icon = "item.meta.icon" :title="item.meta.title"></menu-item>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="basePath">
      <template slot="title">
        <menu-item :icon = "item.meta.icon" :title="item.meta.title"></menu-item>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      ></sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
import MenuItem from './Item'
import AppLink from './Link'
import path from 'path'
import { isExternal } from '../../../utils/validate'
export default {
  name: 'SidebarItem',
  components: { AppLink, MenuItem },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    resolvePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style scoped>

</style>
