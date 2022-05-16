<template>
    <div class="app-wrapper" :class="objClass">
      <side-bar class="sidebar-container"></side-bar>
      <div class="main-container">
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
  components: { AppMain, TagsView, NavBar, SideBar },
  computed: {
    objClass () {
      return {
        hideSidebar: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .app-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
