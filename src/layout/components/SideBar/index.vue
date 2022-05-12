<template>
  <div>
    <logo/>
    <el-scrollbar>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :background-color="variables.menuBackground"
        text-color="#fff"
        :unique-opened="true"
        active-text-color="#ffd04b">
        <sidebar-item></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from './Logo'
import variables from '@/assets/styles/variables.scss'
import SidebarItem from './SidebarItem'
export default {
  name: 'SideBar',
  components: { SidebarItem, Logo },
  computed: {
    variables () {
      return variables
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
