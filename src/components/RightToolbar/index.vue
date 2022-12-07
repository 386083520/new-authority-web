<template>
    <div class="top-right-btn">
      <el-row>
        <el-tooltip :content="showSearch ? '隐藏搜索' : '显示搜索'" placement="top">
          <el-button size="mini" circle icon="el-icon-search" @click="toggleSearch()"></el-button>
        </el-tooltip>
        <el-tooltip content="刷新" placement="top">
          <el-button size="mini" circle icon="el-icon-refresh"></el-button>
        </el-tooltip>
        <el-tooltip content="显隐列" placement="top">
          <el-button size="mini" circle icon="el-icon-menu"></el-button>
        </el-tooltip>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'RightToolbar',
  props: {
    showSearch: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleSearch () {
      console.log('gsdaaa')
      this.$emit('update:showSearch', !this.showSearch)
    }
  }
}
</script>

<style scoped>

</style>
