<template>
  <div>
    <logo :collapse="isCollapse"/>
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        :background-color="variables.menuBackground"
        text-color="#fff"
        :unique-opened="true"
        active-text-color="#ffd04b">
        <sidebar-item
          v-for="(route, index) in sidebarRouters"
          :item="route"
          :key="route.path + index"
          :base-path="route.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from './Logo'
import variables from '@/assets/styles/variables.scss'
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['sidebarRouters', 'sidebar']),
    activeMenu () {
      const route = this.$route
      const { path } = route
      return path
    },
    variables () {
      return variables
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.el-scrollbar {
  height: calc(100% - 50px);
}
</style>
