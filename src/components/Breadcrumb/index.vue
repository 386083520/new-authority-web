<template>
  <el-breadcrumb separator="/" class="app-breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span v-if="index === levelList.length - 1 || item.redirect === 'noRedirect'">{{ item.meta.title }}</span>
      <a v-else @click="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  watch: {
    $route (route) {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  data () {
    return {
      levelList: null
    }
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      console.log(matched)
      const first = matched[0]
      if (!this.isDashboard(first)) {
        matched = [{ path: '/index', meta: { title: '首页' } }].concat(matched)
      }
      this.levelList = matched
    },
    handleLink (item) {
      const { path } = item
      this.$router.push(path)
    },
    isDashboard (route) {
      console.log(route)
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim() === 'Index'
    }
  }
}
</script>

<style scoped lang="scss">
.app-breadcrumb.el-breadcrumb {
  font-size: 14px;
  margin-left: 8px;
}
</style>
