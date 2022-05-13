<template>
    <div class="navbar">
      <hamburger class="hamburger-container"></hamburger>
      <breadcrumb class="breadcrumb-container"></breadcrumb>
      <div class="right-menu">
        right-menu
      </div>
    </div>
</template>

<script>
import Hamburger from '../../components/Hamburger/index'
import Breadcrumb from '../../components/Breadcrumb/index'
export default {
  name: 'NavBar',
  components: { Hamburger, Breadcrumb }
}
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  background: #fff;
}
  .hamburger-container {
    height: 100%;
    line-height: 46px;
    float: left;
    padding: 0 15px;
  }
  .breadcrumb-container {
    float: left;
    height: 100%;
    line-height: 46px;
    margin-left: 8px;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 46px;
  }
</style>
