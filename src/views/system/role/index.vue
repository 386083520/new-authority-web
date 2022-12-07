<template>
    <div class="app-container">
      <el-form :inline="true" ref="queryForm" :model="queryParams" v-show="showSearch">
        <el-form-item label="角色名称" prop="roleName">
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入角色名称"
            size="small"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="权限字符" prop="roleKey">
          <el-input
            v-model="queryParams.roleKey"
            placeholder="请输入权限字符"
            size="small"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="状态" prop="status">
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
            value-format="yyyy-MM-dd"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" icon="el-icon-search" @click="handleQuery">搜索</el-button>
          <el-button size="mini" icon="el-icon-refresh" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>

      <el-row :gutter="10">
        <el-col :span="1.5">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-plus"
            plain
            @click="handleAdd"
          >新增</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="success"
            size="mini"
            icon="el-icon-edit"
            plain
            :disabled="single"
            @click="handleUpdate"
          >修改</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            plain
            @click="handleDelete"
            :disabled="multiple"
          >删除</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="warning"
            size="mini"
            icon="el-icon-download"
            plain
            @click="handleExport"
          >导出</el-button>
        </el-col>

        <right-toolbar :show-search.sync="showSearch" @queryTable="getList" :columns="columns"></right-toolbar>
      </el-row>

      <el-table :data="roleList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column label="角色编号" prop="roleId" width="120" v-if="columns[0].visible"></el-table-column>
        <el-table-column label="角色名称" prop="roleName" width="150" v-if="columns[1].visible"></el-table-column>
        <el-table-column label="权限字符" prop="roleKey" width="150" v-if="columns[2].visible"></el-table-column>
        <el-table-column label="显示顺序" prop="roleSort" width="100" v-if="columns[3].visible"></el-table-column>
        <el-table-column label="状态" width="100" prop="status" v-if="columns[4].visible">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-value="0"
              inactive-value="1"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="180" prop="createTime" v-if="columns[5].visible"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-edit"
              @click="handleUpdate(scope.row)"
            >
              修改
            </el-button>
            <el-button
              size="mini"
              type="text"
              icon="el-icon-delete"
              @click="handleDelete(scope.row)"
            >
              删除
            </el-button>
            <el-dropdown
              size="mini"
              type="text"
              icon="el-icon-edit"
            >
              <span class="el-dropdown-link">
                <i class="el-icon-d-arrow-right"></i>更多
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-circle-check">数据权限</el-dropdown-item>
                <el-dropdown-item icon="el-icon-user">分配用户</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        :total="total"
        :pageSizes="[1,2,3,5,10]"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      ></pagination>
      <el-dialog :title="title" :visible.sync="open" width="500px">
        <el-form label-width="100px" :model="form" ref="form" :rules="rules">
          <el-form-item label="角色名称" prop="roleName">
            <el-input placeholder="请输入角色名称" v-model="form.roleName"/>
          </el-form-item>
          <el-form-item prop="roleKey">
            <span slot="label">
              <el-tooltip content="控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)" placement="top">
                <i class="el-icon-question"></i>
              </el-tooltip>
              权限字符
            </span>
            <el-input placeholder="请输入权限字符" v-model="form.roleKey"/>
          </el-form-item>
          <el-form-item label="角色顺序" prop="roleSort">
            <el-input-number controls-position="right" :min="0" v-model="form.roleSort"/>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="form.status">
              <!--<el-radio>正常</el-radio>
              <el-radio>停用</el-radio>-->
              <el-radio v-for="dict in dict.type.sys_normal_disable" :key="dict.value" :label="dict.value">
                {{dict.label}}
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="菜单权限">
            <el-checkbox v-model="menuExpand" @change="handleCheckedTreeExpand($event, 'menu')">展开/折叠</el-checkbox>
            <el-checkbox v-model="menuNodeAll" @change="handleCheckedTreeNodeAll($event,'menu')">全选/全不选</el-checkbox>
            <el-checkbox v-model="menuCheckStrictly" @change="handleCheckedTreeConnect($event,'menu')">父子联动</el-checkbox>
            <el-tree
              :data="menuOptions"
              show-checkbox
              class="tree-border"
              ref="menu"
              node-key="id"
              empty-text="加载中，请稍候"
              :props="defaultProps"
              :check-strictly="!menuCheckStrictly"
            >
            </el-tree>
          </el-form-item>
          <el-form-item label="备注" prop="remark">
            <el-input type="textarea" placeholder="请输入内容" v-model="form.remark"/>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button type="primary" @click="submitForm">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import { listRole, addRole, getRole, updateRole, delRole } from '@/api/system/role'
import { treeselect as menuTreeselect, roleMenuTreeselect } from '@/api/system/menu'

export default {
  name: 'role',
  dicts: ['sys_normal_disable'],
  data () {
    return {
      dateRange: [],
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        roleName: undefined,
        roleKey: undefined,
        status: undefined
      },
      roleList: [],
      total: 0,
      title: '',
      open: false,
      form: {},
      rules: {
        roleName: [
          { required: true, message: '角色名称不能为空', trigger: 'blur' }
        ],
        roleKey: [
          { required: true, message: '权限字符不能为空', trigger: 'blur' }
        ],
        roleSort: [
          { required: true, message: '角色排序不能为空', trigger: 'blur' }
        ]
      },
      menuOptions: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      menuExpand: false,
      menuNodeAll: false,
      menuCheckStrictly: false,
      ids: [],
      single: true,
      multiple: true,
      showSearch: true,
      columns: [
        { key: 0, label: '角色编号', visible: false },
        { key: 1, label: '角色名称', visible: true },
        { key: 2, label: '权限字符', visible: true },
        { key: 3, label: '显示顺序', visible: true },
        { key: 4, label: '状态', visible: true },
        { key: 5, label: '创建时间', visible: true }
      ]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    handleUpdate (row) {
      this.reset()
      const roleId = row.roleId || this.ids
      const roleMenu = this.getRoleMenuTreeselect(roleId)
      getRole(roleId).then(response => {
        this.form = response.data
        this.open = true
        roleMenu.then(res => {
          const checkedKeys = res.checkedKeys
          checkedKeys.forEach(v => {
            this.$refs.menu.setChecked(v, true, false)
          })
        })
      })
    },
    handleDelete (row) {
      const roleIds = row.roleId || this.ids
      this.$modal.confirm('是否删除角色编号"' + roleIds + '"的数据？').then(function () {
        return delRole(roleIds)
      }).then(() => {
        this.getList()
        this.$modal.msgSuccess('删除成功')
      }).catch(() => {})
    },
    handleExport () {
      this.download('system/role/export', {
        ...this.queryParams
      }, `role_${new Date().getTime()}.xlsx`)
    },
    getRoleMenuTreeselect (roleId) {
      return roleMenuTreeselect(roleId).then(response => {
        this.menuOptions = response.menus
        return response
      })
    },
    getList () {
      listRole(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
        this.roleList = response.rows
        this.total = response.total
      })
    },
    handleQuery () {
      this.queryParams.pageNum = 1
      this.getList()
    },
    resetQuery () {
      this.dateRange = []
      this.resetForm('queryForm')
      this.handleQuery()
    },
    handleAdd () {
      this.reset()
      this.getMenuTreeselect()
      this.open = true
      this.title = '添加角色'
    },
    cancel () {
      this.reset()
      this.open = false
    },
    submitForm () {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.form.roleId !== undefined) {
            this.form.menuIds = this.getMenuAllCheckedKeys()
            updateRole(this.form).then(response => {
              this.$modal.msgSuccess('修改成功')
              this.open = false
              this.getList()
            })
          } else {
            this.form.menuIds = this.getMenuAllCheckedKeys()
            addRole(this.form).then(response => {
              this.$modal.msgSuccess('新增成功')
              this.open = false
              this.getList()
            })
          }
        }
      })
    },
    reset () {
      this.menuExpand = false
      this.menuNodeAll = false
      this.menuCheckStrictly = true
      this.form = {
        menuIds: [],
        roleSort: 0,
        status: '0'
      }
      this.resetForm('form')
    },
    getMenuTreeselect () {
      menuTreeselect().then(response => {
        this.menuOptions = response.data
      })
    },
    handleCheckedTreeExpand (val, type) {
      if (type === 'menu') {
        const treeList = this.menuOptions
        for (let i = 0; i < treeList.length; i++) {
          this.$refs.menu.store.nodesMap[treeList[i].id].expanded = val
        }
      }
    },
    handleCheckedTreeNodeAll (val, type) {
      if (type === 'menu') {
        this.$refs.menu.setCheckedNodes(val ? this.menuOptions : [])
      }
    },
    handleCheckedTreeConnect (val, type) {
      if (type === 'menu') {
        this.menuCheckStrictly = val
      }
    },
    getMenuAllCheckedKeys () {
      const checkedKeys = this.$refs.menu.getCheckedKeys()
      const halfCheckedKeys = this.$refs.menu.getHalfCheckedKeys()
      checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys)
      return checkedKeys
    },
    handleSelectionChange (selection) {
      this.ids = selection.map(item => item.roleId)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    }
  }
}
</script>

<style scoped>

</style>
