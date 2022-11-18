<template>
    <div class="app-container">
      <el-form :inline="true">
        <el-form-item label="角色名称">
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入角色名称"
            size="small"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="权限字符">
          <el-input
            v-model="queryParams.roleKey"
            placeholder="请输入权限字符"
            size="small"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="状态">
          <el-select
            v-model="queryParams.status"
            size="small"
            style="width: 240px">
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="dateRange"
            size="small"
            style="width: 240px"
            type="daterange"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
          <el-button size="mini" icon="el-icon-refresh">重置</el-button>
        </el-form-item>
      </el-form>

      <el-row :gutter="10">
        <el-col :span="1.5">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-plus"
            plain
          >新增</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="success"
            size="mini"
            icon="el-icon-edit"
            plain
          >修改</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            plain
          >删除</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="warning"
            size="mini"
            icon="el-icon-download"
            plain
          >导出</el-button>
        </el-col>

        <right-toolbar></right-toolbar>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'role',
  data () {
    return {
      dateRange: [],
      queryParams: {
        roleName: undefined,
        roleKey: undefined,
        status: undefined
      }
    }
  }
}
</script>

<style scoped>

</style>
