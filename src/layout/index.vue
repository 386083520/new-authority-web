<template>
    <div class="app-wrapper">
      <side-bar class="sidebar-container"></side-bar>
      <div>
        <div>
          <nav-bar></nav-bar>
          <tags-view></tags-view>
        </div>
        <app-main></app-main>
      </div>
    </div>
</template>

<script>
import SideBar from './components/SideBar/index'
import NavBar from './components/NavBar'
import TagsView from './components/TagsView/index'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: { AppMain, TagsView, NavBar, SideBar }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/styles/variables.scss";
  .app-wrapper {
    width: 100%;
    height: 100%;
  }
.sidebar-container {
  width: 200px;
  height: 100%;
  background: $base-menu-background;
  position: fixed;
}
</style>
