<template>
    <div class="navbar">
      <hamburger class="hamburger-container" @toggleClick="toggleSideBar" :is-active="sidebar.opened"></hamburger>
      <breadcrumb class="breadcrumb-container"></breadcrumb>
      <div class="right-menu">
        <header-search class="right-menu-item"></header-search>
        <el-tooltip content="源码地址" placement="bottom" effect="dark">
          <ruo-yi-git class="right-menu-item"></ruo-yi-git>
        </el-tooltip>
        <el-tooltip content="文档地址" placement="bottom" effect="dark">
          <ruo-yi-doc class="right-menu-item"></ruo-yi-doc>
        </el-tooltip>
        <screenfull class="right-menu-item"></screenfull>
        <el-tooltip content="布局大小" placement="bottom" effect="dark">
          <size-select class="right-menu-item"></size-select>
        </el-tooltip>
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img :src="avatar" class="user-avatar">
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>布局设置</el-dropdown-item>
            <el-dropdown-item divided>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
import Hamburger from '../../components/Hamburger/index'
import Breadcrumb from '../../components/Breadcrumb/index'
import { mapGetters } from 'vuex'
import HeaderSearch from '../../components/HeaderSearch/index'
import RuoYiGit from '../../components/RuoYi/Git/index'
import RuoYiDoc from '../../components/RuoYi/Doc/index'
import Screenfull from '../../components/Screenfull/index'
import SizeSelect from '../../components/SizeSelect/index'
export default {
  name: 'NavBar',
  components: { SizeSelect, Screenfull, RuoYiDoc, RuoYiGit, HeaderSearch, Hamburger, Breadcrumb },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  }
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
    cursor: pointer;
  }
  .breadcrumb-container {
    float: left;
    height: 100%;
    line-height: 50px;
    margin-left: 8px;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 46px;
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
    }
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        .user-avatar {
          width: 40px;
          height: 40px;
          cursor: pointer;
          border-radius: 10px;
        }
      }
    }
  }
</style>
