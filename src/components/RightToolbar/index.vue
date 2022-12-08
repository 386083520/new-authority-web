<template>
    <div class="top-right-btn">
      <el-row>
        <el-tooltip :content="showSearch ? '隐藏搜索' : '显示搜索'" placement="top">
          <el-button size="mini" circle icon="el-icon-search" @click="toggleSearch()"></el-button>
        </el-tooltip>
        <el-tooltip content="刷新" placement="top">
          <el-button size="mini" circle icon="el-icon-refresh" @click="refresh()"></el-button>
        </el-tooltip>
        <el-tooltip content="显隐列" placement="top" v-if="columns">
          <el-button size="mini" circle icon="el-icon-menu" @click="showColumn()"></el-button>
        </el-tooltip>
      </el-row>
      <el-dialog :title="title" :visible.sync="open">
        <el-transfer
          :titles="['显示', '隐藏']"
          :data="columns"
          v-model="value"
          @change="dataChange"
        >
        </el-transfer>
      </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'RightToolbar',
  props: {
    showSearch: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array
    }
  },
  created () {
    for (const item in this.columns) {
      if (this.columns[item].visible === false) {
        this.value.push(parseInt(item))
      }
    }
  },
  data () {
    return {
      title: '显示/隐藏',
      open: false,
      value: []
    }
  },
  methods: {
    toggleSearch () {
      console.log('gsdaaa')
      this.$emit('update:showSearch', !this.showSearch)
    },
    refresh () {
      this.$emit('queryTable')
    },
    showColumn () {
      this.open = true
    },
    dataChange (data) {
      for (const item in this.columns) {
        const key = this.columns[item].key
        this.columns[item].visible = !data.includes(key)
      }
    }
  }
}
</script>

<style scoped>

</style>
